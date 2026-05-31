import type { Course } from '../../types/course';

// ─── Module 1: Earned Value in Practice ──────────────────────────────────────

const module1 = {
  id: 'dod-b3-m1',
  number: 1,
  title: 'Earned Value in Practice',
  description:
    'The daily mechanics of running EVMS on a real program — not the certification framework but the numbers that actually tell you whether your program will make it.',
  estimatedMinutes: 108,
  learningObjectives: [
    'Interpret BCWS, BCWP, and ACWP in the context of a program under stress',
    'Identify when SPI and CPI readings are unreliable versus actionable',
    'Calculate and explain TCPI and its implications for program recovery',
    'Write a Corrective Action Report that satisfies government review and drives real change',
    'Justify an EAC rebaseline to a skeptical Contracting Officer',
  ],
  lessons: [
    {
      id: 'dod-b3-m1-l1',
      title: 'BCWS, BCWP, ACWP — What the Numbers Mean When Your Program Is in Trouble',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Every EVMS training course shows you the formulas. Few of them tell you what to do when the numbers are lying to you — and early in a program, they almost always are. This lesson is about reading earned value data in the context of a real program under pressure, not in a classroom scenario where everything behaves.',
        },
        {
          type: 'heading' as const,
          text: 'The Three Numbers and What They Actually Represent',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'BCWS (Budgeted Cost of Work Scheduled)',
              definition:
                'The planned value of work that should have been accomplished by a given point in time. Also called PV (Planned Value). This is your program plan expressed in dollars.',
            },
            {
              term: 'BCWP (Budgeted Cost of Work Performed)',
              definition:
                'The earned value — the budget value of the work actually completed. Also called EV (Earned Value). The critical insight: this is measured in budget dollars, not actual dollars, so it strips out cost efficiency from schedule measurement.',
            },
            {
              term: 'ACWP (Actual Cost of Work Performed)',
              definition:
                'What you actually spent to accomplish the work credited as BCWP. Also called AC (Actual Cost). The lag in ACWP reporting — typically 30–60 days on large programs — is one of the most dangerous sources of false confidence in early EV readings.',
            },
            {
              term: 'CV (Cost Variance)',
              definition: 'BCWP minus ACWP. Negative means you are spending more than budgeted for the work accomplished.',
            },
            {
              term: 'SV (Schedule Variance)',
              definition: 'BCWP minus BCWS. Negative means you have accomplished less work than planned.',
            },
          ],
        },
        {
          type: 'heading' as const,
          text: 'SPI and CPI: When to Trust Them and When Not To',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The Schedule Performance Index (SPI = BCWP / BCWS) and Cost Performance Index (CPI = BCWP / ACWP) are the two numbers your government customer will look at first. An SPI below 1.0 means behind schedule. A CPI below 1.0 means over cost. Simple enough — except that in the first 15–20% of a program\'s performance measurement baseline, neither index is statistically meaningful.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Early-Program Trap',
          text: 'In the first 15% of cumulative program spend, SPI and CPI have high variance and low predictive value. A CPI of 0.87 at 10% completion does not reliably predict a 13% overrun at completion — the standard deviation on that forecast is enormous. If you brief a government PM with those numbers as though they are settled signals, you will lose credibility. The honest answer is: "We are watching it, the indices are not yet stable, and here is what we are doing to confirm or refute the early trend."',
        },
        {
          type: 'paragraph' as const,
          text: 'By contrast, CPI at 20% completion or beyond has remarkable statistical stability. Humphreys and other researchers have shown that the CPI at 20% cumulative completion is within ±10% of the final CPI more than 90% of the time. The implication: if your CPI is 0.85 at 25% complete, your program has a serious cost problem that will not recover by working harder.',
        },
        {
          type: 'table' as const,
          headers: ['Index', 'Value Range', 'Interpretation', 'Typical Government Response'],
          rows: [
            ['CPI or SPI', '> 1.05', 'Ahead — verify this is real, not a front-loading artifact', 'Positive attention; may trigger schedule compression request'],
            ['CPI or SPI', '0.95 – 1.05', 'On track — acceptable variance band', 'Routine review'],
            ['CPI or SPI', '0.90 – 0.95', 'Caution — developing problem', 'Questions during program review; may request corrective action plan'],
            ['CPI or SPI', '0.80 – 0.90', 'Problem — formal CAR territory', 'Corrective Action Request from government; possible surveillance increase'],
            ['CPI or SPI', '< 0.80', 'Crisis — program is in serious trouble', 'Formal action; potential contract modification or program restructure'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'ACWP Lag and Its Consequences',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'On large programs with complex supply chains, actual costs often lag the period of performance by 45 to 90 days. Subcontractor invoices arrive late. Internal labor charges get redistributed. Material receipts get logged in a different month than they occurred. The result: your CPI looks better than it is because you are measuring BCWP against yesterday\'s ACWP. Every experienced program manager should ask their finance team: "How current is our ACWP?" before briefing EV indices to the government.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'If your program is showing a CPI above 1.0 in the first six months, do not celebrate. Verify the ACWP is current, verify the earned value is being credited correctly (not front-loaded), and check whether your subcontractors are reporting their actual costs or their planned costs. A phantom CPI above 1.0 that corrects itself at month nine is a contract-threatening event.',
        },
      ],
    },
    {
      id: 'dod-b3-m1-l2',
      title: 'TCPI: The Most Honest Metric in EVMS',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The To-Complete Performance Index (TCPI) is the metric that program managers avoid showing their customers — which is exactly why it is the most useful one. TCPI answers the question no one wants to ask: to finish the remaining work within budget, what CPI must we achieve for the rest of the program?',
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'TCPI (To-Complete Performance Index)',
              definition:
                'The cost efficiency required on all remaining work to achieve a target. TCPI(BAC) = (BAC − BCWP) / (BAC − ACWP). TCPI(EAC) = (BAC − BCWP) / (EAC − ACWP). Values above 1.0 mean you must work more efficiently than you have been.',
            },
            {
              term: 'BAC (Budget at Completion)',
              definition: 'The total authorized budget for the program or control account — the sum of all BCWS through program end.',
            },
            {
              term: 'EAC (Estimate at Completion)',
              definition:
                'The current best estimate of total program cost at completion, incorporating actual performance to date and re-estimate of remaining work.',
            },
            {
              term: 'ETC (Estimate to Complete)',
              definition: 'The estimated cost to finish all remaining work. ETC = EAC − ACWP.',
            },
          ],
        },
        {
          type: 'heading' as const,
          text: 'Reading the TCPI Signal',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'If your CPI has been running 0.87 for the past six months and your TCPI(BAC) is 1.22, you are being asked to perform 40% better than you have been performing to finish within the original budget. That is almost never achievable. The TCPI is telling you — unambiguously — that the BAC is no longer a realistic target and you need to rebaseline.',
        },
        {
          type: 'table' as const,
          headers: ['TCPI Value', 'Practical Meaning', 'Action Indicated'],
          rows: [
            ['< 1.00', 'Remaining work is easier than average performance to date — budget recovery possible', 'Continue current approach; verify forecasting assumptions'],
            ['1.00 – 1.10', 'Modest improvement required — achievable with focused management', 'Corrective actions, close monitoring'],
            ['1.10 – 1.20', 'Significant efficiency improvement required — unlikely without scope or resource change', 'Formal corrective action plan; begin EAC rebaseline analysis'],
            ['> 1.20', 'Mathematically unrealistic given program history', 'Rebaseline is almost certainly warranted; prepare government notification'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'TCPI vs. CPI: The Gap That Cannot Be Papered Over',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The most important use of TCPI is comparing it to current CPI. If CPI is 0.88 and TCPI(BAC) is 1.18, the gap is 0.30. That gap quantifies how far your required future performance deviates from your actual past performance. Government program managers use exactly this comparison during IBRs and program reviews to determine whether a contractor\'s recovery plan is credible.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'War Story: The Recovery Plan That No One Believed',
          text: 'A mid-tier defense electronics contractor on a $180M ACAT II radar program submitted a corrective action plan in response to a CPI of 0.83 at 30% completion. The plan projected recovery to CPI 1.04 over the next eight months through "improved manufacturing efficiency and material cost reduction." The TCPI(BAC) at the time was 1.27. The government\'s DCMA ACO ran the numbers in the meeting and asked, in front of the program manager and the VP of programs, "Can you explain what specific changes will produce a 44-point CPI swing when your trend line shows continuing degradation?" There was no credible answer. The program was restructured, the contract was modified with a revised BAC, and the program manager was replaced. The lesson: if your recovery plan requires a TCPI that is materially above your recent CPI, your plan is not a plan — it is a wish.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: 'Calculate TCPI(BAC) every month and compare it to your trailing three-month CPI average. If the gap exceeds 0.15, you have a rebaseline decision to make — and making it proactively, with a well-documented EAC and a credible recovery plan, is vastly better than having DCMA force it at a program review.',
        },
      ],
    },
    {
      id: 'dod-b3-m1-l3',
      title: 'CARs, EAC Rebaselining, and the Government Conversation',
      estimatedMinutes: 38,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Two of the most consequential documents in a troubled defense program are the Corrective Action Report and the revised EAC. Both are opportunities to either build or destroy credibility with your government customer. Most contractors do both badly.',
        },
        {
          type: 'heading' as const,
          text: 'Writing a CAR That Actually Works',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'CAR (Corrective Action Report)',
              definition:
                'A formal document submitted in response to a government-identified variance or the contractor\'s own variance analysis. Describes root cause, corrective actions taken or planned, and expected impact on cost and schedule.',
            },
            {
              term: 'VAR (Variance Analysis Report)',
              definition:
                'Periodic analysis of significant cost and schedule variances from the performance measurement baseline, typically submitted monthly with the CPR (Contract Performance Report).',
            },
            {
              term: 'CPR (Contract Performance Report)',
              definition:
                'The monthly EVMS data report submitted under DFARS 252.234-7002. Includes five formats covering WBS data, organizational data, baseline, staffing, and problem analysis.',
            },
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'A CAR that satisfies the government has three components that most CARs omit or execute badly: (1) a root cause that is specific enough to be falsifiable — not "increased material costs" but "titanium fastener pricing increased 23% between proposal and procurement due to supplier consolidation, affecting 847 line items"; (2) corrective actions that are measurable — not "increased management attention" but "weekly material cost review instituted with VP Supply Chain, target: recover $340K of $1.2M variance by month 14"; (3) an updated EAC that reflects the CAR\'s assumptions, not a separate finance exercise.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The CAR That Triggers a Surveillance Increase',
          text: 'The fastest way to invite DCMA into your facility every week is to submit a CAR that describes root cause in vague terms and then shows no measurable change in subsequent CPR data. Government reviewers track CAR commitments against subsequent EV performance. A CAR that promises "improved subcontractor management" followed by three months of worsening SV on the subcontract work packages is a flag. They will remember.',
        },
        {
          type: 'heading' as const,
          text: 'EAC Rebaselining: When, How, and What It Signals',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Rebaselining the EAC is not a defeat — but it is treated as one by contractors who do it reactively, under pressure, without a credible bottom-up estimate to support the new number. The contractors who manage rebaselines well do three things: they initiate the conversation before the government demands it, they bring a bottom-up re-estimate (not a CPI-based formula), and they tie the new EAC directly to their CAR corrective actions.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Trigger: TCPI(BAC) exceeds 1.15 and trailing CPI is below 0.90 for three consecutive months',
            'Authorization: internal MRR (Management Reserve Review) to release any MR; documentation of remaining work re-estimate by CAM (Control Account Manager)',
            'Government notification: brief the government PM before submitting the revised CPR Format 3 — no one likes surprises in a data report',
            'EAC methodology: document whether you are using EAC = ACWP + ETC (re-estimate), EAC = BAC / CPI, or a hybrid — and why',
            'Recovery plan: what specific actions change the performance trajectory, with measurable milestones and owners',
            'Follow-through: the first CPR after rebaseline is watched by everyone — your new EAC needs to hold',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'DFARS and ANSI/EIA-748 Requirements',
          text: 'DFARS 252.234-7002 requires EVMS compliance on cost or incentive contracts exceeding $20M. The underlying standard is ANSI/EIA-748, which defines 32 guidelines across five process areas: Organization, Planning & Budgeting, Accounting, Analysis, and Revisions & Data Maintenance. Rebaselining must comply with Guideline 28 (maintain authorized budget baseline) and Guideline 30 (incorporate authorized changes in timely manner). An unauthorized rebaseline — adjusting the PMB without a contract modification — is an audit finding.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'If you are managing a program with a deteriorating CPI and you have not yet had the rebaseline conversation with your government customer, you are in a worse position than you think. The longer you wait, the larger the gap between your current BAC and any credible EAC, and the harder it is to present a recovery plan that government will accept. Proactive rebaselines with solid bottom-up estimates are viewed very differently from forced rebaselines after a DCMA surveillance finding.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dod-b3-m1-q1',
      type: 'multiple-choice' as const,
      question: 'Your program is 12% complete by cumulative spend. CPI is 0.89 and SPI is 0.93. What is the most accurate characterization of these indices?',
      options: [
        'The program has a confirmed cost and schedule problem requiring immediate corrective action',
        'The indices are in their high-variance early period and are not yet reliable predictors of final performance',
        'The SPI is acceptable but the CPI indicates a serious overrun is certain',
        'The indices are within normal variance bands and require no action',
      ],
      correctIndex: 1,
      explanation:
        'Before approximately 15–20% cumulative completion, SPI and CPI have high variance and low predictive value. These indices are worth watching and investigating, but briefing them as confirmed signals at 12% completion overstates their reliability. The honest answer is to monitor closely and verify whether the trend is real.',
    },
    {
      id: 'dod-b3-m1-q2',
      type: 'multiple-choice' as const,
      question: 'TCPI(BAC) = 1.23 and the trailing three-month CPI average is 0.84. What does this mean?',
      options: [
        'The program is performing 23% above budget and ahead of plan',
        'The program must achieve 23% better efficiency than current performance on all remaining work to finish within BAC — which is effectively unrealistic',
        'The program needs a 16% efficiency improvement, which is achievable with focused management',
        'TCPI and CPI cannot be compared directly because they measure different things',
      ],
      correctIndex: 1,
      explanation:
        'TCPI(BAC) of 1.23 means future work must be done at 123% efficiency (23% better than budget) to finish within BAC. With a trailing CPI of 0.84, the program would need to swing from 84% to 123% efficiency — a 39-point gap that is not achievable through management attention alone. This is a clear rebaseline signal.',
    },
    {
      id: 'dod-b3-m1-q3',
      type: 'multiple-choice' as const,
      question: 'Which DFARS clause mandates EVMS compliance on applicable defense contracts?',
      options: [
        'DFARS 252.246-7007',
        'DFARS 252.234-7002',
        'DFARS 252.211-7003',
        'DFARS 252.215-7010',
      ],
      correctIndex: 1,
      explanation:
        'DFARS 252.234-7002 is the Earned Value Management System clause, applicable to cost or incentive contracts exceeding $20M. The underlying standard is ANSI/EIA-748.',
    },
    {
      id: 'dod-b3-m1-q4',
      type: 'true-false' as const,
      question: 'A CAR that describes root cause as "increased material costs" and corrective action as "enhanced supplier management" meets government expectations for a formal variance analysis response.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        'False. A credible CAR requires a root cause specific enough to be falsifiable (e.g., a specific material, supplier, dollar impact, and timing) and corrective actions that are measurable with owners and milestones. Vague language satisfies no one and invites escalating surveillance.',
    },
    {
      id: 'dod-b3-m1-q5',
      type: 'multiple-choice' as const,
      question: 'Cost Variance (CV) is calculated as:',
      options: [
        'BCWS − ACWP',
        'BCWP − ACWP',
        'BCWP − BCWS',
        'BAC − EAC',
      ],
      correctIndex: 1,
      explanation:
        'CV = BCWP − ACWP. It measures whether you spent more or less than budgeted for the work actually accomplished. Schedule Variance (SV) = BCWP − BCWS, measuring whether you accomplished more or less work than planned.',
    },
    {
      id: 'dod-b3-m1-q6',
      type: 'multiple-choice' as const,
      question: 'A contractor adjusts the Performance Measurement Baseline without a contract modification in order to "clean up" negative variances before the monthly CPR submission. This is:',
      options: [
        'Acceptable if approved by the program manager and documented in the EVMS system',
        'A violation of ANSI/EIA-748 Guideline 28 and an audit finding',
        'Permitted if the variance is less than the management reserve threshold',
        'Required procedure when SPI drops below 0.85',
      ],
      correctIndex: 1,
      explanation:
        'Adjusting the PMB without an authorized contract modification violates ANSI/EIA-748 Guideline 28 (maintain authorized budget baseline) and constitutes fraudulent reporting. This is among the most serious EVMS audit findings and can trigger a decertification review.',
    },
  ],
};

