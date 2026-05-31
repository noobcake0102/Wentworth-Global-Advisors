import type { Course } from '../../types/course';

const module1 = {
  id: 'doa-m1',
  number: 1,
  title: 'The Defense Program Lifecycle',
  description: 'From RFP to contract award to CDR to first delivery — what happens at each gate, who is watching, and what the program manager is responsible for at every stage.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Trace the full defense program lifecycle from acquisition strategy through first delivery',
    'Explain the role and authority of the Milestone Decision Authority at each program gate',
    'Identify the most common failure modes in defense programs and when they typically surface',
    'Recognize the warning signs of underbid cost, unrealistic schedule, and immature design before they become crises',
  ],
  lessons: [
    {
      id: 'doa-m1-l1',
      title: 'From RFP to Contract Award: The Gates Before Work Starts',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Before a single bolt is turned or a line of code is written, a defense program passes through a gauntlet of government reviews, competitive evaluations, and approval authorities that most commercial project managers have never encountered. Understanding these gates is not just administrative background — it shapes everything from how you price the work to what commitments you are making to the customer on day one of performance.',
        },
        {
          type: 'heading' as const,
          text: 'The Acquisition Strategy and the Request for Proposal',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The government does not just write an RFP and send it out. It develops an Acquisition Strategy — a formal document that determines what contract type will be used, whether competition is required, what the source selection criteria are, and how performance will be measured. By the time the RFP hits the street, the government has already made dozens of decisions that will constrain how you respond and how you execute.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Why the Acquisition Strategy Matters to You',
          text: 'If the acquisition strategy calls for FFP (Firm-Fixed-Price), the government has already decided they believe the requirements are stable enough to transfer all cost risk to you. If it calls for CPFF (Cost-Plus Fixed Fee), they know the requirements are uncertain. The contract type in your proposal is not negotiable — it was locked before you ever saw the solicitation.',
        },
        {
          type: 'heading' as const,
          text: 'Source Selection: What the Government Is Actually Evaluating',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Source selection is a formal, regulated process. The Source Selection Evaluation Board (SSEB) evaluates proposals against criteria defined in the RFP — typically technical approach, management approach, past performance, and price/cost. Evaluators are looking for specificity and realism. A proposal that says "we will use best practices to manage schedule risk" scores far lower than one that names the specific earned value metrics, reporting cadence, and escalation thresholds the team will actually use.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Pre-solicitation: Government develops requirements, acquisition strategy, and draft RFP',
            'RFP Release: Formal solicitation published — typically through SAM.gov (System for Award Management)',
            'Q&A Period: Offerors submit written questions; government issues written amendments — no verbal answers',
            'Proposal Submission: Full technical, management, and price volumes due by specified deadline',
            'Source Selection Evaluation: SSEB scores proposals; Source Selection Authority makes award decision',
            'Contract Award: Winning contractor notified; unsuccessful offerors entitled to a debriefing',
            'Protests: Unsuccessful offerors may protest to GAO or Court of Federal Claims; typical protest window is 10 days post-debriefing',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Post-Award: The Clock Starts Now',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Award is not the finish line — it is mile marker zero. The day the contract is signed, your program baseline (schedule, cost, and technical approach from your proposal) becomes the measuring stick by which every future action will be judged. The SSEB evaluated your proposal as achievable. If you now discover the schedule cannot be met or the design assumptions were wrong, you do not get to quietly revise. You are measured against what you said.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'RFP', definition: 'Request for Proposal — the formal government solicitation document that defines requirements, evaluation criteria, and contract terms' },
            { term: 'SSEB', definition: 'Source Selection Evaluation Board — the government team that evaluates proposals and scores them against stated criteria' },
            { term: 'SAM.gov', definition: 'System for Award Management — the federal database where government solicitations and contract awards are published' },
            { term: 'Acquisition Strategy', definition: 'The government\'s overarching plan for how a program will be acquired, including contract type, competition approach, and key decision points' },
            { term: 'GAO', definition: 'Government Accountability Office — one of two primary venues for bid protests by unsuccessful offerors' },
            { term: 'Debriefing', definition: 'A post-award briefing the government provides to unsuccessful offerors explaining their evaluation scores — a contractual right under FAR 15.506' },
          ],
        },
        {
          type: 'heading' as const,
          text: 'Milestone Decision Authority',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'For major defense acquisition programs (MDAPs), the Milestone Decision Authority (MDA) is a senior official — often the Under Secretary of Defense for Acquisition and Sustainment, or a Service Acquisition Executive — who has the authority to approve, delay, or cancel a program at each major milestone. This is not a rubber stamp. MDA reviews are substantive, and programs have been terminated at Milestone B because cost and schedule estimates were not credible.',
        },
        {
          type: 'table' as const,
          headers: ['Milestone', 'What It Means', 'What Must Be Demonstrated'],
          rows: [
            ['Milestone A', 'Approval to enter Technology Maturation & Risk Reduction (TMRR)', 'Validated requirements, feasible concept, acceptable risk'],
            ['Milestone B', 'Approval to enter Engineering & Manufacturing Development (EMD)', 'Stable requirements, mature technology (TRL 6+), realistic cost/schedule'],
            ['Milestone C', 'Approval to enter Production & Deployment', 'Successful developmental testing, production readiness demonstrated'],
            ['Full-Rate Production (FRP)', 'Approval to produce at full rate', 'Successful operational testing, production process proven'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Your proposal commitments become your performance baseline on day one of contract execution — do not propose what you cannot execute. 2. The government spent months developing the acquisition strategy before you saw the RFP; understand it deeply before shaping your technical approach. 3. Milestone Decision Authority reviews happen on government programs, but the same logic applies to your internal program gates — get real sign-off from real authority at each stage before committing more resources.',
        },
      ],
    },
    {
      id: 'doa-m1-l2',
      title: 'The Technical Review Gates: PDR, CDR, and Beyond',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Between contract award and first delivery, a defense program goes through a structured series of technical reviews. These are not status briefings — they are formal assessments where the program\'s design, documentation, and readiness to proceed are evaluated by a mix of contractor personnel, government program office staff, and independent reviewers. Failing to pass — or passing when you should not have — are both dangerous.',
        },
        {
          type: 'heading' as const,
          text: 'The Review Sequence',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Review', 'Full Name', 'Purpose', 'Typical Timing'],
          rows: [
            ['SRR', 'System Requirements Review', 'Confirm requirements are complete, consistent, and feasible', 'Early in EMD, before design begins'],
            ['SDR', 'System Design Review', 'Confirm functional architecture is defined and requirements are allocated to subsystems', 'After SRR, before PDR'],
            ['PDR', 'Preliminary Design Review', 'Confirm design concept is mature enough to proceed to detailed design; identify high-risk areas', 'Roughly 30-40% design complete'],
            ['CDR', 'Critical Design Review', 'Confirm detailed design is complete, producible, and ready for fabrication; all drawings released', '~90% design complete'],
            ['TRR', 'Test Readiness Review', 'Confirm the test program is ready to execute — test articles built, facilities ready, procedures approved', 'Before developmental testing'],
            ['PRR', 'Production Readiness Review', 'Confirm manufacturing processes are defined, proven, and ready to produce at rate', 'Before Milestone C / FRP decision'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'What Actually Happens at a CDR',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'CDR is the most consequential technical review for most defense hardware programs. It is the moment where you declare the design is done and you are ready to build. In practice, it is a multi-day event — sometimes a week or more for large systems — where your engineering team briefs the design in detail, the government\'s Independent Technical Assessment (ITA) team asks hard questions, and a list of Critical Design Review Action Items (CDAIs) is compiled.',
        },
        {
          type: 'paragraph' as const,
          text: 'A CDR "pass" does not mean zero issues — it means the issues identified do not constitute a fundamental risk to the program\'s technical approach. The question the board is answering is: "Is this design mature enough that fabricating hardware will resolve remaining uncertainties, or are there questions that building hardware cannot answer?" If design trades are still open, if interfaces are undefined, or if analysis shows margins that are negative or near-zero, CDR should not pass.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Pressure to Pass CDR Is Real and Dangerous',
          text: 'Schedule pressure creates enormous incentive to pass CDR before the design is truly ready. The contract milestone is the contract milestone — it has a date and a payment tied to it. But passing CDR with an immature design does not make the design mature. It just means you build immature hardware, discover the problems during test, and pay to fix them at hardware-rework prices instead of design-change prices. The cost multiplier for finding a problem in test versus in design is typically 10:1 or worse.',
        },
        {
          type: 'heading' as const,
          text: 'CDRLs and DIDs: The Document Side of Technical Reviews',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Defense contracts define required deliverables through CDRLs — Contract Data Requirements Lists. Each CDRL references a DID — a Data Item Description — that specifies exactly what the document must contain, how it must be formatted, and what review process applies. CDRLs are not optional submissions; they are contractual deliverables with due dates and acceptance criteria.',
        },
        {
          type: 'paragraph' as const,
          text: 'Managing your CDRL register is a core program management discipline. At program kick-off, the PM should have a complete list of all CDRLs, their due dates, their review/approval cycle time, the responsible author within the program, and the government reviewer. A missed CDRL can trigger a cure notice. A poorly executed CDRL can trigger a corrective action request. A well-managed CDRL register signals to the government customer that your program is in control.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'PDR', definition: 'Preliminary Design Review — formal review confirming the design concept and functional architecture are mature enough to proceed to detailed design' },
            { term: 'CDR', definition: 'Critical Design Review — formal review confirming the detailed design is complete and ready for fabrication; the design freeze gate' },
            { term: 'CDRL', definition: 'Contract Data Requirements List — the contractual list of deliverable documents, their due dates, and the applicable Data Item Description' },
            { term: 'DID', definition: 'Data Item Description — the government standard that specifies the content, format, and preparation instructions for a specific type of deliverable document' },
            { term: 'ICD/IDD', definition: 'Interface Control Document / Interface Design Document — documents defining the technical interfaces between system elements; the number of ICDs is a proxy for system integration complexity' },
            { term: 'TRL', definition: 'Technology Readiness Level — a 1-9 scale indicating how mature a technology is, from basic principles observed (TRL 1) to proven in operational environment (TRL 9)' },
            { term: 'ITA', definition: 'Independent Technical Assessment — a government-sponsored review by experts independent from the program office, often used at CDR on high-risk programs' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Know your CDRL register cold — it is the contractual backbone of your program documentation and a leading indicator of program health. 2. Never let schedule pressure drive a CDR pass when the design is not ready; the cost of rework in hardware is always larger than the cost of delay in design. 3. Track your Interface Control Documents separately — ICD count growth after PDR is one of the clearest early warning signs that scope is expanding beyond what was proposed.',
        },
      ],
    },
    {
      id: 'doa-m1-l3',
      title: 'Why Programs Fail — and When',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Defense program failures are not random. They follow patterns that experienced program managers can recognize months before the formal metrics confirm them. The data is consistent across decades and programs: the root causes are almost always visible by the end of the first six months of execution, long before the first hardware is delivered, long before any test failure occurs.',
        },
        {
          type: 'heading' as const,
          text: 'The Three Root Causes',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Unrealistic schedule — the schedule in the proposal was constructed to win the contract, not to actually deliver. It assumes no re-work, no supply chain delays, no personnel turnover, and a design maturity that does not exist at award.',
            'Underbid cost — the price was set to win the competition. Labor hours were estimated against an optimistic design picture that has already evolved. Indirect rates were modeled at rates that assume a revenue level the business will not reach.',
            'Design maturity lower than claimed — the proposal said TRL 6, but the technology had never been integrated at system level. The number of open design trades and undefined interfaces was underrepresented in the proposal to avoid raising red flags in source selection.',
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'These three causes are not independent — they are almost always present together, and they reinforce each other. An underpriced program must execute faster to minimize cost accumulation, which drives cutting corners on design maturity, which drives rework and schedule slip, which drives cost growth. The spiral starts in proposal and gains momentum in the first months of execution.',
        },
        {
          type: 'heading' as const,
          text: 'The First Six Months: Where Programs Are Decided',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The first six months of a defense contract are where the program\'s fate is typically determined, even though no hardware exists and no formal test has been run. In that window, the team is standing up subcontracts, conducting the Systems Requirements Review, beginning Preliminary Design, and building the Integrated Master Schedule (IMS). The IMS that gets baselined in month three is the schedule you will be measured against for years. If it is not realistic, you are already behind.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Earned Value Will Not Save You If the Baseline Is Wrong',
          text: 'Many programs implement EVMS (Earned Value Management System) correctly — the metrics are calculated right, the reports go out on time — but the Performance Measurement Baseline (PMB) itself was never realistic. A program can show a Cost Performance Index (CPI) of 0.97 (nearly on budget) right up until it runs out of money because the total authorized budget was insufficient from day one. Earned value measures execution against the baseline. It does not tell you if the baseline was real.',
        },
        {
          type: 'heading' as const,
          text: 'War Story: The Satellite Ground System That Fell Apart at CDR',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'A mid-sized defense electronics contractor won a competitive award for a satellite ground system — the software, hardware, and communications infrastructure that a satellite operations center uses to command satellites and receive downlink data. The proposal was technically strong and came in about 8% below the government\'s independent cost estimate, which was within the competitive range.',
        },
        {
          type: 'paragraph' as const,
          text: 'Eighteen months into the program, at CDR, the program manager presented an interface count that had grown by 40% beyond what the proposal assumed. The original proposal had documented 47 Interface Control Documents. By CDR, the ICD register showed 66 — 19 more interfaces, representing 19 more integration touchpoints, 19 more test requirements, and 19 more stakeholders who had to sign off on design decisions.',
        },
        {
          type: 'paragraph' as const,
          text: 'The source of the growth: the proposal team had modeled the ground system in relative isolation. They knew which satellites the system would operate, but they had not fully analyzed the ground data networks, the mission processing systems at two additional sites, or the legacy C2 (Command and Control) system that would feed data to the new system in parallel during transition. None of these were surprises — all of them were in the SOW (Statement of Work). They were simply not reflected in the interface count the proposal assumed.',
        },
        {
          type: 'paragraph' as const,
          text: 'The program did not recover at CDR. The CDR board identified the interface growth as a fundamental design scope issue, not a documentation issue. The program was put on a 90-day corrective action plan, the schedule slipped by 14 months, and the contractor absorbed approximately $4.2M in unplanned costs on a $38M contract — an 11% overrun before a single line of production code had been written.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'What the PM Said Later',
          text: '"We knew at month four that the ICD count was going to be a problem. The system architect told me in a hallway conversation that we had probably underestimated interfaces. I had a schedule that showed CDR in month 18, I had a customer breathing down my neck about milestones, and I made the call to keep moving and see if we could manage it down. That was the wrong call. I should have taken the issue to the government customer at month four, documented it as a design discovery, and started a conversation about schedule and cost relief. Instead I waited 14 months and it blew up at CDR in front of everyone."',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'IMS', definition: 'Integrated Master Schedule — the comprehensive network schedule that links all program activities, milestones, and dependencies into a single schedule model' },
            { term: 'PMB', definition: 'Performance Measurement Baseline — the time-phased budget plan against which program execution is measured in an EVMS-compliant program' },
            { term: 'EVMS', definition: 'Earned Value Management System — a project management methodology that integrates scope, schedule, and cost to provide objective performance measurement' },
            { term: 'CPI', definition: 'Cost Performance Index — an EVMS metric; CPI = Earned Value / Actual Cost. A CPI below 1.0 means you are spending more than planned to accomplish the work' },
            { term: 'SOW', definition: 'Statement of Work — the contractual document that defines the specific work the contractor must perform, as distinct from performance specifications or drawings' },
            { term: 'KPP', definition: 'Key Performance Parameter — the most critical performance attributes of a system, typically linked to operational effectiveness; failure to meet a KPP can trigger a program restructure' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Count your interfaces at proposal time — not just the ones you know, but the ones implied by the system context diagram. Interface count is one of the most reliable proxies for integration complexity and risk. 2. If you discover a scope assumption error in the first six months, surface it to the customer immediately — early disclosure almost always produces better outcomes than late disclosure. 3. A realistic baseline you can execute beats an optimistic baseline that looks good in source selection. Win the work you can deliver.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'doa-m1-q1',
      type: 'multiple-choice' as const,
      question: 'The Milestone Decision Authority (MDA) review at Milestone B is primarily concerned with approving entry into which phase?',
      options: [
        'Technology Maturation and Risk Reduction (TMRR)',
        'Engineering and Manufacturing Development (EMD)',
        'Production and Deployment',
        'Operations and Support',
      ],
      correctIndex: 1,
      explanation: 'Milestone B approves entry into Engineering and Manufacturing Development (EMD) — the phase where detailed design, development, and developmental testing occur. Milestone A covers TMRR entry; Milestone C covers Production and Deployment entry.',
    },
    {
      id: 'doa-m1-q2',
      type: 'multiple-choice' as const,
      question: 'A CDRL references a DID. What does the DID specify?',
      options: [
        'The dollar value associated with delivering the document',
        'The content, format, and preparation instructions for the deliverable',
        'The names of government personnel authorized to accept the deliverable',
        'The penalty clauses for late submission',
      ],
      correctIndex: 1,
      explanation: 'A Data Item Description (DID) specifies exactly what a deliverable document must contain, how it must be structured, and what preparation instructions apply. It is the content standard, not a financial or personnel document.',
    },
    {
      id: 'doa-m1-q3',
      type: 'multiple-choice' as const,
      question: 'Based on the war story in Lesson 3, what was the primary root cause of the satellite ground system program\'s CDR failure?',
      options: [
        'The program manager lacked experience with satellite systems',
        'The government changed requirements after award',
        'Interface complexity was underestimated in the proposal and not surfaced early when the discrepancy was discovered',
        'The CDR board applied unreasonably strict evaluation criteria',
      ],
      correctIndex: 2,
      explanation: 'The core failure was that the proposal underestimated interface count (47 ICDs vs. 66 actual), and when the system architect identified the problem at month four, the PM chose not to surface it — waiting 14 months until CDR instead of engaging the customer early when options still existed.',
    },
    {
      id: 'doa-m1-q4',
      type: 'true-false' as const,
      question: 'True or False: A program with a Cost Performance Index (CPI) near 1.0 is necessarily on track to complete within its authorized budget.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. CPI measures execution efficiency against the Performance Measurement Baseline (PMB). If the PMB itself was insufficient from the start (the total budget was too low), a CPI near 1.0 just means you are efficiently spending your way to an overrun. A realistic baseline is a prerequisite for EVMS to provide meaningful insight.',
    },
    {
      id: 'doa-m1-q5',
      type: 'multiple-choice' as const,
      question: 'According to the lesson, when do defense programs typically show the warning signs that will determine their ultimate outcome?',
      options: [
        'During the proposal phase, when pricing is finalized',
        'In the first six months of execution, before any hardware is delivered',
        'At CDR, when design maturity is formally assessed',
        'During developmental testing, when performance is measured',
      ],
      correctIndex: 1,
      explanation: 'The data consistently shows that the root causes of program failure — unrealistic schedule, underbid cost, and overstated design maturity — are visible in the first six months of execution. The IMS baseline, subcontract strategies, and early design discovery all occur in this window.',
    },
    {
      id: 'doa-m1-q6',
      type: 'multiple-choice' as const,
      question: 'Which of the following best describes what happens during source selection?',
      options: [
        'The government negotiates price and terms with the incumbent contractor',
        'The SSEB evaluates proposals against stated criteria and the SSA makes the award decision',
        'Contractors submit bids and the lowest price automatically wins',
        'The government issues verbal guidance to preferred contractors before formal award',
      ],
      correctIndex: 1,
      explanation: 'Source selection is a formal process where the Source Selection Evaluation Board (SSEB) scores proposals against criteria defined in the RFP — typically technical, management, past performance, and price. The Source Selection Authority (SSA) makes the final award decision based on the evaluation. Lowest price does not automatically win unless the solicitation specifies LPTA (Lowest Price Technically Acceptable).',
    },
  ],
};

