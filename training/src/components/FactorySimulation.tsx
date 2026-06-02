/**
 * FactorySimulation.tsx
 * Wentworth Factory Optimizer — Interactive Lean Six Sigma Simulation
 *
 * A self-contained, life-like factory simulation built on a discrete-event
 * engine. Units flow through Assembly → Testing → Quality Control → Packaging.
 * Each station has finite capacity, reliability (breakdowns), and quality.
 * When a station is slow, its input buffer fills and upstream stations BLOCK —
 * so bottlenecks emerge visibly, exactly as in a real plant.
 *
 * The learner runs the line, earns cash on shipped units, loses money on
 * escaped defects / scrap / downtime, and reinvests in targeted improvements
 * (Theory of Constraints: only fixing the true bottleneck helps).
 *
 * Architecture:
 *  - All fast-changing simulation state lives in a mutable ref (simRef) and is
 *    advanced inside a requestAnimationFrame loop at a fixed logic timestep.
 *  - A lightweight React snapshot is published ~5×/sec to drive the dashboard,
 *    so the canvas stays at 60fps without thrashing React.
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

/* ════════════════════════════════════════════════════════════════
   TYPES
   ════════════════════════════════════════════════════════════════ */

type UserLevel = 'yellow' | 'green' | 'black';
type ScenarioKey = 'training' | 'bottleneck' | 'quality' | 'crisis';
type ModalType = 'fishbone' | 'controlChart' | 'capability' | 'comparison' | 'coach' | null;
type StationId = 'assembly' | 'testing' | 'qc' | 'packaging';

interface SimUnit {
  id: number;
  defective: boolean;
  bornMs: number;
}

/** A transient particle for visual flair (sparks, smoke, defect bursts). */
interface Particle {
  x: number; y: number; vx: number; vy: number;
  life: number; maxLife: number;
  kind: 'spark' | 'smoke' | 'defect' | 'cash';
  text?: string;
}

/** A box gliding along the conveyor between two stations (eye-candy). */
interface Transit {
  fromX: number; fromY: number; toX: number; toY: number;
  progress: number; defective: boolean;
}

interface SimStation {
  id: StationId;
  name: string;
  short: string;
  cx: number;
  color: string;
  // tunable config (recomputed from base + upgrades each step)
  baseRate: number;       // jobs/sec at full speed
  baseReliability: number;// 0–1 (higher = fewer breakdowns)
  baseDefect: number;     // chance to introduce a defect per unit
  catchRate: number;      // QC only: chance to catch a defective unit
  inputCap: number;       // buffer size
  // upgrade levels
  upRate: number;
  upRel: number;
  upPoka: number;
  upTrain: number;
  // runtime state
  input: SimUnit[];
  job: SimUnit | null;
  jobProgress: number;    // 0–1
  status: 'idle' | 'working' | 'blocked' | 'down';
  downRemaining: number;  // seconds
  flashUntil: number;     // ms timestamp for completion pulse
  // cumulative stats
  processed: number;
  busyTime: number;
  downTime: number;
  blockedTime: number;
  idleTime: number;
}

interface GlobalUpgrades {
  fiveS: number;       // 0–3
  supplier: number;    // 0–3 (raw material quality)
  maintenance: number; // 0–3 (global reliability)
  kanban: boolean;     // pull system / WIP cap
}

interface ShipEvent { t: number; defective: boolean; cycle: number; }

interface SimState {
  stations: SimStation[];
  global: GlobalUpgrades;
  transits: Transit[];
  particles: Particle[];
  // economy
  money: number;
  revenue: number;
  costs: number;
  shippedGood: number;
  shippedBad: number;
  scrapped: number;
  rawDefectBase: number;
  // bookkeeping
  elapsed: number;        // sim seconds
  nextUnitId: number;
  rawFeed: SimUnit[];     // queue feeding the first station
  shipLog: ShipEvent[];   // rolling window of ship events
  sigmaHistory: { t: number; sigma: number; throughput: number; defect: number }[];
  beltOffset: number;
}

export interface Metrics {
  throughput: number;
  defectRate: number;
  cycleTime: number;
  oee: number;
  sigmaLevel: number;
  costPerUnit: number;
  wip: number;
  availability: number;
  performance: number;
  quality: number;
  money: number;
  profit: number;
  shippedGood: number;
  bottleneck: StationId | null;
}

interface ScenarioConfig {
  name: string;
  blurb: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  startMoney: number;
  targetSigma: number;
  targetShip: number;
  targetProfit: number;
  rawDefect: number;
  overrides: Partial<Record<StationId, Partial<Pick<SimStation, 'baseRate' | 'baseReliability' | 'baseDefect'>>>>;
}

export interface FactorySimulationProps {
  onSessionComplete?: (metrics: Metrics) => void;
  userLevel?: UserLevel;
  scenario?: ScenarioKey;
}

/* ════════════════════════════════════════════════════════════════
   CONSTANTS
   ════════════════════════════════════════════════════════════════ */

const LOGICAL_W = 1120;
const LOGICAL_H = 460;
const CONVEYOR_Y = 330;
const MACHINE_TOP = 150;
const MACHINE_H = 130;
const MACHINE_W = 132;

const LOGIC_DT = 0.08; // seconds per fixed logic step

// Economy
const REVENUE_PER_UNIT = 45;
const ESCAPE_PENALTY = 160;   // shipping a defect to a customer
const SCRAP_COST = 14;        // defect caught & scrapped at QC
const OP_COST_PER_SEC = 5.5;  // overhead/labor while running

const STATION_LAYOUT: { id: StationId; name: string; short: string; cx: number; color: string }[] = [
  { id: 'assembly',  name: 'Assembly',        short: 'ASM', cx: 280, color: '#3b82f6' },
  { id: 'testing',   name: 'Testing',         short: 'TST', cx: 510, color: '#22c55e' },
  { id: 'qc',        name: 'Quality Control', short: 'QC',  cx: 740, color: '#f97316' },
  { id: 'packaging', name: 'Packaging',       short: 'PKG', cx: 970, color: '#a855f7' },
];

const SCENARIOS: Record<ScenarioKey, ScenarioConfig> = {
  training: {
    name: 'Training Plant',
    blurb: 'A gentle introduction. The line runs reasonably well — learn the controls, watch the flow, and push Sigma from ~3.2 toward 4.0.',
    difficulty: 'Beginner',
    startMoney: 4000,
    targetSigma: 4.0, targetShip: 60, targetProfit: 2000,
    rawDefect: 0.04,
    overrides: {},
  },
  bottleneck: {
    name: 'The Bottleneck',
    blurb: 'Testing is dramatically undersized — watch its buffer overflow and Assembly choke. Find the constraint and break it (Theory of Constraints).',
    difficulty: 'Intermediate',
    startMoney: 4500,
    targetSigma: 3.8, targetShip: 80, targetProfit: 2500,
    rawDefect: 0.05,
    overrides: { testing: { baseRate: 0.42 }, assembly: { baseRate: 1.3 } },
  },
  quality: {
    name: 'Defect Epidemic',
    blurb: 'Incoming material is poor and stations introduce defects fast. Escaped defects are bleeding cash. Deploy poka-yoke and supplier quality to reach 5σ.',
    difficulty: 'Advanced',
    startMoney: 5000,
    targetSigma: 5.0, targetShip: 90, targetProfit: 3000,
    rawDefect: 0.16,
    overrides: { assembly: { baseDefect: 0.14 }, testing: { baseDefect: 0.10 } },
  },
  crisis: {
    name: 'Total Crisis',
    blurb: 'Slow machines, frequent breakdowns, AND a defect problem — all at once, on a tight budget. The ultimate Black Belt challenge.',
    difficulty: 'Expert',
    startMoney: 5500,
    targetSigma: 4.5, targetShip: 100, targetProfit: 3500,
    rawDefect: 0.13,
    overrides: {
      assembly:  { baseRate: 0.7, baseReliability: 0.90, baseDefect: 0.12 },
      testing:   { baseRate: 0.55, baseReliability: 0.88 },
      qc:        { baseReliability: 0.91 },
      packaging: { baseRate: 0.9, baseReliability: 0.92 },
    },
  },
};

interface UpgradeDef {
  key: string;
  scope: 'station' | 'global';
  label: string;
  icon: string;
  desc: string;
  baseCost: number;
  maxLevel: number;
  lssTool: string;
}

const STATION_UPGRADES: UpgradeDef[] = [
  { key: 'upRate',  scope: 'station', label: 'Faster Equipment', icon: '⚙️', desc: '+18% processing speed at this station.', baseCost: 380, maxLevel: 4, lssTool: 'Capacity / SMED' },
  { key: 'upRel',   scope: 'station', label: 'Preventive Maint.', icon: '🔧', desc: 'Fewer & shorter breakdowns here.', baseCost: 300, maxLevel: 3, lssTool: 'TPM' },
  { key: 'upPoka',  scope: 'station', label: 'Poka-Yoke', icon: '🛡️', desc: 'Mistake-proofing — slashes defects created here.', baseCost: 340, maxLevel: 3, lssTool: 'Poka-Yoke' },
  { key: 'upTrain', scope: 'station', label: 'Operator Training', icon: '🎓', desc: 'Slightly faster + fewer defects (less variation).', baseCost: 220, maxLevel: 3, lssTool: 'Standard Work' },
];

