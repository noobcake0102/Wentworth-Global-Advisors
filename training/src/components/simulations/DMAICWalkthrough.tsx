import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

const phases = [
  {
    name: 'Define',
    color: '#c9a84c',
    icon: '📋',
    problem: 'Hospital discharge process averages 4.2 hours. Target CTQ: ≤2 hours. Monthly cost of delays: $89,000 in overtime and bed-blocking.',
    activities: [
      'Project Charter drafted: scope = medical-surgical unit, 6-month timeline, $120K savings target',
      'SIPOC completed: identified 7 departments involved in discharge (Nursing, Pharmacy, Transport, Housekeeping, Billing, Physician, Case Management)',
      'VOC collected from 60 patients: top need = "Know when I\'m leaving so I can arrange pickup"',
      'CTQ defined: 80% of discharges completed within 2 hours of discharge order',
    ],
    insight: 'Scope set at medical-surgical unit only. Two departments (Pharmacy and Transport) identified as key bottleneck suspects from SIPOC analysis.',
    question: 'The project charter has been signed. What is the team\'s next step?',
    answer: 'Move to Measure: collect baseline data on actual discharge cycle times and validate the measurement system.',
  },
  {
    name: 'Measure',
    color: '#4caf82',
    icon: '📊',
    problem: 'Baseline data collection: 90-day sample of 312 discharge events with timestamps at each step.',
    activities: [
      'Measurement system validated: nurses record discharge order time and actual departure time via EHR — MSA shows <10% gauge R&R',
      'Baseline sigma: 1.8σ (only 31% of discharges meet the 2-hour CTQ)',
      'Process mapping revealed 11 distinct handoff points from discharge order to patient departure',
      'Data stratification: delays are 40% longer on weekday afternoons vs. mornings',
    ],
    insight: 'The real baseline is far worse than management estimated (they believed 60% compliance). The afternoon spike points to a staffing pattern issue.',
    question: 'The team has solid baseline data showing 1.8 sigma. What happens next?',
    answer: 'Move to Analyze: use the data to identify which of the 11 handoff points drive most of the delay.',
  },
  {
    name: 'Analyze',
    color: '#e8a84c',
    icon: '🔍',
    problem: 'Root cause analysis of the 4.2-hour average discharge time.',
    activities: [
      'Value stream map of discharge process: actual care time = 28 min; waiting time = 3h 46min',
      'Fishbone diagram generated 14 hypotheses across 6M categories',
      'Pareto analysis of delay causes: Pharmacy (38%), Transport (24%), Physician sign-off (19%), Other (19%)',
      'Root cause confirmed: Pharmacy batches discharge medications 3× per day; patients routinely wait 90+ minutes for medications already prescribed',
    ],
    insight: 'The root cause is a batch-processing model in Pharmacy that was designed for efficiency but creates massive waiting waste. The 5 Whys revealed the batch schedule was set 8 years ago when the unit had half the current volume.',
    question: 'Root cause confirmed. The team now knows Pharmacy batching drives 38% of delays. What is the Improve phase objective?',
    answer: 'Design a solution that eliminates the Pharmacy batching bottleneck — ideally moving to on-demand dispensing triggered by discharge order.',
  },
  {
    name: 'Improve',
    color: '#6b8ed1',
    icon: '⚡',
    problem: 'Solution design and pilot for Pharmacy discharge medication process.',
    activities: [
      'Three solutions evaluated via weighted decision matrix: (1) Add 4th batch run, (2) Dedicated discharge pharmacist 10am–6pm, (3) Automated discharge medication queue with 30-min SLA',
      'Solution selected: dedicated discharge pharmacist role (score: 91/100 vs. 67 and 74)',
      'FMEA completed: 6 failure modes identified, 4 mitigated with error-proofing in EHR alerts',
      'Pilot: 4-week test in one wing (47 patients) — average discharge time reduced from 4.2h to 2.1h; 71% met 2-hour CTQ',
    ],
    insight: 'The pilot showed clear improvement but not yet at target (80% CTQ compliance). Investigation revealed Transport as the new bottleneck once Pharmacy delay was reduced.',
    question: 'Pilot shows 71% CTQ compliance vs. 80% target. What should the team do?',
    answer: 'Expand the pilot to address Transport as the new constraint, then confirm results before full implementation and Control phase.',
  },
  {
    name: 'Control',
    color: '#9b6bb5',
    icon: '🎯',
    problem: 'Locking in gains and preventing regression after full deployment.',
    activities: [
      'Full unit deployment: 90-day post-implementation data shows 83% CTQ compliance (exceeds 80% target)',
      'SPC chart implemented: P-chart monitoring weekly discharge CTQ compliance rate',
      'Standard operating procedures updated for dedicated discharge pharmacist role and Transport priority queue',
      'Control plan assigned to Nurse Manager: weekly review of SPC chart, monthly report to CNO',
      'Project closed: $127,000 annualized savings certified by Finance',
    ],
    insight: 'Project delivered 83% CTQ compliance vs. 80% target, $127K savings vs. $120K goal. The SPC P-chart now provides early warning if compliance drops below lower control limit of 74%.',
    question: 'The project is complete with results exceeding targets. What is the most important thing to do before the Black Belt moves to the next project?',
    answer: 'Formally hand off control to the process owner (Nurse Manager) with a documented control plan, ensuring the improvement is self-sustaining without ongoing Black Belt involvement.',
  },
];