const module2 = {
  id: 'doa-m2',
  number: 2,
  title: 'Contract Types from the Ops Side',
  description: 'What FFP means when you are the one who has to deliver it. How cost-plus mechanics actually work in practice. How contract type determines your entire operations strategy.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Explain the cost and risk implications of FFP, CPFF, and T&M contracts from the contractor perspective',
    'Describe how indirect rate structures affect cost-plus contract execution',
    'Connect contract type to staffing model, overtime policy, make-buy decisions, and subcontracting strategy',
    'Identify the audit exposure differences across contract types',
  ],
  lessons: [
    {
      id: 'doa-m2-l1',
      title: 'FFP: Every Dollar Over Target Comes from Your Margin',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Firm-Fixed-Price is the simplest contract type to understand and the most dangerous to execute poorly. The government pays you a fixed amount. You deliver the work. If you spend more than you bid, you eat the difference. If you spend less, you keep the profit. There is no adjustment, no audit sharing, no cost-reimbursement mechanism. The entire cost risk sits with you.',
        },
        {
          type: 'heading' as const,
          text: 'What "Fixed Price" Actually Means in Practice',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Many newer program managers treat FFP as a budget number — "we have $12M to spend." That is exactly wrong. An FFP contract is not a budget; it is a price. The government does not care what you spend internally. They care that you deliver what the contract requires. You could theoretically spend $15M to deliver a $12M FFP contract — and some programs do exactly that, destroying their margin and sometimes threatening the business unit\'s profitability for the year.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Margin Destruction Spiral',
          text: 'When an FFP program goes over cost, the instinct is to add more people to recover schedule. More people means more cost, which means less margin, which means more pressure to cut corners to save cost, which means quality problems, which means rework, which means more cost. The only way to stop the spiral is to acknowledge the overrun early, understand the root cause, and make hard decisions — including whether to take the loss cleanly rather than compound it.',
        },
        {
          type: 'heading' as const,
          text: 'How FFP Shapes Your Ops Decisions',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Every operational decision on an FFP program is a financial decision. Staffing choices directly affect margin. Overtime on an FFP is a cost you are paying to recover a schedule — but unless it recovers a milestone payment, it is cash out with no cash in. Make-buy decisions are fundamentally about risk transfer: buying a component fixes the cost and transfers technical risk to a supplier; making it internalizes both the cost risk and the technical risk.',
        },
        {
          type: 'list' as const,
          items: [
            'Staffing model: Right-size to the work — every extra person is a fixed cost against a fixed price',
            'Overtime: Use tactically for specific schedule recovery events; avoid structural overtime which just burns margin',
            'Make vs. Buy: FFP programs generally benefit from buying more and making less — it converts variable cost risk to fixed subcontract price',
            'Subcontract type: Flow down FFP terms to subs where you can — transfer cost risk to suppliers for defined scope',
            'Schedule management: Front-load risk resolution — find problems when they are cheap to fix, not when they are expensive to recover',
          ],
        },
        {
          type: 'heading' as const,
          text: 'The Proposal-to-Execution Disconnect',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'One of the most dangerous pathologies in defense contracting is the separation between the team that writes the proposal and the team that executes the contract. The proposal team optimizes to win. The ops team has to live with what was won. When the ops PM opens the contract on day one and discovers that the labor hours were estimated at a design maturity that does not exist, or that the schedule assumes a subcontractor lead time that is not achievable, they have inherited a problem they did not create.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Best Practice: PM Continuity from Proposal to Execution',
          text: 'The single most effective structural change a defense contractor can make to reduce FFP overruns is to assign the execution PM to the proposal team — not as a reviewer, but as a core author of the schedule and basis of estimate. A PM who builds the schedule and labor hours owns them in a different way than one who inherits them. This practice also improves proposal quality, because execution PMs know what the proposal team tends to get wrong.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'FFP', definition: 'Firm-Fixed-Price — a contract type where the price is fixed regardless of actual cost to perform; all cost risk sits with the contractor' },
            { term: 'Basis of Estimate (BOE)', definition: 'The documentation supporting how labor hours, material costs, and other estimates were developed for a proposal; must be defensible in source selection and audits' },
            { term: 'Make-Buy Decision', definition: 'The determination of whether a component or service will be produced internally or procured from an outside supplier; a critical risk allocation decision on FFP programs' },
            { term: 'Flow-Down', definition: 'The process of passing contract terms, clauses, and requirements from a prime contractor to its subcontractors' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Treat FFP margin as a risk reserve, not a profit line — it is what you lose first when the program has problems. 2. Involve your execution PM in the proposal estimate, not just the review; ownership of the estimate changes how it is built. 3. When an FFP program shows early signs of cost growth, decision speed is everything — the longer you wait to take corrective action, the more expensive the recovery.',
        },
      ],
    },
    {
      id: 'doa-m2-l2',
      title: 'Cost-Plus in Practice: Indirect Rates, Fee Structures, and the "More Hours" Trap',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Cost-plus contracts reimburse the contractor for allowable, allocable costs and pay a fee on top of those costs. They are appropriate when requirements are uncertain and the government cannot define the work with enough specificity to get a realistic fixed price. From the contractor\'s perspective, cost-plus protects you from catastrophic loss — but it creates a different set of management challenges that catch many program managers off guard.',
        },
        {
          type: 'heading' as const,
          text: 'How Indirect Rates Work',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Direct costs — the labor and materials you can trace directly to the contract — are only part of what you charge. Every contract also bears a share of your company\'s overhead: facilities, management staff, IT systems, HR, business development. These indirect costs are accumulated into pools and allocated to contracts through indirect rates — percentages applied to direct costs.',
        },
        {
          type: 'paragraph' as const,
          text: 'Indirect rates are negotiated with DCAA (Defense Contract Audit Agency) as provisional (estimated) rates at the start of the year and trued up to actual rates at year end. If your actual indirect rates come in higher than your provisional rates — because you lost a contract and your cost base shrunk, or because overhead spending increased — your final billings are higher than your provisional billings. If they come in lower, you owe the government a credit.',
        },
        {
          type: 'table' as const,
          headers: ['Rate Type', 'What It Covers', 'Applied To'],
          rows: [
            ['Fringe Benefit Rate', 'Payroll taxes, health insurance, paid leave, retirement contributions', 'Direct labor dollars'],
            ['Overhead Rate', 'Facilities, department management, indirect labor in functional departments', 'Direct labor dollars (sometimes by department or location)'],
            ['G&A Rate', 'General and Administrative — executive staff, corporate IT, legal, accounting, business development', 'Total Cost Input (TCI) — all direct costs plus overhead'],
            ['Material Handling Rate', 'Cost of purchasing, receiving, and stocking materials', 'Direct material purchases'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Fee Structures on Cost-Plus Contracts',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The "plus" in cost-plus is the fee — your profit. On a CPFF (Cost-Plus Fixed Fee) contract, the fee is a fixed dollar amount, regardless of the final cost. If you deliver the work for less than the contract ceiling cost, you still earn the full fixed fee. If you go over cost, you still only earn the fixed fee — but you are now eating costs above the ceiling from your own pocket (or requesting a contract modification for more funding).',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The "More Hours = More Money" Trap',
          text: 'On a CPFF contract, more direct labor hours mean more cost reimbursement — which can feel like more revenue. But more hours do not mean more fee. Your fee is fixed. If you add hours beyond what is needed to do the work, you are increasing your cost base and your indirect rate allocation, reducing your fee as a percentage of cost (your effective margin), and burning your customer\'s contract funding faster. When you exhaust the contract funding ceiling, work stops — even if the deliverable is not complete. The customer then faces a Limitation of Funds or Limitation of Cost notice and must decide whether to fund more. A contractor who consistently runs up to the funding ceiling signals poor cost management to the government customer.',
        },
        {
          type: 'heading' as const,
          text: 'Cost-Plus Audit Exposure',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Cost-plus contracts are audited. DCAA has the right to examine your cost records, timekeeping system, purchasing records, and indirect rate calculations. They are looking for costs that are unallowable (explicitly prohibited under FAR Part 31 — entertainment, marketing, interest on debt), unallocable (not properly attributed to this contract), or unreasonable (higher than the market rate for equivalent goods or services).',
        },
        {
          type: 'list' as const,
          items: [
            'Timekeeping: Every employee must charge time to the correct cost objective — errors in labor charging are the most common DCAA finding',
            'Unallowable costs: Ensure marketing, entertainment, and certain executive compensation costs are kept out of your indirect cost pools',
            'Purchasing system: Buys over the simplified acquisition threshold require competition documentation; sole-source buys need written justification',
            'Subcontract consent: Subcontracts over certain dollar thresholds on cost-plus contracts require Contracting Officer consent before award',
          ],
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'CPFF', definition: 'Cost-Plus Fixed Fee — a cost-reimbursement contract where the fee (profit) is a fixed dollar amount that does not change with final cost' },
            { term: 'CPIF', definition: 'Cost-Plus Incentive Fee — a cost-reimbursement contract where the fee varies based on the final cost relationship to a target; incentivizes cost efficiency' },
            { term: 'DCAA', definition: 'Defense Contract Audit Agency — the DoD agency responsible for auditing contractor cost accounting, indirect rates, and billing systems' },
            { term: 'Provisional Rate', definition: 'A temporary indirect rate used for billing during the year, subject to true-up to actual rates at year-end through a rate settlement' },
            { term: 'FAR Part 31', definition: 'The Federal Acquisition Regulation section governing contract cost principles — defines what costs are allowable, allocable, and reasonable for government reimbursement' },
            { term: 'Limitation of Funds', definition: 'A contract clause on incrementally-funded cost-reimbursement contracts requiring the contractor to notify the government when 75% of available funding is expended' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. On cost-plus, manage to the deliverable, not the hours — your job is to accomplish the work efficiently, not to maximize billable time. 2. Understand your indirect rate structure deeply; rate increases driven by lost revenue or overhead growth will affect your competitiveness and your customer relationships on active cost-plus programs. 3. Timekeeping accuracy is non-negotiable — a DCAA finding on labor charging can trigger a suspension of billing, which is an immediate cash flow crisis.',
        },
      ],
    },
    {
      id: 'doa-m2-l3',
      title: 'Contract Type Comparison: How the Vehicle Shapes Your Strategy',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Experienced defense program managers choose their operational approach based on contract type before they choose anything else. The contract type is the economic framework within which every resource decision, subcontracting decision, and risk mitigation decision is made. Getting this wrong — running a cost-plus program like an FFP program, or managing an FFP program with the loose cost tracking acceptable on cost-plus — is a guaranteed path to problems.',
        },
        {
          type: 'heading' as const,
          text: 'The Full Comparison',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Dimension', 'FFP', 'CPFF', 'T&M (Time and Materials)'],
          rows: [
            ['Cost Risk — Contractor', 'High — contractor absorbs all overruns', 'Low — government reimburses allowable costs', 'Moderate — no cost risk on hours; risk on productivity and ceiling'],
            ['Cost Risk — Government', 'Low — price is fixed', 'High — final cost is uncertain', 'Moderate — ceiling price caps total but productivity risk is real'],
            ['Revenue Model', 'Fixed price regardless of hours spent', 'Costs reimbursed plus fixed fee', 'Hours billed at negotiated labor rates (which include overhead and profit)'],
            ['Cash Flow Timing', 'Milestone or deliverable payments; can create cash flow gaps', 'Monthly cost vouchers; relatively steady cash flow', 'Monthly billing of hours and materials; steady but ceiling-dependent'],
            ['Audit Exposure', 'Minimal — government does not audit internal costs on FFP', 'High — DCAA audits cost records, rates, and purchasing', 'Moderate — labor categories and rates audited; less than full cost-plus'],
            ['Government Oversight', 'Lower — government monitors deliverables and milestones', 'Higher — DCMA surveillance, DCAA audits, cost reporting required', 'Moderate — focus on labor category mix and hours reasonableness'],
            ['Appropriate When', 'Requirements are well-defined, design is mature, cost can be estimated with confidence', 'Requirements are uncertain, technology is developmental, cost cannot be realistically estimated', 'Requires contractor labor expertise with undefined scope; often used for engineering support, studies'],
            ['PM Focus', 'Cost control, schedule efficiency, make-buy optimization', 'Technical performance, deliverable quality, cost efficiency relative to fee', 'Labor category management, scope definition, ceiling burn-rate monitoring'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'T&M Contracts: The Misunderstood Vehicle',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Time and Materials contracts are often mischaracterized as "easy" because you bill hours and materials directly. In practice, T&M requires tight scope and labor category management that many program managers underestimate. Your labor rates are negotiated by category (Senior Systems Engineer, Software Engineer II, etc.) and your hours are billed against those categories. If you use a higher-cost labor category to do work that was scoped to a lower-cost category, you burn the ceiling faster for the same amount of work — and the government notices.',
        },
        {
          type: 'paragraph' as const,
          text: 'The other T&M management challenge is ceiling burn rate. T&M contracts have a ceiling price — the maximum the government will pay. When you reach 75-85% of the ceiling, you need to have a substantive conversation with the customer about whether additional funding is coming or whether the scope needs to be reduced to fit within the remaining ceiling. Surprises at the ceiling are never welcome.',
        },
        {
          type: 'heading' as const,
          text: 'How Contract Type Drives Subcontracting Strategy',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'On FFP prime contracts, you generally want to push as much of the fixed-price risk to subcontractors as possible by flowing down FFP terms for defined scope. This converts your internal make-risk into a fixed external cost. The risk is that your subcontractors may have the same discipline (or lack of discipline) that you do, and a subcontractor overrun that causes them to walk off the job or deliver late creates a problem you own as the prime.',
        },
        {
          type: 'paragraph' as const,
          text: 'On cost-plus programs, the government\'s consent to subcontract requirements mean you cannot just award to whoever you want. For significant subcontracts, you must demonstrate competitive pricing or justify sole-source selection, and you must get the Contracting Officer\'s written consent before award. Building this cycle time into your schedule is a program management discipline, not an administrative detail — government consent can take weeks.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'War Story: The T&M Ceiling Crisis',
          text: 'A defense services contractor was executing a T&M engineering support contract for a weapons system program office. The contract ceiling was $8.2M with 18 months to run. At month 12, they were at 91% of ceiling — and the work was only about 60% complete. The root cause: the program had been staffed with Senior Engineers (the higher-rate category) for tasks the SOW described as Junior-to-Mid level engineering support. The effective burn rate per unit of work was 35% higher than what the original pricing assumed. The program manager had to deliver a very uncomfortable briefing to the Contracting Officer, who ultimately issued a partial modification for additional funding — but only after a 6-week review that froze hiring and created a staffing gap on the program.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Set your ops management cadence based on contract type — FFP needs weekly margin tracking; cost-plus needs monthly rate variance monitoring; T&M needs bi-weekly ceiling burn rate review. 2. On T&M, audit your labor category assignments every quarter — category creep is silent and expensive. 3. Do not treat subcontract consent as a rubber stamp; build 4-6 weeks of government review time into your subcontract award schedule on cost-plus programs.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'doa-m2-q1',
      type: 'multiple-choice' as const,
      question: 'On a Firm-Fixed-Price contract, if your actual cost to perform is $14M and the contract price is $12M, what is the financial outcome?',
      options: [
        'The government pays $14M because your costs were reasonable and allowable',
        'You absorb the $2M overrun; the government pays only $12M',
        'You and the government share the $2M overrun 50/50',
        'You can request a contract modification for the additional costs if they were unforeseeable',
      ],
      correctIndex: 1,
      explanation: 'On an FFP contract, the price is fixed. The government pays $12M regardless of your actual cost. The $2M difference comes directly from your profit or, if the contract had no margin, from corporate funds. There is no cost-sharing mechanism on FFP — that is the entire point of the contract type.',
    },
    {
      id: 'doa-m2-q2',
      type: 'multiple-choice' as const,
      question: 'What is the primary risk of adding unnecessary labor hours to a CPFF (Cost-Plus Fixed Fee) contract?',
      options: [
        'It increases your fixed fee proportionally',
        'It burns the contract funding ceiling faster without increasing your earned fee',
        'It triggers a DCAA audit automatically',
        'It violates the Limitation of Funds clause immediately',
      ],
      correctIndex: 1,
      explanation: 'On CPFF, the fee is fixed in dollar terms — more hours do not earn more fee. Unnecessary hours burn government funding faster, reduce the effective fee percentage, and risk exhausting the contract ceiling before the work is complete. The government will notice burn rate anomalies and it damages the relationship.',
    },
    {
      id: 'doa-m2-q3',
      type: 'multiple-choice' as const,
      question: 'Which indirect rate is typically applied to Total Cost Input (all direct costs plus overhead) rather than directly to labor?',
      options: [
        'Fringe Benefit Rate',
        'Overhead Rate',
        'G&A (General and Administrative) Rate',
        'Material Handling Rate',
      ],
      correctIndex: 2,
      explanation: 'The G&A rate is typically applied to Total Cost Input (TCI) — the sum of all direct costs and overhead — because G&A costs benefit the entire business enterprise, not just specific direct labor. Fringe and overhead rates are generally applied to direct labor dollars.',
    },
    {
      id: 'doa-m2-q4',
      type: 'true-false' as const,
      question: 'True or False: On a cost-plus contract, a Contracting Officer\'s verbal authorization is sufficient to begin work on a new task before formal subcontract consent is issued.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. On cost-plus contracts, subcontract consent must be in writing from the Contracting Officer. Verbal authorizations — for any type of work change or commitment — are not contractually binding. "Never do work on a verbal direction" is a foundational rule of defense contracting. Costs incurred without proper authorization may be disallowed in audit.',
    },
    {
      id: 'doa-m2-q5',
      type: 'multiple-choice' as const,
      question: 'Which contract type typically has the lowest audit exposure from DCAA?',
      options: [
        'CPFF — Cost-Plus Fixed Fee',
        'CPIF — Cost-Plus Incentive Fee',
        'FFP — Firm-Fixed-Price',
        'T&M — Time and Materials',
      ],
      correctIndex: 2,
      explanation: 'FFP contracts have minimal DCAA audit exposure because the government does not reimburse costs — they pay a fixed price. DCAA audits cost-reimbursement contracts because the government\'s payment is directly tied to actual costs. On FFP, the government\'s only protection is the contract price itself, so there is no need to audit internal cost records.',
    },
    {
      id: 'doa-m2-q6',
      type: 'multiple-choice' as const,
      question: 'In the T&M war story, what was the root cause of the program reaching 91% of its funding ceiling with only 60% of work complete?',
      options: [
        'The program had significant unplanned scope growth directed by the government',
        'The contractor was using higher-cost labor categories for work scoped to lower-cost categories',
        'Indirect rate increases drove up the effective cost of every hour billed',
        'The subcontractors on the program were billing incorrectly',
      ],
      correctIndex: 1,
      explanation: 'The root cause was labor category mismatch — Senior Engineers (higher billing rates) were performing work the SOW described as Junior-to-Mid level support. The effective burn rate per unit of work was 35% higher than pricing assumed, exhausting the ceiling well ahead of work completion.',
    },
  ],
};

