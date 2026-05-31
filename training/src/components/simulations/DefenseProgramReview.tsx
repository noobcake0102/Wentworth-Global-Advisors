import { useState } from 'react';
import { motion } from 'framer-motion';

interface Flag {
  id: string;
  metric: string;
  value: string;
  benchmark: string;
  isRedFlag: boolean;
  explanation: string;
  severity: 'critical' | 'watch' | 'ok';
}

const PROGRAM_FLAGS: Flag[] = [
  { id: 'cpi', metric: 'Cost Performance Index (CPI)', value: '0.82', benchmark: '≥ 1.00 (green)', isRedFlag: true, severity: 'critical', explanation: 'CPI of 0.82 means you are spending $1.22 to accomplish $1.00 of planned work. At this CPI, the program is 18% over budget measured to date. The EAC impact is significant — if CPI holds through completion on a $20M contract, final cost is ~$24.4M.' },
  { id: 'spi', metric: 'Schedule Performance Index (SPI)', value: '0.91', benchmark: '≥ 1.00 (green)', isRedFlag: true, severity: 'watch', explanation: 'SPI of 0.91 means you have accomplished 91% of the planned work for this period. The schedule is slipping — you\'re completing less work than planned. Note: SPI approaches 1.0 as the program nears completion regardless of true schedule health. Don\'t trust SPI late in a program.' },
  { id: 'tcpi', metric: 'To-Complete Performance Index (TCPI)', value: '1.31', benchmark: '≤ 1.10 (achievable)', isRedFlag: true, severity: 'critical', explanation: 'TCPI of 1.31 means you must perform 31% more efficiently for the remainder of the program to hit the current EAC. This is almost never achievable when you\'re already at CPI 0.82. If TCPI > 1.10, the EAC is understated.' },
  { id: 'eac', metric: 'Estimate at Completion (EAC)', value: '$22.4M', benchmark: 'BAC: $20.0M', isRedFlag: true, severity: 'critical', explanation: 'EAC is $2.4M over the Budget at Completion. But given the TCPI analysis, this EAC is likely understated. An independent EAC using current CPI (BAC/CPI = $20M/0.82 = $24.4M) suggests actual exposure is closer to $4.4M over budget.' },
  { id: 'cdrl', metric: 'CDRL Delivery Compliance', value: '87% on-time', benchmark: '≥ 95% (contract requirement)', isRedFlag: true, severity: 'watch', explanation: 'Three CDRLs delivered late this period. Late CDRLs are contract deliverables — missing them is a compliance issue, not just a schedule metric. The CO may issue a cure notice if the trend continues. Review which CDRLs are at risk and brief the CO proactively.' },
  { id: 'risk', metric: 'Open Risk Items', value: '14 open / 3 critical', benchmark: 'All critical risks mitigated or retired', isRedFlag: true, severity: 'critical', explanation: '3 critical risks with no mitigation plan is a program management failure. Risk registers exist to drive decisions — if critical risks are open without owner, budget, and schedule, they are not being managed.' },
  { id: 'subs', metric: 'Subcontractor On-Schedule Rate', value: '74%', benchmark: '≥ 90%', isRedFlag: true, severity: 'critical', explanation: '26% of subcontractors are behind schedule. This is the leading indicator that predicts your program schedule: your prime schedule is a function of your slowest critical-path sub. Identify which late subs are on the critical path immediately.' },
  { id: 'quality', metric: 'First-Pass Yield (FPY)', value: '91%', benchmark: '≥ 95% (contract requirement)', isRedFlag: false, severity: 'watch', explanation: 'FPY of 91% is below target but not unusual for early production. Track trend — if this is improving, it\'s manageable. If flat or declining, you have a systemic quality issue that will affect cost and schedule.' },
  { id: 'labor', metric: 'Authorized vs. Actual Headcount', value: '18 / 22 authorized', benchmark: 'Within ±10%', isRedFlag: false, severity: 'ok', explanation: 'Understaffed by 4. This could explain the schedule slip — if the plan assumed 22 people and you have 18, the schedule math was wrong from the start. Or you\'ve lost people mid-program. Either requires an honest staffing conversation with leadership.' },
  { id: 'fee', metric: 'Fee at Risk (Award Fee Pool Remaining)', value: '62% remaining', benchmark: '>70% at this milestone', isRedFlag: true, severity: 'watch', explanation: 'If you\'ve consumed 38% of the award fee pool at the midpoint evaluation, the fee evaluator has already seen performance issues. The remaining pool is at risk if current trends continue. This directly impacts profit.' },
];

