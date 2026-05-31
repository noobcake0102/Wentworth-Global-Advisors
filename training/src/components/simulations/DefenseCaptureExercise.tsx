import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Stage {
  id: string;
  phase: string;
  timeline: string;
  situation: string;
  decision: string;
  options: {
    id: string;
    label: string;
    consequence: string;
    pwinImpact: number;
    points: number;
  }[];
}

const STAGES: Stage[] = [
  {
    id: 's1',
    phase: 'RFI Response',
    timeline: '18 months before RFP',
    situation: 'The Navy releases an RFI for a shipboard electronics system. Your company makes ruggedized electronics with relevant technology but no Navy references. The RFI asks for capability statements, technology readiness level, and recommended performance specifications.',
    decision: 'How do you respond to this RFI?',
    options: [
      { id: 's1a', label: 'Submit a comprehensive RFI response that emphasizes your commercial technology, proposes performance specs that favor your design, and requests a capabilities briefing with the program office.', consequence: 'Your response shapes the draft specification — two of your proposed specs appear in the draft RFP. The PM office agrees to a briefing. You now know the customer and are on their radar 16 months before RFP.', pwinImpact: 25, points: 3 },
      { id: 's1b', label: 'Submit a minimal response to avoid revealing your technology to competitors. Focus on confirming interest without sharing your approach.', consequence: 'Your sparse response signals limited capability. A competitor who submitted a substantive response gets a capabilities briefing. You remain unknown to the program office going into industry day.', pwinImpact: 5, points: 1 },
      { id: 's1c', label: 'Skip the RFI — it\'s too early to invest resources. Wait for the RFP when the requirement is funded and certain.', consequence: 'You miss the opportunity to shape the requirement. The RFP specification now has three technical requirements that favor a competitor who engaged early. You\'re now writing to someone else\'s spec.', pwinImpact: 0, points: 0 },
    ],
  },
  {
    id: 's2',
    phase: 'Industry Day',
    timeline: '12 months before RFP',
    situation: 'The program office hosts an industry day. Your competitor — the current supplier on a related program — is in the room. You have 10 minutes for questions. You\'ve learned the Navy is concerned about schedule risk on the legacy system.',
    decision: 'What do you ask?',
    options: [
      { id: 's2a', label: 'Ask about the government\'s specific schedule risk mitigation priorities, and whether any performance specs are tradeable against schedule certainty.', consequence: 'Your question signals you understand the customer\'s real problem. The PM takes note. At the break, the contracting officer says "good question" — you\'ve differentiated yourself as someone who listened.', pwinImpact: 15, points: 3 },
      { id: 's2b', label: 'Ask about small business subcontracting goals and the planned evaluation criteria weighting.', consequence: 'Useful information, but available in the solicitation. You\'ve used your 10 minutes on administrative questions. The competitor used their time to discuss performance requirements.', pwinImpact: 5, points: 1 },
      { id: 's2c', label: 'Ask about the incumbent\'s performance on the related program — trying to surface weaknesses.', consequence: 'The PM is visibly uncomfortable with the question. The contracting officer intervenes. You\'ve damaged your reputation in the room before the competition starts.', pwinImpact: -10, points: -1 },
    ],
  },
  {
    id: 's3',
    phase: 'Teaming Decision',
    timeline: '8 months before RFP',
    situation: 'You need a past performance reference on a Navy program. Two teaming options: Option A is a small 8(a) with a weak Navy reference but set-aside eligibility. Option B is a large prime with strong Navy past performance but will want 40% workshare and the right to bid as prime if this goes full and open.',
    decision: 'Who do you team with?',
    options: [
      { id: 's3a', label: 'Team with Option A (8a). If the contract is set aside, you win as prime. Negotiate exclusivity across set-aside and full-open versions.', consequence: 'The RFP releases as a small business set-aside. You compete as prime with the 8(a) sub. Their Navy reference is weak but your technical approach is strong. You win. Your BD strategy was correct.', pwinImpact: 20, points: 3 },
      { id: 's3b', label: 'Team with Option B (large prime). Accept the 40% workshare to get the past performance strength.', consequence: 'The RFP releases as full and open. Option B threatens to prime it themselves — your teaming agreement has a carve-out that allows it if workshare drops below 35%. You\'re now a sub on your own opportunity.', pwinImpact: -5, points: 0 },
      { id: 's3c', label: 'Bid as a sole offeror. Your technology is strong enough without a teaming partner.', consequence: 'Past performance is evaluated as "neutral" with no references. On a best-value evaluation, neutral past performance against a competitor with strong Navy references is an almost insurmountable disadvantage at final selection.', pwinImpact: -15, points: 0 },
    ],
  },
  {
    id: 's4',
    phase: 'Proposal Strategy',
    timeline: 'RFP released',
    situation: 'The RFP has been released. Evaluation: Technical (40%), Past Performance (30%), Price (30%). Lowest Price Technically Acceptable (LPTA) is NOT the evaluation method — this is a Best Value Tradeoff. Your technical price is $2.3M against a competitor estimated at $1.9M.',
    decision: 'What is your proposal strategy?',
    options: [
      { id: 's4a', label: 'Price at $2.1M — reduce margin to close the gap. Emphasize technical superiority and past performance strength in the narrative to justify the premium.', consequence: 'Your proposal scores highest technically. At source selection, the SSEB recommends award to you despite the higher price: "The technical advantages of Offeror A represent a benefit to the government that is worth the $200K price premium." You win.', pwinImpact: 20, points: 3 },
      { id: 's4b', label: 'Price at $1.85M — undercut the competitor. Win on price, figure out the execution later.', consequence: 'You win the award but execute at a loss. The rushed cost estimate missed two subassemblies. The contract loses $340K. Your CPAR rating is "Satisfactory" for cost control — which is the worst possible rating for future competitions.', pwinImpact: -5, points: 0 },
      { id: 's4c', label: 'Price at $2.3M — hold margin. Write the strongest possible technical and past performance volumes to justify the premium.', consequence: 'Your technical score is excellent. But at $400K premium over the competitor, the SSEB cannot make the case to the source selection authority that the technical advantages are worth the premium at this dollar value. You lose a very close decision.', pwinImpact: 10, points: 2 },
    ],
  },
];

