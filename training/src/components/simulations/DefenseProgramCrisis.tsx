import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Decision {
  id: string;
  situation: string;
  options: {
    id: string;
    label: string;
    consequence: string;
    outcome: 'good' | 'bad' | 'neutral';
    points: number;
  }[];
}

const DECISIONS: Decision[] = [
  {
    id: 'd1',
    situation: 'Your program is 60 days behind schedule. Your DCMA QAR just called to schedule a surveillance visit for next week. Your contracting officer does not yet know about the schedule slip. What do you do first?',
    options: [
      { id: 'd1a', label: 'Call the contracting officer today and disclose the schedule slip before the DCMA visit.', consequence: 'The CO is surprised but appreciative of the early notification. DCMA arrives already briefed. The surveillance report documents the slip but notes the contractor is being transparent. The CO opens a discussion about schedule relief rather than issuing a cure notice.', outcome: 'good', points: 3 },
      { id: 'd1b', label: 'Prepare a recovery plan and present it to both the CO and DCMA at the surveillance visit — show up with a solution, not just a problem.', consequence: 'This is the right instinct but wrong sequence. DCMA arrives and discovers the CO wasn\'t notified. The QAR documents "lack of contractor transparency" in the surveillance report. The CO is now managing up to her program office about why she didn\'t know. Trust is damaged.', outcome: 'bad', points: 0 },
      { id: 'd1c', label: 'Accelerate the schedule aggressively before the DCMA visit to reduce the slip as much as possible, then disclose a smaller problem.', consequence: 'The crash acceleration creates quality problems and overtime costs. DCMA finds the rush and documents concerns about production integrity. The 60-day slip is now documented as 35 days but with quality escapes that take 90 days to resolve. Worse outcome than transparent disclosure.', outcome: 'bad', points: 0 },
    ],
  },
  {
    id: 'd2',
    situation: 'Your critical sole-source supplier for a long-lead casting has just told you they are 8 weeks late on their delivery. This puts first article testing at risk. You have a contractual delivery milestone in 14 weeks. What do you do?',
    options: [
      { id: 'd2a', label: 'Notify the CO with a written letter documenting the supplier\'s failure, your mitigation steps, and a revised schedule impact analysis.', consequence: 'Written notification protects you under the Excusable Delay provision (FAR 52.249-14). The CO opens a discussion about schedule relief. Your documentation trail shows you managed the risk — not caused it.', outcome: 'good', points: 3 },
      { id: 'd2b', label: 'Fly a team to the supplier\'s facility to recover the schedule without involving the customer yet.', consequence: 'Good instinct to recover, but the customer will find out when you miss the milestone. Without prior notification, the delay is not documented as excusable. The CO issues a cure notice. Now you\'re playing defense instead of recovery.', outcome: 'neutral', points: 1 },
      { id: 'd2c', label: 'Absorb the delay internally, work overtime, and plan to make up the schedule after the casting arrives.', consequence: 'The math doesn\'t work. An 8-week supplier slip cannot be recovered in 14 weeks. The CO receives no notice, misses her program review reporting milestone, and discovers the problem from DCMA — not from you. Cure notice, expanded surveillance, and a permanent note in your performance record.', outcome: 'bad', points: 0 },
    ],
  },
  {
    id: 'd3',
    situation: 'DCMA arrives for the surveillance visit. The QAR asks to review your first article test procedure and your quality plan. Your quality manager is out sick and you can\'t locate the current revision of either document. What do you do?',
    options: [
      { id: 'd3a', label: 'Be honest: tell the QAR the documents exist but your document control system has a gap and you cannot locate the current revision. Offer to provide them by end of day.', consequence: 'The QAR documents a minor finding on document control. You provide the documents by COB. The finding is closed at the next surveillance with a corrective action plan. Minor finding, properly handled.', outcome: 'good', points: 2 },
      { id: 'd3b', label: 'Show the QAR an older revision of the document, hoping she doesn\'t notice the revision level.', consequence: 'QAR notices the revision discrepancy during review — it\'s the first thing they check. What was a document control finding is now a "willful misrepresentation" notation. This escalates from a minor finding to a significant finding with potential referral to the IG.', outcome: 'bad', points: -2 },
      { id: 'd3c', label: 'Tell the QAR the documents are in development and offer to schedule a follow-up visit when they are complete.', consequence: 'You\'ve just told DCMA that required program documents don\'t exist during active production. This is a significant finding. Honest, but the consequence is expanded surveillance and a potential stop-work recommendation.', outcome: 'neutral', points: 0 },
    ],
  },
  {
    id: 'd4',
    situation: 'After the DCMA visit, the QAR sends you a draft surveillance report with three findings: a major finding on timekeeping (employees are recording time weekly, not daily), a minor finding on document control, and an observation on supplier qualification records. How do you respond?',
    options: [
      { id: 'd4a', label: 'Respond within the required window with a corrective action plan for each finding, including root cause, corrective action, effectiveness check date, and responsible party.', consequence: 'A complete, credible CAR response demonstrates a mature quality system. DCMA closes the minor finding immediately and monitors the major finding. Your next surveillance report documents improved timekeeping compliance. The major finding is closed within 90 days.', outcome: 'good', points: 3 },
      { id: 'd4b', label: 'Contest the timekeeping finding — your employees are capturing time correctly, just not at the daily frequency DCAA requires.', consequence: 'You\'re technically correct that the standard is not absolute — but you\'re fighting a battle you will lose. DCMA will elevate the finding to their chain of command, which flags your company for increased attention. Comply and correct — don\'t argue process philosophy with a QAR.', outcome: 'bad', points: 0 },
      { id: 'd4c', label: 'Fix the timekeeping process immediately and respond to the report with evidence that it\'s already corrected, skipping a formal CAR.', consequence: 'Good instinct on speed, but DCMA requires a formal corrective action process with root cause analysis — not just a fix. Without documentation of root cause, DCMA cannot assess whether the correction will hold. Resubmit with a proper CAR format.', outcome: 'neutral', points: 1 },
    ],
  },
];

