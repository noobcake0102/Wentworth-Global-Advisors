import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';

const COLUMNS = ['Suppliers', 'Inputs', 'Process', 'Outputs', 'Customers'] as const;
type Column = typeof COLUMNS[number];

const PLACEHOLDER: Record<Column, string> = {
  Suppliers: 'e.g. Sales team',
  Inputs: 'e.g. Confirmed order',
  Process: 'e.g. Receive order',
  Outputs: 'e.g. Packed shipment',
  Customers: 'e.g. End customer',
};

const COLORS: Record<Column, string> = {
  Suppliers: 'border-gold/40 bg-gold/5',
  Inputs: 'border-blue-400/30 bg-blue-400/5',
  Process: 'border-green-400/40 bg-green-400/5',
  Outputs: 'border-orange-400/30 bg-orange-400/5',
  Customers: 'border-purple-400/30 bg-purple-400/5',
};

const HEADER_COLORS: Record<Column, string> = {
  Suppliers: 'text-gold',
  Inputs: 'text-blue-300',
  Process: 'text-green-400',
  Outputs: 'text-orange-300',
  Customers: 'text-purple-300',
};

type SIPOCData = Record<Column, string[]>;

const initial: SIPOCData = {
  Suppliers: [''],
  Inputs: [''],
  Process: [''],
  Outputs: [''],
  Customers: [''],
};

export function SIPOCBuilder() {
  const [data, setData] = useState<SIPOCData>(initial);

  const updateItem = (col: Column, index: number, value: string) => {
    setData(prev => {
      const next = { ...prev, [col]: [...prev[col]] };
      next[col][index] = value;
      return next;
    });
  };

  const addItem = (col: Column) => {
    setData(prev => ({ ...prev, [col]: [...prev[col], ''] }));
  };

  const removeItem = (col: Column, index: number) => {
    setData(prev => {
      const items = prev[col].filter((_, i) => i !== index);
      return { ...prev, [col]: items.length === 0 ? [''] : items };
    });
  };

  const reset = () => setData(initial);

  const filled = COLUMNS.every(col => data[col].some(v => v.trim() !== ''));

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold flex items-center justify-between">
        <div>
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-0.5">Interactive Tool</p>
          <h3 className="font-serif text-lg text-ink">SIPOC Builder</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={reset}>Reset</Button>
      </div>

      <p className="px-6 pt-4 text-sm text-muted">Fill in each column to build your SIPOC. Start with the Process steps (4–6 high-level steps), then work outward.</p>

      {/* Input grid */}
      <div className="grid grid-cols-5 gap-3 p-6">
        {COLUMNS.map(col => (
          <div key={col} className={`rounded-md border p-3 ${COLORS[col]}`}>
            <p className={`text-xs font-sans font-semibold tracking-widest uppercase mb-3 ${HEADER_COLORS[col]}`}>{col}</p>
            <div className="space-y-2">
              {data[col].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={item}
                    onChange={e => updateItem(col, i, e.target.value)}
                    placeholder={PLACEHOLDER[col]}
                    className="w-full bg-black/20 border border-white/10 rounded px-2 py-1.5 text-xs text-ink placeholder:text-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                  {data[col].length > 1 && (
                    <button onClick={() => removeItem(col, i)} className="text-muted/40 hover:text-danger transition-colors flex-shrink-0">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addItem(col)}
                className="flex items-center gap-1 text-xs text-muted hover:text-gold transition-colors mt-1"
              >
                <Plus className="w-3 h-3" /> Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Live SIPOC diagram */}
      {filled && (
        <div className="mx-6 mb-6 rounded-md border border-gold/20 overflow-hidden">
          <div className="px-4 py-2 bg-gold/5 border-b border-gold/20">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold">Your SIPOC Diagram</p>
          </div>
          <div className="grid grid-cols-5">
            {COLUMNS.map(col => (
              <div key={col} className="p-3 border-r last:border-r-0 border-border-gold">
                <p className={`text-xs font-sans font-semibold tracking-widest uppercase mb-2 ${HEADER_COLORS[col]}`}>{col}</p>
                <ul className="space-y-1">
                  {data[col].filter(v => v.trim()).map((v, i) => (
                    <li key={i} className="text-xs text-ink leading-relaxed">• {v}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
