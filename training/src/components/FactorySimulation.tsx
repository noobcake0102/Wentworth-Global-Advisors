/**
 * FactorySimulation.tsx
 * Wentworth Factory Optimizer — Interactive Lean Six Sigma Simulation
 *
 * A self-contained React component that renders an animated factory floor
 * on HTML5 Canvas with a real-time Lean Six Sigma metrics dashboard,
 * DMAIC phase navigation, improvement action buttons, and educational modals.
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

// ─────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────

type DMAICPhase = 'define' | 'measure' | 'analyze' | 'improve' | 'control';
type UserLevel = 'yellow' | 'green' | 'black';
type ScenarioKey = 'baseline' | 'bottleneck' | 'quality' | 'throughput';
type ModalType = 'fishbone' | 'controlChart' | 'capability' | 'comparison' | null;

export interface Metrics {
  throughput: number;    // units / hour
  defectRate: number;    // 0–1
  cycleTime: number;     // minutes / unit
  oee: number;           // 0–1  (Availability × Performance × Quality)
  sigmaLevel: number;    // 1–6
  costPerUnit: number;   // USD
  wip: number;           // work-in-progress count on floor
  availability: number;  // 0–1
  performance: number;   // 0–1
  quality: number;       // 0–1
}

export interface ImprovementState {
  fiveS: number;           // 0–3 levels applied
  kaizen: number;          // 0–5 kaizen events
  pokaYoke: boolean;
  training: number;        // 0–3 levels
  maintenance: boolean;
  supplierUpgrade: boolean;
}

interface SimParams {
  machineEfficiency: number;  // 0–1
  workerSkill: number;        // 0–1
  materialQuality: number;    // 0–1
  variation: number;          // 0–1 (higher = more variation)
}

interface Product {
  id: number;
  segmentProgress: number; // 0–1 within current conveyor segment
  segmentIndex: number;    // which segment (0=entry→Assembly, 1=Assembly→Testing, …)
  isDefect: boolean;
  waitTicks: number;       // ticks spent waiting at station
}

interface StationConfig {
  label: string;
  color: string;
  accentColor: string;
  baseProcessTicks: number; // ticks to process one product at 100% efficiency
}

interface ScenarioConfig {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  params: SimParams;
  targetSigma: number;
}

export interface FactorySimulationProps {
  onSessionComplete?: (metrics: Metrics, improvements: ImprovementState) => void;
  userLevel?: UserLevel;
  scenario?: ScenarioKey;
}

// ─────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────

const CANVAS_W = 880;
const CANVAS_H = 340;
const CONVEYOR_Y = 170;
const STATION_W = 90;
const STATION_H = 80;
const PRODUCT_R = 8;

/** X positions (centre) for each of 4 stations */
const STATION_X = [160, 350, 540, 730];

/** Conveyor segment start/end x values (product travel path) */
const SEGMENTS: [number, number][] = [
  [30, STATION_X[0] - STATION_W / 2],    // entry → Assembly
  [STATION_X[0] + STATION_W / 2, STATION_X[1] - STATION_W / 2], // Assembly → Testing
  [STATION_X[1] + STATION_W / 2, STATION_X[2] - STATION_W / 2], // Testing → QC
  [STATION_X[2] + STATION_W / 2, STATION_X[3] - STATION_W / 2], // QC → Packaging
  [STATION_X[3] + STATION_W / 2, CANVAS_W - 30],                 // Packaging → exit
];

const STATIONS: StationConfig[] = [
  { label: 'Assembly',   color: '#1e3a5f', accentColor: '#3b82f6', baseProcessTicks: 40 },
  { label: 'Testing',    color: '#1a3d2b', accentColor: '#22c55e', baseProcessTicks: 55 },
  { label: 'QC',         color: '#3d2a1a', accentColor: '#f97316', baseProcessTicks: 30 },
  { label: 'Packaging',  color: '#2d1b4e', accentColor: '#a855f7', baseProcessTicks: 25 },
];

const SCENARIOS: Record<ScenarioKey, ScenarioConfig> = {
  baseline: {
    name: 'Baseline Factory',
    description: 'A typical factory with moderate inefficiencies. Learn DMAIC by bringing Sigma Level from 2.8 to 4.0.',
    difficulty: 'Beginner',
    params: { machineEfficiency: 0.72, workerSkill: 0.65, materialQuality: 0.80, variation: 0.35 },
    targetSigma: 4.0,
  },
  bottleneck: {
    name: 'Bottleneck Crisis',
    description: 'The Testing station is severely overloaded. Identify and resolve the bottleneck to restore flow.',
    difficulty: 'Intermediate',
    params: { machineEfficiency: 0.60, workerSkill: 0.70, materialQuality: 0.85, variation: 0.45 },
    targetSigma: 3.5,
  },
  quality: {
    name: 'Defect Epidemic',
    description: 'Defect rates are unacceptably high. Deploy poka-yoke and supplier upgrades to reach Six Sigma quality.',
    difficulty: 'Intermediate',
    params: { machineEfficiency: 0.80, workerSkill: 0.60, materialQuality: 0.55, variation: 0.55 },
    targetSigma: 5.0,
  },
  throughput: {
    name: 'Throughput Maximiser',
    description: 'Capacity is the constraint. Apply Lean tools to double throughput without sacrificing quality.',
    difficulty: 'Advanced',
    params: { machineEfficiency: 0.55, workerSkill: 0.55, materialQuality: 0.75, variation: 0.40 },
    targetSigma: 4.5,
  },
};

const DMAIC_PHASES: { key: DMAICPhase; label: string; color: string; description: string }[] = [
  { key: 'define',   label: 'Define',   color: '#3b82f6', description: 'Identify the problem, scope, and customer requirements (CTQ). Set project goals and timeline.' },
  { key: 'measure',  label: 'Measure',  color: '#22c55e', description: 'Collect baseline data. Measure current process capability, defect rates, and cycle time.' },
  { key: 'analyze',  label: 'Analyze',  color: '#f59e0b', description: 'Identify root causes of variation and defects. Use Fishbone, Pareto, and process mapping.' },
  { key: 'improve',  label: 'Improve',  color: '#f97316', description: 'Design and implement solutions. Apply 5S, Kaizen, poka-yoke, and other Lean tools.' },
  { key: 'control',  label: 'Control',  color: '#a855f7', description: 'Sustain gains with control charts, SOPs, and monitoring systems. Hand off to operations.' },
];

const IMPROVEMENT_COSTS: Record<string, number> = {
  fiveS: 15,
  kaizen: 20,
  pokaYoke: 35,
  training: 25,
  maintenance: 30,
  supplierUpgrade: 50,
};

// ─────────────────────────────────────────────
//  LSS CALCULATION HELPERS
// ─────────────────────────────────────────────

/** Approximate inverse normal CDF for sigma conversion (Beasley-Springer-Moro) */
function normInv(p: number): number {
  if (p <= 0) return -6;
  if (p >= 1) return 6;
  const a = [2.50662823884, -18.61500062529, 41.39119773534, -25.44106049637];
  const b = [-8.47351093090, 23.08336743743, -21.06224101826, 3.13082909833];
  const c = [0.3374754822726147, 0.9761690190917186, 0.1607979714918209,
             0.0276438810333863, 0.0038405729373609, 0.0003951896511349,
             0.0000321767881768, 0.0000002888167364, 0.0000003960315187];
  const y = p - 0.5;
  if (Math.abs(y) < 0.42) {
    const r = y * y;
    return y * (((a[3] * r + a[2]) * r + a[1]) * r + a[0]) /
               ((((b[3] * r + b[2]) * r + b[1]) * r + b[0]) * r + 1);
  }
  let r = p < 0.5 ? p : 1 - p;
  r = Math.sqrt(-Math.log(r));
  let x = c[0];
  for (let i = 1; i < 9; i++) x = x * r + c[i];
  return p < 0.5 ? -x : x;
}

