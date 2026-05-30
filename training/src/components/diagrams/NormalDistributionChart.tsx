import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

function normalPDF(x: number, mean: number, std: number) {
  return (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / std) ** 2);
}

const mean = 0;
const std = 1;
const data = Array.from({ length: 121 }, (_, i) => {
  const x = -3 + i * 0.05;
  return { x: parseFloat(x.toFixed(2)), y: parseFloat(normalPDF(x, mean, std).toFixed(4)) };
});

export function NormalDistributionChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="x" tick={{ fill: '#8a899a', fontSize: 10 }} tickFormatter={v => `${v}σ`} ticks={[-3,-2,-1,0,1,2,3]} />
          <YAxis tick={{ fill: '#8a899a', fontSize: 10 }} />
          <Tooltip contentStyle={{ background: '#131320', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4 }} labelStyle={{ color: '#f0ece6', fontSize: 11 }} formatter={(v) => [Number(v).toFixed(4), 'Density']} itemStyle={{ color: '#c9a84c' }} />
          <Area type="monotone" dataKey="y" stroke="#c9a84c" fill="rgba(201,168,76,0.15)" strokeWidth={2} dot={false} />
          <ReferenceLine x={-1} stroke="rgba(201,168,76,0.3)" strokeDasharray="3 3" label={{ value: '-1σ', fill: '#8a899a', fontSize: 9 }} />
          <ReferenceLine x={1} stroke="rgba(201,168,76,0.3)" strokeDasharray="3 3" label={{ value: '+1σ', fill: '#8a899a', fontSize: 9 }} />
          <ReferenceLine x={-2} stroke="rgba(107,142,209,0.4)" strokeDasharray="3 3" label={{ value: '-2σ', fill: '#8a899a', fontSize: 9 }} />
          <ReferenceLine x={2} stroke="rgba(107,142,209,0.4)" strokeDasharray="3 3" label={{ value: '+2σ', fill: '#8a899a', fontSize: 9 }} />
          <ReferenceLine x={-3} stroke="rgba(155,107,181,0.4)" strokeDasharray="3 3" label={{ value: '-3σ', fill: '#8a899a', fontSize: 9 }} />
          <ReferenceLine x={3} stroke="rgba(155,107,181,0.4)" strokeDasharray="3 3" label={{ value: '+3σ', fill: '#8a899a', fontSize: 9 }} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-2 flex-wrap">
        {[
          { range: '±1σ', pct: '68.27%', color: 'rgba(201,168,76,0.6)' },
          { range: '±2σ', pct: '95.45%', color: 'rgba(107,142,209,0.6)' },
          { range: '±3σ', pct: '99.73%', color: 'rgba(155,107,181,0.6)' },
        ].map(b => (
          <div key={b.range} className="flex items-center gap-1.5 text-xs font-sans text-muted">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: b.color }} />
            <span>{b.range}: <span className="text-ink">{b.pct}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
