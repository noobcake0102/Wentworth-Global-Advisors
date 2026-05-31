import { useState } from 'react';
import { motion } from 'framer-motion';

interface Input {
  id: string;
  label: string;
  description: string;
  options: { value: string; label: string; riskScore: number }[];
}

const INPUTS: Input[] = [
  {
    id: 'contractType',
    label: 'Contract Type',
    description: 'The type of contract determines who bears cost risk.',
    options: [
      { value: 'ffp', label: 'Firm Fixed Price (FFP)', riskScore: 5 },
      { value: 'fpif', label: 'Fixed Price Incentive Fee (FPIF)', riskScore: 3 },
      { value: 'cpff', label: 'Cost Plus Fixed Fee (CPFF)', riskScore: 1 },
      { value: 'tm', label: 'Time & Materials (T&M)', riskScore: 2 },
    ],
  },
  {
    id: 'designMaturity',
    label: 'Design Maturity at Award',
    description: 'How mature is the design when the contract starts?',
    options: [
      { value: 'trl9', label: 'Production-ready (TRL 8-9)', riskScore: 1 },
      { value: 'trl7', label: 'Engineering development complete (TRL 6-7)', riskScore: 2 },
      { value: 'trl5', label: 'Technology demonstrated (TRL 4-5)', riskScore: 4 },
      { value: 'trl3', label: 'Early research (TRL 1-3)', riskScore: 5 },
    ],
  },
  {
    id: 'scheduleConfidence',
    label: 'Schedule Confidence',
    description: 'How confident are you in the proposed delivery schedule?',
    options: [
      { value: 'high', label: 'High — based on similar completed work', riskScore: 1 },
      { value: 'medium', label: 'Moderate — extrapolated from related experience', riskScore: 2 },
      { value: 'low', label: 'Low — significant unknowns remain', riskScore: 4 },
      { value: 'aspirational', label: 'Aspirational — required to win, not validated', riskScore: 5 },
    ],
  },
  {
    id: 'cashRunway',
    label: 'Cash Flow Resilience',
    description: 'Can your company absorb delayed payments and cost growth?',
    options: [
      { value: 'strong', label: 'Strong — 12+ months runway, credit line available', riskScore: 1 },
      { value: 'adequate', label: 'Adequate — 6-12 months, no significant debt', riskScore: 2 },
      { value: 'thin', label: 'Thin — 3-6 months, dependent on steady collections', riskScore: 4 },
      { value: 'critical', label: 'Critical — under 3 months, near credit limits', riskScore: 5 },
    ],
  },
  {
    id: 'supplyChain',
    label: 'Supply Chain Risk',
    description: 'How dependent are you on critical sole-source suppliers?',
    options: [
      { value: 'minimal', label: 'Minimal — multiple qualified sources for all critical items', riskScore: 1 },
      { value: 'managed', label: 'Managed — some sole-sources with qualified alternates identified', riskScore: 2 },
      { value: 'exposed', label: 'Exposed — critical sole-sources with no qualified alternate', riskScore: 4 },
      { value: 'fragile', label: 'Fragile — long-lead sole-source with shaky supply base', riskScore: 5 },
    ],
  },
];

const RISK_PROFILE = [
  { max: 10, label: 'Manageable Risk', color: '#4caf82', recommendation: 'This contract profile presents manageable execution risk. Standard risk management practices and a realistic schedule should protect margin. Focus on scope management and change control to prevent scope creep.' },
  { max: 16, label: 'Elevated Risk', color: '#e8a84c', recommendation: 'Elevated risk requires deliberate mitigation. Identify the highest-scoring factors and build specific mitigation plans before award. Consider negotiating contract provisions (higher fee, undefinitized contract actions for design maturity, progress payments) to reduce exposure.' },
  { max: 20, label: 'High Risk', color: '#e05c5c', recommendation: 'This profile indicates high risk of program distress. Consider whether the contract should be pursued as structured, or whether significant contract modifications (type, schedule relief, fee structure) are necessary to make it survivable. Experienced program managers and senior leadership engagement from day one.' },
  { max: 25, label: 'Unacceptable Risk', color: '#9b6bbf', recommendation: 'The combination of factors creates unacceptable risk of contract failure. A failed defense contract has lasting consequences — negative CPAR ratings, potential for Termination for Default, and reputational damage that follows a company for years. Strongly consider a no-bid or significant restructuring conversation with the customer.' },
];