const GLOBAL_UPGRADES: UpgradeDef[] = [
  { key: 'supplier',    scope: 'global', label: 'Supplier Quality', icon: '📦', desc: 'Better incoming material — fewer raw defects entering the line.', baseCost: 420, maxLevel: 3, lssTool: 'Supplier SPC' },
  { key: 'maintenance', scope: 'global', label: 'TPM Program', icon: '🏭', desc: 'Plant-wide reliability boost across every machine.', baseCost: 460, maxLevel: 3, lssTool: 'TPM' },
  { key: 'fiveS',       scope: 'global', label: '5S Workplace', icon: '🧹', desc: 'Organized workplace — small speed & reliability gain everywhere.', baseCost: 300, maxLevel: 3, lssTool: '5S' },
  { key: 'kanban',      scope: 'global', label: 'Kanban Pull', icon: '🔄', desc: 'Caps WIP buffers — smooths flow and cuts cycle time.', baseCost: 380, maxLevel: 1, lssTool: 'Kanban' },
];

/* ════════════════════════════════════════════════════════════════
   LSS MATH
   ════════════════════════════════════════════════════════════════ */

/** Inverse normal CDF (Acklam approximation) for sigma conversion. */
function normInv(p: number): number {
  if (p <= 0) return -6;
  if (p >= 1) return 6;
  const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.383577518672690e2, -3.066479806614716e1, 2.506628277459239e0];
  const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
  const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838e0, -2.549732539343734e0, 4.374664141464968e0, 2.938163982698783e0];
  const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996e0, 3.754408661907416e0];
  const pl = 0.02425;
  let q: number, r: number;
  if (p < pl) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
           ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  } else if (p <= 1 - pl) {
    q = p - 0.5; r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
           (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  }
  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
          ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
}

function sigmaFromDefectRate(rate: number): number {
  const r = Math.max(0.0000005, Math.min(0.5, rate));
  return Math.max(1, Math.min(6, normInv(1 - r) + 1.5));
}

/** Effective per-station processing rate after upgrades. */
function effRate(s: SimStation, g: GlobalUpgrades): number {
  return s.baseRate * (1 + 0.18 * s.upRate) * (1 + 0.04 * s.upTrain) * (1 + 0.03 * g.fiveS);
}
function effReliability(s: SimStation, g: GlobalUpgrades): number {
  return Math.min(0.999, s.baseReliability + 0.025 * s.upRel + 0.02 * g.maintenance + 0.008 * g.fiveS);
}
function effDefect(s: SimStation, g: GlobalUpgrades): number {
  return Math.max(0.0005, s.baseDefect * (1 - 0.45 * s.upPoka) * (1 - 0.10 * s.upTrain) * (1 - 0.05 * g.fiveS));
}
function upgradeCost(def: UpgradeDef, level: number): number {
  return Math.round(def.baseCost * Math.pow(1.55, level));
}

/* ════════════════════════════════════════════════════════════════
   SIM FACTORY
   ════════════════════════════════════════════════════════════════ */

function makeSim(scenarioKey: ScenarioKey): SimState {
  const sc = SCENARIOS[scenarioKey];
  const defaults: Record<StationId, Pick<SimStation, 'baseRate' | 'baseReliability' | 'baseDefect' | 'catchRate' | 'inputCap'>> = {
    assembly:  { baseRate: 1.0, baseReliability: 0.96, baseDefect: 0.06, catchRate: 0,    inputCap: 10 },
    testing:   { baseRate: 0.8, baseReliability: 0.94, baseDefect: 0.04, catchRate: 0,    inputCap: 10 },
    qc:        { baseRate: 1.2, baseReliability: 0.97, baseDefect: 0.0,  catchRate: 0.65, inputCap: 10 },
    packaging: { baseRate: 1.4, baseReliability: 0.98, baseDefect: 0.01, catchRate: 0,    inputCap: 10 },
  };

  const stations: SimStation[] = STATION_LAYOUT.map(layout => {
    const d = defaults[layout.id];
    const ov = sc.overrides[layout.id] ?? {};
    return {
      ...layout,
      baseRate: ov.baseRate ?? d.baseRate,
      baseReliability: ov.baseReliability ?? d.baseReliability,
      baseDefect: ov.baseDefect ?? d.baseDefect,
      catchRate: d.catchRate,
      inputCap: d.inputCap,
      upRate: 0, upRel: 0, upPoka: 0, upTrain: 0,
      input: [], job: null, jobProgress: 0,
      status: 'idle', downRemaining: 0, flashUntil: 0,
      processed: 0, busyTime: 0, downTime: 0, blockedTime: 0, idleTime: 0,
    };
  });

  return {
    stations,
    global: { fiveS: 0, supplier: 0, maintenance: 0, kanban: false },
    transits: [], particles: [],
    money: sc.startMoney, revenue: 0, costs: 0,
    shippedGood: 0, shippedBad: 0, scrapped: 0,
    rawDefectBase: sc.rawDefect,
    elapsed: 0, nextUnitId: 1, rawFeed: [],
    shipLog: [], sigmaHistory: [], beltOffset: 0,
  };
}

/** Advance the simulation by one fixed logic step. Mutates sim in place. */
function stepSim(sim: SimState, dt: number, nowMs: number) {
  sim.elapsed += dt;
  sim.costs += OP_COST_PER_SEC * dt;
  sim.money -= OP_COST_PER_SEC * dt;
  sim.beltOffset = (sim.beltOffset + dt * 60) % 36;

  const stations = sim.stations;
  const wipCap = sim.global.kanban ? 5 : 10;

  // Keep the raw feed topped up so the FIRST station is never starved —
  // the constraint should be internal, not the supply.
  while (sim.rawFeed.length < 6) {
    sim.rawFeed.push({
      id: sim.nextUnitId++,
      defective: Math.random() < sim.rawDefectBase * (1 - 0.30 * sim.global.supplier),
      bornMs: nowMs,
    });
  }

  // Process DOWNSTREAM → UPSTREAM so freed capacity propagates correctly,
  // which is what produces realistic blocking/bottleneck behavior.
  for (let i = stations.length - 1; i >= 0; i--) {
    const s = stations[i];
    s.inputCap = wipCap;
    const next = stations[i + 1]; // undefined for last (ships to dock)

    // ── Breakdowns ──
    if (s.status === 'down') {
      s.downRemaining -= dt;
      s.downTime += dt;
      if (s.downRemaining <= 0) {
        s.status = s.job ? 'working' : 'idle';
        s.downRemaining = 0;
      } else {
        // smoke while down
        if (Math.random() < 0.25) {
          sim.particles.push({
            x: s.cx + (Math.random() - 0.5) * 30, y: MACHINE_TOP + 8,
            vx: (Math.random() - 0.5) * 6, vy: -18 - Math.random() * 10,
            life: 1.1, maxLife: 1.1, kind: 'smoke',
          });
        }
        continue;
      }
    }

    // Random breakdown chance while actively working
    if (s.job && Math.random() < (1 - effReliability(s, sim.global)) * 0.6 * dt) {
      s.status = 'down';
      s.downRemaining = 2.5 + Math.random() * 4 * (1 - 0.2 * sim.global.maintenance);
      for (let k = 0; k < 8; k++) {
        sim.particles.push({
          x: s.cx, y: MACHINE_TOP + MACHINE_H / 2,
          vx: (Math.random() - 0.5) * 90, vy: (Math.random() - 0.5) * 90,
          life: 0.5, maxLife: 0.5, kind: 'spark',
        });
      }
      continue;
    }

    // ── Advance current job ──
    if (s.job) {
      s.status = 'working';
      s.busyTime += dt;
      s.jobProgress += effRate(s, sim.global) * dt;

      if (s.jobProgress >= 1) {
        const unit = s.job;
        // QC: inspect and possibly scrap a defective unit
        if (s.id === 'qc' && unit.defective && Math.random() < (s.catchRate + 0.10 * s.upTrain + 0.12 * s.upPoka)) {
          sim.scrapped++;
          sim.costs += SCRAP_COST;
          sim.money -= SCRAP_COST;
          for (let k = 0; k < 5; k++) {
            sim.particles.push({ x: s.cx, y: CONVEYOR_Y, vx: (Math.random() - 0.5) * 60, vy: -20 - Math.random() * 30, life: 0.6, maxLife: 0.6, kind: 'defect' });
          }
          s.job = null; s.jobProgress = 0; s.processed++; s.flashUntil = nowMs + 180;
        } else if (next) {
          // try to push to next station's buffer
          if (next.input.length < next.inputCap && next.status !== 'down') {
            next.input.push(unit);
            sim.transits.push({ fromX: s.cx, fromY: CONVEYOR_Y, toX: next.cx - MACHINE_W / 2 - 10, toY: CONVEYOR_Y, progress: 0, defective: unit.defective });
            s.job = null; s.jobProgress = 0; s.processed++; s.flashUntil = nowMs + 180;
          } else {
            s.status = 'blocked';
            s.blockedTime += dt;
            s.jobProgress = 1;
          }
        } else {
          // last station → ship it
          const cycle = (nowMs - unit.bornMs) / 1000;
          sim.shipLog.push({ t: sim.elapsed, defective: unit.defective, cycle });
          if (unit.defective) {
            sim.shippedBad++;
            sim.costs += ESCAPE_PENALTY;
            sim.money -= ESCAPE_PENALTY;
            sim.particles.push({ x: LOGICAL_W - 70, y: CONVEYOR_Y - 30, vx: 0, vy: -22, life: 1.2, maxLife: 1.2, kind: 'defect', text: `-$${ESCAPE_PENALTY}` });
          } else {
            sim.shippedGood++;
            sim.revenue += REVENUE_PER_UNIT;
            sim.money += REVENUE_PER_UNIT;
            sim.particles.push({ x: LOGICAL_W - 70, y: CONVEYOR_Y - 30, vx: 0, vy: -22, life: 1.2, maxLife: 1.2, kind: 'cash', text: `+$${REVENUE_PER_UNIT}` });
          }
          s.job = null; s.jobProgress = 0; s.processed++; s.flashUntil = nowMs + 180;
        }
      }
    }

    // ── Pick up next unit if idle ──
    if (!s.job) {
      const source = i === 0 ? sim.rawFeed : s.input;
      if (source.length > 0) {
        const unit = source.shift()!;
        // station may introduce a defect
        if (s.id !== 'qc' && !unit.defective && Math.random() < effDefect(s, sim.global)) {
          unit.defective = true;
        }
        s.job = unit; s.jobProgress = 0; s.status = 'working';
      } else {
        s.status = 'idle';
        s.idleTime += dt;
      }
    }
  }

  // ── Advance transit animations ──
  for (const t of sim.transits) t.progress += dt * 2.6;
  sim.transits = sim.transits.filter(t => t.progress < 1);

  // ── Advance particles ──
  for (const p of sim.particles) {
    p.x += p.vx * dt; p.y += p.vy * dt;
    if (p.kind === 'spark') p.vy += 200 * dt;
    p.life -= dt;
  }
  sim.particles = sim.particles.filter(p => p.life > 0).slice(-120);

  // ── Trim rolling ship window (keep last 45 sim-seconds) ──
  const cutoff = sim.elapsed - 45;
  while (sim.shipLog.length && sim.shipLog[0].t < cutoff) sim.shipLog.shift();
}

