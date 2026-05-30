import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const CATEGORIES = ['Manpower', 'Methods', 'Machines', 'Materials', 'Measurement', 'Mother Nature'] as const;
type Category = typeof CATEGORIES[number];

const CATEGORY_COLORS: Record<Category, string> = {
  Manpower: '#c9a84c',
  Methods: '#4caf82',
  Machines: '#6b8ed1',
  Materials: '#e8a84c',
  Measurement: '#9b6bb5',
  'Mother Nature': '#4bc9c9',
};

const PLACEHOLDERS: Record<Category, string> = {
  Manpower: 'e.g. Insufficient training',
  Methods: 'e.g. Outdated SOPs',
  Machines: 'e.g. Worn tooling',
  Materials: 'e.g. Poor input quality',
  Measurement: 'e.g. Gauge variation',
  'Mother Nature': 'e.g. Temperature variation',
};

export function FishboneBuilder() {
  const [problem, setProblem] = useState('High defect rate in invoice processing');
  const [causes, setCauses] = useState<Record<Category, string[]>>({
    Manpower: [''],
    Methods: [''],
    Machines: [''],
    Materials: [''],
    Measurement: [''],
    'Mother Nature': [''],
  });

  const addCause = (cat: Category) => setCauses(prev => ({ ...prev, [cat]: [...prev[cat], ''] }));
  const updateCause = (cat: Category, i: number, val: string) => {
    setCauses(prev => { const next = [...prev[cat]]; next[i] = val; return { ...prev, [cat]: next }; });
  };
  const removeCause = (cat: Category, i: number) => {
    setCauses(prev => {
      const items = prev[cat].filter((_, idx) => idx !== i);
      return { ...prev, [cat]: items.length === 0 ? [''] : items };
    });
  };

  const filledCauses = (cat: Category) => causes[cat].filter(c => c.trim());

  // Visual fishbone — top 3 and bottom 3 categories
  const topCats: Category[] = ['Manpower', 'Methods', 'Machines'];
  const botCats: Category[] = ['Materials', 'Measurement', 'Mother Nature'];

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-0.5">Interactive Tool</p>
        <h3 className="font-serif text-lg text-ink">Fishbone (Ishikawa) Diagram Builder</h3>
      </div>

      <div className="p-6">
        {/* Problem statement */}
        <div className="mb-5">
          <label className="text-xs font-sans font-medium tracking-widest uppercase text-muted block mb-2">Problem Statement (Fish Head)</label>
          <input
            type="text"
            value={problem}
            onChange={e => setProblem(e.target.value)}
            className="w-full bg-card border border-border-gold rounded px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/40 transition-colors"
            placeholder="Enter the problem or effect..."
          />
        </div>

        {/* Cause inputs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {CATEGORIES.map(cat => (
            <div key={cat} className="rounded-md p-3 border" style={{ borderColor: `${CATEGORY_COLORS[cat]}40`, backgroundColor: `${CATEGORY_COLORS[cat]}08` }}>
              <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-2" style={{ color: CATEGORY_COLORS[cat] }}>{cat}</p>
              <div className="space-y-1.5">
                {causes[cat].map((c, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={c}
                      onChange={e => updateCause(cat, i, e.target.value)}
                      placeholder={PLACEHOLDERS[cat]}
                      className="flex-1 bg-black/20 border border-white/10 rounded px-2 py-1 text-xs text-ink placeholder:text-muted/40 focus:outline-none focus:border-white/20"
                    />
                    {causes[cat].length > 1 && (
                      <button onClick={() => removeCause(cat, i)} className="text-muted/40 hover:text-danger"><Trash2 className="w-3 h-3" /></button>
                    )}
                  </div>
                ))}
                <button onClick={() => addCause(cat)} className="flex items-center gap-1 text-xs text-muted hover:text-gold transition-colors">
                  <Plus className="w-3 h-3" /> Add cause
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visual fishbone SVG diagram */}
        {problem.trim() && (
          <div className="rounded-md border border-border-gold bg-card/30 p-4 overflow-x-auto">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-4 text-center">Diagram Preview</p>
            <svg viewBox="0 0 820 360" className="w-full max-w-3xl mx-auto" style={{ minWidth: '500px' }}>
              {/* Spine */}
              <line x1="60" y1="180" x2="720" y2="180" stroke="rgba(201,168,76,0.5)" strokeWidth="2" />
              {/* Arrowhead */}
              <polygon points="715,174 730,180 715,186" fill="rgba(201,168,76,0.7)" />

              {/* Fish head (problem box) */}
              <rect x="730" y="158" width="80" height="44" rx="3" fill="#131320" stroke="#c9a84c" strokeWidth="1" />
              <foreignObject x="732" y="160" width="76" height="40">
                <div style={{ fontSize: '8px', color: '#f0ece6', padding: '2px', lineHeight: '1.3', wordBreak: 'break-word', textAlign: 'center' }}>
                  {problem.length > 40 ? problem.slice(0, 40) + '…' : problem}
                </div>
              </foreignObject>

              {/* Top bones */}
              {topCats.map((cat, i) => {
                const x = 180 + i * 170;
                const color = CATEGORY_COLORS[cat];
                return (
                  <g key={cat}>
                    <line x1={x} y1="60" x2={x + 80} y2="180" stroke={color} strokeWidth="1.5" opacity="0.6" />
                    <text x={x - 5} y="50" textAnchor="middle" fill={color} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="500">{cat}</text>
                    {filledCauses(cat).map((cause, ci) => {
                      const cx = x + ci * 8;
                      const cy = 60 + ci * 25;
                      const ex = cx + 50;
                      const ey = 180 - (180 - cy) * (ex - cx) / (x + 80 - cx);
                      return (
                        <g key={ci}>
                          <line x1={cx} y1={cy + 15} x2={Math.min(cx + 45, x + 80)} y2={Math.min(ey + 5, 175)} stroke={color} strokeWidth="1" opacity="0.4" />
                          <text x={cx - 2} y={cy + 12} textAnchor="end" fill="rgba(240,236,230,0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">{cause.length > 18 ? cause.slice(0, 18) + '…' : cause}</text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* Bottom bones */}
              {botCats.map((cat, i) => {
                const x = 180 + i * 170;
                const color = CATEGORY_COLORS[cat];
                return (
                  <g key={cat}>
                    <line x1={x} y1="300" x2={x + 80} y2="180" stroke={color} strokeWidth="1.5" opacity="0.6" />
                    <text x={x - 5} y="318" textAnchor="middle" fill={color} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="500">{cat}</text>
                    {filledCauses(cat).map((cause, ci) => {
                      const cx = x + ci * 8;
                      const cy = 300 - ci * 25;
                      return (
                        <g key={ci}>
                          <line x1={cx} y1={cy - 15} x2={Math.min(cx + 45, x + 80)} y2={Math.max(cy - 20, 185)} stroke={color} strokeWidth="1" opacity="0.4" />
                          <text x={cx - 2} y={cy} textAnchor="end" fill="rgba(240,236,230,0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">{cause.length > 18 ? cause.slice(0, 18) + '…' : cause}</text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