const CONTRACT_NOTES: Record<string, string> = {
  ffp: 'FFP shifts all cost risk to you. Every dollar of cost growth comes from your profit. DCAA will not audit your costs post-award — but that also means you absorb every inefficiency. FFP works when design is mature and scope is tightly defined.',
  fpif: 'FPIF shares risk and reward. The share line (e.g., 80/20 government/contractor above target cost) means you keep some upside from efficiency and absorb some cost growth. More complex to manage but better risk balance than FFP on development work.',
  cpff: 'CPFF protects you from cost overrun — you are reimbursed all allowable costs plus a fixed fee. But DCAA will audit every cost you charge. You need DCAA-compliant accounting before signing. The fee is fixed — you cannot earn more by performing well.',
  tm: 'T&M is deceptively easy to win and hard to manage. You bill hours and materials at fixed rates. No cost risk — but no ceiling either. Government customers hate runaway T&M contracts. They will scrutinize hours and often impose ceilings that create the same exposure as FFP.',
};

export function DefenseContractRisk() {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = INPUTS.every(i => selections[i.id]);

  const totalScore = submitted
    ? INPUTS.reduce((sum, inp) => {
        const opt = inp.options.find(o => o.value === selections[inp.id]);
        return sum + (opt?.riskScore ?? 0);
      }, 0)
    : 0;

  const profile = RISK_PROFILE.find(p => totalScore <= p.max) ?? RISK_PROFILE[RISK_PROFILE.length - 1];

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Contract Risk Calculator</p>
        <p className="text-ink text-sm mt-0.5">Evaluate your risk profile before signing</p>
      </div>

      <div className="p-6 space-y-6">
        {!submitted ? (
          <>
            <p className="text-muted text-sm">Select the option that best describes your situation for each factor. Be honest — this assessment is only as useful as the inputs.</p>
            {INPUTS.map(inp => (
              <div key={inp.id}>
                <p className="text-sm font-medium text-ink mb-1">{inp.label}</p>
                <p className="text-xs text-muted mb-3">{inp.description}</p>
                <div className="grid grid-cols-1 gap-2">
                  {inp.options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSelections(s => ({ ...s, [inp.id]: opt.value }))}
                      className={`text-left px-4 py-3 rounded border text-sm transition-all ${
                        selections[inp.id] === opt.value
                          ? 'border-gold/60 bg-gold/10 text-ink'
                          : 'border-border-gold text-muted hover:border-gold/30 hover:text-ink'
                      }`}
                    >
                      <span className={`inline-block w-4 h-4 rounded-full border mr-2 align-middle ${selections[inp.id] === opt.value ? 'bg-gold border-gold' : 'border-border-gold'}`} />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {allAnswered ? 'Calculate Risk Profile' : 'Complete All Inputs'}
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border p-6" style={{ borderColor: profile.color + '40', backgroundColor: profile.color + '10' }}>
              <p className="text-xs font-sans tracking-widest uppercase mb-2" style={{ color: profile.color }}>Risk Assessment</p>
              <p className="text-2xl font-serif mb-1" style={{ color: profile.color }}>{profile.label}</p>
              <p className="text-5xl font-bold font-serif mb-4" style={{ color: profile.color }}>{totalScore}<span className="text-xl text-muted/60"> / 25</span></p>
              <p className="text-sm text-muted leading-relaxed">{profile.recommendation}</p>
            </div>

            {selections.contractType && (
              <div className="rounded border border-border-gold p-5">
                <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2">Contract Type Analysis</p>
                <p className="text-sm text-muted leading-relaxed">{CONTRACT_NOTES[selections.contractType]}</p>
              </div>
            )}

            <div className="space-y-3">
              <p className="text-xs font-sans tracking-widest uppercase text-muted">Factor Breakdown</p>
              {INPUTS.map(inp => {
                const opt = inp.options.find(o => o.value === selections[inp.id]);
                if (!opt) return null;
                const pct = (opt.riskScore / 5) * 100;
                return (
                  <div key={inp.id} className="flex items-center gap-3">
                    <p className="text-xs text-muted w-40 flex-shrink-0">{inp.label}</p>
                    <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: opt.riskScore >= 4 ? '#e05c5c' : opt.riskScore >= 3 ? '#e8a84c' : '#4caf82',
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted w-24 text-right">{opt.label.split('(')[0].trim()}</p>
                  </div>
                );
              })}
            </div>

            <button onClick={() => { setSelections({}); setSubmitted(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
              Start Over
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
