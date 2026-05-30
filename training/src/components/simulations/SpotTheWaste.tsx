import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const WASTES = ['Defects', 'Overproduction', 'Waiting', 'Non-utilized Talent', 'Transportation', 'Inventory', 'Motion', 'Extra Processing'] as const;
type WasteType = typeof WASTES[number];

interface Activity {
  id: string;
  description: string;
  correct: WasteType;
  explanation: string;
}

const activities: Activity[] = [
  { id: 'a1', description: 'A customer service rep re-enters customer data from a paper form into the CRM system — data that was already captured by the customer online.', correct: 'Transportation', explanation: 'Moving data between systems without adding value is Transportation waste in a service context.' },
  { id: 'a2', description: 'The quality team produces 50-page monthly defect reports that managers acknowledge receiving but rarely read past the executive summary.', correct: 'Overproduction', explanation: 'Creating output beyond what is needed or consumed is Overproduction — the most serious waste because it hides others.' },
  { id: 'a3', description: 'A loan officer waits 3 days for underwriting approval that takes 2 hours of actual work, because applications are batched and processed weekly.', correct: 'Waiting', explanation: 'The loan officer and the application are idle — waiting for the next processing batch. Classic Waiting waste.' },
  { id: 'a4', description: 'An invoice is sent to a customer with the wrong billing address, requiring the billing team to reissue the invoice and resend.', correct: 'Defects', explanation: 'An incorrect invoice that must be redone is a Defect — output that fails to meet requirements and requires rework.' },
  { id: 'a5', description: 'A senior analyst spends 60% of their time formatting reports and sending routine status emails, leaving little time for analysis that requires their expertise.', correct: 'Non-utilized Talent', explanation: 'Underusing an expert\'s skills by assigning them routine tasks is Non-utilized Talent — wasting human capability and knowledge.' },
  { id: 'a6', description: 'A nurse walks to the supply room 12 times per shift to retrieve items that could be restocked at the point of care.', correct: 'Motion', explanation: 'Unnecessary movement of people (not products) during work is Motion waste. 5S addresses this by putting supplies where they are needed.' },
  { id: 'a7', description: 'A department requires 5 management sign-offs for any expense under $500, even though the fraud risk at this level is negligible.', correct: 'Extra Processing', explanation: 'Doing more work, checking, or approval than the risk or value requires is Extra Processing waste.' },
  { id: 'a8', description: 'A warehouse holds a 90-day supply of components that are used on a 2-week cycle, tying up $340,000 in working capital.', correct: 'Inventory', explanation: 'Holding materials, WIP, or finished goods beyond immediate needs is Inventory waste — capital tied up, space consumed, risk of obsolescence.' },
];

export function SpotTheWaste() {
  const [selections, setSelections] = useState<Record<string, WasteType | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = activities.every(a => selections[a.id] != null);
  const score = submitted ? activities.filter(a => selections[a.id] === a.correct).length : 0;

  const handleReset = () => {
    setSelections({});
    setSubmitted(false);
  };

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold flex items-center justify-between">
        <div>
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-0.5">Simulation</p>
          <h3 className="font-serif text-lg text-ink">Spot the Waste</h3>
        </div>
        {submitted && (
          <div className="text-right">
            <p className="text-xs text-muted font-sans">Score</p>
            <p className={`text-2xl font-serif ${score >= 6 ? 'text-success' : score >= 4 ? 'text-warning' : 'text-danger'}`}>
              {score}/{activities.length}
            </p>
          </div>
        )}
      </div>

      <p className="px-6 pt-4 pb-2 text-sm text-muted">For each scenario below, select the DOWNTIME waste category it best represents.</p>

      <div className="p-6 space-y-5">
        {activities.map((activity, idx) => {
          const selected = selections[activity.id];
          const isCorrect = submitted && selected === activity.correct;
          const isWrong = submitted && selected !== activity.correct;

          return (
            <div key={activity.id} className={`rounded-md border p-4 transition-all duration-300
              ${isCorrect ? 'border-success/40 bg-success/5' : isWrong ? 'border-danger/40 bg-danger/5' : 'border-border-gold bg-card/50'}`}>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-xs font-sans text-muted flex-shrink-0 mt-0.5">{idx + 1}.</span>
                <p className="text-sm text-ink leading-relaxed">{activity.description}</p>
                {submitted && (isCorrect
                  ? <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  : <XCircle className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" />
                )}
              </div>
              <select
                value={selected ?? ''}
                onChange={e => setSelections(prev => ({ ...prev, [activity.id]: e.target.value as WasteType }))}
                disabled={submitted}
                className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/40 disabled:opacity-60 disabled:cursor-not-allowed appearance-none"
              >
                <option value="" disabled>Select waste type...</option>
                {WASTES.map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 text-xs text-muted leading-relaxed"
                >
                  <span className={`font-medium ${isCorrect ? 'text-success' : 'text-danger'}`}>
                    {isCorrect ? '✓ Correct — ' : `✗ Correct answer: ${activity.correct} — `}
                  </span>
                  {activity.explanation}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <div className="px-6 pb-6 flex gap-3">
        {!submitted ? (
          <Button onClick={() => setSubmitted(true)} disabled={!allAnswered}>
            Submit Answers
          </Button>
        ) : (
          <Button variant="outline" onClick={handleReset}>Try Again</Button>
        )}
        {!allAnswered && !submitted && (
          <p className="text-xs text-muted self-center">Answer all {activities.length} scenarios to submit.</p>
        )}
      </div>
    </div>
  );
}