const module3 = {
  id: 'doa-m3',
  number: 3,
  title: 'The Government Customer',
  description: 'Who DCMA is, what a surveillance visit looks like, what Contracting Officers can and cannot do, and how to build a working relationship with someone who has enforcement authority.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Describe DCMA\'s mission and the scope of a typical surveillance visit',
    'Explain the legal authority and limits of a Contracting Officer',
    'Articulate the difference between customer relationship management in commercial vs. government contexts',
    'Identify the characteristics of a healthy government-contractor working relationship',
  ],
  lessons: [
    {
      id: 'doa-m3-l1',
      title: 'DCMA: The Enforcement Arm of the Defense Acquisition System',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Defense Contract Management Agency is the DoD\'s field organization responsible for ensuring contractors fulfill their contractual commitments. DCMA has approximately 12,000 employees in over 800 locations worldwide. They are physically present at major defense contractor facilities. They are not visitors — they are your ongoing oversight relationship, whether you want one or not.',
        },
        {
          type: 'heading' as const,
          text: 'What DCMA Does',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Contract administration: Administering contract terms on behalf of the Procuring Contracting Officer (PCO) after award',
            'Quality assurance: Monitoring contractor quality management systems and inspecting products and processes',
            'Production surveillance: Tracking schedule performance and production rates against contract commitments',
            'Property administration: Overseeing Government-Furnished Property (GFP) in the contractor\'s possession',
            'Earned Value Management System (EVMS) surveillance: Reviewing EVMS compliance on programs requiring an approved EVMS',
            'Small business subcontracting compliance: Monitoring adherence to small business subcontracting plans',
            'Safety: Reviewing workplace safety practices on programs with safety-critical work',
          ],
        },
        {
          type: 'heading' as const,
          text: 'What a Surveillance Visit Actually Looks Like',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Surveillance visits can be announced or unannounced. Experienced DCMA Contract Management Officers (CMOs) mix both. The announced visit is typically a scheduled review — a monthly program review, an EVMS surveillance, or a quality system assessment. The unannounced visit is a production floor walk, a records spot check, or an interview with production workers without management present.',
        },
        {
          type: 'paragraph' as const,
          text: 'Here is what typically happens during a production surveillance visit: The DCMA representative arrives at your facility, presents credentials at reception, and proceeds to the production floor. They observe work in progress — are workers following the approved process? Are travelers and work orders current? Are nonconformances being properly tagged and segregated? Are tools calibrated? They may pull records — calibration logs, inspection records, nonconformance reports — and compare them to what should be on file based on the contract requirements.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Unannounced Visit Is Not a Gotcha — It Is a Reality Check',
          text: 'Some program managers treat unannounced DCMA visits as an adversarial ambush. That is the wrong frame. DCMA\'s job is to verify that your actual practice matches your documented procedures. If it does, an unannounced visit is uneventful. If it does not — if workers are not following the approved assembly sequence, if nonconformances are sitting in a bin without proper tagging, if travelers are not current — the unannounced visit reveals a real problem that exists whether DCMA shows up or not. The problem is not the visit.',
        },
        {
          type: 'heading' as const,
          text: 'Surveillance Findings and Their Consequences',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'When DCMA identifies a problem, the first-level response is typically a Quality Assurance Letter of Instruction (QALI) — essentially a documented notice that a specific practice does not meet requirements, with a request for corrective action. More serious findings can escalate to a Contract Discrepancy Report (CDR), which is a formal contractual vehicle. A CDR can ultimately support a show cause notice or cure notice if not addressed.',
        },
        {
          type: 'paragraph' as const,
          text: 'The way you respond to DCMA findings matters as much as the finding itself. A contractor who responds quickly, identifies the root cause, implements a corrective action with a realistic completion date, and follows through builds credibility. A contractor who disputes every finding, provides vague corrective actions, and misses their own committed correction dates creates a different kind of relationship — and that relationship affects how DCMA approaches their surveillance intensity going forward.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'DCMA', definition: 'Defense Contract Management Agency — the DoD field organization responsible for administering defense contracts and conducting surveillance on contractor facilities and programs' },
            { term: 'QALI', definition: 'Quality Assurance Letter of Instruction — a DCMA document notifying a contractor of a quality or process finding and requesting corrective action' },
            { term: 'CDR (Contract Discrepancy Report)', definition: 'A formal DCMA contractual document used to document contractor performance deficiencies that require documented corrective action — distinct from Critical Design Review' },
            { term: 'Show Cause Notice', definition: 'A formal government notice requiring the contractor to explain why the contract should not be terminated for default — a serious escalation with a 10-day response window' },
            { term: 'Cure Notice', definition: 'A formal government notice identifying a specific contract performance deficiency and giving the contractor a defined period (typically 10 days) to cure the problem before default termination' },
            { term: 'GFP', definition: 'Government-Furnished Property — equipment, materials, or information provided by the government to the contractor for use in performance of the contract; contractor is responsible for its care and use' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Run your facility as if DCMA could walk in any day — because they can. Processes that exist only on paper and are not followed in practice are a liability, not a protection. 2. Respond to DCMA findings with speed and specificity: root cause, corrective action, responsible owner, completion date. Vagueness is perceived as evasion. 3. Build a relationship with your DCMA CMO before there is a problem — know their name, meet with them regularly, and give them no surprises.',
        },
      ],
    },
    {
      id: 'doa-m3-l2',
      title: 'The Contracting Officer: Authority, Limits, and What "No Verbal Directions" Really Means',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Contracting Officer (CO) is the only government official with legal authority to bind the government to a contract or to change a contract\'s terms. This is not a formality — it has direct consequences for how you must manage your relationship with every other government person you interact with, including the technical program office, the Program Manager, and end users.',
        },
        {
          type: 'heading' as const,
          text: 'What a CO Can and Cannot Do',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['A CO Can...', 'A CO Cannot...'],
          rows: [
            ['Award contracts and modifications', 'Verbally authorize changes that have cost or schedule impact'],
            ['Issue and accept contract deliverables', 'Approve work outside the contract scope without a formal modification'],
            ['Authorize access to additional contract funding', 'Override FAR/DFARS requirements without proper authority'],
            ['Issue formal direction through bilateral or unilateral modifications', 'Delegate their warrant authority informally to program office staff'],
            ['Terminate contracts for convenience or default', 'Guarantee future funding beyond what is currently on contract'],
            ['Issue cure notices and show cause notices', 'Approve subcontract awards on cost-plus contracts above the consent threshold without formal written consent'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'The Bright Line: Never Work on a Verbal Direction',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'This is one of the most important rules in defense contracting, and it is violated constantly by contractors who are trying to be responsive to their customer. The sequence goes like this: the government Program Manager calls and says "we need you to start working on this new capability — I\'ll get the paperwork sorted out." You start work. Six months later, the modification has not materialized, the person who called you has moved to a new job, and you have $400,000 in unreimbursed costs on a cost-plus contract for work that was never formally authorized.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Actual Legal Exposure',
          text: 'Performing unauthorized work is not just a financial risk — it can constitute a violation of the Anti-Deficiency Act if the government official who directed you exceeded their authority. Costs incurred on unauthorized work may be disallowed entirely in audit. In extreme cases, false claims exposure can arise if unauthorized costs are billed. The contractor who performs on a verbal direction and then submits an invoice is in a worse legal position than the contractor who refused to start without written authorization.',
        },
        {
          type: 'heading' as const,
          text: 'Constructive Changes: When Informal Direction Creates Legal Rights',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'There is an important nuance: "constructive changes" — situations where government actions or directions effectively change the work without a formal modification — are recognized under the Contract Disputes Act and can be the basis for an equitable adjustment. If a government technical representative (not the CO) insists on a specific technical approach that goes beyond the contract requirements, and you comply and incur costs, you may have a constructive change claim. But you need to document the direction contemporaneously — a memo or email to the government\'s file, noting what was directed, by whom, and on what date. Retroactive documentation is nearly worthless.',
        },
        {
          type: 'heading' as const,
          text: 'Contracting Officer Representatives and Technical Representatives',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The CO often delegates specific administrative functions to a Contracting Officer Representative (COR) or Contracting Officer Technical Representative (COTR). The COR can inspect and accept deliverables, monitor performance, and provide technical direction within the existing scope of the contract. They cannot change the contract\'s scope, price, or terms. Understanding what your COR is and is not authorized to do is essential — many contractors treat the COR as the CO, which leads to relying on directions that are not legally binding.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'CO', definition: 'Contracting Officer — the only government official with legal authority to enter into, administer, and terminate contracts on behalf of the government; identified by a warrant' },
            { term: 'COR/COTR', definition: 'Contracting Officer Representative / Contracting Officer Technical Representative — a CO-designated official who assists with technical monitoring and administration but cannot change contract terms' },
            { term: 'Bilateral Modification', definition: 'A contract modification signed by both the contractor and the Contracting Officer — used for changes that affect price, schedule, or scope' },
            { term: 'Unilateral Modification', definition: 'A contract modification signed only by the Contracting Officer — used for administrative changes that do not affect contractor rights or compensation' },
            { term: 'Constructive Change', definition: 'An informal government action or direction that effectively changes the contract work, potentially entitling the contractor to an equitable adjustment even without a formal modification' },
            { term: 'Equitable Adjustment', definition: 'A contract price and/or schedule adjustment to compensate the contractor for government-caused changes or actions that increased the cost or time of performance' },
            { term: 'Contract Disputes Act', definition: 'Federal statute establishing the process for resolving contractor claims against the government, including appeals to the Armed Services Board of Contract Appeals (ASBCA) or Court of Federal Claims' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Train your entire team — engineers, production leads, subcontract managers — that only the Contracting Officer can authorize changes to the contract; a program office PM or end user cannot. 2. When government personnel provide informal technical direction that may exceed contract scope, document it in writing immediately — a same-day email to the government representative confirming the direction creates a contemporaneous record. 3. Build your COR relationship carefully — they are often your day-to-day technical interface and a strong COR who has your back can resolve minor issues before they escalate to the CO.',
        },
      ],
    },
    {
      id: 'doa-m3-l3',
      title: 'Building the Working Relationship: Partnership with Someone Who Has Enforcement Authority',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The government-contractor relationship is unlike any commercial customer relationship. Your customer can terminate your contract, withhold payment, issue cure notices, and refer your conduct to the Department of Justice. They can also provide you decades of rewarding work, strong past performance ratings, and a reference that opens doors to new opportunities. The quality of this relationship is not incidental to program success — it is a core program variable.',
        },
        {
          type: 'heading' as const,
          text: 'What Commercial Customer Management Gets Wrong',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Program managers with commercial backgrounds often import customer management techniques that work poorly in the government context. Relationship-building social events, exclusive information access, expedited treatment because of long tenure — these commercial instincts can create ethics concerns in the government environment. Government employees operate under strict ethics rules. Meals above a threshold, gifts, or even the appearance of preferential treatment can create problems for both the government employee and the contractor.',
        },
        {
          type: 'paragraph' as const,
          text: 'The government customer does not want to be managed. They want to be served — technically, contractually, and professionally. The relationship-building that works is about demonstrated competence and reliability, not social cultivation.',
        },
        {
          type: 'heading' as const,
          text: 'The Anatomy of a Strong Government-Contractor Relationship',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'No surprises: The government customer hears about problems from you before they hear about them from their own metrics or from higher authority',
            'Credible commitments: When you say something will be done by a date, it is done by that date — or you notify them early with a revised date and a reason',
            'Technical authority: Your technical team is respected by the government technical staff; when your engineers say something is not feasible, the government believes them',
            'Transparency on risk: You surface risks proactively, with your risk rating and your proposed mitigation — not just a problem statement',
            'Contractual discipline: Your CDRLs are on time and complete, your invoices are accurate, your EVMS reports are timely — the administrative machinery of the program works',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'What Good Looks Like',
          text: 'The best government-contractor relationships are characterized by a specific behavior pattern on the government side: the CO or PM calls the contractor when they have a problem before they have written it up. "Hey, I am getting questions from my boss about the CDR action item closeout rate — can we get on a call before I have to respond upward?" That call means the government customer views the contractor as a partner in solving the problem, not as the source of the problem. It takes 12-18 months of consistent, reliable, transparent performance to earn that relationship.',
        },
        {
          type: 'heading' as const,
          text: 'When the Relationship Goes Wrong',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'A deteriorating government-contractor relationship follows a recognizable escalation pattern. It starts with missed commitments that the contractor explains away rather than owns. Then come formal written communications replacing phone calls and informal coordination. Then a surveillance intensity increase from DCMA. Then a Program Review where the government brings more senior people than usual. By the time you see a cure notice, you are at stage five of a six-stage escalation — and stage six is termination for default.',
        },
        {
          type: 'paragraph' as const,
          text: 'The reversal is possible but hard. It requires a genuine change in behavior — not a better slide deck about how things are going to improve, but actual performance improvement that the government can observe over 60-90 days. The best recovery strategy is to bring in a PM with a strong reputation in the customer community, give them real authority, and let them own the recovery without the old PM in the room second-guessing them.',
        },
        {
          type: 'heading' as const,
          text: 'Past Performance: The Long Shadow of Every Program',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Every defense contract generates a past performance record. The Contractor Performance Assessment Reporting System (CPARS) captures the government\'s assessment of your technical performance, schedule performance, cost control, management, and small business compliance. These ratings follow you into every future competitive proposal. A pattern of "Marginal" or "Unsatisfactory" ratings on a contract type or mission area is very difficult to overcome in future source selections for similar work.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'CPARS', definition: 'Contractor Performance Assessment Reporting System — the federal database where government customers record their official assessment of contractor performance after each period of performance' },
            { term: 'PPIRS', definition: 'Past Performance Information Retrieval System — the government system where source selection officials retrieve contractor past performance records; now integrated with CPARS' },
            { term: 'Termination for Convenience', definition: 'A government contract termination at the government\'s election for any reason; contractor is entitled to reimbursement of costs incurred and a reasonable profit — not a default finding' },
            { term: 'Termination for Default', definition: 'A government contract termination due to contractor failure to perform — can result in the contractor being liable for re-procurement costs and creates a negative past performance record' },
            { term: 'KSA', definition: 'Key Sub-Award — a significant subcontract whose performance is tracked by DCMA and the prime contractor as part of overall program risk management' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. The government customer who calls you when they have a problem (rather than after they have written it up) is the relationship you are trying to build — track that behavior as a leading indicator of relationship health. 2. CPARS ratings are permanent — a Marginal rating on a $5M contract will cost you far more in future lost work than the $5M contract was worth; treat every program as a past performance investment. 3. When a relationship starts to deteriorate, the PM is usually the first thing that needs to change — institutional loyalty to an incumbent PM who has lost the customer\'s confidence is one of the most expensive mistakes in defense contracting.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'doa-m3-q1',
      type: 'multiple-choice' as const,
      question: 'During an unannounced DCMA production surveillance visit, the representative observes nonconformances being stored on the production floor without proper tags. What is the most likely first-level consequence?',
      options: [
        'Immediate contract termination for default',
        'A show cause notice requiring a response within 10 days',
        'A Quality Assurance Letter of Instruction (QALI) requesting corrective action',
        'A financial penalty equal to 10% of the contract value',
      ],
      correctIndex: 2,
      explanation: 'The first-level DCMA response to a process or quality finding is typically a QALI — a documented notice identifying the finding and requesting corrective action. Escalation to a CDR, show cause notice, or cure notice requires a pattern of noncompliance or failure to respond to initial findings.',
    },
    {
      id: 'doa-m3-q2',
      type: 'true-false' as const,
      question: 'True or False: A Contracting Officer Representative (COR) has the authority to direct the contractor to perform work outside the current contract scope as long as the CO is notified within 30 days.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. A COR cannot authorize changes to contract scope, price, or terms regardless of any notification timeline. Only the Contracting Officer has that authority. Performing work at COR direction that is outside current scope creates unauthorized cost exposure that may not be reimbursable.',
    },
    {
      id: 'doa-m3-q3',
      type: 'multiple-choice' as const,
      question: 'A government program manager calls and says "Start on the new interface design now — I\'ll get the modification in place in a few weeks." What is the correct response?',
      options: [
        'Begin immediately — responsiveness to the customer is critical and the PM\'s word is sufficient',
        'Begin work but document all hours separately so they can be billed once the modification arrives',
        'Decline to begin work; confirm in writing that you are ready to start upon receipt of a signed modification or other written authorization from the Contracting Officer',
        'Begin work and notify the Contracting Officer informally by phone',
      ],
      correctIndex: 2,
      explanation: 'The only correct response is to decline to begin until there is written authorization from the Contracting Officer. Documenting hours separately does not protect you — costs incurred on unauthorized work may be entirely disallowed. The professional approach is to confirm your readiness in writing and ask for the modification, not to begin on a verbal direction.',
    },
    {
      id: 'doa-m3-q4',
      type: 'multiple-choice' as const,
      question: 'Which of the following behaviors characterizes a healthy government-contractor working relationship?',
      options: [
        'The government customer attends regular social events hosted by the contractor',
        'The government customer calls the contractor when they have a problem before they have written it up formally',
        'The government customer rarely conducts surveillance visits because trust has been established',
        'The contractor provides the government customer with early access to proprietary data on competitive programs',
      ],
      correctIndex: 1,
      explanation: 'The behavioral indicator of a strong government-contractor relationship is that the government customer contacts the contractor informally when they have a concern — before the formal written escalation. This means they view the contractor as a problem-solving partner. Social events create ethics risk, reduced surveillance is not how the government expresses trust, and sharing proprietary competitive data is prohibited.',
    },
    {
      id: 'doa-m3-q5',
      type: 'multiple-choice' as const,
      question: 'A "Termination for Default" is most directly distinguished from a "Termination for Convenience" by:',
      options: [
        'The amount of reimbursement the contractor receives — both result in full payment',
        'Termination for Default is a finding of contractor failure; the contractor may owe re-procurement costs and receives a negative past performance record',
        'Termination for Convenience can only be issued by the Secretary of Defense',
        'Termination for Default requires a congressional notification while Termination for Convenience does not',
      ],
      correctIndex: 1,
      explanation: 'A Termination for Default is a formal finding that the contractor failed to perform. It can result in the contractor owing the government re-procurement costs (the cost the government incurred to re-award the work elsewhere) and creates a documented negative past performance record. A Termination for Convenience is the government\'s right to end a contract at will — the contractor is compensated for costs incurred and reasonable profit, with no default finding.',
    },
    {
      id: 'doa-m3-q6',
      type: 'multiple-choice' as const,
      question: 'CPARS ratings are important to a defense contractor because:',
      options: [
        'They directly determine the contractor\'s indirect rate structure for future contracts',
        'They are used by source selection officials to evaluate past performance in future competitive proposals',
        'They are required for a contractor to maintain its facility security clearance',
        'They determine which contract types the government will offer in future solicitations',
      ],
      correctIndex: 1,
      explanation: 'CPARS ratings are the official record of contractor performance used in source selection evaluations. Past performance is typically a significant evaluation factor in competitive source selections. Poor CPARS ratings in a relevant mission area or contract type can disqualify or significantly disadvantage a contractor in future competitions.',
    },
  ],
};