/** Convert defect rate (DPMO-equivalent) to sigma level with 1.5σ shift */
function sigmaFromDefectRate(rate: number): number {
  const dpmo = Math.max(0.000001, Math.min(0.999999, rate));
  return Math.max(1, Math.min(6, normInv(1 - dpmo) + 1.5));
}

function computeMetrics(params: SimParams, improvements: ImprovementState, _ticks: number): Metrics {
  // Apply improvement multipliers
  const fiveSBoost     = 1 + improvements.fiveS * 0.06;
  const kaizenBoost    = 1 + improvements.kaizen * 0.04;
  const trainingBoost  = 1 + improvements.training * 0.08;
  const maintenanceBoost = improvements.maintenance ? 1.12 : 1;
  const pokaYokeBoost  = improvements.pokaYoke ? 0.35 : 1; // reduces defect rate
  const supplierBoost  = improvements.supplierUpgrade ? 1.25 : 1;

  const machineEff = Math.min(0.98, params.machineEfficiency * maintenanceBoost * fiveSBoost);
  const workerEff  = Math.min(0.98, params.workerSkill * trainingBoost);
  const matQual    = Math.min(0.99, params.materialQuality * supplierBoost);
  const variation  = Math.max(0.02, params.variation / (fiveSBoost * kaizenBoost));

  // OEE components
  const availability  = Math.min(0.99, machineEff * (1 - variation * 0.2));
  const performance   = Math.min(0.99, workerEff * kaizenBoost);
  const qualityRate   = Math.min(0.9999, matQual * workerEff * (improvements.pokaYoke ? 1 : 1 - variation * 0.4));
  const oee           = availability * performance * qualityRate;

  // Defect rate
  const baseDefectRate = (1 - matQual) * (1 - workerEff) * (1 + variation);
  const defectRate = Math.min(0.45, Math.max(0.0001, baseDefectRate * pokaYokeBoost));

  // Throughput: base 60 units/hr, modified by OEE
  const throughput = Math.round(60 * oee * (1 - defectRate));

  // Cycle time in minutes (Little's Law-inspired: higher WIP and lower throughput = longer CT)
  const baseWip   = Math.round(8 + variation * 12);
  const cycleTime = throughput > 0 ? (baseWip / (throughput / 60)) : 999;

  // Sigma level
  const sigmaLevel = sigmaFromDefectRate(defectRate);

  // Cost/unit: lower throughput and higher defects = higher cost
  const baseCost = 18;
  const costPerUnit = baseCost * (1 / oee) * (1 + defectRate * 2);

  return {
    throughput,
    defectRate,
    cycleTime: Math.round(cycleTime * 10) / 10,
    oee,
    sigmaLevel: Math.round(sigmaLevel * 10) / 10,
    costPerUnit: Math.round(costPerUnit * 100) / 100,
    wip: baseWip,
    availability,
    performance,
    quality: qualityRate,
  };
}

// ─────────────────────────────────────────────
//  CANVAS DRAWING
// ─────────────────────────────────────────────

function drawFactory(
  ctx: CanvasRenderingContext2D,
  products: Product[],
  dashOffset: number,
  params: SimParams,
  improvements: ImprovementState,
  stationQueues: number[],
) {
  const W = CANVAS_W;
  const H = CANVAS_H;

  // Background
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, W, H);

  // Grid lines (subtle)
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // ── Conveyor belt ──
  const beltTop    = CONVEYOR_Y - 18;
  const beltBot    = CONVEYOR_Y + 18;

  // Belt body
  ctx.fillStyle = '#334155';
  ctx.beginPath();
  ctx.roundRect(20, beltTop, W - 40, beltBot - beltTop, 4);
  ctx.fill();

  // Belt edge lines
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(20, beltTop);   ctx.lineTo(W - 20, beltTop);   ctx.stroke();
  ctx.beginPath(); ctx.moveTo(20, beltBot);   ctx.lineTo(W - 20, beltBot);   ctx.stroke();

  // Animated chevron marks on belt
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 2;
  ctx.setLineDash([14, 18]);
  ctx.lineDashOffset = -dashOffset;
  ctx.beginPath();
  ctx.moveTo(20, CONVEYOR_Y);
  ctx.lineTo(W - 20, CONVEYOR_Y);
  ctx.stroke();
  ctx.setLineDash([]);

  // ── Stations ──
  STATIONS.forEach((st, i) => {
    const cx = STATION_X[i];
    const top = CONVEYOR_Y - STATION_H / 2 - 10;
    const left = cx - STATION_W / 2;

    // Station body
    ctx.fillStyle = st.color;
    ctx.strokeStyle = st.accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(left, top, STATION_W, STATION_H, 6);
    ctx.fill();
    ctx.stroke();

    // Glow on bottleneck
    if (stationQueues[i] >= 3) {
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 16;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(left, top, STATION_W, STATION_H, 6);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Station label
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(st.label, cx, top + 18);

    // Accent bar
    ctx.fillStyle = st.accentColor;
    ctx.fillRect(left + 8, top + 24, STATION_W - 16, 3);

    // Efficiency meter
    const eff = params.machineEfficiency * (improvements.maintenance ? 1.12 : 1);
    const barW = (STATION_W - 16) * Math.min(1, eff);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(left + 8, top + 32, STATION_W - 16, 8);
    ctx.fillStyle = eff > 0.8 ? '#22c55e' : eff > 0.6 ? '#f59e0b' : '#ef4444';
    ctx.fillRect(left + 8, top + 32, barW, 8);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px system-ui, sans-serif';
    ctx.fillText(`${Math.round(eff * 100)}% eff`, cx, top + 50);

    // Queue count
    if (stationQueues[i] > 0) {
      ctx.fillStyle = stationQueues[i] >= 3 ? '#ef4444' : '#f59e0b';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.fillText(`Q:${stationQueues[i]}`, cx, top + 64);
    }
  });

  // ── Products on conveyor ──
  products.forEach(p => {
    // Calculate pixel position
    let px: number;
    const seg = SEGMENTS[p.segmentIndex];
    if (seg) {
      px = seg[0] + (seg[1] - seg[0]) * p.segmentProgress;
    } else {
      return; // off canvas
    }
    const py = CONVEYOR_Y;

    // Shadow
    ctx.shadowColor = p.isDefect ? '#ef444488' : '#3b82f688';
    ctx.shadowBlur = 8;

    // Product circle
    ctx.beginPath();
    ctx.arc(px, py, PRODUCT_R, 0, Math.PI * 2);
    ctx.fillStyle = p.isDefect ? '#ef4444' : '#3b82f6';
    ctx.fill();
    ctx.strokeStyle = p.isDefect ? '#fca5a5' : '#93c5fd';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Defect X marker
    if (p.isDefect) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px - 4, py - 4); ctx.lineTo(px + 4, py + 4);
      ctx.moveTo(px + 4, py - 4); ctx.lineTo(px - 4, py + 4);
      ctx.stroke();
    }
  });

  // ── Input / Output arrows ──
  const arrowY = CONVEYOR_Y;
  ctx.fillStyle = '#64748b';
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('IN', 18, arrowY + 4);
  ctx.fillText('OUT', W - 18, arrowY + 4);

  // ── Legend ──
  const legendY = H - 28;
  ctx.fillStyle = '#3b82f6';
  ctx.beginPath(); ctx.arc(24, legendY, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#94a3b8';
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Good unit', 34, legendY + 4);

  ctx.fillStyle = '#ef4444';
  ctx.beginPath(); ctx.arc(110, legendY, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillText('Defect', 120, legendY + 4);

  ctx.fillStyle = '#ef4444';
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(190, legendY - 6, 12, 12, 2);
  ctx.stroke();
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Bottleneck station', 206, legendY + 4);
}

// ─────────────────────────────────────────────
//  MODAL COMPONENTS
// ─────────────────────────────────────────────

function FishboneModal({ onClose }: { onClose: () => void }) {
  const causes = {
    'Man':      ['Inadequate training', 'Fatigue / shift length', 'Skill gaps'],
    'Machine':  ['Worn tooling', 'Poor calibration', 'Unplanned downtime'],
    'Material': ['Supplier variability', 'Storage conditions', 'Incoming inspection gaps'],
    'Method':   ['No standard work', 'Complex setup', 'Missing poka-yoke'],
    'Measurement': ['Gauge R&R issues', 'Inconsistent sampling', 'No SPC'],
    'Environment': ['Temperature variation', 'Vibration', 'Contamination'],
  };
  const colors: Record<string, string> = {
    Man: '#3b82f6', Machine: '#22c55e', Material: '#f97316',
    Method: '#a855f7', Measurement: '#f59e0b', Environment: '#ec4899',
  };
  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={{ ...styles.modal, maxWidth: 720 }} onClick={e => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>Fishbone (Ishikawa) Diagram</span>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: 16, fontSize: 13 }}>
          Root cause analysis for high defect rates. The 6M framework identifies potential causes across six categories.
        </p>
        <svg viewBox="0 0 680 320" style={{ width: '100%', background: '#0f172a', borderRadius: 8, border: '1px solid #334155' }}>
          {/* Spine */}
          <line x1="60" y1="160" x2="620" y2="160" stroke="#475569" strokeWidth="3"/>
          {/* Effect box */}
          <rect x="560" y="135" width="110" height="50" rx="6" fill="#1e293b" stroke="#ef4444" strokeWidth="2"/>
          <text x="615" y="158" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">HIGH</text>
          <text x="615" y="174" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">DEFECT RATE</text>

          {/* Arrowhead */}
          <polygon points="615,160 600,153 600,167" fill="#ef4444"/>

          {/* Bones — top row: left, mid, right */}
          {[['Man', 120, 'top'], ['Machine', 310, 'top'], ['Material', 500, 'top']].map(([label, x, side]) => (
            <g key={label as string}>
              <line x1={Number(x)} y1={side === 'top' ? 70 : 250} x2={Number(x) + 60} y2="160"
                stroke={colors[label as string]} strokeWidth="2"/>
              <text x={Number(x) - 5} y={side === 'top' ? 62 : 262}
                textAnchor="middle" fill={colors[label as string]} fontSize="12" fontWeight="bold">{label}</text>
              {(causes as any)[label as string].map((c: string, i: number) => (
                <g key={c}>
                  <line
                    x1={Number(x) + i * 12}
                    y1={side === 'top' ? 70 + i * 16 : 250 - i * 16}
                    x2={Number(x) + 30 + i * 6}
                    y2="160"
                    stroke={colors[label as string]} strokeWidth="1" opacity="0.6"/>
                  <text
                    x={Number(x) - 48 + i * 4}
                    y={side === 'top' ? 70 + i * 16 - 4 : 250 - i * 16 + 4}
                    fill="#94a3b8" fontSize="9">{c}</text>
                </g>
              ))}
            </g>
          ))}
          {[['Method', 120, 'bottom'], ['Measurement', 310, 'bottom'], ['Environment', 500, 'bottom']].map(([label, x, _side]) => (
            <g key={label as string}>
              <line x1={Number(x)} y1={250} x2={Number(x) + 60} y2="160"
                stroke={colors[label as string]} strokeWidth="2"/>
              <text x={Number(x) - 5} y={262}
                textAnchor="middle" fill={colors[label as string]} fontSize="12" fontWeight="bold">{label}</text>
              {(causes as any)[label as string].map((c: string, i: number) => (
                <g key={c}>
                  <line
                    x1={Number(x) + i * 12}
                    y1={250 - i * 16}
                    x2={Number(x) + 30 + i * 6}
                    y2="160"
                    stroke={colors[label as string]} strokeWidth="1" opacity="0.6"/>
                  <text
                    x={Number(x) - 48 + i * 4}
                    y={250 - i * 16 + 12}
                    fill="#94a3b8" fontSize="9">{c}</text>
                </g>
              ))}
            </g>
          ))}
        </svg>
        <div style={{ marginTop: 12, background: '#1e293b', borderRadius: 8, padding: 12, fontSize: 12, color: '#94a3b8' }}>
          <strong style={{ color: '#e2e8f0' }}>How to use:</strong> Work through each bone with your team. Use the "5 Whys" technique on each potential cause. The most frequently identified root causes should be prioritized in the Improve phase.
        </div>
      </div>
    </div>
  );
}