// ─── Module 2: Producibility and Design for Manufacturing ─────────────────────

const module2 = {
  id: 'dod-b3-m2',
  number: 2,
  title: 'Producibility and Design for Manufacturing in Defense',
  description:
    'The single largest preventable cause of defense program overruns: releasing designs that have never been seriously reviewed for how they will actually be manufactured.',
  estimatedMinutes: 108,
  learningObjectives: [
    'Define what IPD actually requires from program management — not just who attends the meetings',
    'Identify producibility risk factors at design review that predict manufacturing problems',
    'Apply DFM principles to defense hardware tolerancing and process capability',
    'Calculate the cost impact of finding producibility problems at different program stages',
    'Structure a supplier capability assessment as part of the design process',
  ],
  lessons: [
    {
      id: 'dod-b3-m2-l1',
      title: 'Why Designs Fail in Production: The IPD Failure Mode',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Integrated Product Development is one of the most routinely misimplemented practices in defense contracting. It is written into nearly every major program\'s Systems Engineering Management Plan. It is cited in almost every proposal. And it fails in the same way on program after program: the IPT meeting attendance list includes manufacturing and test, but the decisions are still made by engineering — because the schedule pressure to release drawings is on engineering, and "producibility review" happens after the drawings are released.',
        },
        {
          type: 'heading' as const,
          text: 'What IPD Actually Requires',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'IPD (Integrated Product Development)',
              definition:
                'A structured development philosophy where engineering, manufacturing, test, quality, and supply chain collaborate on design decisions before release, not after. The goal is to ensure the design is producible, testable, and supportable before it is frozen.',
            },
            {
              term: 'IPT (Integrated Product Team)',
              definition:
                'The cross-functional team that executes IPD on a specific product or subsystem. Effectiveness is measured not by meeting attendance but by whether manufacturing and test constraints actually influence design decisions.',
            },
            {
              term: 'DFM (Design for Manufacturing)',
              definition:
                'A systematic design practice that optimizes product designs for manufacturability — reducing complexity, tightening only tolerances that are functionally necessary, and validating that manufacturing processes can achieve design requirements.',
            },
            {
              term: 'DFT (Design for Test)',
              definition:
                'Ensuring testability is built into the design: test points, accessibility, built-in test capability, and stimulability of failure modes — before the design is released.',
            },
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'IPD is working when manufacturing engineers have veto authority — or at minimum, formal objection authority with an escalation path — over design decisions that create production risk. If your program\'s IPTs have no mechanism for a manufacturing engineer to delay a drawing release because of a producibility concern, you do not have IPD. You have IPT meetings.',
        },
        {
          type: 'heading' as const,
          text: 'The Cost Curve: Where Producibility Problems Are Found Matters More Than What They Are',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The cost to fix a design problem multiplies by an order of magnitude at each stage of the program. Finding a tolerance problem during preliminary design review costs a few hours of engineering time. Finding it at critical design review costs a drawing package revision. Finding it at the first article costs tooling rework and possible schedule impacts. Finding it at unit 47 of production is a different magnitude of pain entirely.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'War Story: The Board Spin at Unit 47',
          text: 'A defense electronics contractor producing airborne radar signal processors found a board layout issue at unit 47 of a 200-unit production run. The issue: a high-speed digital interface had been routed without adequate ground plane isolation, causing intermittent EMI failures under vibration that were not caught in lab testing but appeared in environmental qualification. The fix required a full board spin — new artwork, new tooling, new qualification testing. Total impact on a $2.4M production lot: $890K in unplanned rework, 14-week schedule slip, and a re-negotiated delivery schedule that cost the contractor its award fee. The same issue had been flagged — in writing — by a manufacturing engineer during the preliminary design review, ten months earlier. The flag was closed as "will monitor." IPD was listed as a program best practice in the contractor\'s annual report.',
        },
        {
          type: 'table' as const,
          headers: ['Phase', 'Cost to Fix a Producibility Problem', 'Typical Discovery Mechanism'],
          rows: [
            ['Conceptual Design', '1x (baseline)', 'Design review, paper analysis'],
            ['Preliminary Design', '3–5x', 'Breadboard, design review with manufacturing'],
            ['Critical Design', '10–15x', 'Prototype build, DFM review'],
            ['First Article / LRIP', '50–100x', 'First article inspection, test failure'],
            ['Full Rate Production', '200–500x', 'Production yield data, field failure'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'If your program does not have a formal producibility review with documented disposition of every manufacturing concern before CDR, you are accepting risk that the cost curve above quantifies. The question is not whether producibility problems exist — they always do. The question is which phase you find them in.',
        },
      ],
    },
    {
      id: 'dod-b3-m2-l2',
      title: 'DFM Principles Applied to Defense Hardware',
      estimatedMinutes: 37,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Defense hardware presents DFM challenges that commercial electronics DFM training does not prepare you for: exotic materials, extreme environmental requirements, long production runs at low rate, single-source specialty processes, and military specifications that constrain design choices. The core DFM principles still apply — but they require adaptation.',
        },
        {
          type: 'heading' as const,
          text: 'Tolerancing for Manufacturing Capability, Not Design Desire',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The most common DFM failure in defense hardware is the tolerance that was added by an engineer who was not thinking about manufacturing capability — it was tighter than needed for function, and it was never reviewed against process capability data. On a complex machined assembly, a single unnecessarily tight tolerance can drive a feature to a specialized machine, increasing cost and cycle time for the entire assembly.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Cpk (Process Capability Index)',
              definition:
                'A measure of how well a manufacturing process meets a specification, accounting for both process variation and centering. Cpk ≥ 1.33 is typically required for defense production processes; Cpk ≥ 1.67 for safety-critical features.',
            },
            {
              term: 'ECP (Engineering Change Proposal)',
              definition:
                'A formal document proposing a change to a configuration-controlled item. Class I ECPs affect form, fit, or function and require government approval. Class II ECPs are internal to the contractor. Finding a producibility problem after CDR means filing a Class I ECP — a government-visible event.',
            },
            {
              term: 'First Article Inspection (FAI)',
              definition:
                'A complete physical and functional verification that the first production unit or assembly meets all design requirements, including AS9102 requirements for defense/aerospace hardware.',
            },
          ],
        },
        {
          type: 'heading' as const,
          text: 'DFM Checklist for Defense Hardware Design Reviews',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['DFM Category', 'Review Question', 'Red Flag'],
          rows: [
            ['Tolerancing', 'Are all tolerances tighter than ±0.005" traceable to a functional requirement?', 'Tolerances tightened "for safety margin" without capability data'],
            ['Material Selection', 'Are all materials available from at least two qualified sources?', 'Single-source exotic alloys specified without delivery risk assessment'],
            ['Process Capability', 'Has Cpk been validated for every critical characteristic at the intended supplier?', 'Process capability assumed from spec sheet, not measured data'],
            ['Assembly Sequence', 'Can all fasteners be accessed and torqued with standard tooling?', 'Drawings reviewed only in 2D; 3D accessibility not verified'],
            ['Inspection Accessibility', 'Can all critical dimensions be measured with standard CMM or hand tools?', 'Features that require specialized gauging not previously qualified'],
            ['Surface Treatments', 'Are finish requirements (plating, anodize, coating) compatible with base material?', 'Chrome or cadmium plating specified without DFARS 252.223 review'],
            ['Connector and Harness', 'Are connector types and pin counts standardized across the program?', 'Multiple connector families with no rationalization review'],
            ['Thermal Management', 'Has the thermal design been verified against manufacturing tolerances on heat sink interfaces?', 'Thermal resistance calculations based on nominal dimensions only'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Process Capability Validation Before Design Release',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The principle is straightforward: before a drawing is released with a critical characteristic, someone with manufacturing engineering responsibility must confirm that the intended manufacturing process is capable of meeting the requirement. On a new program, this means capability studies — either from production of similar prior parts, or from process capability runs on the specific feature. On a recompete or follow-on program, it means pulling the historical yield and nonconformance data for the equivalent feature.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: 'Identify the ten most complex machined or fabricated features on your program\'s critical path hardware. For each one, get a written statement from manufacturing engineering that the process is capable of the tolerance — with Cpk data to support it. Do this before CDR. The cost of the capability study is trivial compared to the cost of an ECP filed at LRIP.',
        },
      ],
    },
    {
      id: 'dod-b3-m2-l3',
      title: 'Supplier Capability Assessment in the Design Phase',
      estimatedMinutes: 36,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The most expensive time to discover that your sole-source specialty supplier cannot produce to the drawing is after you have released the drawing and placed a purchase order. Supplier capability assessment is a design-phase activity, not a procurement activity — and on programs where it is treated as the latter, it consistently produces surprises that land in the program\'s risk register as "impacts TBD."',
        },
        {
          type: 'heading' as const,
          text: 'What a Real Supplier Capability Assessment Covers',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Equipment capability: Does the supplier\'s machine park include the equipment class required for the critical features? Confirmed with site visit or documented equipment list, not assumed from marketing materials.',
            'Workforce: Are the required skills (e.g., orbital welding certification, specific NDT methods) currently available, or are they dependent on specific individuals who may not be there when your work arrives?',
            'Capacity: What is the supplier\'s current load versus their demonstrated capacity? A supplier running at 85% utilization has no buffer for your expedite requests when you need them.',
            'Quality system: Is the supplier AS9100 certified? When was the last surveillance audit? What were the findings? This data is available — ask for it.',
            'Financial health: Is the supplier viable? A sole-source supplier that goes into financial distress mid-production is a program-level crisis. D&B or financial review is not excessive due diligence for a sole-source critical supplier.',
            'Delivery performance: What is their on-time delivery rate for the past 24 months? For which customers? This is the most predictive single metric for whether they will meet your schedule.',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'War Story: The Sole-Source Trap',
          text: 'A defense systems integrator on a $67M IDIQ for electronic warfare subsystems specified a proprietary RF connector from a single domestic supplier — a company they had used on three prior programs without incident. The supplier was not assessed at program initiation because "we know them well." Eighteen months into production, the supplier was acquired by a European conglomerate, who immediately consolidated production to their offshore facility. The result: a 22-week delivery gap, a new qualification requirement under DFARS 252.225 (domestic sourcing), and a $1.1M emergency tooling investment to qualify a domestic alternative. The program manager later estimated that a $15,000 supplier risk assessment at program start would have identified the acquisition risk, which had been a known possibility in the industry for over a year.',
        },
        {
          type: 'heading' as const,
          text: 'Integrating Supplier Assessment into the Design Gate Reviews',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The most effective programs treat supplier capability as a gate criterion at PDR and CDR, not a procurement action that happens after design release. The PDR gate should confirm that capable suppliers exist for all unique or sole-source materials and processes. The CDR gate should confirm that the identified suppliers have been assessed and are capable of producing to the released drawings.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'Look at your current design review gate criteria. If "supplier capability confirmed" is not a required gate exit criterion with documented evidence, you have a producibility risk that is not being managed. Add it. The pushback will be "it slows down design reviews" — which is exactly the point. It is much cheaper to slow down a design review than to slow down a production line.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dod-b3-m2-q1',
      type: 'multiple-choice' as const,
      question: 'A manufacturing engineer raises a producibility concern during IPT design review. The program schedule is under pressure. What does an effective IPD process require?',
      options: [
        'Log the concern in the action item register and proceed with drawing release to maintain schedule',
        'Provide a formal disposition path — the concern must be resolved or formally accepted with documented rationale before drawing release',
        'Defer the concern to the manufacturing team to resolve after the program reaches LRIP',
        'Escalate to the program manager, who has authority to override the concern for schedule reasons',
      ],
      correctIndex: 1,
      explanation:
        'Effective IPD requires that manufacturing and test concerns receive a formal disposition before drawing release — either the design is changed, or the risk is formally accepted with documented rationale and a mitigation plan. Logging and proceeding is the most common failure mode, and it is exactly what happened in the board spin war story.',
    },
    {
      id: 'dod-b3-m2-q2',
      type: 'multiple-choice' as const,
      question: 'According to the cost curve, finding a producibility problem at full-rate production costs approximately how much more than finding it during conceptual design?',
      options: [
        '5–10x more',
        '20–50x more',
        '200–500x more',
        'The same — producibility fixes cost the same regardless of when they are found',
      ],
      correctIndex: 2,
      explanation:
        'The cost to fix a producibility problem at full-rate production is typically 200–500x the cost of fixing it during conceptual design. This is because production fixes require ECPs, tooling rework, rework of built units, possible requalification, and delivery schedule impacts.',
    },
    {
      id: 'dod-b3-m2-q3',
      type: 'multiple-choice' as const,
      question: 'Cpk ≥ 1.33 is a typical minimum requirement for defense production processes. What does a Cpk of 1.33 indicate?',
      options: [
        'The process produces zero defects',
        'The process mean is centered in the tolerance band with variation contained to ±4σ within the specification limits',
        'The process is capable with a margin — at least 4σ between the process mean and the nearest specification limit',
        'The process rejects fewer than 1% of units',
      ],
      correctIndex: 2,
      explanation:
        'Cpk = 1.33 means the nearest specification limit is at least 4σ from the process mean (since Cpk = min[(USL-μ)/3σ, (μ-LSL)/3σ], Cpk = 1.33 implies the nearest limit is 4σ away). This corresponds to a process defect rate of approximately 32 PPM on one tail.',
    },
    {
      id: 'dod-b3-m2-q4',
      type: 'true-false' as const,
      question: 'A Class I Engineering Change Proposal affects form, fit, or function and requires government approval.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation:
        'True. Class I ECPs affect the item\'s form, fit, or function — or have contractual impacts — and require government Contracting Officer approval before implementation. Class II ECPs are internal contractor changes that do not affect form, fit, or function.',
    },
    {
      id: 'dod-b3-m2-q5',
      type: 'multiple-choice' as const,
      question: 'At what program gate should supplier capability be a documented exit criterion?',
      options: [
        'After contract award but before program kickoff',
        'At PDR (confirming capable suppliers exist) and at CDR (confirming assessed suppliers can produce to released drawings)',
        'During source selection, as a proposal evaluation factor',
        'Only for sole-source suppliers; competitive suppliers are assessed post-award',
      ],
      correctIndex: 1,
      explanation:
        'Supplier capability assessment should be a formal gate criterion at both PDR (confirming that capable sources exist for unique/sole-source items) and CDR (confirming assessed suppliers can produce to released design). Waiting until post-CDR procurement is the most common failure mode.',
    },
    {
      id: 'dod-b3-m2-q6',
      type: 'multiple-choice' as const,
      question: 'The board spin war story illustrates which root cause most precisely?',
      options: [
        'Inadequate manufacturing workforce skills',
        'A producibility concern formally raised and documented during PDR that was closed without engineering action',
        'Sole-source supplier failure during production',
        'Tolerance specification that exceeded process capability',
      ],
      correctIndex: 1,
      explanation:
        'The war story specifically identifies that a manufacturing engineer flagged the EMI routing issue in writing during PDR, and the concern was closed as "will monitor" — i.e., no engineering action was taken. The core failure is the IPD process: a documented concern was not resolved before design release.',
    },
  ],
};

