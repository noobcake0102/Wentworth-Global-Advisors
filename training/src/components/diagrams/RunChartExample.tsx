import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  ...Array.from({ length: 15 }, (_, i) => ({ week: i + 1, time: Math.round(42 + (Math.random() - 0.5) * 12) })),
  { week: 16, time: 28, annotation: 'Improvement' },
  ...Array.from({ length: 14 }, (_, i) => ({ week: i + 17, time: Math.round(26 + (Math.random() - 0.5) * 6) })),
].map((d, i) => ({ ...d, week: i + 1 }));

export function RunChartExample() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="week" tick={{ fill: '#8a899a', fontSize: 10, fontFamily: 'DM Sans, sans-serif' }} label={{ value: 'Week', position: 'insideBottomRight', offset: -5, fill: '#8a899a', fontSize: 10 }} />
        <YAxis tick={{ fill: '#8a899a', fontSize: 10 }} label={{ value: 'Cycle Time (min)', angle: -90, position: 'insideLeft', fill: '#8a899a', fontSize: 10 }} />
        <Tooltip contentStyle={{ background: '#131320', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4 }} labelStyle={{ color: '#f0ece6', fontSize: 11 }} formatter={(v) => [`${v} min`, 'Cycle Time']} itemStyle={{ color: '#c9a84c' }} />
        <ReferenceLine x={16} stroke="#4caf82" strokeDasharray="4 2" label={{ value: 'Improvement Implemented', fill: '#4caf82', fontSize: 9, position: 'insideTopRight' }} />
        <ReferenceLine y={42} stroke="rgba(255,255,255,0.15)" strokeDasharray="4 2" label={{ value: 'Pre-avg: 42 min', fill: '#8a899a', fontSize: 9, position: 'insideLeft' }} />
        <ReferenceLine y={26} stroke="rgba(76,175,130,0.3)" strokeDasharray="4 2" label={{ value: 'Post-avg: 26 min', fill: '#4caf82', fontSize: 9, position: 'insideLeft' }} />
        <Line type="monotone" dataKey="time" stroke="#c9a84c" strokeWidth={2} dot={{ fill: '#c9a84c', r: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
