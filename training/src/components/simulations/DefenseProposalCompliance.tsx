import { useState } from 'react';
import { motion } from 'framer-motion';

interface Requirement {
  id: string;
  section: string;
  requirement: string;
  proposalSection: string | null;
  isAddressed: boolean;
  isCompliant: boolean;
  gap?: string;
}

const REQUIREMENTS: Requirement[] = [
  { id: 'r1', section: 'L.5.1', requirement: 'Technical Approach: Describe your approach to meeting all performance requirements in Section C. Include a discussion of design heritage and manufacturing maturity.', proposalSection: 'Technical Volume, Section 2.1', isAddressed: true, isCompliant: true },
  { id: 'r2', section: 'L.5.2', requirement: 'Key Personnel: Identify by name all Key Personnel as defined in Section H. Provide resumes limited to 2 pages each. Confirm availability at contract start.', proposalSection: 'Technical Volume, Section 3.0', isAddressed: true, isCompliant: false, gap: 'The draft proposal identifies Key Personnel but resumes are 4 pages each (limit is 2). The proposal is non-compliant on page limit — evaluators can reject or not evaluate excess pages.' },
  { id: 'r3', section: 'L.5.3', requirement: 'Past Performance: Submit a minimum of 3 and maximum of 5 relevant past performance references within the last 3 years. Complete the Past Performance Questionnaire for each reference.', proposalSection: 'Past Performance Volume', isAddressed: true, isCompliant: false, gap: 'The proposal includes 3 references but does not include completed PPQs — it references them as "to be provided." PPQs submitted directly by references after proposal close may not be accepted. This is a significant compliance gap.' },
  { id: 'r4', section: 'L.5.4', requirement: 'Management Approach: Describe your management approach including organizational structure, authority relationships, and how you will manage subcontractors if proposed.', proposalSection: null, isAddressed: false, isCompliant: false, gap: 'Section L.5.4 is not addressed in the proposal outline. This is a missing volume — evaluators may mark the proposal non-compliant for missing a required volume.' },
  { id: 'r5', section: 'L.6.1', requirement: 'Cost/Price Volume: Provide cost/price buildup for all proposed CLINs. Include direct labor, fringe, overhead, G&A, and fee. Provide a Bill of Materials for all material CLINs.', proposalSection: 'Cost/Price Volume', isAddressed: true, isCompliant: true },
  { id: 'r6', section: 'L.6.2', requirement: 'Subcontractor Cost/Price: For any subcontracted effort exceeding $750,000, provide the same cost detail as required for the prime. Include a basis of estimate for all proposed subcontractor costs.', proposalSection: 'Cost/Price Volume, Appendix A', isAddressed: true, isCompliant: false, gap: 'Subcontractor pricing is included as a lump sum without detail. FAR 15.404-3 requires cost or pricing data for subs over $750K. If the sub proposal was received, it must be incorporated or the prime is responsible for obtaining it.' },
  { id: 'r7', section: 'L.7.1', requirement: 'Small Business Subcontracting Plan: If the offeror is not a small business, provide a Small Business Subcontracting Plan meeting the minimum goals specified in Section H.', proposalSection: null, isAddressed: false, isCompliant: false, gap: 'The offeror is a large business and no Small Business Subcontracting Plan is included. This is a mandatory requirement for large businesses. Absence of the plan may result in rejection.' },
  { id: 'r8', section: 'L.8.1', requirement: 'Data Rights: Complete and include the clause at 252.227-7017 — Identification and Assertion of Use, Release, or Disclosure Restrictions. List all technical data with restrictive markings.', proposalSection: 'Technical Volume, Appendix B', isAddressed: true, isCompliant: true },
  { id: 'r9', section: 'L.9.1', requirement: 'Section 508 Compliance: Confirm that any deliverable electronic and information technology will conform to Section 508 accessibility standards.', proposalSection: 'Technical Volume, Section 2.3', isAddressed: true, isCompliant: true },
  { id: 'r10', section: 'L.10.1', requirement: 'Cyber Certification: Confirm current CMMC certification level and provide a copy of your SPRS score documentation for systems that will process CUI.', proposalSection: null, isAddressed: false, isCompliant: false, gap: 'No CMMC/SPRS documentation is included. This is a mandatory go/no-go for contracts requiring CUI handling. The proposal cannot be evaluated without this.' },
];