// ─── Module 3: Subcontractor and Supply Chain Management ──────────────────────

const module3 = {
  id: 'dod-b3-m3',
  number: 3,
  title: 'Subcontractor and Supply Chain Management in Defense',
  description:
    'Flowing down requirements, running meaningful supplier surveillance, managing sole-source dependency, and keeping your program alive when a critical sub fails.',
  estimatedMinutes: 108,
  learningObjectives: [
    'Identify which DFARS clauses must flow down and the consequence of failing to do so',
    'Conduct a supplier surveillance audit that produces actionable findings, not paperwork',
    'Assess and mitigate sole-source supplier risk before it becomes a program crisis',
    'Apply material loss reduction practices to serialized defense hardware',
    'Develop a subcontractor failure contingency plan before the failure occurs',
  ],
  lessons: [
    {
      id: 'dod-b3-m3-l1',
      title: 'Flowing Down Requirements: What You Must Do and What Happens When You Don\'t',
      estimatedMinutes: 36,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Every prime contractor on a defense contract is required to flow certain clauses down to subcontractors. "Required" means mandatory — not discretionary, not situational, not dependent on subcontract dollar value in most cases. When a prime fails to flow down a mandatory clause, the government\'s remedy against the subcontractor becomes the prime\'s obligation. The subcontractor didn\'t agree to it. The prime did.',
        },
        {
          type: 'heading' as const,
          text: 'Mandatory vs. Discretionary Flowdown',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Flowdown Clause',
              definition:
                'A contract clause that the prime contractor is required or permitted to include in subcontracts. Mandatory flowdowns are required by statute, regulation, or the prime contract. Discretionary flowdowns are at the prime\'s option based on risk and applicability.',
            },
            {
              term: 'DFARS 252.246-7007',
              definition:
                'Contractor Counterfeit Electronic Part Detection and Avoidance System — a mandatory flowdown to all subcontractors and suppliers of electronic parts. Failure to flow down makes the prime liable for counterfeit part replacement costs.',
            },
            {
              term: 'CFE (Customer-Furnished Equipment)',
              definition:
                'Government-owned property provided to the contractor for use on the contract. The contractor is strictly accountable for CFE — loss, damage, or unauthorized use is a contractual liability regardless of whether it occurred at a subcontractor facility.',
            },
          ],
        },
        {
          type: 'table' as const,
          headers: ['DFARS Clause', 'Subject', 'Flowdown Requirement', 'Dollar Threshold'],
          rows: [
            ['252.246-7007', 'Counterfeit Electronic Parts', 'Mandatory to all subcontractors providing electronic parts', 'None — all tiers'],
            ['252.211-7003', 'Item Unique Identification (IUID)', 'Mandatory when items meet UID marking criteria', 'None for applicable items'],
            ['252.225-7001', 'Buy American / Balance of Payments', 'Mandatory flowdown except for commercial items', 'Various thresholds'],
            ['252.215-7010', 'Requirements for Certified Cost or Pricing Data', 'Mandatory when sub exceeds threshold', '>$2M generally'],
            ['252.234-7002', 'Earned Value Management System', 'Mandatory when sub meets program criteria', '>$20M cost/incentive'],
            ['252.204-7012', 'Safeguarding Covered Defense Information', 'Mandatory for all subs with access to CDI', 'None'],
            ['252.246-7004', 'Safety of Facilities, Infrastructure, Equipment', 'Mandatory for subcontracts involving depot-level maintenance', 'Applicable activities'],
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'The counterfeit parts clause (DFARS 252.246-7007) is the most common flowdown failure on programs with electronics content. Prime contractors frequently flow it down to their first-tier electronic assembly subcontractors but fail to require those subcontractors to flow it to their component distributors and broker suppliers — the exact tier where counterfeit parts enter the supply chain. A single counterfeit component that causes a field failure can trigger a government audit of the prime\'s entire supply chain traceability system.',
        },
        {
          type: 'heading' as const,
          text: 'Customer-Furnished Equipment at Subcontractor Facilities',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'CFE sent to a subcontractor facility does not reduce the prime\'s accountability — it increases the risk. The prime must flow down the government property clause, maintain visibility of CFE location and condition, and ensure the subcontract has a property control plan. If CFE is damaged at a subcontractor facility and the subcontract does not have the appropriate property clause, the prime has no contractual remedy against the subcontractor and must absorb the government\'s claim.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'Conduct a flowdown audit on your three largest subcontracts. Pull your prime contract\'s list of required flowdowns and compare it against your subcontract clause lists. Gaps found in a proactive internal audit are fixable through contract modification. Gaps found during a DCAA or DCMA audit become findings — and findings have consequences for billing, surveillance, and future contract awards.',
        },
      ],
    },
    {
      id: 'dod-b3-m3-l2',
      title: 'Supplier Surveillance That Actually Produces Results',
      estimatedMinutes: 36,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Most contractor supplier surveillance programs are checkbox exercises that satisfy a CDRL requirement and produce nothing useful. The program manager gets a surveillance report that says the supplier was visited, found to be "generally compliant," with "minor findings in documentation" that were "immediately corrected." The next delivery is late. The quality is marginal. No one is surprised except the person who signed the surveillance report.',
        },
        {
          type: 'heading' as const,
          text: 'What a Useful Supplier Audit Actually Looks Like',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'A useful supplier audit has a specific objective, not a generic checklist. It is planned based on the supplier\'s current performance data — delivery rate, NCR rate, open corrective actions — not on a calendar schedule. The auditor has read the supplier\'s quality records and knows what anomalies to investigate before arriving on site. The audit focuses on processes, not paperwork.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Pre-audit analysis: Pull the supplier\'s delivery performance for the past 12 months, their open NCRs (nonconformance reports), and any corrective action requests from prior audits. Identify which specific processes are associated with the worst performance.',
            'Focus areas: Based on pre-audit analysis, define three to five specific audit focus areas — not "review quality system" but "verify that receiving inspection process for raw titanium bar stock includes heat cert verification and CoC review before stock release."',
            'Walk the floor: Spend at least 50% of audit time on the production floor, not in the conference room. Look at actual work in process, not the work order travelers in the file. Ask operators to describe their process. The gap between the documented procedure and actual practice is where problems live.',
            'Records sampling: Pull 10–15 actual work order travelers, not supplier-selected examples. Look for completeness, legibility, real-time versus reconstructed entries, and proper inspector signoffs.',
            'Corrective action follow-up: For every open CAR from prior audits, verify objective evidence of closure — not a statement that the action was taken, but records showing the process change and its verification.',
            'Exit meeting: Present findings as observations with specific evidence, not generalized judgments. Distinguish major findings (process breakdowns with quality risk) from minor findings (documentation gaps).',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'DCMA as a Resource, Not Just an Overseer',
          text: 'For subcontractors that are also government contractors, DCMA may have their own surveillance data on the supplier. The prime contractor can — and should — request DCMA surveillance reports and findings for key subcontractors. This provides an independent view of the supplier\'s quality system performance that supplements your own audit data. Prime contractors who ignore DCMA surveillance data on their subs are routinely surprised by problems that DCMA had already documented.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: 'The most predictive leading indicator for a subcontractor problem is not their AS9100 certificate — it is their open corrective action aging data. A supplier with 15 open CARs more than 90 days old is telling you that their corrective action process is not working. Add CAR aging to your standard supplier performance metrics and make it a surveillance trigger, not an afterthought.',
        },
      ],
    },
    {
      id: 'dod-b3-m3-l3',
      title: 'When a Critical Subcontractor Fails: Mitigation and Material Loss Reduction',
      estimatedMinutes: 36,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The question is not whether a critical subcontractor will have a performance problem. On a program of sufficient complexity and duration, it will happen. The question is whether you have a contingency plan before it happens, or whether you are inventing one during a phone call with your program\'s Contracting Officer.',
        },
        {
          type: 'heading' as const,
          text: 'The Sole-Source Problem',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Sole-source suppliers create schedule leverage that the supplier may or may not exploit — but that is not the primary risk. The primary risk is that a single-point failure in the supply chain becomes a program-level crisis with no immediate resolution path. Buffer inventory, alternate source qualification, and make-buy re-evaluation are the three tools. All three require lead time. None of them work when you implement them after the crisis starts.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'IUID (Item Unique Identification)',
              definition:
                'A system for marking and tracking individual items with a unique identifier, typically a 2D data matrix barcode, as required by DFARS 252.211-7003. Enables traceability of serialized hardware through the supply chain and into the field.',
            },
            {
              term: 'Receiving Inspection',
              definition:
                'Verification activities performed when hardware arrives from a supplier, confirming conformance to purchase order requirements, applicable specs, and any flow-down inspection requirements before the hardware is accepted into stock.',
            },
            {
              term: 'NCR (Nonconformance Report)',
              definition:
                'A formal record of hardware that does not conform to applicable requirements, used to control nonconforming material, identify disposition (use-as-is, rework, return, scrap), and trigger corrective action.',
            },
          ],
        },
        {
          type: 'heading' as const,
          text: 'Subcontractor Failure Contingency: Build the Plan Now',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Risk Scenario', 'Mitigation Strategy', 'Lead Time Required', 'Cost Driver'],
          rows: [
            ['Critical sub delivers late', 'Buffer stock at prime facility; aggressive schedule monitoring with milestone incentives', '90–120 days to build buffer', 'Inventory carry cost; potential cash flow impact'],
            ['Critical sub quality failure requiring 100% reinspection', 'Source inspection program; clear acceptance criteria in PO; right-of-access clause', 'Defined at PO award', 'Source inspector labor; potential rework costs'],
            ['Critical sub goes out of business', 'Qualified alternate source; dual-source PO strategy; key equipment and tooling ownership', '6–18 months to qualify alternate', 'Dual-source premium; qualification testing cost'],
            ['Single-source material goes on allocation', 'Long-lead material procurement; strategic buffer stock', '12–24 months for critical alloys', 'Inventory investment; storage requirements'],
            ['Critical sub acquired, offshore production moved', 'Domestic sourcing clause in PO; early acquisition monitoring; alternate source pre-qualified', '12–18 months to pre-qualify', 'Alternate source qualification cost'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Material Loss Reduction: The Basics That Programs Get Wrong',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Serialized hardware loss is a contractual liability and an audit finding, not just a logistics inconvenience. Defense programs that handle CFE or high-value serialized components must maintain continuous chain-of-custody records: receiving inspection records that capture the serial number and condition at receipt, in-process location tracking, and a reconciliation process that accounts for every serialized item at every stage.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'Identify your top five sole-source critical suppliers by both dollar value and schedule criticality. For each one, ask: what is our contingency if this supplier delivers 16 weeks late? If the answer is "we would work with them to recover," you do not have a contingency plan. A real contingency plan names an alternate source, a buffer inventory level, or a make-buy option — with the lead times and costs pre-calculated.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dod-b3-m3-q1',
      type: 'multiple-choice' as const,
      question: 'A prime contractor fails to flow down DFARS 252.246-7007 (Counterfeit Electronic Parts) to a second-tier distributor. A counterfeit component from that distributor causes a field failure. Who is liable for the replacement costs?',
      options: [
        'The second-tier distributor, because they supplied the counterfeit part',
        'The first-tier subcontractor, because they purchased from the distributor',
        'The prime contractor, because the flowdown failure means the government\'s remedy falls on the prime',
        'The government, because they accepted the end item',
      ],
      correctIndex: 2,
      explanation:
        'When a prime contractor fails to flow down a mandatory clause, the government\'s remedy against the entity that should have been bound by the clause becomes the prime\'s obligation. The subcontractor never agreed to the clause because the prime never included it — so the prime absorbs the liability.',
    },
    {
      id: 'dod-b3-m3-q2',
      type: 'multiple-choice' as const,
      question: 'Customer-Furnished Equipment is sent to a subcontractor facility. The subcontract does not include the government property clause. The CFE is damaged at the subcontractor facility. What is the most likely outcome?',
      options: [
        'The subcontractor is liable because they physically damaged the equipment',
        'The prime has no contractual remedy against the subcontractor and must absorb the government\'s claim',
        'The government absorbs the loss because they provided the equipment',
        'The damage is written off as a program risk event with no financial consequence',
      ],
      correctIndex: 1,
      explanation:
        'Without the government property clause in the subcontract, the prime has no contractual mechanism to recover from the subcontractor. The prime\'s liability to the government for CFE accountability does not disappear — it has simply become unrecoverable at the subcontract level.',
    },
    {
      id: 'dod-b3-m3-q3',
      type: 'multiple-choice' as const,
      question: 'What is the most predictive leading indicator for an upcoming subcontractor performance problem?',
      options: [
        'AS9100 certification lapse',
        'Corrective action aging — number of open CARs more than 90 days old',
        'Financial health indicators from D&B',
        'Recent staff turnover in their quality organization',
      ],
      correctIndex: 1,
      explanation:
        'Open corrective action aging is the most predictive single metric. A supplier with 15 open CARs more than 90 days old has a broken corrective action process — their quality system cannot self-correct. Delivery and quality failures at the prime level typically lag this indicator by 60–120 days.',
    },
    {
      id: 'dod-b3-m3-q4',
      type: 'true-false' as const,
      question: 'DFARS 252.204-7012 (Safeguarding Covered Defense Information) has no dollar threshold — it flows down to all subcontractors with access to covered defense information.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation:
        'True. DFARS 252.204-7012 has no dollar threshold for flowdown — it applies to any subcontractor that will have access to covered defense information (CDI) or operationally critical support. This includes small businesses and specialist consultants who may access controlled technical information.',
    },
    {
      id: 'dod-b3-m3-q5',
      type: 'multiple-choice' as const,
      question: 'A sole-source specialty forging supplier is acquired by a foreign company. The prime contractor had no pre-qualified alternate source. What is the most immediate program impact?',
      options: [
        'The supplier relationship continues unchanged — business acquisition does not affect contract performance',
        'DFARS domestic sourcing requirements may be triggered, requiring qualification of a new domestic source with no available buffer inventory or contingency timeline',
        'The prime contractor can immediately terminate the subcontract for convenience at no cost',
        'DCMA automatically approves a schedule extension when a sole-source supplier is acquired',
      ],
      correctIndex: 1,
      explanation:
        'A foreign acquisition of a domestic supplier can trigger DFARS 252.225 domestic sourcing requirements, and with no pre-qualified alternate source, the prime faces a qualification timeline of 12–18 months against a production schedule that assumed continuous supply. This is the exact scenario described in the EW program war story.',
    },
    {
      id: 'dod-b3-m3-q6',
      type: 'multiple-choice' as const,
      question: 'What percentage of a useful supplier audit should be spent on the production floor (versus conference room documentation review)?',
      options: [
        'At least 10% — the bulk of the audit is document and record review',
        'About 25% — a representative sample of production floor activities',
        'At least 50% — because the gap between documented procedure and actual practice is where problems live',
        '100% — document reviews can be done remotely',
      ],
      correctIndex: 2,
      explanation:
        'At least 50% of a meaningful supplier audit should be spent on the production floor. Processes that look correct on paper frequently diverge from actual practice — operators shortcutting steps, in-process inspection being performed after-the-fact, travelers being signed off by supervisors who did not witness the work. Only floor observation reveals these gaps.',
    },
  ],
};