const OUTCOME_LABEL: Record<string, string> = {
  good: '✓ Strong Decision',
  neutral: '— Acceptable',
  bad: '✗ Avoid This',
};
const OUTCOME_COLOR: Record<string, string> = { good: '#4caf82', neutral: '#e8a84c', bad: '#e05c5c' };

export function DefenseProgramCrisis() {
  const [currentDecision, setCurrentDecision] = useState(0);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const decision = DECISIONS[currentDecision];
  const isRevealed = decision ? !!revealed[decision.id] : false;

  const totalScore = Object.entries(selected).reduce((sum, [did, oid]) => {
    const d = DECISIONS.find(d => d.id === did);
    const o = d?.options.find(o => o.id === oid);
    return sum + (o?.points ?? 0);
  }, 0);
  const maxScore = DECISIONS.reduce((sum, d) => sum + Math.max(...d.options.map(o => o.points)), 0);

  const handleSelect = (optionId: string) => {
    if (revealed[decision.id]) return;
    setSelected(s => ({ ...s, [decision.id]: optionId }));
  };

  const handleReveal = () => {
    setRevealed(r => ({ ...r, [decision.id]: true }));
  };

  const handleNext = () => {
    if (currentDecision < DECISIONS.length - 1) {
      setCurrentDecision(c => c + 1);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const pct = Math.round((totalScore / maxScore) * 100);
    const label = pct >= 80 ? 'Program Manager' : pct >= 50 ? 'Recovery Needed' : 'Program in Jeopardy';
    const color = pct >= 80 ? '#4caf82' : pct >= 50 ? '#e8a84c' : '#e05c5c';
    return (
      <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
        <div className="px-6 py-4 border-b border-border-gold">
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Scenario Complete</p>
        </div>
        <div className="p-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border p-6" style={{ borderColor: color + '40', backgroundColor: color + '10' }}>
              <p className="text-xs font-sans tracking-widest uppercase mb-1" style={{ color }}>Your Result</p>
              <p className="text-2xl font-serif mb-1" style={{ color }}>{label}</p>
              <p className="text-5xl font-bold font-serif" style={{ color }}>{totalScore}<span className="text-xl text-muted/60"> / {maxScore}</span></p>
            </div>
            <div className="space-y-3">
              {DECISIONS.map((d, i) => {
                const oid = selected[d.id];
                const opt = d.options.find(o => o.id === oid);
                if (!opt) return null;
                return (
                  <div key={d.id} className="flex items-start gap-3 p-3 rounded border border-border-gold/50">
                    <span style={{ color: OUTCOME_COLOR[opt.outcome] }} className="text-sm flex-shrink-0 mt-0.5">{opt.outcome === 'good' ? '✓' : opt.outcome === 'bad' ? '✗' : '—'}</span>
                    <div>
                      <p className="text-xs text-muted">Decision {i + 1}</p>
                      <p className="text-sm text-ink">{opt.label}</p>
                    </div>
                    <span className="ml-auto text-sm font-bold flex-shrink-0" style={{ color: OUTCOME_COLOR[opt.outcome] }}>{opt.points > 0 ? '+' : ''}{opt.points}</span>
                  </div>
                );
              })}
            </div>
            <button onClick={() => { setCurrentDecision(0); setSelected({}); setRevealed({}); setDone(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
              Run Again
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold flex items-center justify-between">
        <div>
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Program Crisis Simulation</p>
          <p className="text-ink text-sm mt-0.5">Decision {currentDecision + 1} of {DECISIONS.length}</p>
        </div>
        <div className="flex gap-1">
          {DECISIONS.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i < currentDecision ? 'bg-gold' : i === currentDecision ? 'bg-gold/60' : 'bg-border-gold'}`} />
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="rounded border border-border-gold/60 bg-bg/40 p-5 mb-6">
          <p className="text-xs font-sans tracking-widest uppercase text-gold/70 mb-2">Situation</p>
          <p className="text-sm text-ink leading-relaxed">{decision.situation}</p>
        </div>

        <div className="space-y-3 mb-6">
          {decision.options.map(opt => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={isRevealed}
              className={`w-full text-left p-4 rounded border text-sm transition-all ${
                selected[decision.id] === opt.id
                  ? isRevealed
                    ? `border-${opt.outcome === 'good' ? '[#4caf82]' : opt.outcome === 'bad' ? '[#e05c5c]' : '[#e8a84c]'}/60`
                    : 'border-gold/60 bg-gold/10 text-ink'
                  : 'border-border-gold text-muted hover:border-gold/30 hover:text-ink'
              } ${isRevealed && selected[decision.id] !== opt.id ? 'opacity-50' : ''}`}
              style={isRevealed && selected[decision.id] === opt.id ? { borderColor: OUTCOME_COLOR[opt.outcome] + '80', backgroundColor: OUTCOME_COLOR[opt.outcome] + '10' } : {}}
            >
              {isRevealed && selected[decision.id] === opt.id && (
                <p className="text-xs font-sans tracking-widest uppercase mb-2" style={{ color: OUTCOME_COLOR[opt.outcome] }}>
                  {OUTCOME_LABEL[opt.outcome]}
                </p>
              )}
              <p className={isRevealed && selected[decision.id] === opt.id ? 'text-ink' : ''}>{opt.label}</p>
              {isRevealed && selected[decision.id] === opt.id && (
                <p className="text-xs text-muted mt-3 leading-relaxed">{opt.consequence}</p>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              disabled={!selected[decision.id]}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              See Consequence
            </button>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleNext}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all"
            >
              {currentDecision < DECISIONS.length - 1 ? 'Next Decision →' : 'See Final Score'}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