export function DefenseProgramReview() {
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const allFlagged = Object.keys(flagged).length === PROGRAM_FLAGS.length;

  const correctlyIdentified = submitted ? PROGRAM_FLAGS.filter(f => f.isRedFlag && flagged[f.id] === true).length : 0;
  const falsePositives = submitted ? PROGRAM_FLAGS.filter(f => !f.isRedFlag && flagged[f.id] === true).length : 0;
  const missed = submitted ? PROGRAM_FLAGS.filter(f => f.isRedFlag && flagged[f.id] !== true).length : 0;
  const trueRedFlags = PROGRAM_FLAGS.filter(f => f.isRedFlag).length;

  const score = submitted ? Math.max(0, correctlyIdentified - falsePositives) : 0;
  const maxScore = trueRedFlags;

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Defense Program Review Simulation</p>
        <p className="text-ink text-sm mt-0.5">Identify the red flags in this program status data</p>
      </div>

      <div className="p-6">
        {!submitted ? (
          <>
            <div className="rounded border border-border-gold/60 bg-bg/40 p-5 mb-6">
              <p className="text-xs font-sans tracking-widest uppercase text-gold/70 mb-2">Scenario</p>
              <p className="text-sm text-ink leading-relaxed">You are walking into an Integrated Baseline Review for a $20M fixed-price incentive fee (FPIF) defense electronics contract. You have 10 minutes with the program data before the government customer arrives. Review each metric and flag the ones that require immediate attention or disclosure. A false positive costs you — only flag true red flags.</p>
            </div>

            <div className="space-y-3 mb-6">
              {PROGRAM_FLAGS.map(f => (
                <div key={f.id} className={`rounded border p-4 cursor-pointer transition-all ${flagged[f.id] ? 'border-[#e05c5c]/60 bg-[#e05c5c]/5' : 'border-border-gold hover:border-gold/30'}`}
                  onClick={() => setFlagged(fl => ({ ...fl, [f.id]: !fl[f.id] }))}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs font-sans tracking-widest uppercase text-muted/70">{f.metric}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-lg font-serif text-ink">{f.value}</p>
                        <p className="text-xs text-muted">Target: {f.benchmark}</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center transition-all ${flagged[f.id] ? 'bg-[#e05c5c] border-[#e05c5c]' : 'border-border-gold'}`}>
                      {flagged[f.id] && <span className="text-white text-xs">!</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSubmitted(true)}
              disabled={!allFlagged && Object.keys(flagged).length === 0}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30"
            >
              Submit Assessment
            </button>
            <p className="text-xs text-muted text-center mt-2">Click metrics to flag them as red flags. Submit when ready.</p>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border border-gold/30 bg-gold/5 p-6">
              <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2">Assessment Score</p>
              <p className="text-4xl font-serif font-bold text-gold">{score} <span className="text-xl text-muted/60">/ {maxScore}</span></p>
              <div className="flex gap-6 mt-3 text-sm">
                <span className="text-[#4caf82]">✓ {correctlyIdentified} correctly flagged</span>
                {missed > 0 && <span className="text-[#e05c5c]">✗ {missed} missed</span>}
                {falsePositives > 0 && <span className="text-[#e8a84c]">— {falsePositives} false positives</span>}
              </div>
            </div>

            <div className="space-y-4">
              {PROGRAM_FLAGS.map(f => {
                const wasFlagged = flagged[f.id] === true;
                const correct = (wasFlagged && f.isRedFlag) || (!wasFlagged && !f.isRedFlag);
                return (
                  <div key={f.id} className="rounded border border-border-gold p-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="text-xs font-sans tracking-widest uppercase text-muted/70">{f.metric}</p>
                        <p className="text-lg font-serif text-ink">{f.value}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {f.isRedFlag && <span className="text-[10px] font-sans tracking-widest uppercase px-2 py-0.5 rounded-full border" style={{ color: f.severity === 'critical' ? '#e05c5c' : '#e8a84c', borderColor: (f.severity === 'critical' ? '#e05c5c' : '#e8a84c') + '40' }}>{f.severity}</span>}
                        <span style={{ color: correct ? '#4caf82' : '#e05c5c' }}>{correct ? '✓' : '✗'}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{f.explanation}</p>
                  </div>
                );
              })}
            </div>

            <button onClick={() => { setFlagged({}); setSubmitted(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
              Try Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