// ─── Module 4: Risk Management That Actually Works ───────────────────────────

const module4 = {
  id: 'dod-b3-m4',
  number: 4,
  title: 'Risk Management That Actually Works',
  description:
    'Risk registers that drive decisions, risk conversations that build government credibility, and the quantitative link between risk, opportunity, and EAC.',
  estimatedMinutes: 108,
  learningObjectives: [
    'Build and maintain a risk register that influences program decisions, not one that satisfies a CDRL',
    'Explain the relationship between risk and opportunity in defense program management',
    'Conduct a risk review with a government customer that strengthens the relationship',
    'Apply formal risk retirement criteria so risks are not carried indefinitely',
    'Quantitatively connect risk probability and impact to the program EAC',
  ],
  lessons: [
    {
      id: 'dod-b3-m4-l1',
      title: 'Risk Registers That Don\'t Sit in a Drawer',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The performative risk register is one of defense contracting\'s most durable failure modes. It appears in every proposal, it gets updated before every program review, and it contains carefully worded risks whose mitigation plans are universally "ongoing monitoring." It has no impact on program decisions because it was never designed to. It exists to satisfy the government\'s risk management data requirement — and it does, technically.',
        },
        {
          type: 'heading' as const,
          text: 'The Difference Between a Performative and a Functional Risk Register',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Risk Register',
              definition:
                'A structured record of identified program risks, including probability of occurrence, consequence if it occurs, mitigation actions, risk owner, retirement criteria, and current status. A functional risk register is a living management tool; a performative one is a compliance artifact.',
            },
            {
              term: 'Risk Probability',
              definition:
                'The estimated likelihood that a risk event will occur, typically rated on a 1–5 or percentage scale. Should be based on program-specific data and analogous program history, not generic default values.',
            },
            {
              term: 'Risk Consequence',
              definition:
                'The impact to program cost, schedule, or technical performance if the risk occurs. Should be quantified in dollars and schedule days whenever possible, not just rated High/Medium/Low.',
            },
            {
              term: 'Risk Retirement Criteria',
              definition:
                'Pre-defined conditions that, when met, justify closing a risk as no longer applicable. Without retirement criteria, risks are carried indefinitely, diluting the register\'s signal value.',
            },
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'A functional risk register has five characteristics that the performative version lacks: (1) risks are stated in terms of program-specific events, not categories; (2) probability and consequence are quantified, not just rated; (3) each risk has a named owner who is accountable; (4) mitigation actions have due dates and are tracked to closure; and (5) the register is reviewed and updated in program management team meetings, not just before government reviews.',
        },
        {
          type: 'table' as const,
          headers: ['Performative Risk Entry', 'Functional Risk Entry'],
          rows: [
            ['"Risk: schedule delay. Prob: Medium. Impact: High. Mitigation: monitoring."', '"Risk: titanium forging lead time extends from 20 to 32 weeks (supplier capacity constraint per Oct quote). Prob: 40%. Impact: 8-week CDR slip, $320K cost impact. Owner: Supply Chain Manager. Mitigation: alternate supplier quote by Nov 15; long-lead PO decision point Dec 1. Retirement criteria: PO placed with confirmed delivery by Feb 28."'],
            ['"Risk: technical performance shortfall. Prob: Low. Impact: High. Mitigation: engineering review."', '"Risk: RF output power fails to meet 47 dBm spec in thermal environment above 45°C (based on breadboard data showing 1.8 dB margin). Prob: 35%. Impact: system-level rework, $890K, 12-week schedule impact. Owner: RF Lead Engineer. Mitigation: thermal design review scheduled Nov 20; alternate PA device characterization by Dec 10. Retirement criteria: first article thermal test passes at full power."'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Risk Probability-Impact Matrix',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Probability', 'Low Impact (< $100K / < 2 weeks)', 'Medium Impact ($100K–$500K / 2–8 weeks)', 'High Impact ($500K–$2M / 8–16 weeks)', 'Critical Impact (> $2M / > 16 weeks)'],
          rows: [
            ['High (> 60%)', 'Watch', 'Mitigate', 'Mitigate — top register', 'Mitigate — report to government'],
            ['Medium (30–60%)', 'Watch', 'Mitigate', 'Mitigate — top register', 'Mitigate — report to government'],
            ['Low (10–30%)', 'Accept', 'Watch', 'Mitigate', 'Mitigate — top register'],
            ['Very Low (< 10%)', 'Accept', 'Accept', 'Watch', 'Mitigate'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: 'Take your current risk register and count how many risks have "ongoing monitoring" as the only mitigation action, no named owner, and no retirement criteria. Those are not managed risks — they are documented liabilities. For each one, either convert it to a functional risk entry or formally accept it and close it. A shorter register of real risks is more useful than a long register of decoration.',
        },
      ],
    },
    {
      id: 'dod-b3-m4-l2',
      title: 'Risk-Opportunity Linkage and the Government Conversation',
      estimatedMinutes: 37,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Risk and opportunity are presented separately in most defense programs — the risk register, and then the opportunity register (if one exists at all). This separation obscures one of the most important dynamics in program management: the mitigation action that retires a schedule risk frequently creates a cost overrun or a cost opportunity, and vice versa. Managing them in separate documents without explicit linkage produces programs that make locally optimal decisions with globally suboptimal results.',
        },
        {
          type: 'heading' as const,
          text: 'How Risk and Opportunity Are Connected',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'The Schedule Recovery That Created a Cost Opportunity',
          text: 'A defense systems contractor on a $44M EO/IR sensor program was running 11 weeks behind schedule at the 40% program point, driven by late delivery of optical components. The program manager authorized a schedule recovery plan that added second-shift assembly, brought forward the environmental qualification testing sequence, and accelerated the software integration milestone by redesigning the test approach. The schedule recovery worked — but it also consumed $280K of management reserve. The revised EAC increased by $280K. The opportunity: the accelerated software integration approach uncovered a firmware defect four weeks earlier than the original plan, avoiding a $620K rework action that would have occurred at the first article. Net impact: $280K spent on schedule recovery, $620K avoided in downstream rework. The programs that capture this linkage use it to justify reserve expenditures to the government. The programs that don\'t have no story to tell except "we spent $280K of MR."',
        },
        {
          type: 'heading' as const,
          text: 'Having a Risk Conversation That Builds Credibility',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The risk conversation with a government customer is one of the most leverage-rich interactions in the program relationship — and most contractors use it to demonstrate compliance rather than to build credibility. Government program managers are not naive. They know programs have problems. What they want to know is whether the contractor is finding and managing the problems, or whether the program manager is going to find out about them by surprise in a CPR data report.',
        },
        {
          type: 'list' as const,
          items: [
            'Disclose risks before they become issues. A risk disclosed in a program review that later materializes is a sign of good risk management. An issue that appears with no prior warning is a sign of either bad management or intentional concealment — and government PMs assume the latter.',
            'Quantify risk consequences in dollars and schedule days. "Significant schedule risk" is not useful. "12-week schedule risk with a $440K cost impact if our titanium supplier misses the March 15 delivery" is useful — and shows the government you actually understand your program.',
            'Connect risk to your EAC. If you are carrying a 30%-probability, $680K risk and your EAC risk adjustment is only $100K, the government PM will calculate the expected value and ask you why. Have a defensible answer.',
            'Report risk retirements as positives. Closing a risk that was previously disclosed as significant is a credibility-building event. Use it as one.',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Action That Triggers Surveillance',
          text: 'The single fastest way to trigger increased DCMA surveillance is to have a risk materialize into an issue that you did not have on your risk register. The government\'s interpretation is that either your risk identification process is inadequate, or you knew about it and did not disclose it. Either interpretation results in increased oversight. Neither is good for your award fee.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'What This Means for Your Business',
          text: 'Before your next program review, review your risk register and identify any risk whose materialization would produce an issue you have not yet disclosed to the government. For each one, either add it to the agenda as a risk item with quantified consequences and a mitigation plan, or formally accept and close it with documented rationale. Arriving at a program review with no risks when your program is 60% complete and has active cost and schedule variances tells the government you are not doing risk management.',
        },
      ],
    },
    {
      id: 'dod-b3-m4-l3',
      title: 'Risk Retirement and Quantitative EAC Connection',
      estimatedMinutes: 36,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Two practices that separate disciplined risk management from theater: knowing when a risk is genuinely closed, and connecting risk probability and impact directly to the EAC. Both require more rigor than most programs apply — and both produce measurable value when they are done well.',
        },
        {
          type: 'heading' as const,
          text: 'Risk Retirement: When Is a Risk Actually Closed?',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Risks on most programs are closed when someone decides they feel comfortable closing them — typically right before a government review, to make the register look like progress is being made. This produces a risk register that gets shorter over time regardless of actual program risk, which is the opposite of what a risk register should do.',
        },
        {
          type: 'paragraph' as const,
          text: 'Legitimate risk retirement requires that the specific conditions that generated the risk no longer exist. A risk about schedule impact from a supplier delivery is retired when: (a) the hardware has been received, inspected, and accepted, not when the supplier confirms the ship date. A risk about technical performance is retired when: (a) the relevant test has been conducted, (b) the results confirm compliance, and (c) the configuration is frozen. A risk about key personnel retention is retired when: (a) the individual has completed the critical program phase they are essential for, or (b) a trained backup has been demonstrated to be capable.',
        },
        {
          type: 'heading' as const,
          text: 'Quantitative Risk-EAC Connection',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The expected value of risk is straightforward: Probability × Consequence. A 40% probability risk with a $500K consequence has an expected value of $200K. Summing the expected values of all active risks gives you the quantitative risk exposure that should be reflected in your EAC as a risk adjustment, or funded from management reserve.',
        },
        {
          type: 'table' as const,
          headers: ['Risk ID', 'Probability', 'Cost Consequence', 'Schedule Consequence', 'Expected Value', 'EAC Adjustment'],
          rows: [
            ['R-07', '45%', '$480K', '6 weeks', '$216K', 'Partially funded in MR: $180K'],
            ['R-12', '30%', '$920K', '11 weeks', '$276K', 'Unfunded — requires MR release decision'],
            ['R-15', '20%', '$1.1M', '14 weeks', '$220K', 'Partially funded in MR: $150K'],
            ['R-21', '60%', '$210K', '3 weeks', '$126K', 'Funded in EAC'],
            ['Total', '—', '—', '—', '$838K expected value', '$506K currently funded — $332K gap'],
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'The $332K gap in the example above represents unfunded risk exposure. A program manager who presents this table to the government is demonstrating exactly the kind of quantitative risk management that builds credibility and maintains award fee performance. A program manager who presents the same four risks as "Medium/High/Medium/Medium" on a color chart is not.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'Sum the expected value (probability × consequence) of every active risk on your program with a consequence above $100K. Compare the total to your management reserve balance. If your expected risk value exceeds your MR, you have unfunded risk exposure that should be in your EAC. If your EAC does not reflect this, you are underreporting program risk to the government — and your EAC will grow when those risks materialize.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dod-b3-m4-q1',
      type: 'multiple-choice' as const,
      question: 'A program\'s risk register has 22 active risks with no named owners, no retirement criteria, and "ongoing monitoring" as the mitigation for 18 of them. This register is best described as:',
      options: [
        'A comprehensive risk register demonstrating thorough risk identification',
        'A performative register that satisfies CDRL requirements but provides no management value',
        'An overly conservative register that should be pruned to the top five risks',
        'An acceptable register pending assignment of risk owners at the next program review',
      ],
      correctIndex: 1,
      explanation:
        'A risk register without named owners, retirement criteria, or substantive mitigation actions is a compliance artifact — it exists to satisfy a data requirement but does not influence program decisions. Its existence provides false assurance that risk is being managed when it is not.',
    },
    {
      id: 'dod-b3-m4-q2',
      type: 'multiple-choice' as const,
      question: 'A program manager has four active risks with expected values (probability × consequence) summing to $838K. Management reserve is $506K. What is the correct characterization?',
      options: [
        'The program has adequate reserve — $506K covers most contingencies',
        'The program has unfunded risk exposure of $332K that should be reflected in the EAC or a reserve request',
        'Expected value calculations overstate actual risk because not all risks will materialize',
        'The risk register should be updated to reduce probabilities until the expected value matches available MR',
      ],
      correctIndex: 1,
      explanation:
        'The $332K gap between expected risk value ($838K) and funded MR ($506K) represents unfunded risk exposure. The correct action is to either increase the EAC, request additional reserve, or implement mitigation actions that reduce the probability or consequence of the high-exposure risks — not to manipulate probabilities to match available funding.',
    },
    {
      id: 'dod-b3-m4-q3',
      type: 'multiple-choice' as const,
      question: 'A supplier delivery risk is properly retired when:',
      options: [
        'The supplier confirms the ship date in writing',
        'The purchase order is accepted by the supplier',
        'The hardware has been received, inspected, and accepted at the prime contractor\'s facility',
        'The supplier passes a pre-ship inspection at their facility',
      ],
      correctIndex: 2,
      explanation:
        'A delivery risk is not retired until the hardware has been physically received, passed receiving inspection, and accepted into stock. Confirmation of ship dates and supplier acceptance of POs are positive indicators but are not the retirement criterion — the hardware can still be damaged in transit, fail inspection, or be delivered to the wrong location.',
    },
    {
      id: 'dod-b3-m4-q4',
      type: 'true-false' as const,
      question: 'Disclosing a risk to the government before it materializes into an issue is a sign of good risk management that typically builds credibility with the government PM.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation:
        'True. Government program managers know programs have problems. A risk disclosed proactively — with a quantified consequence and a mitigation plan — signals that the contractor is managing the program actively. An issue that appears without prior warning signals either inadequate management or intentional concealment, and triggers surveillance.',
    },
    {
      id: 'dod-b3-m4-q5',
      type: 'multiple-choice' as const,
      question: 'What is the expected value of a risk with 40% probability and a $650K cost consequence?',
      options: ['$260K', '$390K', '$650K', '$162.5K'],
      correctIndex: 0,
      explanation:
        '0.40 × $650,000 = $260,000. Expected value is the product of probability and consequence. This $260K expected value represents the risk-adjusted cost exposure that should be funded from management reserve or included in the EAC risk adjustment.',
    },
    {
      id: 'dod-b3-m4-q6',
      type: 'multiple-choice' as const,
      question: 'A schedule recovery plan that consumes $280K of management reserve but avoids a $620K downstream rework action is an example of:',
      options: [
        'A cost overrun that must be reported to the government as a negative EAC change',
        'Risk-opportunity linkage — a mitigation expenditure that generates an offsetting opportunity realization',
        'An unauthorized change to the performance measurement baseline',
        'A management reserve abuse that should be subject to DCMA review',
      ],
      correctIndex: 1,
      explanation:
        'This is a classic risk-opportunity linkage: the $280K MR expenditure to recover schedule (risk mitigation) also accelerated software integration, uncovering a defect early and avoiding $620K of later rework (opportunity realization). Net program benefit: $340K. Programs that track this linkage have a compelling story for MR use justification.',
    },
  ],
};

