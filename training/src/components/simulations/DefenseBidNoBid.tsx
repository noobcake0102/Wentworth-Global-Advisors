import { useState } from 'react';
import { motion } from 'framer-motion';

interface Factor {
  id: string;
  category: string;
  label: string;
  description: string;
  options: { value: number; label: string }[];
  weight: number;
}

const FACTORS: Factor[] = [
  {
    id: 'pwin',
    category: 'Competitive Position',
    label: 'Probability of Win',
    description: 'Honest assessment based on customer knowledge, past performance, and competitive intelligence.',
    weight: 3,
    options: [
      { value: 4, label: '>50% — strong position, known to customer, good intel' },
      { value: 3, label: '30–50% — competitive with differentiated offer' },
      { value: 2, label: '15–30% — possible but longshot' },
      { value: 1, label: '<15% — no relationship, no intel, blind bid' },
    ],
  },
  {
    id: 'strategic',
    category: 'Strategic Value',
    label: 'Strategic Fit',
    description: 'How well does this opportunity align with your target markets and growth strategy?',
    weight: 2,
    options: [
      { value: 4, label: 'Core market — directly advances strategic objectives' },
      { value: 3, label: 'Adjacent — builds capability or past performance in a target area' },
      { value: 2, label: 'Opportunistic — good revenue but not core strategy' },
      { value: 1, label: 'Off-strategy — pulls resources from higher priorities' },
    ],
  },
  {
    id: 'execution',
    category: 'Execution Risk',
    label: 'Execution Confidence',
    description: 'Can you deliver this contract with your current people, facilities, and supply chain?',
    weight: 3,
    options: [
      { value: 4, label: 'High — similar work completed, workforce in place, supply chain qualified' },
      { value: 3, label: 'Manageable — some ramp required but plan is credible' },
      { value: 2, label: 'Stretch — significant capability gaps or hiring dependencies' },
      { value: 1, label: 'High risk — cannot execute without major changes not yet in place' },
    ],
  },
  {
    id: 'proposalCost',
    category: 'BD Economics',
    label: 'Proposal Cost vs. Contract Value',
    description: 'Is the investment in a winning proposal justified by the contract economics?',
    weight: 2,
    options: [
      { value: 4, label: 'Proposal cost <1% of contract value — clearly justified' },
      { value: 3, label: '1–3% — reasonable with good Pwin' },
      { value: 2, label: '3–6% — requires strong Pwin to be economically rational' },
      { value: 1, label: '>6% — proposal cost is outsized relative to opportunity' },
    ],
  },
  {
    id: 'margin',
    category: 'Financial Return',
    label: 'Margin Potential',
    description: 'What is the realistic margin profile given contract type, competition, and cost structure?',
    weight: 2,
    options: [
      { value: 4, label: '>12% operating margin — strong financial return' },
      { value: 3, label: '7–12% — acceptable, meets company hurdle rate' },
      { value: 2, label: '3–7% — thin, requires execution excellence to protect' },
      { value: 1, label: '<3% — cannot absorb cost growth; pure revenue play' },
    ],
  },
  {
    id: 'intel',
    category: 'Competitive Position',
    label: 'Customer Intelligence',
    description: 'How well do you know this customer\'s requirements, priorities, and incumbent relationship?',
    weight: 2,
    options: [
      { value: 4, label: 'Deep — customer briefings, RFI engagement, technical dialogue' },
      { value: 3, label: 'Moderate — industry day attendance, some contact history' },
      { value: 2, label: 'Minimal — reviewed solicitation history, no direct contact' },
      { value: 1, label: 'None — cold opportunity, no prior intelligence' },
    ],
  },
];

const MAX_SCORE = FACTORS.reduce((sum, f) => sum + f.weight * 4, 0);

const RESULT_LEVELS = [
  { min: 0.80, label: 'Strong Bid', color: '#4caf82', description: 'Proceed with a full proposal investment. Your position, execution confidence, and BD economics support a committed pursuit. Assign dedicated capture and proposal resources.' },
  { min: 0.60, label: 'Conditional Bid', color: '#e8a84c', description: 'Bid with a targeted investment. Address the weak factors before committing full proposal resources. A conditional bid means you\'ll write to your strengths and explicitly avoid amplifying your weaknesses.' },
  { min: 0.40, label: 'High Caution', color: '#e05c5c', description: 'Significant factors argue against a full investment. If you bid, do so with a lean proposal focused only on the minimum required to compete. Consider whether a teaming arrangement could address the gaps.' },
  { min: 0, label: 'No-Bid', color: '#9b6bbf', description: 'The economics and competitive position don\'t support a proposal investment at this time. Document the decision and the reasons. Invest the BD resources in opportunities with better positioning.' },
];