export function DefenseCaptureExercise() {
  const [stage, setStage] = useState(0);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const currentStage = STAGES[stage];
  const isRevealed = currentStage ? !!revealed[currentStage.id] : false;

  const totalPwin = STAGES.reduce((sum, s) => {
    const oid = selected[s.id];
    const opt = s.options.find(o => o.id === oid);
    return sum + (opt?.pwinImpact ?? 0);
  }, 25); // Start at 25% baseline

  if (done) {
    const finalPwin = Math.max(0, Math.min(100, totalPwin));
    const color = finalPwin >= 60 ? '#4caf82' : finalPwin >= 40 ? '#e8a84c' : '#e05c5c';
    return (
      <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
        <div className="px-6 py-4 border-b border-border-gold">
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Capture Exercise Complete</p>
        </div>
        <div className="p-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border p-6" style={{ borderColor: color + '40', backgroundColor: color + '10' }}>
              <p className="text-xs font-sans tracking-widest uppercase mb-2" style={{ color }}>Final Probability of Win</p>
              <p className="text-6xl font-bold font-serif" style={{ color }}>{finalPwin}<span className="text-2xl">%</span></p>
              <p className="text-sm text-muted mt-3">
                {finalPwin >= 60 ? 'Strong capture position. Your decisions built an intelligence advantage and shaped the competition favorably.' :
                 finalPwin >= 40 ? 'Competitive but not dominant. The decisions could have built more advantage in the pre-RFP phase.' :
                 'Weak position. Key capture decisions — particularly early engagement — significantly reduced your win probability.'}
              </p>
            </div>
            <div className="space-y-3">
              {STAGES.map(s => {
                const oid = selected[s.id];
                const opt = s.options.find(o => o.id === oid);
                if (!opt) return null;
                return (
                  <div key={s.id} className="flex items-center gap-3 p-3 rounded border border-border-gold/50">
                    <div className="flex-1">
                      <p className="text-xs text-muted">{s.phase}</p>
                      <p className="text-sm text-ink">{opt.label.slice(0, 60)}...</p>
                    </div>
                    <span className={`text-sm font-bold flex-shrink-0 ${opt.pwinImpact > 0 ? 'text-[#4caf82]' : opt.pwinImpact < 0 ? 'text-[#e05c5c]' : 'text-muted'}`}>
                      {opt.pwinImpact > 0 ? '+' : ''}{opt.pwinImpact}% Pwin
                    </span>
                  </div>
                );
              })}
            </div>
            <button onClick={() => { setStage(0); setSelected({}); setRevealed({}); setDone(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
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
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Capture Exercise — {currentStage.phase}</p>
          <p className="text-ink text-sm mt-0.5">{currentStage.timeline}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted">Stage {stage + 1} / {STAGES.length}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="rounded border border-border-gold/60 bg-bg/40 p-5 mb-5">
          <p className="text-sm text-ink leading-relaxed">{currentStage.situation}</p>
          <p className="text-sm font-medium text-gold mt-3">{currentStage.decision}</p>
        </div>

        <div className="space-y-3 mb-6">
          {currentStage.options.map(opt => (
            <button
              key={opt.id}
              onClick={() => !isRevealed && setSelected(s => ({ ...s, [currentStage.id]: opt.id }))}
              disabled={isRevealed}
              className={`w-full text-left p-4 rounded border text-sm transition-all ${
                selected[currentStage.id] === opt.id
                  ? isRevealed
                    ? ''
                    : 'border-gold/60 bg-gold/10 text-ink'
                  : 'border-border-gold text-muted hover:border-gold/30 hover:text-ink'
              } ${isRevealed && selected[currentStage.id] !== opt.id ? 'opacity-40' : ''}`}
              style={isRevealed && selected[currentStage.id] === opt.id ? {
                borderColor: (opt.pwinImpact >= 15 ? '#4caf82' : opt.pwinImpact >= 5 ? '#e8a84c' : '#e05c5c') + '60',
                backgroundColor: (opt.pwinImpact >= 15 ? '#4caf82' : opt.pwinImpact >= 5 ? '#e8a84c' : '#e05c5c') + '10',
              } : {}}
            >
              {isRevealed && selected[currentStage.id] === opt.id && (
                <p className="text-xs font-sans tracking-widest uppercase mb-2" style={{ color: opt.pwinImpact >= 15 ? '#4caf82' : opt.pwinImpact >= 5 ? '#e8a84c' : '#e05c5c' }}>
                  Pwin {opt.pwinImpact > 0 ? '+' : ''}{opt.pwinImpact}%
                </p>
              )}
              <p>{opt.label}</p>
              {isRevealed && selected[currentStage.id] === opt.id && (
                <p className="text-xs text-muted mt-3 leading-relaxed">{opt.consequence}</p>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <button
              onClick={() => setRevealed(r => ({ ...r, [currentStage.id]: true }))}
              disabled={!selected[currentStage.id]}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              See Outcome
            </button>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => { if (stage < STAGES.length - 1) setStage(s => s + 1); else setDone(true); }}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all"
            >
              {stage < STAGES.length - 1 ? `Next: ${STAGES[stage + 1].phase} →` : 'See Final Result'}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