// ─── Module 5: Simulation — Full Program Review ───────────────────────────────

const module5 = {
  id: 'dod-b3-m5',
  number: 5,
  title: 'Simulation: Full Program Review',
  description:
    'An integrated Integrated Baseline Review simulation that requires applying EVMS, producibility, supply chain, and risk management in a single complex program scenario.',
  estimatedMinutes: 108,
  learningObjectives: [
    'Synthesize EVMS, producibility, supply chain, and risk data in a full program review context',
    'Identify the three most significant program issues from a combined dataset and prioritize them',
    'Construct a coherent EAC and risk-adjusted recovery plan under time pressure',
    'Respond to adversarial government questions in an IBR scenario with specific, credible answers',
    'Distinguish between solvable program problems and program-restructure-level problems',
  ],
  lessons: [
    {
      id: 'dod-b3-m5-l1',
      title: 'IBR Preparation: What the Government Is Actually Looking For',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Integrated Baseline Review is the most consequential technical review in the early life of a defense program. It is the government\'s formal assessment of whether the contractor\'s Performance Measurement Baseline is realistic — whether the work scope, budget, and schedule are mutually consistent and achievable. Every experienced government IBR team member has seen contractors walk into an IBR with a beautiful baseline that unravels under examination. The following is what they are actually looking for.',
        },
        {
          type: 'heading' as const,
          text: 'What Government IBR Teams Examine',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'IBR (Integrated Baseline Review)',
              definition:
                'A joint government-contractor review of the Performance Measurement Baseline, conducted early in the program, to assess whether the baseline is realistic, achievable, and compliant with EVMS requirements. Required by DFARS 252.234-7002 for EVMS-applicable contracts.',
            },
            {
              term: 'PMB (Performance Measurement Baseline)',
              definition:
                'The time-phased budget plan for all authorized work — the sum of all control account budgets, plus undistributed budget, establishing the BCWS profile against which actual performance is measured.',
            },
            {
              term: 'CAM (Control Account Manager)',
              definition:
                'The individual responsible for planning and managing work in a defined control account. CAMs are the primary interface in an IBR — government teams will interview CAMs to verify that they understand their scope, budget, and schedule.',
            },
            {
              term: 'MR (Management Reserve)',
              definition:
                'Budget set aside by the contractor for unforeseen risks within the existing program scope — not for scope changes. Separate from contingency (which covers recognized risks). Typically 5–10% of BAC on complex programs.',
            },
          ],
        },
        {
          type: 'ordered-list' as const,
          items: [
            'CAM knowledge of scope: Government teams will pull CAMs aside individually and ask them to describe their work package scope, budget, and schedule dependencies. A CAM who cannot articulate their scope without the PM in the room is a red flag.',
            'Budget reasonableness: Government will examine whether budgets are achievable based on analogous work, historical rates, and proposed staffing. Unrealistically low control account budgets are flagged — they are a sign of buy-in.',
            'Schedule realism: Government will examine the critical path and network logic for physical constraint, not just mathematical connections. A schedule where everything is "finish-to-start" with no float anywhere is suspect.',
            'Risk register consistency: Government will compare your disclosed risks against your PMB. If you have a risk with a 40% probability and $800K consequence but no management reserve for it, they will ask why.',
            'Subcontract baseline: Government will examine whether subcontract work packages have realistic budgets and schedules, and whether you have properly assessed subcontractor EVMS capability.',
            'WBS completeness: Government will verify that the WBS covers all contract statement of work elements per MIL-HDBK-881. Missing WBS elements are the most common IBR major finding.',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'MIL-HDBK-881 and WBS Compliance',
          text: 'MIL-HDBK-881 (Work Breakdown Structure for Defense Materiel Items) defines the standard WBS taxonomy for defense programs. Government IBR teams will verify that your WBS is compliant with the applicable MIL-HDBK-881 template and that all contract deliverables are traceable to WBS elements. A WBS that does not include a product-level element for each hardware deliverable, a systems engineering element, program management, and data is immediately suspect.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'What This Means for Your Business',
          text: 'Two to four weeks before your IBR, conduct a dry run. Pull six to eight CAMs randomly and interview them without advance notice: What is your scope? What are your budget drivers? What are the three biggest risks in your control account? What are your schedule dependencies? If the answers are weak, your IBR is going to be painful. Fix the CAM preparation, not the CAMs.',
        },
        {
          type: 'paragraph' as const,
          text: 'The simulation that follows places you in the program manager role for a midsize defense electronics program six weeks before the IBR. You will receive a program dataset — EV data, risk register, producibility status, and supply chain health indicators — and you will need to identify the most significant issues, construct a defensible position, and respond to the government\'s IBR examination. The simulation is adversarial by design.',
        },
        {
          type: 'simulation' as const,
          simulationId: 'defense-program-review',
          title: 'IBR Simulation: Integrated Program Review',
          description:
            'You are the Program Manager for the AN/XYZ-7 Electronic Warfare Receiver program, a $94M cost-plus-incentive-fee contract at 28% completion. The government IBR team arrives in six weeks. You have received a data package: CPI 0.88 (trailing 3 months), SPI 0.91, TCPI(BAC) 1.19, three open CARs, a risk register with 14 active risks, a producibility status report flagging two CDR design escapes, and a supply chain report showing one sole-source supplier at 73% on-time delivery over the last 8 months. Work through the pre-IBR analysis, build your position, and respond to the government team\'s examination questions.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dod-b3-m5-q1',
      type: 'multiple-choice' as const,
      question: 'A government IBR team interviews a CAM who cannot describe their control account scope without referring to the PM for answers. What is the most likely IBR outcome?',
      options: [
        'No impact — the government understands that CAMs are technical staff, not program managers',
        'An IBR finding that the EVMS organizational structure does not meet ANSI/EIA-748 Guideline 2 (establish organizational elements responsible for control accounts)',
        'A minor observation logged but not affecting IBR completion',
        'The IBR is immediately suspended pending CAM training',
      ],
      correctIndex: 1,
      explanation:
        'CAM knowledge and accountability is a direct ANSI/EIA-748 requirement (Guideline 2: organizational elements responsible for accomplishing work are identified). A CAM who cannot describe their own scope is an IBR finding that signals the EVMS organizational structure is not functioning as required.',
    },
    {
      id: 'dod-b3-m5-q2',
      type: 'multiple-choice' as const,
      question: 'Your program\'s WBS does not include a Program Management element or a Data element. This is:',
      options: [
        'Acceptable if those activities are budgeted within the hardware WBS elements',
        'A significant IBR finding — MIL-HDBK-881 requires discrete WBS elements for program management and data',
        'A minor documentation issue that can be corrected post-IBR',
        'Not an EVMS requirement — WBS structure is at contractor discretion',
      ],
      correctIndex: 1,
      explanation:
        'MIL-HDBK-881 specifies standard WBS elements that must appear in defense program WBS structures, including Program Management and Data. Embedding these costs in hardware elements obscures their actual expenditure and prevents meaningful management analysis. This is a standard IBR major finding.',
    },
    {
      id: 'dod-b3-m5-q3',
      type: 'multiple-choice' as const,
      question: 'In the IBR simulation, the program shows CPI 0.88 and TCPI(BAC) 1.19. What is the most defensible position for the program manager to take in the IBR?',
      options: [
        'Assert that the CPI will improve to 0.95+ in the next quarter through focused management attention',
        'Acknowledge that the TCPI(BAC) indicates BAC is no longer a realistic target, present a bottom-up EAC reestimate, and describe specific recovery actions with measurable milestones',
        'Argue that the CPI at 28% completion is not statistically reliable and should not be used as a basis for the IBR assessment',
        'Request a contract modification to increase the BAC before the IBR to avoid the finding',
      ],
      correctIndex: 1,
      explanation:
        'The combination of CPI 0.88 (trailing, past the early-program noise threshold at 28% completion) and TCPI(BAC) 1.19 makes the original BAC non-credible. The most defensible IBR position is proactive transparency: acknowledge the signal, present a bottom-up EAC reestimate (not a formula-based number), and demonstrate specific recovery actions. Government teams will find this credible; an optimistic recovery assertion without data will not survive IBR examination.',
    },
    {
      id: 'dod-b3-m5-q4',
      type: 'multiple-choice' as const,
      question: 'The simulation data shows two CDR design escapes flagged in the producibility status report. These are best described as:',
      options: [
        'Low priority since they were identified after CDR and are already being tracked',
        'Class I ECP events — configuration-controlled features found not to meet producibility requirements after CDR, requiring government-approved change action',
        'Internal contractor quality findings that do not need to be disclosed at the IBR',
        'Acceptable variances that can be disposition-ed as use-as-is by the program\'s MRB',
      ],
      correctIndex: 1,
      explanation:
        'Design escapes found after CDR that affect producibility of configuration-controlled items require Class I ECPs, which require government Contracting Officer approval. They cannot be quietly resolved internally, and they must be disclosed at the IBR as risk items with associated schedule and cost impact. Concealing them is a contractual liability.',
    },
    {
      id: 'dod-b3-m5-q5',
      type: 'multiple-choice' as const,
      question: 'A sole-source supplier showing 73% on-time delivery over 8 months represents what type of program risk, and what is the appropriate management action?',
      options: [
        'A Low risk since 73% is close to industry average; no immediate action required',
        'A Medium risk to be monitored monthly through standard supplier performance reporting',
        'A significant supply chain risk requiring immediate contingency action: alternate source qualification assessment, buffer inventory analysis, and root-cause investigation with the supplier',
        'A contractual issue that should be escalated to the Contracting Officer for resolution',
      ],
      correctIndex: 2,
      explanation:
        '73% OTD over 8 months is a serious supply chain signal — roughly one in four deliveries late, with no indication of improvement. On a sole-source critical supplier, this requires immediate action: understand why (capacity, quality, financial?), assess alternate source qualification lead times, and determine whether buffer inventory can mitigate near-term schedule risk. This needs to be in the IBR risk register with specific mitigation actions.',
    },
    {
      id: 'dod-b3-m5-q6',
      type: 'true-false' as const,
      question: 'Management Reserve can be used to fund scope growth identified in contract modifications.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        'False. Management Reserve is designated for unforeseen in-scope risks — it cannot be used for contract scope growth (which requires a formal contract modification and additional funding) or for converting undistributed budget. Using MR to fund scope growth without a contract mod is an EVMS finding and may constitute fraudulent accounting on a cost-reimbursement contract.',
    },
    {
      id: 'dod-b3-m5-q7',
      type: 'multiple-choice' as const,
      question: 'The government IBR team asks why your EAC risk adjustment of $340K is significantly below the $838K expected value of your active risk register. The correct response is:',
      options: [
        '"The expected value methodology overstates risk because individual risks are not perfectly correlated."',
        '"We have mitigation actions underway that reduce the effective probability of the high-consequence risks, and we can walk you through the analysis for each risk."',
        '"Our risk methodology uses judgment-based risk ratings, not quantitative expected value."',
        '"We will update the EAC after the IBR to incorporate the full risk exposure."',
      ],
      correctIndex: 1,
      explanation:
        'The only credible response is the one that connects specific mitigation actions to specific probability reductions for specific risks. A government IBR team with any experience will dismiss pure correlation arguments without data. Promising to update the EAC after the IBR signals that the current EAC is not your best estimate — which is an IBR finding in itself.',
    },
    {
      id: 'dod-b3-m5-q8',
      type: 'multiple-choice' as const,
      question: 'After completing the IBR simulation, you identify that the program has: CPI 0.88, TCPI(BAC) 1.19, two CDR design escapes requiring ECPs, a sole-source supplier at 73% OTD, and three open CARs. What is the most accurate assessment of this program\'s status?',
      options: [
        'The program is in good shape — all issues are identified and being managed',
        'The program has multiple overlapping risk factors that together suggest a high probability of EAC growth and schedule slip; a formal recovery plan and possible contract restructure discussion is warranted',
        'The program issues are individually manageable; there is no systemic problem',
        'The program should be terminated — the risk profile is too high to continue',
      ],
      correctIndex: 1,
      explanation:
        'The combination of deteriorating EV indices (CPI 0.88, TCPI 1.19), active producibility problems (CDR escapes), supply chain risk (73% OTD sole-source), and open corrective actions represents an overlapping, compounding risk profile — not a collection of isolated issues. Each problem individually might be manageable; together they indicate a program that requires a comprehensive recovery plan, a realistic EAC rebaseline, and a transparent conversation with the government about program health. This is a restructure-level discussion, not a routine program review.',
    },
  ],
};

// ─── Course Assembly ──────────────────────────────────────────────────────────

export const defenseOpsDeepCourse: Course = {
  id: 'defense-ops-deep',
  track: 'defense-contracting',
  title: 'Advanced Program Management',
  subtitle: 'Track B · Level 3 · Deep Implementation',
  description:
    'The practitioner-level course for defense program managers running real programs under real pressure. Covers earned value mechanics that actually matter, producibility and DFM applied to defense hardware, supply chain risk management and flowdown requirements, risk registers that drive decisions rather than decorate presentations, and a full integrated program review simulation set in an IBR scenario.',
  status: 'available',
  estimatedHours: 9,
  color: '#5a6e8a',
  icon: '🎯',
  modules: [module1, module2, module3, module4, module5],
};