const module4 = {
  id: 'doa-m4',
  number: 4,
  title: 'Putting It Together: Program Scenarios and Applied Decision-Making',
  description: 'Capstone module applying the lifecycle, contract, and customer knowledge from the first three modules to realistic program scenarios. Includes a comprehensive assessment.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Apply program lifecycle knowledge to diagnose a program in early distress',
    'Identify contract-type-appropriate responses to cost and schedule variances',
    'Recognize the appropriate communication strategy when engaging the government customer on bad news',
    'Synthesize lifecycle, contract, and customer knowledge into an integrated program management perspective',
  ],
  lessons: [
    {
      id: 'doa-m4-l1',
      title: 'Scenario Workshop: The Horizon-7 Program',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The following scenario is fictional but constructed from real program failure patterns. Work through each decision point before reading the analysis. The decisions faced by this program manager are representative of what actually happens in the first year of a defense hardware program.',
        },
        {
          type: 'heading' as const,
          text: 'The Scenario',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'You are the Program Manager for Horizon-7, a defense electronics integration contract awarded eight months ago. The contract is FFP, $22.4M, 36-month period of performance. The deliverable is an integrated communications and data link suite for a new ground vehicle platform — hardware, embedded software, and supporting test equipment. CDR is scheduled for month 18. You have ten months until CDR.',
        },
        {
          type: 'heading' as const,
          text: 'Decision Point 1: The Interface Discovery',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Your lead systems engineer brings you a problem. The proposal assumed 23 external interfaces — connections to vehicle power, vehicle data bus, external radios, and the operator display. A detailed interface analysis completed last week shows 31 interfaces — 8 more than assumed. The additional interfaces are primarily with a legacy vehicle subsystem that was documented in the SOW but whose interface complexity was underestimated during proposal. The proposal schedule and budget assumed 23 interfaces at all points downstream — test, documentation, integration.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Analysis',
          text: 'This is the same pattern as the satellite ground system war story from Module 1. You are at month 8 — you still have 10 months before CDR. You have maximum flexibility right now. The question is not whether this will cost more and take more time — it will. The question is whether you surface it to the government now, while you have time to negotiate, or whether you try to absorb it and hope. The math on absorbing it is bad: 8 additional ICDs on a 23-ICD baseline is a 35% increase in interface complexity. On an FFP contract, you own every dollar of that overrun if you do not get a modification.',
        },
        {
          type: 'heading' as const,
          text: 'Decision Point 2: The Government Customer Conversation',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'You decide to surface the interface discovery to the government. You schedule a meeting with the Contracting Officer and the Program Manager. How do you frame the conversation? What do you NOT do?',
        },
        {
          type: 'list' as const,
          items: [
            'DO: Come with data — show the 23-ICD proposal baseline and the 31-ICD current count, with documentation of each new interface and its source in the SOW',
            'DO: Bring your preliminary assessment of schedule and cost impact — you do not need the final number, but you need an order-of-magnitude estimate',
            'DO: Propose a path forward — a short technical study (2-3 weeks) to firm up the impact, followed by a modification request',
            'DO NOT: Frame this as "the government changed the requirements" — the interfaces were in the SOW; you underestimated them',
            'DO NOT: Ask for more money before you have a detailed basis of estimate — you will lose credibility',
            'DO NOT: Wait until the next scheduled program review — this warrants a separate meeting',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Decision Point 3: The Staffing Pressure',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'While the interface issue is being worked, your hardware lead tells you that two senior engineers have resigned to take positions at a competitor. You have open requisitions but no candidates in the pipeline. The schedule assumes these positions are filled within 45 days. You are now at risk of a gap. Do you authorize overtime for remaining staff to cover? Do you escalate to the government?',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Analysis',
          text: 'On an FFP program, overtime comes directly from margin. Authorizing structural overtime to cover open requisitions is a bridge loan from your margin account. It buys time — at a cost. The right approach is a two-track response: accelerate recruiting with urgency, and authorize targeted overtime for specific critical-path tasks only. You do not need to inform the government of staffing turnover unless it is affecting schedule milestones — this is a management event, not a contractual event. But if the schedule starts to slip as a result, that becomes a contractual issue you are required to report.',
        },
        {
          type: 'heading' as const,
          text: 'Decision Point 4: The Verbal Acceleration Request',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The government program manager calls you informally. The vehicle integration schedule has been moved up. She needs CDR to happen at month 15 instead of month 18 — three months earlier. She says, "I know this is a stretch, but the program office really needs this. Can you make it work? I\'ll get it into a mod." What do you say?',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Analysis',
          text: 'You do not commit to an accelerated CDR in a phone conversation. You say: "I want to support the vehicle integration schedule. Let me do a rapid schedule analysis over the next five business days and come back to you with what CDR at month 15 would require — both technically and in terms of resources. Can we schedule a follow-up briefing for day six?" This buys you analysis time, keeps you responsive without making an uninformed commitment, and positions the conversation for a substantive bilateral modification discussion rather than an informal verbal direction. If the acceleration is technically feasible with additional resources on an FFP contract, those additional resources need to be compensated — you cannot absorb an acceleration without a cost impact.',
        },
        {
          type: 'simulation' as const,
          simulationId: 'horizon-7-decision-tree',
          title: 'Horizon-7 Decision Simulation',
          description: 'Work through a branching decision tree for the Horizon-7 program. Choose responses to each decision point and see the downstream consequences of your choices on schedule, cost, and customer relationship.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. Real program problems arrive as management decision points, not as test questions — practice the instinct to pause, analyze, and respond with data rather than react. 2. Early disclosure of scope discoveries always outperforms late disclosure in terms of contract outcomes and customer relationship health. 3. The right answer to a verbal acceleration request is never "yes" or "no" on the call — it is always "let me analyze and get back to you in X days."',
        },
      ],
    },
    {
      id: 'doa-m4-l2',
      title: 'The Integrated View: What Good Program Management Looks Like in Practice',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The three modules of this course — program lifecycle, contract mechanics, and the government customer relationship — are not separate knowledge domains. They are different facets of the same problem. Every technical decision has contractual implications. Every contractual event has customer relationship dimensions. Every customer relationship dynamic affects what technical and contractual options are available to you. The program manager who sees only one of these dimensions is permanently surprised by the other two.',
        },
        {
          type: 'heading' as const,
          text: 'The Integration: A Decision Framework',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'When you face a program management decision — a scope discovery, a schedule slip, a quality finding, a subcontractor problem — run it through three lenses simultaneously:',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Lifecycle lens: Where are we in the program? What gate is approaching? How does this affect our ability to pass that gate? What is the cost of delay at this stage vs. earlier or later?',
            'Contract lens: What does this do to our cost position? What is the contract type and how does the variance mechanism work? Does this require a modification? Is there a notification requirement I am not meeting?',
            'Customer lens: Does the government know about this? Should they? How does it affect their program? When should I tell them, and how? What do I need to give them when I do — just the problem or the problem plus the solution?',
          ],
        },
        {
          type: 'heading' as const,
          text: 'The Metrics That Actually Matter',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Experienced defense program managers track a short list of leading indicators that tell them where a program is heading before the formal EVMS metrics confirm it. These are the metrics that matter:',
        },
        {
          type: 'table' as const,
          headers: ['Metric', 'What It Tells You', 'Leading or Lagging?'],
          rows: [
            ['ICD / Interface Count Growth Rate', 'How fast the integration complexity is expanding beyond the proposal baseline', 'Leading — shows scope creep early'],
            ['Open Action Items at Technical Reviews', 'Whether the program is resolving issues or accumulating them', 'Leading — unresolved AIs compound'],
            ['CDRL On-Time Rate', 'Whether the program team can meet commitments; documentation discipline reflects execution discipline', 'Leading — early indicator of management capability'],
            ['Subcontractor Schedule Variance', 'Whether your supply chain is holding the schedule you planned; sub slips are often the first schedule problem to surface', 'Leading — prime schedule impact follows sub slips by 4-8 weeks'],
            ['SPI (Schedule Performance Index)', 'How efficiently you are accomplishing planned work; below 0.95 for more than two months is a serious warning', 'Lagging — reflects work already done'],
            ['CPI (Cost Performance Index)', 'Whether you are spending more or less than planned to accomplish the work; CPI below 0.95 for more than two months typically indicates a structural problem', 'Lagging — reflects cost already incurred'],
            ['Government Call-to-Write Ratio', 'The ratio of informal phone calls to formal written communications from your government customer; more writing, fewer calls signals a deteriorating relationship', 'Leading — relationship indicator visible before formal escalation'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'What Separates Good Program Managers from Average Ones',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The technical knowledge in this course — lifecycle gates, contract types, DCMA surveillance — is necessary but not sufficient. The defense program managers who consistently perform share a set of behavioral habits that are less teachable but more decisive:',
        },
        {
          type: 'list' as const,
          items: [
            'They close issues — every open item has an owner, a date, and a status. They do not let issues accumulate.',
            'They tell the truth faster than anyone is comfortable with — they surface bad news before being asked, with data, and with a proposed solution.',
            'They know their numbers — not just the EVMS summary, but the material cost variances, the specific subcontract that is late, the labor category that is over-running.',
            'They treat the government customer as an adult — they do not spin, do not over-promise, do not manage the relationship by managing the information the customer receives.',
            'They build teams that can execute without them — a program that depends entirely on the PM\'s personal knowledge to function is a single point of failure.',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'A Final Note on Culture',
          text: 'The biggest enabler of defense program management is an organizational culture where bad news travels fast and upward. When a PM knows that surfacing a problem early will be met with "thanks for the early warning, what do you need?" rather than "why didn\'t you handle this yourself?", they surface it early. When they know the answer will be "why are you bringing me problems?", they hide it. The programs that succeed have leadership cultures where early disclosure is rewarded, even when the news is bad. That culture is built one reaction at a time.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: '1. The integrated view — lifecycle + contract + customer simultaneously — is the actual cognitive job of a defense program manager; build the habit of running each significant decision through all three lenses. 2. Leading indicators matter more than lagging ones — track ICD growth, open action item age, and CDRL on-time rate weekly; they will tell you what your EVMS will confirm in 60 days. 3. Culture determines whether program managers tell the truth fast enough to matter; if your organization punishes early disclosure of bad news, fix that first.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'doa-m4-q1',
      type: 'multiple-choice' as const,
      question: 'In the Horizon-7 scenario, when the interface count grew from 23 to 31 at month 8, what was the most important reason to disclose this to the government immediately rather than waiting until CDR?',
      options: [
        'FAR regulations require disclosure of all scope discoveries within 30 days',
        'Month 8 provided 10 months before CDR — maximum time to negotiate a modification and implement solutions; waiting until CDR eliminates that flexibility',
        'The Contracting Officer would discover the discrepancy during the next DCMA surveillance visit',
        'Immediate disclosure reduces the contractor\'s legal liability under the False Claims Act',
      ],
      correctIndex: 1,
      explanation: 'The primary reason to disclose early is optionality. At month 8 with 10 months before CDR, there is time to negotiate a modification, adjust the design approach, and incorporate the additional interfaces into the CDR preparation. At CDR, those options are gone — you either pass with an under-scoped design or fail CDR with all the associated consequences. Early disclosure is about maximizing the solution space, not about legal compliance.',
    },
    {
      id: 'doa-m4-q2',
      type: 'multiple-choice' as const,
      question: 'When the government PM calls to request accelerating CDR from month 18 to month 15, the recommended response is:',
      options: [
        'Agree immediately to demonstrate customer responsiveness — you can always request relief later',
        'Decline immediately — no contract change is possible without the Contracting Officer\'s formal direction',
        'Say you want to support the schedule; commit to a 5-day analysis and follow-up briefing before making any commitment',
        'Agree in principle subject to a bilateral modification; ask the PM to send the verbal authorization in email',
      ],
      correctIndex: 2,
      explanation: 'The correct response is to stay responsive without making an uninformed commitment. Five business days to analyze the impact and brief the results is professional and supportive while avoiding the trap of committing to something you have not analyzed. An email from the program manager is not a contract modification — only the CO can authorize a schedule change. Option D\'s approach to verbal authorization still does not solve the problem.',
    },
    {
      id: 'doa-m4-q3',
      type: 'multiple-choice' as const,
      question: 'Which of the following is described as a LEADING indicator of program health (i.e., it predicts future performance rather than reflecting past performance)?',
      options: [
        'Cost Performance Index (CPI)',
        'Schedule Performance Index (SPI)',
        'ICD / Interface Count Growth Rate',
        'Actual Cost of Work Performed (ACWP)',
      ],
      correctIndex: 2,
      explanation: 'ICD growth rate is a leading indicator because it shows integration complexity expanding before that complexity manifests as schedule slips and cost overruns. CPI and SPI are lagging indicators — they measure work already performed. ACWP is entirely lagging. The leading indicators described in the lesson (ICD count, open AIs, CDRL on-time rate, subcontractor schedule variance) give you information about where the program is heading before the EVMS metrics confirm it.',
    },
    {
      id: 'doa-m4-q4',
      type: 'true-false' as const,
      question: 'True or False: A program showing a CPI of 0.98 for the first six months of execution can be considered financially healthy.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False — but not for the reason most people think. A CPI of 0.98 means you are spending 2% more than planned for the work accomplished, which is a small variance. However, if the Performance Measurement Baseline was itself unrealistic (the total budget was insufficient), a CPI near 1.0 just means you are efficiently spending your way to a structural overrun. CPI measures execution efficiency against the baseline, not the adequacy of the baseline. This is the same point made in Module 1 about EVMS limitations.',
    },
    {
      id: 'doa-m4-q5',
      type: 'multiple-choice' as const,
      question: 'The "Government Call-to-Write Ratio" metric tracks the ratio of informal phone calls to formal written communications from your government customer. A declining ratio (fewer calls, more writing) is a signal that:',
      options: [
        'The government customer is managing more programs and has less time for informal communication',
        'The relationship is healthy because formal documentation is replacing informal assumptions',
        'The relationship is deteriorating; formal written communications typically precede escalation',
        'The program is in a documentation-intensive phase such as CDR preparation',
      ],
      correctIndex: 2,
      explanation: 'More formal writing and fewer informal calls is a relationship deterioration signal. Government customers who trust their contractor and view the relationship as a partnership communicate informally and frequently. When trust erodes — typically due to missed commitments or surprises — communications shift to formal writing, which creates a record and signals potential escalation. This is a leading indicator that becomes visible before a formal finding or cure notice.',
    },
    {
      id: 'doa-m4-q6',
      type: 'multiple-choice' as const,
      question: 'Which behavioral characteristic most distinguishes high-performing defense program managers from average ones, according to the course?',
      options: [
        'Expertise in EVMS metrics calculation and reporting',
        'Deep technical knowledge of the specific system being developed',
        'They surface bad news before being asked, with data, and with a proposed solution',
        'They maintain strong social relationships with government program office staff',
      ],
      correctIndex: 2,
      explanation: 'The defining behavioral habit of high-performing defense PMs is the willingness and discipline to tell the truth faster than is comfortable — surfacing problems early, with supporting data, and with a proposed solution in hand. Technical expertise, EVMS competence, and customer relationships all matter, but the "truth fast + data + solution" pattern is the most decisive differentiator because it determines whether problems are solved when they are cheap to fix or when they are expensive to recover.',
    },
    {
      id: 'doa-m4-q7',
      type: 'multiple-choice' as const,
      question: 'In the Horizon-7 scenario, two senior engineers resign and you are facing open positions on an FFP program. What is the most appropriate approach to overtime authorization?',
      options: [
        'Authorize broad overtime immediately for all remaining staff to cover the gap',
        'Do not authorize any overtime — on FFP, every overtime dollar is a loss',
        'Authorize targeted overtime for specific critical-path tasks only while accelerating recruiting',
        'Notify the Contracting Officer of the staffing situation and request a schedule extension',
      ],
      correctIndex: 2,
      explanation: 'The right approach is surgical: targeted overtime for critical-path items only, while accelerating recruiting. Broad overtime burns margin without necessarily protecting the schedule (not all tasks are on the critical path). Zero overtime ignores real schedule risk. Government notification is not required for a staffing event that has not yet affected schedule milestones — if it later affects milestones, that is when notification becomes appropriate.',
    },
    {
      id: 'doa-m4-q8',
      type: 'multiple-choice' as const,
      question: 'CAPSTONE SCENARIO: The Argus-9 program is a 28-month CPFF development contract currently in month 9. EVMS shows CPI of 1.02 and SPI of 0.94. DCMA has issued two QALIs in the past 60 days, both related to nonconformance documentation. The government COR has stopped calling informally and all communications in the last three weeks have been written. CDR is at month 15 — six months away. What is the highest-priority action for the Argus-9 program manager?',
      options: [
        'Address the EVMS schedule variance — SPI of 0.94 indicates the program is behind schedule',
        'Request additional funding to address the cost efficiency issues before they worsen',
        'Address the DCMA QALI findings and the communication pattern change — these are early relationship and compliance deterioration signals requiring immediate attention',
        'Accelerate CDR preparation to demonstrate technical progress to the government customer',
      ],
      correctIndex: 2,
      explanation: 'The highest priority is the relationship and compliance signals. CPI of 1.02 and SPI of 0.94 are acceptable variances. But two QALIs in 60 days plus a shift from informal calls to all-written communication is a multi-signal pattern indicating early relationship deterioration. These signals precede formal escalation by weeks. The PM should immediately engage the DCMA CMO on the QALI root causes with a credible corrective action plan, and separately engage the COR directly — informally, by phone — to understand what is driving the communication pattern change. Accelerating CDR without addressing the underlying issues just accelerates the timeline to a CDR problem.',
    },
  ],
};

export const defenseOpsAwarenessCourse: Course = {
  id: 'defense-ops-awareness',
  track: 'defense-contracting',
  title: 'How Defense Programs Actually Work',
  subtitle: 'Track B · Level 1 · Operations Awareness',
  description: 'Built for program managers and operations leads who are new to the defense environment or who have been executing contracts without a clear view of the full picture. Covers the defense program lifecycle from RFP through first delivery, contract types from the perspective of the person responsible for delivering on them, the role of DCMA and the Contracting Officer, and how to build a functional working relationship with a government customer who has enforcement authority. Grounded in real program failure patterns and war stories from aerospace manufacturing and defense electronics.',
  status: 'available',
  estimatedHours: 4,
  color: '#5a6e8a',
  icon: '⚙️',
  modules: [module1, module2, module3, module4],
};
