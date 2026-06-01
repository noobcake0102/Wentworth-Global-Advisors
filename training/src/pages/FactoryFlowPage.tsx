import { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { Eye, Lightbulb, Ruler, BarChart2, Wrench, Award, ChevronRight, ChevronLeft, Check } from 'lucide-react';

// ─── Theme ───────────────────────────────────────────────────────────────────

const GOLD = '#c9a84c';
const SURFACE = 'rgba(255,255,255,0.03)';
const BORDER = 'rgba(201,168,76,0.15)';
const RED = '#ef4444';
const AMBER = '#f59e0b';
const GREEN = '#4caf82';

// ─── Domain Data ─────────────────────────────────────────────────────────────

interface Station {
  id: string;
  name: string;
  step: number;
  queueLevel: 'none' | 'low' | 'medium' | 'high' | 'critical';
  workerStatus: 'idle' | 'moderate' | 'busy' | 'overloaded';
  clues: string[];
  cycleTime: number;   // sec/unit
  capacity: number;    // units/hr  ← THE key metric; forming=88 is the bottleneck
  utilization: number; // 0-1
  downtime: number;    // fraction
  wip: number;         // queue depth
  defectRate: number;  // 0-1
}

const STATIONS: Station[] = [
  {
    id: 'receiving', name: 'Raw Material Receiving', step: 1,
    queueLevel: 'none', workerStatus: 'idle',
    clues: ['Dock workers standing idle between shipments', 'No input backlog visible', 'Forklifts parked'],
    cycleTime: 45, capacity: 120, utilization: 0.60, downtime: 0.04, wip: 3, defectRate: 0.01,
  },
  {
    id: 'forming', name: 'Bottle Forming', step: 2,
    queueLevel: 'critical', workerStatus: 'overloaded',
    clues: [
      '40+ bottles queued and stacking further',
      'Operator working flat-out — no rest moments',
      'Machine running continuously with brief unplanned stops',
      'Supervisor monitoring closely',
    ],
    cycleTime: 67, capacity: 88, utilization: 0.97, downtime: 0.16, wip: 44, defectRate: 0.04,
  },
  {
    id: 'filling', name: 'Filling Station', step: 3,
    queueLevel: 'medium', workerStatus: 'busy',
    clues: ['Moderate queue (~18 units)', 'Machine running steadily', 'Operator occasionally waits for bottles from Forming'],
    cycleTime: 40, capacity: 100, utilization: 0.82, downtime: 0.07, wip: 18, defectRate: 0.02,
  },
  {
    id: 'labeling', name: 'Labeling Station', step: 4,
    queueLevel: 'low', workerStatus: 'moderate',
    clues: ['Small queue (~8 units)', 'Machine at moderate pace', 'Operator has noticeable idle time'],
    cycleTime: 36, capacity: 110, utilization: 0.74, downtime: 0.05, wip: 8, defectRate: 0.04,
  },
  {
    id: 'packaging', name: 'Packaging', step: 5,
    queueLevel: 'medium', workerStatus: 'busy',
    clues: ['~20 units of WIP visible', 'Two workers busy but not overloaded', 'Periodically waiting for upstream product'],
    cycleTime: 50, capacity: 96, utilization: 0.87, downtime: 0.09, wip: 22, defectRate: 0.02,
  },
  {
    id: 'palletizing', name: 'Palletizing', step: 6,
    queueLevel: 'low', workerStatus: 'idle',
    clues: ['Workers waiting between pallets', 'Equipment idle — not running continuously', 'Low WIP (~10 units)'],
    cycleTime: 55, capacity: 106, utilization: 0.76, downtime: 0.08, wip: 10, defectRate: 0.01,
  },
  {
    id: 'shipping', name: 'Shipping', step: 7,
    queueLevel: 'none', workerStatus: 'idle',
    clues: ['Dock workers standing idle', 'Trucks waiting — not fully loaded', 'Very few units ready for dispatch'],
    cycleTime: 28, capacity: 130, utilization: 0.58, downtime: 0.03, wip: 2, defectRate: 0.00,
  },
];

const HYPOTHESES = [
  { id: 'h_forming', text: 'Bottle Forming is the bottleneck — the large queue and operator pace suggest it cannot keep up with demand.', correct: true },
  { id: 'h_filling', text: 'The Filling Station is the constraint — its cycle time limits how fast product moves downstream.', correct: false },
  { id: 'h_packaging', text: 'Packaging is understaffed — two workers cannot match upstream output rates.', correct: false },
  { id: 'h_downtime', text: 'Machine downtime across multiple stations is collectively causing the slowdown.', correct: false },
  { id: 'h_receiving', text: 'Raw material supply is inadequate — receiving cannot feed stations fast enough.', correct: false },
  { id: 'h_shipping', text: 'The constraint is downstream — shipping cannot process completed goods fast enough.', correct: false },
];

type ToolId = 'cycle' | 'throughput' | 'utilization' | 'downtime' | 'quality';

interface Tool {
  id: ToolId;
  name: string;
  desc: string;
  format: (s: Station) => string;
  label: string;
}

const TOOLS: Tool[] = [
  { id: 'cycle',       name: 'Cycle Time Tracker',          desc: 'Measures seconds per unit processed',       label: 'Cycle Time',   format: s => `${s.cycleTime}s/unit` },
  { id: 'throughput',  name: 'Throughput Counter',          desc: 'Counts units produced per hour',            label: 'Capacity',     format: s => `${s.capacity} u/hr` },
  { id: 'utilization', name: 'Labour Utilisation Monitor',  desc: 'Tracks % of time workers are active',       label: 'Utilisation',  format: s => `${Math.round(s.utilization * 100)}%` },
  { id: 'downtime',    name: 'Downtime Logger',             desc: 'Records % of time machine is stopped',      label: 'Downtime',     format: s => `${Math.round(s.downtime * 100)}%` },
  { id: 'quality',     name: 'Quality Inspector',           desc: 'Measures defect rate at station',           label: 'Defect Rate',  format: s => `${(s.defectRate * 100).toFixed(1)}%` },
];

const MEASUREMENT_BUDGET = 5;

interface Intervention {
  id: string;
  name: string;
  desc: string;
  cost: number;
  targetStation?: string;
  rootCause: boolean;
  throughput: number;
  efficiency: number;
  leadtime: number;
}

const INTERVENTIONS: Intervention[] = [
  { id: 'maint',     name: 'Preventive Maintenance — Bottle Forming',   desc: 'Scheduled maintenance to cut unplanned downtime at Forming.',                    cost: 2, targetStation: 'forming',   rootCause: true,  throughput: 12, efficiency: 8,  leadtime: 15 },
  { id: 'smed',      name: 'Reduce Setup Time — Bottle Forming (SMED)', desc: 'Apply SMED to slash changeover time at the forming station.',                    cost: 2, targetStation: 'forming',   rootCause: true,  throughput: 7,  efficiency: 6,  leadtime: 9  },
  { id: 'dbr',       name: 'Drum-Buffer-Rope Scheduling',               desc: 'Pace all stations to Bottle Forming output; stop overproducing upstream.',        cost: 1, targetStation: undefined,   rootCause: true,  throughput: 7,  efficiency: 9,  leadtime: 11 },
  { id: 'rebalance', name: 'Rebalance Workstation Tasks',               desc: 'Shift light tasks away from Forming operator to relieve the constraint.',         cost: 1, targetStation: 'forming',   rootCause: true,  throughput: 5,  efficiency: 6,  leadtime: 7  },
  { id: 'crosstrain',name: 'Cross-Train Employees',                     desc: 'Train workers on multiple stations for flexible redeployment.',                   cost: 2, targetStation: undefined,   rootCause: true,  throughput: 5,  efficiency: 10, leadtime: 6  },
  { id: 'upgrade',   name: 'Upgrade Forming Equipment',                 desc: 'Purchase high-speed forming machine with lower cycle time and higher uptime.',    cost: 3, targetStation: 'forming',   rootCause: true,  throughput: 20, efficiency: 13, leadtime: 25 },
  { id: 'labor_f',   name: 'Add Operator — Bottle Forming',             desc: 'Assign a second operator to assist at the forming machine.',                     cost: 1, targetStation: 'forming',   rootCause: false, throughput: 4,  efficiency: 2,  leadtime: 5  },
  { id: 'labor_p',   name: 'Add Labour — Packaging',                    desc: 'Hire additional workers for the packaging station.',                              cost: 1, targetStation: 'packaging',  rootCause: false, throughput: 1,  efficiency: 2,  leadtime: 2  },
  { id: 'material',  name: 'Improve Material Flow',                     desc: 'Optimise material handling routes to reduce movement waste.',                    cost: 1, targetStation: undefined,   rootCause: false, throughput: 2,  efficiency: 3,  leadtime: 3  },
];

const INTERVENTION_BUDGET = 4;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function queueColor(l: Station['queueLevel']) {
  return { none: '#374151', low: '#92400e', medium: '#b45309', high: '#dc2626', critical: RED }[l];
}
function queueLabel(l: Station['queueLevel']) {
  return { none: 'No queue', low: 'Low WIP', medium: 'Moderate WIP', high: 'High WIP', critical: 'CRITICAL WIP' }[l];
}
function workerColor(s: Station['workerStatus']) {
  return { idle: '#6b7280', moderate: '#9ca3af', busy: AMBER, overloaded: RED }[s];
}
function workerLabel(s: Station['workerStatus']) {
  return { idle: 'Workers idle', moderate: 'Workers moderate', busy: 'Workers busy', overloaded: 'Workers overloaded' }[s];
}

// ─── Phase Stepper ────────────────────────────────────────────────────────────

const PHASES = [
  { n: 1, label: 'Observe',    icon: Eye },
  { n: 2, label: 'Hypothesize', icon: Lightbulb },
  { n: 3, label: 'Measure',    icon: Ruler },
  { n: 4, label: 'Analyse',    icon: BarChart2 },
  { n: 5, label: 'Implement',  icon: Wrench },
  { n: 6, label: 'Results',    icon: Award },
];

function Stepper({ phase }: { phase: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 28 }}>
      {PHASES.map((p, i) => {
        const done = phase > p.n;
        const active = phase === p.n;
        const Icon = p.icon;
        return (
          <div key={p.n} style={{ display: 'flex', alignItems: 'center', flex: i < PHASES.length - 1 ? 1 : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: done ? GOLD : active ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.05)',
                border: `1.5px solid ${done || active ? GOLD : 'rgba(255,255,255,0.12)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: done ? '#111' : active ? GOLD : '#6b7280',
              }}>
                {done ? <Check size={14} /> : <Icon size={13} />}
              </div>
              <span style={{ fontSize: 9, color: active ? GOLD : done ? GOLD : '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                {p.label}
              </span>
            </div>
            {i < PHASES.length - 1 && (
              <div style={{ flex: 1, height: 1, background: phase > p.n ? GOLD : 'rgba(255,255,255,0.08)', margin: '0 4px', marginBottom: 16 }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Phase 1 — Observe ────────────────────────────────────────────────────────

function PhaseObserve({ observed, setObserved, onNext }: {
  observed: Set<string>;
  setObserved: (s: Set<string>) => void;
  onNext: () => void;
}) {
  const toggle = (id: string) => {
    const next = new Set(observed);
    next.has(id) ? next.delete(id) : next.add(id);
    setObserved(next);
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 6 }}>Gemba Walk — Observe the Factory Floor</h2>
        <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
          Walk through each station and record what you observe. You have not been given any metrics yet — only what a real walk-the-floor visit would reveal. Click each station to log your observations.
        </p>
      </div>

      {/* Flow arrows */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, marginBottom: 24, overflowX: 'auto', paddingBottom: 4 }}>
        {STATIONS.map((s, i) => (
          <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 110 }}>
            <button
              onClick={() => toggle(s.id)}
              style={{
                flex: 1, padding: '12px 10px', borderRadius: 6, cursor: 'pointer',
                background: observed.has(s.id) ? 'rgba(201,168,76,0.10)' : SURFACE,
                border: `1px solid ${observed.has(s.id) ? GOLD : BORDER}`,
                textAlign: 'left', transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 9, fontFamily: 'DM Sans, sans-serif', color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step {s.step}</span>
                {observed.has(s.id) && <Check size={11} color={GOLD} />}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#f0ece6', fontFamily: 'DM Sans, sans-serif', marginBottom: 6 }}>{s.name}</div>
              {observed.has(s.id) ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {s.clues.map((c, ci) => (
                    <div key={ci} style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4 }}>• {c}</div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>Click to observe →</div>
              )}
              {observed.has(s.id) && (
                <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 99, background: queueColor(s.queueLevel) + '22', border: `1px solid ${queueColor(s.queueLevel)}`, color: queueColor(s.queueLevel), fontFamily: 'DM Sans, sans-serif' }}>
                    {queueLabel(s.queueLevel)}
                  </span>
                  <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 99, background: workerColor(s.workerStatus) + '22', border: `1px solid ${workerColor(s.workerStatus)}`, color: workerColor(s.workerStatus), fontFamily: 'DM Sans, sans-serif' }}>
                    {workerLabel(s.workerStatus)}
                  </span>
                </div>
              )}
            </button>
            {i < STATIONS.length - 1 && (
              <div style={{ color: '#374151', padding: '0 4px', fontSize: 18, flexShrink: 0 }}>→</div>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>
          {observed.size} of {STATIONS.length} stations observed
        </span>
        <button
          onClick={onNext}
          disabled={observed.size < 4}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '9px 20px', borderRadius: 6, cursor: observed.size < 4 ? 'not-allowed' : 'pointer',
            background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}`,
            color: GOLD, fontSize: 12, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            opacity: observed.size < 4 ? 0.4 : 1,
          }}
        >
          Form Hypotheses <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Phase 2 — Hypothesize ───────────────────────────────────────────────────

function PhaseHypotheses({ selected, setSelected, onNext, onBack }: {
  selected: string[];
  setSelected: (s: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const toggle = (id: string) => {
    if (selected.includes(id)) setSelected(selected.filter(x => x !== id));
    else if (selected.length < 3) setSelected([...selected, id]);
  };

  return (
    <div>
      <h2 style={{ fontSize: 18, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 6 }}>Form Your Hypotheses</h2>
      <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, marginBottom: 20 }}>
        Based on your observations, select up to 3 hypotheses about the root cause of the facility's performance problems. Choose hypotheses that are specific, testable, and grounded in what you saw.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
        {HYPOTHESES.map(h => {
          const on = selected.includes(h.id);
          const disabled = !on && selected.length >= 3;
          return (
            <button
              key={h.id}
              onClick={() => toggle(h.id)}
              disabled={disabled}
              style={{
                textAlign: 'left', padding: '14px 16px', borderRadius: 6, cursor: disabled ? 'not-allowed' : 'pointer',
                background: on ? 'rgba(201,168,76,0.08)' : SURFACE,
                border: `1px solid ${on ? GOLD : BORDER}`,
                opacity: disabled ? 0.4 : 1, transition: 'all 0.15s',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 1,
                background: on ? GOLD : 'transparent', border: `1.5px solid ${on ? GOLD : '#374151'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {on && <Check size={11} color="#111" />}
              </div>
              <span style={{ fontSize: 13, color: on ? '#f0ece6' : '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>{h.text}</span>
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 6, cursor: 'pointer', background: 'transparent', border: `1px solid ${BORDER}`, color: '#6b7280', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>
          <ChevronLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={selected.length === 0}
          style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 6,
            cursor: selected.length === 0 ? 'not-allowed' : 'pointer',
            background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}`,
            color: GOLD, fontSize: 12, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            opacity: selected.length === 0 ? 0.4 : 1,
          }}
        >
          Place Measurement Tools <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Phase 3 — Measure ────────────────────────────────────────────────────────

function PhaseMeasure({ measurements, setMeasurements, onNext, onBack }: {
  measurements: { stationId: string; toolId: ToolId }[];
  setMeasurements: (m: { stationId: string; toolId: ToolId }[]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [activeTool, setActiveTool] = useState<ToolId | null>(null);
  const used = measurements.length;
  const remaining = MEASUREMENT_BUDGET - used;

  const place = (stationId: string) => {
    if (!activeTool || remaining === 0) return;
    if (measurements.find(m => m.stationId === stationId && m.toolId === activeTool)) return;
    setMeasurements([...measurements, { stationId, toolId: activeTool }]);
  };

  const remove = (stationId: string, toolId: ToolId) => {
    setMeasurements(measurements.filter(m => !(m.stationId === stationId && m.toolId === toolId)));
  };

  return (
    <div>
      <h2 style={{ fontSize: 18, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 6 }}>Place Measurement Tools</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, flex: 1 }}>
          You have a limited budget of <strong style={{ color: GOLD }}>{MEASUREMENT_BUDGET} tool placements</strong>. Choose where to deploy each tool — poor placement wastes budget; well-targeted placement reveals high-value data.
        </p>
        <div style={{ flexShrink: 0, padding: '8px 14px', borderRadius: 6, background: remaining > 0 ? 'rgba(201,168,76,0.08)' : 'rgba(239,68,68,0.08)', border: `1px solid ${remaining > 0 ? GOLD : RED}` }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: remaining > 0 ? GOLD : RED, fontFamily: 'DM Sans, sans-serif' }}>{remaining}</span>
          <span style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', display: 'block', textAlign: 'center' }}>remaining</span>
        </div>
      </div>

      {/* Tool picker */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
          1. Select a tool
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {TOOLS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTool(activeTool === t.id ? null : t.id)}
              style={{
                padding: '8px 14px', borderRadius: 6, cursor: 'pointer',
                background: activeTool === t.id ? 'rgba(201,168,76,0.12)' : SURFACE,
                border: `1px solid ${activeTool === t.id ? GOLD : BORDER}`,
                color: activeTool === t.id ? GOLD : '#9ca3af',
                fontSize: 12, fontFamily: 'DM Sans, sans-serif',
                transition: 'all 0.15s',
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
        {activeTool && (
          <div style={{ marginTop: 8, fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>
            {TOOLS.find(t => t.id === activeTool)?.desc} — now click a station below to place it.
          </div>
        )}
      </div>

      {/* Station grid */}
      <div style={{ marginBottom: 8, fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        2. Click a station to deploy
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, marginBottom: 24 }}>
        {STATIONS.map(s => {
          const placed = measurements.filter(m => m.stationId === s.id);
          const alreadyPlaced = activeTool ? measurements.find(m => m.stationId === s.id && m.toolId === activeTool) : null;
          const canPlace = activeTool && remaining > 0 && !alreadyPlaced;
          return (
            <div
              key={s.id}
              onClick={() => canPlace && place(s.id)}
              style={{
                padding: '12px 14px', borderRadius: 6,
                background: canPlace ? 'rgba(201,168,76,0.05)' : SURFACE,
                border: `1px solid ${alreadyPlaced ? GOLD : canPlace ? 'rgba(201,168,76,0.3)' : BORDER}`,
                cursor: canPlace ? 'pointer' : 'default',
                transition: 'all 0.15s',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 600, color: '#f0ece6', fontFamily: 'DM Sans, sans-serif', marginBottom: 8 }}>{s.name}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {placed.map(m => (
                  <button
                    key={m.toolId}
                    onClick={(e) => { e.stopPropagation(); remove(m.stationId, m.toolId); }}
                    style={{
                      fontSize: 9, padding: '2px 6px', borderRadius: 99,
                      background: 'rgba(201,168,76,0.15)', border: `1px solid ${GOLD}`,
                      color: GOLD, fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 3,
                    }}
                    title="Click to remove"
                  >
                    {TOOLS.find(t => t.id === m.toolId)?.name.split(' ')[0]} ×
                  </button>
                ))}
                {placed.length === 0 && <span style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>No tools placed</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 6, cursor: 'pointer', background: 'transparent', border: `1px solid ${BORDER}`, color: '#6b7280', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>
          <ChevronLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={used === 0}
          style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 6,
            cursor: used === 0 ? 'not-allowed' : 'pointer',
            background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}`,
            color: GOLD, fontSize: 12, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            opacity: used === 0 ? 0.4 : 1,
          }}
        >
          Analyse Data <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Phase 4 — Analyse ────────────────────────────────────────────────────────

function PhaseAnalyse({ measurements, identified, setIdentified, onNext, onBack }: {
  measurements: { stationId: string; toolId: ToolId }[];
  identified: string;
  setIdentified: (s: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  // Build table: stations that have at least one measurement
  const measuredStations = STATIONS.filter(s => measurements.some(m => m.stationId === s.id));

  return (
    <div>
      <h2 style={{ fontSize: 18, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 6 }}>Analyse the Data</h2>
      <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, marginBottom: 20 }}>
        Your measurement tools have returned data for the stations you selected. Review the results and identify the system constraint.
      </p>

      {measuredStations.length === 0 ? (
        <div style={{ padding: 20, borderRadius: 6, border: `1px solid ${BORDER}`, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', fontSize: 13, marginBottom: 24 }}>
          No measurement data — go back and place tools.
        </div>
      ) : (
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans, sans-serif', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: '#6b7280', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Station</th>
                {TOOLS.map(t => (
                  <th key={t.id} style={{ textAlign: 'center', padding: '8px 12px', color: '#6b7280', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {measuredStations.map(s => (
                <tr key={s.id} style={{ borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                  <td style={{ padding: '10px 12px', color: '#f0ece6', fontWeight: 500 }}>{s.name}</td>
                  {TOOLS.map(t => {
                    const placed = measurements.find(m => m.stationId === s.id && m.toolId === t.id);
                    if (!placed) return <td key={t.id} style={{ padding: '10px 12px', textAlign: 'center', color: '#374151' }}>—</td>;
                    const val = t.format(s);
                    // Highlight concerning values
                    let color = '#9ca3af';
                    if (t.id === 'utilization' && s.utilization > 0.90) color = RED;
                    else if (t.id === 'utilization' && s.utilization > 0.80) color = AMBER;
                    if (t.id === 'downtime' && s.downtime > 0.12) color = RED;
                    else if (t.id === 'downtime' && s.downtime > 0.07) color = AMBER;
                    if (t.id === 'throughput' && s.capacity === Math.min(...STATIONS.map(x => x.capacity))) color = RED;
                    return (
                      <td key={t.id} style={{ padding: '10px 12px', textAlign: 'center', color, fontWeight: color !== '#9ca3af' ? 600 : 400 }}>
                        {val}
                        {color === RED && ' ⚠'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginBottom: 24, padding: '16px 18px', borderRadius: 6, background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
          Based on the data, identify the system constraint:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {STATIONS.map(s => (
            <label key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <input
                type="radio"
                name="constraint"
                value={s.id}
                checked={identified === s.id}
                onChange={() => setIdentified(s.id)}
                style={{ accentColor: GOLD }}
              />
              <span style={{ fontSize: 13, color: identified === s.id ? '#f0ece6' : '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>
                {s.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 6, cursor: 'pointer', background: 'transparent', border: `1px solid ${BORDER}`, color: '#6b7280', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>
          <ChevronLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!identified}
          style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 6,
            cursor: !identified ? 'not-allowed' : 'pointer',
            background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}`,
            color: GOLD, fontSize: 12, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            opacity: !identified ? 0.4 : 1,
          }}
        >
          Select Interventions <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Phase 5 — Implement ──────────────────────────────────────────────────────

function PhaseImplement({ selected, setSelected, onNext, onBack }: {
  selected: string[];
  setSelected: (s: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const usedBudget = selected.reduce((sum, id) => {
    const iv = INTERVENTIONS.find(i => i.id === id);
    return sum + (iv?.cost ?? 0);
  }, 0);
  const remaining = INTERVENTION_BUDGET - usedBudget;

  const toggle = (iv: Intervention) => {
    if (selected.includes(iv.id)) {
      setSelected(selected.filter(x => x !== iv.id));
    } else if (remaining >= iv.cost) {
      setSelected([...selected, iv.id]);
    }
  };

  const costDots = (cost: number) => Array.from({ length: 3 }, (_, i) => (
    <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: i < cost ? GOLD : 'rgba(255,255,255,0.1)' }} />
  ));

  return (
    <div>
      <h2 style={{ fontSize: 18, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 6 }}>Implement Improvements</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, flex: 1 }}>
          You have a budget of <strong style={{ color: GOLD }}>{INTERVENTION_BUDGET} points</strong>. Select interventions to address the root cause. Be mindful: some options treat symptoms; others fix the underlying problem.
        </p>
        <div style={{ flexShrink: 0, padding: '8px 14px', borderRadius: 6, background: remaining > 0 ? 'rgba(201,168,76,0.08)' : 'rgba(239,68,68,0.08)', border: `1px solid ${remaining > 0 ? GOLD : RED}` }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: remaining > 0 ? GOLD : RED, fontFamily: 'DM Sans, sans-serif' }}>{remaining}</span>
          <span style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', display: 'block', textAlign: 'center' }}>pts left</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
        {INTERVENTIONS.map(iv => {
          const on = selected.includes(iv.id);
          const affordable = remaining >= iv.cost || on;
          return (
            <button
              key={iv.id}
              onClick={() => toggle(iv)}
              disabled={!affordable}
              style={{
                textAlign: 'left', padding: '14px 16px', borderRadius: 6,
                cursor: affordable ? 'pointer' : 'not-allowed',
                background: on ? 'rgba(201,168,76,0.08)' : SURFACE,
                border: `1px solid ${on ? GOLD : BORDER}`,
                opacity: !affordable ? 0.35 : 1,
                transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: on ? GOLD : '#f0ece6', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>{iv.name}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>{iv.desc}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                  <div style={{ display: 'flex', gap: 3 }}>{costDots(iv.cost)}</div>
                  <span style={{ fontSize: 9, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>{iv.cost} pt{iv.cost !== 1 ? 's' : ''}</span>
                  {on && <Check size={14} color={GOLD} />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 6, cursor: 'pointer', background: 'transparent', border: `1px solid ${BORDER}`, color: '#6b7280', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>
          <ChevronLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={selected.length === 0}
          style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 6,
            cursor: selected.length === 0 ? 'not-allowed' : 'pointer',
            background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}`,
            color: GOLD, fontSize: 12, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            opacity: selected.length === 0 ? 0.4 : 1,
          }}
        >
          See Results <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Phase 6 — Results ───────────────────────────────────────────────────────

function computeScores(opts: {
  hypotheses: string[];
  measurements: { stationId: string; toolId: ToolId }[];
  identified: string;
  interventions: string[];
}) {
  // Evidence before action (30): did they measure forming?
  const measuredForming = opts.measurements.filter(m => m.stationId === 'forming');
  const evidenceScore = measuredForming.length >= 3 ? 100 : measuredForming.length >= 2 ? 80 : measuredForming.length >= 1 ? 55 : 15;

  // Hypothesis quality (15): did they include h_forming?
  const hypoScore = opts.hypotheses.includes('h_forming') ? 100 : opts.hypotheses.length > 0 ? 30 : 0;

  // Measurement efficiency (15): proportion of placements that hit forming
  const measEff = opts.measurements.length > 0
    ? Math.round((measuredForming.length / opts.measurements.length) * 100)
    : 0;

  // Constraint identification (20)
  const constraintScore = opts.identified === 'forming' ? 100 : 0;

  // Root cause vs symptom + interventions (20)
  const chosen = INTERVENTIONS.filter(i => opts.interventions.includes(i.id));
  const rootCauseRatio = chosen.length > 0 ? chosen.filter(i => i.rootCause).length / chosen.length : 0;
  const targetRatio = chosen.length > 0 ? chosen.filter(i => i.targetStation === 'forming' || i.targetStation === undefined).length / chosen.length : 0;
  const interventionScore = Math.round((rootCauseRatio * 0.6 + targetRatio * 0.4) * 100);

  // Outcome metrics (10): sum gains
  const throughputGain = Math.min(chosen.reduce((s, i) => s + i.throughput, 0), 30);
  const efficiencyGain = Math.min(chosen.reduce((s, i) => s + i.efficiency, 0), 25);
  const leadtimeGain = Math.min(chosen.reduce((s, i) => s + i.leadtime, 0), 35);

  const metThroughput = throughputGain >= 15;
  const metLeadtime = leadtimeGain >= 20;
  const metEfficiency = efficiencyGain >= 10;
  const outcomeScore = ((metThroughput ? 1 : 0) + (metLeadtime ? 1 : 0) + (metEfficiency ? 1 : 0)) / 3 * 100;

  const overall = Math.round(
    evidenceScore * 0.30 +
    hypoScore * 0.15 +
    measEff * 0.15 +
    constraintScore * 0.20 +
    interventionScore * 0.10 +
    outcomeScore * 0.10
  );

  return { evidenceScore, hypoScore, measEff, constraintScore, interventionScore, outcomeScore, overall, throughputGain, efficiencyGain, leadtimeGain, metThroughput, metLeadtime, metEfficiency };
}

function ScoreBar({ value, label, weight }: { value: number; label: string; weight: string }) {
  const color = value >= 80 ? GREEN : value >= 50 ? AMBER : RED;
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>{label}</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>{weight}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color, fontFamily: 'DM Sans, sans-serif' }}>{Math.round(value)}%</span>
        </div>
      </div>
      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: 99, transition: 'width 0.6s ease' }} />
      </div>
    </div>
  );
}

function MetricCard({ label, gain, met, target }: { label: string; gain: number; met: boolean; target: string }) {
  return (
    <div style={{ padding: '14px 16px', borderRadius: 6, background: met ? 'rgba(76,175,130,0.08)' : 'rgba(239,68,68,0.06)', border: `1px solid ${met ? GREEN : RED}` }}>
      <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <span style={{ fontSize: 22, fontWeight: 700, color: met ? GREEN : RED, fontFamily: 'DM Sans, sans-serif' }}>+{gain}%</span>
          <span style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginLeft: 4 }}>gained</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>Target: {target}</div>
          <div style={{ fontSize: 11, color: met ? GREEN : RED, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{met ? '✓ Met' : '✗ Not met'}</div>
        </div>
      </div>
    </div>
  );
}

function PhaseResults({ hypotheses, measurements, identified, interventions, onRestart }: {
  hypotheses: string[];
  measurements: { stationId: string; toolId: ToolId }[];
  identified: string;
  interventions: string[];
  onRestart: () => void;
}) {
  const s = computeScores({ hypotheses, measurements, identified, interventions });

  const grade = s.overall >= 85 ? { label: 'Outstanding', color: GREEN } :
    s.overall >= 70 ? { label: 'Proficient', color: GOLD } :
    s.overall >= 50 ? { label: 'Developing', color: AMBER } :
    { label: 'Needs Work', color: RED };

  return (
    <div>
      <h2 style={{ fontSize: 18, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 16 }}>Simulation Results</h2>

      {/* Overall score */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '20px 24px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORDER}`, marginBottom: 24 }}>
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: grade.color, fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.overall}</div>
          <div style={{ fontSize: 11, color: grade.color, fontFamily: 'DM Sans, sans-serif', marginTop: 2 }}>{grade.label}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#f0ece6', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>
            The constraint was: <span style={{ color: identified === 'forming' ? GREEN : RED }}>
              {STATIONS.find(st => st.id === identified)?.name ?? 'Not identified'}
            </span>
          </div>
          <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
            {identified === 'forming'
              ? 'Correct — Bottle Forming was the system constraint. It had the lowest capacity (88 u/hr), highest utilisation (97%), and 16% unplanned downtime, creating cascading delays across the entire facility.'
              : 'The actual bottleneck was Bottle Forming — the lowest-capacity station (88 u/hr) with 97% utilisation and 16% downtime. Large WIP queues at Forming and idle workers at Shipping were the key signals.'}
          </div>
        </div>
      </div>

      {/* Scorecard */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Score Breakdown</div>
        <ScoreBar value={s.evidenceScore} label="Evidence before action" weight="30%" />
        <ScoreBar value={s.hypoScore} label="Hypothesis quality" weight="15%" />
        <ScoreBar value={s.measEff} label="Measurement efficiency" weight="15%" />
        <ScoreBar value={s.constraintScore} label="Correct constraint identification" weight="20%" />
        <ScoreBar value={s.interventionScore} label="Root-cause vs. symptom" weight="10%" />
        <ScoreBar value={s.outcomeScore} label="Outcome metrics" weight="10%" />
      </div>

      {/* Outcome metrics */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Before → After Metrics</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          <MetricCard label="Throughput" gain={s.throughputGain} met={s.metThroughput} target="+15%" />
          <MetricCard label="Lead Time" gain={s.leadtimeGain} met={s.metLeadtime} target="+20%" />
          <MetricCard label="Labour Efficiency" gain={s.efficiencyGain} met={s.metEfficiency} target="+10%" />
        </div>
      </div>

      {/* Debrief */}
      <div style={{ padding: '16px 18px', borderRadius: 6, background: 'rgba(201,168,76,0.05)', border: `1px solid ${BORDER}`, marginBottom: 24 }}>
        <div style={{ fontSize: 11, color: GOLD, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Learning Debrief</div>
        <div style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          <p style={{ marginBottom: 8 }}>
            <strong style={{ color: '#f0ece6' }}>Theory of Constraints</strong>: Every system has one constraint that limits overall throughput. Adding capacity anywhere else produces no improvement — and can actually increase WIP and obscure the true problem.
          </p>
          <p style={{ marginBottom: 8 }}>
            <strong style={{ color: '#f0ece6' }}>Lean signals</strong>: Large WIP queues immediately upstream and idle workers immediately downstream are the classic signatures of a bottleneck. Shipping workers idle while Forming workers overloaded — the system was shouting.
          </p>
          <p>
            <strong style={{ color: '#f0ece6' }}>Data before decisions</strong>: Cycle time alone is not enough — you need capacity (throughput), utilisation, and downtime together to confirm a constraint. A station with a long cycle time but low utilisation is <em>not</em> the bottleneck.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={onRestart}
          style={{
            padding: '10px 28px', borderRadius: 6, cursor: 'pointer',
            background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}`,
            color: GOLD, fontSize: 13, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
          }}
        >
          Restart Simulation
        </button>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function FactoryFlowPage() {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [observed, setObserved] = useState<Set<string>>(new Set());
  const [hypotheses, setHypotheses] = useState<string[]>([]);
  const [measurements, setMeasurements] = useState<{ stationId: string; toolId: ToolId }[]>([]);
  const [identified, setIdentified] = useState('');
  const [interventions, setInterventions] = useState<string[]>([]);

  const restart = () => {
    setPhase(1);
    setObserved(new Set());
    setHypotheses([]);
    setMeasurements([]);
    setIdentified('');
    setInterventions([]);
  };

  return (
    <AppLayout title="Factory Flow Challenge" noTopbar={false}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, color: GOLD, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>
            Operations Simulation · Wentworth Beverages Ltd.
          </div>
          <h1 style={{ fontSize: 26, fontFamily: 'Georgia, serif', color: '#f0ece6', marginBottom: 8 }}>Factory Flow Challenge</h1>
          <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, maxWidth: 680 }}>
            You have been engaged as an Operations Improvement Consultant. The facility is struggling with late deliveries, excess overtime, and growing WIP. Diagnose the root cause and improve throughput through evidence-based decision making.
          </p>
        </div>

        <Stepper phase={phase} />

        <div style={{ padding: '24px 28px', borderRadius: 8, background: SURFACE, border: `1px solid ${BORDER}` }}>
          {phase === 1 && <PhaseObserve observed={observed} setObserved={setObserved} onNext={() => setPhase(2)} />}
          {phase === 2 && <PhaseHypotheses selected={hypotheses} setSelected={setHypotheses} onNext={() => setPhase(3)} onBack={() => setPhase(1)} />}
          {phase === 3 && <PhaseMeasure measurements={measurements} setMeasurements={setMeasurements} onNext={() => setPhase(4)} onBack={() => setPhase(2)} />}
          {phase === 4 && <PhaseAnalyse measurements={measurements} identified={identified} setIdentified={setIdentified} onNext={() => setPhase(5)} onBack={() => setPhase(3)} />}
          {phase === 5 && <PhaseImplement selected={interventions} setSelected={setInterventions} onNext={() => setPhase(6)} onBack={() => setPhase(4)} />}
          {phase === 6 && <PhaseResults hypotheses={hypotheses} measurements={measurements} identified={identified} interventions={interventions} onRestart={restart} />}
        </div>
      </div>
    </AppLayout>
  );
}
