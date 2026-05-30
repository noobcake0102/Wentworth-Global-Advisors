import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { sigma: '1σ', dpmo: 691462, pct: '30.9%' },
  { sigma: '2σ', dpmo: 308538, pct: '69.1%' },
  { sigma: '3σ', dpmo: 66807, pct: '93.3%' },
  { sigma: '4σ', dpmo: 6210, pct: '99.4%' },
  { sigma: '5σ', dpmo: 233, pct: '99.98%' },
  { sigma: '6σ', dpmo: 3.4, pct: '99.9997%' },
];

export function SigmaLevelChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="sigma" tick={{ fill: '#8a899a', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }} />
        <YAxis scale="log" domain={[1, 1000000]} tick={{ fill: '#8a899a', fontSize: 10, fontFamily: 'DM Sans, sans-serif' }} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v.toString()} />
        <Tooltip
          contentStyle={{ background: '#131320', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4 }}
          labelStyle={{ color: '#f0ece6', fontFamily: 'DM Sans, sans-serif', fontSize: 12 }}
          formatter={(value, _name, entry) => [`${Number(value).toLocaleString()} DPMO (${(entry as any).payload.pct} yield)`, 'Defect Rate']}
          itemStyle={{ color: '#c9a84c' }}
        />
        <Bar dataKey="dpmo" radius={[3, 3, 0, 0]} name="DPMO">
          {data.map((_, i) => (
            <Cell key={i} fill={`rgba(201,168,76,${0.3 + (5 - i) * 0.14})`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
