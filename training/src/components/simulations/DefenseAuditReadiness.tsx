import { useState } from 'react';
import { motion } from 'framer-motion';

interface SystemCheck {
  id: string;
  system: string;
  requirement: string;
  priority: 'critical' | 'high' | 'medium';
  finding: 'adequate' | 'inadequate' | null;
  adequateExplanation: string;
  inadequateExplanation: string;
  remediation: string;
  timeToFix: string;
}

const CHECKS: SystemCheck[] = [
  {
    id: 'timekeeping',
    system: 'Accounting System',
    requirement: 'Employees record time daily (not weekly) to specific contracts or indirect accounts using an approved timekeeping system.',
    priority: 'critical',
    finding: null,
    adequateExplanation: 'Daily timekeeping is a DCAA floor check standard. If workers cannot show their timesheets for the current week, the system is immediately suspect.',
    inadequateExplanation: 'This is the most common deficiency in first-time defense contractor audits. Reconstructed timesheets — even when honest — are treated as unallowable because they cannot be verified.',
    remediation: 'Implement daily timekeeping immediately. Acceptable systems: Unanet, Deltek, even a properly controlled spreadsheet system with supervisor certification. Train every employee — no exceptions.',
    timeToFix: '30–60 days',
  },
  {
    id: 'directIndirect',
    system: 'Accounting System',
    requirement: 'The chart of accounts separates direct costs (charged to specific contracts) from indirect costs (fringe, overhead, G&A) and indirect costs are allocated to contracts by a documented and consistent method.',
    priority: 'critical',
    finding: null,
    adequateExplanation: 'DCAA requires that indirect cost pools and allocation bases be disclosed and consistently applied. Inconsistent application is a finding.',
    inadequateExplanation: 'Commingling direct and indirect costs, or changing allocation methods without disclosure, creates audit findings that can result in cost disallowances and business system disapproval.',
    remediation: 'Restructure the chart of accounts. Engage a CPA with government contract accounting experience. Document the indirect cost structure in writing.',
    timeToFix: '60–120 days',
  },
  {
    id: 'purchasing',
    system: 'Purchasing System',
    requirement: 'Purchase orders include basis of price (competition, market research, or sole-source justification), terms and conditions consistent with the prime contract, and required certifications.',
    priority: 'high',
    finding: null,
    adequateExplanation: 'A documented purchasing system protects you when DCAA questions the cost reasonableness of materials charged to cost-type contracts.',
    inadequateExplanation: 'Purchase orders without price competition documentation or sole-source justification create allowability risk. DCAA can question and disallow costs that cannot be shown as fair and reasonable.',
    remediation: 'Add price reasonableness documentation to every PO. For sole-source purchases over $10K, require written justification.',
    timeToFix: '30–45 days',
  },
  {
    id: 'estimating',
    system: 'Estimating System',
    requirement: 'Cost estimates are developed from current, accurate cost or pricing data, using consistent and documented estimating methods applied across contracts.',
    priority: 'high',
    finding: null,
    adequateExplanation: 'An adequate estimating system supports forward pricing and avoids Defective Pricing allegations under TINA (Truth in Negotiations Act) for contracts over $2M.',
    inadequateExplanation: 'Inconsistent or undocumented estimating methods expose you to TINA risk. If you certified that cost data was current and complete at negotiation, and it wasn\'t, the government can reduce the contract price after award.',
    remediation: 'Document your estimating process, data sources, and assumption sets. Maintain bid history with actuals for comparison.',
    timeToFix: '60–90 days',
  },
  {
    id: 'property',
    system: 'Property Management',
    requirement: 'Government-furnished property (GFP) and contractor-acquired property charged to the government are tracked in a system that records location, condition, and disposition.',
    priority: 'medium',
    finding: null,
    adequateExplanation: 'Proper property management protects you from liability for lost or damaged government property and ensures you can account for all property during audits.',
    inadequateExplanation: 'Missing government property — even when genuinely lost through no misconduct — creates contractor liability. Without a tracking system, the government assumes negligence.',
    remediation: 'Implement a property management database. Conduct a physical inventory before DCMA inspection. Tag all GFP immediately upon receipt.',
    timeToFix: '45–60 days',
  },
  {
    id: 'icSubmission',
    system: 'Incurred Cost',
    requirement: 'The company submits an Incurred Cost Submission (ICS) within 6 months of fiscal year end for each year it has cost-type contract activity, regardless of whether DCAA requests it.',
    priority: 'critical',
    finding: null,
    adequateExplanation: 'Timely ICS filing protects you from a statute of limitations clock that runs against the government — they have 6 years to audit from the date of an adequate submission.',
    inadequateExplanation: 'Failure to submit ICS is itself an audit finding. Late or inadequate submissions extend the period DCAA can audit and delay the close-out of completed contracts, which locks up cash and fee.',
    remediation: 'If you have unfiled submissions, file them immediately — an untimely adequate submission is far better than no submission. Engage a government contracts accountant.',
    timeToFix: '90–180 days (filing a catch-up ICS)',
  },
  {
    id: 'laborInterview',
    system: 'Labor Charging',
    requirement: 'Employees understand how to charge their time, know they can report timesheet issues without retaliation, and supervisors do not pre-populate timesheets.',
    priority: 'critical',
    finding: null,
    adequateExplanation: 'DCAA floor checks include interviewing employees about timekeeping practices. The questions are designed to detect supervisor-directed charging.',
    inadequateExplanation: 'If employees say their supervisor told them what to charge, or that they regularly record time from memory at week\'s end, DCAA will expand the audit significantly. False time charges, even if not intentional, create False Claims Act exposure.',
    remediation: 'Train all employees on compliant timekeeping. Document the training. Create an anonymous reporting mechanism. Supervisors must certify they do not direct charging.',
    timeToFix: '2–4 weeks',
  },
];

