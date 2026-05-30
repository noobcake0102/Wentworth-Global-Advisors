import { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ReferenceLine } from 'recharts';
import { Button } from '../ui/Button';

function generateValue(mean: number, std: number): number {
  // Box-Muller transform
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return Math.round((mean + z * std) * 10) / 10;
}

function buildHistogram(data: number[], std: number): { bin: string; count: number }[] {
  const binWidth = std / 2;
  const bins: Record<string, number> = {};
  data.forEach(v => {
    const bin = Math.round(v / binWidth) * binWidth;
    const key = bin.toFixed(1);
    bins[key] = (bins[key] || 0) + 1;
  });
  return Object.entries(bins).sort((a, b) => parseFloat(a[0]) - parseFloat(b[0])).map(([bin, count]) => ({ bin, count }));
}

const MEAN = 50;
const HIGH_STD = 8;
const LOW_STD = 2;
const LSL = 34;
const USL = 66;

export function VariationDemo() {
  const [data, setData] = useState<number[]>([]);
  const [reducedVariation, setReducedVariation] = useState(false);
  const [rolling, setRolling] = useState(false);

  const std = reducedVariation ? LOW_STD : HIGH_STD;

  const rollSamples = useCallback((count: number) => {
    setRolling(true);
    const newPoints = Array.from({ length: count }, () => generateValue(MEAN, std));
    setData(prev => [...prev.slice(-49), ...newPoints].slice(-50));
    setTimeout(() => setRolling(false), 300);
  }, [std]);

  const reset = () => setData([]);

  const defects = data.filter(v => v < LSL || v > USL).length;
  const defectRate = data.length > 0 ? Math.round((defects / data.length) * 100) : 0;
  const sigma = reducedVariation ? 5.3 : 2.0;

  const histData = buildHistogram(data, std);
  const runData = data.map((v, i) => ({ index: i + 1, value: v }));

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-0.5">Simulation</p>
        <h3 className="font-serif text-lg text-ink">Process Variation Simulator</h3>
        <p className="text-sm text-muted mt-1">Generate process outputs and observe how variation affects quality. Toggle "Reduce Variation" to see the impact of process improvement.</p>
      </div>

      <div className="p-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Button onClick={() => rollSamples(1)} disabled={rolling} size="sm">Generate 1 Sample</Button>
          <Button onClick={() => rollSamples(10)} disabled={rolling} size="sm" variant="outline">Generate 10</Button>
          <Button onClick={() => rollSamples(30)} disabled={rolling} size="sm" variant="outline">Generate 30</Button>
          <Button onClick={reset} variant="ghost" size="sm">Reset</Button>
          <label className="flex items-center gap-2 ml-auto cursor-pointer">
            <div
              onClick={() => { setReducedVariation(v => !v); setData([]); }}
              className={`relative w-10 h-5 rounded-full transition-colors duration-300 cursor-pointer ${reducedVariation ? 'bg-success' : 'bg-white/10'}`}
            >
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${reducedVariation ? 'translate-x-5' : ''}`} />
            </div>
            <span className="text-sm font-sans text-muted">Reduce Variation</span>
          </label>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Samples', value: data.length.toString(), danger: false, good: false },
            { label: 'Std Dev (σ)', value: data.length > 1 ? `±${std}` : '—', danger: false, good: false },
            { label: 'Defect Rate', value: data.length > 0 ? `${defectRate}%` : '—', danger: defectRate > 10, good: false },
            { label: 'Process Sigma', value: data.length > 0 ? `${sigma}σ` : '—', danger: false, good: sigma >= 4 },
          ].map(s => (
            <div key={s.label} className="rounded-md border border-border-gold bg-card/50 p-3 text-center">
              <p className="text-xs font-sans text-muted mb-1">{s.label}</p>
              <p className={`text-xl font-serif ${s.danger ? 'text-danger' : s.good ? 'text-success' : 'text-ink'}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {data.length === 0 ? (
          <div className="flex items-center justify-center h-40 rounded-md border border-border-gold bg-card/30">
            <p className="text-muted text-sm font-sans">Generate samples to see the distribution</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Histogram */}
            <div>
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-3">Distribution Histogram</p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={histData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="bin" tick={{ fill: '#8a899a', fontSize: 10 }} />
                  <YAxis tick={{ fill: '#8a899a', fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: '#131320', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4 }} labelStyle={{ color: '#f0ece6' }} itemStyle={{ color: '#c9a84c' }} />
                  <Bar dataKey="count" fill="#c9a84c" radius={[2, 2, 0, 0]} />
                  <ReferenceLine x={LSL.toFixed(1)} stroke="#e05c5c" strokeDasharray="4 2" label={{ value: 'LSL', fill: '#e05c5c', fontSize: 9 }} />
                  <ReferenceLine x={USL.toFixed(1)} stroke="#e05c5c" strokeDasharray="4 2" label={{ value: 'USL', fill: '#e05c5c', fontSize: 9 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Run chart */}
            {data.length >= 3 && (
              <div>
                <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-3">Run Chart</p>
                <ResponsiveContainer width="100%" height={140}>
                  <LineChart data={runData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="index" tick={{ fill: '#8a899a', fontSize: 10 }} />
                    <YAxis domain={[20, 80]} tick={{ fill: '#8a899a', fontSize: 10 }} />
                    <Tooltip contentStyle={{ background: '#131320', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4 }} labelStyle={{ color: '#f0ece6' }} itemStyle={{ color: '#c9a84c' }} />
                    <ReferenceLine y={MEAN} stroke="rgba(201,168,76,0.5)" strokeDasharray="4 2" />
                    <ReferenceLine y={LSL} stroke="#e05c5c" strokeDasharray="4 2" />
                    <ReferenceLine y={USL} stroke="#e05c5c" strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="value" stroke="#c9a84c" dot={{ fill: '#c9a84c', r: 2 }} strokeWidth={1.5} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