/* ════════════════════════════════════════════════════════════════
   METRICS
   ════════════════════════════════════════════════════════════════ */

function computeMetrics(sim: SimState): Metrics {
  const win = sim.shipLog;
  const windowSec = Math.min(45, Math.max(5, sim.elapsed));
  const totalWin = win.length;
  const badWin = win.filter(s => s.defective).length;
  const goodWin = totalWin - badWin;

  const throughput = (goodWin / windowSec) * 3600; // good units/hour
  const escapedRate = totalWin > 0 ? badWin / totalWin : 0.5;
  const cycleTime = totalWin > 0 ? win.reduce((a, s) => a + s.cycle, 0) / totalWin : 0;

  // WIP across the whole line
  let wip = sim.rawFeed.length;
  for (const s of sim.stations) wip += s.input.length + (s.job ? 1 : 0);

  // OEE
  const elapsed = Math.max(1, sim.elapsed);
  const totalDown = sim.stations.reduce((a, s) => a + s.downTime, 0);
  const availability = Math.max(0, 1 - totalDown / (sim.stations.length * elapsed));
  // bottleneck ideal throughput sets the performance ceiling
  const idealRate = Math.min(...sim.stations.map(s => effRate(s, sim.global))) * 3600;
  const performance = idealRate > 0 ? Math.min(1, (throughput / (1 - escapedRate || 1)) / idealRate) : 0;
  const quality = 1 - escapedRate;
  const oee = Math.max(0, Math.min(1, availability * performance * quality));

  const sigmaLevel = Math.round(sigmaFromDefectRate(escapedRate) * 10) / 10;
  const totalShipped = sim.shippedGood + sim.shippedBad;
  const costPerUnit = sim.shippedGood > 0 ? sim.costs / sim.shippedGood : 0;

  // Identify bottleneck: most-blocked upstream / fullest buffer / slowest effective rate
  let bottleneck: StationId | null = null;
  let worst = Infinity;
  for (const s of sim.stations) {
    const eff = effRate(s, sim.global) * effReliability(s, sim.global);
    const penalty = eff - (s.input.length / s.inputCap) * 0.15; // fuller buffer => more constrained
    if (penalty < worst) { worst = penalty; bottleneck = s.id; }
  }

  return {
    throughput: Math.round(throughput),
    defectRate: escapedRate,
    cycleTime: Math.round(cycleTime * 10) / 10,
    oee, sigmaLevel, costPerUnit: Math.round(costPerUnit * 100) / 100,
    wip,
    availability, performance, quality,
    money: Math.round(sim.money),
    profit: Math.round(sim.revenue - sim.costs),
    shippedGood: sim.shippedGood,
    bottleneck: totalShipped < 4 ? null : bottleneck,
  };
}

/* ════════════════════════════════════════════════════════════════
   CANVAS RENDERING
   ════════════════════════════════════════════════════════════════ */

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function drawWorker(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, active: boolean, t: number) {
  const bob = active ? Math.sin(t / 140 + x) * 2 : 0;
  // legs
  ctx.strokeStyle = '#0f172a'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x - 3, y + 14 + bob); ctx.lineTo(x - 3, y + 22); ctx.moveTo(x + 3, y + 14 + bob); ctx.lineTo(x + 3, y + 22); ctx.stroke();
  // body
  ctx.fillStyle = color;
  roundRect(ctx, x - 6, y + bob, 12, 16, 4); ctx.fill();
  // head
  ctx.fillStyle = '#fbcb9c';
  ctx.beginPath(); ctx.arc(x, y - 5 + bob, 5, 0, Math.PI * 2); ctx.fill();
  // hard hat
  ctx.fillStyle = '#fbbf24';
  ctx.beginPath(); ctx.arc(x, y - 6 + bob, 5.5, Math.PI, 0); ctx.fill();
  ctx.fillRect(x - 6, y - 6 + bob, 12, 2);
}