const PRIORITY_COLOR = { critical: '#e05c5c', high: '#e8a84c', medium: '#c9a84c' };

export function DefenseAuditReadiness() {
  const [findings, setFindings] = useState<Record<string, 'adequate' | 'inadequate' | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = CHECKS.every(c => findings[c.id] != null);

  const inadequateItems = submitted ? CHECKS.filter(c => findings[c.id] === 'inadequate') : [];
  const criticalFindings = inadequateItems.filter(c => c.priority === 'critical');
  const highFindings = inadequateItems.filter(c => c.priority === 'high');
  const adequateCount = submitted ? CHECKS.filter(c => findings[c.id] === 'adequate').length : 0;

  const readinessScore = submitted ? Math.round((adequateCount / CHECKS.length) * 100) : 0;

  const statusLabel = readinessScore >= 85 ? 'Audit Ready' : readinessScore >= 60 ? 'Conditional' : 'Not Audit Ready';
  const statusColor = readinessScore >= 85 ? '#4caf82' : readinessScore >= 60 ? '#e8a84c' : '#e05c5c';

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">DCAA Audit Readiness Assessment</p>
        <p className="text-ink text-sm mt-0.5">Business Systems Self-Review</p>
      </div>

      <div className="p-6">
        {!submitted ? (
          <>
            <p className="text-muted text-sm mb-6">Review each business system requirement and mark whether your company currently meets it. Be honest — a realistic assessment now prevents audit findings later.</p>
            <div className="space-y-4">
              {CHECKS.map(c => (
                <div key={c.id} className="rounded border border-border-gold p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-[10px] font-sans tracking-widest uppercase px-2 py-0.5 rounded-full border flex-shrink-0 mt-0.5" style={{ color: PRIORITY_COLOR[c.priority], borderColor: PRIORITY_COLOR[c.priority] + '60' }}>
                      {c.priority}
                    </span>
                    <div>
                      <p className="text-[10px] font-sans tracking-widest uppercase text-muted/60">{c.system}</p>
                      <p className="text-sm text-ink leading-relaxed">{c.requirement}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setFindings(f => ({ ...f, [c.id]: 'adequate' }))}
                      className={`px-4 py-1.5 rounded text-xs font-sans font-medium tracking-widest uppercase transition-all ${findings[c.id] === 'adequate' ? 'bg-[#4caf82]/20 border border-[#4caf82]/60 text-[#4caf82]' : 'border border-border-gold text-muted hover:text-ink'}`}
                    >
                      Adequate
                    </button>
                    <button
                      onClick={() => setFindings(f => ({ ...f, [c.id]: 'inadequate' }))}
                      className={`px-4 py-1.5 rounded text-xs font-sans font-medium tracking-widest uppercase transition-all ${findings[c.id] === 'inadequate' ? 'bg-[#e05c5c]/20 border border-[#e05c5c]/60 text-[#e05c5c]' : 'border border-border-gold text-muted hover:text-ink'}`}
                    >
                      Deficient
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed mt-6"
            >
              {allAnswered ? 'Generate Readiness Report' : 'Review All Requirements'}
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border p-6" style={{ borderColor: statusColor + '40', backgroundColor: statusColor + '10' }}>
              <p className="text-xs font-sans tracking-widest uppercase mb-1" style={{ color: statusColor }}>Overall Readiness</p>
              <p className="text-2xl font-serif mb-1" style={{ color: statusColor }}>{statusLabel}</p>
              <p className="text-5xl font-bold font-serif" style={{ color: statusColor }}>{readinessScore}<span className="text-xl text-muted/60">%</span></p>
              <p className="text-sm text-muted mt-3">{adequateCount} of {CHECKS.length} requirements met</p>
            </div>

            {criticalFindings.length > 0 && (
              <div className="rounded border border-[#e05c5c]/30 bg-[#e05c5c]/5 p-5">
                <p className="text-xs font-sans font-medium tracking-widest uppercase text-[#e05c5c] mb-4">Critical Deficiencies — Remediate Immediately</p>
                <div className="space-y-4">
                  {criticalFindings.map(c => (
                    <div key={c.id} className="border-l-2 border-[#e05c5c]/40 pl-4">
                      <p className="text-sm font-medium text-ink">{c.system}: {c.requirement.slice(0, 60)}...</p>
                      <p className="text-xs text-muted mt-1">{c.inadequateExplanation}</p>
                      <p className="text-xs text-[#e05c5c] mt-2">Remediation: {c.remediation}</p>
                      <p className="text-xs text-muted mt-1">Estimated time: {c.timeToFix}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {highFindings.length > 0 && (
              <div className="rounded border border-[#e8a84c]/30 bg-[#e8a84c]/5 p-5">
                <p className="text-xs font-sans font-medium tracking-widest uppercase text-[#e8a84c] mb-4">High Priority Deficiencies</p>
                <div className="space-y-4">
                  {highFindings.map(c => (
                    <div key={c.id} className="border-l-2 border-[#e8a84c]/40 pl-4">
                      <p className="text-sm font-medium text-ink">{c.system}</p>
                      <p className="text-xs text-muted mt-1">{c.remediation}</p>
                      <p className="text-xs text-muted mt-1">Estimated time: {c.timeToFix}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button onClick={() => { setFindings({}); setSubmitted(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
              Start Over
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