export function DefenseProposalCompliance() {
  const [mapped, setMapped] = useState<Record<string, 'addressed' | 'not-addressed' | 'gap'>>({});
  const [submitted, setSubmitted] = useState(false);

  const allMapped = REQUIREMENTS.every(r => mapped[r.id]);

  const correctCount = submitted ? REQUIREMENTS.filter(r => {
    const ans = mapped[r.id];
    if (r.isAddressed && r.isCompliant) return ans === 'addressed';
    if (r.isAddressed && !r.isCompliant) return ans === 'gap';
    return ans === 'not-addressed';
  }).length : 0;

  const criticalGaps = REQUIREMENTS.filter(r => !r.isCompliant);

  return (
    <div className="rounded-md border border-border-gold bg-surface overflow-hidden">
      <div className="px-6 py-4 border-b border-border-gold">
        <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Proposal Compliance Review</p>
        <p className="text-ink text-sm mt-0.5">Map RFP Section L requirements to the draft proposal</p>
      </div>

      <div className="p-6">
        {!submitted ? (
          <>
            <div className="rounded border border-border-gold/60 bg-bg/40 p-5 mb-6">
              <p className="text-xs font-sans tracking-widest uppercase text-gold/70 mb-2">Instructions</p>
              <p className="text-sm text-muted leading-relaxed">You are reviewing a draft proposal against RFP Section L requirements before the red team review. For each requirement, assess whether it is: fully addressed and compliant, addressed but with a compliance gap, or not addressed at all in the draft.</p>
            </div>

            <div className="space-y-4 mb-6">
              {REQUIREMENTS.map(r => (
                <div key={r.id} className="rounded border border-border-gold p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-[10px] font-sans tracking-widest uppercase bg-gold/10 text-gold px-2 py-0.5 rounded flex-shrink-0">{r.section}</span>
                    <p className="text-sm text-muted leading-relaxed">{r.requirement}</p>
                  </div>
                  {r.proposalSection && (
                    <p className="text-xs text-muted/60 mb-3">Draft location: {r.proposalSection}</p>
                  )}
                  <div className="flex gap-2">
                    {(['addressed', 'gap', 'not-addressed'] as const).map(opt => (
                      <button
                        key={opt}
                        onClick={() => setMapped(m => ({ ...m, [r.id]: opt }))}
                        className={`px-3 py-1.5 rounded text-xs font-sans tracking-widest uppercase transition-all ${
                          mapped[r.id] === opt
                            ? opt === 'addressed' ? 'bg-[#4caf82]/20 border border-[#4caf82]/60 text-[#4caf82]'
                            : opt === 'gap' ? 'bg-[#e8a84c]/20 border border-[#e8a84c]/60 text-[#e8a84c]'
                            : 'bg-[#e05c5c]/20 border border-[#e05c5c]/60 text-[#e05c5c]'
                            : 'border border-border-gold text-muted hover:text-ink'
                        }`}
                      >
                        {opt === 'addressed' ? '✓ Compliant' : opt === 'gap' ? '⚠ Gap' : '✗ Missing'}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSubmitted(true)}
              disabled={!allMapped}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {allMapped ? 'See Compliance Report' : `Map All ${REQUIREMENTS.length} Requirements`}
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded border border-gold/30 bg-gold/5 p-6">
              <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2">Compliance Matrix Score</p>
              <p className="text-4xl font-serif font-bold text-gold">{correctCount} <span className="text-xl text-muted/60">/ {REQUIREMENTS.length}</span></p>
              <p className="text-sm text-muted mt-2">correctly assessed</p>
            </div>

            <div className="rounded border border-[#e05c5c]/30 bg-[#e05c5c]/5 p-5">
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-[#e05c5c] mb-4">Actual Compliance Issues ({criticalGaps.length})</p>
              <div className="space-y-4">
                {criticalGaps.map(r => (
                  <div key={r.id} className="border-l-2 border-[#e05c5c]/40 pl-4">
                    <p className="text-xs font-sans text-gold mb-1">{r.section}</p>
                    <p className="text-sm text-ink">{r.requirement.slice(0, 80)}...</p>
                    <p className="text-xs text-muted mt-1">{r.gap ?? 'Not addressed in draft proposal.'}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => { setMapped({}); setSubmitted(false); }} className="w-full border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:text-ink transition-all">
              Review Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
