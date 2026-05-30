import type { Course } from '../../types/course';

// ─── Module 1: Introduction to DMAIC & Project Scoping ───────────────────────

const module1 = {
  id: 'dmaic-m1',
  number: 1,
  title: 'Introduction to DMAIC & Project Scoping',
  description: 'Understand the DMAIC framework, when to apply it, and how to scope a project for success before entering the Define phase.',
  estimatedMinutes: 75,
  learningObjectives: [
    'Explain what DMAIC stands for and the purpose of each phase',
    'Distinguish DMAIC from PDCA and DMADV and choose the right approach',
    'Identify the characteristics of a well-scoped improvement project',
    'Write SMART goals appropriate for a DMAIC charter',
  ],
  lessons: [
    {
      id: 'dmaic-m1-l1',
      title: 'What Is DMAIC and Why Does It Work?',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'DMAIC (Define, Measure, Analyze, Improve, Control) is a data-driven improvement methodology developed as part of Six Sigma. Unlike ad-hoc problem solving, DMAIC imposes a disciplined sequence that prevents teams from jumping to solutions before they understand the problem.',
        },
        {
          type: 'heading' as const,
          text: 'The Five Phases at a Glance',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Phase', 'Core Question', 'Key Output'],
          rows: [
            ['Define', 'What problem are we solving?', 'Project Charter, SIPOC'],
            ['Measure', 'How bad is the current state?', 'Baseline capability, data plan'],
            ['Analyze', 'What causes the problem?', 'Verified root causes'],
            ['Improve', 'How do we fix it?', 'Piloted, validated solution'],
            ['Control', 'How do we sustain the gains?', 'Control plan, updated SOPs'],
          ],
        },
        {
          type: 'diagram' as const,
          diagramId: 'dmaic-phases',
          title: 'DMAIC Phase Overview',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Why Sequence Matters',
          text: 'Studies of failed improvement projects consistently find that teams skip Measure and Analyze, implement a solution based on intuition, and then struggle to sustain results. The DMAIC gate reviews exist specifically to prevent this pattern.',
        },
        {
          type: 'paragraph' as const,
          text: 'Each phase produces specific deliverables that must be reviewed before the team advances. This gate structure keeps leadership informed and ensures resources are focused on validated problems, not assumptions.',
        },
        {
          type: 'heading' as const,
          text: 'The Data Imperative',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'DMAIC is fundamentally data-driven. Opinions, anecdotes, and hunches are inputs to investigation—not conclusions. Every phase requires quantitative evidence: baseline defect rates, measurement system validity studies, statistical hypothesis tests, and process capability indices.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'If you cannot measure the problem, you cannot confirm that your solution worked. Investining time in Measure pays dividends in every subsequent phase.',
        },
      ],
    },
    {
      id: 'dmaic-m1-l2',
      title: 'DMAIC vs. PDCA vs. DMADV: Choosing the Right Tool',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Three improvement frameworks dominate operational excellence work: PDCA (Plan-Do-Check-Act), DMAIC, and DMADV (Define, Measure, Analyze, Design, Verify). Each suits a different situation.',
        },
        {
          type: 'heading' as const,
          text: 'When to Use Each Framework',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Framework', 'Best For', 'Typical Duration', 'Data Intensity'],
          rows: [
            ['PDCA', 'Rapid, small-scope improvements with a clear hypothesis', '1–4 weeks', 'Low–Medium'],
            ['DMAIC', 'Chronic problems in existing processes with unclear root causes', '3–6 months', 'High'],
            ['DMADV', 'Designing a new process or product that cannot meet targets', '4–9 months', 'Very High'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Decision Example',
          text: 'A team notices that invoice error rates jumped after a software upgrade. They suspect a configuration issue. This is a PDCA situation—the hypothesis is clear, the fix is targeted. If instead invoice errors have been elevated for years with no obvious cause, that calls for DMAIC to investigate the process systematically.',
        },
        {
          type: 'heading' as const,
          text: 'The DMADV Trigger',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'During DMAIC Analyze, teams sometimes discover that the existing process is fundamentally incapable of meeting requirements—no amount of tweaking will close the gap. At that inflection point, the project should be rechartered as DMADV to design a replacement process.',
        },
        {
          type: 'list' as const,
          items: [
            'Process capability index (Cpk) below 0.5 despite root-cause fixes',
            'Voice of Customer requirements have shifted beyond current process design limits',
            'Technology or regulatory changes require a ground-up redesign',
          ],
        },
      ],
    },
    {
      id: 'dmaic-m1-l3',
      title: 'Project Charter Elements & SMART Goals',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Before a DMAIC project officially launches, the sponsor and team leader co-create a project charter. This document is the contract between leadership and the team—it defines scope, resources, timeline, and success criteria.',
        },
        {
          type: 'heading' as const,
          text: 'Charter Components',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Business case: Why does this matter to the organization? Link to strategic objectives.',
            'Problem statement: What is wrong, where, how often, and at what cost? (Factual, not causal.)',
            'Goal statement: What measurable improvement is expected, by when?',
            'Scope: What is in-bounds and explicitly out-of-bounds for this project?',
            'Team roles: Sponsor, Champion, Black Belt / Green Belt, team members, subject-matter experts.',
            'Milestones: Target dates for each phase gate review.',
            'Resources: Budget, dedicated time, system access needed.',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Writing SMART Goals',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Specific', definition: 'Names the exact metric being improved (e.g., "first-pass yield on Line 3")' },
            { term: 'Measurable', definition: 'States the current baseline and the target value in quantifiable terms' },
            { term: 'Achievable', definition: 'Grounded in benchmarks or entitlement analysis, not wishful thinking' },
            { term: 'Relevant', definition: 'Tied to a business outcome the sponsor cares about (cost, quality, speed)' },
            { term: 'Time-bound', definition: 'Includes a specific completion date for the Improve or Control phase' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Weak vs. Strong Goal Statement',
          text: 'Weak: "Reduce defects on Line 3." Strong: "Increase first-pass yield on Line 3 from 78% to 92% by September 30, reducing scrap cost by $180,000 annually."',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Scope Creep Risk',
          text: 'Charters that lack explicit out-of-scope statements almost always expand mid-project. If the team begins investigating issues in adjacent departments without a charter amendment, timelines and resources quickly collapse.',
        },
        {
          type: 'paragraph' as const,
          text: 'The charter is a living document. If new information in Analyze reveals that the root cause lies outside the original scope, the team must return to the sponsor for a formal charter amendment rather than silently expanding the project.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dmaic-m1-q1',
      type: 'multiple-choice' as const,
      question: 'Which DMAIC phase produces the baseline process capability measurement?',
      options: ['Define', 'Measure', 'Analyze', 'Improve'],
      correctIndex: 1,
      explanation: 'The Measure phase establishes the current-state baseline, including process capability indices, before any root-cause analysis begins.',
    },
    {
      id: 'dmaic-m1-q2',
      type: 'multiple-choice' as const,
      question: 'A team wants to design a brand-new order fulfillment process because the current one is structurally incapable of meeting customer lead-time requirements. Which methodology is most appropriate?',
      options: ['PDCA', 'DMAIC', 'DMADV', 'Kaizen Event'],
      correctIndex: 2,
      explanation: 'DMADV (Define, Measure, Analyze, Design, Verify) is used when a new process or product must be designed, rather than improving an existing one.',
    },
    {
      id: 'dmaic-m1-q3',
      type: 'true-false' as const,
      question: 'A problem statement in the project charter should include the suspected root cause of the problem.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Problem statements should be factual descriptions of the gap (what, where, when, how much) without attributing cause. Root causes are determined in the Analyze phase.',
    },
    {
      id: 'dmaic-m1-q4',
      type: 'multiple-choice' as const,
      question: 'Which element makes a goal statement "Measurable" under the SMART framework?',
      options: [
        'Linking the goal to a strategic initiative',
        'Stating a completion deadline',
        'Quantifying the current baseline and the target value',
        'Getting sponsor approval in writing',
      ],
      correctIndex: 2,
      explanation: 'Measurable means the goal includes numbers: the current state baseline and the specific target to be achieved.',
    },
    {
      id: 'dmaic-m1-q5',
      type: 'true-false' as const,
      question: 'If new data discovered during Analyze reveals the root cause is in a department outside the original charter scope, the team should silently expand their investigation to fix it.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Scope changes require a formal charter amendment approved by the sponsor. Silent scope expansion leads to resource overruns and accountability gaps.',
    },
  ],
};

