import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Criterion {
  id: string;
  category: string;
  question: string;
  weight: number; // 1-3
  yesSignal: 'go' | 'nogo';
  guidance: string;
}

const CRITERIA: Criterion[] = [
  { id: 'accounting', category: 'Financial Systems', question: 'Do you have a job-cost accounting system that tracks direct vs. indirect costs, and can you produce labor distribution reports by project?', weight: 3, yesSignal: 'go', guidance: 'DCAA requires contractors to demonstrate cost accounting that segregates direct costs by contract. Without this, your first DCAA pre-award survey will fail.' },
  { id: 'revenue', category: 'Financial Stability', question: 'Does your company have 12+ months of operating runway and stable revenue that could absorb 90–120 day payment delays on government contracts?', weight: 3, yesSignal: 'go', guidance: 'Government contracts pay Net 30 from invoice acceptance — which can be 60–90 days after delivery. Cash flow is the silent killer of first-time defense contractors.' },
  { id: 'quality', category: 'Quality Systems', question: 'Do you have a documented quality management system (ISO 9001 or better) with internal audits, corrective action processes, and inspection records?', weight: 2, yesSignal: 'go', guidance: 'Most defense contracts require quality system documentation. AS9100 is preferred for aerospace/defense. Getting certified takes 12–18 months.' },
  { id: 'security', category: 'Security', question: 'Have you assessed your cybersecurity posture against NIST SP 800-171? Do you know your current SPRS score?', weight: 2, yesSignal: 'go', guidance: 'Any contract involving Controlled Unclassified Information (CUI) requires NIST 800-171 compliance. The SPRS self-assessment must be submitted before contract award for most DoD contracts.' },
  { id: 'clearance', category: 'Security', question: 'Does this contract require a facility security clearance (FCL), and if so, do you have one or have you applied for one?', weight: 2, yesSignal: 'go', guidance: 'Facility clearances take 12–24 months to process. You cannot be awarded a classified contract without one. Many programs require SECRET or higher.' },
  { id: 'proposal', category: 'Business Development', question: 'Do you have the internal capacity to write a compliant proposal — technical volume, management volume, past performance, and cost/price — within a 30–60 day response window?', weight: 2, yesSignal: 'go', guidance: 'Defense proposals require significant resources. A medium-complexity proposal costs $75K–$200K in labor and external support. Underestimating this is common.' },
  { id: 'pastperf', category: 'Past Performance', question: 'Do you have at least 3 relevant past performance references — government or prime contractor customers — within the past 3 years?', weight: 3, yesSignal: 'go', guidance: 'Past performance is often the most heavily weighted evaluation factor. "Neutral" past performance (no references) is better than negative, but far worse than documented successful performance.' },
  { id: 'execution', category: 'Execution Risk', question: 'Can you deliver this contract\'s requirements with your current workforce and facilities, without requiring a major ramp that depends on award?', weight: 3, yesSignal: 'go', guidance: 'Winning a contract you cannot execute is worse than not winning it. A failed first defense contract can permanently damage your past performance record.' },
  { id: 'flowdown', category: 'Compliance', question: 'Have you reviewed the solicitation\'s DFARS clause list and confirmed you can comply with mandatory flow-down requirements (e.g., 252.204-7012 for cyber, 252.225-7001 for Buy American)?', weight: 2, yesSignal: 'go', guidance: 'DFARS clauses are non-negotiable. Non-compliance discovered after award results in cure notices, withholds, and in serious cases, False Claims Act exposure.' },
  { id: 'margin', category: 'Financial', question: 'Have you modeled the contract margins at both the proposed cost and at a 10% cost overrun scenario — and can you survive the latter?', weight: 2, yesSignal: 'go', guidance: 'First-time government contracts almost always cost more than estimated. Fixed-price contracts with thin margins become losses when execution surprises hit.' },
];

const SCORE_LEVELS = [
  { min: 85, label: 'Strong Go', color: '#4caf82', description: 'Your readiness profile supports pursuing this opportunity. Proceed with proposal development and document the remaining gaps as execution risks to monitor.' },
  { min: 65, label: 'Conditional Go', color: '#e8a84c', description: 'Proceed with caution. Address the critical gaps (weight-3 criteria) before proposal submission. A conditional go means the program is viable but requires deliberate preparation.' },
  { min: 40, label: 'High Risk', color: '#e05c5c', description: 'Significant gaps exist that could lead to proposal failure, contract award problems, or execution failure. Strongly consider whether the 18–24 month preparation period is better invested than the proposal cost.' },
  { min: 0, label: 'No-Go', color: '#9b6bbf', description: 'The readiness gaps are too significant to overcome within the proposal timeline. Document the specific gaps, build a remediation roadmap, and target the next opportunity in this sector once foundations are in place.' },
];

