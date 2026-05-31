import type { Course } from '../../types/course';

export const defenseOpsPracticalCourse: Course = {
  id: 'defense-ops-practical',
  track: 'defense-contracting',
  title: 'Executing a Defense Contract',
  subtitle: 'Track B · Level 2 · Operations Practical',
  description: 'The fundamentals course taught you how defense contracting works. This course teaches you how to actually execute. Program planning, configuration management, quality systems, and customer relationship management under pressure — told by people who have been through the hard parts and can explain what actually matters versus what sounds good in a proposal.',
  status: 'available',
  estimatedHours: 7,
  color: '#5a6e8a',
  icon: '📋',
  modules: [
    // ─────────────────────────────────────────────
    // MODULE 1 — Program Planning Fundamentals
    // ─────────────────────────────────────────────
    {
      id: 'ops-b2-m1-planning',
      number: 1,
      title: 'Program Planning Fundamentals',
      description: 'Build schedules that are both compliant and executable, manage your CDRL delivery obligations before they become fire drills, and understand the relationship between your IMS, your CDRL schedule, and your resource plan.',
      estimatedMinutes: 80,
      learningObjectives: [
        'Distinguish between an IMP and an IMS and explain how they relate to each other',
        'Build a schedule that satisfies government review criteria without sacrificing realistic execution',
        'Describe what a CDRL is, what a DID specifies, and how to set up a tracking system that prevents missed deliveries',
        'Explain the resource-loading requirements of a compliant IMS and the consequences of not meeting them',
      ],
      lessons: [
        {
          id: 'ops-b2-m1-l1-ims',
          title: 'IMP/IMS — Building a Schedule the Government Will Accept and You Can Execute',
          estimatedMinutes: 30,
          content: [
            {
              type: 'paragraph',
              text: 'Every defense program of any complexity requires an Integrated Master Plan (IMP) and an Integrated Master Schedule (IMS). Most program managers treat these as compliance documents — you build them once, submit them, and then run the program from a separate internal schedule that reflects reality. That approach is a slow-moving disaster. When your IMS diverges from how work actually gets done, you lose the one tool that would have warned you about a schedule problem three months before it became a crisis.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'IMP', definition: 'Integrated Master Plan — the top-level program plan that defines the significant accomplishments (SAs), accomplishment criteria (ACs), and program events (PEs) that must occur for the program to progress. The IMP is event-driven, not time-phased.' },
                { term: 'IMS', definition: 'Integrated Master Schedule — the time-phased network schedule that implements the IMP. Every IMP accomplishment criterion maps to one or more IMS tasks. The IMS shows sequence, duration, dependencies, and resource loading.' },
                { term: 'SA', definition: 'Significant Accomplishment — a discrete, verifiable result that demonstrates progress toward a program event. SAs are the backbone of the IMP.' },
                { term: 'AC', definition: 'Accomplishment Criteria — the specific, objective evidence that confirms an SA has been completed. "Design is complete" is not an AC. "PDR entrance criteria checklist is 100% satisfied and PDR board has approved" is an AC.' },
                { term: 'PE', definition: 'Program Event — a contractually significant milestone such as CDR, PDR, or a delivery. Program events are defined in the contract and drive the IMP structure.' },
                { term: 'CDR', definition: 'Critical Design Review — the formal technical review at which the design is proven mature enough to proceed into production. CDR entrance and exit criteria are typically defined in the contract.' },
              ],
            },
            {
              type: 'heading',
              text: 'The Compliance Trap vs. The Execution Schedule',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Government schedule reviewers — typically a DCMA (Defense Contract Management Agency) analyst — will check your IMS against a set of established criteria called the DCMA 14-Point Assessment. They are looking at things like logic gaps (tasks with no predecessors or successors), tasks that are longer than the allowed maximum duration, missing resource loading, and negative float. If you build a schedule just to pass these checks, you can do it. You will have a schedule that is technically compliant but does not reflect how work actually flows through your program. That creates a different problem: when DCMA comes back six months later and runs the same checks, your percent complete data will not track with your burn rate and your earned value will be meaningless. At that point you have a compliance problem and a credibility problem simultaneously.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The DCMA 14-Point Assessment',
              text: 'DCMA\'s standard IMS health check examines: (1) Logic — are all tasks connected? (2) Leads — are there unauthorized lead relationships? (3) Lags — are lags excessive or unexplained? (4) Relationship types — are finish-to-start relationships used appropriately? (5) Total float — are there paths with too much or too little float? (6) Negative float — are any paths behind schedule? (7) High duration — are any tasks longer than 44 working days without justification? (8) Invalid dates — are there constraint dates that override logic? (9) Resources — are tasks resource-loaded? (10) Missed tasks — are any in-progress or complete tasks still showing future start dates? (11) Critical path — does the critical path make program sense? (12) Critical path length index (CPLI) — what is the schedule health ratio? (13) Baseline execution index (BEI) — are incomplete tasks being completed as planned? (14) Incomplete tasks with actual finish dates — are completed tasks properly closed?',
            },
            {
              type: 'heading',
              text: 'Building a Schedule That Is Both Compliant and Executable',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The way you reconcile compliance and executability is to build from the work, not from the review criteria. Start with the actual sequence of work: what must be done before what, who has to do it, and how long does it realistically take. Resource-load it with real people and real hours. Then run the DCMA checks against the schedule you built and fix actual logic problems. You will find that a properly constructed work-breakdown-driven schedule passes most DCMA checks naturally — because the checks were designed to identify real schedule integrity problems, not to generate compliance busywork.',
            },
            {
              type: 'table',
              headers: ['Compliant-Only Schedule', 'Compliant + Executable Schedule'],
              rows: [
                ['Built to pass the 14-point check', 'Built from the work breakdown, then verified against the check'],
                ['Tasks sized to be under 44 days regardless of actual work', 'Tasks sized by actual work content, decomposed where needed for visibility'],
                ['Resources assigned as generic roles to satisfy the check', 'Resources assigned to named individuals with actual availability'],
                ['Logic driven by what looks right to a reviewer', 'Logic driven by actual technical and physical dependencies'],
                ['Maintained separately from how work is actually tracked', 'Used as the single schedule for internal tracking AND government reporting'],
                ['Diverges from reality within 60–90 days of program start', 'Requires discipline to maintain but remains the source of truth throughout'],
              ],
            },
            {
              type: 'heading',
              text: 'Schedule Margin and the Government Customer',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Schedule margin — time reserved to absorb unexpected problems — is legitimate and necessary on any complex defense program. The question is whether you can defend it to a government customer. Management reserve and schedule reserve both exist in the FAR/DFARS framework, but a government customer who sees 15% schedule margin in your IMS is going to ask questions. The answer is not to hide the margin in task durations (that is called "schedule padding" and it invalidates your earned value data). The answer is to have a documented schedule risk analysis that justifies the reserve you carry. If you have performed a Monte Carlo simulation on your schedule and can show that 15% margin achieves an 80th-percentile completion date, you have a defensible answer. If you just added time because "we always need more time," that is not defensible.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Float Is Not Free Time',
              text: 'Total float on a non-critical path task does not mean that task can slip. When a downstream task pulls that float, your critical path changes. On a complex defense program with hundreds of tasks, critical path changes can happen without anyone noticing until a path that had 30 days of float suddenly has zero. Review the top 10 longest float paths monthly. Float erosion patterns tell you where your next schedule crisis is forming.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you are a small or mid-size defense contractor, you probably cannot afford a dedicated scheduler. That is fine — what you cannot afford is to treat the IMS as a government deliverable rather than a management tool. Assign someone who understands the actual work to own the schedule. Update it weekly. When a task slips, update the schedule the day you know it slipped, not when you think you can recover it. The schedule integrity you maintain in month three is the credibility you draw on when you need to negotiate a schedule change in month eighteen.',
            },
          ],
        },
        {
          id: 'ops-b2-m1-l2-cdrl',
          title: 'CDRLs — What They Are and How to Never Miss One',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'A Contract Data Requirements List (CDRL) is the contract mechanism that specifies every deliverable document, report, or data item your contract requires you to produce. It is not a suggested list of nice-to-haves. Missing a CDRL delivery is a contract compliance failure. It goes into the contractor\'s performance record. It can trigger cure notices. And it is almost entirely preventable with a basic tracking system.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'CDRL', definition: 'Contract Data Requirements List — the DD Form 1423 listing of each data deliverable required under the contract, including format, frequency, distribution, and approval requirements.' },
                { term: 'DI / DID', definition: 'Data Item Description — the government document that specifies the format, content, and preparation instructions for a particular data deliverable type. The CDRL references a DID for each line item.' },
                { term: 'DD Form 1423', definition: 'The standard government form used to document each CDRL line item. It specifies the data item title, DID number, submission frequency, distribution, and any tailoring instructions.' },
                { term: 'Tailoring', definition: 'Government-authorized modification of a DID requirement to reduce scope, eliminate sections, or substitute alternative formats. Tailoring must be explicitly noted on the DD 1423 and agreed in the contract.' },
                { term: 'CDRL Package', definition: 'The complete set of all DD 1423 forms for a contract, representing the full data deliverable obligation.' },
              ],
            },
            {
              type: 'heading',
              text: 'How CDRLs Work in Practice',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Each line item on the CDRL references a DID. The DID tells you exactly what the document must contain. Your obligation is to produce a document that satisfies the DID requirements unless tailoring is explicitly noted on the DD 1423. Government customers who receive a CDRL deliverable that does not meet the DID requirements will return it as "not acceptable" — and the clock on your next submission may or may not restart depending on how the contract is written. Some contracts allow one revision; others treat a returned CDRL as a missed delivery.',
            },
            {
              type: 'table',
              headers: ['CDRL Type', 'Examples', 'Typical Frequency', 'Key Risk'],
              rows: [
                ['Plans', 'Systems Engineering Management Plan, Quality Management Plan, Configuration Management Plan', 'Once with updates at major milestones', 'Plan is submitted but never updated — becomes contractually inconsistent with how the program is actually run'],
                ['Reports', 'Monthly Status Report, Problem/Failure Report, Financial Management Report', 'Monthly or event-driven', 'Missed dates accumulate quietly — no single miss seems catastrophic until a PMR'],
                ['Technical Documentation', 'System/Subsystem Specification, Interface Control Document, Software Design Document', 'At design reviews or as revised', 'Document submitted without addressing all DID requirements — returned as not acceptable'],
                ['Test Documentation', 'Test Plan, Test Procedures, Test Report', 'At test milestones', 'Test report not matching the approved test procedures creates audit problems'],
                ['Drawings and Models', 'Engineering drawings, CAD models, parts lists', 'At design maturity gates', 'Delivered without configuration identification — creates CM traceability gaps'],
                ['Training Materials', 'Operator manuals, maintenance manuals, training curricula', 'Prior to first delivery or fielding', 'Frequently treated as last-priority — often not started until three months before due'],
              ],
            },
            {
              type: 'heading',
              text: 'Building a CDRL Tracking System',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The minimum viable CDRL tracking system is a single spreadsheet with one row per CDRL line item and columns for: DID number, description, due date, responsible author, review milestone, submission date, government acceptance date, and notes. That is it. The system is trivial. The discipline is not. Somebody has to own the CDRL register, update it weekly, and escalate when a deliverable is at risk. On a program with 40+ CDRLs, that is a part-time job.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: 47 CDRLs, No Tracking System',
              text: 'A program manager at a mid-size electronics integrator inherited a contract mid-execution. The contract had 47 CDRL line items. The previous PM had maintained no tracking system — the theory was that the contracts manager would catch anything that slipped. At the first program management review after the new PM took over, the government contracting officer\'s representative (COR) presented a spreadsheet showing 12 CDRLs that were between 30 and 90 days past their due dates. The PM had no idea. Three of the overdue CDRLs were monthly status reports — meaning they had been late every month for three months and no one on the contractor side had noticed because no one had connected the reporting obligation to the calendar. The COR had been compiling this list for two months waiting for the PMR. The program received a formal notification of deficiency. Recovery required submitting all 12 overdue CDRLs within 30 days, implementing a documented CDRL tracking process, and briefing the tracking system to the government team at the next monthly review. The reputational damage took the rest of the program to partially repair.',
            },
            {
              type: 'heading',
              text: 'Integrating the CDRL Schedule into Your IMS',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Every CDRL with a defined due date should appear in your IMS. Not as a single task called "submit CDRL 003" on the due date — as a chain of tasks: author draft, internal review, PM review, revise, submit. That chain should give you visibility weeks before the due date. If your CDRL for the Software Development Plan is due in week 20 and you have not started the author draft by week 15, you have a problem you can still solve. If the first task in your IMS is "submit CDRL" on week 20 and you miss it, the problem was invisible until it was too late.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Read the DID Before You Start Writing',
              text: 'Program managers consistently underestimate how specific DIDs are. A DID for a Systems Engineering Management Plan (SEMP) specifies not just that you need a SEMP, but exactly what sections it must contain, what each section must address, and what format is required. Start with the DID, not with a template from a previous program. Templates from previous programs satisfy the DID they were written for — which may be different from the DID your contract references.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you are preparing a proposal, do a CDRL read-through before you price. Count the CDRLs, estimate the labor to produce and maintain each one, and include that labor in your staffing plan. CDRLs are not free. A 50-CDRL contract may require one FTE of documentation labor just to keep current. That cost is real, it is billable if you plan for it, and it will come out of margin if you do not.',
            },
          ],
        },
        {
          id: 'ops-b2-m1-l3-integration',
          title: 'Integrating the IMS, CDRL Schedule, and Resource Plan',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'An IMS that is not resource-loaded is a timeline, not a schedule. It shows when things are planned to happen but not whether you have the people and equipment to make them happen simultaneously. The moment two critical tasks overlap and both require your only RF engineer, you have a resource conflict that your timeline will not show you — but a resource-loaded schedule will.',
            },
            {
              type: 'heading',
              text: 'What Resource Loading Actually Requires',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Resource loading means assigning the labor categories and hours required to complete each IMS task, then rolling up those assignments to generate a resource histogram — a period-by-period view of how much of each skill category the schedule requires. A valid resource-loaded schedule will reveal three common problems: (1) peaks that exceed your planned headcount or subcontract capacity, (2) troughs that indicate you have over-hired for a period, and (3) skill gaps where the schedule requires a capability you have not staffed or contracted for.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Resource Loading and EVMS',
              text: 'If your contract requires Earned Value Management System (EVMS) compliance, resource loading is not optional — it is a requirement of ANSI/EIA-748. Every control account must have a performance measurement baseline that includes planned labor hours by period. Without resource loading, your budgeted cost of work scheduled (BCWS) is just a number, not a plan.',
            },
            {
              type: 'heading',
              text: 'The Three-Way Relationship',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The IMS, CDRL schedule, and resource plan are not three separate management tools — they are three views of the same program. The IMS shows the sequence and timing of all work. The CDRL schedule shows the government-facing deliverable obligations that are subsets of that work. The resource plan shows whether you have the capacity to execute the IMS, including the CDRL-related tasks. When you update one, the others must be checked for consistency. A schedule acceleration that moves CDR two months earlier changes both your CDRL delivery dates and your labor demand in that period — the resource plan must reflect that the team doing CDR preparation is not available for other tasks during that window.',
            },
            {
              type: 'table',
              headers: ['Document', 'Drives', 'Updated When', 'Owner'],
              rows: [
                ['IMS', 'CDRL due dates, resource demand by period, earned value baseline', 'Weekly (status) / at replanning events', 'Program Scheduler / PM'],
                ['CDRL Schedule', 'Author assignments, internal review milestones, submission commitments to government', 'When IMS changes affect CDRL tasks / when contract is modified', 'Contracts Manager / Program Control'],
                ['Resource Plan', 'Staffing decisions, subcontract awards, labor cost baseline', 'When IMS resource histogram changes significantly / at budget reviews', 'PM / Program Control / Finance'],
              ],
            },
            {
              type: 'heading',
              text: 'When the Plans Conflict',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The most common planning conflict is a resource overload that is discovered too late to resolve cleanly. You committed to a schedule, the schedule requires six design engineers in Q2, and you only have four available because two are supporting a proposal. The naive solution is to compress the schedule — have the four engineers do the work of six. The actual solution depends on whether the resource shortfall is recoverable: Can you hire or subcontract the missing two? Can you negotiate a non-critical-path CDRL extension with the government? Can you re-sequence tasks to spread the peak? None of these options are available if you discover the conflict in week one of Q2. They are all available if you discover it in Q4 of the prior year.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Invisible Resource Conflict',
              text: 'A defense electronics firm was executing a sensor development program. The IMS looked healthy — no critical path issues, all tasks on track. What the PM did not have was a resource-loaded view. In the third month of the CDR preparation period, the program\'s two senior systems engineers were simultaneously required for: CDR documentation, a CDRL update to the SEMP, a proposal red team for a new bid, and a production readiness review for a different program in the same division. None of these were visible conflicts in the schedule because the schedule was not resource-loaded. The CDR prep slipped four weeks. That slip triggered a contract deliverable delay (the CDR package was a CDRL). The contracting officer requested an explanation. The root cause — an unmanaged resource conflict — was embarrassing to document. The fix was to resource-load the IMS and implement a monthly resource forecast review. The cost was four weeks of schedule margin consumed unnecessarily.',
            },
            {
              type: 'ordered-list',
              items: [
                'Build the IMS first, from the work breakdown — not from the compliance checklist',
                'Add every CDRL due date into the IMS as a chain of tasks (draft, review, revise, submit), not as a single point',
                'Resource-load every task in the IMS with labor categories and hours',
                'Generate a resource histogram and review it monthly for peaks, troughs, and gaps',
                'When the schedule changes, check the CDRL schedule and resource plan for cascading impacts before you brief the update to anyone',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Small contractors consistently skip resource loading because it takes time to set up. The ROI is enormous: one avoided CDR slip pays for 20 hours of schedule setup labor. If you are running Microsoft Project or Primavera, resource loading is built in. If you are running a spreadsheet schedule, you can add a resource tab. The tool matters less than the discipline of actually doing it and actually reviewing the output.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q-b2-m1-1',
          type: 'multiple-choice',
          question: 'What is the fundamental difference between an IMP and an IMS?',
          options: [
            'The IMP is a government document; the IMS is a contractor document',
            'The IMP is event-driven and defines accomplishments and criteria; the IMS is time-phased and shows when tasks will occur',
            'The IMP covers the full program lifecycle; the IMS covers only the current fiscal year',
            'The IMP is required on cost-plus contracts only; the IMS is required on all contract types',
          ],
          correctIndex: 1,
          explanation: 'The IMP defines what must be accomplished (significant accomplishments and their criteria) organized by program events. It is event-driven, not time-phased. The IMS implements the IMP in time — it shows when each task occurs, how tasks are sequenced, and what resources they require. Both are typically contractually required and must be consistent with each other.',
        },
        {
          id: 'q-b2-m1-2',
          type: 'multiple-choice',
          question: 'A DCMA analyst reviewing your IMS flags a task that has no predecessor and no successor. What does this indicate?',
          options: [
            'The task is on the critical path and should receive extra attention',
            'The task has a logic gap — it is disconnected from the schedule network, making its timing uncontrolled',
            'The task is a milestone and milestones do not require logic ties',
            'The task has been completed and closed out of the schedule',
          ],
          correctIndex: 1,
          explanation: 'A task with no predecessor or successor is a "dangling task" — it is not integrated into the schedule logic network. Its timing cannot be controlled by the schedule engine, meaning slippage on related tasks will not propagate to it. This is a logic integrity failure, not a milestone condition. Milestones still require at least one predecessor and one successor.',
        },
        {
          id: 'q-b2-m1-3',
          type: 'multiple-choice',
          question: 'What is the correct approach when an IMS task slips?',
          options: [
            'Update the schedule when you believe the task will recover to minimize the appearance of slippage',
            'Update the schedule on the day you know the task has slipped, regardless of whether you expect to recover',
            'Wait until the next monthly status update cycle to update the schedule to maintain consistency',
            'Flag it in a separate risk register but do not update the baseline schedule until formally approved',
          ],
          correctIndex: 1,
          explanation: 'Schedule integrity requires updating the schedule when you know a task has slipped — not when recovery looks possible. Delaying the update hides real schedule status from your own management and the government customer, consumes float that should be visible, and produces earned value data that does not reflect reality.',
        },
        {
          id: 'q-b2-m1-4',
          type: 'multiple-choice',
          question: 'What does a CDRL DD Form 1423 specify?',
          options: [
            'The contract price for each deliverable data item',
            'The data item title, DID reference, submission frequency, distribution, and any tailoring',
            'The government point of contact responsible for reviewing each deliverable',
            'The penalties for missing each deliverable date',
          ],
          correctIndex: 1,
          explanation: 'The DD Form 1423 is the standard form for each CDRL line item. It specifies the data item title, the DID that defines the content requirements, when and how often the item must be submitted, who receives it, and any tailoring (modifications to the DID requirements approved for this contract). It does not specify price or penalties directly.',
        },
        {
          id: 'q-b2-m1-5',
          type: 'true-false',
          question: 'A resource-loaded IMS that shows a labor peak exceeding your planned headcount is a schedule problem, not a staffing problem.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. A resource overload in the IMS is a schedule integrity problem because the schedule is not executable as written. The schedule assumes resources that are not available — which means tasks planned to happen simultaneously cannot happen simultaneously. The root fix may be hiring, subcontracting, or re-sequencing tasks, but the first step is recognizing that the schedule as written is not a valid plan.',
        },
        {
          id: 'q-b2-m1-6',
          type: 'multiple-choice',
          question: 'In a program with 50 CDRLs, the best approach to ensuring no deliveries are missed is:',
          options: [
            'Rely on the contracting officer representative to notify you when deliverables are due',
            'Track all CDRLs in the IMS as chains of tasks (draft, review, submit) with a dedicated CDRL register reviewed weekly',
            'Assign each CDRL to an individual author who is responsible for remembering their own due date',
            'Submit all CDRLs on a fixed quarterly schedule regardless of the contractual due date',
          ],
          correctIndex: 1,
          explanation: 'The only reliable approach is a dedicated CDRL register updated weekly, integrated with the IMS so that delivery chains are visible weeks before the due date. Relying on the government to notify you is a compliance failure waiting to happen. Individual author responsibility without a tracking system is what produces the scenario where 12 CDRLs are late before anyone notices.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 2 — Configuration Management
    // ─────────────────────────────────────────────
    {
      id: 'ops-b2-m2-cm',
      number: 2,
      title: 'Configuration Management',
      description: 'Configuration management is not a paperwork function — it is the system that makes your delivered product traceable, reproducible, and supportable. Learn what happens without it, how to set up a CM plan that works, and how to manage change without losing control.',
      estimatedMinutes: 85,
      learningObjectives: [
        'Explain why CM is a prerequisite for delivering to a military customer and what breaks without it',
        'Describe the structure of a CM plan and the key elements of a change control board process',
        'Distinguish between ECPs, deviations, and waivers and know when each is required',
        'Explain what an interface control document is and why the number of ICDs tends to grow',
      ],
      lessons: [
        {
          id: 'ops-b2-m2-l1-cm-foundation',
          title: 'Why Configuration Management Is the Foundation of Defense Programs',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'Configuration management is the discipline of identifying, documenting, and controlling the characteristics of a defense system throughout its lifecycle. It answers one question that the military customer cares about deeply: if I need to reproduce this system, repair it, integrate it with another system, or modify it in the field — can I do that from your documentation? If the answer is no, you cannot ship.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'CM', definition: 'Configuration Management — the discipline of identifying and controlling changes to a product\'s functional and physical characteristics across its lifecycle.' },
                { term: 'Configuration Baseline', definition: 'An agreed-upon description of the configuration of a system at a specific point in time. Defense programs typically use functional baseline (post-CDR), allocated baseline (post-PDR), and product baseline (post-first article acceptance).' },
                { term: 'CI', definition: 'Configuration Item — any hardware, software, or documentation element that is separately identified and controlled in the CM system.' },
                { term: 'CCB', definition: 'Configuration Control Board — the formal body that reviews, approves, or rejects proposed changes to a controlled configuration. Typically includes engineering, program management, contracts, quality, and the customer.' },
                { term: 'ECP', definition: 'Engineering Change Proposal — a formal document proposing a change to the approved configuration baseline. Class I ECPs affect cost, schedule, or form/fit/function and require government approval. Class II ECPs are internal changes that do not affect the contracted performance.' },
                { term: 'Deviation', definition: 'Government-approved authorization to depart from a specific requirement on a specific quantity of items prior to production. A deviation does not change the baseline — it grants a one-time exception.' },
                { term: 'Waiver', definition: 'Government-approved authorization to accept items that already do not meet the requirement. Waivers are granted after the fact, after nonconformance has occurred.' },
              ],
            },
            {
              type: 'heading',
              text: 'What Breaks Without Configuration Management',
              level: 2,
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Production Line That Required an Engineer at Every Unit',
              text: 'A defense electronics subcontractor was producing ruggedized power conversion units for a vehicle integration program. The design had evolved during development — the engineering team had made dozens of small improvements during prototype testing, most of them verbally communicated to the production technicians and not reflected in updated drawings. By the time production started, the drawings were a starting point, not an accurate description of the unit being built. Each unit required an engineer to stand at the bench and tell the technician which drawing notes applied, which had been superseded by informal verbal guidance, and how to handle the three or four places where the drawing flatly contradicted how the unit was actually assembled. Quality escapes reached the customer. Three units were rejected at government source inspection because the inspector found they did not match the drawings — which was technically true, but the drawings were wrong, not the units. The root cause analysis took six weeks. The corrective action — rebuilding the drawing set to reflect the actual configuration — took four months and delayed production by eight weeks. The cost, between rework, delays, and customer relationship damage, exceeded the entire CM function budget for the next three years. The program manager\'s summary at the lessons-learned review: "We thought we were too small and too fast-moving to maintain a formal configuration baseline. We were wrong."',
            },
            {
              type: 'heading',
              text: 'The Three Configuration Baselines',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Baseline', 'Established At', 'What It Contains', 'What Changes Require'],
              rows: [
                ['Functional Baseline', 'System Requirements Review / CDR', 'Top-level performance and functional requirements — what the system must do', 'Class I ECP for any change to functional requirements'],
                ['Allocated Baseline', 'PDR / subsystem specifications approved', 'Allocation of functional requirements to system elements — how the function is distributed', 'Class I ECP for changes that affect performance allocation'],
                ['Product Baseline', 'First Article Acceptance / Production Qualification Testing', 'Detailed design documentation — drawings, parts lists, software versions, test procedures — that exactly describes the deliverable product', 'Class I ECP (government approval) for any change to form, fit, or function; Class II for internal improvements that do not affect contracted performance'],
              ],
            },
            {
              type: 'heading',
              text: 'Software Configuration Management',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Software CM is where defense programs most commonly lose control, because software feels more changeable than hardware and the "we can just push an update" mindset conflicts with the controlled-baseline requirements of defense contracting. Every software version fielded to a military system must be identified, built from a controlled baseline, tested against test procedures tied to that baseline, and documented. When a customer reports a fault in the field, you must be able to recreate the exact software version that was in the fielded unit. If you cannot do that because your builds are not reproducible from a controlled baseline, you cannot debug the fault systematically.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Configuration Audits Are Real',
              text: 'The government has the right to perform functional configuration audits (FCA) and physical configuration audits (PCA) under most defense contracts. An FCA verifies that the delivered item\'s functional performance matches the approved functional baseline. A PCA verifies that the physical product matches the product baseline documentation — drawings, parts list, software identification. Programs that have not maintained their configuration baseline fail PCAs. A failed PCA does not just generate paperwork — it can hold up deliveries, trigger stop-work on production, and become an open finding that follows the program for years.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you are a small defense contractor and your CM process is "the engineers know what changed," you are one key departure away from a program-threatening knowledge gap. CM does not require expensive software. It requires discipline: drawings are released through a controlled process, changes go through a change board, every fielded unit has a configuration record. The cost of discipline is small and predictable. The cost of not having it is large and unpredictable.',
            },
          ],
        },
        {
          id: 'ops-b2-m2-l2-cm-plan',
          title: 'The CM Plan and Change Control Board Process',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'The Configuration Management Plan (CMP) is typically a CDRL — the government will require you to submit it and keep it current. But the CMP is only valuable if it describes how CM actually works in your organization, not how it works in a reference document you found online. A CMP that describes a process your organization does not follow is worse than no CMP, because it creates a documented gap between your stated and actual practices.',
            },
            {
              type: 'heading',
              text: 'What a CM Plan Must Address',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'CM organization and roles — who has authority to approve changes at each class level',
                'Configuration identification — how CIs are numbered, structured, and tracked',
                'Baseline identification — which events establish each baseline and what documentation constitutes the baseline',
                'Change control process — how changes are initiated, reviewed, approved or rejected, and implemented',
                'Configuration status accounting — how the current configuration of every CI is recorded and retrievable',
                'Configuration audits — how and when FCAs and PCAs are conducted',
                'Subcontractor and vendor CM requirements — what CM you require your suppliers to maintain',
                'Software CM — version control, build management, and release process for all software CIs',
              ],
            },
            {
              type: 'heading',
              text: 'Running an Effective Change Control Board',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A Change Control Board is only effective if it has real authority and uses it. A CCB that rubber-stamps every change proposal is not controlling configuration — it is creating a paper trail. A CCB that rejects changes on bureaucratic grounds without understanding the engineering rationale is creating a shadow change process where engineers route around the board. The effective CCB evaluates each proposed change against three questions: Is this change necessary? What is the full impact (cost, schedule, performance, interfaces, logistics)? Is the impact assessment complete before we approve?',
            },
            {
              type: 'table',
              headers: ['Change Class', 'Who Approves', 'Triggers', 'Timeline'],
              rows: [
                ['Class I ECP', 'Government contracting officer (PCO) after internal CCB approval', 'Any change to form, fit, function, or contractual requirements — cost, schedule, reliability, interoperability', '30–90 days typical; emergency ECPs can be faster with PCO cooperation'],
                ['Class II ECP', 'Internal CCB (contractor authority)', 'Internal improvements that do not affect contracted performance or government-controlled specifications', '1–2 weeks typical internal review'],
                ['Deviation', 'Government approval required before production of affected units', 'Known departure from requirement on a defined quantity, before manufacture', 'Must be approved before work begins — no retroactive deviations'],
                ['Waiver', 'Government approval required', 'Departure from requirement already present in completed items', 'Submitted after nonconformance found — government decides accept/reject/disposition'],
              ],
            },
            {
              type: 'heading',
              text: 'The ECP Process in Practice',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'An ECP is more than a description of what you want to change. It must include: a clear description of the current configuration and the proposed change, the reason for the change (problem being solved or improvement being made), a complete impact analysis covering performance, reliability, weight, power, interfaces, logistics, training, and existing fielded units, the cost and schedule impact of implementing the change versus not implementing it, and a transition plan if fielded units and new production units will be in different configurations simultaneously.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Shipping Without an Approved ECP',
              text: 'Shipping a unit in a configuration that differs from the approved product baseline without an approved ECP or deviation is a contract compliance failure. It does not matter that the change is an improvement. It does not matter that the customer will probably like it. The product baseline is a contract obligation, not a suggestion. If the government discovers units have been delivered out of configuration without documentation, the consequences range from formal corrective action to rejection and return of delivered units at contractor expense. The path is always: get the ECP or deviation approved first, then implement.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'The most common small-contractor CM failure is the undocumented Class I change. An engineer finds a better component, substitutes it, and does not realize the substitution changed an interface specification or a reliability requirement. The fix requires establishing a habit: before any change to a drawing, specification, or software configuration item, ask "Is this a Class I change?" If there is any doubt, it goes to the CCB. The question takes 30 seconds. The failure to ask takes months to recover from.',
            },
          ],
        },
        {
          id: 'ops-b2-m2-l3-icd',
          title: 'Interface Control Documents and Why They Multiply',
          estimatedMinutes: 29,
          content: [
            {
              type: 'paragraph',
              text: 'An Interface Control Document (ICD) is a controlled document that defines the technical interface between two systems, subsystems, or components. It specifies the mechanical, electrical, thermal, software, data, or human interfaces that must be satisfied for two items to work together. ICDs are controlled documents — changes to them require the same CCB process as changes to any other configuration item.',
            },
            {
              type: 'heading',
              text: 'Why ICDs Exist and Why They Proliferate',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On a simple, single-contractor program, you might have a handful of ICDs. On a large defense system with multiple primes, multiple subcontractors, government-furnished equipment, and legacy system integration requirements, you can have hundreds. Each integration point between independently developed components generates an ICD. The more modular the architecture, the more integration points — and the more ICDs. This is generally a good thing (modularity reduces integration risk), but it creates a significant configuration management burden because ICDs can change on both sides. When the radar subsystem contractor proposes a change to the data interface, that change requires coordination with every other contractor whose system sends data to or receives data from the radar.',
            },
            {
              type: 'table',
              headers: ['ICD Type', 'What It Defines', 'Common Problem'],
              rows: [
                ['Mechanical Interface', 'Physical dimensions, mounting points, connector locations, envelope constraints', 'Changes late in design when tooling or adjacent structure has already been built'],
                ['Electrical Interface', 'Connector pinouts, power supply requirements, signal levels, grounding', 'Connector pin reassignment causes integration failures when both sides do not update simultaneously'],
                ['Thermal Interface', 'Heat load, cooling requirements, allowable temperature range at interface', 'Thermal margins look adequate at individual subsystem level but fail when integrated'],
                ['Software/Data Interface', 'Message formats, data rates, protocols, timing, error handling', 'Most frequently changed interface type; coordination failures cause the most integration test delays'],
                ['Human Interface', 'Operator control locations, display formats, human factors requirements', 'Addressed last because it feels like "design," not "engineering" — creates late integration problems with training and maintenance'],
              ],
            },
            {
              type: 'heading',
              text: 'Managing ICDs Across Multiple Contractors',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On a multi-contractor program, every ICD has two owners — one on each side of the interface. Both must sign it. When one side proposes a change, the other side must evaluate the impact. This coordination requirement does not happen automatically. It requires a defined interface management process, typically run by the system integrator or prime contractor, that tracks every ICD, identifies all affected parties when a change is proposed, and ensures impact assessments are complete before the change is approved.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'The ICD Change That Broke Four Subsystems',
              text: 'A ground vehicle integration program was running integration testing when the communications subsystem contractor discovered they needed to change the data bus message timing for a performance improvement. The change was internally classified as Class II (no contracted performance impact) and implemented without ICD update or notification to other contractors. Three weeks later, integration testing of the vehicle management system began failing intermittently. The diagnostic took two weeks — the vehicle management system software had been written to the timing specification in the current (now outdated) ICD, and the communications subsystem was operating to a different timing. When the team audited other subsystems, they found three additional subsystems with timing-dependent interfaces to the communications subsystem, all of which had been developed against the superseded ICD timing. What started as a 15-minute Class II change generated six weeks of integration rework across four subsystems. The lesson: any change to a shared interface is a Class I change, regardless of how it looks from one side.',
            },
            {
              type: 'ordered-list',
              items: [
                'Identify all ICDs at the start of detailed design — one per integration point, both sides must sign',
                'Track ICDs in the same CM system as drawings and specifications — they are controlled documents, not living spreadsheets',
                'When any contractor proposes a change that could affect an interface, the ICD owner must be notified and the impact assessed before the change is approved',
                'Run an ICD review at every major design review — CDR cannot close if ICDs are not all at the correct revision and signed by both parties',
                'Flag ICDs with three or more revisions during development — that frequency signals an unstable interface that will cause integration problems',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you are a subsystem supplier on a large program, the prime contractor\'s ICD management process affects your schedule directly. Review the ICDs at your interfaces at program kick-off and flag any that are incomplete or have open questions. An ICD that is not finalized by PDR is a risk to your detail design schedule. Request ICD closure dates from the prime as part of your IMS baseline discussions — not as a courtesy, as a dependency that belongs in your schedule.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q-b2-m2-1',
          type: 'multiple-choice',
          question: 'Which configuration baseline is established at First Article Acceptance and contains the detailed drawings, parts lists, and software versions that describe the deliverable product?',
          options: [
            'Functional Baseline',
            'Allocated Baseline',
            'Product Baseline',
            'Design Baseline',
          ],
          correctIndex: 2,
          explanation: 'The Product Baseline is established after first article acceptance (or production qualification testing) and captures the exact configuration of the deliverable product — drawings, specifications, parts lists, software version identification, and test procedures. It is the most detailed and most controlled of the three standard defense baselines.',
        },
        {
          id: 'q-b2-m2-2',
          type: 'multiple-choice',
          question: 'A Class I Engineering Change Proposal differs from a Class II ECP primarily because:',
          options: [
            'Class I ECPs are initiated by the government; Class II ECPs are initiated by the contractor',
            'Class I ECPs affect form, fit, function, or contractual requirements and require government approval; Class II ECPs are internal improvements that do not affect contracted performance',
            'Class I ECPs require a physical prototype to demonstrate the change; Class II ECPs require documentation only',
            'Class I ECPs must be approved in under 30 days; Class II ECPs have no time limit',
          ],
          correctIndex: 1,
          explanation: 'The fundamental distinction is government approval authority. A Class I ECP proposes a change that affects contractually controlled characteristics — performance, interfaces, reliability, cost, or schedule — and therefore requires the government contracting officer\'s approval. A Class II ECP covers internal design improvements that do not affect contracted requirements and can be approved by the contractor\'s internal CCB.',
        },
        {
          id: 'q-b2-m2-3',
          type: 'true-false',
          question: 'A deviation and a waiver both require government approval, but a deviation is requested before the nonconforming items are produced and a waiver is requested after.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. A deviation authorizes departure from a requirement before the affected items are produced — it is prospective. A waiver accepts items that have already been produced and do not meet the requirement — it is retrospective. Both require government approval, but there is no such thing as a retroactive deviation. If items have already been produced out of configuration, the path is a waiver, not a deviation.',
        },
        {
          id: 'q-b2-m2-4',
          type: 'multiple-choice',
          question: 'The government exercises its right to conduct a Physical Configuration Audit (PCA). What does a PCA verify?',
          options: [
            'That the contractor\'s CM plan has been submitted and approved',
            'That the physical product as built matches the product baseline documentation exactly',
            'That the contractor has adequate facility space and tooling for the production rate',
            'That the contractor\'s quality management system is AS9100 compliant',
          ],
          correctIndex: 1,
          explanation: 'A PCA verifies the physical configuration — that what was built matches the approved product baseline documentation including drawings, parts lists, and software identification. It is documentation-versus-hardware verification. A Functional Configuration Audit (FCA) separately verifies that performance requirements were met during testing.',
        },
        {
          id: 'q-b2-m2-5',
          type: 'multiple-choice',
          question: 'An Interface Control Document (ICD) is proposed for a change by one contractor on a two-contractor interface. What is the correct process?',
          options: [
            'The proposing contractor can update the ICD as a Class II change if the change does not affect their contracted performance',
            'Both contractors must evaluate the impact and the ICD change must go through the joint CCB process with both parties\' concurrence',
            'The prime contractor can approve ICD changes unilaterally because they are the system integrator',
            'ICDs can be changed without CCB review as long as both sides agree informally',
          ],
          correctIndex: 1,
          explanation: 'An ICD is a jointly-owned controlled document. Any proposed change must be evaluated by both parties because what looks like a minor change from one side may have significant impact on the other. Both parties must concur and the change must go through the formal CCB process. Informal agreements to change interface specifications without controlled documentation are a leading cause of integration test failures.',
        },
        {
          id: 'q-b2-m2-6',
          type: 'multiple-choice',
          question: 'What is the primary failure mode of a Configuration Management Plan that does not describe how CM actually works in the contractor\'s organization?',
          options: [
            'The government will reject it at the CDRL review and require resubmission',
            'It creates a documented gap between stated and actual practices that becomes an audit finding',
            'It invalidates the contract baseline and requires contract modification to resolve',
            'It has no consequence unless a configuration audit is specifically requested',
          ],
          correctIndex: 1,
          explanation: 'A CMP that describes a process the organization does not follow is worse than no plan because it documents the gap between intent and practice. When a government auditor or DCMA analyst compares the CMP to actual practices, discrepancies become formal findings. The corrective action requires updating both the plan and the actual process — twice the work of getting it right once.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 3 — Quality Systems for Defense
    // ─────────────────────────────────────────────
    {
      id: 'ops-b2-m3-quality',
      number: 3,
      title: 'Quality Systems for Defense',
      description: 'Defense quality is not ISO 9001 plus paperwork. It is a distinct set of requirements — AS9100, NADCAP special processes, First Article Testing, and government source inspection — that exist because the consequences of failure are different when equipment is fielded in combat.',
      estimatedMinutes: 90,
      learningObjectives: [
        'Explain the key additions AS9100 makes to ISO 9001 and why they matter for defense work',
        'Describe what NADCAP accreditation covers and what happens when a required special process is performed by a non-accredited supplier',
        'Explain what a First Article Test is, what it proves, and how to not fail it twice',
        'Describe how to prepare for government source inspection and how to build a productive relationship with the QAR',
      ],
      lessons: [
        {
          id: 'ops-b2-m3-l1-as9100',
          title: 'AS9100 vs. ISO 9001 — What Defense Quality Actually Requires',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'ISO 9001 is the international quality management standard that defines the minimum requirements for a quality system. AS9100 is the aerospace and defense extension of ISO 9001. It includes all of ISO 9001 and adds requirements specific to the risk profile of aviation, space, and defense products — where a quality escape can mean loss of life, loss of mission, or loss of an irreplaceable asset.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'AS9100', definition: 'The quality management standard for aviation, space, and defense organizations, published by SAE International. Current revision is AS9100 Rev D. Required by most prime defense contractors and many government contracts.' },
                { term: 'ISO 9001', definition: 'The international quality management standard published by the International Organization for Standardization. AS9100 is a superset of ISO 9001 — AS9100 certification satisfies ISO 9001 requirements.' },
                { term: 'FAI / FAT', definition: 'First Article Inspection / First Article Test — the process of verifying that the first production unit fully conforms to all drawing, specification, and performance requirements before full production begins.' },
                { term: 'FOD', definition: 'Foreign Object Damage / Foreign Object Debris — damage caused by foreign objects in equipment, or the objects themselves. FOD prevention is an AS9100-specific requirement, not in ISO 9001.' },
                { term: 'Key Characteristic', definition: 'A feature whose variation from nominal has a significant effect on product fit, form, function, performance, service life, or manufacturability. AS9100 requires documented control plans for key characteristics.' },
                { term: 'QAR', definition: 'Quality Assurance Representative — the government quality inspector assigned to monitor quality at a contractor\'s facility. The QAR performs source inspection, audits quality records, and can hold or release shipments.' },
                { term: 'CAR', definition: 'Corrective Action Request — a formal request for investigation and corrective action following a nonconformance or audit finding.' },
                { term: 'SCAR', definition: 'Supplier Corrective Action Request — a CAR directed to a supplier rather than issued internally.' },
              ],
            },
            {
              type: 'heading',
              text: 'What AS9100 Adds to ISO 9001',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Requirement Area', 'ISO 9001', 'AS9100 Rev D Additions'],
              rows: [
                ['Risk Management', 'Address risks and opportunities generally', 'Formal risk management process with documented risk identification, assessment, and treatment; operational risk required in planning'],
                ['First Article Inspection', 'Not specifically required', 'First Article Inspection (FAI) per AS9102 required; all drawing requirements must be verified on first production part'],
                ['FOD Prevention', 'Not required', 'Foreign Object Damage/Debris prevention program required for applicable products'],
                ['Key Characteristics', 'Not required', 'Key characteristics must be identified, controlled, and documented with variability reduction plans'],
                ['Control of Special Requirements', 'Not required', 'Special requirements (safety, reliability, government contractual) must be flowed down to and controlled at subcontractor level'],
                ['Configuration Management', 'Not specifically required', 'CM requirements explicitly required as part of product realization planning'],
                ['Counterfeit Part Prevention', 'Not required', 'Processes to detect and prevent counterfeit and suspected unapproved parts required'],
                ['Record Retention', 'As required by law or contract', 'Explicit retention periods required; often 10 years minimum, longer for life-limited parts'],
              ],
            },
            {
              type: 'heading',
              text: 'Why AS9100 Certification Matters Commercially',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Most prime defense contractors require AS9100 certification from their critical suppliers. Some require it for all suppliers above a revenue threshold. The reason is not bureaucracy — it is supply chain risk management. A supplier with a certified quality system has been audited by an accredited third party against a published standard. The prime knows what the quality system covers and has a mechanism to audit against it. A supplier without AS9100 certification requires individual assessment, ongoing monitoring, and more source inspection — all of which cost money that the prime would rather not spend.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'AS9100 Certification Process',
              text: 'AS9100 certification requires: (1) implementing a quality management system that meets all AS9100 Rev D requirements, (2) conducting internal audits against the standard, (3) completing at least one full management review cycle, (4) selecting an accredited certification body (Nadcap-accredited or IAQG-recognized CB), (5) stage 1 audit (documentation review), (6) stage 2 audit (implementation verification on-site), and (7) maintaining certification through annual surveillance audits and triennial recertification. Initial certification typically takes 6-18 months depending on organization size and starting quality maturity.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'AS9100 Without Implementation Is Worse Than Nothing',
              text: 'AS9100 certification means your quality system was audited and found compliant at the time of the audit. It does not mean your quality system is actually functioning. Organizations that achieve certification and then coast until the next audit create a false sense of security internally and expose themselves to severe findings during unannounced government quality system assessments or prime contractor audits. The standard is the floor, not the ceiling.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you are a defense subcontractor without AS9100 certification and you want to grow your defense revenue, AS9100 certification is a business development investment, not just a compliance cost. Many solicitations include AS9100 as a mandatory qualification. Others use it as an evaluation factor. Getting certified before you need it for a specific bid gives you the time to implement the system properly rather than rushing to certification to win a contract — and a rushed certification shows in the quality system.',
            },
          ],
        },
        {
          id: 'ops-b2-m3-l2-nadcap',
          title: 'NADCAP and First Article Testing',
          estimatedMinutes: 32,
          content: [
            {
              type: 'paragraph',
              text: 'Some manufacturing processes have such significant impact on structural integrity, material properties, or long-term reliability that the aerospace and defense industry has established a separate accreditation system for them. NADCAP — the National Aerospace and Defense Contractors Accreditation Program — provides accreditation for these special processes. If your contract or customer flow-down requirements specify that a NADCAP-accredited supplier must perform a process, there is no workaround.',
            },
            {
              type: 'heading',
              text: 'What NADCAP Covers',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Chemical processing (plating, anodizing, conversion coatings, etching)',
                'Composites (layup, cure, bonding)',
                'Heat treating (solution treating, aging, annealing, stress relieving)',
                'Materials testing (mechanical testing, chemical analysis, metallurgical evaluation)',
                'Nondestructive testing (radiographic, ultrasonic, eddy current, dye penetrant, magnetic particle)',
                'Welding (all types — fusion, resistance, electron beam, laser)',
                'Coatings (thermal spray, painting, sealants where structurally significant)',
                'Electronics (printed circuit board manufacturing, soldering)',
                'Fluid distribution systems (assembly, flushing, testing)',
              ],
            },
            {
              type: 'paragraph',
              text: 'NADCAP accreditation is commodity-specific. A supplier accredited for welding is not automatically accredited for heat treating. When you qualify a supplier for a special process, you must verify they hold the specific NADCAP commodity accreditation for the process you are sourcing. NADCAP maintains a public database called eAuditNet where you can verify current accreditation status — use it.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Non-Accredited Special Process',
              text: 'If your contract flow-downs or customer requirements specify NADCAP accreditation for a process and you have that process performed by a non-accredited supplier, you have a nonconformance. The parts cannot be shipped. Retroactive NADCAP accreditation does not exist — accreditation certifies the process and people available at the time of audit, not the specific parts already produced. Your options are: re-perform the process at an accredited supplier (if possible), disposition the parts as scrap, or request a waiver from the government (which will be granted rarely and will cost time you do not have). The qualification of NADCAP requirements before source selection is non-optional on any program with special processes.',
            },
            {
              type: 'heading',
              text: 'First Article Testing — What It Actually Is',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A First Article Test (FAT) is the formal demonstration that the first production unit — or a designated first article sample — fully conforms to all drawing and specification requirements before the rest of the production run proceeds. A FAT is not a prototype test. The first article is built using production tooling, production processes, and production personnel. It is the proof that your production system, as configured, can produce a conforming product.',
            },
            {
              type: 'paragraph',
              text: 'The AS9102 standard defines the requirements for First Article Inspection. AS9102 requires that every characteristic on every drawing and specification be verified and documented in a First Article Inspection Report (FAIR). Not a sample. Not the critical characteristics. Every characteristic. This is different from receiving inspection or routine production inspection, which typically uses sampling plans.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'How to Not Fail a First Article Test Twice',
              text: 'A precision machined component manufacturer was supplying a structural housing for an airborne electronics pod. The first article failed dimensional inspection at the government facility — three of 47 measured dimensions were out of tolerance. The contractor reviewed the failure, made tooling adjustments, and submitted a second first article four weeks later. The second first article also failed — two of the same three dimensions and one new one. At this point the program had consumed eight weeks, the prime contractor\'s schedule was impacted, and the government quality organization was no longer treating this as a normal supplier quality event. The root cause of the second failure: the team had made the tooling adjustments based on the measurements from the failed first article without understanding why those dimensions were out of tolerance. They adjusted the tool settings empirically without understanding the process physics. The fix required a manufacturing engineer to perform a full process capability analysis (Cp/Cpk) on all 47 dimensions using data from a sample of non-first-article parts, identify which dimensions had process capability below 1.33, and redesign the machining process for those dimensions before attempting the third first article. The third first article passed. Total cost of two failed FATs: 14 weeks of schedule, $180,000 in parts and labor, and a corrective action requirement that stayed in the program file for the contract duration. The lesson: before you submit a first article, know your process capability on every critical dimension. If you do not have Cpk data, you are guessing.',
            },
            {
              type: 'ordered-list',
              items: [
                'Before starting first article production, confirm all tooling and fixturing is released and qualified',
                'Run a process capability study on all key characteristics before the first article run — identify and fix low-Cpk processes before they show up in FAT results',
                'Conduct an internal dimensional inspection before submitting to the government — find the problems yourself first',
                'Document every measurement in the First Article Inspection Report per AS9102 — missing a characteristic means an incomplete FAI, which is a failure',
                'When a first article fails, perform root cause analysis on every failed characteristic before making adjustments — empirical tool adjustments without root cause understanding produce second failures',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'For production programs, treat a first article failure as a five-alarm event. Do not treat it as a normal quality event that gets worked through the standard corrective action process at normal speed. The first article gates the production run. Every week the first article is not accepted is a week the production schedule slips. Assign your best manufacturing engineer and your quality manager to the root cause analysis. Present the root cause and corrective action to the customer within two weeks of failure, not when the second article is ready.',
            },
          ],
        },
        {
          id: 'ops-b2-m3-l3-source-inspection',
          title: 'Government Source Inspection — Preparation and the QAR Relationship',
          estimatedMinutes: 30,
          content: [
            {
              type: 'paragraph',
              text: 'Government source inspection is the process by which a government Quality Assurance Representative (QAR) verifies product quality and process compliance at the contractor\'s facility before products are accepted and shipped. Source inspection is required when the contract specifies it, when the product is complex or high-risk, or when the QAR determines that receiving inspection alone is insufficient. The QAR has real authority: they can place product on hold, require additional inspection, witness specific tests, and refuse to authorize shipment.',
            },
            {
              type: 'heading',
              text: 'How to Prepare for Source Inspection',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The single most effective preparation for source inspection is maintaining your quality records continuously, not preparing them for the inspection visit. A QAR conducting source inspection will review your traveler documentation, test records, calibration records for measuring equipment used, first article inspection records, nonconformance reports and their dispositions, and your purchase order flow-downs to suppliers. If any of these are incomplete, incorrect, or inconsistent with the physical product, the QAR will find it. "We were going to update that" is not an acceptable response.',
            },
            {
              type: 'list',
              items: [
                'Traveler documentation: every required operation signed off by the responsible operator, every in-process inspection completed and recorded',
                'Calibration records: every measuring instrument used on the product calibrated, current, and traceable to NIST standards',
                'Nonconformance records: every discrepancy found during production documented, dispositioned (use-as-is, repair, rework, scrap), and if repaired or reworked, re-inspected',
                'Test records: all required tests completed, results within specification, test equipment calibrated',
                'Certificate of conformance: contractor certification that the product meets all contract requirements',
                'First Article Inspection Report: on file, complete, accepted by the government',
                'Material certifications: raw material certs and NADCAP certs for special processes on file',
              ],
            },
            {
              type: 'heading',
              text: 'Making the QAR Your Ally',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The QAR relationship is one of the most consequential relationships a defense contractor manages, and it is consistently mismanaged in two opposite ways. Some contractors treat the QAR as an adversary to be minimized — they provide the minimum access required, answer questions narrowly, and view every inspection visit as a threat. Other contractors over-engineer the QAR relationship — they schedule elaborate visits, assign staff to shadow the QAR, and treat inspection as a performance rather than a process. Both approaches produce worse outcomes than the straightforward alternative: treat the QAR as a professional peer doing a job, give them full access to what they need, fix problems they find, and communicate proactively when issues arise.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The QAR\'s Actual Job',
              text: 'A QAR is a government employee (DCMA or service-specific) assigned to verify that contractors are meeting their contractual quality obligations. They are not trying to find reasons to stop your shipments — they are trying to verify that the government is receiving conforming products. When a QAR raises a finding, they have typically identified a real problem. The contractors who have the best QAR relationships are the ones who respond to findings constructively, keep the QAR informed of process changes, and never ask a QAR to approve something that is not actually conforming.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Building a Productive QAR Relationship',
              text: 'A small electronics assembler had a standing source inspection requirement for a ground support equipment contract. The previous program manager had treated every QAR visit as an adversarial event — minimal communication, answers to direct questions only, and occasional attempts to argue about findings. The QAR had responded by increasing inspection frequency and extending visit duration. When a new PM took over, she called the QAR before her first inspection visit and asked for a walkthrough of the quality record requirements the QAR relied on. The QAR spent 45 minutes explaining exactly what she checked, what she had been finding, and what would make her job easier. The PM implemented three specific process changes the QAR had mentioned. On the next inspection visit, the QAR found the records complete and the process changes in place. Over the following six months, source inspection visit frequency dropped from monthly to quarterly because the QAR\'s confidence in the contractor\'s quality system was established. That confidence came from one 45-minute conversation and following through on what was discussed.',
            },
            {
              type: 'table',
              headers: ['QAR Relationship Behavior', 'Short-Term Effect', 'Long-Term Effect'],
              rows: [
                ['Adversarial — minimize access, argue findings', 'Reduced visit frequency (short-term avoidance)', 'Increased scrutiny, escalation to DCMA management, negative CPARS rating'],
                ['Over-engineered — rehearsed visits, assigned babysitter', 'QAR feels managed rather than trusted', 'QAR looks harder for what is being hidden'],
                ['Transparent — full access, honest communication, findings fixed', 'May find more problems in the short term', 'QAR confidence builds; inspection frequency reduces; QAR advocates for contractor in disputes'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Government source inspection is in your contract. The QAR is coming. The only variable is whether they find a well-run quality system or a quality system in crisis. The preparation that matters most happens before the QAR walks in the door: records current, equipment calibrated, nonconformances properly documented. If you maintain those continuously, a source inspection visit becomes a verification of what you already know, not a discovery event.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q-b2-m3-1',
          type: 'multiple-choice',
          question: 'Which of the following is an AS9100 Rev D requirement that is NOT found in ISO 9001?',
          options: [
            'Customer focus and leadership commitment',
            'Internal audit program and management review',
            'Foreign Object Damage/Debris (FOD) prevention program',
            'Document control and records management',
          ],
          correctIndex: 2,
          explanation: 'FOD prevention is an AS9100-specific addition to the ISO 9001 baseline. It is required in the aerospace and defense context because foreign objects in aircraft engines, missiles, or weapon systems can cause catastrophic failure. ISO 9001 has no FOD requirement because it covers all industries, most of which have no specific FOD risk.',
        },
        {
          id: 'q-b2-m3-2',
          type: 'multiple-choice',
          question: 'A defense supplier performs welding for an airframe component. Their contract flow-down requires NADCAP accreditation for welding. The supplier uses a welding subcontractor that holds NADCAP accreditation for chemical processing but not for welding. What is the correct assessment?',
          options: [
            'The subcontractor\'s chemical processing accreditation demonstrates a strong quality system and satisfies the NADCAP requirement',
            'The subcontractor is not accredited for welding and the parts cannot be accepted under the contract as written',
            'The supplier can self-certify the welds because they are the prime on the subcontract',
            'NADCAP accreditation is commodity-specific but a waiver can be obtained from the prime contractor',
          ],
          correctIndex: 1,
          explanation: 'NADCAP accreditation is commodity-specific. Accreditation for chemical processing does not extend to welding. Each process category requires separate accreditation earned through a separate commodity audit. The parts welded by a non-accredited supplier cannot be used under a contract that requires NADCAP-accredited welding. A waiver from the prime is not sufficient — only the government customer can waive a contract requirement.',
        },
        {
          id: 'q-b2-m3-3',
          type: 'true-false',
          question: 'A First Article Test performed using prototype tooling and pre-production processes is acceptable to satisfy AS9102 requirements if the dimensional results are within tolerance.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. AS9102 requires that the first article be produced using production tooling, production processes, and production personnel — not prototype tooling or pre-production processes. The purpose of a FAT is to verify that the production system as configured can produce conforming parts. A first article produced with prototype tooling does not prove the production process capability.',
        },
        {
          id: 'q-b2-m3-4',
          type: 'multiple-choice',
          question: 'A first article fails dimensional inspection on three of 47 characteristics. The most important first step before attempting to submit a second first article is:',
          options: [
            'Make immediate tooling adjustments to correct the three failed dimensions and rerun the part',
            'Perform root cause analysis on all three failures to understand why they are out of tolerance before making any process changes',
            'Submit a corrective action request to the QAR documenting the three failures',
            'Request a deviation for the three out-of-tolerance characteristics to allow shipment while the process is corrected',
          ],
          correctIndex: 1,
          explanation: 'Root cause analysis must precede corrective action. Empirical tooling adjustments without understanding the cause of the failure frequently produce second-article failures on the same or adjacent dimensions. Process capability analysis (Cpk) on the failing characteristics reveals whether the process is systematically biased or has excessive variation — and which of these problems requires a different fix.',
        },
        {
          id: 'q-b2-m3-5',
          type: 'multiple-choice',
          question: 'During source inspection, a QAR finds that two test records are missing operator signatures that are required by the traveler. The correct response is:',
          options: [
            'Explain that the operators who performed the tests are available to sign the records retroactively',
            'Document the nonconformance, investigate whether the tests were actually performed, determine disposition, and implement corrective action to prevent recurrence',
            'Argue that the missing signatures are administrative and do not affect product conformance',
            'Ask the QAR to waive the finding because the product is otherwise conforming',
          ],
          correctIndex: 1,
          explanation: 'Missing required signatures are a genuine quality record nonconformance, not an administrative issue. The correct response is to document the nonconformance, investigate to determine whether the tests were performed (if not, they must be), determine proper disposition, and implement corrective action. Retroactive signatures are falsification of records. Arguing with the QAR about the significance of a finding damages the QAR relationship and rarely succeeds.',
        },
        {
          id: 'q-b2-m3-6',
          type: 'multiple-choice',
          question: 'What is the most effective long-term approach to the QAR relationship?',
          options: [
            'Minimize QAR access to production areas to reduce the risk of findings',
            'Assign a dedicated quality engineer to accompany the QAR during every visit',
            'Provide full access, respond to findings constructively, maintain records continuously, and communicate proactively when issues arise',
            'Conduct a formal pre-inspection preparation drill before each QAR visit',
          ],
          correctIndex: 2,
          explanation: 'The most effective QAR relationship is built on transparency and consistency. Contractors who give full access, fix findings, and communicate proactively build QAR confidence that reduces inspection intensity over time. Minimizing access increases QAR scrutiny. Escorting the QAR signals distrust. Pre-inspection drills produce a staged performance rather than a genuine quality system.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 4 — Managing the Customer Relationship Under Pressure
    // ─────────────────────────────────────────────
    {
      id: 'ops-b2-m4-customer',
      number: 4,
      title: 'Managing the Customer Relationship Under Pressure',
      description: 'Defense programs go wrong. How you manage the government customer when they do determines whether you recover or terminate. Learn how to deliver bad news, respond to formal notices, and turn an adversarial customer into a recovery partner.',
      estimatedMinutes: 80,
      learningObjectives: [
        'Describe the discipline required to communicate bad news to a government customer proactively before they discover it independently',
        'Explain the legal significance of cure notices and show cause letters and what must happen within the response window',
        'Build a credible recovery plan that can convert a frustrated government customer into a recovery partner',
        'Distinguish between a frustrated government customer and one who has lost confidence, and explain why the difference matters',
      ],
      lessons: [
        {
          id: 'ops-b2-m4-l1-bad-news',
          title: 'Communicating Bad News Before the Customer Finds Out Another Way',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'The principle is simple: when you know something has gone wrong, tell the government customer before they find out from someone else. The execution requires discipline because every human instinct pushes in the opposite direction — wait until you understand it better, wait until you have a solution, wait until you know how bad it is. The problem is that waiting converts a manageable situation into a credibility crisis. The moment the government customer finds out about a problem from their own data, from another contractor, or from a subcontractor communication, the contractor\'s ability to manage the narrative and the recovery is permanently impaired.',
            },
            {
              type: 'heading',
              text: 'The Information Asymmetry Problem',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Defense programs generate information that flows to the government through multiple channels simultaneously. Your monthly status report is one channel. Your IMS updates (if DCMA has access to your schedule system) are another. CDRLs, test reports, problem/failure reports, and minutes from program reviews are others. Your subcontractors communicate directly with the government in many programs. The QAR observes your production floor. The government program office has a team whose job is to track your program. If something is going wrong and you have not told them, the probability they will discover it through another channel before you brief it is high — and rising every day.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'The Discovery Moment That Changed the Recovery',
              text: 'A program manager on a ground radar program knew in week 6 of a 52-week development phase that a key component supplier had encountered a materials availability problem that would delay subsystem delivery by approximately eight weeks. He spent three weeks working with the supplier on alternative sources before briefing the government customer, believing he would have a solution in hand when he told them. In week 9, the government program office received a subcontractor status report (required by the contract) from the component supplier that described the materials issue and referenced an 8-week delay. The government contracting officer called the PM. The PM had to explain why he had known about the problem for three weeks without disclosing it. The eight-week delay was manageable. The credibility loss was not. The government required the PM to brief the program office weekly (instead of monthly) for the remainder of the program — a surveillance burden that consumed significant program resources and signaled distrust throughout the government team. Total cost of the three-week delay in disclosure: approximately 40 additional weekly status meetings over the next nine months.',
            },
            {
              type: 'heading',
              text: 'The Bad News Brief Format',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'When you brief bad news to a government customer, the format matters. A disorganized, emotional, or incomplete briefing makes the situation worse. A structured brief that demonstrates you understand the problem, have assessed the impact, and are actively working the response signals competence even when the news is bad.',
            },
            {
              type: 'ordered-list',
              items: [
                'The problem: what happened, when you discovered it, what the current status is',
                'The impact assessment: schedule impact (worst case, most likely, best case), cost impact, performance impact, downstream dependencies affected',
                'What you have done since discovery: actions taken, alternatives explored, subcontractor and supplier engagement',
                'Current most-likely recovery plan: specific actions, responsible owners, dates',
                'What you need from the customer: a decision, access to a government resource, a contract modification, or just awareness at this stage',
                'When you will provide the next update: a date and format for the follow-on communication',
              ],
            },
            {
              type: 'heading',
              text: 'The Communication Discipline That Prevents Surprises',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Program managers who consistently avoid the "found out another way" problem share one practice: they have a defined threshold below which they decide for the customer whether something is worth disclosing, and above which they disclose without waiting to have a solution. The threshold varies by program and relationship, but it is explicit and pre-negotiated. A typical version: "Any event that affects schedule, cost, or performance by more than 30 days or 5% gets disclosed within 72 hours of identification, regardless of whether we have a solution." That rule removes the judgment call in the moment — which is when judgment is most compromised by stress and wishful thinking.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Monthly Status Reports Are Not Sufficient',
              text: 'A monthly status report that discloses a significant problem is better than not disclosing it, but it is not a substitute for timely notification. If an event occurred in week 1 and you disclose it in the week 4 monthly report, the government will always wonder what else you are holding for the monthly report cycle. For significant events, notify by phone or in-person brief, then document in the monthly report. The phone call demonstrates urgency; the documentation creates the paper trail.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Small contractors are often more vulnerable to the bad news delay problem because there are fewer people in the communication chain and decisions about what to disclose are made by the PM alone under stress. Consider establishing a standing rule: before any weekly status update to the government, the PM asks "is there anything the customer does not know that could affect the program that we have known about for more than a week?" If the answer is yes and the reason for not disclosing is not solution development (as opposed to avoidance), disclose it.',
            },
          ],
        },
        {
          id: 'ops-b2-m4-l2-formal-notices',
          title: 'Cure Notices, Show Cause Letters, and What They Mean Legally',
          estimatedMinutes: 27,
          content: [
            {
              type: 'paragraph',
              text: 'Cure notices and show cause letters are formal contract documents with legal significance. They are not expressions of frustration. They are specific legal instruments that initiate a defined process with defined timelines, defined required actions, and potential legal consequences including contract termination for default. Program managers who have not experienced these before sometimes treat them as strongly worded letters. That is a dangerous misunderstanding.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Cure Notice', definition: 'A formal government notice under FAR 49.607 that the contractor is in danger of defaulting on the contract and that the contractor has 10 days to cure the deficiency or show why the contract should not be terminated for default.' },
                { term: 'Show Cause', definition: 'A formal government notice requiring the contractor to show why the contract should not be terminated for default, typically issued when the government has already concluded that a default condition exists.' },
                { term: 'Termination for Default (T4D)', definition: 'Government-initiated contract termination based on contractor failure to deliver on time, failure to make progress, or failure to perform any other contract requirement. T4D entitles the government to reprocure from another source and charge the excess cost to the defaulting contractor.' },
                { term: 'Termination for Convenience (T4C)', definition: 'Government-initiated contract termination at the government\'s convenience (no contractor fault). The contractor is entitled to costs incurred plus reasonable profit on work performed.' },
                { term: 'Excusable Delay', definition: 'A delay caused by factors beyond the contractor\'s reasonable control and without contractor fault or negligence (Acts of God, government actions, labor disputes, etc.). Excusable delays may entitle the contractor to a schedule extension but not additional compensation.' },
              ],
            },
            {
              type: 'heading',
              text: 'What a Cure Notice Actually Requires',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'When you receive a cure notice, you have 10 calendar days to respond. The response must address whether and how the deficiency will be cured. If you believe the deficiency can be cured, the response must include a credible plan with specific actions and dates. If you believe the deficiency was caused by excusable delay, the response must document the excusable cause with evidence. If the government is not satisfied with the response, they can proceed to termination for default. The 10-day window is not negotiable without a government agreement to extend it.',
            },
            {
              type: 'table',
              headers: ['Document', 'Trigger', 'Your Response Window', 'Risk if Not Addressed'],
              rows: [
                ['Cure Notice', 'Government believes contractor is in danger of default on a material contract requirement', '10 calendar days to respond with cure plan or excusable cause', 'Government may terminate for default after 10 days'],
                ['Show Cause Letter', 'Government has concluded a default condition exists; this is typically the final notice before T4D', 'As specified in the letter (often 10 days)', 'Termination for default, reprocurement at contractor\'s cost'],
                ['Corrective Action Request (CAR)', 'Nonconformance or quality system failure requiring formal corrective action', 'As specified (typically 30 days for root cause and corrective action plan)', 'Escalation to show cause or quality system suspension'],
                ['Performance Deficiency Letter', 'Less formal than cure notice; documents performance concern', 'As specified (typically 15–30 days)', 'Escalation to cure notice if not addressed'],
              ],
            },
            {
              type: 'heading',
              text: 'How to Respond to a Cure Notice',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The moment you receive a cure notice, three things must happen simultaneously: (1) Legal notification — your contracts manager or legal counsel must be informed immediately; the cure notice has legal implications that require professional review. (2) Root cause analysis — you must understand why the default condition exists before you can credibly plan to cure it. (3) Executive escalation — a cure notice is a program-level event that must be visible to your senior leadership, not managed at the PM level alone.',
            },
            {
              type: 'paragraph',
              text: 'The response must be credible, not reassuring. A response that says "we understand your concerns and are committed to delivering" without a specific plan with milestones and accountability will be read by the government as evasion. A response that provides a day-by-day action plan, names the individuals responsible, acknowledges the root cause of the default condition, and explains how that root cause has been or will be eliminated is the only response that has a chance of being accepted.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Termination for Default Penalty',
              text: 'A termination for default is one of the worst outcomes in defense contracting. The government is entitled to terminate, reprocure from another source, and charge the difference in cost to you. If the reprocurement costs significantly more than your contract price — which is common when the government has to go back to the market on an emergency basis — you can be liable for a very large reprocurement cost differential. In addition, T4D enters your past performance record, which will affect your ability to win future government business. Understanding these stakes is why the cure notice response deserves maximum priority from the day it arrives.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Small contractors frequently do not have an in-house contracts attorney. If you are in this situation, the day you receive a cure notice is the day you engage outside legal counsel with government contracts experience. The response to a cure notice is a legal document with legal consequences. The cost of legal counsel to draft the response is trivial compared to the cost of a T4D. For programs that are strategically important to your company, consider establishing a relationship with a government contracts attorney before you need one.',
            },
          ],
        },
        {
          id: 'ops-b2-m4-l3-recovery',
          title: 'From Adversarial to Recovery Partner — and When That Is No Longer Possible',
          estimatedMinutes: 27,
          content: [
            {
              type: 'paragraph',
              text: 'The most important diagnostic distinction in a troubled defense program is this: Is the government customer frustrated, or have they lost confidence? Frustration is recoverable. It requires a credible recovery plan, consistent execution, and time. Confidence loss is a different condition — it means the government has concluded that you cannot execute, and they are managing the program toward termination rather than recovery. Attempting to recover a confidence-loss situation with the same approach that works for a frustration situation will not work.',
            },
            {
              type: 'heading',
              text: 'Indicators That Distinguish Frustration from Confidence Loss',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Indicator', 'Frustrated Customer', 'Customer Who Has Lost Confidence'],
              rows: [
                ['Communication style', 'Direct, focused on specific problems; still asking for solutions', 'Formal, documented; questions framed as fact-finding rather than problem-solving'],
                ['Meeting behavior', 'Engaged, asks questions, provides guidance', 'Records meetings, brings multiple government attendees, limits responses to questions'],
                ['Recovery discussion', 'Actively participates in building recovery plan', 'Listens to recovery plan without contributing; asks for plan in writing'],
                ['Contractor access', 'Normal program office access; PM has direct contact with government PM', 'Communication increasingly routed through contracting officer; government PM no longer responds directly'],
                ['Surveillance level', 'Standard surveillance per contract', 'Increased DCMA presence, additional CDRLs added, more frequent formal reviews required'],
                ['Legal signals', 'No formal notices', 'Performance deficiency letters, cure notices, or increased documentation of contractor statements'],
              ],
            },
            {
              type: 'heading',
              text: 'Building a Credible Recovery Plan',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A credible recovery plan is not a commitment to work harder. It is a documented, resource-backed analysis of how you will recover a specific deficit — schedule, technical, or cost — within a defined timeframe. The government has heard commitments to work harder from contractors that subsequently failed. What they have not heard enough of is: here is the root cause of the problem, here is the specific action sequence with dates and names, here is the resource we are adding to support the recovery, and here is the leading indicator that will tell both of us by week 3 whether the recovery is on track.',
            },
            {
              type: 'ordered-list',
              items: [
                'Root cause documentation: specifically what caused the condition the recovery plan is addressing — not symptoms, causes',
                'Root cause elimination: what specific action has been taken or will be taken to eliminate the root cause, by whom, by when',
                'Recovery action sequence: the step-by-step action plan with a date and responsible party for each action',
                'Resource commitment: what specific resources (people, equipment, budget) have been committed to the recovery and where they are coming from',
                'Leading indicator: what measurable signal will confirm by a defined near-term date that the recovery is on track',
                'Contingency: what happens if the leading indicator at week 3 shows the recovery is not on track — an explicit contingency plan',
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Turning the Corner with a Government Customer',
              text: 'A software development program was six months behind schedule on a command and control system. The government program manager had lost confidence in the contractor\'s schedule estimates — previous recovery plans had been submitted and not met. The contractor\'s new PM came to the program management review with a recovery plan that was structured differently: it included a process capability analysis of the software development function that identified two specific root causes (requirement volatility and inadequate peer review coverage), a specific team restructuring that doubled the QA staffing on the two highest-risk modules, and a weekly integration build metric that would be shared with the government as a leading indicator. The government program manager\'s first response was: "I\'ve heard recovery plans before." The contractor\'s PM said: "I know. This one has a leading indicator that will tell both of us by week 3 whether the recovery is real. If we miss the week 3 indicator, I will tell you before you have to ask me." That commitment to the leading indicator shifted the dynamic. The week 3 metric was met. The week 6 metric was met. By week 12 the government program manager was attending integration builds and contributing to the schedule recovery — no longer adversarial, now a partner in the recovery.',
            },
            {
              type: 'heading',
              text: 'When Recovery Is No Longer the Likely Outcome',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'There are programs that cannot be recovered within the existing contract structure. The technical problem is more complex than the contract scope can support. The cost to recover exceeds the remaining contract value. The schedule deficit cannot be compressed without unacceptable risk. In these situations, the most constructive approach is a direct conversation with the government customer about restructuring the contract — revised deliverables, extended schedule, or a de-scope of requirements — rather than submitting recovery plans that are not credible. A government customer who is offered a realistic restructuring proposal respects it more than a contractor who submits increasingly optimistic recovery plans that consistently fail.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'The most effective protection against the frustrated-to-confidence-loss transition is consistent communication. A government customer who hears about problems from you, receives specific recovery plans, and sees those plans executed on schedule may be frustrated by problems but will not lose confidence in your ability to manage them. Confidence is lost when the customer develops the belief that you are not in control of your own program — and that belief is most often formed by a pattern of surprises, not by any single failure.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q-b2-m4-1',
          type: 'multiple-choice',
          question: 'A defense contractor discovers on a Tuesday that a key subcontractor delivery will be delayed by six weeks. The monthly status report is due in 12 days. The correct approach is:',
          options: [
            'Document the issue in the monthly status report — the status report is the appropriate formal communication channel',
            'Wait until you have a recovery plan in hand before notifying the government, to present a problem and a solution simultaneously',
            'Notify the government program manager by phone within 72 hours of discovery and document in the monthly status report',
            'Have the subcontractor communicate directly with the government so the prime is not blamed for the delay',
          ],
          correctIndex: 2,
          explanation: 'Timely notification requires a phone call or meeting — not waiting for the monthly report cycle. Waiting 12 days to disclose a known six-week schedule impact is the kind of delay that damages credibility when the government finds out through another channel in the meantime. The monthly report should also document the event, but it cannot substitute for timely notification.',
        },
        {
          id: 'q-b2-m4-2',
          type: 'multiple-choice',
          question: 'A contractor receives a cure notice. What is the response window and what must the response contain?',
          options: [
            '30 calendar days; a general commitment to improve performance and meet contract requirements',
            '10 calendar days; a credible cure plan with specific actions and dates, or documented evidence of excusable cause',
            '60 calendar days; a root cause analysis and corrective action plan per the contractor\'s quality system',
            '10 business days; a formal protest that the default condition characterization is incorrect',
          ],
          correctIndex: 1,
          explanation: 'Under FAR 49.607, the cure notice response window is 10 calendar days. The response must contain either a credible plan to cure the deficiency (with specific actions, dates, and accountability) or documented evidence that the cause is excusable delay. A general commitment to improve performance without a specific plan will not be accepted as an adequate cure.',
        },
        {
          id: 'q-b2-m4-3',
          type: 'true-false',
          question: 'In a termination for default, the government is entitled to reprocure from another source and charge the cost difference to the defaulting contractor.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. This is one of the key consequences of termination for default that distinguishes it from termination for convenience. The government may reprocure the undelivered work from another source, and if the reprocurement cost exceeds the terminated contract price, the defaulting contractor is liable for the excess cost. This is separate from and in addition to the reputational and past performance consequences of a T4D.',
        },
        {
          id: 'q-b2-m4-4',
          type: 'multiple-choice',
          question: 'Which behavior most clearly indicates that a government customer has moved from frustration to a loss of confidence in the contractor?',
          options: [
            'The government program manager asks for written confirmation of verbal commitments',
            'Communication is increasingly routed through the contracting officer, the government PM stops responding directly, and meetings are formally documented',
            'The government increases the frequency of monthly status reviews to biweekly',
            'The government requests an updated recovery plan after a schedule slip',
          ],
          correctIndex: 1,
          explanation: 'Routing communication through the contracting officer (rather than the program office), loss of direct PM-to-PM contact, and formal documentation of contractor statements are signals that the government is building a record in preparation for legal or contractual action — not collaborating on recovery. This pattern indicates confidence loss. Requesting written confirmation or an updated recovery plan is consistent with a frustrated but engaged customer.',
        },
        {
          id: 'q-b2-m4-5',
          type: 'multiple-choice',
          question: 'What distinguishes a credible recovery plan from a commitment to improve?',
          options: [
            'A credible recovery plan is signed by a company officer; a commitment to improve can be signed by the PM',
            'A credible recovery plan includes root cause, root cause elimination, specific action sequence with dates and names, resource commitment, and a leading indicator with a contingency',
            'A credible recovery plan includes a budget for the recovery; a commitment to improve does not',
            'A credible recovery plan requires government approval; a commitment to improve is a contractor document',
          ],
          correctIndex: 1,
          explanation: 'Credibility comes from specificity. A recovery plan that documents root cause, shows how the root cause is being eliminated, names the specific actions with dates and owners, commits specific resources, and identifies a leading indicator that will signal plan success or failure early is credible. A plan that says "we are committed to on-time delivery" or "we will increase staffing" without these specifics is a commitment, not a plan.',
        },
        {
          id: 'q-b2-m4-6',
          type: 'multiple-choice',
          question: 'A defense program is five months behind schedule and the technical challenges are more complex than the contract scope anticipated. Recovery plans have been submitted twice and not met. The most constructive action is:',
          options: [
            'Submit a third, more detailed recovery plan with more aggressive milestones to demonstrate commitment',
            'Engage legal counsel to prepare for a potential cure notice response',
            'Have a direct conversation with the government customer about contract restructuring — revised scope, extended schedule, or de-scope — rather than submitting another unexecutable recovery plan',
            'Request that the government replace the program manager on their side with someone more experienced in schedule recovery',
          ],
          correctIndex: 2,
          explanation: 'When recovery plans have been submitted and not met twice, submitting a third is likely to further damage credibility. If the program cannot be recovered within the existing contract structure, a direct conversation about restructuring is more constructive and more honest. Government customers generally respect a contractor who identifies an unexecutable situation and proposes a realistic restructuring over one who continues to submit optimistic plans that fail.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 5 — Simulation: Program Execution Crisis
    // ─────────────────────────────────────────────
    {
      id: 'ops-b2-m5-simulation',
      number: 5,
      title: 'Simulation: Program Execution Crisis',
      description: 'Apply everything from this course in a high-stakes program execution scenario. You are the program manager of a troubled defense electronics program facing simultaneous schedule, quality, and customer relationship crises. The decisions you make in the next 30 days determine whether the program recovers or terminates.',
      estimatedMinutes: 65,
      learningObjectives: [
        'Apply IMS management and CDRL tracking skills to a program under schedule pressure',
        'Make configuration management decisions under time pressure with incomplete information',
        'Develop and execute a government customer communication strategy in a crisis',
        'Build a credible recovery plan that addresses root causes, not symptoms',
      ],
      lessons: [
        {
          id: 'ops-b2-m5-l1-intro',
          title: 'Program Scenario Briefing',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph',
              text: 'You are taking over as program manager of the Sentinel Ground Surveillance System (SGSS) program, a $28M firm-fixed-price development and low-rate initial production contract for a vehicle-mounted radar and sensor fusion system. The previous PM was replaced three weeks ago. You are 14 months into an 18-month development phase. Your briefing package reveals the following.',
            },
            {
              type: 'heading',
              text: 'Current Program Status',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Schedule: Critical Design Review (CDR) is 6 weeks away. The IMS shows CDR on track, but you have not yet spoken with the engineering leads.',
                'CDRLs: A review of the CDRL register (which you found in a spreadsheet on the previous PM\'s desktop) shows 3 overdue monthly status reports and a Systems Engineering Management Plan (SEMP) update that was due 45 days ago.',
                'Configuration: Engineering has been making design improvements during the CDR preparation period. You do not yet know if any of these were Class I changes that required ECPs.',
                'Quality: A first article for the sensor housing — a NADCAP-required welded assembly — failed dimensional inspection 3 weeks ago. A second first article attempt is underway but no schedule for resubmission has been established.',
                'Customer: You received a message this morning from the government program manager requesting an urgent call. The subject line reads: "SGSS Program Status — Immediate Discussion Required."',
                'Staffing: Your two senior systems engineers are both on the critical path for CDR preparation. One has given notice and is leaving in 5 weeks.',
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Your First 72 Hours',
              text: 'Before the simulation begins, consider: in your first 72 hours as PM, what do you do first? What information do you need before you call the government customer back? What do you tell the engineering leads? What do you do about the overdue CDRLs? The order in which you address these issues will determine how much control you have over the situation when you walk into the government call. The simulation will present these decisions sequentially and score your choices.',
            },
            {
              type: 'heading',
              text: 'Key Principles for Program Crisis Management',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Understand before you commit: do not make promises to the government customer before you have spoken with your engineering and quality leads',
                'Disclose proactively: every problem in this program status that the government does not already know about must be disclosed in the call you are about to have — not dribbled out over the next several weeks',
                'Sequence your actions: some actions are prerequisites to others; the order matters and the simulation will score sequence as well as individual decisions',
                'Separate urgency from importance: the overdue CDRLs feel urgent; the configuration management question may be more important; the departing systems engineer may be the highest-risk item of all',
                'Lead indicators, not commitments: every commitment you make to this government customer should come with a leading indicator — a near-term measurable signal that the commitment is on track',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What to Watch For in the Simulation',
              text: 'This simulation is designed to present you with trade-offs that feel uncomfortable — where the right answer requires short-term pain (disclosing problems, giving bad news, admitting you do not yet have a plan) in exchange for long-term program health. The tempting wrong answers in each decision point will be specific and plausible. The simulation will debrief each decision with an explanation of why the recommended answer produces better outcomes than the alternatives.',
            },
          ],
        },
        {
          id: 'ops-b2-m5-sim',
          title: 'Program Execution Crisis Simulation',
          estimatedMinutes: 50,
          content: [
            {
              type: 'paragraph',
              text: 'The simulation places you in the program manager role for the SGSS program. Over the course of 15 decision points, you will manage the schedule crisis, the CDRL backlog, the configuration management investigation, the first article recovery, and the government customer relationship — simultaneously, with imperfect information and time pressure. Your decisions are scored on immediate outcome and downstream consequence.',
            },
            {
              type: 'simulation',
              simulationId: 'defense-program-crisis',
              title: 'SGSS Program Execution Crisis',
              description: 'You are the incoming PM on a troubled defense electronics program with 4 months to CDR and simultaneous crises in schedule, configuration management, quality, and customer confidence. Navigate 15 decision points covering: your first 72 hours, the government customer call, the CDRL disclosure strategy, the configuration management investigation, the first article recovery plan, and the CDR preparation sprint. Each decision is scored and debriefed. Final score determines program outcome: successful recovery, partial recovery requiring contract modification, or termination.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'After the Simulation',
              text: 'When you complete the simulation, review your decision log before taking the module quiz. The quiz questions reference the decision frameworks covered in the simulation debrief. The highest-scoring path through the simulation is not the most comfortable path — it is the one that prioritizes honest communication and disciplined execution over short-term protection of the program\'s appearance.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'q-b2-m5-1',
          type: 'multiple-choice',
          question: 'You are a new PM who has just discovered that your program has 3 overdue monthly status report CDRLs and one overdue plan update. Before calling the government customer, you should:',
          options: [
            'Submit the overdue CDRLs immediately using whatever information is available, so they are no longer overdue before the call',
            'Assess the content and accuracy of the overdue CDRLs and confirm the delivery dates with your contracts manager so you can give the government an accurate status and plan',
            'Wait until the call to disclose the overdue CDRLs so you can present them in the context of the broader program status',
            'Have your contracts manager call the government contracting officer to request retroactive extensions before the PM call',
          ],
          correctIndex: 1,
          explanation: 'Submitting incomplete or inaccurate CDRLs to appear compliant is worse than disclosing the overdue status — it can produce additional corrective actions when errors are found. You need accurate information before the call so you can give the government a specific plan (not just an acknowledgment). Waiting until the call to disclose gives the impression the previous PM\'s team knew and did not act — which may be true but should be framed with a corrective action plan.',
        },
        {
          id: 'q-b2-m5-2',
          type: 'multiple-choice',
          question: 'During your first day as PM, engineering tells you that three design improvements made during CDR preparation were classified internally as Class II changes and implemented without CCB review. The correct immediate action is:',
          options: [
            'Accept the team\'s classification and proceed to CDR — internal teams are the best judge of change class',
            'Have a configuration management engineer review each of the three changes against the Class I criteria to confirm whether government ECP approval was required before CDR proceeds',
            'Reclassify all three as Class I and submit ECPs immediately to avoid any compliance risk',
            'Document the three changes in the CDR package as "improvements noted for baseline update" and move forward',
          ],
          correctIndex: 1,
          explanation: 'The Class I/II classification requires objective evaluation against the criteria — did any change affect form, fit, function, or any government-controlled specification? That evaluation must be done by someone who understands both the technical change and the CM criteria. Accepting the team\'s self-classification without review leaves you exposed at CDR if the government team identifies what should have been a Class I change. Reclassifying all three as Class I without review wastes time and may be unnecessary.',
        },
        {
          id: 'q-b2-m5-3',
          type: 'multiple-choice',
          question: 'The government program manager\'s urgent call request is likely triggered by one or more of your program\'s known problems. Your preparation for the call should prioritize:',
          options: [
            'Knowing the current CDR schedule status so you can open the call with positive news',
            'Understanding the full current program status — schedule, CDRLs, configuration issues, and first article status — so you can disclose all known issues in one conversation',
            'Preparing a recovery plan so you enter the call with solutions, not just problems',
            'Checking DCMA\'s most recent IMS assessment to understand what the government already knows',
          ],
          correctIndex: 1,
          explanation: 'The most critical preparation is knowing the full current status of all known issues so you can disclose them comprehensively in one call. The government customer made the call; they may already know some of these issues. Entering the call with incomplete knowledge of your own program\'s status will be apparent immediately. Checking DCMA\'s IMS assessment is useful but secondary — your obligation is to disclose what you know, regardless of what they already know.',
        },
        {
          id: 'q-b2-m5-4',
          type: 'multiple-choice',
          question: 'The first article for the sensor housing has failed dimensional inspection and a second first article is being built. What information is essential before the second first article attempt proceeds?',
          options: [
            'The government QAR\'s schedule for the follow-on inspection visit',
            'Root cause analysis on each failed dimension and confirmation that Cpk on those dimensions has been improved before the second article is run',
            'Customer approval of the plan to attempt a second first article',
            'Updated cost estimate for the second first article production run',
          ],
          correctIndex: 1,
          explanation: 'The most common cause of second first article failures is proceeding without genuine root cause understanding. Each failed dimension must be analyzed to determine whether the failure was due to systematic process bias or excessive process variation, and the corrective action must address the identified cause before the second article is run. A second failure has significantly worse consequences — it signals a process that is not under control and will generate a corrective action requirement that follows the program.',
        },
        {
          id: 'q-b2-m5-5',
          type: 'multiple-choice',
          question: 'Your senior systems engineer — one of two on the CDR critical path — has given notice and is leaving in 5 weeks. CDR is 6 weeks away. The most important immediate action regarding this risk is:',
          options: [
            'Ask the engineer to reconsider their resignation given the critical timing',
            'Notify the government customer immediately that CDR may slip due to staffing',
            'Assess exactly which CDR deliverables depend on this engineer, begin knowledge transfer immediately, and identify whether CDR can be completed in 5 weeks or requires a schedule adjustment',
            'Hire a replacement immediately and plan for a standard transition period',
          ],
          correctIndex: 2,
          explanation: 'The first step is assessment: which specific CDR deliverables and CDR entrance criteria tasks require this engineer\'s direct knowledge or technical authority? Once you know the dependency map, you can assess whether the CDR can be completed before the departure, whether specific tasks can be knowledge-transferred to other team members, or whether a schedule adjustment is necessary. Notifying the government without this assessment gives them a risk with no plan. Asking the engineer to reconsider may be appropriate but is not the first action — you need the assessment regardless of their decision.',
        },
        {
          id: 'q-b2-m5-6',
          type: 'multiple-choice',
          question: 'In your government customer call, you plan to disclose the overdue CDRLs, the potential configuration management issue, and the first article status. The government PM asks: "Are there any other issues on this program I should know about?" The correct response is:',
          options: [
            '"No, I believe those are the major issues at this point."',
            '"I have only been on this program for two days — I will need more time before I can answer that question completely."',
            '"I have been on this program for two days. I have disclosed everything I currently know. I will complete my full program assessment within the next seven days and brief you on anything additional I find."',
            '"Our team is actively investigating the situation and will provide a comprehensive status in the monthly report."',
          ],
          correctIndex: 2,
          explanation: 'The correct answer acknowledges the limitation of two days of program knowledge honestly, commits to a specific timeframe for a comprehensive assessment, and does not imply there are no additional issues. Saying "no" after two days is not credible. "I need more time" without a specific commitment is evasive. Deferring to the monthly report is too slow for a program under scrutiny. Committing to a 7-day comprehensive assessment and brief demonstrates control and follow-through.',
        },
        {
          id: 'q-b2-m5-7',
          type: 'multiple-choice',
          question: 'You have completed your 7-day program assessment and found two additional issues beyond those disclosed in the initial call: one subcontract is at risk of delivering a component 3 weeks late, and a NADCAP welding accreditation at a secondary supplier expired 30 days ago and parts have been produced during the lapse. Which issue is higher priority and why?',
          options: [
            'The subcontract delay — it directly affects the CDR schedule',
            'The NADCAP lapse — it is a potential contract compliance failure affecting already-produced parts with no retroactive path to accreditation',
            'Both are equal priority and should be disclosed simultaneously in the follow-on brief',
            'Neither is urgent; both should be included in the monthly status report',
          ],
          correctIndex: 1,
          explanation: 'The NADCAP accreditation lapse is higher priority because it affects the acceptability of parts already produced — there is no retroactive path to NADCAP accreditation, and the parts may be unacceptable under the contract. This requires immediate government disclosure, a hold on the affected parts pending disposition, and a plan for re-performing the welds at an accredited supplier or obtaining a waiver. The subcontract delay, while serious, has mitigation paths (schedule compression, alternate sourcing) that can be assessed and presented in the same brief.',
        },
        {
          id: 'q-b2-m5-8',
          type: 'multiple-choice',
          question: 'After your comprehensive 7-day assessment and your second brief to the government, the government PM says: "I appreciate the thoroughness, but I need to be honest with you — we\'ve heard a lot of plans from this program and we are not confident in the contractor\'s execution. We are evaluating our options." This statement indicates:',
          options: [
            'Frustration that can be resolved by submitting a stronger recovery plan than previous PMs submitted',
            'Confidence loss — the government has concluded the contractor cannot execute, and the program may be heading toward formal action',
            'A negotiating position — the government wants more resources or a contract modification and is using this language as leverage',
            'Normal program oversight language that does not indicate elevated risk',
          ],
          correctIndex: 1,
          explanation: 'The phrase "evaluating our options" combined with explicit statement of lost confidence signals that the government is reviewing the contractual remedies available to them — which include cure notice, show cause, and termination for default. This is confidence loss, not frustration. The appropriate response is to take it seriously as a signal that formal action may be imminent, ensure your legal counsel is briefed, and develop your recovery approach with that reality explicitly in view rather than assuming a strong recovery plan will resolve it.',
        },
      ],
    },
  ],
};