function ControlChartModal({ history, onClose }: { history: { t: number; value: number }[]; onClose: () => void }) {
  const values = history.map(h => h.value);
  const mean = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  const sigma = values.length > 1
    ? Math.sqrt(values.reduce((acc, v) => acc + (v - mean) ** 2, 0) / (values.length - 1))
    : 0;
  const ucl = mean + 3 * sigma;
  const lcl = Math.max(0, mean - 3 * sigma);

  const data = history.map((h, i) => ({
    t: i,
    value: Math.round(h.value * 1000) / 1000,
    ucl: Math.round(ucl * 1000) / 1000,
    lcl: Math.round(lcl * 1000) / 1000,
    mean: Math.round(mean * 1000) / 1000,
  }));

  const outOfControl = data.filter(d => d.value > d.ucl || d.value < d.lcl).length;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={{ ...styles.modal, maxWidth: 680 }} onClick={e => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>Control Chart (X̄ Chart) — Defect Rate</span>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: 12, fontSize: 13 }}>
          Tracks process variation over time. Points outside UCL/LCL indicate special-cause variation requiring investigation.
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="t" stroke="#475569" tick={{ fill: '#64748b', fontSize: 11 }} label={{ value: 'Sample', position: 'insideBottom', fill: '#64748b', fontSize: 11 }} />
            <YAxis stroke="#475569" tick={{ fill: '#64748b', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 6, color: '#e2e8f0' }} />
            <ReferenceLine y={ucl} stroke="#ef4444" strokeDasharray="6 3" label={{ value: 'UCL', fill: '#ef4444', fontSize: 10 }} />
            <ReferenceLine y={mean} stroke="#22c55e" strokeDasharray="6 3" label={{ value: 'CL', fill: '#22c55e', fontSize: 10 }} />
            <ReferenceLine y={lcl} stroke="#f59e0b" strokeDasharray="6 3" label={{ value: 'LCL', fill: '#f59e0b', fontSize: 10 }} />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} name="Defect Rate" />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          {[
            { label: 'Centre Line (CL)', value: mean.toFixed(4), color: '#22c55e' },
            { label: 'UCL (3σ)', value: ucl.toFixed(4), color: '#ef4444' },
            { label: 'LCL (3σ)', value: lcl.toFixed(4), color: '#f59e0b' },
            { label: 'Out-of-Control Points', value: outOfControl, color: outOfControl > 0 ? '#ef4444' : '#22c55e' },
          ].map(stat => (
            <div key={stat.label} style={{ flex: 1, background: '#1e293b', borderRadius: 8, padding: '8px 12px', borderTop: `2px solid ${stat.color}` }}>
              <div style={{ color: '#64748b', fontSize: 10, marginBottom: 2 }}>{stat.label}</div>
              <div style={{ color: stat.color, fontWeight: 700, fontSize: 15 }}>{stat.value}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, background: '#1e293b', borderRadius: 8, padding: 12, fontSize: 12, color: '#94a3b8' }}>
          <strong style={{ color: '#e2e8f0' }}>Control Rule:</strong> If any point falls outside the UCL/LCL, or if 8+ consecutive points fall on one side of the centre line, the process is out of statistical control — stop and investigate before adjusting.
        </div>
      </div>
    </div>
  );
}