export function DefenseGoNoGo() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showGuidance, setShowGuidance] = useState<string | null>(null);

  const allAnswered = CRITERIA.every(c => answers[c.id] != null);

  const totalWeight = CRITERIA.reduce((sum, c) => sum + c.weight, 0);
  const earnedWeight = submitted
    ? CRITERIA.reduce((sum, c) => {
        const ans = answers[c.id];
        if (ans == null) return sum;
        return (ans && c.yesSignal === 'go') || (!ans && c.yesSignal === 'nogo') ? sum + c.weight : sum;
      }, 0)
    : 0;
  const score = Math.round((earnedWeight / totalWeight) * 100);

  const level = SCORE_LEVELS.find(l => score >= l.min) ?? SCORE_LEVELS[SCORE_LEVELS.length - 1];

  const criticalGaps = submitted
    ? CRITERIA.filter(c => {
        const ans = answers[c.id];
        return c.weight === 3 && ((ans === false && c.yesSignal === 'go') || (ans === true && c.yesSignal === 'nogo'));
      })
    : [];

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowGuidance(null);
  };

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold flex items-center justify-between">
        <div>
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Go / No-Go Decision Tool</p>
          <p className="text-ink text-sm mt-0.5">Defense Contract Readiness Assessment</p>
        </div>
        {submitted && (
          <button onClick={handleReset} className="text-xs font-sans text-muted hover:text-gold transition-colors tracking-widest uppercase">
            Reset
          </button>
        )}
      </div>

      <div className="p-6 space-y-4">
        {!submitted ? (
          <>
            <p className="text-muted text-sm">Answer each question honestly based on your company's current state — not where you plan to be after award. Click any criterion to see why it matters.</p>
            {CRITERIA.map(c => (
              <div key={c.id} className="rounded border border-border-gold bg-bg/40 p-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-gold/70 block mb-1">{c.category} {c.weight === 3 ? '· Critical' : ''}</span>
                    <p className="text-sm text-ink leading-relaxed">{c.question}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAnswers(a => ({ ...a, [c.id]: true }))}
                    className={`px-4 py-1.5 rounded text-xs font-sans font-medium tracking-widest uppercase transition-all ${answers[c.id] === true ? 'bg-[#4caf82]/20 border border-[#4caf82]/60 text-[#4caf82]' : 'border border-border-gold text-muted hover:text-ink'}`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setAnswers(a => ({ ...a, [c.id]: false }))}
                    className={`px-4 py-1.5 rounded text-xs font-sans font-medium tracking-widest uppercase transition-all ${answers[c.id] === false ? 'bg-[#e05c5c]/20 border border-[#e05c5c]/60 text-[#e05c5c]' : 'border border-border-gold text-muted hover:text-ink'}`}
                  >
                    No
                  </button>
                  <button
                    onClick={() => setShowGuidance(showGuidance === c.id ? null : c.id)}
                    className="text-[10px] font-sans text-muted/60 hover:text-gold transition-colors ml-auto"
                  >
                    Why this matters ↓
                  </button>
                </div>
                <AnimatePresence>
                  {showGuidance === c.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-muted mt-3 pt-3 border-t border-border-gold leading-relaxed"
                    >
                      {c.guidance}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed mt-2"
            >
              {allAnswered ? 'Generate Assessment' : `Answer All ${CRITERIA.length} Questions to Continue`}
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="rounded border p-6 mb-6" style={{ borderColor: level.color + '40', backgroundColor: level.color + '10' }}>
              <p className="text-3xl font-serif mb-1" style={{ color: level.color }}>{level.label}</p>
              <p className="text-5xl font-serif font-bold mb-4" style={{ color: level.color }}>{score}<span className="text-2xl">%</span></p>
              <p className="text-sm text-muted leading-relaxed">{level.description}</p>
            </div>

            {criticalGaps.length > 0 && (
              <div className="rounded border border-[#e05c5c]/30 bg-[#e05c5c]/5 p-5 mb-6">
                <p className="text-xs font-sans font-medium tracking-widest uppercase text-[#e05c5c] mb-3">Critical Gaps — Address Before Pursuing</p>
                <ul className="space-y-2">
                  {criticalGaps.map(c => (
                    <li key={c.id} className="text-sm text-muted">
                      <span className="text-ink">{c.category}:</span> {c.question}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-2">
              {CRITERIA.map(c => {
                const ans = answers[c.id];
                const correct = (ans === true && c.yesSignal === 'go') || (ans === false && c.yesSignal === 'nogo');
                return (
                  <div key={c.id} className="flex items-start gap-3 p-3 rounded border border-border-gold/50">
                    <span style={{ color: correct ? '#4caf82' : '#e05c5c' }} className="mt-0.5 text-sm flex-shrink-0">{correct ? '✓' : '✗'}</span>
                    <div>
                      <p className="text-xs text-muted">{c.category} {c.weight === 3 ? '(Critical)' : ''}</p>
                      <p className="text-sm text-ink">{c.question}</p>
                      {!correct && <p className="text-xs text-muted mt-1">{c.guidance}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={handleReset} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all mt-6">
              Start Over
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