function drawFactory(
  ctx: CanvasRenderingContext2D,
  sim: SimState,
  bottleneck: StationId | null,
  selected: StationId | null,
  nowMs: number,
) {
  // ── Floor ──
  const grad = ctx.createLinearGradient(0, 0, 0, LOGICAL_H);
  grad.addColorStop(0, '#0b1220'); grad.addColorStop(1, '#0f172a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);

  // floor grid
  ctx.strokeStyle = '#16213a'; ctx.lineWidth = 1;
  for (let x = 0; x <= LOGICAL_W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 60); ctx.lineTo(x, LOGICAL_H); ctx.stroke(); }
  for (let y = 60; y <= LOGICAL_H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(LOGICAL_W, y); ctx.stroke(); }

  // ── Raw materials silo (left) ──
  ctx.fillStyle = '#334155';
  roundRect(ctx, 18, CONVEYOR_Y - 46, 70, 92, 8); ctx.fill();
  ctx.fillStyle = '#475569'; roundRect(ctx, 18, CONVEYOR_Y - 46, 70, 18, 8); ctx.fill();
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px system-ui'; ctx.textAlign = 'center';
  ctx.fillText('RAW', 53, CONVEYOR_Y - 33); ctx.fillText('MATERIAL', 53, CONVEYOR_Y + 40);
  // raw stock dots
  for (let i = 0; i < Math.min(6, sim.rawFeed.length); i++) {
    ctx.fillStyle = '#64748b';
    ctx.beginPath(); ctx.arc(35 + (i % 3) * 18, CONVEYOR_Y - 6 + Math.floor(i / 3) * 16, 5, 0, Math.PI * 2); ctx.fill();
  }

  // ── Shipping dock (right) ──
  ctx.fillStyle = '#1e3a2e';
  roundRect(ctx, LOGICAL_W - 96, CONVEYOR_Y - 46, 80, 92, 8); ctx.fill();
  ctx.fillStyle = '#22c55e'; ctx.font = 'bold 10px system-ui'; ctx.textAlign = 'center';
  ctx.fillText('🚚 SHIP', LOGICAL_W - 56, CONVEYOR_Y - 30);
  ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 16px system-ui';
  ctx.fillText(String(sim.shippedGood), LOGICAL_W - 56, CONVEYOR_Y + 6);
  ctx.fillStyle = '#64748b'; ctx.font = '9px system-ui';
  ctx.fillText('shipped', LOGICAL_W - 56, CONVEYOR_Y + 22);

  // ── Conveyor belt ──
  ctx.fillStyle = '#1e293b';
  roundRect(ctx, 90, CONVEYOR_Y - 14, LOGICAL_W - 186, 28, 4); ctx.fill();
  ctx.strokeStyle = '#334155'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(90, CONVEYOR_Y - 14); ctx.lineTo(LOGICAL_W - 96, CONVEYOR_Y - 14); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(90, CONVEYOR_Y + 14); ctx.lineTo(LOGICAL_W - 96, CONVEYOR_Y + 14); ctx.stroke();
  // moving belt teeth
  ctx.strokeStyle = '#3b4a63'; ctx.lineWidth = 3;
  ctx.setLineDash([10, 26]); ctx.lineDashOffset = -sim.beltOffset;
  ctx.beginPath(); ctx.moveTo(90, CONVEYOR_Y); ctx.lineTo(LOGICAL_W - 96, CONVEYOR_Y); ctx.stroke();
  ctx.setLineDash([]);

  // ── Stations ──
  for (const s of sim.stations) {
    const left = s.cx - MACHINE_W / 2;
    const isBottleneck = s.id === bottleneck;
    const isSelected = s.id === selected;
    const flashing = nowMs < s.flashUntil;

    // input buffer (stacked boxes to the LEFT — the key bottleneck signal)
    const bufFill = s.input.length / s.inputCap;
    for (let i = 0; i < s.input.length; i++) {
      const bx = left - 14 - i * 15;
      if (bx < 96) break;
      const u = s.input[i];
      ctx.fillStyle = u.defective ? '#ef4444' : '#60a5fa';
      roundRect(ctx, bx - 6, CONVEYOR_Y - 6, 12, 12, 2); ctx.fill();
      ctx.strokeStyle = u.defective ? '#fca5a5' : '#bfdbfe'; ctx.lineWidth = 1; ctx.stroke();
    }

    // machine shadow
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    roundRect(ctx, left + 4, MACHINE_TOP + 6, MACHINE_W, MACHINE_H, 10); ctx.fill();

    // machine body
    const bodyGrad = ctx.createLinearGradient(left, MACHINE_TOP, left, MACHINE_TOP + MACHINE_H);
    bodyGrad.addColorStop(0, '#243349'); bodyGrad.addColorStop(1, '#1a2436');
    ctx.fillStyle = bodyGrad;
    roundRect(ctx, left, MACHINE_TOP, MACHINE_W, MACHINE_H, 10); ctx.fill();

    // border (selected / bottleneck / normal)
    ctx.lineWidth = isSelected ? 3 : 2;
    ctx.strokeStyle = isSelected ? '#e2e8f0' : isBottleneck ? '#ef4444' : s.color;
    if (isBottleneck) { ctx.shadowColor = '#ef4444'; ctx.shadowBlur = 18; }
    roundRect(ctx, left, MACHINE_TOP, MACHINE_W, MACHINE_H, 10); ctx.stroke();
    ctx.shadowBlur = 0;

    // nameplate
    ctx.fillStyle = s.color;
    roundRect(ctx, left, MACHINE_TOP, MACHINE_W, 26, 10); ctx.fill();
    ctx.fillRect(left, MACHINE_TOP + 16, MACHINE_W, 10);
    ctx.fillStyle = '#0b1220'; ctx.font = 'bold 12px system-ui'; ctx.textAlign = 'center';
    ctx.fillText(s.name, s.cx, MACHINE_TOP + 18);

    // status light
    const statusColor = s.status === 'down' ? '#ef4444'
      : s.status === 'blocked' ? '#f59e0b'
      : s.status === 'working' ? '#22c55e' : '#64748b';
    ctx.fillStyle = statusColor;
    if (s.status === 'working' || s.status === 'down') { ctx.shadowColor = statusColor; ctx.shadowBlur = 10; }
    ctx.beginPath(); ctx.arc(left + MACHINE_W - 14, MACHINE_TOP + 40, 6, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;

    // status text
    ctx.fillStyle = statusColor; ctx.font = 'bold 9px system-ui'; ctx.textAlign = 'left';
    ctx.fillText(s.status.toUpperCase(), left + 10, MACHINE_TOP + 44);

    // job-in-progress window
    const winY = MACHINE_TOP + 54;
    ctx.fillStyle = '#0b1220';
    roundRect(ctx, left + 12, winY, MACHINE_W - 24, 30, 5); ctx.fill();
    if (s.job) {
      if (flashing) { ctx.fillStyle = '#fde68a'; ctx.globalAlpha = 0.4; roundRect(ctx, left + 12, winY, MACHINE_W - 24, 30, 5); ctx.fill(); ctx.globalAlpha = 1; }
      ctx.fillStyle = s.job.defective ? '#ef4444' : '#60a5fa';
      ctx.beginPath(); ctx.arc(left + 26, winY + 15, 7, 0, Math.PI * 2); ctx.fill();
      // progress bar
      ctx.fillStyle = '#1e293b'; roundRect(ctx, left + 40, winY + 11, MACHINE_W - 58, 8, 4); ctx.fill();
      ctx.fillStyle = s.color; roundRect(ctx, left + 40, winY + 11, (MACHINE_W - 58) * Math.min(1, s.jobProgress), 8, 4); ctx.fill();
    } else {
      ctx.fillStyle = '#475569'; ctx.font = '9px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(s.status === 'down' ? '⚠ DOWN' : 'waiting…', s.cx, winY + 18);
    }

    // throughput rate readout
    ctx.fillStyle = '#94a3b8'; ctx.font = '9px system-ui'; ctx.textAlign = 'center';
    ctx.fillText(`${(effRate(s, sim.global) * 3600).toFixed(0)} u/hr cap`, s.cx, MACHINE_TOP + 100);

    // buffer fill bar
    ctx.fillStyle = '#0b1220'; roundRect(ctx, left + 12, MACHINE_TOP + 106, MACHINE_W - 24, 6, 3); ctx.fill();
    ctx.fillStyle = bufFill > 0.8 ? '#ef4444' : bufFill > 0.5 ? '#f59e0b' : '#22c55e';
    roundRect(ctx, left + 12, MACHINE_TOP + 106, (MACHINE_W - 24) * bufFill, 6, 3); ctx.fill();

    // worker
    drawWorker(ctx, s.cx + MACHINE_W / 2 - 6, MACHINE_TOP + MACHINE_H + 20, s.color, s.status === 'working', nowMs);

    // bottleneck flag
    if (isBottleneck) {
      ctx.fillStyle = '#ef4444'; ctx.font = 'bold 10px system-ui'; ctx.textAlign = 'center';
      ctx.fillText('⚠ BOTTLENECK', s.cx, MACHINE_TOP - 8);
    }
  }

  // ── Transit boxes gliding along belt ──
  for (const t of sim.transits) {
    const x = t.fromX + (t.toX - t.fromX) * t.progress;
    const y = t.fromY + (t.toY - t.fromY) * t.progress - Math.sin(t.progress * Math.PI) * 10;
    ctx.fillStyle = t.defective ? '#ef4444' : '#60a5fa';
    roundRect(ctx, x - 6, y - 6, 12, 12, 2); ctx.fill();
    ctx.strokeStyle = t.defective ? '#fca5a5' : '#bfdbfe'; ctx.lineWidth = 1; ctx.stroke();
  }

  // ── Particles ──
  for (const p of sim.particles) {
    const a = Math.max(0, p.life / p.maxLife);
    if (p.kind === 'smoke') {
      ctx.fillStyle = `rgba(120,130,150,${a * 0.5})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, (1 - a) * 10 + 3, 0, Math.PI * 2); ctx.fill();
    } else if (p.kind === 'spark') {
      ctx.fillStyle = `rgba(251,191,36,${a})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
    } else if (p.kind === 'defect') {
      if (p.text) { ctx.fillStyle = `rgba(248,113,113,${a})`; ctx.font = 'bold 13px system-ui'; ctx.textAlign = 'center'; ctx.fillText(p.text, p.x, p.y); }
      else { ctx.fillStyle = `rgba(239,68,68,${a})`; ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); ctx.fill(); }
    } else if (p.kind === 'cash') {
      ctx.fillStyle = `rgba(74,222,128,${a})`; ctx.font = 'bold 13px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(p.text ?? '', p.x, p.y);
    }
  }
}

/* ════════════════════════════════════════════════════════════════
   SHARED STYLES
   ════════════════════════════════════════════════════════════════ */

const C = {
  bg: '#0b1220', panel: '#131c2e', panel2: '#0f172a', border: '#243349',
  text: '#e2e8f0', dim: '#94a3b8', faint: '#64748b',
  blue: '#3b82f6', green: '#22c55e', amber: '#f59e0b', red: '#ef4444', purple: '#a855f7',
};