export function DefenseBidNoBid() {
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allSelected = FACTORS.every(f => selections[f.id] != null);

  const score = FACTORS.reduce((sum, f) => sum + (selections[f.id] ?? 0) * f.weight, 0);
  const pct = score / MAX_SCORE;
  const result = RESULT_LEVELS.find(r => pct >= r.min) ?? RESULT_LEVELS[RESULT_LEVELS.length - 1];

  const weakFactors = submitted ? FACTORS.filter(f => (selections[f.id] ?? 0) <= 2) : [];

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Bid / No-Bid Evaluator</p>
        <p className="text-ink text-sm mt-0.5">Structured decision tool for BD investment</p>
      </div>

      <div className="p-6">
        {!submitted ? (
          <>
            <p className="text-muted text-sm mb-6">Score each factor based on your current knowledge of the opportunity. Weight-3 factors have the highest impact on the decision. Honest inputs produce useful outputs.</p>
            <div className="space-y-6">
              {FACTORS.map(f => (
                <div key={f.id} className="rounded border border-border-gold p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-medium text-ink">{f.label}</p>
                    <span className="text-[10px] font-sans tracking-widest uppercase px-2 py-0.5 rounded-full border border-gold/40 text-gold flex-shrink-0">
                      {f.weight === 3 ? 'Critical' : f.weight === 2 ? 'Important' : 'Standard'}
                    </span>
                  </div>
                  <p className="text-xs text-muted mb-3">{f.description}</p>
                  <div className="space-y-2">
                    {f.options.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setSelections(s => ({ ...s, [f.id]: opt.value }))}
                        className={`w-full text-left px-3 py-2 rounded border text-sm transition-all ${
                          selections[f.id] === opt.value
                            ? 'border-gold/60 bg-gold/10 text-ink'
                            : 'border-border-gold text-muted hover:border-gold/30 hover:text-ink'
                        }`}
                      >
                        <span className={`inline-block w-3 h-3 rounded-full border mr-2 align-middle flex-shrink-0 ${selections[f.id] === opt.value ? 'bg-gold border-gold' : 'border-border-gold'}`} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allSelected}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed mt-6"
            >
              {allSelected ? 'Generate Recommendation' : 'Score All Factors'}
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border p-6" style={{ borderColor: result.color + '40', backgroundColor: result.color + '10' }}>
              <p className="text-xs font-sans tracking-widest uppercase mb-2" style={{ color: result.color }}>Recommendation</p>
              <p className="text-2xl font-serif mb-1" style={{ color: result.color }}>{result.label}</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct * 100}%`, backgroundColor: result.color }} />
                </div>
                <p className="text-lg font-bold font-serif flex-shrink-0" style={{ color: result.color }}>{Math.round(pct * 100)}%</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">{result.description}</p>
            </div>

            {weakFactors.length > 0 && (
              <div className="rounded border border-[#e05c5c]/30 bg-[#e05c5c]/5 p-5">
                <p className="text-xs font-sans font-medium tracking-widest uppercase text-[#e05c5c] mb-3">Factors Dragging the Score</p>
                <div className="space-y-2">
                  {weakFactors.map(f => (
                    <div key={f.id} className="flex items-center justify-between">
                      <p className="text-sm text-muted">{f.label}</p>
                      <span className="text-xs text-[#e05c5c]">{f.weight === 3 ? 'Critical factor' : 'Important factor'}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              {FACTORS.map(f => {
                const val = selections[f.id] ?? 0;
                const barPct = (val / 4) * 100;
                const barColor = val >= 3 ? '#4caf82' : val === 2 ? '#e8a84c' : '#e05c5c';
                return (
                  <div key={f.id} className="flex items-center gap-3">
                    <p className="text-xs text-muted w-36 flex-shrink-0">{f.label}</p>
                    <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${barPct}%`, backgroundColor: barColor }} />
                    </div>
                    <p className="text-xs text-muted w-6 text-right">{val}/4</p>
                  </div>
                );
              })}
            </div>

            <button onClick={() => { setSelections({}); setSubmitted(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
              Evaluate Another Opportunity
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