function CapabilityModal({ metrics, targetSigma, onClose }: { metrics: Metrics; targetSigma: number; onClose: () => void }) {
  const cp = metrics.sigmaLevel / 3;
  const cpk = cp * (1 - Math.abs(0) / 3); // simplified — centred process
  const dpmo = Math.round(metrics.defectRate * 1_000_000);

  // Histogram-like normal curve via points
  const points: { x: number; y: number }[] = [];
  for (let z = -4; z <= 4; z += 0.25) {
    points.push({ x: z, y: Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI) });
  }

  const spec = targetSigma - 1.5; // spec limits in z-score units
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(p.x + 4) * 50 + 40},${200 - p.y * 600}`).join(' ');
  const fillData = `${pathData} L ${(4 + 4) * 50 + 40},200 L 40,200 Z`;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={{ ...styles.modal, maxWidth: 600 }} onClick={e => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>Process Capability Analysis</span>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <svg viewBox="0 0 480 220" style={{ width: '100%', background: '#0f172a', borderRadius: 8, border: '1px solid #334155' }}>
          {/* Out-of-spec fill (red) */}
          <clipPath id="leftSpec">
            <rect x="0" y="0" width={((-spec + 4) * 50 + 40)} height="220"/>
          </clipPath>
          <clipPath id="rightSpec">
            <rect x={(spec + 4) * 50 + 40} y="0" width="480" height="220"/>
          </clipPath>
          <path d={fillData} fill="#ef444440" clipPath="url(#leftSpec)"/>
          <path d={fillData} fill="#ef444440" clipPath="url(#rightSpec)"/>

          {/* In-spec fill (green) */}
          <clipPath id="inSpec">
            <rect x={((-spec + 4) * 50 + 40)} y="0" width={spec * 2 * 50} height="220"/>
          </clipPath>
          <path d={fillData} fill="#22c55e30" clipPath="url(#inSpec)"/>

          {/* Curve */}
          <path d={pathData} fill="none" stroke="#3b82f6" strokeWidth="2"/>

          {/* Spec lines */}
          <line x1={((-spec + 4) * 50 + 40)} y1="10" x2={((-spec + 4) * 50 + 40)} y2="200"
            stroke="#ef4444" strokeDasharray="4 3" strokeWidth="1.5"/>
          <line x1={((spec + 4) * 50 + 40)} y1="10" x2={((spec + 4) * 50 + 40)} y2="200"
            stroke="#ef4444" strokeDasharray="4 3" strokeWidth="1.5"/>
          <text x={((-spec + 4) * 50 + 40)} y="10" textAnchor="middle" fill="#f87171" fontSize="10">LSL</text>
          <text x={((spec + 4) * 50 + 40)} y="10" textAnchor="middle" fill="#f87171" fontSize="10">USL</text>

          {/* Centre line */}
          <line x1="240" y1="20" x2="240" y2="200" stroke="#22c55e" strokeDasharray="4 3" strokeWidth="1"/>

          {/* X axis */}
          <line x1="40" y1="200" x2="440" y2="200" stroke="#475569" strokeWidth="1"/>
          {[-3, -2, -1, 0, 1, 2, 3].map(z => (
            <g key={z}>
              <line x1={(z + 4) * 50 + 40} y1="198" x2={(z + 4) * 50 + 40} y2="204" stroke="#475569" strokeWidth="1"/>
              <text x={(z + 4) * 50 + 40} y="214" textAnchor="middle" fill="#64748b" fontSize="10">{z}σ</text>
            </g>
          ))}

          {/* Labels */}
          <text x="240" y="30" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">
            Process Distribution
          </text>
        </svg>

        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          {[
            { label: 'Cp', value: cp.toFixed(2), target: '≥ 1.33', ok: cp >= 1.33, tip: 'Process capability (spread vs. tolerance)' },
            { label: 'Cpk', value: cpk.toFixed(2), target: '≥ 1.33', ok: cpk >= 1.33, tip: 'Centred capability (worst-case side)' },
            { label: 'Sigma Level', value: metrics.sigmaLevel.toFixed(1), target: `≥ ${targetSigma}`, ok: metrics.sigmaLevel >= targetSigma, tip: 'Standard deviations to spec limit' },
            { label: 'DPMO', value: dpmo.toLocaleString(), target: '< 3,400', ok: dpmo < 3400, tip: 'Defects per million opportunities' },
          ].map(stat => (
            <div key={stat.label} style={{ flex: 1, background: '#1e293b', borderRadius: 8, padding: '8px 10px', borderTop: `2px solid ${stat.ok ? '#22c55e' : '#ef4444'}` }}>
              <div style={{ color: '#64748b', fontSize: 10 }}>{stat.label}</div>
              <div style={{ color: stat.ok ? '#22c55e' : '#ef4444', fontWeight: 700, fontSize: 16 }}>{stat.value}</div>
              <div style={{ color: '#475569', fontSize: 9 }}>Target: {stat.target}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12, background: '#1e293b', borderRadius: 8, padding: 12, fontSize: 12, color: '#94a3b8' }}>
          <strong style={{ color: '#e2e8f0' }}>Interpretation:</strong> Cp measures whether the process spread fits within tolerance. Cpk accounts for centering. A Cpk ≥ 1.33 indicates a capable process with ≥ 4σ protection. Six Sigma quality requires Cp/Cpk ≈ 2.0.
        </div>
      </div>
    </div>
  );
}

function ComparisonModal({
  baseline,
  current,
  targetSigma,
  onClose,
}: {
  baseline: Metrics;
  current: Metrics;
  targetSigma: number;
  onClose: () => void;
}) {
  const rows: { label: string; before: string; after: string; unit: string; better: 'higher' | 'lower' }[] = [
    { label: 'Throughput',   before: String(baseline.throughput),           after: String(current.throughput),           unit: 'u/hr', better: 'higher' },
    { label: 'Defect Rate',  before: (baseline.defectRate * 100).toFixed(1), after: (current.defectRate * 100).toFixed(1), unit: '%',    better: 'lower' },
    { label: 'Cycle Time',   before: String(baseline.cycleTime),            after: String(current.cycleTime),            unit: 'min',  better: 'lower' },
    { label: 'OEE',          before: (baseline.oee * 100).toFixed(1),       after: (current.oee * 100).toFixed(1),       unit: '%',    better: 'higher' },
    { label: 'Sigma Level',  before: String(baseline.sigmaLevel),           after: String(current.sigmaLevel),           unit: 'σ',    better: 'higher' },
    { label: 'Cost / Unit',  before: `$${baseline.costPerUnit.toFixed(2)}`,  after: `$${current.costPerUnit.toFixed(2)}`,  unit: '',     better: 'lower' },
  ];

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={{ ...styles.modal, maxWidth: 560 }} onClick={e => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>Before / After Comparison</span>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              {['Metric', 'Before', 'After', 'Change'].map(h => (
                <th key={h} style={{ padding: '8px 12px', color: '#64748b', textAlign: h === 'Metric' ? 'left' : 'center', borderBottom: '1px solid #334155', fontWeight: 600, fontSize: 11 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => {
              const bV = parseFloat(row.before.replace(/[$%σ]/g, ''));
              const aV = parseFloat(row.after.replace(/[$%σ]/g, ''));
              const delta = aV - bV;
              const improved = row.better === 'higher' ? delta > 0 : delta < 0;
              const pct = bV !== 0 ? Math.abs(delta / bV * 100).toFixed(1) : '—';
              return (
                <tr key={row.label} style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '8px 12px', color: '#e2e8f0', fontWeight: 600 }}>{row.label}</td>
                  <td style={{ padding: '8px 12px', color: '#94a3b8', textAlign: 'center' }}>{row.before} <span style={{ fontSize: 10 }}>{row.unit}</span></td>
                  <td style={{ padding: '8px 12px', color: improved ? '#22c55e' : '#ef4444', textAlign: 'center', fontWeight: 700 }}>{row.after} <span style={{ fontSize: 10 }}>{row.unit}</span></td>
                  <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                    <span style={{ color: improved ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
                      {improved ? '▲' : '▼'} {pct}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ marginTop: 12, padding: 12, background: current.sigmaLevel >= targetSigma ? '#14532d30' : '#450a0a30', border: `1px solid ${current.sigmaLevel >= targetSigma ? '#22c55e' : '#ef4444'}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>{current.sigmaLevel >= targetSigma ? '🏆' : '📊'}</span>
          <div>
            <div style={{ color: current.sigmaLevel >= targetSigma ? '#22c55e' : '#f87171', fontWeight: 700, fontSize: 13 }}>
              {current.sigmaLevel >= targetSigma ? `Target Achieved! (${current.sigmaLevel}σ ≥ ${targetSigma}σ)` : `Target Not Yet Met (${current.sigmaLevel}σ < ${targetSigma}σ)`}
            </div>
            <div style={{ color: '#94a3b8', fontSize: 11, marginTop: 2 }}>
              {current.sigmaLevel >= targetSigma ? 'All improvements are working. Move to Control phase to sustain gains.' : `Continue applying improvements in the Improve phase. Need ${(targetSigma - current.sigmaLevel).toFixed(1)}σ more.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  INLINE STYLES
// ─────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  root: {
    background: '#0f172a',
    color: '#e2e8f0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    background: '#1e293b',
    borderBottom: '1px solid #334155',
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  canvasWrap: {
    background: '#0f172a',
    borderBottom: '1px solid #334155',
    width: '100%',
    overflow: 'hidden',
  },
  controlBar: {
    background: '#1e293b',
    borderBottom: '1px solid #334155',
    padding: '8px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  mainArea: {
    display: 'flex',
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
  },
  sidebar: {
    width: 260,
    minWidth: 220,
    background: '#1e293b',
    borderRight: '1px solid #334155',
    overflowY: 'auto',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    flexShrink: 0,
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    minWidth: 0,
  },
  btn: {
    background: '#334155',
    color: '#e2e8f0',
    border: '1px solid #475569',
    borderRadius: 6,
    padding: '6px 14px',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
    transition: 'background 0.15s',
    whiteSpace: 'nowrap',
  },
  btnPrimary: {
    background: '#2563eb',
    color: '#fff',
    border: '1px solid #3b82f6',
    borderRadius: 6,
    padding: '6px 16px',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 700,
  },
  btnDanger: {
    background: '#dc2626',
    color: '#fff',
    border: '1px solid #ef4444',
    borderRadius: 6,
    padding: '6px 14px',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 700,
  },
  metricCard: {
    background: '#0f172a',
    borderRadius: 8,
    padding: '10px 14px',
    borderLeft: '3px solid',
  },
  sectionLabel: {
    color: '#64748b',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    marginBottom: 6,
  },
  improveBtn: {
    width: '100%',
    textAlign: 'left' as const,
    background: '#0f172a',
    color: '#e2e8f0',
    border: '1px solid #334155',
    borderRadius: 8,
    padding: '10px 12px',
    cursor: 'pointer',
    marginBottom: 6,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 13,
    transition: 'border-color 0.15s',
  },
  phaseTab: {
    padding: '6px 14px',
    borderRadius: 6,
    border: '1px solid #334155',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 600,
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
  },
  modalOverlay: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 20,
  },
  modal: {
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    color: '#e2e8f0',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    fontSize: 18,
    lineHeight: 1,
    padding: 4,
  },
  badge: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 999,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.05em',
  },
};

// ─────────────────────────────────────────────
//  SAVE / LOAD
// ─────────────────────────────────────────────

const SAVE_KEY = 'factory-simulation-save';

interface SaveData {
  improvements: ImprovementState;
  phase: DMAICPhase;
  scenarioKey: ScenarioKey;
  improvementPoints: number;
  timestamp: number;
}

function loadSave(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? (JSON.parse(raw) as SaveData) : null;
  } catch {
    return null;
  }
}

function writeSave(data: SaveData) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota errors
  }
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────

const FactorySimulation: React.FC<FactorySimulationProps> = ({
  onSessionComplete,
  userLevel = 'green',
  scenario: scenarioProp = 'baseline',
}) => {
  // ── Resolve scenario ──
  const [showIntro, setShowIntro] = useState(true);
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>(scenarioProp);
  const scenario = SCENARIOS[scenarioKey];
  const [params, setParams] = useState<SimParams>({ ...scenario.params });

  // ── Load save if available ──
  const savedData = useMemo(() => loadSave(), []);

  // ── Simulation state ──
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [phase, setPhase] = useState<DMAICPhase>('define');
  const [improvements, setImprovements] = useState<ImprovementState>({
    fiveS: 0, kaizen: 0, pokaYoke: false, training: 0, maintenance: false, supplierUpgrade: false,
  });
  const [improvementPoints, setImprovementPoints] = useState(0);
  const [ticks, setTicks] = useState(0);
  const [modal, setModal] = useState<ModalType>(null);
  const [toast, setToast] = useState<string | null>(null);

  // ── Metrics ──
  const metrics = useMemo(
    () => computeMetrics(params, improvements, ticks),
    [params, improvements, ticks],
  );
  const [baselineMetrics, setBaselineMetrics] = useState<Metrics | null>(null);
  const [history, setHistory] = useState<{ t: number; value: number }[]>([]);

  // ── Products on conveyor ──
  const [products, setProducts] = useState<Product[]>([]);
  const nextId = useRef(0);

  // ── Canvas ──
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dashOffsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // ── Restore from save ──
  useEffect(() => {
    if (savedData && savedData.scenarioKey === scenarioKey) {
      setImprovements(savedData.improvements);
      setPhase(savedData.phase);
      setImprovementPoints(savedData.improvementPoints);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Simulation tick (every 500ms / speed) ──
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTicks(t => t + 1);

      // Accrue improvement points slowly
      setImprovementPoints(p => p + 1);

      // Record history for control chart (sample every 5 ticks)
      setHistory(h => {
        const next = [...h, { t: h.length, value: metrics.defectRate }];
        return next.slice(-40); // keep last 40 samples
      });

      // Advance products
      setProducts(prev => {
        const step = 0.04 * speed * metrics.oee;
        const next: Product[] = [];
        let newSpawned = false;

        for (const p of prev) {
          const updated = { ...p, segmentProgress: p.segmentProgress + step };
          if (updated.segmentProgress >= 1) {
            if (updated.segmentIndex < SEGMENTS.length - 1) {
              // Enter next segment — if it's a station, simulate processing time
              updated.segmentIndex += 1;
              updated.segmentProgress = 0;
              updated.waitTicks = 0;
            } else {
              // Product exits — don't keep it
              continue;
            }
          }
          next.push(updated);
        }

        // Spawn new product at entry if not too many
        if (next.length < 12 && !newSpawned) {
          const isDefect = Math.random() < metrics.defectRate;
          next.push({
            id: nextId.current++,
            segmentProgress: 0,
            segmentIndex: 0,
            isDefect,
            waitTicks: 0,
          });
        }

        return next;
      });
    }, 500 / speed);

    return () => clearInterval(interval);
  }, [running, speed, metrics]);

  // ── Canvas animation loop (independent of simulation ticks) ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stationQueues = STATIONS.map((_, i) =>
      products.filter(p => p.segmentIndex === i + 1 && p.segmentProgress < 0.25).length,
    );

    function frame() {
      if (!ctx || !canvas) return;
      if (running) dashOffsetRef.current = (dashOffsetRef.current + speed * 0.8) % 32;
      drawFactory(ctx, products, dashOffsetRef.current, params, improvements, stationQueues);
      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [products, running, speed, params, improvements]);

  // ── Toast helper ──
  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  // ── Apply improvement ──
  const applyImprovement = useCallback((key: keyof ImprovementState) => {
    const cost = IMPROVEMENT_COSTS[key];
    if (improvementPoints < cost) {
      showToast(`Need ${cost} improvement points (you have ${improvementPoints})`);
      return;
    }
    if (key === 'pokaYoke' && improvements.pokaYoke) { showToast('Poka-yoke already applied'); return; }
    if (key === 'maintenance' && improvements.maintenance) { showToast('Maintenance programme already active'); return; }
    if (key === 'supplierUpgrade' && improvements.supplierUpgrade) { showToast('Supplier already upgraded'); return; }
    if (key === 'fiveS' && improvements.fiveS >= 3) { showToast('5S fully implemented (level 3)'); return; }
    if (key === 'kaizen' && improvements.kaizen >= 5) { showToast('Maximum kaizen events applied'); return; }
    if (key === 'training' && improvements.training >= 3) { showToast('Maximum training level reached'); return; }

    setImprovements(prev => {
      const next = { ...prev };
      if (typeof next[key] === 'boolean') {
        (next[key] as boolean) = true;
      } else {
        (next[key] as number) += 1;
      }
      return next;
    });
    setImprovementPoints(p => p - cost);
    showToast(`✓ ${key} applied! Check the metrics dashboard.`);
  }, [improvementPoints, improvements, showToast]);

  // ── Capture baseline ──
  const captureBaseline = useCallback(() => {
    setBaselineMetrics(metrics);
    showToast('Baseline captured. Apply improvements and compare.');
  }, [metrics, showToast]);

  // ── Save ──
  const handleSave = useCallback(() => {
    writeSave({ improvements, phase, scenarioKey, improvementPoints, timestamp: Date.now() });
    showToast('Progress saved to browser storage.');
  }, [improvements, phase, scenarioKey, improvementPoints]);

  // ── Session complete ──
  useEffect(() => {
    if (metrics.sigmaLevel >= scenario.targetSigma && ticks > 10) {
      setRunning(false);
      onSessionComplete?.(metrics, improvements);
    }
  }, [metrics.sigmaLevel, scenario.targetSigma]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Scenario change ──
  const changeScenario = useCallback((key: ScenarioKey) => {
    setScenarioKey(key);
    setParams({ ...SCENARIOS[key].params });
    setImprovements({ fiveS: 0, kaizen: 0, pokaYoke: false, training: 0, maintenance: false, supplierUpgrade: false });
    setTicks(0);
    setHistory([]);
    setProducts([]);
    setImprovementPoints(0);
    setRunning(false);
    setBaselineMetrics(null);
    setPhase('define');
    showToast(`Scenario changed to: ${SCENARIOS[key].name}`);
  }, [showToast]);

  // ── Metric formatting ──
  const fmtPct = (v: number) => `${(v * 100).toFixed(1)}%`;

  const metricRows: { label: string; value: string; color: string }[] = [
    { label: 'Throughput',   value: `${metrics.throughput} u/hr`,              color: '#3b82f6' },
    { label: 'Cycle Time',   value: `${metrics.cycleTime} min`,                color: '#22c55e' },
    { label: 'OEE',          value: fmtPct(metrics.oee),                       color: '#f59e0b' },
    { label: 'Availability', value: fmtPct(metrics.availability),              color: '#a855f7' },
    { label: 'Performance',  value: fmtPct(metrics.performance),               color: '#ec4899' },
    { label: 'Quality',      value: fmtPct(metrics.quality),                   color: '#22c55e' },
    { label: 'Defect Rate',  value: `${(metrics.defectRate * 100).toFixed(2)}%`, color: '#ef4444' },
    { label: 'Sigma Level',  value: `${metrics.sigmaLevel}σ`,                  color: metrics.sigmaLevel >= scenario.targetSigma ? '#22c55e' : '#f59e0b' },
    { label: 'Cost / Unit',  value: `$${metrics.costPerUnit.toFixed(2)}`,      color: '#94a3b8' },
    { label: 'WIP',          value: String(metrics.wip),                       color: '#64748b' },
  ];

  const improvementsConfig: { key: keyof ImprovementState; label: string; icon: string; cost: number; desc: string; max?: number }[] = [
    { key: 'fiveS',           label: '5S Workplace Org', icon: '🧹', cost: IMPROVEMENT_COSTS.fiveS,          desc: 'Reduce setup time & improve flow', max: 3 },
    { key: 'kaizen',          label: 'Kaizen Event',      icon: '⚡', cost: IMPROVEMENT_COSTS.kaizen,         desc: 'Incremental efficiency improvement', max: 5 },
    { key: 'training',        label: 'Worker Training',   icon: '🎓', cost: IMPROVEMENT_COSTS.training,       desc: 'Reduce variation, increase skill', max: 3 },
    { key: 'maintenance',     label: 'TPM Programme',     icon: '🔧', cost: IMPROVEMENT_COSTS.maintenance,    desc: 'Improve machine availability' },
    { key: 'pokaYoke',        label: 'Poka-Yoke Device',  icon: '🛡️', cost: IMPROVEMENT_COSTS.pokaYoke,      desc: 'Mistake-proofing — cut defects 65%' },
    { key: 'supplierUpgrade', label: 'Supplier Upgrade',  icon: '📦', cost: IMPROVEMENT_COSTS.supplierUpgrade, desc: 'Better incoming material quality' },
  ];

  const currentPhaseData = DMAIC_PHASES.find(p => p.key === phase)!;

  // ── Intro / startup screen ──
  if (showIntro) {
    return (
      <div style={{ ...styles.root, alignItems: 'center', justifyContent: 'center', padding: 24, overflowY: 'auto' }}>
        <div style={{ maxWidth: 780, width: '100%' }}>
          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>⚙️</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#e2e8f0', margin: 0 }}>Wentworth Factory Optimizer</h1>
            <p style={{ color: '#64748b', marginTop: 8, fontSize: 14 }}>
              An interactive Lean Six Sigma simulation — identify waste, apply improvements, and bring your factory to Six Sigma quality.
            </p>
          </div>

          {/* How to play */}
          <div style={{ background: '#1e293b', borderRadius: 12, padding: 24, marginBottom: 20, border: '1px solid #334155' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', marginTop: 0, marginBottom: 16 }}>How to Play</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              {[
                { step: '1', icon: '▶', title: 'Press Play', desc: 'Start the factory. Products flow along the conveyor through Assembly → Testing → QC → Packaging.' },
                { step: '2', icon: '💎', title: 'Earn Points', desc: 'Improvement points accumulate while the factory runs. You\'ll need them to apply fixes.' },
                { step: '3', icon: '📊', title: 'Work Through DMAIC', desc: 'Navigate the 5 phase tabs. Each phase unlocks different tools and guidance.' },
                { step: '4', icon: '⚡', title: 'Apply Improvements', desc: 'In the Improve phase, spend points on 5S, Kaizen, Poka-Yoke, Training, and more.' },
                { step: '5', icon: '🏆', title: 'Hit the Sigma Target', desc: 'Watch your Sigma Level rise. Reach the target to complete the scenario and win.' },
              ].map(item => (
                <div key={item.step} style={{ background: '#0f172a', borderRadius: 8, padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ background: '#2563eb', color: '#fff', borderRadius: 999, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{item.step}</span>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: 13, color: '#e2e8f0' }}>{item.title}</span>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key concepts */}
          <div style={{ background: '#1e293b', borderRadius: 12, padding: 20, marginBottom: 20, border: '1px solid #334155' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', marginTop: 0, marginBottom: 14 }}>Key Concepts You'll Apply</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
              {[
                { term: 'OEE', def: 'Overall Equipment Effectiveness = Availability × Performance × Quality. The gold standard for factory efficiency.' },
                { term: 'Sigma Level', def: 'Measures how many defects escape per million opportunities. Six Sigma = 3.4 DPMO.' },
                { term: 'DMAIC', def: 'Define → Measure → Analyze → Improve → Control. The Six Sigma improvement roadmap.' },
                { term: 'Poka-Yoke', def: 'Mistake-proofing devices that make defects physically impossible or immediately visible.' },
                { term: 'Cycle Time', def: 'Total time to complete one unit. Tracks flow health. Lower is better.' },
                { term: 'Kaizen', def: 'Continuous improvement events. Small, focused changes that accumulate into big gains.' },
              ].map(c => (
                <div key={c.term} style={{ background: '#0f172a', borderRadius: 8, padding: '10px 12px', borderLeft: '3px solid #3b82f6' }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: '#3b82f6', marginBottom: 4 }}>{c.term}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.5 }}>{c.def}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scenario picker */}
          <div style={{ background: '#1e293b', borderRadius: 12, padding: 20, marginBottom: 24, border: '1px solid #334155' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', marginTop: 0, marginBottom: 14 }}>Choose Your Scenario</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
              {(Object.keys(SCENARIOS) as ScenarioKey[]).map(key => {
                const sc = SCENARIOS[key];
                const diffColor = sc.difficulty === 'Beginner' ? '#22c55e' : sc.difficulty === 'Intermediate' ? '#f59e0b' : '#ef4444';
                return (
                  <button
                    key={key}
                    onClick={() => { setScenarioKey(key); setParams({ ...sc.params }); }}
                    style={{
                      background: scenarioKey === key ? '#1e3a5f' : '#0f172a',
                      border: `2px solid ${scenarioKey === key ? '#3b82f6' : '#334155'}`,
                      borderRadius: 10,
                      padding: '12px 14px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: '#e2e8f0',
                      transition: 'all 0.15s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontWeight: 700, fontSize: 13 }}>{sc.name}</span>
                      {scenarioKey === key && <span style={{ color: '#3b82f6', fontSize: 14 }}>✓</span>}
                    </div>
                    <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.4, marginBottom: 8 }}>{sc.description}</div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: diffColor, background: diffColor + '20', border: `1px solid ${diffColor}40`, borderRadius: 999, padding: '1px 7px' }}>{sc.difficulty}</span>
                      <span style={{ fontSize: 10, color: '#f59e0b', background: '#f59e0b20', border: '1px solid #f59e0b40', borderRadius: 999, padding: '1px 7px', fontWeight: 700 }}>Target {sc.targetSigma}σ</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Start button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowIntro(false)}
              style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, padding: '14px 48px', fontSize: 16, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.02em' }}
            >
              ▶ Start Simulation
            </button>
            <p style={{ color: '#475569', fontSize: 11, marginTop: 10 }}>Progress auto-saves to your browser. You can return anytime.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      {/* ── Header ── */}
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#e2e8f0' }}>⚙️ Wentworth Factory Optimizer</span>
          <span style={{ ...styles.badge, background: '#1e40af22', color: '#3b82f6', border: '1px solid #3b82f630' }}>
            {userLevel.toUpperCase()} BELT
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <select
            value={scenarioKey}
            onChange={e => changeScenario(e.target.value as ScenarioKey)}
            style={{ background: '#334155', color: '#e2e8f0', border: '1px solid #475569', borderRadius: 6, padding: '4px 8px', fontSize: 12, cursor: 'pointer' }}
          >
            {(Object.keys(SCENARIOS) as ScenarioKey[]).map(k => (
              <option key={k} value={k}>{SCENARIOS[k].name}</option>
            ))}
          </select>
          <button style={styles.btn} onClick={handleSave}>💾 Save</button>
          <button style={{ ...styles.btn, padding: '6px 10px' }} onClick={() => setShowIntro(true)} title="How to play">❓</button>
        </div>
      </div>

      <div style={styles.body}>
        {/* ── DMAIC Phase Bar ── */}
        <div style={{ background: '#0f172a', borderBottom: '1px solid #334155', padding: '10px 20px', display: 'flex', gap: 6, overflowX: 'auto' }}>
          {DMAIC_PHASES.map(p => (
            <button
              key={p.key}
              onClick={() => setPhase(p.key)}
              style={{
                ...styles.phaseTab,
                background: phase === p.key ? p.color + '22' : 'transparent',
                borderColor: phase === p.key ? p.color : '#334155',
                color: phase === p.key ? p.color : '#64748b',
              }}
            >
              {p.label}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <span style={{ color: '#64748b', fontSize: 12, alignSelf: 'center' }}>
            Target: <strong style={{ color: '#f59e0b' }}>{scenario.targetSigma}σ</strong>
            &nbsp;|&nbsp;
            Current: <strong style={{ color: metrics.sigmaLevel >= scenario.targetSigma ? '#22c55e' : '#e2e8f0' }}>{metrics.sigmaLevel}σ</strong>
          </span>
        </div>

        {/* ── Canvas ── */}
        <div style={styles.canvasWrap}>
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* ── Controls ── */}
        <div style={styles.controlBar}>
          <button
            style={running ? styles.btnDanger : styles.btnPrimary}
            onClick={() => setRunning(r => !r)}
          >
            {running ? '⏸ Pause' : '▶ Play'}
          </button>
          <span style={{ color: '#64748b', fontSize: 12 }}>Speed:</span>
          {[0.5, 1, 2, 3].map(s => (
            <button
              key={s}
              style={{ ...styles.btn, borderColor: speed === s ? '#3b82f6' : '#475569', color: speed === s ? '#3b82f6' : '#e2e8f0' }}
              onClick={() => setSpeed(s)}
            >
              {s}×
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <span style={{ color: '#64748b', fontSize: 12 }}>
            💎 <strong style={{ color: '#f59e0b' }}>{improvementPoints}</strong> pts
          </span>
          <button style={styles.btn} onClick={captureBaseline}>📸 Capture Baseline</button>
          {baselineMetrics && (
            <button style={styles.btn} onClick={() => setModal('comparison')}>📊 Before/After</button>
          )}
        </div>

        {/* ── Main area ── */}
        <div style={styles.mainArea}>
          {/* ── Left sidebar: Metrics ── */}
          <div style={styles.sidebar}>
            <div>
              <div style={styles.sectionLabel}>Live Metrics</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {metricRows.map(m => (
                  <div key={m.label} style={{ ...styles.metricCard, borderLeftColor: m.color }}>
                    <div style={{ color: '#64748b', fontSize: 10, marginBottom: 1 }}>{m.label}</div>
                    <div style={{ color: m.color, fontWeight: 700, fontSize: 15 }}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis tools */}
            <div>
              <div style={styles.sectionLabel}>Analysis Tools</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { icon: '🐟', label: 'Fishbone Diagram', modal: 'fishbone' as ModalType, phase: 'analyze' },
                  { icon: '📈', label: 'Control Chart', modal: 'controlChart' as ModalType, phase: 'control' },
                  { icon: '📐', label: 'Process Capability', modal: 'capability' as ModalType, phase: 'measure' },
                ].map(t => (
                  <button
                    key={t.label}
                    style={{ ...styles.improveBtn, opacity: history.length < 3 && t.modal === 'controlChart' ? 0.5 : 1 }}
                    onClick={() => setModal(t.modal)}
                  >
                    <span>{t.icon} {t.label}</span>
                    <span style={{ color: '#64748b', fontSize: 10 }}>▶</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right content: Phase guide + Improvements ── */}
          <div style={styles.content}>
            {/* Phase description */}
            <div style={{ background: '#1e293b', borderRadius: 10, padding: 16, borderLeft: `4px solid ${currentPhaseData.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ ...styles.badge, background: currentPhaseData.color + '30', color: currentPhaseData.color, border: `1px solid ${currentPhaseData.color}40` }}>
                  {currentPhaseData.label.toUpperCase()}
                </span>
                <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 15 }}>{currentPhaseData.label} Phase</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{currentPhaseData.description}</p>
              {phase === 'define' && (
                <div style={{ marginTop: 12, background: '#0f172a', borderRadius: 8, padding: 12 }}>
                  <div style={{ color: '#64748b', fontSize: 10, fontWeight: 700, marginBottom: 6, letterSpacing: '0.06em' }}>SCENARIO</div>
                  <div style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: 4 }}>{scenario.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.5 }}>{scenario.description}</div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 10 }}>
                    <span style={{ ...styles.badge, background: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }}>
                      {scenario.difficulty}
                    </span>
                    <span style={{ ...styles.badge, background: '#1e293b', color: '#f59e0b', border: '1px solid #f59e0b40' }}>
                      Target: {scenario.targetSigma}σ
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* OEE breakdown */}
            <div style={{ background: '#1e293b', borderRadius: 10, padding: 16 }}>
              <div style={styles.sectionLabel}>OEE Breakdown</div>
              <div style={{ color: '#e2e8f0', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
                {fmtPct(metrics.oee)}
                <span style={{ color: '#64748b', fontSize: 12, fontWeight: 400, marginLeft: 8 }}>Overall Equipment Effectiveness</span>
              </div>
              {[
                { label: 'Availability', value: metrics.availability, color: '#3b82f6' },
                { label: 'Performance', value: metrics.performance, color: '#22c55e' },
                { label: 'Quality',     value: metrics.quality,      color: '#f59e0b' },
              ].map(row => (
                <div key={row.label} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ color: '#94a3b8', fontSize: 12 }}>{row.label}</span>
                    <span style={{ color: row.color, fontWeight: 700, fontSize: 12 }}>{fmtPct(row.value)}</span>
                  </div>
                  <div style={{ background: '#0f172a', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                    <div style={{ width: `${row.value * 100}%`, height: '100%', background: row.color, borderRadius: 4, transition: 'width 0.5s ease' }} />
                  </div>
                </div>
              ))}
              <div style={{ color: '#475569', fontSize: 11, marginTop: 6 }}>
                OEE = Availability × Performance × Quality = {fmtPct(metrics.availability)} × {fmtPct(metrics.performance)} × {fmtPct(metrics.quality)} = <strong style={{ color: '#f59e0b' }}>{fmtPct(metrics.oee)}</strong>
              </div>
            </div>

            {/* Improvement actions */}
            {(phase === 'improve' || phase === 'control') && (
              <div style={{ background: '#1e293b', borderRadius: 10, padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={styles.sectionLabel}>Improvement Actions</div>
                  <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700 }}>💎 {improvementPoints} pts available</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {improvementsConfig.map(imp => {
                    const current = improvements[imp.key];
                    const applied = typeof current === 'boolean' ? current : (current as number) > 0;
                    const maxed = typeof current === 'boolean' ? current : (imp.max ? (current as number) >= imp.max : false);
                    const level = typeof current === 'number' ? current : 0;
                    return (
                      <button
                        key={imp.key}
                        onClick={() => applyImprovement(imp.key)}
                        disabled={improvementPoints < imp.cost || maxed}
                        style={{
                          background: maxed ? '#14532d20' : applied ? '#1e3a5f20' : '#0f172a',
                          border: `1px solid ${maxed ? '#22c55e' : applied ? '#3b82f660' : '#334155'}`,
                          borderRadius: 8,
                          padding: '10px 12px',
                          cursor: improvementPoints < imp.cost || maxed ? 'not-allowed' : 'pointer',
                          opacity: improvementPoints < imp.cost && !maxed ? 0.6 : 1,
                          textAlign: 'left',
                          color: '#e2e8f0',
                          transition: 'all 0.15s',
                        }}
                      >
                        <div style={{ fontSize: 18, marginBottom: 4 }}>{imp.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 2 }}>{imp.label}</div>
                        <div style={{ color: '#64748b', fontSize: 10, marginBottom: 6 }}>{imp.desc}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ color: '#f59e0b', fontSize: 11, fontWeight: 700 }}>💎 {imp.cost} pts</span>
                          {maxed ? (
                            <span style={{ color: '#22c55e', fontSize: 10 }}>✓ Max</span>
                          ) : imp.max ? (
                            <span style={{ color: '#94a3b8', fontSize: 10 }}>{level}/{imp.max}</span>
                          ) : applied ? (
                            <span style={{ color: '#22c55e', fontSize: 10 }}>✓ Active</span>
                          ) : null}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Phase-locked message for non-improve phases */}
            {phase !== 'improve' && phase !== 'control' && (
              <div style={{ background: '#1e293b', borderRadius: 10, padding: 16, border: '1px dashed #334155', textAlign: 'center', color: '#64748b', fontSize: 13 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>🔒</div>
                <div style={{ fontWeight: 700, marginBottom: 4, color: '#94a3b8' }}>Improvements unlock in Improve phase</div>
                <div>Progress through Define → Measure → Analyze to unlock improvement actions.</div>
              </div>
            )}

            {/* Sim params (Measure phase) */}
            {phase === 'measure' && (
              <div style={{ background: '#1e293b', borderRadius: 10, padding: 16 }}>
                <div style={styles.sectionLabel}>Process Parameters (Read-Only in Measure)</div>
                {[
                  { key: 'machineEfficiency', label: 'Machine Efficiency', icon: '⚙️' },
                  { key: 'workerSkill',       label: 'Worker Skill',       icon: '👷' },
                  { key: 'materialQuality',   label: 'Material Quality',   icon: '📦' },
                  { key: 'variation',         label: 'Process Variation',  icon: '〰️' },
                ].map(p => {
                  const val = params[p.key as keyof SimParams];
                  return (
                    <div key={p.key} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                        <span style={{ color: '#94a3b8', fontSize: 12 }}>{p.icon} {p.label}</span>
                        <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 12 }}>{Math.round(val * 100)}%</span>
                      </div>
                      <div style={{ background: '#0f172a', borderRadius: 4, height: 6 }}>
                        <div style={{ width: `${val * 100}%`, height: '100%', background: val > 0.75 ? '#22c55e' : val > 0.5 ? '#f59e0b' : '#ef4444', borderRadius: 4 }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, background: '#1e293b', border: '1px solid #334155',
          borderRadius: 10, padding: '10px 18px', color: '#e2e8f0', fontSize: 13, fontWeight: 600,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 2000, maxWidth: 360,
          animation: 'fadeIn 0.2s ease',
        }}>
          {toast}
        </div>
      )}

      {/* ── Modals ── */}
      {modal === 'fishbone'    && <FishboneModal onClose={() => setModal(null)} />}
      {modal === 'controlChart' && <ControlChartModal history={history} onClose={() => setModal(null)} />}
      {modal === 'capability'  && <CapabilityModal metrics={metrics} targetSigma={scenario.targetSigma} onClose={() => setModal(null)} />}
      {modal === 'comparison'  && baselineMetrics && (
        <ComparisonModal baseline={baselineMetrics} current={metrics} targetSigma={scenario.targetSigma} onClose={() => setModal(null)} />
      )}

      {/* ── Win screen ── */}
      {metrics.sigmaLevel >= scenario.targetSigma && ticks > 10 && (
        <div style={{ ...styles.modalOverlay, zIndex: 999 }}>
          <div style={{ ...styles.modal, maxWidth: 460, textAlign: 'center' }}>
            <div style={{ fontSize: 60, marginBottom: 12 }}>🏆</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Target Achieved!</div>
            <div style={{ color: '#94a3b8', marginBottom: 20, fontSize: 14 }}>
              You reached <strong style={{ color: '#22c55e' }}>{metrics.sigmaLevel}σ</strong> — surpassing the {scenario.targetSigma}σ target for <em>{scenario.name}</em>.
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              {[
                { label: 'Final OEE',       value: fmtPct(metrics.oee),                       color: '#f59e0b' },
                { label: 'Defect Rate',     value: `${(metrics.defectRate * 100).toFixed(2)}%`, color: '#22c55e' },
                { label: 'Throughput',      value: `${metrics.throughput} u/hr`,               color: '#3b82f6' },
                { label: 'Cost / Unit',     value: `$${metrics.costPerUnit.toFixed(2)}`,        color: '#a855f7' },
              ].map(s => (
                <div key={s.label} style={{ background: '#0f172a', borderRadius: 8, padding: '8px 16px', minWidth: 90 }}>
                  <div style={{ color: '#64748b', fontSize: 10 }}>{s.label}</div>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 16 }}>{s.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button style={styles.btnPrimary} onClick={() => changeScenario('baseline')}>🔄 New Scenario</button>
              <button style={styles.btn} onClick={handleSave}>💾 Save Results</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactorySimulation;
