import type { Course } from '../../types/course';

export const defenseExecDeepCourse: Course = {
  id: 'defense-exec-deep',
  track: 'defense-contracting',
  title: 'Running a Defense Business',
  subtitle: 'Track A · Level 3 · Deep Implementation',
  description:
    'You have defense contracts. Now learn what it actually takes to survive the audits, maintain your clearances, pass CMMC assessments, and keep programs from blowing up your balance sheet. This course is written for executives and owners who are already in the arena — not preparing to enter it.',
  status: 'available',
  estimatedHours: 8,
  color: '#4a7fa5',
  icon: '⚖️',
  modules: [
    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 1 — Cost Accounting Standards (CAS)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cas-standards',
      number: 1,
      title: 'Cost Accounting Standards (CAS)',
      description:
        'CAS is not a compliance checkbox — it is a set of rules that will reorganize how you run your entire business if you cross the coverage thresholds. Understand when you are covered, what changes, and how to avoid the penalties that have cost companies millions in contract repricing.',
      estimatedMinutes: 72,
      learningObjectives: [
        'Identify the CAS coverage thresholds and determine your company\'s coverage status',
        'Explain how full CAS coverage changes indirect rate structures and cost allocation methodologies',
        'Describe what a Disclosure Statement (DS-1) is, when it is required, and what a practice change requires',
        'Recognize the consequences of CAS non-compliance including penalties and contract repricing',
      ],
      lessons: [
        {
          id: 'cas-coverage',
          title: 'CAS Coverage — When the Rules Change and What Changes With Them',
          estimatedMinutes: 22,
          content: [
            {
              type: 'paragraph',
              text: 'Cost Accounting Standards were created by Congress in 1970 after auditors discovered that defense contractors were allocating costs to government contracts in ways that maximized reimbursement rather than reflecting economic reality. The 19 standards — codified at 48 CFR 9904.401 through 9904.420 — govern how you define, measure, accumulate, allocate, and report costs on covered government contracts.',
            },
            {
              type: 'heading',
              text: 'The Coverage Triggers',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'CAS coverage is triggered at the contract level, not the company level — but once you cross the thresholds, the requirements apply to your entire business system. Modified CAS coverage applies when a single negotiated contract exceeds $2 million (adjusted for inflation; check the FAR for the current threshold). Full CAS coverage applies when you receive $50 million or more in CAS-covered contracts in a single accounting period. The distinction matters enormously.',
            },
            {
              type: 'table',
              headers: ['Coverage Level', 'Contract Trigger', 'Standards Required', 'Key Impact'],
              rows: [
                ['Exempt', 'Contracts under $2M threshold; small business; commercial items; T&M under $500K; foreign govts', 'None', 'Standard cost accounting practices apply'],
                ['Modified CAS', 'Single negotiated contract ≥ $2M (current threshold)', 'CAS 9904.401, 9904.402, 9904.405, 9904.406 only', 'Consistency in estimating, accumulating, and reporting costs'],
                ['Full CAS', '$50M+ CAS-covered awards in prior accounting period', 'All 19 applicable standards', 'Full disclosure statement required; all allocation methodologies locked in'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Trap Companies Fall Into',
              text: 'You win a $3M cost-plus contract. Modified CAS coverage applies. No big deal, right? Wrong — if you are growing and you cross the $50M threshold the following year, you are now fully CAS-covered, and your disclosure statement (if not already filed) is due before contract award. Companies that grow through full coverage without knowing it face retroactive findings and significant repricing exposure. Know your trajectory, not just your current position.',
            },
            {
              type: 'heading',
              text: 'The 19 CAS Standards and What They Govern',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Standard', 'Subject', 'Practical Impact'],
              rows: [
                ['9904.401', 'Consistency in Estimating, Accumulating, and Reporting Costs', 'What you estimate must match how you accumulate — no gaming the bid'],
                ['9904.402', 'Consistency in Allocating Costs Incurred for Same Purpose', 'A cost can only be allocated once — not direct on one contract and indirect on another'],
                ['9904.403', 'Allocation of Home Office Expenses to Segments', 'How corporate overhead gets pushed down to business units'],
                ['9904.404', 'Capitalization of Tangible Assets', 'Your capitalization thresholds must be documented and consistently applied'],
                ['9904.405', 'Accounting for Unallowable Costs', 'Unallowable costs must be identified and excluded — not buried in pools'],
                ['9904.406', 'Cost Accounting Period', 'Your fiscal year is your accounting period — you cannot shift costs between periods'],
                ['9904.407', 'Use of Standard Costs for Direct Materials', 'If you use standard costs, variances must be allocated to contracts'],
                ['9904.408', 'Accounting for Costs of Compensated Personal Absence', 'Vacation and sick accruals must be based on vested entitlement'],
                ['9904.409', 'Depreciation of Tangible Capital Assets', 'Useful life and residual value must be set in advance, not retrospectively'],
                ['9904.410', 'Allocation of Business Unit G&A Expenses to Final Cost Objectives', 'G&A base selection (total cost input, value-added, single element) must be appropriate and consistent'],
                ['9904.411', 'Accounting for Acquisition Costs of Material', 'FIFO, LIFO, and weighted-average rules for government contracts'],
                ['9904.412', 'Composition and Measurement of Pension Cost', 'Actuarial methods for defined benefit plans must be disclosed and consistently applied'],
                ['9904.413', 'Adjustment and Allocation of Pension Cost', 'Segment-closing and workforce reduction pension adjustments'],
                ['9904.414', 'Cost of Money as an Element of the Cost of Facilities Capital', 'How to calculate and apply the facilities capital cost of money (FCCM) to bids'],
                ['9904.415', 'Accounting for the Cost of Deferred Compensation', 'Stock options, deferred comp arrangements — accrual method matters'],
                ['9904.416', 'Accounting for Insurance Costs', 'Self-insurance vs. purchased insurance — actuarially determined reserves required'],
                ['9904.417', 'Cost of Money as an Element of the Cost of Capital Assets Under Construction', 'Construction-in-progress FCCM calculation'],
                ['9904.418', 'Allocation of Direct and Indirect Costs', 'The core rule — direct costs directly; indirect in homogeneous pools with a consistent base'],
                ['9904.420', 'Accounting for Independent Research and Development and Bid & Proposal Costs', 'IR&D and B&P must be accounted for separately and allocated properly'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Before your next contract award crosses $2M, map every indirect cost pool and allocation base you currently use. CAS 9904.418 requires that indirect costs be accumulated in homogeneous pools — which means labor-related costs should not be in the same pool as facilities costs if they have different causal relationships to contracts. Many small contractors discover their accounting structure is CAS-incompatible only after the contract is signed and DCAA shows up. Fix it before that happens.',
            },
          ],
        },
        {
          id: 'cas-business-impact',
          title: 'How CAS Changes Everything About Running Your Business',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'CAS coverage is not just an accounting compliance problem — it restructures your entire cost management system, constrains how you set up new lines of business, and creates rigidity in your indirect rate structure that can make or break your competitiveness on future bids. Understand what it actually requires operationally.',
            },
            {
              type: 'heading',
              text: 'Indirect Rate Structures Under CAS',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Under CAS 9904.418, you must group indirect costs into homogeneous pools — meaning costs that bear a similar relationship to final cost objectives and can be allocated on a single base. A typical fully CAS-covered structure includes: a Fringe Benefits pool (allocated on direct labor dollars or hours), an Overhead pool (allocated on direct labor, often separate pools for different business segments), a G&A pool (allocated on total cost input or modified TCI), and if applicable, a Material Handling pool. Once you establish this structure and disclose it, you cannot change it without a formal disclosure statement amendment and — critically — potential contract repricing.',
            },
            {
              type: 'heading',
              text: 'Bid and Proposal Costs Under CAS 9904.420',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'CAS 9904.420 requires that IR&D and B&P costs be separately accumulated and allocated across all final cost objectives on a cost input or other equitable base. What this means practically: every hour your staff spends responding to an RFP must be tracked to a B&P job number — not buried in overhead, not charged directly to an existing contract "while they have some downtime." If DCAA finds B&P hours in your overhead pool or, worse, charged directly to a contract, you are looking at unallowable cost findings and potential fraud exposure depending on intent.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The $4.2M Repricing That Came From a Pool Structure Change',
              text: 'A mid-sized engineering services company with $80M in annual revenue crossed full CAS coverage in their third year of government contracting. They had previously allocated all overhead — facilities, IT support, indirect labor — in a single pool on a direct labor dollar base. Their DCAA auditor determined that the facilities cost bore no causal relationship to direct labor dollars and issued a finding under CAS 9904.418 requiring separation of facilities costs into a separate pool allocated on square footage or headcount. The retroactive repricing on three active cost-plus contracts totaled $4.2M in over-billed costs they had to return. The CFO\'s comment: "We thought we had a good cost system. We didn\'t — we had a cost system that worked fine until we were CAS-covered, at which point it was wrong in ways we didn\'t understand." The fix was not the expensive part. The repricing was.',
            },
            {
              type: 'heading',
              text: 'The Bid and Proposal Cost Trap',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Growing defense contractors often struggle with B&P costs because the volume of bid activity increases with revenue, but the staff doing the bids are often the same people doing the contract work. The discipline of charging B&P time accurately — even when it means a manager\'s utilization rate looks low — is a cultural and managerial issue as much as an accounting one. Companies that tolerate inaccurate B&P tracking because "it\'s immaterial" eventually face a DCAA audit where five years of inaccurate timekeeping becomes a systemic deficiency finding.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'If you are approaching the $50M CAS coverage threshold, conduct a self-assessment of your indirect rate structure before you cross it. Engage a CAS-experienced accounting consultant to map your current pools against the 9904.418 homogeneity requirement. The cost of a pre-coverage review (typically $15K–$40K) is trivial compared to the retroactive repricing exposure from a pool structure that DCAA determines is CAS non-compliant after award.',
            },
          ],
        },
        {
          id: 'cas-disclosure-audits',
          title: 'Disclosure Statements, Practice Changes, and CAS Audits',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'The Disclosure Statement (Form CASB DS-1) is the governing document of your cost accounting system under full CAS coverage. It describes, in writing, every cost accounting practice you use: how you define direct and indirect costs, how you accumulate costs, what your allocation bases are, and how you treat specific cost elements. Once filed, you are bound to it.',
            },
            {
              type: 'heading',
              text: 'What the DS-1 Covers',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Part I: General Information — company structure, business segments, accounting periods',
                'Part II: Direct Costs — what you treat as direct and how you identify them',
                'Part III: Direct vs. Indirect Costs — your criteria for the distinction',
                'Part IV: Indirect Costs — pool structure, allocation bases, and treatment of specific indirect cost categories',
                'Part V: Depreciation and Capitalization — asset capitalization thresholds, useful lives, depreciation methods',
                'Part VI: Other Costs and Credits — IR&D, B&P, pension, compensation, leasing',
                'Part VII: Deferred Compensation and Insurance — actuarial methods, self-insurance reserves',
                'Part VIII: Compensation for Personal Services — fringe benefit methodologies',
              ],
            },
            {
              type: 'heading',
              text: 'Practice Changes — The Most Dangerous CAS Event',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A practice change occurs when you alter a cost accounting practice that has been disclosed. The regulations distinguish between two types: a desirable change (initiated by the contractor, requires government approval, and if it increases costs on existing contracts, the contractor bears the increase) and a required change (mandated by CAS Board rulemaking or a DCAA finding, where the government shares in the cost increase). The critical point: you cannot simply change your overhead allocation base because a new base would make you more competitive on bids. That is a desirable change that requires an advance disclosure amendment, government approval, and potential equitable adjustments on existing covered contracts. Do it without the advance notice and you have a retroactive practice change — a finding that almost always results in repricing.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The IT Services Company That Changed Pools Mid-Year',
              text: 'An IT services company had disclosed a G&A pool allocated on a total cost input (TCI) base. Midway through the fiscal year, the CFO noticed that shifting to a value-added base (TCI minus subcontractor costs) would significantly lower the G&A rate on their large subcontract-heavy contracts and improve their bid competitiveness. He made the change in the accounting system without filing a disclosure amendment. DCAA discovered the change during the incurred cost audit eighteen months later. The finding: an undisclosed practice change creating a $2.8M retroactive adjustment — plus an adverse MMAS (Material Management and Accounting System) finding that triggered additional audits. The CFO was not being dishonest; he genuinely did not know he needed government approval. Ignorance is not a defense in CAS.',
            },
            {
              type: 'heading',
              text: 'CAS Audits — How They Work',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DCAA conducts CAS compliance audits — distinct from incurred cost audits — to verify that your practices match your disclosure statement and that your disclosure statement accurately describes your practices. The audit includes a review of the DS-1 itself for completeness, testing of transactions against disclosed practices, evaluation of any practice changes for proper notification and approval, and in many cases, a quantification of the cost impact of any non-compliant practices.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Disclosure Statement (DS-1)', definition: 'The written description of all cost accounting practices filed with the cognizant federal agency under full CAS coverage. Filing is required before award of a CAS-covered contract once the $50M threshold is crossed.' },
                { term: 'Cognizant Federal Agency (CFA)', definition: 'The government agency responsible for overall audit oversight of a contractor, typically determined by which agency has the largest dollar value of negotiated contracts with the contractor.' },
                { term: 'Desirable Change', definition: 'A contractor-initiated change to a disclosed cost accounting practice. Requires advance government approval; if the change increases costs on existing covered contracts, the contractor absorbs the increase.' },
                { term: 'Required Change', definition: 'A practice change mandated by CAS Board regulation or a DCAA finding that a disclosed practice is non-compliant. Cost increases resulting from required changes may be shared with the government.' },
                { term: 'Retroactive Practice Change', definition: 'An undisclosed change to cost accounting practices discovered after the fact in an audit. Results in retroactive repricing and potential penalties.' },
                { term: 'Equitable Adjustment', definition: 'A contract price adjustment — upward or downward — required to reflect the cost impact of a CAS practice change on covered contracts.' },
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'If you are fully CAS-covered and you are considering any change to your accounting system — new ERP system, restructuring indirect pools, changing depreciation lives, adjusting your fringe benefit methodology — require your Controller to provide a written analysis of whether the change constitutes a disclosed practice change before implementation. This is a governance process, not an accounting process. It belongs on your executive agenda. The cost of an undisclosed practice change in a DCAA audit routinely exceeds $1M in repricing and the legal fees to fight it.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q1-cas-1',
          type: 'multiple-choice',
          question: 'A defense contractor receives a $3M cost-plus-fixed-fee contract. Which CAS coverage level applies?',
          options: [
            'No CAS coverage — the company must exceed $50M first',
            'Modified CAS coverage — four standards apply: 9904.401, 402, 405, and 406',
            'Full CAS coverage — all 19 applicable standards apply immediately',
            'CAS coverage is optional for contracts under $10M',
          ],
          correctIndex: 1,
          explanation: 'A single negotiated contract exceeding the $2M threshold (subject to inflation adjustment) triggers modified CAS coverage, which requires compliance with four specific standards: 9904.401 (consistency in estimating/accumulating/reporting), 9904.402 (consistency in allocating costs incurred for same purpose), 9904.405 (accounting for unallowable costs), and 9904.406 (cost accounting period). Full CAS coverage requiring all standards applies when a contractor receives $50M or more in CAS-covered contracts in a single accounting period.',
        },
        {
          id: 'q2-cas-1',
          type: 'multiple-choice',
          question: 'A CFO wants to change the G&A allocation base from total cost input (TCI) to value-added (TCI minus subcontractor costs) because it would lower the G&A rate on large subcontract-heavy bids. Under CAS, what must happen before this change is implemented?',
          options: [
            'Nothing — allocation base changes are purely internal accounting decisions',
            'The change must be disclosed to the IRS since it affects taxable income',
            'A disclosure statement amendment must be filed and government approval obtained in advance; existing covered contracts may require equitable adjustment',
            'DCAA must approve the change, but the contractor can implement it first and seek approval retroactively',
          ],
          correctIndex: 2,
          explanation: 'A change to the G&A allocation base is a desirable practice change under CAS. It requires advance amendment of the DS-1 disclosure statement and government approval before implementation. If the change increases costs on existing covered contracts, the contractor absorbs the increase. Implementing the change without prior approval creates a retroactive practice change finding, which results in repricing and potential penalties.',
        },
        {
          id: 'q3-cas-1',
          type: 'multiple-choice',
          question: 'Under CAS 9904.420, hours spent by a program manager responding to an RFP while also managing an active cost-plus contract should be charged to:',
          options: [
            'The active cost-plus contract, since that is where the manager\'s time is primarily focused',
            'A dedicated B&P job number in the B&P indirect cost pool',
            'Overhead, since bid work is inherently an indirect activity',
            'Either overhead or B&P — the standard allows flexibility',
          ],
          correctIndex: 1,
          explanation: 'CAS 9904.420 requires that bid and proposal costs be separately accumulated and allocated. Hours spent on B&P activity must be charged to a B&P cost pool job number — not to active contracts (which would inflate contract costs), not buried in overhead (which would dilute the pool and misstate true overhead costs). The failure to track B&P hours accurately is one of the most common DCAA timekeeping audit findings.',
        },
        {
          id: 'q4-cas-1',
          type: 'true-false',
          question: 'A company that crosses the full CAS coverage threshold of $50M may change its cost accounting practices to optimize future bid competitiveness, as long as the changes are implemented at the start of a new fiscal year.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Once fully CAS-covered, any change to a disclosed cost accounting practice — regardless of timing — requires advance disclosure amendment and government approval. Starting at a new fiscal year does not eliminate the advance notification requirement or the potential equitable adjustment obligations on existing covered contracts. Timing does not substitute for the required approval process.',
        },
        {
          id: 'q5-cas-1',
          type: 'multiple-choice',
          question: 'Under CAS 9904.418, what is the definition of a "homogeneous" indirect cost pool?',
          options: [
            'A pool where all costs are of the same dollar magnitude',
            'A pool where all costs bear a similar causal or beneficial relationship to final cost objectives and can be equitably allocated on a single base',
            'A pool that contains only labor-related costs',
            'Any pool approved by DCAA during a prior incurred cost audit',
          ],
          correctIndex: 1,
          explanation: 'CAS 9904.418 defines homogeneity by the causal/beneficial relationship test: costs in the same pool should have a similar relationship to the things they are being allocated to (final cost objectives), such that a single allocation base fairly distributes those costs. A pool containing both labor-supervision costs and facilities costs is likely non-homogeneous because direct labor drives supervision costs but square footage drives facilities costs — a single base cannot equitably allocate both.',
        },
        {
          id: 'q6-cas-1',
          type: 'multiple-choice',
          question: 'What is the primary consequence of a DCAA finding that a contractor\'s cost accounting practices do not conform to the contractor\'s disclosed practices?',
          options: [
            'A formal warning letter with 90 days to correct the practice',
            'Retroactive repricing of all CAS-covered contracts affected by the non-conforming practice',
            'Immediate contract termination for default',
            'Suspension of the contractor\'s facility security clearance',
          ],
          correctIndex: 1,
          explanation: 'A CAS non-conformance finding — where actual practices differ from disclosed practices — results in retroactive repricing of all affected covered contracts. The government calculates whether the non-conforming practice increased or decreased contract costs versus what the disclosed practice would have produced, and the price is adjusted accordingly. In addition to repricing, penalties may apply under 10 U.S.C. 3547 when the non-conformance results in increased costs to the government.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 2 — DCAA Audit Readiness
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dcaa-audit-readiness',
      number: 2,
      title: 'DCAA Audit Readiness',
      description:
        'DCAA auditors are not adversaries — they are auditors doing their job. But their job, done against a contractor with an inadequate business system, will cost you money, time, and contract withholdings. Learn how they think, what they look for, and how to run a business that survives the scrutiny.',
      estimatedMinutes: 78,
      learningObjectives: [
        'Describe the key DCAA audit types and what each one examines',
        'Explain what constitutes an adequate incurred cost submission and the consequences of inadequacy',
        'Understand how forward pricing rate agreements (FPRAs) and billing rates are established and audited',
        'Identify the business system deficiency process and the 5–10% payment withholding mechanism',
      ],
      lessons: [
        {
          id: 'dcaa-how-they-think',
          title: 'How DCAA Thinks — The Auditor\'s Lens',
          estimatedMinutes: 24,
          content: [
            {
              type: 'paragraph',
              text: 'DCAA — the Defense Contract Audit Agency — is a field audit organization that reports to the Under Secretary of Defense (Comptroller). Its mission is to provide audit services and financial advisory services for DoD acquisitions. DCAA auditors are not trying to put you out of business. They are trying to confirm that the costs you claim on government contracts are allowable, allocable, and reasonable, and that your accounting system can support those claims with adequate records.',
            },
            {
              type: 'heading',
              text: 'The Major DCAA Audit Types',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Audit Type', 'Trigger', 'What They Examine', 'Output'],
              rows: [
                ['Accounting System Adequacy', 'Pre-award for cost-type contracts; can be recurring', 'Whether your accounting system can track costs by contract and produce required reports', 'Adequate/Inadequate determination; deficiency findings'],
                ['Incurred Cost Audit', 'Annual — fiscal year-end ICS submission', 'Actual costs charged to flexibly priced contracts in the prior year', 'Questioned costs, unallowable findings, rate settlements'],
                ['Forward Pricing Rate Audit', 'Before FPRA/FPRR negotiation', 'Projected labor rates, overhead rates, G&A rates used in bids', 'Rate recommendations; FPRA or FPRR'],
                ['Labor Floor Check', 'Unannounced or scheduled during performance', 'Whether employees are present and charging the correct job number', 'Timekeeping deficiency findings if mischarges found'],
                ['Labor Interview Audit', 'During performance period', 'Whether employees understand timekeeping obligations and can describe their work', 'Systemic timekeeping deficiency findings'],
                ['Estimating System Audit', 'Pre-award or as required by DFARS 252.215-7002', 'Whether bid preparation is systematic, consistent, and adequately supported', 'Estimating system deficiency findings'],
                ['Material Management Audit (MMAS)', 'Required for contractors with MMAS in DFARS 252.242-7004', 'Controls over material planning, storage, and charging to contracts', 'MMAS deficiency findings; business system disapproval'],
                ['Business System Audit (DFARS 252.242-7005)', 'Periodic or triggered by findings', 'All six business systems: accounting, estimating, purchasing, EVMS, MMAS, property', 'Business system disapproval; payment withholding'],
              ],
            },
            {
              type: 'heading',
              text: 'The Floor Check — What Actually Happens',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A floor check is exactly what it sounds like. An auditor (sometimes unannounced) walks the floor of your facility and compares who is actually present and what they say they are working on against the labor charges in your timekeeping system. If an engineer says she is working on Program X but her timesheet shows she is charging to Program Y, that is a potential mismatch. If the mismatch is systemic — if multiple employees are routinely charging time to projects other than what they are working on — DCAA will issue a timekeeping system deficiency finding.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Floor Check That Became a $1.1M Finding',
              text: 'A defense electronics company with three active cost-plus contracts had a project manager who routinely "smoothed" labor charges at month-end — moving hours from over-budget contracts to under-budget contracts to make his program look clean. He had been doing it for two years. DCAA\'s floor check on a Tuesday afternoon found three engineers who described their work as being on Contract A, all charging to Contract B. The auditor cross-referenced six months of timesheets. The finding: 847 hours of falsely allocated labor amounting to $1.1M in questioned costs, a systemic timekeeping deficiency, and a referral to the DoD Inspector General. The project manager\'s intent was to look like a good program manager. The result was a criminal referral. Teach every manager in your company: the timesheet reflects what you worked on, not what you wish you had spent time on.',
            },
            {
              type: 'heading',
              text: 'The Labor Interview',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'In a labor interview audit, DCAA selects employees — often randomly — and interviews them about their understanding of timekeeping requirements. The questions are basic: Do you fill out your own timesheet? Do you know the deadline? Do you know what to do if you work overtime? Do you know what job number to charge if you work on an overhead activity? Employees who cannot answer these questions create a systemic deficiency finding even if their individual timesheets are accurate. The finding is: "Employees are not adequately trained in timekeeping requirements." Preventive measure: quarterly timekeeping training with documented attendance.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'Do not wait for DCAA to test your timekeeping system. Run your own floor check quarterly. Pick a random sample of 20 employees, confirm what project they are working on today, and check their timesheet entry for that day. If you find mischarges in your own test, fix the system before DCAA finds them in theirs. The regulatory cost of a systemic timekeeping deficiency — business system disapproval and 5% payment withholding under DFARS 252.242-7005 — far exceeds the cost of a compliance program.',
            },
          ],
        },
        {
          id: 'incurred-cost-submissions',
          title: 'Incurred Cost Submissions — What Adequate Actually Means',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'The Incurred Cost Submission (ICS) is the annual financial reconciliation required on all flexibly priced contracts (cost-plus, T&M). It must be submitted to DCAA within six months of fiscal year-end. FAR 52.216-7 requires the submission; DCAA\'s Model Incurred Cost Electronically (ICE) submission provides the format. The submission reconciles your billings on all cost-plus contracts against your actual incurred costs, calculates your final indirect rates, and identifies any unallowable costs that must be excluded.',
            },
            {
              type: 'heading',
              text: 'The Adequate vs. Inadequate Determination',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DCAA performs an "adequacy review" of every ICS before accepting it for audit. An adequate submission is one that contains all required schedules, is internally consistent, reconciles to your general ledger, and identifies unallowable costs. An inadequate submission is returned to the contractor with a finding that the submission deadline has been missed — because the original submission deadline clock stops and restarts when the submission is rejected.',
            },
            {
              type: 'table',
              headers: ['Required ICS Schedule', 'Content', 'Common Failure Mode'],
              rows: [
                ['Schedule A', 'Indirect rate calculation — final rates for all pools', 'Rates don\'t reconcile to G/L; pools include unallowable items'],
                ['Schedule B', 'Claimed costs by contract', 'Missing contracts; contract numbers don\'t match PIEE records'],
                ['Schedule C', 'Cumulative claimed costs on contracts with estimated cost or ceiling', 'Missing contracts near ceiling — signals potential overrun hiding'],
                ['Schedule D', 'Subcontract information', 'Subcontractor invoices not reconciled; flowdown costs miscategorized'],
                ['Schedule E', 'Unallowable costs identified and excluded', 'Unallowable costs not broken out; entertainment, fines, interest buried in pools'],
                ['Schedule F', 'Reconciliation to financial statements', 'ICS total revenues don\'t match audited financials — automatic inadequacy'],
                ['Schedule G', 'Comparison of prior year estimated and actual indirect rates', 'Not provided or shows large unexplained variances'],
                ['Schedule H', 'Contract performance on direct labor-only contracts', 'Hours billed vs. hours incurred discrepancy not explained'],
                ['Schedule I', 'Executive compensation', 'Compensation not broken out by executive; benchmarking data not provided'],
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: Five Years of Inadequate Submissions and an Audit Queue 11 Years Long',
              text: 'A defense services company with $30M in annual cost-plus revenue submitted five consecutive inadequate ICS filings — each rejected by DCAA within 30 days for missing schedules and unreconciled totals. The company\'s response each time was to patch the submission and resubmit, usually 60–90 days late. After five years, the company had a DCAA audit queue eleven years long — meaning their oldest unaudited year dated back to when the company was $8M in revenue. When they were acquired by a larger prime contractor, the due diligence process revealed $14M in potential unresolved questioned costs across the unaudited years. The acquisition price was reduced by $9M. The lesson: every inadequate ICS is a deferred liability. Fix the submission process, not the individual submission.',
            },
            {
              type: 'heading',
              text: 'What DCAA Looks for in an Incurred Cost Audit',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Unallowable costs per FAR 31.205 — advertising (commercial), entertainment, fines and penalties, interest, contributions, lobbying costs, bad debts, executive compensation exceeding the annual benchmark cap',
                'Costs not allocable to government contracts — costs benefiting only commercial work charged to government-contract-bearing pools',
                'Labor mischarges — hours on contracts where the employee was not working or where the hours exceed the contract ceiling without authorization',
                'Subcontractor costs without adequate supporting documentation — invoices, delivery records, and technical acceptance',
                'Unresolved prior-year audit findings that have been repeated',
                'Material variances between billing rates used during the year and final rates — large over-billings must be returned; under-billings are an opportunity to collect additional revenue',
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'The ICS is not an accounting department project. It is an executive accountability document. The CEO or CFO should review the draft ICS before submission, specifically confirming that (1) all unallowable costs have been identified and excluded, (2) the submission reconciles to audited financials, and (3) Schedule I — executive compensation — is accurately and completely reported. Errors in executive compensation reporting have a disproportionate tendency to trigger broader audit scrutiny. File on time, file complete, and file right.',
            },
          ],
        },
        {
          id: 'forward-pricing-business-system',
          title: 'Forward Pricing, Business System Approval, and Payment Withholds',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'Forward pricing is the process of establishing the indirect rates — overhead, G&A, fringe — that you will use to price future contracts. DCAA audits your forward pricing rate proposal (FPRP), and the contracting officer negotiates either a Forward Pricing Rate Agreement (FPRA) — binding on all bids for a defined period — or a Forward Pricing Rate Recommendation (FPRR) — advisory. Having agreed-upon rates dramatically accelerates contract negotiation and signals to customers that your accounting system is mature.',
            },
            {
              type: 'heading',
              text: 'How Forward Pricing Rates Are Established',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Your FPRP projects your indirect rates for the coming one to three fiscal years based on your budget and current year actuals. DCAA auditors examine the supporting data: headcount plans, salary escalation assumptions, benefit cost projections, facilities lease terms, and direct labor base projections. The most common finding is that a contractor\'s projected direct labor base is too optimistic — meaning the overhead rate is understated in the proposal and will increase as the year progresses. DCAA\'s rate recommendation will adjust for this with a risk factor or a higher rate.',
            },
            {
              type: 'heading',
              text: 'Business System Approval Under DFARS 252.242-7005',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DFARS 252.242-7005 establishes the six "contractor business systems" that DoD monitors: accounting system, estimating system, purchasing system, earned value management system (EVMS), material management and accounting system (MMAS), and property management system. A business system is either "approved" or "disapproved." Disapproval is not merely a paperwork problem — it triggers a payment withholding mechanism that directly impacts your cash flow.',
            },
            {
              type: 'table',
              headers: ['Business System', 'Key Regulatory Reference', 'What "Disapproval" Means', 'Payment Withhold'],
              rows: [
                ['Accounting System', 'DFARS 252.242-7006', 'Cannot produce adequate cost data for billing and audit', '5% on affected contracts'],
                ['Estimating System', 'DFARS 252.215-7002', 'Bids not systematically supported; inconsistent estimating practices', '5% on affected contracts'],
                ['Purchasing System', 'DFARS 252.244-7001', 'Subcontract awards not adequately competitive or controlled', '5% on affected contracts'],
                ['EVMS', 'DFARS 252.234-7002', 'EVM system does not comply with ANSI/EIA-748', '5% on EVM-required contracts'],
                ['MMAS', 'DFARS 252.242-7004', 'Material costs not reliably tracked to contracts', '5% on affected contracts'],
                ['Property Management', 'DFARS 252.245-7003', 'Government property not adequately tracked and safeguarded', '5% on affected contracts'],
              ],
            },
            {
              type: 'paragraph',
              text: 'If you have multiple significant deficiencies across business systems, the contracting officer can withhold up to 10% across all affected contracts simultaneously. On a $20M annual revenue base, a 10% withhold means $2M in cash locked up until the deficiencies are corrected and the systems are re-approved. This is a genuine liquidity event for small and mid-sized contractors.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Accounting System Disapproval That Nearly Killed a $45M Company',
              text: 'A professional services contractor with $45M in annual cost-plus revenue received an accounting system disapproval after DCAA found that the company\'s newly implemented ERP system could not produce a compliant job cost report — labor charges were summarizing at the contract level rather than the task order level as required by their contract structure. The contracting officer withheld 5% from invoices on all three major contracts immediately. Over four months while the system was being reconfigured and retested, the company absorbed $1.1M in withheld payments. The ERP implementation had been a $380K project managed entirely by the IT department with no DCAA compliance review. A $15K compliance review before go-live would have caught the reporting deficiency. The CFO\'s comment in a post-mortem: "We did not know the ERP had to meet DFARS standards. Now we do."',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'Any change to your accounting system — new ERP, new timekeeping platform, new billing module — requires a pre-implementation review against DFARS 252.242-7006 accounting system adequacy criteria. Engage your DCAA cognizant auditor or a qualified government accounting consultant before go-live. The five-day DCAA system review that finds no issues is the best money you will spend this year. The four-month withhold that follows an inadequate system deployment is the most expensive mistake you will not forget.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q1-dcaa-2',
          type: 'multiple-choice',
          question: 'DCAA conducts an unannounced visit to a contractor\'s facility and interviews employees about what projects they are currently working on, then compares the responses against that day\'s timesheet entries. This is called:',
          options: [
            'An incurred cost audit',
            'A floor check',
            'An estimating system audit',
            'A business system review',
          ],
          correctIndex: 1,
          explanation: 'A floor check is the practice of DCAA auditors physically verifying what employees are working on and confirming that timesheet entries match. Floor checks may be announced or unannounced and are designed to detect timekeeping mischarges at the point of occurrence, not retrospectively. A systemic pattern of mischarges discovered in a floor check can trigger a timekeeping deficiency finding and ultimately accounting system disapproval.',
        },
        {
          id: 'q2-dcaa-2',
          type: 'multiple-choice',
          question: 'An incurred cost submission (ICS) is returned by DCAA as "inadequate" within 30 days of submission. What is the primary consequence?',
          options: [
            'The contractor is automatically charged a late filing penalty equal to 1% of annual cost-plus revenue',
            'The submission deadline clock restarts from the date a corrected, adequate submission is accepted — extending the period before final rate settlement',
            'All active cost-plus contracts are immediately suspended pending resubmission',
            'The contractor must use DCAA\'s model rates for the entire fiscal year',
          ],
          correctIndex: 1,
          explanation: 'When an ICS is returned as inadequate, the original submission is treated as non-compliant, and the deadline clock effectively restarts when an adequate resubmission is accepted. This creates an accumulating backlog of unaudited years and unresolved potential liabilities. DCAA\'s audit queue prioritizes years where adequate submissions have been accepted — inadequate years sit in limbo. Over time, this creates substantial unquantified audit exposure.',
        },
        {
          id: 'q3-dcaa-2',
          type: 'multiple-choice',
          question: 'Under DFARS 252.242-7005, which of the following would trigger a 5% payment withholding on affected contracts?',
          options: [
            'A contractor\'s G&A rate running 2% higher than the forward pricing rate agreement',
            'A business system disapproval — for example, an accounting system disapproval after DCAA finds the system cannot produce compliant job cost reports',
            'An incurred cost audit finding of unallowable entertainment costs totaling $8,000',
            'A contractor\'s failure to file an incurred cost submission on time',
          ],
          correctIndex: 1,
          explanation: 'DFARS 252.242-7005 authorizes contracting officers to withhold 5% from payments on affected contracts when a contractor\'s business system is disapproved. Disapproval follows a finding of one or more significant deficiencies in any of the six covered systems (accounting, estimating, purchasing, EVMS, MMAS, property). An unallowable cost finding or late ICS does not directly trigger the withholding mechanism — it may lead to findings that result in disapproval, but the withhold requires a formal disapproval determination.',
        },
        {
          id: 'q4-dcaa-2',
          type: 'true-false',
          question: 'A Forward Pricing Rate Agreement (FPRA) is an optional tool that helps contractors negotiate contracts faster, but contractors can also use their own projected rates in bids without an FPRA.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. An FPRA is negotiated between the contractor and the cognizant government contracting officer and is binding on all covered contracts for the agreed period. Contractors without an FPRA can still bid using their own projected rates, but each negotiation requires separate rate support and DCAA audit involvement. Having an FPRA significantly accelerates contract negotiations because the rates are pre-agreed and audited — a major competitive advantage for contractors with high bid volumes.',
        },
        {
          id: 'q5-dcaa-2',
          type: 'multiple-choice',
          question: 'During a labor interview audit, an auditor asks five randomly selected engineers to explain what job number they would charge if they were asked to attend a company-wide safety training session. None of the five know the correct answer. What finding is likely?',
          options: [
            'No finding — individual knowledge gaps are not systemic',
            'A systemic timekeeping deficiency finding based on inadequate employee training in timekeeping requirements',
            'A fraud referral to the DoD Inspector General',
            'A requirement to recategorize all prior safety training costs as direct charges',
          ],
          correctIndex: 1,
          explanation: 'Labor interview audits test whether employees understand timekeeping obligations — not whether their individual timesheets are accurate. When multiple employees cannot answer basic questions (such as how to charge indirect training time), DCAA concludes that the contractor\'s timekeeping training program is inadequate and issues a systemic deficiency finding. This finding can contribute to accounting system disapproval if it represents a significant deficiency, particularly when combined with other timekeeping weaknesses.',
        },
        {
          id: 'q6-dcaa-2',
          type: 'multiple-choice',
          question: 'Which of the following costs is expressly unallowable under FAR 31.205 and must be excluded from all indirect cost pools in an incurred cost submission?',
          options: [
            'Costs of employee health insurance premiums',
            'Interest and financing costs on contractor debt',
            'Indirect material costs for facility maintenance',
            'Subcontractor management labor costs',
          ],
          correctIndex: 1,
          explanation: 'FAR 31.205-20 expressly identifies interest and financing costs as unallowable in cost-type government contracts. Other expressly unallowable costs include entertainment, advertising directed at commercial markets, fines and penalties, bad debts, and contributions. These must be separately identified and excluded from every indirect cost pool — not merely documented — because if they appear in a pool, they contaminate the pool rate and result in the government inadvertently reimbursing unallowable items through the indirect rate.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 3 — EVMS and Program Financial Control
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'evms-financial-control',
      number: 3,
      title: 'EVMS and Program Financial Control',
      description:
        'Earned Value Management is the government\'s instrument for seeing inside your programs. As an executive, you don\'t need to build WBS dictionaries — you need to understand what the numbers tell you, when to intervene, and what happens if you wait too long.',
      estimatedMinutes: 72,
      learningObjectives: [
        'Interpret key EVM performance metrics from an executive governance perspective',
        'Understand what DFARS 252.234-7002 requires from a business system standpoint',
        'Describe the executive decisions required when an EAC (Estimate at Completion) exceeds the contract value',
        'Explain the sequence from performance problems to cure notice to termination for default',
      ],
      lessons: [
        {
          id: 'evms-executive-perspective',
          title: 'EVMS from the Executive Perspective — Governance, Not Theory',
          estimatedMinutes: 22,
          content: [
            {
              type: 'paragraph',
              text: 'Most EVMS training is aimed at program control analysts. This lesson is aimed at you — the executive who is accountable for program financial performance but who needs to read the outputs, ask the right questions, and make decisions without getting lost in the mechanics. You need to understand five metrics and what each one tells you about your program.',
            },
            {
              type: 'heading',
              text: 'The Five Metrics That Matter',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Metric', 'What It Measures', 'Formula', 'Executive Interpretation'],
              rows: [
                ['Budgeted Cost of Work Scheduled (BCWS)', 'What you planned to spend on work planned to be done by today', 'Time-phased budget to date', 'This is the plan. Everything else is measured against it.'],
                ['Budgeted Cost of Work Performed (BCWP / Earned Value)', 'The budget value of the work actually completed', 'Earned Value = % complete × Budget', 'How much of the plan have you actually accomplished? Not what you spent — what you earned.'],
                ['Actual Cost of Work Performed (ACWP)', 'What you actually spent to do the work completed', 'Sum of actual costs to date', 'What it actually cost to earn what you earned.'],
                ['Cost Performance Index (CPI)', 'Cost efficiency — how much value are you earning per dollar spent', 'CPI = BCWP ÷ ACWP', 'CPI < 1.0 means cost overrun. A CPI of 0.85 means you are spending $1.18 to earn $1.00 of work.'],
                ['Schedule Performance Index (SPI)', 'Schedule efficiency — how much work accomplished vs. planned', 'SPI = BCWP ÷ BCWS', 'SPI < 1.0 means schedule slip. Both CPI and SPI deteriorating together is a crisis.'],
              ],
            },
            {
              type: 'heading',
              text: 'What DFARS 252.234-7002 Actually Requires',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DFARS 252.234-7002 requires compliance with ANSI/EIA-748 — the 32-guideline standard for EVMS. The requirement applies to cost or incentive contracts where the work scope exceeds $20M (current threshold — verify in applicable DFARS). EVMS is also a business system under DFARS 252.242-7005, meaning an EVMS disapproval triggers the 5% payment withholding mechanism. The 32 guidelines cover five areas: organization (work breakdown structure, OBS), planning and budgeting (PMB integrity, management reserve), accounting (actual costs recorded timely), analysis (variance thresholds, corrective action), and revisions (formal change control).',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The Performance Measurement Baseline (PMB)',
              text: 'The PMB is the time-phased budget against which all performance is measured. It is formally established at contract award and should equal the contract budget base minus management reserve. Changes to the PMB require formal baseline change control — you cannot rephase the budget to make variance reports look better without going through the change process. PMB manipulation is one of the leading causes of EVMS system disapproval.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'As an executive, the single most important question you can ask at a program review is: "What is your current CPI, and what is your EAC?" If the program manager cannot answer both questions immediately from memory, your program control function is not mature. If the CPI is below 0.90 and has been there for two months, the Estimate at Completion (EAC) is almost certainly above contract value — and you have a decision to make before your customer makes it for you.',
            },
          ],
        },
        {
          id: 'eac-management',
          title: 'EAC Management — The Executive Decisions When a Program Goes Sideways',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'The Estimate at Completion (EAC) is the current best estimate of the total cost to complete the contracted scope of work. When the EAC exceeds the contract Estimated Cost (EC), you have an overrun. On a cost-plus contract, the government will ultimately pay the actual costs up to the contract ceiling — but they will not pay above the ceiling without a formal over-target baseline (OTB) or contract modification. How you manage the period between when you know the EAC exceeds the ceiling and when you formally report it defines your relationship with your customer.',
            },
            {
              type: 'heading',
              text: 'The Three EAC Calculation Methods',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'EAC = ACWP + (BAC - BCWP): Assumes future cost performance will be perfect — remaining work comes in exactly at budget. Almost always too optimistic on troubled programs.',
                'EAC = ACWP + (BAC - BCWP) ÷ CPI: Assumes future performance continues at the current CPI — the most statistically reliable formula for mature programs with an established CPI trend.',
                'EAC = Bottom-up re-estimate (BUR): Reestimate every remaining work package from the ground up. Most accurate but most labor-intensive; required when the nature of the remaining work has fundamentally changed.',
              ],
            },
            {
              type: 'paragraph',
              text: 'The "CPI-based EAC" method (method 2 above) is the most statistically reliable predictor of final cost for programs that are more than 20% complete. Research across hundreds of DoD programs has consistently shown that CPI rarely improves significantly after the 20% completion point. If your CPI is 0.82 at 25% complete, your current best EAC is almost certainly above contract value — even if your program manager\'s bottom-up estimate says otherwise.',
            },
            {
              type: 'heading',
              text: 'The Conversation You Must Have Before Your Customer Does',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'When the EAC projects an overrun, the executive decision is whether to proactively brief the contracting officer and program manager, or to wait. This is not a close call. Proactive notification — "We are forecasting an overrun of $X on this contract; here is what caused it and here is our corrective action plan" — is the only rational course. Customers who discover an overrun in the data before the contractor tells them respond with formal adverse action. Customers who receive a proactive briefing with a credible recovery plan respond — in most cases — with a problem-solving conversation.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Program That Got a Cure Notice Because Nobody Wanted to Call the Customer',
              text: 'A defense systems integration company had a $28M cost-plus-incentive-fee development contract that entered a technical performance crisis at the 35% completion point. The CPI dropped to 0.79 over two consecutive monthly reporting periods. The program manager updated the EAC but buried it in the variance analysis report with an optimistic narrative about corrective actions. The contracting officer\'s program analyst caught the trend, ran the CPI-based EAC calculation, and independently determined that the program was projecting a $6.1M overrun — approximately 22% above the contract estimated cost. The government issued a cure notice (FAR 49.607) citing "failure to prosecute the work with the diligence to ensure completion within the performance period." The contractor had thirty days to cure or face termination for default. The cure notice triggered a performance review board, a required corrective action plan, and eight months of intensive government oversight that consumed senior management time worth an estimated $400K in unallowable overhead. The original overrun conversation that nobody wanted to have would have taken forty-five minutes.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'Establish a standing executive reporting threshold: any program with a CPI below 0.90 for two consecutive months is automatically an executive agenda item — not a program manager problem. The executive reviews the CPI-based EAC personally, makes the call on whether to brief the customer proactively, and owns the corrective action approval. This is not micromanagement. This is risk management. The cure notice and show cause processes exist precisely because contractors waited too long.',
            },
          ],
        },
        {
          id: 'program-recovery-termination',
          title: 'When Programs Fail — Cure Notice, Show Cause, and the Termination Decision',
          estimatedMinutes: 24,
          content: [
            {
              type: 'paragraph',
              text: 'The government\'s contractual response to a program in serious trouble follows a sequence defined in FAR Parts 49 and 52. Understanding this sequence is not academic — it is the difference between recovering a troubled program and losing it, and potentially being held liable for the government\'s excess reprocurement costs.',
            },
            {
              type: 'heading',
              text: 'The Adverse Action Sequence',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Cure Notice (FAR 49.607 / FAR 52.249-8): Issued when the contractor\'s performance is endangering contract performance. Typically allows 10 days for the contractor to cure the condition (or, for complex programs, a negotiated period). Does not presuppose termination — it is a formal warning.',
                'Show Cause Notice (FAR 49.607): Issued when cure is not possible in the remaining time or when the government is preparing for termination for default. Requires the contractor to show cause why the contract should not be terminated. The contractor must present any defenses — excusable delay (government-caused delay, force majeure), government-furnished equipment delays, changed requirements.',
                'Termination for Default (T4D) (FAR 52.249-8): The government terminates the contract, no further payments are made for completed deliverables that do not meet requirements, and the government may assess reprocurement excess costs against the contractor. A T4D is the worst contractual outcome — it becomes part of the contractor\'s record in PPIRS/FAPIIS and affects future source selections.',
                'Termination for Convenience (T4C) (FAR 52.249-2): The government terminates for its own convenience — no fault finding, contractor is compensated for reasonable costs incurred plus a fee on work performed. Sometimes a negotiated T4C is a better outcome than fighting a T4D.',
              ],
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Cure Notice', definition: 'A written notice from the contracting officer that a contractor\'s failure to make progress or failure to perform is endangering performance of the contract, giving the contractor an opportunity to cure.' },
                { term: 'Show Cause Notice', definition: 'A written demand from the contracting officer requiring the contractor to show why the contract should not be terminated for default; triggers the contractor\'s obligation to present all available defenses.' },
                { term: 'Termination for Default (T4D)', definition: 'Government termination of a contract due to contractor failure to perform. The contractor receives no fee, may lose costs incurred on unaccepted work, and may be liable for excess reprocurement costs. Appears in PPIRS/FAPIIS.' },
                { term: 'Termination for Convenience (T4C)', definition: 'Government termination at the government\'s election without fault finding. The contractor is entitled to allowable costs incurred plus reasonable profit on work performed.' },
                { term: 'Excusable Delay', definition: 'A delay in contract performance caused by circumstances beyond the contractor\'s control and without the contractor\'s fault or negligence, such as acts of God, government-caused delays, or labor disputes.' },
                { term: 'PPIRS/FAPIIS', definition: 'Past Performance Information Retrieval System / Federal Awardee Performance and Integrity Information System — the databases that record contractor performance history, terminations for default, and integrity information used in future source selections.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you receive a cure notice, your first call is to government contracts counsel — not to your program manager. The response to a cure notice is a legal document with specific performance commitments attached to it. Get counsel involved before you respond. If you can negotiate a T4C where you would otherwise face a T4D, that negotiation is almost always worth pursuing — the reputational cost of a T4D in future source selections far exceeds the legal cost of negotiating a T4C settlement.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q1-evms-3',
          type: 'multiple-choice',
          question: 'A program is 30% complete. The BCWP is $4.5M, the ACWP is $5.5M, and the Budget at Completion (BAC) is $15M. What is the CPI-based Estimate at Completion (EAC)?',
          options: [
            '$15.0M — the program is on budget',
            '$16.0M — $5.5M actual + $10.5M remaining at budget',
            '$18.3M — $5.5M actual + ($15M - $4.5M) ÷ 0.818 CPI',
            '$19.5M — $5.5M × (1 ÷ 30% complete)',
          ],
          correctIndex: 2,
          explanation: 'CPI = BCWP ÷ ACWP = $4.5M ÷ $5.5M = 0.818. CPI-based EAC = ACWP + (BAC - BCWP) ÷ CPI = $5.5M + ($15M - $4.5M) ÷ 0.818 = $5.5M + $10.5M ÷ 0.818 = $5.5M + $12.8M ≈ $18.3M. This projects an overrun of approximately $3.3M on a $15M contract. With the program at 30% complete, the CPI trend is now highly reliable — statistically, CPI rarely improves significantly after 20% complete.',
        },
        {
          id: 'q2-evms-3',
          type: 'multiple-choice',
          question: 'Under ANSI/EIA-748 (the EVMS standard referenced in DFARS 252.234-7002), what is the Performance Measurement Baseline (PMB)?',
          options: [
            'The original contract price before any modifications',
            'The time-phased budget plan against which cost and schedule performance is measured, equal to the Contract Budget Base minus Management Reserve',
            'The sum of all earned value metrics at program completion',
            'The government\'s independent estimate of the cost to complete remaining work',
          ],
          correctIndex: 1,
          explanation: 'The PMB is the time-phased budget plan — the authorized budget distributed across the work breakdown structure and phased over time — against which EVM performance (BCWP vs. BCWS and ACWP) is measured. It equals the Contract Budget Base (total authorized budget) minus Management Reserve (held for known-unknown risks). Changes to the PMB require formal baseline change control, and unauthorized rephasing of the PMB to hide variance is a leading cause of EVMS disapproval.',
        },
        {
          id: 'q3-evms-3',
          type: 'true-false',
          question: 'After receiving a cure notice under FAR 49.607, a contractor must immediately respond and begin remediation steps before consulting with legal counsel to avoid appearing uncooperative.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. A cure notice is a legal document with potential contractual consequences including termination for default. The contractor\'s response constitutes performance commitments. Consulting government contracts counsel before responding is essential — the response must assert any defenses (excusable delay, government-caused delays, changed requirements), avoid admissions that could be used in subsequent default proceedings, and include only realistic recovery commitments the contractor can keep.',
        },
        {
          id: 'q4-evms-3',
          type: 'multiple-choice',
          question: 'An executive is reviewing a program manager\'s EAC update. The program is 45% complete with a CPI of 0.80 for the past three months. The program manager\'s "bottom-up re-estimate" EAC shows only a 5% overrun against contract value. The CPI-based EAC projects a 22% overrun. Which EAC should the executive use for decision-making?',
          options: [
            'The program manager\'s bottom-up EAC, because it is based on more detailed knowledge of the specific work remaining',
            'The CPI-based EAC, because statistical research shows the CPI rarely improves significantly after 20% complete, making it the more reliable predictor',
            'An average of the two, to balance optimism and conservatism',
            'Neither — the executive should request a new independent estimate from DCAA',
          ],
          correctIndex: 1,
          explanation: 'Research across DoD programs consistently shows that after 20% completion, the CPI-based EAC is statistically more reliable than bottom-up re-estimates, which tend to be optimistic because program managers naturally believe their recovery plans will work. A 14-percentage-point gap between the two EAC methods at 45% complete is a significant red flag. The executive should use the CPI-based EAC for risk management and reserve decisions while requiring the program manager to validate or revise the bottom-up estimate.',
        },
        {
          id: 'q5-evms-3',
          type: 'multiple-choice',
          question: 'What is the practical distinction between a Termination for Default (T4D) and a Termination for Convenience (T4C) from a contractor\'s perspective?',
          options: [
            'There is no practical distinction — both result in the same cost recovery for the contractor',
            'A T4D creates a past performance record in FAPIIS and may expose the contractor to excess reprocurement costs; a T4C provides cost recovery and fee without adverse past performance reporting',
            'A T4D only applies to cost-plus contracts; a T4C only applies to fixed-price contracts',
            'A T4C is more severe because the contractor receives no fee; a T4D allows the contractor to retain any fee earned on completed work',
          ],
          correctIndex: 1,
          explanation: 'A T4D is contractually adverse to the contractor: it is recorded in PPIRS/FAPIIS and can affect future source selections, the contractor receives no fee and may lose costs on unaccepted work, and the government can assess excess reprocurement costs. A T4C is at the government\'s election without fault — the contractor receives allowable costs incurred plus reasonable profit on work performed. When a program is in trouble and T4D proceedings begin, negotiating a T4C settlement is often the better business decision even if the contractor believes it has defenses.',
        },
        {
          id: 'q6-evms-3',
          type: 'multiple-choice',
          question: 'Under DFARS 252.242-7005, an EVMS business system disapproval results in what financial consequence?',
          options: [
            'Suspension of all contract payments until the EVMS is approved',
            'A 5% payment withholding on all EVM-required contracts',
            'A contract price reduction equal to the projected overrun',
            'Cancellation of all future contract options',
          ],
          correctIndex: 1,
          explanation: 'Under DFARS 252.242-7005, a business system disapproval — including EVMS disapproval — authorizes the contracting officer to withhold 5% from payments on contracts subject to that business system requirement. The withhold accumulates until the significant deficiencies are corrected and the system is re-approved. On large programs, even a temporary 5% withhold creates significant cash flow pressure.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 4 — Facility Security Clearances and CMMC
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fsc-cmmc',
      number: 4,
      title: 'Facility Security Clearances and CMMC',
      description:
        'The security requirements to win and hold defense contracts have become significantly more demanding. A Facility Clearance requires organizational infrastructure you may not have. CMMC Level 2 certification requires a third-party assessment that will expose every gap in your cybersecurity posture. Understand the real costs before you bid.',
      estimatedMinutes: 78,
      learningObjectives: [
        'Describe the Facility Clearance (FCL) requirements and the FSO\'s organizational role',
        'Explain the three CMMC 2.0 levels and which one applies to your contracts',
        'Estimate the realistic cost of CMMC Level 2 certification including remediation',
        'Understand the contract pipeline consequences of not achieving required CMMC certification',
      ],
      lessons: [
        {
          id: 'fso-facility-clearance',
          title: 'The FSO Role and What a Facility Clearance Actually Requires',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'A Facility Security Clearance (FCL) is the government\'s determination that a contractor\'s facility and its personnel security program are adequate to safeguard classified information at the level cleared. The FCL is required to access, store, or generate classified information in support of a classified contract. It is granted by the Defense Counterintelligence and Security Agency (DCSA) — not the contracting officer, and not the customer program office.',
            },
            {
              type: 'heading',
              text: 'The Facility Security Officer (FSO)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The FSO is the designated official responsible for the contractor\'s security program under 32 CFR Part 117 (the NISPOM). The FSO must be a U.S. citizen, must hold a personnel security clearance at least equivalent to the facility\'s clearance level, must complete FSO training (CDSE — Center for Development of Security Excellence), and must be in a senior enough organizational position to implement security policy. For a small company, the FSO is often a senior operations leader or the COO. The critical point: this is not a part-time administrative function. A cleared facility\'s security program generates ongoing compliance obligations that require real time from a qualified, trained individual.',
            },
            {
              type: 'heading',
              text: 'What the Facility Clearance Requires',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Requirement Area', 'What It Requires', 'Common Gaps'],
              rows: [
                ['Physical Security', 'Closed area, open storage, or secure room per NISPOM standards; access control; alarms; visitor control', 'Inadequate door hardware; alarm systems not meeting UL-approved standards; insufficient visitor log procedures'],
                ['Personnel Security', 'Cleared employees with active personnel security clearances (PSCs); need-to-know determinations; foreign national employee handling', 'Clearance lapses; employees with access beyond their granted level; unreported foreign contacts'],
                ['Document Control', 'Classified document inventory, receipting system, transmission procedures, destruction certification', 'No accountability for classified documents checked out; improper destruction (shredding vs. required methods for Top Secret)'],
                ['Information Systems Security', 'Classified processing on accredited systems only; ISSO designated; system security plans; configuration management', 'Classified processing on unaccredited systems; no dedicated ISSO; no documented configuration baseline'],
                ['Insider Threat Program', 'Mandatory insider threat program per 32 CFR Part 117.16; training; reporting mechanisms; self-reporting procedures', 'No formal insider threat program or policy; training not documented; no reporting hotline'],
                ['Security Education & Training', 'Annual security refresher training; initial briefings; debriefings at separation', 'Training not documented; employees unable to describe reporting obligations'],
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Start-Up That Lost Its FCL 18 Months After Getting It',
              text: 'A 40-person defense technology start-up obtained a Secret-level FCL to support a DARPA contract. The FSO designation went to the VP of Operations — a smart, capable leader who had no security background and received no formal FSO training. Eighteen months later, DCSA conducted a compliance inspection and found: classified documents signed out to three employees who had left the company without being debriefed, a closed area whose alarm system had been deactivated during a renovation and never restored, and no insider threat program documentation. DCSA issued a Notice of Intent to Revoke. The company retained a security consultant, spent $95,000 on remediation and documentation over six months, and avoided revocation — but the DARPA contract had a classified deliverable they could not complete during the remediation period, causing a six-month schedule slip and a program assessment of "marginal" that affected their option exercise. The FSO was not negligent — he was uninformed. Assign trained, experienced FSOs.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'Before bidding on a classified contract that requires an FCL you do not currently hold, request a Sponsorship letter from the government customer and begin the DCSA process — but also budget 12 to 24 months for the FCL to be granted for a new facility. Classify this as a startup cost on the bid. The realistic budget for establishing a compliant classified facility (physical modifications, security systems, document storage, personnel clearance processing, FSO training) ranges from $75K to $250K depending on the classification level and physical space involved.',
            },
          ],
        },
        {
          id: 'cmmc-levels',
          title: 'CMMC 2.0 — What the Three Levels Mean and Which One You Need',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'The Cybersecurity Maturity Model Certification (CMMC) program was established to verify that defense contractors are actually implementing the cybersecurity practices required by DFARS 252.204-7012 (the CUI safeguarding rule) and NIST SP 800-171. CMMC 2.0, published in the December 2021 rulemaking cycle, replaced the original five-level model with three levels. Note: CMMC rulemaking continues to evolve — verify current implementation requirements and contract clause insertion timelines against the latest DFARS rules before committing to a certification timeline.',
            },
            {
              type: 'heading',
              text: 'The Three CMMC 2.0 Levels',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Level', 'Name', 'Applicable To', 'Requirements', 'Assessment Type'],
              rows: [
                ['Level 1', 'Foundational', 'Contracts involving Federal Contract Information (FCI)', '17 basic safeguarding practices from FAR 52.204-21', 'Annual self-assessment'],
                ['Level 2', 'Advanced', 'Contracts involving Controlled Unclassified Information (CUI)', '110 practices aligned with NIST SP 800-171 Rev 2', 'Annual self-assessment (non-prioritized) OR triennial third-party assessment by C3PAO (prioritized programs)'],
                ['Level 3', 'Expert', 'Contracts involving CUI on highest-priority programs (critical programs / advanced persistent threat concern)', '110+ NIST 800-171 practices plus selected NIST SP 800-172 practices', 'Triennial government-led assessment by DCSA'],
              ],
            },
            {
              type: 'paragraph',
              text: 'The vast majority of defense contractors handling CUI will need Level 2. Level 3 applies to a relatively small subset of the most sensitive programs. The practical question for most companies is whether their Level 2 requirement triggers a self-assessment (allowed for non-prioritized contracts) or a third-party assessment by a C3PAO (Certified Third-Party Assessor Organization) — required for prioritized acquisition programs. As CMMC continues to be implemented in contract clauses, your contracts will specify which applies.',
            },
            {
              type: 'heading',
              text: 'The 110 NIST SP 800-171 Practices — What They Cover',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Domain', 'Practice Count', 'What It Covers'],
              rows: [
                ['Access Control (AC)', '22', 'Who can access what systems and data; least privilege; remote access controls'],
                ['Awareness & Training (AT)', '3', 'Security awareness training; role-based training for privileged users'],
                ['Audit & Accountability (AU)', '9', 'Audit log generation, protection, review, and retention'],
                ['Configuration Management (CM)', '9', 'Baseline configurations; change control; least functionality principle'],
                ['Identification & Authentication (IA)', '11', 'Multi-factor authentication; password complexity; identity management'],
                ['Incident Response (IR)', '3', 'Incident response capability; incident reporting to DoD'],
                ['Maintenance (MA)', '6', 'Controlled maintenance; media sanitization before maintenance access'],
                ['Media Protection (MP)', '9', 'Protection, sanitization, and disposal of media containing CUI'],
                ['Personnel Security (PS)', '2', 'Screening of individuals with CUI access; termination procedures'],
                ['Physical Protection (PE)', '6', 'Physical access controls to systems processing CUI'],
                ['Risk Assessment (RA)', '3', 'Risk assessments; vulnerability scanning'],
                ['Security Assessment (CA)', '4', 'Plan of action and milestones (POA&M); system security plan (SSP)'],
                ['System & Communications Protection (SC)', '16', 'Network architecture; boundary protection; encrypted transmission of CUI'],
                ['System & Information Integrity (SI)', '7', 'Malicious code protection; security alerts; software and firmware integrity'],
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The $2.8M CMMC Level 2 Remediation That Nobody Budgeted For',
              text: 'A defense hardware manufacturer with $60M in annual revenue submitted a self-assessment SPRS score of 87 (out of 110) and believed they were largely compliant with NIST 800-171. When they were selected for a prioritized contract requiring a C3PAO-conducted assessment, the assessor found 34 practices either partially implemented or not implemented — including multi-factor authentication across all CUI systems (a CMMC-critical practice), network segmentation between CUI and non-CUI systems, and a System Security Plan that had not been updated in three years and described systems that no longer existed. Remediation required: network segmentation project ($420K), MFA deployment across 280 endpoints ($95K), new SSP and POA&M documentation ($65K), endpoint detection and response platform ($110K annually), and managed security service provider engagement ($240K annually for ongoing monitoring). Total first-year cost: $930K. Total three-year cost including ongoing compliance: $2.8M. They had not bid a contract with this cost in mind. The CFO described it as "the overhead cost increase we didn\'t see coming."',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'If you are handling CUI on any contract — and most sensitive defense work involves CUI — you need to know your current SPRS score, have a current System Security Plan (SSP), and have an active Plan of Action and Milestones (POA&M) for every gap. The SPRS score is self-reported but can be audited by DCAA, and misrepresenting your score is a False Claims Act exposure. Do a gap assessment against NIST 800-171 Rev 2 today. Engage a qualified C3PAO for a pre-assessment review before the formal assessment. The cost of finding gaps yourself is always lower than the cost of a failed assessment.',
            },
          ],
        },
        {
          id: 'cmmc-pipeline-impact',
          title: 'What Happens to Your Pipeline Without CMMC — The Business Consequences',
          estimatedMinutes: 24,
          content: [
            {
              type: 'paragraph',
              text: 'CMMC requirements are being incorporated into defense contracts through DFARS clause insertions. Once the applicable DFARS rules are fully implemented across the contract base, handling CUI on a contract without the required CMMC certification level will be a contract performance failure — not merely a compliance gap. The pipeline consequences of missing certification are direct and severe.',
            },
            {
              type: 'heading',
              text: 'Pipeline Consequences of Missing CMMC Certification',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'New contract ineligibility: Solicitations for contracts involving CUI will require a valid CMMC certification at the required level as an offeror eligibility requirement. Without it, you cannot bid.',
                'Option non-exercise: Existing contracts with CMMC clauses inserted at option exercise will require the contractor to be certified before the option period begins. Missing certification means the option is not exercised — and the government recompetes.',
                'Flow-down to subcontractors: If you are a prime and you require subcontractors to handle CUI, you are required to flow down the appropriate CMMC requirement. A subcontractor without certification exposes your prime contract performance.',
                'False Claims Act exposure: Submitting a false SPRS self-assessment score, or representing to the government that you are CMMC compliant when you are not, creates False Claims Act liability. Recent DoJ enforcement actions have included settlement demands in the millions of dollars.',
              ],
            },
            {
              type: 'heading',
              text: 'The C3PAO Assessment — What It Actually Involves',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A Level 2 C3PAO assessment is a formal third-party evaluation of your implementation of all 110 NIST 800-171 Rev 2 practices. The assessment team will review your System Security Plan (SSP), interview personnel across multiple functional areas, examine technical controls (network diagrams, access control lists, audit log configurations), and conduct independent testing of selected practices. Assessment duration for a mid-size contractor typically runs 2–4 weeks. Assessment cost from a C3PAO typically ranges from $30K to $150K depending on company size, system complexity, and number of sites.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The SPRS Score and What It Means',
              text: 'The Supplier Performance Risk System (SPRS) score is the numerical value a contractor self-reports based on their NIST 800-171 assessment. A perfect score is 110. Each unimplemented practice has a weighted negative value. DCAA can audit self-reported SPRS scores. DoD uses SPRS scores as one factor in evaluating contractor risk in source selections. A low score does not disqualify you from all contracts today, but it signals risk to program offices and will become increasingly determinative as CMMC implementation matures.',
            },
            {
              type: 'table',
              headers: ['Company Scenario', 'Current Status', 'Pipeline Impact', 'Recommended Action'],
              rows: [
                ['Company handling only FCI, no CUI', 'CMMC Level 1 self-assessment sufficient', 'Minimal pipeline risk currently', 'Complete and document Level 1 self-assessment; update SPRS'],
                ['Company handling CUI, non-prioritized contracts', 'Level 2 self-assessment currently; triennial C3PAO may be required', 'Growing pipeline risk as CMMC clause insertion expands', 'Complete NIST 800-171 gap assessment; prepare for C3PAO within 12 months'],
                ['Company bidding on prioritized acquisition programs', 'Level 2 C3PAO assessment required', 'Cannot be awarded prioritized contracts without certification', 'Engage C3PAO for assessment; plan 6–18 months for remediation and assessment'],
                ['Company with classified contracts + CUI', 'Level 2 or 3 depending on program classification', 'Highest exposure — overlapping FCL and CMMC requirements', 'ISSO and FSO coordination required; government assessment for Level 3'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: 'Model the revenue at risk if you are not CMMC Level 2 certified within the next 18 months. Identify every contract and opportunity in your pipeline that involves CUI. Estimate the certification and remediation cost. Compare that cost against the contract revenue at risk. In almost every case, the business case for certification is overwhelming. The companies that will be caught flat-footed are those that assume they have more time. The CMMC timeline has slipped repeatedly — but it has never been cancelled. Build certification into your overhead budget now, not as a crisis response when a contract clause appears.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q1-fsc-4',
          type: 'multiple-choice',
          question: 'Which federal agency is responsible for granting and revoking Facility Security Clearances (FCLs) to defense contractors?',
          options: [
            'DCAA — Defense Contract Audit Agency',
            'DCSA — Defense Counterintelligence and Security Agency',
            'DISA — Defense Information Systems Agency',
            'DSS — Defense Security Service (now renamed)',
          ],
          correctIndex: 1,
          explanation: 'The Defense Counterintelligence and Security Agency (DCSA) is responsible for administering the National Industrial Security Program (NISP), granting Facility Security Clearances, conducting security compliance inspections, and revoking FCLs for non-compliance. DCSA was formerly known as the Defense Security Service (DSS). The FCL is not granted by contracting officers or program offices — it is a separate organizational determination made by DCSA based on compliance with the NISPOM (32 CFR Part 117).',
        },
        {
          id: 'q2-fsc-4',
          type: 'multiple-choice',
          question: 'CMMC 2.0 Level 2 is required for contractors handling what type of information?',
          options: [
            'Classified information at the Secret level',
            'Controlled Unclassified Information (CUI)',
            'Federal Contract Information (FCI) only',
            'Any information on contracts over $10M',
          ],
          correctIndex: 1,
          explanation: 'CMMC Level 2 applies to contractors handling Controlled Unclassified Information (CUI) — the category of sensitive but unclassified information that DoD designates under Executive Order 13556. CUI is distinct from classified information (which is governed by the FCL program). Federal Contract Information (FCI) — information provided by the government under a contract not intended for public release — is governed by CMMC Level 1. CUI requires Level 2; the most sensitive CUI on highest-priority programs may require Level 3.',
        },
        {
          id: 'q3-fsc-4',
          type: 'multiple-choice',
          question: 'A defense contractor\'s CMMC Level 2 third-party assessment reveals 12 practices not implemented, including multi-factor authentication (MFA) for all users accessing CUI systems. What is the assessment outcome?',
          options: [
            'A conditional certification valid for 12 months pending remediation of all findings',
            'A failed assessment — the contractor does not receive Level 2 certification until all practices are implemented and the assessment is passed',
            'A partial certification allowing contracts that do not require MFA specifically',
            'An automatic waiver if the contractor has a signed POA&M committing to remediation within 180 days',
          ],
          correctIndex: 1,
          explanation: 'CMMC assessments do not grant conditional certifications for partial compliance. All 110 Level 2 practices must be fully implemented and verified for a contractor to receive a CMMC Level 2 certification. If critical practices like MFA are not implemented, the assessment fails and the contractor must remediate and undergo a re-assessment. POA&Ms may be permitted for a limited number of practices in certain circumstances under the CMMC rules, but practices designated as "CMMC critical" — including MFA — typically do not qualify for POA&M deferral.',
        },
        {
          id: 'q4-fsc-4',
          type: 'true-false',
          question: 'A contractor who submits a falsely inflated SPRS self-assessment score — representing greater NIST 800-171 compliance than actually exists — may face liability under the False Claims Act.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. The Department of Justice has brought False Claims Act (31 U.S.C. 3729) enforcement actions against contractors who submitted materially false SPRS scores while receiving DoD contract payments. The theory: a contractor certifying compliance with cybersecurity requirements as a condition of contract performance, when the contractor knows it is not actually compliant, submits a false claim for each payment received. Several settlements in the millions of dollars have been reached. The SPRS self-assessment is a legal certification, not an informal estimate.',
        },
        {
          id: 'q5-fsc-4',
          type: 'multiple-choice',
          question: 'What is the primary document an Facility Security Officer (FSO) must maintain that describes the contractor\'s security procedures and compliance with the NISPOM?',
          options: [
            'The System Security Plan (SSP)',
            'The Security Operations Manual, sometimes called the Standard Practice and Procedures (SPP)',
            'The DCSA Compliance Inspection Report',
            'The Personnel Security Clearance Log',
          ],
          correctIndex: 1,
          explanation: 'Under the NISPOM (32 CFR Part 117), contractors must maintain a written security procedures document — commonly called the Standard Practice and Procedures (SPP) or Security Operating Procedures — that describes how the facility implements the NISPOM requirements including physical security, personnel security, document control, information systems security, and the insider threat program. DCSA inspectors review this document during compliance inspections as evidence that security procedures are formalized and followed.',
        },
        {
          id: 'q6-fsc-4',
          type: 'multiple-choice',
          question: 'A defense contractor is a subcontractor to a prime on a contract requiring CMMC Level 2 certification. The prime has achieved Level 2. Which statement is correct?',
          options: [
            'The subcontractor is covered by the prime\'s certification and does not need its own certification',
            'The prime must flow down the CMMC Level 2 requirement to any subcontractor that handles CUI — each company must independently achieve certification',
            'The subcontractor only needs Level 1 certification since it is not the prime',
            'CMMC requirements do not apply to subcontractors at any tier',
          ],
          correctIndex: 1,
          explanation: 'CMMC requirements flow down through the supply chain. A prime contractor is required to flow down the appropriate CMMC certification requirement to any subcontractor that will handle CUI in performance of the contract. Each company that handles CUI must independently achieve and maintain the required CMMC certification level — the prime\'s certification does not cover subcontractors. Primes that fail to verify their subcontractors\' CMMC status may themselves be in contract performance default.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 5 — Simulation & Capstone
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'capstone-simulation',
      number: 5,
      title: 'Simulation & Capstone — Audit Readiness in Practice',
      description:
        'Apply everything from this course in an integrated simulation of a DCAA audit readiness review, CAS compliance assessment, and CMMC gap analysis for a fictional defense contractor facing real-world pressure across all three domains simultaneously.',
      estimatedMinutes: 90,
      learningObjectives: [
        'Apply CAS, DCAA, EVMS, and CMMC knowledge in an integrated scenario',
        'Prioritize executive decisions under time and resource constraints',
        'Communicate audit and compliance risk in language appropriate for a board or investor audience',
        'Identify which compliance gaps pose the greatest near-term contract or cash flow risk',
      ],
      lessons: [
        {
          id: 'capstone-intro',
          title: 'Capstone Overview — Meet Vector Defense Systems',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph',
              text: 'Vector Defense Systems is a fictional 120-person defense contractor with $55M in annual revenue. They crossed the full CAS coverage threshold 14 months ago. They have two active cost-plus contracts, one CPIF program with EVM requirements, an FCL at the Secret level that is 18 months old, and a self-reported SPRS score of 72. They are bidding on a $40M IDIQ that requires CMMC Level 2 C3PAO certification.',
            },
            {
              type: 'heading',
              text: 'The Situation',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Vector\'s CFO resigned unexpectedly 60 days ago. The acting CFO is the Controller, who has been with the company for two years. Three things have landed on the CEO\'s desk simultaneously: (1) DCAA has notified the company that their FY-2024 incurred cost submission has been found inadequate and returned — this is the second consecutive inadequate submission; (2) the CPIF program\'s CPI has declined to 0.81 over the past two months, and the current EAC projects a $3.2M overrun against a $14M contract; (3) the IDIQ proposal is due in six weeks and the proposal team is asking whether the CEO can certify to a CMMC Level 2 C3PAO assessment score that does not yet exist. Use the simulation to work through the decisions the CEO and acting CFO must make in the next 72 hours.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'How the Simulation Works',
              text: 'The simulation presents decision points in sequence. At each point you choose an executive action from a set of options. Your choices have cascading consequences — a good decision in hour one makes decisions in hour forty-eight easier; a bad decision creates compounding problems. The simulation tracks three metrics: Regulatory Risk Index (how much audit and compliance exposure you are accumulating), Cash Flow Risk Index (the dollar value of potential withholds and penalties), and Customer Relationship Index (how the government views your responsiveness and credibility). You will receive a performance summary and debrief at the end.',
            },
            {
              type: 'simulation',
              simulationId: 'defense-audit-readiness',
              title: 'Vector Defense Systems: Audit Readiness Crisis',
              description: 'Manage a simultaneous DCAA ICS inadequacy finding, CPIF program overrun, and CMMC certification gap as the CEO of Vector Defense Systems. Navigate the 72-hour decision window across regulatory compliance, program management, and business development to minimize risk and preserve the company\'s contract pipeline.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'The Vector scenario is constructed from patterns that appear repeatedly in actual defense contractor crises: a finance leadership gap at the worst possible time, multiple simultaneous compliance issues, and a high-value bid that requires capabilities the company has not yet built. The lesson is not that these crises are unmanageable — they are. The lesson is that they are entirely avoidable with appropriate governance, regular self-assessment, and executive ownership of compliance rather than delegation to functional staff.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q1-cap-5',
          type: 'multiple-choice',
          question: 'Vector Defense Systems has received its second consecutive inadequate incurred cost submission finding. As CEO, what is the highest-priority first action?',
          options: [
            'File the submission a third time with the same data but a cover memo explaining the Controller\'s inexperience',
            'Engage an external CAS/DCAA consultant to conduct a root-cause analysis of why the submission was inadequate and lead the corrected resubmission — while simultaneously assessing whether there are systemic accounting system issues underlying the ICS failures',
            'Escalate to the contracting officer to request an extension of the ICS deadline',
            'Replace the acting CFO immediately before addressing the ICS issue',
          ],
          correctIndex: 1,
          explanation: 'Two consecutive inadequate ICS findings signal a systemic problem in the accounting and cost reporting function — not just an error in a single submission. The priority is root-cause analysis and expert remediation, not a resubmission of defective data with a cover explanation. An external consultant with CAS and DCAA experience can both fix the immediate submission and assess whether accounting system deficiencies (DFARS 252.242-7006) are the underlying cause. Personnel decisions (replacing the acting CFO) are secondary to stopping the bleeding on the regulatory finding.',
        },
        {
          id: 'q2-cap-5',
          type: 'multiple-choice',
          question: 'The CPIF program shows a CPI of 0.81 for the past two months. The program manager insists that a recovery plan will restore CPI above 0.90 by next quarter. The CPI-based EAC projects a $3.2M overrun on the $14M contract. What executive action is required?',
          options: [
            'Wait one more month to confirm whether the CPI improves before briefing the customer',
            'Brief the contracting officer and government program manager proactively within the next week: disclose the projected overrun, present the corrective action plan, and get ahead of the customer\'s independent analysis',
            'Issue an internal stop-work on all program costs until the CPI recovers',
            'Submit a contract modification request for additional funding before briefing the customer on the overrun',
          ],
          correctIndex: 1,
          explanation: 'At 0.81 CPI with two months of sustained trend, the CPI-based EAC is more reliable than a recovery plan projection — research consistently shows CPI rarely improves significantly after 20% complete. Waiting gives the government time to independently calculate the same overrun and respond with a cure notice rather than a problem-solving conversation. The executive must proactively brief the customer — this is always the better outcome. The recovery plan should be presented as part of the briefing, not as a reason to delay it.',
        },
        {
          id: 'q3-cap-5',
          type: 'multiple-choice',
          question: 'The proposal team asks the CEO to certify to a CMMC Level 2 C3PAO certification in the IDIQ bid, noting that Vector\'s SPRS self-assessment score is 72. The bid is due in six weeks. What is the correct response?',
          options: [
            'Certify the Level 2 C3PAO assessment based on the SPRS score — the self-assessment is the company\'s best current representation of compliance',
            'Decline to bid on this particular IDIQ since CMMC Level 2 certification cannot be obtained in six weeks; pursue the next qualification window',
            'Submit the bid with a disclosure of the current SPRS score and a remediation timeline as a matter of transparency, but do not certify to a certification you do not hold',
            'Request a CMMC waiver from the contracting officer based on the company\'s incumbent contract status',
          ],
          correctIndex: 2,
          explanation: 'A contractor cannot certify to a C3PAO assessment they have not undergone — doing so is a False Claims Act exposure. However, declining to bid entirely and submitting truthfully are different options. The appropriate action is (c): submit the bid with accurate disclosure of the current SPRS score and compliance status. Some solicitations accept a commitment to achieve certification before contract performance begins; this must be verified in the RFP requirements. Certifying to a nonexistent C3PAO assessment is a legal violation, not a business judgment.',
        },
        {
          id: 'q4-cap-5',
          type: 'multiple-choice',
          question: 'Vector\'s FCL is 18 months old. DCSA has not conducted an initial compliance inspection yet. The company has grown from 40 to 120 employees since the FCL was granted. Which of the following is the most important security compliance action to take proactively?',
          options: [
            'Wait for the DCSA inspection and address any findings at that time — the FCL is valid until revoked',
            'Conduct a self-audit against the NISPOM (32 CFR Part 117) requirements: verify that all cleared employees have been appropriately briefed, the closed area security systems are operational and compliant, the insider threat program is documented, and classified document accountability is current',
            'Hire a second FSO since the company has grown beyond 100 employees',
            'Renegotiate the FCL level from Secret to Confidential to reduce compliance obligations during the growth phase',
          ],
          correctIndex: 1,
          explanation: 'A facility that has never been inspected and has tripled in employee count is carrying accumulated compliance risk that may not be visible until a DCSA inspection reveals it. The responsible action is a proactive internal self-audit against NISPOM requirements: personnel security (all cleared employees debriefed, foreign contact reporting current), physical security (closed area systems operational), insider threat program documentation, and classified document accountability. Finding and fixing gaps internally is always preferable to finding them in a DCSA inspection that could trigger a revocation notice.',
        },
        {
          id: 'q5-cap-5',
          type: 'multiple-choice',
          question: 'Vector has two active cost-plus contracts and receives a CAS practice change finding from DCAA — the company\'s G&A pool allocation base in practice (modified TCI) differs from the disclosed practice (total cost input). This is a retroactive practice change. What is the financial exposure?',
          options: [
            'None — DCAA can only enforce CAS prospectively, not retroactively',
            'A penalty equal to the dollar value of the practice change finding plus potential contract repricing on both affected cost-plus contracts',
            'Disallowance of all G&A costs on future contracts until the disclosure is corrected',
            'Suspension of the facility security clearance pending correction',
          ],
          correctIndex: 1,
          explanation: 'A retroactive practice change finding — where actual practices differ from disclosed practices without prior notification and approval — results in repricing of all CAS-covered contracts affected by the non-conforming practice, calculated as the difference between what was billed under the actual (undisclosed) practice versus what would have been billed under the disclosed practice. Additionally, 10 U.S.C. 3547 authorizes penalties when non-conformance increased costs to the government. The penalties can equal the amount of the cost increase plus interest.',
        },
        {
          id: 'q6-cap-5',
          type: 'multiple-choice',
          question: 'In the Vector scenario, which single regulatory action poses the most immediate cash flow risk to the company?',
          options: [
            'The inadequate ICS finding on the second consecutive year',
            'A business system disapproval triggered by the accounting system deficiencies underlying the ICS failures, resulting in 5% payment withholding on both active contracts',
            'The CMMC Level 2 certification gap discovered during the IDIQ bid',
            'The CAS practice change finding on the G&A allocation base',
          ],
          correctIndex: 1,
          explanation: 'While all four issues are serious, a business system disapproval with a 5% payment withhold is the most immediate cash flow risk. At $55M annual revenue, primarily from cost-plus contracts, a 5% withhold across affected contracts could lock up $1.5–$2.5M in cash immediately upon disapproval — a genuine liquidity event for a company that has also lost its CFO. The ICS findings and CAS finding create potential future liabilities; the business system disapproval creates an immediate cash flow reduction that must be managed operationally.',
        },
        {
          id: 'q7-cap-5',
          type: 'true-false',
          question: 'An executive can appropriately delegate all DCAA audit readiness, CAS compliance, and CMMC certification responsibilities to the Controller and IT department without maintaining personal oversight and accountability for these areas.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. As the Vector scenario illustrates, these compliance areas create risks that manifest as CEO-level problems: payment withholds, cure notices, contract terminations, and False Claims Act exposure. Functional delegation is appropriate — the Controller executes the ICS, the ISSO manages CMMC controls, the FSO runs the security program. But executive oversight is non-delegable: knowing the current business system status, reviewing ICS submissions before filing, understanding the EAC on every EVM program, and setting a culture where compliance problems are escalated rather than hidden.',
        },
        {
          id: 'q8-cap-5',
          type: 'multiple-choice',
          question: 'Vector is considering acquiring a smaller competitor with $15M in revenue and three active cost-plus contracts. DCAA has not audited the target\'s last three ICS submissions. From an M&A due diligence perspective, what is the most significant financial risk?',
          options: [
            'The target\'s indirect rates may be higher than Vector\'s, increasing combined overhead costs',
            'The three unaudited ICS years represent an unquantified contingent liability — questioned costs and unallowable findings could generate significant repricing obligations that transfer to the acquirer',
            'The target\'s employees may not have current personnel security clearances',
            'The target\'s contracts may have unfavorable payment terms compared to Vector\'s',
          ],
          correctIndex: 1,
          explanation: 'Three unaudited ICS years is a major M&A red flag. Each unaudited year represents an unresolved potential liability: DCAA may find unallowable costs, unsupported labor charges, CAS non-conformances, or indirect rate discrepancies. These questioned costs become repricing obligations — the acquiring company inherits them. Before closing an acquisition of a defense contractor with unaudited incurred cost submissions, the buyer should require an independent assessment of the ICS submissions, negotiate a purchase price holdback for potential audit findings, and obtain reps and warranties around CAS compliance and audit status. The $14M adjusted acquisition price discussed in Module 2 illustrates exactly this risk.',
        },
      ],
    },
  ],
};