// ─── Module 2: Define Phase ───────────────────────────────────────────────────

const module2 = {
  id: 'dmaic-m2',
  number: 2,
  title: 'Define Phase: Clarifying the Problem',
  description: 'Build the project foundation with a compelling business case, airtight problem statement, SIPOC diagram, and Voice of Customer data.',
  estimatedMinutes: 80,
  learningObjectives: [
    'Write a problem statement that is factual, specific, and free of assumed causes',
    'Construct a SIPOC diagram that frames the process at the right level of detail',
    'Conduct basic stakeholder analysis to identify champions and resistors',
    'Translate Voice of Customer inputs into Critical-to-Quality requirements',
  ],
  lessons: [
    {
      id: 'dmaic-m2-l1',
      title: 'Crafting the Problem Statement',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The problem statement is perhaps the most rewritten document in any DMAIC project—and for good reason. A vague or cause-laden statement misdirects the entire team. A precise statement focuses energy on verifiable facts.',
        },
        {
          type: 'heading' as const,
          text: 'The Four Elements of a Strong Problem Statement',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Object: What entity has the problem? (product, transaction, service, machine)',
            'Defect: What is wrong with it? (not why—just what)',
            'Location / When: Where and when does the defect occur?',
            'Magnitude: How often, and at what cost or impact?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Applying the Four Elements',
          text: '"Customer invoices (object) contain incorrect line-item pricing (defect) when processed through the manual entry queue (location) at a rate of 14% of all invoices, costing approximately $42,000 per quarter in rework and credit memos (magnitude)."',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Common Mistakes',
          text: 'Avoid: "Invoices are wrong because staff are not trained properly." This embeds a cause and a solution. The problem statement must remain cause-neutral until Analyze is complete.',
        },
        {
          type: 'paragraph' as const,
          text: 'A well-written problem statement passes the "stranger test": a knowledgeable outsider who reads it should immediately understand the nature and scale of the problem without needing additional context.',
        },
      ],
    },
    {
      id: 'dmaic-m2-l2',
      title: 'SIPOC: Mapping the Process at 30,000 Feet',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'SIPOC stands for Suppliers, Inputs, Process, Outputs, and Customers. It is a high-level map that gives everyone—including executives who may not know process details—a shared picture of the process under study.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Suppliers', definition: 'Entities that provide inputs to the process (internal departments, external vendors, systems)' },
            { term: 'Inputs', definition: 'Materials, information, or resources that enter the process and affect its output quality' },
            { term: 'Process', definition: 'The major steps (typically 4–7) that transform inputs into outputs' },
            { term: 'Outputs', definition: 'The products, services, or information produced by the process' },
            { term: 'Customers', definition: 'Internal or external recipients of the process outputs who have requirements' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Building SIPOC Efficiently',
          text: 'Start with the Process column (center), then Outputs, then Customers, then Inputs, then Suppliers. Teams that start with Suppliers often spend too long debating upstream details before they have defined what the process actually produces.',
        },
        {
          type: 'heading' as const,
          text: 'SIPOC Scope Boundaries',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The first and last process steps define the scope boundary. Everything upstream of Step 1 is a supplier input; everything downstream of the last step is customer territory. These boundaries should match the charter scope statement.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          text: 'SIPOC is not a swim-lane process map. It intentionally hides sub-steps. If your SIPOC has more than 8 process steps, you have zoomed in too far—combine steps until you are back at the macro level.',
        },
      ],
    },
    {
      id: 'dmaic-m2-l3',
      title: 'Stakeholder Analysis & Voice of Customer in Define',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Even technically perfect improvement projects fail when key stakeholders resist change. Stakeholder analysis maps the political landscape early so the team can build coalitions and address concerns proactively.',
        },
        {
          type: 'heading' as const,
          text: 'The Influence-Interest Grid',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Plot each stakeholder on a 2×2 grid: their level of interest in the project outcome (low to high) versus their ability to influence project success (low to high). The four quadrants suggest different engagement strategies.',
        },
        {
          type: 'table' as const,
          headers: ['Quadrant', 'Influence', 'Interest', 'Strategy'],
          rows: [
            ['Manage Closely', 'High', 'High', 'Regular updates, involve in decisions'],
            ['Keep Satisfied', 'High', 'Low', 'Periodic briefings, no surprises'],
            ['Keep Informed', 'Low', 'High', 'Share results, gather feedback'],
            ['Monitor', 'Low', 'Low', 'Minimal effort, routine updates'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Voice of Customer in Define',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Voice of Customer (VOC) is the systematic collection of customer needs, expectations, and pain points. In Define, VOC is used to confirm that the problem being solved actually matters to the customer—not just to internal operations.',
        },
        {
          type: 'list' as const,
          items: [
            'Surveys and structured questionnaires',
            'Customer interviews (open-ended, 20–30 minutes)',
            'Complaint logs and warranty data',
            'Net Promoter Score trends',
            'Focus groups with representative users',
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'Raw VOC data ("the forms are confusing") must be translated into Critical-to-Quality (CTQ) requirements—specific, measurable standards ("form completion time must be under 4 minutes with zero required fields left blank").',
        },
        {
          type: 'diagram' as const,
          diagramId: 'ctq-tree',
          title: 'CTQ Tree: From Voice to Requirement',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'Use a CTQ tree to drill down from a broad customer need to a measurable requirement. Start with the need, identify the drivers of that need, and then specify measurable performance standards for each driver.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dmaic-m2-q1',
      type: 'multiple-choice' as const,
      question: 'Which of the following is a correctly written problem statement?',
      options: [
        '"Customer complaints are high because agents lack product knowledge."',
        '"We need to implement a new CRM to reduce response times."',
        '"Customer email response time exceeds the 4-hour SLA target for 31% of tickets in the Enterprise support queue, impacting renewal rates."',
        '"Response times should be improved as soon as possible."',
      ],
      correctIndex: 2,
      explanation: 'Option C states the object (email response), defect (exceeds SLA), location (Enterprise queue), and magnitude (31%, impact on renewals) without embedding a cause or solution.',
    },
    {
      id: 'dmaic-m2-q2',
      type: 'multiple-choice' as const,
      question: 'When building a SIPOC, which column should you typically fill in first?',
      options: ['Suppliers', 'Inputs', 'Process', 'Customers'],
      correctIndex: 2,
      explanation: 'Starting with the Process (center column) grounds the team in what the process actually does before debating who supplies it or who receives its outputs.',
    },
    {
      id: 'dmaic-m2-q3',
      type: 'true-false' as const,
      question: 'A SIPOC diagram should contain 15–20 process steps to be thorough enough for a DMAIC project.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'SIPOC is a macro-level view with typically 4–7 high-level steps. Detailed process mapping happens later in Measure when the team creates current-state process maps.',
    },
    {
      id: 'dmaic-m2-q4',
      type: 'multiple-choice' as const,
      question: 'A senior VP has high organizational influence but low personal interest in the project. What is the recommended stakeholder strategy?',
      options: ['Manage closely with weekly meetings', 'Keep satisfied with periodic briefings and no surprises', 'Monitor with minimal contact', 'Keep informed by sharing detailed results'],
      correctIndex: 1,
      explanation: 'High influence / low interest stakeholders should be kept satisfied. They can become resistors if blindsided by changes, so periodic briefings prevent negative surprises.',
    },
    {
      id: 'dmaic-m2-q5',
      type: 'multiple-choice' as const,
      question: 'What is a Critical-to-Quality (CTQ) requirement?',
      options: [
        'A subjective customer complaint captured verbatim',
        'A specific, measurable performance standard derived from a customer need',
        'The quality target set by the project sponsor',
        'A list of defect types found during the Measure phase',
      ],
      correctIndex: 1,
      explanation: 'CTQs translate raw VOC data (qualitative needs) into quantifiable, testable performance standards that the process must meet to satisfy the customer.',
    },
  ],
};

// ─── Module 3: Measure Phase ──────────────────────────────────────────────────

const module3 = {
  id: 'dmaic-m3',
  number: 3,
  title: 'Measure Phase: Establishing the Baseline',
  description: 'Learn to build a rigorous data collection plan, validate your measurement system, and calculate baseline process capability.',
  estimatedMinutes: 90,
  learningObjectives: [
    'Develop a data collection plan that specifies what, how, who, and when to measure',
    'Explain the purpose of a Measurement System Analysis (MSA) and interpret Gage R&R results',
    'Calculate Defects Per Million Opportunities (DPMO) and convert to a sigma level',
    'Construct a current-state process map at the appropriate level of detail',
  ],
  lessons: [
    {
      id: 'dmaic-m3-l1',
      title: 'Building a Data Collection Plan',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A data collection plan prevents the most common Measure phase failure: collecting the wrong data, or collecting the right data in the wrong way. It specifies every detail of the data-gathering effort before a single measurement is taken.',
        },
        {
          type: 'heading' as const,
          text: 'Data Collection Plan Elements',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Element', 'Questions to Answer'],
          rows: [
            ['Measure', 'Which specific Y (output) or X (input) variable are we measuring?'],
            ['Definition', 'How is a defect operationally defined? What counts and what does not?'],
            ['Data type', 'Continuous (weight, time) or discrete (pass/fail, count)?'],
            ['Collection method', 'Manual check sheet, automated extraction, observation?'],
            ['Sample strategy', 'How many samples? How often? Random or time-stratified?'],
            ['Who collects', 'Named responsible person or role'],
            ['Data storage', 'Where will data be recorded and backed up?'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Continuous vs. Discrete Data',
          text: 'Continuous data (time, temperature, dimension) carries more statistical information and generally requires smaller sample sizes. Discrete data (defective/not defective) requires larger samples to detect the same effect. When possible, convert a pass/fail measurement to a continuous one.',
        },
        {
          type: 'heading' as const,
          text: 'Stratification Strategy',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Collect data stratified by shift, operator, machine, day of week, and product type. Without stratification, average performance hides the segmented patterns that reveal root causes. A defect rate of 8% overall might be 2% on first shift and 18% on third shift—actionable information that the average erases.',
        },
      ],
    },
    {
      id: 'dmaic-m3-l2',
      title: 'Measurement System Analysis & Gage R&R',
      estimatedMinutes: 28,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Before drawing conclusions from data, you must confirm that the measurement system itself is trustworthy. Measurement System Analysis (MSA) quantifies how much of the observed variation comes from the process versus from the measurement system.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Repeatability', definition: 'Variation when the same operator measures the same part multiple times with the same gage' },
            { term: 'Reproducibility', definition: 'Variation when different operators measure the same part with the same gage' },
            { term: 'Gage R&R', definition: 'Combined repeatability and reproducibility—the total measurement system variation' },
            { term: '%Study Variation', definition: 'Gage R&R as a percentage of the total process variation' },
            { term: 'Number of Distinct Categories', definition: 'How many groups the measurement system can reliably distinguish (must be ≥5 for a capable system)' },
          ],
        },
        {
          type: 'heading' as const,
          text: 'Interpreting Gage R&R Results',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['%Study Variation', 'Interpretation', 'Action'],
          rows: [
            ['< 10%', 'Measurement system is acceptable', 'Proceed to data collection'],
            ['10% – 30%', 'Marginal—may be acceptable depending on application', 'Investigate sources of variation; document decision'],
            ['> 30%', 'Unacceptable—measurement system masks real variation', 'Fix or replace the measurement system before collecting data'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Danger of Skipping MSA',
          text: 'A team that skips Gage R&R may spend months analyzing data that is dominated by measurement noise, not real process variation. They will identify "root causes" that are actually artifacts of a broken measurement system.',
        },
        {
          type: 'paragraph' as const,
          text: 'For attribute data (pass/fail judgments), the equivalent study is an Attribute Agreement Analysis (also called a Kappa study). It measures how consistently appraisers agree with each other and with a known standard.',
        },
      ],
    },
    {
      id: 'dmaic-m3-l3',
      title: 'Process Capability Baseline & Current State Mapping',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Process capability quantifies how well the current process meets specification limits. It provides the objective baseline against which improvement will be measured at the project\'s end.',
        },
        {
          type: 'heading' as const,
          text: 'Key Capability Metrics',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Cp', definition: 'Potential capability: the ratio of the specification width to the process spread (6σ). Assumes the process is centered.' },
            { term: 'Cpk', definition: 'Actual capability: accounts for how far the process mean is from the nearest specification limit. Always ≤ Cp.' },
            { term: 'DPMO', definition: 'Defects Per Million Opportunities—the number of defects expected if one million opportunities were produced' },
            { term: 'Sigma Level', definition: 'A normalized scale of process performance; 6 sigma = 3.4 DPMO; 3 sigma ≈ 66,807 DPMO' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The 1.5 Sigma Shift',
          text: 'Six Sigma methodology assumes that processes shift by ±1.5 sigma over time. Therefore a "6 sigma process" actually operates at 4.5 sigma short-term but achieves 3.4 DPMO long-term. This convention is why tables often show two sigma levels for each DPMO value.',
        },
        {
          type: 'heading' as const,
          text: 'Current State Process Maps',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Unlike SIPOC, current-state process maps capture every step, decision point, rework loop, and handoff. They are built by walking the process (gemba), not from memory or procedure documents. Reality often differs from the documented "should-be" process.',
        },
        {
          type: 'list' as const,
          items: [
            'Use swim lanes to show handoffs between departments or roles',
            'Mark rework loops explicitly—they represent hidden cost',
            'Note cycle time and wait time at each step',
            'Identify where data is collected (or should be)',
            'Flag steps with high error rates or frequent escalations',
          ],
        },
        {
          type: 'chart' as const,
          chartId: 'run-chart-example',
          title: 'Run Chart: Tracking Process Over Time',
          description: 'A run chart helps identify trends and shifts in process performance',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'Add the data from your collection plan to the process map. Posting defect rates, cycle times, and error frequencies next to the steps where they occur creates a powerful visual that immediately shows where problems concentrate.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dmaic-m3-q1',
      type: 'multiple-choice' as const,
      question: 'A Gage R&R study shows that the measurement system accounts for 35% of total study variation. What should the team do?',
      options: [
        'Proceed with data collection—35% is within acceptable limits',
        'Fix or replace the measurement system before collecting project data',
        'Collect more samples to average out the measurement error',
        'Report the result to the sponsor and continue the project',
      ],
      correctIndex: 1,
      explanation: 'A %Study Variation above 30% indicates an unacceptable measurement system. Data collected with this system will contain too much noise to support reliable root-cause analysis.',
    },
    {
      id: 'dmaic-m3-q2',
      type: 'true-false' as const,
      question: 'Cpk can be greater than Cp when the process mean is centered between the specification limits.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Cpk is always less than or equal to Cp. Cpk equals Cp only when the process is perfectly centered. Any shift away from center reduces Cpk below Cp.',
    },
    {
      id: 'dmaic-m3-q3',
      type: 'multiple-choice' as const,
      question: 'Why is stratifying data by shift, operator, and product type important during data collection?',
      options: [
        'It reduces the total number of samples needed',
        'It reveals segmented patterns that overall averages hide',
        'It satisfies the MSA requirement for attribute data',
        'It is required to calculate DPMO',
      ],
      correctIndex: 1,
      explanation: 'Stratification prevents averaging together subgroups with very different performance levels, revealing actionable patterns that point toward root causes.',
    },
    {
      id: 'dmaic-m3-q4',
      type: 'multiple-choice' as const,
      question: 'What is the DPMO equivalent of a 3-sigma process (long-term)?',
      options: ['3.4', '6,210', '66,807', '308,537'],
      correctIndex: 2,
      explanation: 'A 3-sigma process has approximately 66,807 DPMO long-term. A 6-sigma process achieves 3.4 DPMO. These are standard Six Sigma reference values.',
    },
    {
      id: 'dmaic-m3-q5',
      type: 'true-false' as const,
      question: 'Current-state process maps should be built from procedure documents to ensure accuracy.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Current-state maps must be built by observing the actual process (gemba walk), not from documentation. Procedures often describe how work should happen, not how it actually happens.',
    },
  ],
};

// ─── Module 4: Analyze Phase ──────────────────────────────────────────────────

const module4 = {
  id: 'dmaic-m4',
  number: 4,
  title: 'Analyze Phase: Finding Root Causes',
  description: 'Apply structured root-cause analysis tools—fishbone diagrams, 5 Whys, Pareto charts, and hypothesis testing—to identify and verify the true drivers of your problem.',
  estimatedMinutes: 95,
  learningObjectives: [
    'Build a cause-and-effect (fishbone) diagram with the team',
    'Apply 5 Whys analysis to drill past symptoms to root causes',
    'Interpret a Pareto chart to prioritize investigation focus',
    'Explain the concept of hypothesis testing and statistical significance at a conceptual level',
    'Identify the seven wastes of lean in a process map',
  ],
  lessons: [
    {
      id: 'dmaic-m4-l1',
      title: 'Fishbone Diagrams & 5 Whys',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Root-cause analysis begins with generating hypotheses—possible explanations for why the problem exists. The fishbone (Ishikawa) diagram and 5 Whys are two complementary tools for this generation step.',
        },
        {
          type: 'heading' as const,
          text: 'The Fishbone Diagram',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The fishbone diagram organizes potential causes into major categories, visually connected to the effect (the problem statement) like bones on a fish skeleton. In manufacturing, the classic categories are the 6Ms: Man, Machine, Method, Material, Measurement, and Mother Nature (environment). In service environments, teams often adapt to 8Ps or 4Ss.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Running an Effective Fishbone Session',
          text: 'Post the problem statement on the right side of the diagram. Use brainstorming rules (no judgment, quantity over quality). Start with the major bone categories, then drill to sub-causes under each. Aim for 3–4 levels of depth before stopping.',
        },
        {
          type: 'heading' as const,
          text: 'The 5 Whys Technique',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'For each major cause identified in the fishbone, ask "Why does this happen?" five times in succession. Each answer becomes the input to the next "why," drilling from a symptom to a systemic root cause.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: '5 Whys in Practice',
          text: 'Problem: Invoices contain pricing errors. Why? → Pricing table in the system is not current. Why? → No one updates it when price lists change. Why? → There is no defined process owner for price list maintenance. Why? → The process was never formally assigned when the new system launched. Why? → The launch project was closed before operational handoffs were documented. Root cause: Missing process ownership and handoff documentation.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          text: 'Stop at the root cause, not at "human error." Human error is almost always a symptom. Ask why the error was possible: what system, process, or training gap allowed it?',
        },
      ],
    },
    {
      id: 'dmaic-m4-l2',
      title: 'Pareto Analysis & Hypothesis Testing Concepts',
      estimatedMinutes: 28,
      content: [
        {
          type: 'paragraph' as const,
          text: 'After generating root-cause hypotheses, teams must prioritize which ones to investigate. Pareto analysis uses data to rank causes by frequency or impact; hypothesis testing uses statistics to confirm or reject those hypotheses.',
        },
        {
          type: 'heading' as const,
          text: 'Pareto Analysis',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The Pareto principle states that roughly 80% of effects come from 20% of causes. A Pareto chart is a bar chart sorted in descending order of frequency or cost, with a cumulative percentage line overlay.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'List all defect types (or causes) and their frequencies from your Measure data',
            'Sort from most to least frequent',
            'Calculate cumulative percentage at each bar',
            'Draw the cumulative line—where it crosses 80% marks the "vital few" causes',
            'Focus improvement efforts on those vital few',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Stratified Pareto Charts',
          text: 'Run separate Pareto charts for each stratum (shift, product line, customer type). The vital few causes often differ by stratum—discovering that Cause A dominates on second shift while Cause B dominates for Product X is itself an analytic breakthrough.',
        },
        {
          type: 'heading' as const,
          text: 'Hypothesis Testing: The Concept',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Hypothesis testing provides a statistical framework for deciding whether an observed difference is real or due to random variation. In Analyze, teams use hypothesis tests to confirm that a suspected root cause truly correlates with (or drives) the defect.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Null Hypothesis (H₀)', definition: 'The default assumption: no difference exists between groups, or no relationship exists between variables' },
            { term: 'Alternative Hypothesis (H₁)', definition: 'The claim being tested: a difference or relationship exists' },
            { term: 'p-value', definition: 'The probability of observing the data if H₀ were true. A p-value below 0.05 is conventionally statistically significant.' },
            { term: 'Type I Error', definition: 'Rejecting H₀ when it is actually true (false positive). Risk = alpha (typically 5%)' },
            { term: 'Type II Error', definition: 'Failing to reject H₀ when H₁ is actually true (false negative). Risk = beta' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'Common hypothesis tests used in Analyze: t-test (compare two group means), ANOVA (compare three or more means), chi-square (compare proportions), and correlation/regression (quantify relationships between continuous variables).',
        },
      ],
    },
    {
      id: 'dmaic-m4-l3',
      title: 'Value Stream Waste Identification',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Lean analysis complements statistical root-cause investigation by identifying non-value-added steps—waste—that slow down the process and create opportunities for errors. The Toyota Production System identified seven classic wastes (often written as TIMWOOD or DOWNTIME).',
        },
        {
          type: 'heading' as const,
          text: 'The Seven Wastes',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Waste', 'Description', 'Service Example'],
          rows: [
            ['Transport', 'Unnecessary movement of materials or information', 'Routing a form through 4 departments when 2 would suffice'],
            ['Inventory', 'Excess work-in-progress sitting idle', 'Email queue of 300 unprocessed requests'],
            ['Motion', 'Unnecessary movement of people', 'Walking across the office to get a signature'],
            ['Waiting', 'Time spent waiting for the next step', 'Invoice sitting 3 days for approval'],
            ['Overproduction', 'Producing more than the customer needs now', 'Generating reports no one reads'],
            ['Overprocessing', 'Doing more work than the customer requires', 'Triple-checking low-risk transactions'],
            ['Defects', 'Errors requiring rework or causing customer failures', 'Incorrect data entry requiring correction'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'An 8th Waste',
          text: 'Many practitioners add an 8th waste: unused talent (or skills). This refers to failing to engage employees\' creativity and problem-solving ability—a significant source of lost improvement potential.',
        },
        {
          type: 'paragraph' as const,
          text: 'During Analyze, overlay waste identification on the current-state process map. Circle every non-value-added step. Calculate the ratio of value-added time to total lead time—in most service processes this ratio is below 10%, meaning the customer waits 90% of the time while their request does nothing.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'The Analyze gate review deliverable is a prioritized, evidence-based list of verified root causes. Do not proceed to Improve until leadership agrees that the root causes are confirmed, not just hypothesized.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dmaic-m4-q1',
      type: 'multiple-choice' as const,
      question: 'In a fishbone diagram, what is placed at the "head" of the fish?',
      options: ['The root cause', 'The problem statement (effect)', 'The team\'s proposed solution', 'The process step with the highest defect rate'],
      correctIndex: 1,
      explanation: 'The problem statement (the effect being investigated) is placed at the right side—the head—of the fishbone. Potential causes branch off to the left as bones.',
    },
    {
      id: 'dmaic-m4-q2',
      type: 'true-false' as const,
      question: '"Human error" is an acceptable root cause conclusion in a 5 Whys analysis.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Human error is a symptom, not a root cause. Continue asking "Why was the error possible?" to uncover the system, process, or training gap that allowed the error to occur.',
    },
    {
      id: 'dmaic-m4-q3',
      type: 'multiple-choice' as const,
      question: 'A p-value of 0.03 in a hypothesis test means:',
      options: [
        'There is a 3% chance the alternative hypothesis is correct',
        'There is a 97% chance the null hypothesis is true',
        'There is a 3% probability of observing this data if the null hypothesis were true',
        'The effect size is 3% larger than expected',
      ],
      correctIndex: 2,
      explanation: 'A p-value is the probability of observing the sample results (or more extreme results) assuming the null hypothesis is true. A p-value of 0.03 is below the 0.05 threshold, so we reject H₀.',
    },
    {
      id: 'dmaic-m4-q4',
      type: 'multiple-choice' as const,
      question: 'Which of the seven wastes describes a customer invoice sitting untouched for 4 days waiting for a manager\'s approval?',
      options: ['Transport', 'Overprocessing', 'Waiting', 'Defects'],
      correctIndex: 2,
      explanation: 'Waiting is the waste of idle time—materials, information, or people waiting for the next step in the process to begin.',
    },
    {
      id: 'dmaic-m4-q5',
      type: 'multiple-choice' as const,
      question: 'A Pareto chart shows that three defect types account for 79% of all defects. What is the correct next step?',
      options: [
        'Address all defect types equally to improve overall quality',
        'Focus root-cause investigation on those three defect types (the vital few)',
        'Expand the data collection to gather more defect categories',
        'Immediately implement fixes for the top defect type',
      ],
      correctIndex: 1,
      explanation: 'The Pareto principle directs effort toward the vital few causes that account for the majority of the problem. Fixing the other categories yields minimal return until the top three are addressed.',
    },
  ],
};

// ─── Module 5: Improve Phase ──────────────────────────────────────────────────

const module5 = {
  id: 'dmaic-m5',
  number: 5,
  title: 'Improve Phase: Developing & Testing Solutions',
  description: 'Generate creative solutions, select the best options using structured criteria, pilot test before full deployment, and apply mistake-proofing principles.',
  estimatedMinutes: 85,
  learningObjectives: [
    'Apply structured brainstorming techniques to generate solution ideas',
    'Use a solution selection matrix to evaluate options objectively',
    'Design a pilot test that validates a solution before full deployment',
    'Apply Poka-Yoke (mistake-proofing) principles to eliminate error opportunities',
    'Conduct a basic Failure Mode and Effects Analysis (FMEA) on a proposed solution',
  ],
  lessons: [
    {
      id: 'dmaic-m5-l1',
      title: 'Brainstorming & Solution Generation',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The transition from Analyze to Improve is one of the most energizing moments in a DMAIC project—the team shifts from diagnosing the problem to designing the cure. Effective brainstorming ensures the team considers a wide solution space before narrowing down.',
        },
        {
          type: 'heading' as const,
          text: 'Brainstorming Techniques',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Technique', 'Best For', 'How It Works'],
          rows: [
            ['Classic Brainstorming', 'Generating volume quickly', 'Open verbal contributions; no judgment; build on others\' ideas'],
            ['Brainwriting (6-3-5)', 'Introverted teams; avoiding HiPPO bias', '6 people write 3 ideas in 5 minutes, then pass sheets'],
            ['SCAMPER', 'Breaking mental fixedness', 'Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse'],
            ['Benchmarking', 'Finding proven solutions', 'Study how other industries or competitors solved analogous problems'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Connect Solutions to Root Causes',
          text: 'Each solution idea should explicitly address one or more verified root causes from Analyze. If a team is generating ideas for problems they did not verify as root causes, they are guessing—which is what DMAIC is designed to prevent.',
        },
        {
          type: 'paragraph' as const,
          text: 'At the end of the generation phase, cluster ideas by theme and eliminate duplicates. You should have 15–30 distinct solution concepts to evaluate. Premature narrowing (settling on the first good idea) is a common pitfall that leads to suboptimal solutions.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          text: 'Resist the temptation to implement solutions during Measure or Analyze. "Just fixing it" before root causes are verified often treats a symptom, allows the real problem to reappear, and undermines the team\'s credibility.',
        },
      ],
    },
    {
      id: 'dmaic-m5-l2',
      title: 'Solution Selection Matrix & Pilot Testing',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A solution selection matrix brings objectivity to what can otherwise become a political negotiation. It evaluates each candidate solution against weighted criteria important to the organization.',
        },
        {
          type: 'heading' as const,
          text: 'Building the Selection Matrix',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'List candidate solutions in rows',
            'Define evaluation criteria in columns (e.g., impact on defect rate, implementation cost, speed to deploy, sustainability, customer impact)',
            'Weight each criterion based on organizational priorities (weights should sum to 100%)',
            'Score each solution on each criterion (1–5 or 1–10 scale)',
            'Multiply score × weight for each cell; sum rows for a weighted total',
            'Select the solution(s) with the highest weighted scores, using expert judgment to resolve close calls',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Combining Solutions',
          text: 'High-scoring solutions are not mutually exclusive. A root cause with multiple contributing factors often requires a bundle of solutions: one solution addresses a process step, another addresses a training gap, a third adds a system check.',
        },
        {
          type: 'heading' as const,
          text: 'Pilot Testing',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Piloting the selected solution in a limited scope before full deployment is non-negotiable. Pilots reveal implementation problems, refine procedures, and provide evidence for the business case—all at a fraction of the risk of full deployment.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Pilot scope', definition: 'The specific location, time period, volume, or team subset where the solution will be tested' },
            { term: 'Pilot metrics', definition: 'The same measures from Measure phase, collected during the pilot to compare against baseline' },
            { term: 'Go/no-go criteria', definition: 'Pre-defined performance thresholds that determine whether to proceed to full deployment or revise the solution' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Pilot Design Example',
          text: 'A team piloting a new invoice verification step runs it on one regional processing center (10% of volume) for 4 weeks, targeting a reduction in pricing errors from 14% to below 4%. If the pilot achieves below 5% with no increase in cycle time, they proceed to full deployment.',
        },
      ],
    },
    {
      id: 'dmaic-m5-l3',
      title: 'Mistake-Proofing & FMEA Basics',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The most durable solutions make errors impossible or immediately detectable. Mistake-proofing (Poka-Yoke) and Failure Mode and Effects Analysis (FMEA) are complementary tools for building robust, failure-resistant solutions.',
        },
        {
          type: 'heading' as const,
          text: 'Poka-Yoke Principles',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Shigeo Shingo developed Poka-Yoke (mistake-proofing) as part of the Toyota Production System. The goal is to design the process or product so that errors either cannot occur (prevention) or are detected immediately before passing downstream (detection).',
        },
        {
          type: 'table' as const,
          headers: ['Poka-Yoke Type', 'How It Works', 'Example'],
          rows: [
            ['Prevention (Control)', 'Makes the incorrect action physically impossible', 'USB connector that only fits one way'],
            ['Warning (Detection)', 'Alerts the operator when an error is about to occur', 'System pop-up when a required field is empty'],
            ['Shutdown', 'Stops the process when an error is detected', 'Machine stops when part count mismatch occurs'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'FMEA Basics',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'FMEA (Failure Mode and Effects Analysis) proactively identifies ways a new solution could fail, rates each failure mode, and prioritizes mitigation actions. It is applied to the proposed solution before deployment—not to the existing process.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Failure Mode', definition: 'A specific way the process or product could fail to meet requirements' },
            { term: 'Severity (S)', definition: 'How serious is the impact if this failure occurs? (1–10 scale)' },
            { term: 'Occurrence (O)', definition: 'How likely is this failure to occur? (1–10 scale)' },
            { term: 'Detection (D)', definition: 'How likely is the current control to detect the failure before it reaches the customer? (1–10; 10 = undetectable)' },
            { term: 'Risk Priority Number (RPN)', definition: 'S × O × D. Higher RPN = higher priority for mitigation action.' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          text: 'Do not set an arbitrary RPN cutoff (e.g., "only address RPNs above 100"). A failure mode with Severity = 10 (catastrophic) should receive attention regardless of its total RPN score.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dmaic-m5-q1',
      type: 'multiple-choice' as const,
      question: 'Which brainstorming technique is most effective for avoiding the dominance of senior voices (HiPPO effect)?',
      options: ['Classic verbal brainstorming', 'Brainwriting (6-3-5)', 'Benchmarking', 'SCAMPER'],
      correctIndex: 1,
      explanation: 'Brainwriting collects ideas in writing simultaneously, preventing senior participants from anchoring the group\'s thinking and allowing quieter team members to contribute equally.',
    },
    {
      id: 'dmaic-m5-q2',
      type: 'true-false' as const,
      question: 'A team should pilot test their solution only if the full deployment will be expensive.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Pilot testing is a best practice for all DMAIC solutions regardless of deployment cost. Pilots provide implementation learnings and validated evidence before committing to full rollout.',
    },
    {
      id: 'dmaic-m5-q3',
      type: 'multiple-choice' as const,
      question: 'A USB connector designed to fit in only one orientation is an example of which type of Poka-Yoke?',
      options: ['Warning', 'Detection', 'Prevention (Control)', 'Shutdown'],
      correctIndex: 2,
      explanation: 'A prevention Poka-Yoke makes the incorrect action physically impossible. The asymmetric USB connector prevents incorrect insertion by design.',
    },
    {
      id: 'dmaic-m5-q4',
      type: 'multiple-choice' as const,
      question: 'In an FMEA, which failure mode should receive immediate attention regardless of its total RPN score?',
      options: [
        'Any failure mode with Occurrence rated 10',
        'Any failure mode with Severity rated 10',
        'Any failure mode with Detection rated 10',
        'Any failure mode with RPN above 200',
      ],
      correctIndex: 1,
      explanation: 'Severity = 10 indicates a catastrophic impact (e.g., safety hazard, regulatory violation). These failure modes must be mitigated regardless of occurrence likelihood or detectability.',
    },
    {
      id: 'dmaic-m5-q5',
      type: 'multiple-choice' as const,
      question: 'When should a solution selection matrix be used in the Improve phase?',
      options: [
        'Before brainstorming, to focus idea generation',
        'After generating and clustering ideas, to evaluate options objectively',
        'After the pilot, to decide whether to proceed to full deployment',
        'During the gate review with the sponsor',
      ],
      correctIndex: 1,
      explanation: 'The selection matrix is used after brainstorming to evaluate a shortlist of candidate solutions against weighted criteria, providing objective basis for the final selection decision.',
    },
  ],
};

// ─── Module 6: Control Phase ──────────────────────────────────────────────────

const module6 = {
  id: 'dmaic-m6',
  number: 6,
  title: 'Control Phase: Locking in the Gains',
  description: 'Ensure the improvements you worked hard to achieve actually stick—through control plans, control charts, updated SOPs, and a structured handoff to the process owner.',
  estimatedMinutes: 75,
  learningObjectives: [
    'Develop a comprehensive control plan that covers all critical process inputs',
    'Select the appropriate control chart for a given data type',
    'Write or update standard operating procedures that reflect the improved process',
    'Execute a structured handoff to the process owner and close the project',
  ],
  lessons: [
    {
      id: 'dmaic-m6-l1',
      title: 'Control Plans: The Blueprint for Sustaining Gains',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A control plan is the central document of the Control phase. It specifies what to monitor, how to monitor it, who is responsible, and exactly what to do when the process goes out of control. Without a control plan, improvements decay within months as team attention moves elsewhere.',
        },
        {
          type: 'heading' as const,
          text: 'Control Plan Structure',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Column', 'Content'],
          rows: [
            ['Process Step', 'The step being controlled (from the improved process map)'],
            ['Critical Input / Output', 'The specific X or Y variable being monitored'],
            ['Specification / Target', 'The acceptable range or target value'],
            ['Measurement Method', 'How the variable is measured (tool, system, method)'],
            ['Sample Size & Frequency', 'How many and how often measurements are taken'],
            ['Who Monitors', 'Named role responsible for monitoring'],
            ['Control Method', 'Control chart type, checklist, automated alert, etc.'],
            ['Reaction Plan', 'Step-by-step actions when the measure goes out of control'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Reaction Plans Are Non-Negotiable',
          text: 'A control plan without a reaction plan is incomplete. When an out-of-control signal occurs, operators must know exactly what to do without having to call the Black Belt. Ambiguous reaction plans lead to inconsistent responses that allow problems to persist.',
        },
        {
          type: 'paragraph' as const,
          text: 'Control plans should be co-created with the people who will use them—front-line operators, supervisors, and the process owner. If operators find a control plan burdensome, they will not follow it. Simplicity and clarity are more important than comprehensiveness.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'Focus the control plan on the critical few inputs (vital Xs) verified as root causes in Analyze. Trying to monitor everything is as ineffective as monitoring nothing.',
        },
      ],
    },
    {
      id: 'dmaic-m6-l2',
      title: 'Control Charts: Hearing the Voice of the Process',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Control charts (also called Statistical Process Control charts) are time-ordered plots of process data with statistically calculated control limits. They distinguish between common-cause variation (the normal noise of the process) and special-cause variation (signals of something unusual that requires investigation).',
        },
        {
          type: 'heading' as const,
          text: 'Selecting the Right Control Chart',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Data Type', 'Subgroup Size', 'Chart Type'],
          rows: [
            ['Continuous', 'n = 1 (individual readings)', 'I-MR (Individuals & Moving Range)'],
            ['Continuous', 'n = 2–8', 'X-bar & R'],
            ['Continuous', 'n ≥ 9', 'X-bar & S'],
            ['Discrete – proportion defective', 'Variable subgroup sizes', 'p-chart'],
            ['Discrete – proportion defective', 'Constant subgroup sizes', 'np-chart'],
            ['Discrete – defects per unit', 'Variable area of opportunity', 'u-chart'],
            ['Discrete – defects per unit', 'Constant area of opportunity', 'c-chart'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Interpreting Control Charts',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Control limits are set at ±3 standard deviations from the process mean. They are not specification limits—they represent the natural voice of the process. Common special-cause rules (Western Electric / Nelson rules) include:',
        },
        {
          type: 'list' as const,
          items: [
            'One point beyond the 3-sigma control limit',
            'Eight consecutive points on the same side of the center line',
            'Six consecutive points steadily increasing or decreasing (trend)',
            'Two of three consecutive points beyond the 2-sigma warning limit',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Control Limits vs. Specification Limits',
          text: 'Confusing these is one of the most common errors in SPC. Control limits come from the data—they describe what the process actually does. Specification limits come from the customer—they describe what the customer requires. A process can be in statistical control but still produce defects if the process spread exceeds the specification width.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          text: 'Recalculate control limits after implementing the improvement to establish a new baseline. Old control limits based on the pre-improvement process will generate false signals in the new, improved process.',
        },
      ],
    },
    {
      id: 'dmaic-m6-l3',
      title: 'SOP Updates, Process Owner Handoff & Project Closure',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The final steps of DMAIC formalize the improved process in documentation, transfer ownership to the right person, and capture project learnings for the organization.',
        },
        {
          type: 'heading' as const,
          text: 'Updating Standard Operating Procedures',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'SOPs must be updated to reflect the improved process before the project team disbands. This includes procedure documents, work instructions, training materials, job aids, and system configurations. Outdated SOPs are a primary vehicle for regression—operators who consult documentation will revert to the old process if it is not updated.',
        },
        {
          type: 'list' as const,
          items: [
            'Update all affected procedure documents with version control',
            'Revise training materials and ensure new hires receive updated content',
            'Post visual management aids (process maps, decision trees) at the point of use',
            'Update system configurations, templates, and automated checks',
            'Archive old versions with a clear notation that they are superseded',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Structured Process Owner Handoff',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The process owner is the person accountable for the process going forward. The handoff meeting should cover: what was changed and why, how to use the control plan and charts, who to contact when problems arise, and when the 30/60/90-day follow-up reviews will occur.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Handoff Package Contents',
          text: 'A complete handoff package includes: the updated process map, control plan, control chart templates pre-loaded with new baselines, updated SOPs, a list of escalation contacts, and calendar invites for the 30/60/90-day follow-up reviews.',
        },
        {
          type: 'heading' as const,
          text: 'Project Closure',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Project closure documents what was accomplished, validates the financial benefit, and captures lessons learned. This information feeds the organization\'s institutional knowledge and informs future project scoping.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Compare final capability metrics to the baseline and goal statement',
            'Calculate validated financial benefit with Finance sign-off',
            'Document lessons learned: what worked, what did not, what to do differently',
            'Recognize team contributions formally',
            'Share the success story to inspire future improvement projects',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: '30/60/90-Day Follow-Up',
          text: 'Schedule formal follow-up reviews at 30, 60, and 90 days post-implementation. These reviews confirm that the process is performing to the new standard, control charts are being maintained, and the process owner has the support needed. Early signs of regression are easiest to address when caught early.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'dmaic-m6-q1',
      type: 'multiple-choice' as const,
      question: 'What is the purpose of a reaction plan in a control plan?',
      options: [
        'To document the root causes found in the Analyze phase',
        'To specify step-by-step actions operators must take when a measure goes out of control',
        'To justify the financial investment in the improvement project',
        'To define the specification limits for each critical output',
      ],
      correctIndex: 1,
      explanation: 'A reaction plan tells operators exactly what to do when a control signal occurs, ensuring a consistent, timely response without needing to escalate every out-of-control condition to the Black Belt.',
    },
    {
      id: 'dmaic-m6-q2',
      type: 'multiple-choice' as const,
      question: 'Which control chart is most appropriate for monitoring the proportion of defective items when subgroup sizes vary?',
      options: ['np-chart', 'p-chart', 'c-chart', 'I-MR chart'],
      correctIndex: 1,
      explanation: 'The p-chart tracks the proportion defective and accommodates variable subgroup sizes. The np-chart requires constant subgroup sizes.',
    },
    {
      id: 'dmaic-m6-q3',
      type: 'true-false' as const,
      question: 'Control limits and specification limits are the same thing and can be used interchangeably.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Control limits reflect the natural variation of the process (calculated from data). Specification limits reflect customer requirements. Confusing these is a fundamental SPC error.',
    },
    {
      id: 'dmaic-m6-q4',
      type: 'multiple-choice' as const,
      question: 'Why should control limits be recalculated after implementing an improvement?',
      options: [
        'To make the chart look better for the sponsor presentation',
        'Because the specification limits have changed',
        'Because old limits based on the pre-improvement process will generate false signals in the new process',
        'To satisfy the ISO 9001 documentation requirement',
      ],
      correctIndex: 2,
      explanation: 'After improvement, the process mean and/or variation has changed. Old control limits no longer reflect the new process behavior and will produce misleading signals—either missing real problems or flagging normal variation as special cause.',
    },
    {
      id: 'dmaic-m6-q5',
      type: 'true-false' as const,
      question: 'Once the Control phase is complete and the project is closed, no further follow-up is needed.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Scheduled 30/60/90-day follow-up reviews are a Control phase best practice. They catch early signs of regression and ensure the process owner has adequate support to sustain the gains.',
    },
  ],
};

// ─── Course Export ────────────────────────────────────────────────────────────

export const dmaicMethodologyCourse: Course = {
  id: 'dmaic-methodology',
  track: 'lean-foundations',
  title: 'DMAIC Methodology Deep Dive',
  subtitle: 'A Structured Approach to Problem Solving',
  description:
    'Go beyond the basics with an in-depth exploration of each DMAIC phase. Master the tools, deliverables, and decision criteria that separate successful improvement projects from stalled initiatives.',
  status: 'available',
  estimatedHours: 8,
  color: '#4caf82',
  icon: '🔄',
  modules: [module1, module2, module3, module4, module5, module6],
};