const S: Record<string, React.CSSProperties> = {
  root: { background: C.bg, color: C.text, fontFamily: 'system-ui, -apple-system, sans-serif', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  sectionLabel: { color: C.faint, fontSize: 10, fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase' as const, marginBottom: 8 },
  modalOverlay: { position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.78)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 },
  modal: { background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, width: '100%', maxHeight: '90vh', overflowY: 'auto' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  closeBtn: { background: 'transparent', border: 'none', color: C.faint, cursor: 'pointer', fontSize: 20, lineHeight: 1 },
};
const btn = (extra?: React.CSSProperties): React.CSSProperties => ({ background: C.border, color: C.text, border: `1px solid #2f4156`, borderRadius: 8, padding: '7px 14px', cursor: 'pointer', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', ...extra });

/* ════════════════════════════════════════════════════════════════
   INTRO SCREEN  (scroll-safe — never cut off at the top)
   ════════════════════════════════════════════════════════════════ */

function IntroScreen({ scenarioKey, setScenarioKey, onStart }: {
  scenarioKey: ScenarioKey; setScenarioKey: (k: ScenarioKey) => void; onStart: () => void;
}) {
  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'auto', background: C.bg }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 24px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 52 }}>🏭</div>
          <h1 style={{ fontSize: 30, fontWeight: 900, margin: '6px 0 0', letterSpacing: '-0.02em' }}>Wentworth Factory Optimizer</h1>
          <p style={{ color: C.dim, fontSize: 15, maxWidth: 560, margin: '10px auto 0', lineHeight: 1.6 }}>
            Run a real production line. Find the constraint, kill defects, and turn a struggling
            plant into a Six-Sigma profit machine — using genuine Lean Six Sigma tools.
          </p>
        </div>

        {/* The goal */}
        <div style={{ background: 'linear-gradient(135deg,#13233f,#131c2e)', border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Your Objective</h2>
          </div>
          <p style={{ color: C.dim, fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>
            Units flow left → right through <b style={{ color: C.blue }}>Assembly</b> → <b style={{ color: C.green }}>Testing</b> → <b style={{ color: C.amber }}>Quality Control</b> → <b style={{ color: C.purple }}>Packaging</b>, then ship.
            You earn <b style={{ color: C.green }}>${REVENUE_PER_UNIT}</b> per good unit shipped, but lose <b style={{ color: C.red }}>${ESCAPE_PENALTY}</b> every time a defect escapes to a customer.
            Reinvest your profit into targeted improvements until you hit every target for your scenario.
          </p>
        </div>

        {/* How to play */}
        <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, marginBottom: 18 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, marginTop: 0, marginBottom: 14 }}>How to Play</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 12 }}>
            {[
              { n: '1', i: '▶', t: 'Start the line', d: 'Press Play. Watch units move through each machine. Boxes piling up before a machine = a buffer filling up.' },
              { n: '2', i: '🔎', t: 'Find the bottleneck', d: 'One station is slower than the rest. Its buffer overflows and starves everything downstream. It glows red and is flagged ⚠ BOTTLENECK.' },
              { n: '3', i: '🛠️', t: 'Click a machine', d: 'Select any station to open its panel, see its stats, and buy upgrades — faster equipment, maintenance, poka-yoke, training.' },
              { n: '4', i: '📈', t: 'Watch the metrics', d: 'OEE, Sigma, throughput, cycle time and cash update live. The Coach tells you what to fix next.' },
              { n: '5', i: '💡', t: 'Theory of Constraints', d: 'Only upgrading the TRUE bottleneck raises throughput. Speeding up a fast machine wastes money — a core Lean lesson.' },
              { n: '6', i: '🏆', t: 'Hit your targets', d: 'Reach the target Sigma, units shipped, and profit to win the scenario.' },
            ].map(x => (
              <div key={x.n} style={{ background: C.panel2, borderRadius: 10, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ background: C.blue, color: '#fff', borderRadius: 999, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900 }}>{x.n}</span>
                  <span style={{ fontSize: 15 }}>{x.i}</span>
                  <span style={{ fontWeight: 700, fontSize: 13 }}>{x.t}</span>
                </div>
                <p style={{ color: C.dim, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 18 }}>
          <h2 style={{ fontSize: 13, fontWeight: 800, marginTop: 0, marginBottom: 10, color: C.dim }}>Reading the Floor</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 12, color: C.dim }}>
            <span><span style={{ display: 'inline-block', width: 11, height: 11, background: '#60a5fa', borderRadius: 2, marginRight: 6, verticalAlign: 'middle' }} />Good unit</span>
            <span><span style={{ display: 'inline-block', width: 11, height: 11, background: C.red, borderRadius: 2, marginRight: 6, verticalAlign: 'middle' }} />Defective unit</span>
            <span>🟢 Working &nbsp; 🟡 Blocked (buffer full downstream) &nbsp; 🔴 Broken down &nbsp; ⚪ Idle (starved)</span>
          </div>
        </div>

        {/* Scenario picker */}
        <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, marginTop: 0, marginBottom: 14 }}>Choose a Scenario</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
            {(Object.keys(SCENARIOS) as ScenarioKey[]).map(k => {
              const sc = SCENARIOS[k];
              const dc = sc.difficulty === 'Beginner' ? C.green : sc.difficulty === 'Intermediate' ? C.amber : sc.difficulty === 'Advanced' ? '#fb923c' : C.red;
              const sel = scenarioKey === k;
              return (
                <button key={k} onClick={() => setScenarioKey(k)}
                  style={{ textAlign: 'left', background: sel ? '#13233f' : C.panel2, border: `2px solid ${sel ? C.blue : C.border}`, borderRadius: 12, padding: 14, cursor: 'pointer', color: C.text }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontWeight: 800, fontSize: 14 }}>{sc.name}</span>
                    {sel && <span style={{ color: C.blue, fontSize: 15 }}>✓</span>}
                  </div>
                  <p style={{ color: C.dim, fontSize: 11.5, lineHeight: 1.5, margin: '0 0 10px' }}>{sc.blurb}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: dc, background: dc + '20', border: `1px solid ${dc}40`, borderRadius: 999, padding: '2px 8px' }}>{sc.difficulty}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.amber, background: C.amber + '20', borderRadius: 999, padding: '2px 8px' }}>{sc.targetSigma}σ</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.green, background: C.green + '20', borderRadius: 999, padding: '2px 8px' }}>Ship {sc.targetShip}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onStart} style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: '#fff', border: 'none', borderRadius: 12, padding: '15px 56px', fontSize: 17, fontWeight: 900, cursor: 'pointer', boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }}>
            ▶ Enter the Factory
          </button>
          <p style={{ color: C.faint, fontSize: 11, marginTop: 10 }}>Progress auto-saves to your browser.</p>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MODALS  (Fishbone / Control Chart / Capability / Comparison)
   ════════════════════════════════════════════════════════════════ */

