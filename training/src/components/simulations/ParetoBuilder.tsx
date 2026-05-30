import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
import { Button } from '../ui/Button';

interface Category {
  id: string;
  name: string;
  count: number;
}

const defaultCategories: Category[] = [
  { id: '1', name: 'Wrong Billing', count: 195 },
  { id: '2', name: 'Long Wait Times', count: 145 },
  { id: '3', name: 'Incorrect Info', count: 90 },
  { id: '4', name: 'Rude Service', count: 40 },
  { id: '5', name: 'Other', count: 30 },
];

export function ParetoBuilder() {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [newName, setNewName] = useState('');
  const [newCount, setNewCount] = useState('');

  const addCategory = () => {
    if (!newName.trim() || !newCount || isNaN(Number(newCount))) return;
    setCategories(prev => [...prev, { id: Date.now().toString(), name: newName.trim(), count: Number(newCount) }]);
    setNewName('');
    setNewCount('');
  };

  const removeCategory = (id: string) => setCategories(prev => prev.filter(c => c.id !== id));
  const updateCount = (id: string, val: string) => {
    const n = parseInt(val);
    if (!isNaN(n) && n >= 0) setCategories(prev => prev.map(c => c.id === id ? { ...c, count: n } : c));
  };

  const sorted = [...categories].sort((a, b) => b.count - a.count);
  const total = sorted.reduce((s, c) => s + c.count, 0);

  let cumulative = 0;
  const chartData = sorted.map(c => {
    cumulative += c.count;
    return {
      name: c.name,
      count: c.count,
      cumPct: total > 0 ? Math.round((cumulative / total) * 100) : 0,
    };
  });

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-0.5">Interactive Tool</p>
        <h3 className="font-serif text-lg text-ink">Pareto Chart Builder</h3>
        <p className="text-sm text-muted mt-1">Add defect categories and counts to build a live Pareto chart. The 80% cumulative line shows your "vital few."</p>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: category editor */}
        <div>
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-3">Categories</p>
          <div className="space-y-2 mb-4">
            {categories.map(c => (
              <div key={c.id} className="flex items-center gap-2">
                <div className="flex-1 bg-card border border-border-gold rounded px-3 py-2 text-sm text-ink">{c.name}</div>
                <input
                  type="number"
                  value={c.count}
                  onChange={e => updateCount(c.id, e.target.value)}
                  className="w-20 bg-card border border-border-gold rounded px-2 py-2 text-sm text-ink text-center focus:outline-none focus:border-gold/40"
                  min={0}
                />
                <button onClick={() => removeCategory(c.id)} className="text-muted/40 hover:text-danger transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              placeholder="Category name"
              onKeyDown={e => e.key === 'Enter' && addCategory()}
              className="flex-1 bg-card border border-border-gold rounded px-3 py-2 text-sm text-ink placeholder:text-muted/40 focus:outline-none focus:border-gold/40"
            />
            <input
              type="number"
              value={newCount}
              onChange={e => setNewCount(e.target.value)}
              placeholder="Count"
              onKeyDown={e => e.key === 'Enter' && addCategory()}
              className="w-20 bg-card border border-border-gold rounded px-2 py-2 text-sm text-ink text-center placeholder:text-muted/40 focus:outline-none focus:border-gold/40"
              min={0}
            />
            <Button size="sm" onClick={addCategory}><Plus className="w-3.5 h-3.5" /></Button>
          </div>
          <div className="mt-4 p-3 rounded-md bg-gold/5 border border-gold/20">
            <p className="text-xs font-sans text-muted">Total: <span className="text-gold font-medium">{total}</span> &nbsp;|&nbsp; Categories: <span className="text-gold font-medium">{categories.length}</span></p>
          </div>
        </div>

        {/* Right: chart */}
        <div>
          {chartData.length > 0 && total > 0 ? (
            <>
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-3">Pareto Chart</p>
              <ResponsiveContainer width="100%" height={220}>
                <ComposedChart data={chartData} margin={{ top: 0, right: 30, left: -10, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" tick={{ fill: '#8a899a', fontSize: 9 }} angle={-30} textAnchor="end" interval={0} />
                  <YAxis yAxisId="left" tick={{ fill: '#8a899a', fontSize: 10 }} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tick={{ fill: '#8a899a', fontSize: 10 }} tickFormatter={v => `${v}%`} />
                  <Tooltip contentStyle={{ background: '#131320', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4 }} labelStyle={{ color: '#f0ece6' }} />
                  <Bar yAxisId="left" dataKey="count" fill="#c9a84c" radius={[2, 2, 0, 0]} name="Count" />
                  <Line yAxisId="right" type="monotone" dataKey="cumPct" stroke="#e8c97a" strokeWidth={2} dot={{ fill: '#e8c97a', r: 3 }} name="Cumulative %" />
                </ComposedChart>
              </ResponsiveContainer>
              <p className="text-xs text-center text-muted mt-1 font-sans">Categories past the 80% cumulative line are the "trivial many"</p>
            </>
          ) : (
            <div className="flex items-center justify-center h-48 rounded-md border border-border-gold bg-card/30">
              <p className="text-muted text-sm font-sans">Add categories to see Pareto chart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