export function DMAICWalkthrough() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completedPhases, setCompletedPhases] = useState<Set<number>>(new Set());

  const phase = phases[currentPhase];

  const handleNext = () => {
    setCompletedPhases(prev => new Set([...prev, currentPhase]));
    setShowAnswer(false);
    if (currentPhase < phases.length - 1) setCurrentPhase(currentPhase + 1);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    if (currentPhase > 0) setCurrentPhase(currentPhase - 1);
  };

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      {/* Phase navigator */}
      <div className="flex border-b border-border-gold">
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => { setCurrentPhase(i); setShowAnswer(false); }}
            className={`flex-1 py-3 text-xs font-sans font-medium tracking-widest uppercase transition-all duration-200 border-b-2 relative
              ${currentPhase === i ? 'border-gold text-gold' : 'border-transparent text-muted hover:text-ink'}`}
          >
            {completedPhases.has(i) && (
              <CheckCircle className="w-3 h-3 text-success absolute top-1 right-1" />
            )}
            {p.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{phase.icon}</span>
            <div>
              <p className="text-xs font-sans text-muted tracking-widest uppercase">Phase {currentPhase + 1} of 5</p>
              <h3 className="font-serif text-xl text-ink">{phase.name} Phase</h3>
            </div>
          </div>

          <p className="text-sm text-muted mb-4 leading-relaxed">{phase.problem}</p>

          <div className="mb-4">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-2">Key Activities</p>
            <ul className="space-y-2">
              {phase.activities.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-gold mt-1 flex-shrink-0">›</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-md bg-gold/5 border border-gold/20 mb-4">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-1">Phase Insight</p>
            <p className="text-sm text-ink leading-relaxed">{phase.insight}</p>
          </div>

          <div className="p-4 rounded-md bg-white/3 border border-white/8 mb-4">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-2">Phase Gate Question</p>
            <p className="text-sm text-ink font-medium mb-3">{phase.question}</p>
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="text-xs font-sans text-gold underline hover:text-gold-light transition-colors"
              >
                Reveal answer
              </button>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-success leading-relaxed"
              >
                ✓ {phase.answer}
              </motion.p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="px-6 pb-6 flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentPhase === 0}>
          <ChevronLeft className="w-3.5 h-3.5" />
          Previous
        </Button>
        <span className="text-xs text-muted font-sans">{currentPhase + 1} / {phases.length}</span>
        {currentPhase < phases.length - 1 ? (
          <Button size="sm" onClick={handleNext}>
            Next Phase
            <ChevronRight className="w-3.5 h-3.5" />
          </Button>
        ) : (
          <Button size="sm" variant="ghost" onClick={() => { setCurrentPhase(0); setShowAnswer(false); setCompletedPhases(new Set()); }}>
            Restart
          </Button>
        )}
      </div>
    </div>
  );
}