function FishboneModal({ onClose }: { onClose: () => void }) {
  const causes: Record<string, string[]> = {
    Man: ['Skill gaps', 'Fatigue', 'No standard work'],
    Machine: ['Breakdowns', 'Poor calibration', 'Worn tooling'],
    Material: ['Supplier defects', 'Storage damage', 'No incoming check'],
    Method: ['Complex setup', 'No poka-yoke', 'Long changeover'],
    Measurement: ['Gauge R&R', 'No SPC', 'Bad sampling'],
    Environment: ['Temperature', 'Vibration', 'Contamination'],
  };
  const colors: Record<string, string> = { Man: C.blue, Machine: C.green, Material: '#fb923c', Method: C.purple, Measurement: C.amber, Environment: '#ec4899' };
  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={{ ...S.modal, maxWidth: 760 }} onClick={e => e.stopPropagation()}>
        <div style={S.modalHeader}><span style={{ fontSize: 18, fontWeight: 800 }}>🐟 Fishbone (Ishikawa) — Root Cause Analysis</span><button style={S.closeBtn} onClick={onClose}>✕</button></div>
        <p style={{ color: C.dim, fontSize: 13, marginBottom: 14 }}>The 6M framework for diagnosing high defect rates. Use the "5 Whys" on each branch to drive to root causes.</p>
        <svg viewBox="0 0 720 320" style={{ width: '100%', background: C.panel2, borderRadius: 8, border: `1px solid ${C.border}` }}>
          <line x1="60" y1="160" x2="640" y2="160" stroke="#475569" strokeWidth="3" />
          <polygon points="660,160 638,150 638,170" fill={C.red} />
          <rect x="600" y="135" width="110" height="50" rx="6" fill={C.panel2} stroke={C.red} strokeWidth="2" />
          <text x="655" y="157" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">HIGH</text>
          <text x="655" y="172" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">DEFECTS</text>
          {Object.entries(causes).map(([label, items], idx) => {
            const top = idx < 3; const col = idx % 3;
            const bx = 140 + col * 175; const by = top ? 60 : 260; const jy = top ? 160 : 160;
            return (
              <g key={label}>
                <line x1={bx} y1={by} x2={bx + 55} y2={jy} stroke={colors[label]} strokeWidth="2.5" />
                <text x={bx - 6} y={top ? by - 6 : by + 16} textAnchor="middle" fill={colors[label]} fontSize="12" fontWeight="bold">{label}</text>
                {items.map((c, i) => (
                  <text key={c} x={bx - 40 + i * 6} y={top ? by + 16 + i * 17 : by - 8 - i * 17} fill={C.dim} fontSize="9">• {c}</text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function ControlChartModal({ history, onClose }: { history: SimState['sigmaHistory']; onClose: () => void }) {
  const data = history.slice(-40).map((h, i) => ({ t: i, defect: Math.round(h.defect * 10000) / 100 }));
  const vals = data.map(d => d.defect);
  const mean = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  const sd = vals.length > 1 ? Math.sqrt(vals.reduce((a, v) => a + (v - mean) ** 2, 0) / (vals.length - 1)) : 0;
  const ucl = mean + 3 * sd, lcl = Math.max(0, mean - 3 * sd);
  const ooc = data.filter(d => d.defect > ucl || d.defect < lcl).length;
  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={{ ...S.modal, maxWidth: 700 }} onClick={e => e.stopPropagation()}>
        <div style={S.modalHeader}><span style={{ fontSize: 18, fontWeight: 800 }}>📈 Control Chart — Escaped Defect %</span><button style={S.closeBtn} onClick={onClose}>✕</button></div>
        {data.length < 4 ? <p style={{ color: C.dim }}>Run the line a little longer to collect samples…</p> : (
          <>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="t" stroke="#475569" tick={{ fill: C.faint, fontSize: 11 }} />
                <YAxis stroke="#475569" tick={{ fill: C.faint, fontSize: 11 }} unit="%" />
                <Tooltip contentStyle={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 6 }} />
                <ReferenceLine y={ucl} stroke={C.red} strokeDasharray="6 3" label={{ value: 'UCL', fill: C.red, fontSize: 10 }} />
                <ReferenceLine y={mean} stroke={C.green} strokeDasharray="6 3" label={{ value: 'CL', fill: C.green, fontSize: 10 }} />
                <ReferenceLine y={lcl} stroke={C.amber} strokeDasharray="6 3" label={{ value: 'LCL', fill: C.amber, fontSize: 10 }} />
                <Line type="monotone" dataKey="defect" stroke={C.blue} strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              {[['CL', mean.toFixed(2) + '%', C.green], ['UCL', ucl.toFixed(2) + '%', C.red], ['LCL', lcl.toFixed(2) + '%', C.amber], ['Out of control', String(ooc), ooc ? C.red : C.green]].map(([l, v, c]) => (
                <div key={l} style={{ flex: 1, background: C.panel2, borderRadius: 8, padding: '8px 12px', borderTop: `2px solid ${c}` }}>
                  <div style={{ color: C.faint, fontSize: 10 }}>{l}</div><div style={{ color: c as string, fontWeight: 800, fontSize: 15 }}>{v}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CapabilityModal({ metrics, targetSigma, onClose }: { metrics: Metrics; targetSigma: number; onClose: () => void }) {
  const cp = metrics.sigmaLevel / 3;
  const dpmo = Math.round(metrics.defectRate * 1_000_000);
  const pts: { x: number; y: number }[] = [];
  for (let z = -4; z <= 4; z += 0.2) pts.push({ x: z, y: Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI) });
  const spec = Math.max(1, targetSigma - 1.5);
  const px = (z: number) => (z + 4) * 55 + 30;
  const path = pts.map((p, i) => `${i ? 'L' : 'M'} ${px(p.x)},${190 - p.y * 560}`).join(' ');
  const fill = `${path} L ${px(4)},190 L ${px(-4)},190 Z`;
  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={{ ...S.modal, maxWidth: 620 }} onClick={e => e.stopPropagation()}>
        <div style={S.modalHeader}><span style={{ fontSize: 18, fontWeight: 800 }}>📐 Process Capability</span><button style={S.closeBtn} onClick={onClose}>✕</button></div>
        <svg viewBox="0 0 510 210" style={{ width: '100%', background: C.panel2, borderRadius: 8, border: `1px solid ${C.border}` }}>
          <clipPath id="ls"><rect x="0" y="0" width={px(-spec)} height="210" /></clipPath>
          <clipPath id="rs"><rect x={px(spec)} y="0" width="510" height="210" /></clipPath>
          <clipPath id="in"><rect x={px(-spec)} y="0" width={px(spec) - px(-spec)} height="210" /></clipPath>
          <path d={fill} fill="#ef444433" clipPath="url(#ls)" /><path d={fill} fill="#ef444433" clipPath="url(#rs)" /><path d={fill} fill="#22c55e2e" clipPath="url(#in)" />
          <path d={path} fill="none" stroke={C.blue} strokeWidth="2" />
          <line x1={px(-spec)} y1="14" x2={px(-spec)} y2="190" stroke={C.red} strokeDasharray="4 3" /><text x={px(-spec)} y="12" textAnchor="middle" fill="#f87171" fontSize="10">LSL</text>
          <line x1={px(spec)} y1="14" x2={px(spec)} y2="190" stroke={C.red} strokeDasharray="4 3" /><text x={px(spec)} y="12" textAnchor="middle" fill="#f87171" fontSize="10">USL</text>
          <line x1={px(0)} y1="22" x2={px(0)} y2="190" stroke={C.green} strokeDasharray="4 3" />
          <line x1="20" y1="190" x2="490" y2="190" stroke="#475569" />
          {[-3, -2, -1, 0, 1, 2, 3].map(z => <text key={z} x={px(z)} y="204" textAnchor="middle" fill={C.faint} fontSize="9">{z}σ</text>)}
        </svg>
        <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
          {[['Cp', cp.toFixed(2), cp >= 1.33, '≥1.33'], ['Sigma', metrics.sigmaLevel.toFixed(1), metrics.sigmaLevel >= targetSigma, `≥${targetSigma}`], ['DPMO', dpmo.toLocaleString(), dpmo < 3400, '<3,400'], ['Yield', ((1 - metrics.defectRate) * 100).toFixed(1) + '%', metrics.defectRate < 0.01, '>99%']].map(([l, v, ok, tgt]) => (
            <div key={l as string} style={{ flex: 1, background: C.panel2, borderRadius: 8, padding: '8px 10px', borderTop: `2px solid ${ok ? C.green : C.red}` }}>
              <div style={{ color: C.faint, fontSize: 10 }}>{l}</div><div style={{ color: ok ? C.green : C.red, fontWeight: 800, fontSize: 16 }}>{v}</div><div style={{ color: '#475569', fontSize: 9 }}>{tgt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparisonModal({ baseline, current, onClose }: { baseline: Metrics; current: Metrics; onClose: () => void }) {
  const rows: [string, number, number, string, 'hi' | 'lo'][] = [
    ['Throughput', baseline.throughput, current.throughput, 'u/hr', 'hi'],
    ['Defect %', baseline.defectRate * 100, current.defectRate * 100, '%', 'lo'],
    ['Cycle Time', baseline.cycleTime, current.cycleTime, 's', 'lo'],
    ['OEE', baseline.oee * 100, current.oee * 100, '%', 'hi'],
    ['Sigma', baseline.sigmaLevel, current.sigmaLevel, 'σ', 'hi'],
    ['Cost/Unit', baseline.costPerUnit, current.costPerUnit, '$', 'lo'],
  ];
  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={{ ...S.modal, maxWidth: 560 }} onClick={e => e.stopPropagation()}>
        <div style={S.modalHeader}><span style={{ fontSize: 18, fontWeight: 800 }}>📊 Before / After</span><button style={S.closeBtn} onClick={onClose}>✕</button></div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead><tr>{['Metric', 'Before', 'After', 'Δ'].map(h => <th key={h} style={{ padding: '8px 12px', color: C.faint, textAlign: h === 'Metric' ? 'left' : 'center', borderBottom: `1px solid ${C.border}`, fontSize: 11 }}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map(([label, b, a, unit, dir]) => {
              const improved = dir === 'hi' ? a > b : a < b;
              const pct = b !== 0 ? Math.abs((a - b) / b * 100).toFixed(0) : '—';
              return (
                <tr key={label} style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{label}</td>
                  <td style={{ padding: '8px 12px', color: C.dim, textAlign: 'center' }}>{b.toFixed(1)}{unit}</td>
                  <td style={{ padding: '8px 12px', color: improved ? C.green : C.red, textAlign: 'center', fontWeight: 800 }}>{a.toFixed(1)}{unit}</td>
                  <td style={{ padding: '8px 12px', textAlign: 'center', color: improved ? C.green : C.red, fontWeight: 700 }}>{improved ? '▲' : '▼'}{pct}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   SAVE / LOAD
   ════════════════════════════════════════════════════════════════ */

const SAVE_KEY = 'factory-optimizer-save-v2';
interface SaveBlob { scenarioKey: ScenarioKey; stationUpgrades: Record<StationId, Pick<SimStation, 'upRate' | 'upRel' | 'upPoka' | 'upTrain'>>; global: GlobalUpgrades; money: number; }

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */

const FactorySimulation: React.FC<FactorySimulationProps> = ({ onSessionComplete, userLevel = 'green', scenario: scenarioProp = 'training' }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>(scenarioProp);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [selected, setSelected] = useState<StationId | null>(null);
  const [modal, setModal] = useState<ModalType>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [won, setWon] = useState(false);
  const [baseline, setBaseline] = useState<Metrics | null>(null);

  // snapshot of metrics + station state for the React-rendered UI
  const [snap, setSnap] = useState<Metrics>(() => computeMetrics(makeSim(scenarioProp)));
  const [stationSnap, setStationSnap] = useState<SimStation[]>([]);

  // refs read inside the RAF loop (so the loop never restarts on speed/run toggles)
  const simRef = useRef<SimState>(makeSim(scenarioProp));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runRef = useRef(running);
  const speedRef = useRef(speed);
  const selectedRef = useRef(selected);
  const lastPublish = useRef(0);
  runRef.current = running; speedRef.current = speed; selectedRef.current = selected;

  const sc = SCENARIOS[scenarioKey];

  const showToast = useCallback((m: string) => { setToast(m); window.setTimeout(() => setToast(null), 2600); }, []);

  // ── Restore save ──
  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const blob = JSON.parse(raw) as SaveBlob;
      if (blob.scenarioKey !== scenarioKey) return;
      const sim = simRef.current;
      sim.global = blob.global;
      sim.money = blob.money;
      for (const st of sim.stations) {
        const u = blob.stationUpgrades[st.id];
        if (u) Object.assign(st, u);
      }
    } catch { /* ignore */ }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── The RAF loop: fixed-timestep logic + 60fps render ──
  useEffect(() => {
    let raf = 0; let prev = performance.now(); let acc = 0;
    const loop = (now: number) => {
      const real = Math.min(0.05, (now - prev) / 1000); prev = now;
      if (runRef.current && !won) {
        acc += real * speedRef.current;
        let guard = 0;
        while (acc >= LOGIC_DT && guard < 20) { stepSim(simRef.current, LOGIC_DT, now); acc -= LOGIC_DT; guard++; }
      }
      // render
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx) {
        const m = computeMetrics(simRef.current);
        drawFactory(ctx, simRef.current, m.bottleneck, selectedRef.current, now);
        // publish snapshot ~5×/sec
        if (now - lastPublish.current > 200) {
          lastPublish.current = now;
          setSnap(m);
          setStationSnap(simRef.current.stations.map(s => ({ ...s })));
          // record sigma history
          const sim = simRef.current;
          if (runRef.current && (sim.sigmaHistory.length === 0 || sim.elapsed - sim.sigmaHistory[sim.sigmaHistory.length - 1].t > 1)) {
            sim.sigmaHistory.push({ t: sim.elapsed, sigma: m.sigmaLevel, throughput: m.throughput, defect: m.defectRate });
            if (sim.sigmaHistory.length > 80) sim.sigmaHistory.shift();
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [won]);

  // ── Win detection ──
  useEffect(() => {
    if (won) return;
    if (snap.sigmaLevel >= sc.targetSigma && snap.shippedGood >= sc.targetShip && snap.profit >= sc.targetProfit) {
      setWon(true); setRunning(false);
      onSessionComplete?.(snap);
    }
  }, [snap, won, sc, onSessionComplete]);

  // ── Canvas click → select station ──
  const onCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * LOGICAL_W;
    const y = ((e.clientY - rect.top) / rect.height) * LOGICAL_H;
    let hit: StationId | null = null;
    for (const s of simRef.current.stations) {
      if (x >= s.cx - MACHINE_W / 2 && x <= s.cx + MACHINE_W / 2 && y >= MACHINE_TOP && y <= MACHINE_TOP + MACHINE_H) hit = s.id;
    }
    setSelected(prev => (hit === prev ? null : hit));
  }, []);

  // ── Apply upgrade ──
  const buyUpgrade = useCallback((def: UpgradeDef, stationId?: StationId) => {
    const sim = simRef.current;
    if (def.scope === 'station' && stationId) {
      const st = sim.stations.find(s => s.id === stationId)!;
      const lvl = (st as any)[def.key] as number;
      if (lvl >= def.maxLevel) { showToast(`${def.label} maxed out`); return; }
      const cost = upgradeCost(def, lvl);
      if (sim.money < cost) { showToast(`Need $${cost.toLocaleString()} (have $${Math.round(sim.money).toLocaleString()})`); return; }
      sim.money -= cost; sim.costs += cost; (st as any)[def.key] = lvl + 1;
      showToast(`✓ ${def.label} on ${st.name} (Lv ${lvl + 1})`);
    } else {
      const g = sim.global as any;
      if (def.key === 'kanban') {
        if (g.kanban) { showToast('Kanban already installed'); return; }
        const cost = def.baseCost;
        if (sim.money < cost) { showToast(`Need $${cost.toLocaleString()}`); return; }
        sim.money -= cost; sim.costs += cost; g.kanban = true; showToast('✓ Kanban pull system installed');
      } else {
        const lvl = g[def.key] as number;
        if (lvl >= def.maxLevel) { showToast(`${def.label} maxed out`); return; }
        const cost = upgradeCost(def, lvl);
        if (sim.money < cost) { showToast(`Need $${cost.toLocaleString()} (have $${Math.round(sim.money).toLocaleString()})`); return; }
        sim.money -= cost; sim.costs += cost; g[def.key] = lvl + 1; showToast(`✓ ${def.label} (Lv ${lvl + 1})`);
      }
    }
    setSnap(computeMetrics(sim));
    setStationSnap(sim.stations.map(s => ({ ...s })));
  }, [showToast]);

  const handleSave = useCallback(() => {
    const sim = simRef.current;
    const blob: SaveBlob = {
      scenarioKey, money: sim.money, global: sim.global,
      stationUpgrades: Object.fromEntries(sim.stations.map(s => [s.id, { upRate: s.upRate, upRel: s.upRel, upPoka: s.upPoka, upTrain: s.upTrain }])) as any,
    };
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(blob)); showToast('💾 Progress saved'); } catch { showToast('Save failed'); }
  }, [scenarioKey, showToast]);

  const startSim = useCallback(() => {
    simRef.current = makeSim(scenarioKey);
    // re-apply any saved upgrades
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) { const blob = JSON.parse(raw) as SaveBlob; if (blob.scenarioKey === scenarioKey) { const sim = simRef.current; sim.global = blob.global; sim.money = blob.money; for (const st of sim.stations) Object.assign(st, blob.stationUpgrades[st.id] || {}); } }
    } catch { /* ignore */ }
    setShowIntro(false); setRunning(true);
  }, [scenarioKey]);

  if (showIntro) return <IntroScreen scenarioKey={scenarioKey} setScenarioKey={setScenarioKey} onStart={startSim} />;

  const fmtPct = (v: number) => `${(v * 100).toFixed(1)}%`;
  const selStation = stationSnap.find(s => s.id === selected) ?? null;

  // Coach message
  let coach = 'Press Play and watch the flow. Which machine\'s buffer fills up first?';
  if (snap.bottleneck) {
    const bn = STATION_LAYOUT.find(s => s.id === snap.bottleneck)!;
    if (snap.defectRate > 0.06) coach = `Defects are escaping (${fmtPct(snap.defectRate)}). Add Poka-Yoke where defects are born (Assembly/Testing) and improve Supplier Quality.`;
    else coach = `${bn.name} is your constraint — its buffer is backing up. Click it and add Faster Equipment. (Upgrading other stations won't raise throughput!)`;
  }
  if (snap.money < 400) coach = 'Cash is low. Keep the line running to bank revenue before buying more upgrades.';

  // objectives
  const objectives = [
    { label: `Ship ${sc.targetShip} good units`, done: snap.shippedGood >= sc.targetShip, prog: Math.min(1, snap.shippedGood / sc.targetShip), val: `${snap.shippedGood}/${sc.targetShip}` },
    { label: `Reach ${sc.targetSigma}σ quality`, done: snap.sigmaLevel >= sc.targetSigma, prog: Math.min(1, snap.sigmaLevel / sc.targetSigma), val: `${snap.sigmaLevel}σ` },
    { label: `Earn $${sc.targetProfit.toLocaleString()} profit`, done: snap.profit >= sc.targetProfit, prog: Math.min(1, Math.max(0, snap.profit) / sc.targetProfit), val: `$${snap.profit.toLocaleString()}` },
  ];

  const trend = simRef.current.sigmaHistory.slice(-40).map((h, i) => ({ i, sigma: h.sigma, throughput: h.throughput }));

  return (
    <div style={S.root}>
      {/* HEADER */}
      <div style={{ background: C.panel, borderBottom: `1px solid ${C.border}`, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 17, fontWeight: 900 }}>🏭 Factory Optimizer</span>
        <span style={{ fontSize: 10, fontWeight: 800, color: C.blue, background: C.blue + '22', border: `1px solid ${C.blue}40`, borderRadius: 999, padding: '2px 9px' }}>{userLevel.toUpperCase()} BELT</span>
        <span style={{ fontSize: 12, color: C.dim }}>{sc.name}</span>
        <div style={{ flex: 1 }} />
        {/* money + profit pills */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ background: C.panel2, borderRadius: 8, padding: '4px 12px', border: `1px solid ${C.border}` }}>
            <span style={{ color: C.faint, fontSize: 10 }}>CASH</span> <b style={{ color: snap.money < 500 ? C.red : C.green, fontSize: 14 }}>${snap.money.toLocaleString()}</b>
          </div>
          <div style={{ background: C.panel2, borderRadius: 8, padding: '4px 12px', border: `1px solid ${C.border}` }}>
            <span style={{ color: C.faint, fontSize: 10 }}>PROFIT</span> <b style={{ color: snap.profit >= 0 ? C.green : C.red, fontSize: 14 }}>${snap.profit.toLocaleString()}</b>
          </div>
        </div>
        <button style={btn()} onClick={handleSave}>💾 Save</button>
        <button style={btn({ padding: '7px 11px' })} title="How to play" onClick={() => { setRunning(false); setShowIntro(true); }}>❓</button>
      </div>

      {/* CONTROL BAR */}
      <div style={{ background: C.panel, borderBottom: `1px solid ${C.border}`, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <button onClick={() => setRunning(r => !r)} style={btn({ background: running ? C.red : C.green, color: '#fff', border: 'none', fontWeight: 800 })}>{running ? '⏸ Pause' : '▶ Play'}</button>
        <span style={{ color: C.faint, fontSize: 12 }}>Speed</span>
        {[1, 2, 4].map(s => <button key={s} onClick={() => setSpeed(s)} style={btn({ borderColor: speed === s ? C.blue : '#2f4156', color: speed === s ? C.blue : C.text })}>{s}×</button>)}
        <div style={{ flex: 1 }} />
        <button style={btn()} onClick={() => { setBaseline(snap); showToast('📸 Baseline captured'); }}>📸 Baseline</button>
        {baseline && <button style={btn()} onClick={() => setModal('comparison')}>📊 Compare</button>}
        <button style={btn()} onClick={() => setModal('fishbone')}>🐟 Fishbone</button>
        <button style={btn()} onClick={() => setModal('controlChart')}>📈 Control</button>
        <button style={btn()} onClick={() => setModal('capability')}>📐 Capability</button>
      </div>

      {/* MAIN */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {/* LEFT: metrics */}
        <div style={{ width: 230, minWidth: 200, flexShrink: 0, background: C.panel, borderRight: `1px solid ${C.border}`, overflowY: 'auto', padding: 12 }}>
          <div style={S.sectionLabel}>Live Metrics</div>
          {[
            { l: 'Throughput', v: `${snap.throughput} u/hr`, c: C.blue },
            { l: 'Sigma Level', v: `${snap.sigmaLevel}σ`, c: snap.sigmaLevel >= sc.targetSigma ? C.green : C.amber },
            { l: 'Defect (escaped)', v: fmtPct(snap.defectRate), c: C.red },
            { l: 'OEE', v: fmtPct(snap.oee), c: C.amber },
            { l: 'Cycle Time', v: `${snap.cycleTime}s`, c: C.green },
            { l: 'WIP', v: String(snap.wip), c: C.faint },
            { l: 'Cost / Unit', v: `$${snap.costPerUnit.toFixed(2)}`, c: C.dim },
          ].map(m => (
            <div key={m.l} style={{ background: C.panel2, borderRadius: 8, padding: '8px 12px', borderLeft: `3px solid ${m.c}`, marginBottom: 6 }}>
              <div style={{ color: C.faint, fontSize: 10 }}>{m.l}</div><div style={{ color: m.c, fontWeight: 800, fontSize: 15 }}>{m.v}</div>
            </div>
          ))}

          <div style={{ ...S.sectionLabel, marginTop: 14 }}>OEE Breakdown</div>
          {[['Availability', snap.availability, C.blue], ['Performance', snap.performance, C.green], ['Quality', snap.quality, C.amber]].map(([l, v, c]) => (
            <div key={l as string} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}><span style={{ color: C.dim }}>{l}</span><span style={{ color: c as string, fontWeight: 700 }}>{fmtPct(v as number)}</span></div>
              <div style={{ background: C.panel2, borderRadius: 4, height: 6 }}><div style={{ width: `${(v as number) * 100}%`, height: '100%', background: c as string, borderRadius: 4, transition: 'width 0.3s' }} /></div>
            </div>
          ))}

          {trend.length > 3 && (
            <>
              <div style={{ ...S.sectionLabel, marginTop: 14 }}>Sigma Trend</div>
              <ResponsiveContainer width="100%" height={90}>
                <AreaChart data={trend} margin={{ top: 4, right: 4, bottom: 0, left: -28 }}>
                  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.green} stopOpacity={0.5} /><stop offset="100%" stopColor={C.green} stopOpacity={0} /></linearGradient></defs>
                  <YAxis domain={[1, 6]} tick={{ fill: C.faint, fontSize: 9 }} stroke="#475569" />
                  <XAxis dataKey="i" hide />
                  <Area type="monotone" dataKey="sigma" stroke={C.green} fill="url(#sg)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </>
          )}
        </div>

        {/* CENTER: canvas + coach */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* coach */}
          <div style={{ background: 'linear-gradient(90deg,#13233f,#131c2e)', borderBottom: `1px solid ${C.border}`, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18 }}>🧑‍🏫</span>
            <span style={{ fontSize: 12.5, color: C.text, lineHeight: 1.4 }}><b style={{ color: C.blue }}>Coach:</b> {coach}</span>
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: 12, background: C.bg }}>
            <canvas ref={canvasRef} width={LOGICAL_W} height={LOGICAL_H} onClick={onCanvasClick}
              style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 10, border: `1px solid ${C.border}`, cursor: 'pointer' }} />
            <p style={{ color: C.faint, fontSize: 11, textAlign: 'center', marginTop: 8 }}>💡 Click any machine to inspect it and buy upgrades.</p>
          </div>
        </div>

        {/* RIGHT: objectives + upgrades / station panel */}
        <div style={{ width: 300, minWidth: 260, flexShrink: 0, background: C.panel, borderLeft: `1px solid ${C.border}`, overflowY: 'auto', padding: 14 }}>
          {/* Objectives */}
          <div style={S.sectionLabel}>Objectives</div>
          {objectives.map(o => (
            <div key={o.label} style={{ background: C.panel2, borderRadius: 8, padding: '8px 10px', marginBottom: 6, border: `1px solid ${o.done ? C.green + '60' : C.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                <span style={{ color: o.done ? C.green : C.text }}>{o.done ? '✓ ' : ''}{o.label}</span>
                <b style={{ color: o.done ? C.green : C.dim }}>{o.val}</b>
              </div>
              <div style={{ background: C.bg, borderRadius: 4, height: 5 }}><div style={{ width: `${o.prog * 100}%`, height: '100%', background: o.done ? C.green : C.blue, borderRadius: 4, transition: 'width 0.3s' }} /></div>
            </div>
          ))}

          {/* Station panel OR global upgrades */}
          {selStation ? (
            <>
              <div style={{ ...S.sectionLabel, marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: selStation.color }}>{selStation.name}</span>
                <span onClick={() => setSelected(null)} style={{ cursor: 'pointer', color: C.faint }}>✕ close</span>
              </div>
              <div style={{ background: C.panel2, borderRadius: 8, padding: 10, marginBottom: 10, fontSize: 11, color: C.dim, lineHeight: 1.7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Capacity</span><b style={{ color: C.text }}>{(effRate(selStation, simRef.current.global) * 3600).toFixed(0)} u/hr</b></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Reliability</span><b style={{ color: C.text }}>{fmtPct(effReliability(selStation, simRef.current.global))}</b></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Defects created</span><b style={{ color: C.text }}>{selStation.id === 'qc' ? '—' : fmtPct(effDefect(selStation, simRef.current.global))}</b></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Buffer</span><b style={{ color: C.text }}>{selStation.input.length}/{selStation.inputCap}</b></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Processed</span><b style={{ color: C.text }}>{selStation.processed}</b></div>
              </div>
              {STATION_UPGRADES.filter(u => !(selStation.id === 'qc' && u.key === 'upPoka') || true).map(def => {
                const lvl = (selStation as any)[def.key] as number;
                const maxed = lvl >= def.maxLevel; const cost = upgradeCost(def, lvl);
                const afford = snap.money >= cost;
                return (
                  <button key={def.key} disabled={maxed || !afford} onClick={() => buyUpgrade(def, selStation.id)}
                    style={{ width: '100%', textAlign: 'left', background: maxed ? C.green + '15' : C.panel2, border: `1px solid ${maxed ? C.green + '50' : afford ? C.border : '#1e293b'}`, borderRadius: 8, padding: 10, marginBottom: 6, cursor: maxed || !afford ? 'not-allowed' : 'pointer', opacity: !afford && !maxed ? 0.55 : 1, color: C.text }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 12.5 }}>{def.icon} {def.label}</span>
                      <span style={{ fontSize: 10, color: C.faint }}>Lv {lvl}/{def.maxLevel}</span>
                    </div>
                    <div style={{ color: C.dim, fontSize: 10.5, margin: '4px 0 6px', lineHeight: 1.4 }}>{def.desc}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 9, color: C.faint }}>🔧 {def.lssTool}</span>
                      {maxed ? <span style={{ color: C.green, fontSize: 11, fontWeight: 700 }}>✓ MAX</span> : <span style={{ color: afford ? C.amber : C.red, fontWeight: 800, fontSize: 12 }}>${cost.toLocaleString()}</span>}
                    </div>
                  </button>
                );
              })}
            </>
          ) : (
            <>
              <div style={{ ...S.sectionLabel, marginTop: 16 }}>Plant-Wide Upgrades</div>
              <p style={{ color: C.faint, fontSize: 11, marginTop: -4, marginBottom: 8 }}>Click a machine on the floor for station-specific upgrades.</p>
              {GLOBAL_UPGRADES.map(def => {
                const g = simRef.current.global as any;
                const lvl = def.key === 'kanban' ? (g.kanban ? 1 : 0) : (g[def.key] as number);
                const maxed = lvl >= def.maxLevel; const cost = def.key === 'kanban' ? def.baseCost : upgradeCost(def, lvl);
                const afford = snap.money >= cost;
                return (
                  <button key={def.key} disabled={maxed || !afford} onClick={() => buyUpgrade(def)}
                    style={{ width: '100%', textAlign: 'left', background: maxed ? C.green + '15' : C.panel2, border: `1px solid ${maxed ? C.green + '50' : afford ? C.border : '#1e293b'}`, borderRadius: 8, padding: 10, marginBottom: 6, cursor: maxed || !afford ? 'not-allowed' : 'pointer', opacity: !afford && !maxed ? 0.55 : 1, color: C.text }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 12.5 }}>{def.icon} {def.label}</span>
                      {def.maxLevel > 1 && <span style={{ fontSize: 10, color: C.faint }}>Lv {lvl}/{def.maxLevel}</span>}
                    </div>
                    <div style={{ color: C.dim, fontSize: 10.5, margin: '4px 0 6px', lineHeight: 1.4 }}>{def.desc}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 9, color: C.faint }}>🔧 {def.lssTool}</span>
                      {maxed ? <span style={{ color: C.green, fontSize: 11, fontWeight: 700 }}>✓ DONE</span> : <span style={{ color: afford ? C.amber : C.red, fontWeight: 800, fontSize: 12 }}>${cost.toLocaleString()}</span>}
                    </div>
                  </button>
                );
              })}
            </>
          )}
        </div>
      </div>

      {/* TOAST */}
      {toast && <div style={{ position: 'fixed', bottom: 22, left: '50%', transform: 'translateX(-50%)', background: C.panel, border: `1px solid ${C.border}`, borderRadius: 10, padding: '10px 20px', fontSize: 13, fontWeight: 600, boxShadow: '0 8px 30px rgba(0,0,0,0.5)', zIndex: 2000 }}>{toast}</div>}

      {/* MODALS */}
      {modal === 'fishbone' && <FishboneModal onClose={() => setModal(null)} />}
      {modal === 'controlChart' && <ControlChartModal history={simRef.current.sigmaHistory} onClose={() => setModal(null)} />}
      {modal === 'capability' && <CapabilityModal metrics={snap} targetSigma={sc.targetSigma} onClose={() => setModal(null)} />}
      {modal === 'comparison' && baseline && <ComparisonModal baseline={baseline} current={snap} onClose={() => setModal(null)} />}

      {/* WIN */}
      {won && (
        <div style={S.modalOverlay}>
          <div style={{ ...S.modal, maxWidth: 460, textAlign: 'center' }}>
            <div style={{ fontSize: 64 }}>🏆</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: C.green, margin: '6px 0' }}>Scenario Complete!</h2>
            <p style={{ color: C.dim, fontSize: 14, marginBottom: 18 }}>You transformed <b style={{ color: C.text }}>{sc.name}</b> into a {snap.sigmaLevel}σ operation.</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
              {[['Sigma', `${snap.sigmaLevel}σ`, C.green], ['Shipped', String(snap.shippedGood), C.blue], ['Profit', `$${snap.profit.toLocaleString()}`, C.amber], ['OEE', fmtPct(snap.oee), C.purple]].map(([l, v, c]) => (
                <div key={l as string} style={{ background: C.panel2, borderRadius: 8, padding: '8px 16px' }}><div style={{ color: C.faint, fontSize: 10 }}>{l}</div><div style={{ color: c as string, fontWeight: 900, fontSize: 17 }}>{v}</div></div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button style={btn({ background: C.blue, color: '#fff', border: 'none', fontWeight: 800 })} onClick={() => { setWon(false); setShowIntro(true); }}>🔄 New Scenario</button>
              <button style={btn()} onClick={() => { setWon(false); setRunning(true); }}>Keep Optimizing</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactorySimulation;
