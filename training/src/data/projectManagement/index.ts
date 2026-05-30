import type { Course } from '../../types/course';

const module1 = {
  id: 'pm-m1',
  number: 1,
  title: 'Project Management Fundamentals',
  description: 'Understand what defines a project, the PM lifecycle, and the key constraints every project manager must balance.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Define what a project is and how it differs from ongoing operations',
    'Describe the five phases of the project management lifecycle',
    'Explain the triple constraint (scope, time, cost) and its quality dimension',
    'Identify the core responsibilities of a project manager',
  ],
  lessons: [
    {
      id: 'pm-m1-l1',
      title: 'What Is a Project?',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph',
          text: 'A project is a temporary endeavor undertaken to create a unique product, service, or result. The word "temporary" is key — every project has a defined beginning and end. This distinguishes it from the routine, repetitive work that keeps an organization running day to day.',
        },
        {
          type: 'heading',
          text: 'Defining Characteristics of a Project',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Temporary — has a start date and an end date',
            'Unique — produces something that has not existed before in exactly this form',
            'Progressive elaboration — details are refined and developed over time as more information becomes available',
            'Resource-constrained — people, budget, and time are finite',
            'Cross-functional — typically requires collaboration across roles and departments',
          ],
        },
        {
          type: 'heading',
          text: 'Projects vs. Operations',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Dimension', 'Project', 'Operations'],
          rows: [
            ['Duration', 'Temporary', 'Ongoing'],
            ['Output', 'Unique deliverable', 'Repetitive product or service'],
            ['Goal', 'Achieve an objective, then close', 'Sustain business functions'],
            ['Example', 'Launch a new client portal', 'Process payroll every two weeks'],
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Real-World Example',
          text: 'Implementing a new CRM system is a project — it has a clear end state and will not be repeated. Using that CRM daily to track client interactions is an operation.',
        },
      ],
    },
    {
      id: 'pm-m1-l2',
      title: 'The Project Management Lifecycle',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'The PM lifecycle organizes work into sequential phases that guide a project from idea to closure. While different frameworks use different names, the five-phase model is widely recognized and practical for most contexts.',
        },
        {
          type: 'ordered-list',
          items: [
            'Initiate — Define the project at a high level, identify stakeholders, and obtain authorization to proceed (often formalized in a Project Charter).',
            'Plan — Develop the roadmap: scope, schedule, budget, resource plan, risk register, and communication plan. The more thorough the plan, the fewer surprises later.',
            'Execute — Do the work. Coordinate people and resources, manage vendor relationships, and produce deliverables according to the plan.',
            'Monitor & Control — Track progress against the plan, measure performance, identify variances, and take corrective action. This phase runs in parallel with Execute.',
            'Close — Formally complete the project: obtain final acceptance, release resources, capture lessons learned, and archive documentation.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Planning Is Not a One-Time Event',
          text: 'Many new PMs treat planning as a phase they pass through once. In practice, plans are living documents. As conditions change, you revisit and update them — especially the schedule, risk register, and budget forecast.',
        },
        {
          type: 'heading',
          text: 'Key Outputs by Phase',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Phase', 'Key Outputs'],
          rows: [
            ['Initiate', 'Project Charter, Stakeholder Register'],
            ['Plan', 'Scope Statement, WBS, Gantt Chart, Risk Register, Communication Plan'],
            ['Execute', 'Deliverables, Status Reports, Change Requests'],
            ['Monitor & Control', 'Performance Reports, Variance Analysis, Updated Plans'],
            ['Close', 'Final Acceptance, Lessons Learned, Archived Documents'],
          ],
        },
      ],
    },
    {
      id: 'pm-m1-l3',
      title: 'Key Constraints: Scope, Time, Cost & Quality',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'Every project operates within constraints. The classic "triple constraint" — scope, time, and cost — is often depicted as a triangle. Change one side and you affect the others. Quality is sometimes called the fourth constraint: it sits at the center, determined by how well you balance the three sides.',
        },
        {
          type: 'key-terms',
          terms: [
            { term: 'Scope', definition: 'The work that must be done to deliver the project\'s product or result. Includes features, functions, and deliverables.' },
            { term: 'Time', definition: 'The schedule — when activities will occur and when the project will be complete.' },
            { term: 'Cost', definition: 'The budget — financial resources approved for the project, including labor, materials, and overhead.' },
            { term: 'Quality', definition: 'The degree to which deliverables meet defined requirements and stakeholder expectations.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Constraint Trade-Off',
          text: 'If a client asks to add features (scope increases), you must either extend the timeline, increase the budget, or accept a quality reduction. There is no free lunch. Making these trade-offs visible and explicit is one of the most valuable things a PM does.',
        },
        {
          type: 'heading',
          text: 'The Role of the Project Manager',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Define and protect scope',
            'Build and maintain a realistic schedule',
            'Track and forecast costs',
            'Identify and mitigate risks proactively',
            'Communicate clearly with stakeholders at all levels',
            'Lead and motivate the project team',
            'Make decisions and escalate issues appropriately',
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'PM as Integrator',
          text: 'More than any technical skill, effective project management is about integration — connecting people, processes, and information so the team can deliver as a coordinated unit rather than isolated contributors.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'pm-m1-q1',
      type: 'multiple-choice',
      question: 'Which of the following best distinguishes a project from an operation?',
      options: [
        'Projects always cost more than operations',
        'Projects are temporary and produce a unique result',
        'Operations require more planning than projects',
        'Projects are only undertaken by large organizations',
      ],
      correctIndex: 1,
      explanation: 'Projects are defined by being temporary (they have a start and end) and producing something unique. Operations are ongoing and repetitive.',
    },
    {
      id: 'pm-m1-q2',
      type: 'multiple-choice',
      question: 'During which project phase is the Project Charter typically created?',
      options: ['Plan', 'Execute', 'Initiate', 'Close'],
      correctIndex: 2,
      explanation: 'The Project Charter is created during the Initiate phase. It formally authorizes the project and defines it at a high level.',
    },
    {
      id: 'pm-m1-q3',
      type: 'true-false',
      question: 'The Monitor & Control phase only occurs after the Execute phase is complete.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Monitor & Control runs in parallel with Execute throughout the project. PMs continuously track progress and take corrective action as work is being done.',
    },
    {
      id: 'pm-m1-q4',
      type: 'multiple-choice',
      question: 'A client requests new features mid-project without changing the deadline or budget. Which constraint is most at risk?',
      options: ['Time', 'Cost', 'Quality', 'Stakeholder satisfaction'],
      correctIndex: 2,
      explanation: 'Adding scope without adjusting time or cost typically forces quality trade-offs — the team must rush or cut corners to deliver everything within the original constraints.',
    },
    {
      id: 'pm-m1-q5',
      type: 'multiple-choice',
      question: 'Which output is most associated with the Close phase?',
      options: ['Risk Register', 'Project Charter', 'Lessons Learned', 'Gantt Chart'],
      correctIndex: 2,
      explanation: 'Lessons Learned are captured during the Close phase to document what went well and what could be improved, creating institutional knowledge for future projects.',
    },
  ],
};

const module2 = {
  id: 'pm-m2',
  number: 2,
  title: 'Scope & Requirements Management',
  description: 'Define clear project boundaries, gather requirements effectively, and protect scope from uncontrolled changes.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Write a clear scope statement that defines project boundaries',
    'Build a Work Breakdown Structure (WBS) to organize deliverables',
    'Apply requirements-gathering techniques to elicit stakeholder needs',
    'Identify scope creep and apply a change control process to manage it',
  ],
  lessons: [
    {
      id: 'pm-m2-l1',
      title: 'Writing a Scope Statement',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph',
          text: 'A scope statement is the foundation of your project plan. It defines what the project will deliver, and equally important, what it will not deliver. Ambiguous scope is one of the leading causes of project failure.',
        },
        {
          type: 'heading',
          text: 'Elements of a Scope Statement',
          level: 2,
        },
        {
          type: 'ordered-list',
          items: [
            'Project Objectives — What the project is intended to achieve and why it matters to the organization.',
            'Deliverables — Specific outputs, products, or results the project will produce.',
            'Acceptance Criteria — Measurable conditions that must be met for deliverables to be accepted.',
            'Exclusions — Explicit list of what is out of scope to prevent misunderstandings.',
            'Constraints — Limitations on time, budget, technology, or resources.',
            'Assumptions — Conditions believed to be true that the plan depends on.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Be Explicit About Exclusions',
          text: 'Listing what is out of scope is just as valuable as listing what is in scope. If a stakeholder later requests something not mentioned, you can point to the exclusions list and initiate a formal change request rather than absorbing the work silently.',
        },
      ],
    },
    {
      id: 'pm-m2-l2',
      title: 'Work Breakdown Structure (WBS)',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'A Work Breakdown Structure decomposes the total scope of a project into smaller, manageable components called work packages. The WBS is hierarchical — starting from the project as a whole, breaking down into phases or major deliverables, then further into tasks that can be assigned, estimated, and tracked.',
        },
        {
          type: 'heading',
          text: 'WBS Principles',
          level: 2,
        },
        {
          type: 'list',
          items: [
            '100% Rule — The WBS must capture 100% of the work. Nothing should be left out, and nothing in the WBS should be outside the scope.',
            'Mutually Exclusive — Work packages should not overlap. Each unit of work belongs to exactly one place in the hierarchy.',
            'Outcome-Oriented — WBS elements should represent deliverables (nouns), not activities (verbs). "Training Materials" rather than "Create Training Materials."',
            'Manageable Size — A work package should be small enough to estimate, assign, and track independently — typically no more than 80 hours of effort.',
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'WBS Example: Website Redesign Project',
          text: 'Level 1: Website Redesign | Level 2: Discovery, Design, Development, Testing, Launch | Level 3 (under Design): Wireframes, Visual Style Guide, Page Mockups, Stakeholder Review | Level 4 (under Wireframes): Homepage Wireframe, About Page Wireframe, Contact Page Wireframe',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'WBS and Scheduling',
          text: 'Once the WBS is complete, you can sequence the work packages, estimate durations, assign resources, and build your schedule. The WBS is the skeleton that the rest of the plan hangs on.',
        },
      ],
    },
    {
      id: 'pm-m2-l3',
      title: 'Requirements Gathering & Scope Creep',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'Requirements gathering is the process of eliciting, analyzing, and documenting what stakeholders need from the project\'s outputs. Poor requirements are a root cause of rework, delays, and dissatisfied clients.',
        },
        {
          type: 'heading',
          text: 'Requirements Gathering Techniques',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Technique', 'Best Used When', 'Watch Out For'],
          rows: [
            ['Interviews', 'Gathering in-depth input from key individuals', 'Groupthink if done in groups too early'],
            ['Workshops / JAD Sessions', 'Aligning diverse stakeholders quickly', 'Dominant voices drowning out others'],
            ['Surveys & Questionnaires', 'Collecting input from large groups', 'Low response rates; surface-level answers'],
            ['Observation (Job Shadowing)', 'Understanding current workflows', 'Observer effect changing normal behavior'],
            ['Document Analysis', 'Reviewing existing processes or systems', 'Outdated documentation as a source of truth'],
            ['Prototyping', 'Clarifying vague requirements through tangible examples', 'Stakeholders treating prototypes as final products'],
          ],
        },
        {
          type: 'heading',
          text: 'Scope Creep',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Scope creep is the gradual, uncontrolled expansion of project scope without corresponding adjustments to time, budget, or resources. It often happens through small, seemingly reasonable additions that accumulate into significant unplanned work.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Scope Creep Is Rarely Dramatic',
          text: '"Can we just add one more field to that report?" "While you\'re at it, could you also…?" These small requests feel harmless individually but collectively derail timelines. Every change, no matter how small, deserves a change request.',
        },
        {
          type: 'heading',
          text: 'Change Control Process',
          level: 2,
        },
        {
          type: 'ordered-list',
          items: [
            'Change Request Submitted — Anyone can submit a change request, describing what they want changed and why.',
            'Impact Analysis — The PM assesses impact on scope, schedule, cost, and quality.',
            'Review & Decision — A Change Control Board (or the appropriate authority) reviews the request and approves, rejects, or defers it.',
            'Plan Updated — If approved, all affected plan documents (scope, schedule, budget) are updated.',
            'Team Notified — Relevant team members are informed of the change and new expectations.',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'pm-m2-q1',
      type: 'multiple-choice',
      question: 'Which element of a scope statement explicitly lists what the project will NOT deliver?',
      options: ['Constraints', 'Assumptions', 'Exclusions', 'Acceptance Criteria'],
      correctIndex: 2,
      explanation: 'Exclusions explicitly state what is outside the project boundaries, preventing stakeholders from assuming those items are included.',
    },
    {
      id: 'pm-m2-q2',
      type: 'true-false',
      question: 'In a Work Breakdown Structure, the same work package can appear in two different branches to reflect shared effort.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'The WBS principle of mutual exclusivity requires that each work package appears in exactly one place. Overlapping work packages cause confusion in accountability and cost tracking.',
    },
    {
      id: 'pm-m2-q3',
      type: 'multiple-choice',
      question: 'A stakeholder asks to add a new feature mid-project with no change to the deadline or budget. What should the PM do first?',
      options: [
        'Absorb the work and work overtime to deliver it',
        'Refuse the request entirely',
        'Ask the team to deprioritize lower-value tasks',
        'Submit a formal change request and conduct an impact analysis',
      ],
      correctIndex: 3,
      explanation: 'Every change should go through the change control process. The PM must analyze the impact before committing to any addition, even if it seems small.',
    },
    {
      id: 'pm-m2-q4',
      type: 'multiple-choice',
      question: 'Which requirements-gathering technique is best suited to understanding how users actually perform their current tasks?',
      options: ['Surveys', 'Observation / Job Shadowing', 'Document Analysis', 'Interviews'],
      correctIndex: 1,
      explanation: 'Observation (job shadowing) allows the PM or analyst to see firsthand how work is done, revealing implicit requirements that users may not think to articulate.',
    },
    {
      id: 'pm-m2-q5',
      type: 'multiple-choice',
      question: 'What does the "100% Rule" mean in the context of a WBS?',
      options: [
        'Every team member must be assigned to at least one work package',
        'All tasks must be completable in under 100 hours',
        'The WBS must capture 100% of the project scope with no overlap and no gaps',
        'The WBS must be reviewed by 100% of stakeholders',
      ],
      correctIndex: 2,
      explanation: 'The 100% Rule ensures the WBS is complete — all work is captured, nothing is duplicated, and nothing outside the scope is included.',
    },
  ],
};

const module3 = {
  id: 'pm-m3',
  number: 3,
  title: 'Scheduling & Resource Planning',
  description: 'Build realistic schedules using Gantt charts and critical path analysis, and plan resources to avoid bottlenecks.',
  estimatedMinutes: 65,
  learningObjectives: [
    'Create and interpret a Gantt chart for a project schedule',
    'Identify dependencies between tasks and their scheduling implications',
    'Calculate the critical path and explain why it matters',
    'Apply resource leveling to resolve over-allocation',
    'Distinguish between a baseline schedule and actual progress',
  ],
  lessons: [
    {
      id: 'pm-m3-l1',
      title: 'Gantt Charts & Task Dependencies',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'A Gantt chart is a horizontal bar chart that visualizes a project schedule. Each bar represents a task, its length shows duration, and its position shows when it starts and ends. Gantt charts are the most widely used scheduling tool in project management.',
        },
        {
          type: 'heading',
          text: 'Reading a Gantt Chart',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Rows — Each row represents a task or work package',
            'Bars — The horizontal bar spans from the task\'s start to end date',
            'Milestones — Diamond shapes indicating significant events or decision points with zero duration',
            'Dependencies — Arrows connecting bars to show which tasks must finish before others can start',
            'Progress — Often shown by shading within the bar (e.g., 50% filled = 50% complete)',
          ],
        },
        {
          type: 'heading',
          text: 'Types of Task Dependencies',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Dependency Type', 'Meaning', 'Example'],
          rows: [
            ['Finish-to-Start (FS)', 'Task B cannot start until Task A finishes', 'Requirements must finish before design begins'],
            ['Start-to-Start (SS)', 'Task B cannot start until Task A starts', 'Testing can start once development starts'],
            ['Finish-to-Finish (FF)', 'Task B cannot finish until Task A finishes', 'Documentation finishes when coding finishes'],
            ['Start-to-Finish (SF)', 'Task B cannot finish until Task A starts', 'Rare; used in shift handover scenarios'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Leads and Lags',
          text: 'A lead shortens the gap between dependent tasks (you can start Task B 2 days before Task A finishes). A lag adds a waiting period (Task B must wait 3 days after Task A finishes). Use these to build more realistic schedules.',
        },
      ],
    },
    {
      id: 'pm-m3-l2',
      title: 'Critical Path Method',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'The Critical Path Method (CPM) identifies the longest sequence of dependent tasks that determines the minimum project duration. Any delay on the critical path directly delays the project end date.',
        },
        {
          type: 'heading',
          text: 'Key Concepts',
          level: 2,
        },
        {
          type: 'key-terms',
          terms: [
            { term: 'Critical Path', definition: 'The longest path through the network of tasks. Total float on critical path tasks is zero.' },
            { term: 'Float (Slack)', definition: 'The amount of time a task can be delayed without delaying the project end date. Critical path tasks have zero float.' },
            { term: 'Early Start / Early Finish', definition: 'The earliest a task can start or finish given its dependencies.' },
            { term: 'Late Start / Late Finish', definition: 'The latest a task can start or finish without delaying the project.' },
            { term: 'Near-Critical Path', definition: 'A path with very little float — tasks that could easily become critical if delayed.' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Why CPM Matters',
          text: 'CPM tells you where to focus. If a critical path task is running late, you need to act immediately — add resources, reduce scope, or negotiate the deadline. A non-critical task running a week late may have no impact if it has sufficient float.',
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Schedule Compression Techniques',
          text: 'When you need to shorten the schedule: (1) Crashing — add resources to critical path tasks to reduce their duration, at increased cost. (2) Fast-tracking — overlap tasks that were originally sequential, increasing risk. Always analyze trade-offs before compressing.',
        },
      ],
    },
    {
      id: 'pm-m3-l3',
      title: 'Resource Planning, Leveling & Baselines',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'A schedule is only realistic if the resources required are actually available. Resource planning ensures that people and materials are assigned appropriately and that no one is over-committed.',
        },
        {
          type: 'heading',
          text: 'Resource Leveling',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Resource leveling adjusts the schedule to eliminate over-allocation — situations where a team member is assigned more work than they can handle in a given period. Leveling may extend the project end date but produces a more realistic and sustainable plan.',
        },
        {
          type: 'list',
          items: [
            'Identify over-allocated resources by viewing resource usage across time',
            'Delay non-critical tasks that are consuming the over-allocated resource',
            'Re-assign work to other team members with available capacity',
            'Negotiate with resource managers for additional capacity if needed',
            'Consider splitting tasks or reducing scope as a last resort',
          ],
        },
        {
          type: 'heading',
          text: 'Baseline vs. Actual',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Once the schedule is approved, you save it as the baseline. The baseline is a frozen snapshot of the original plan — start dates, end dates, and durations for every task. As the project progresses, you track actual progress against the baseline to identify variances.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Protect Your Baseline',
          text: 'Only update the baseline through a formal change control process. If you continuously reset the baseline to match actuals, you lose the ability to measure true schedule performance and identify trends.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Earned Value Key Metrics',
          text: 'Schedule Variance (SV = Earned Value − Planned Value): negative means behind schedule. Schedule Performance Index (SPI = EV ÷ PV): below 1.0 means the project is progressing slower than planned.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'pm-m3-q1',
      type: 'multiple-choice',
      question: 'A task on the critical path is delayed by 3 days. What is the effect on the project end date?',
      options: [
        'No effect — only milestones affect the end date',
        'The end date moves by 3 days',
        'The end date moves only if there is no float elsewhere',
        'The effect depends on the project budget',
      ],
      correctIndex: 1,
      explanation: 'Critical path tasks have zero float, so any delay directly extends the project end date by the same amount.',
    },
    {
      id: 'pm-m3-q2',
      type: 'multiple-choice',
      question: 'Which dependency type means "Task B cannot start until Task A finishes"?',
      options: ['Start-to-Start', 'Finish-to-Finish', 'Finish-to-Start', 'Start-to-Finish'],
      correctIndex: 2,
      explanation: 'Finish-to-Start (FS) is the most common dependency type: the predecessor must finish before the successor can begin.',
    },
    {
      id: 'pm-m3-q3',
      type: 'true-false',
      question: 'Resource leveling can extend the project end date.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'Resource leveling resolves over-allocation by delaying tasks, which can push the project end date. The trade-off is a more realistic and sustainable schedule.',
    },
    {
      id: 'pm-m3-q4',
      type: 'multiple-choice',
      question: 'What is the purpose of saving a schedule baseline?',
      options: [
        'To share with external stakeholders as a contract',
        'To provide a fixed reference point for measuring schedule performance',
        'To prevent the team from making any changes to the plan',
        'To satisfy regulatory reporting requirements',
      ],
      correctIndex: 1,
      explanation: 'The baseline is the approved original schedule. Tracking actuals against the baseline reveals schedule variances and trends that inform corrective action.',
    },
    {
      id: 'pm-m3-q5',
      type: 'multiple-choice',
      question: 'Fast-tracking a schedule means:',
      options: [
        'Adding resources to shorten task durations',
        'Cutting scope to meet the deadline',
        'Overlapping tasks that were originally planned sequentially',
        'Compressing the workday to fit more hours in',
      ],
      correctIndex: 2,
      explanation: 'Fast-tracking overlaps dependent tasks to shorten the schedule. It increases risk because tasks that were meant to be done sequentially are now done in parallel.',
    },
  ],
};

const module4 = {
  id: 'pm-m4',
  number: 4,
  title: 'Risk & Issue Management',
  description: 'Identify, assess, and respond to project risks before they become problems — and manage issues effectively when they do.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Distinguish between risks (uncertain future events) and issues (current problems)',
    'Use a probability-impact matrix to prioritize risks',
    'Develop a risk register with mitigation and contingency strategies',
    'Apply an issue escalation process to resolve problems efficiently',
  ],
  lessons: [
    {
      id: 'pm-m4-l1',
      title: 'Risk Identification & the Probability-Impact Matrix',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'A risk is an uncertain event that, if it occurs, will have a positive or negative effect on the project. Risks are future-oriented — they may or may not happen. An issue is a risk that has already materialized and must be resolved now.',
        },
        {
          type: 'heading',
          text: 'Risk Identification Techniques',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Brainstorming — Gather the team to freely generate risks without judgment',
            'Expert Interviews — Talk to people with experience on similar projects',
            'Assumption Analysis — Challenge every assumption in your plan: what if it\'s wrong?',
            'Lessons Learned Review — What risks materialized on past similar projects?',
            'SWOT Analysis — Identify Strengths, Weaknesses, Opportunities, and Threats',
            'Checklist Analysis — Use standard risk checklists for your industry or project type',
          ],
        },
        {
          type: 'heading',
          text: 'Probability-Impact Matrix',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Once risks are identified, prioritize them using a probability-impact (P×I) matrix. Assess each risk on two dimensions: how likely it is to occur (probability) and how severe the effect would be (impact). Multiply the two scores to get a risk score.',
        },
        {
          type: 'table',
          headers: ['Risk Score', 'Priority', 'Response Approach'],
          rows: [
            ['High (P×I > 0.5)', 'Critical', 'Active mitigation required; assign an owner immediately'],
            ['Medium (0.2–0.5)', 'Moderate', 'Monitor closely; develop contingency plans'],
            ['Low (< 0.2)', 'Low', 'Accept and log; review periodically'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Include Positive Risks',
          text: 'Not all risks are threats. A positive risk (opportunity) might be: "If we complete Phase 1 early, we may be able to add the bonus feature." Capture and actively pursue opportunities just as you manage threats.',
        },
      ],
    },
    {
      id: 'pm-m4-l2',
      title: 'Risk Register & Response Strategies',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'The risk register is a living document that captures all identified risks and their management strategies. It is reviewed and updated throughout the project — typically at every status meeting.',
        },
        {
          type: 'heading',
          text: 'Risk Register Fields',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Field', 'Description'],
          rows: [
            ['Risk ID', 'Unique identifier for tracking'],
            ['Description', 'Clear statement of the risk event and its cause'],
            ['Category', 'Technical, External, Organizational, Project Management'],
            ['Probability', 'Likelihood of occurrence (Low/Medium/High or 0–1 scale)'],
            ['Impact', 'Severity if it occurs (Low/Medium/High or 1–10 scale)'],
            ['Risk Score', 'Probability × Impact'],
            ['Owner', 'Person responsible for monitoring and responding to the risk'],
            ['Response Strategy', 'How the team will handle the risk'],
            ['Contingency Plan', 'What to do if the risk occurs despite mitigation'],
            ['Trigger', 'Early warning signs that the risk is materializing'],
            ['Status', 'Open, In Progress, Closed'],
          ],
        },
        {
          type: 'heading',
          text: 'Response Strategies for Threats',
          level: 2,
        },
        {
          type: 'key-terms',
          terms: [
            { term: 'Avoid', definition: 'Eliminate the threat by changing the plan. Example: remove a dependency on an unreliable vendor.' },
            { term: 'Transfer', definition: 'Shift the financial impact to a third party. Example: purchase insurance or include penalty clauses in contracts.' },
            { term: 'Mitigate', definition: 'Reduce the probability or impact to an acceptable level. Example: add a code review step to reduce defect risk.' },
            { term: 'Accept', definition: 'Acknowledge the risk and choose not to act unless it occurs. Passive acceptance watches; active acceptance sets aside a contingency reserve.' },
          ],
        },
      ],
    },
    {
      id: 'pm-m4-l3',
      title: 'Issue Management & Escalation',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph',
          text: 'When a risk materializes or an unexpected problem arises, it becomes an issue. Issues require immediate attention and a resolution plan. Unlike risks, which are managed proactively, issues demand reactive problem-solving.',
        },
        {
          type: 'heading',
          text: 'Issue Log',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Issue ID and description',
            'Date identified and reported by',
            'Priority (Critical / High / Medium / Low)',
            'Owner responsible for resolution',
            'Proposed resolution and action steps',
            'Target resolution date and actual resolution date',
            'Impact on schedule, cost, or quality if unresolved',
          ],
        },
        {
          type: 'heading',
          text: 'Escalation Process',
          level: 2,
        },
        {
          type: 'ordered-list',
          items: [
            'Attempt resolution within the team — give the owner a defined time window to resolve independently.',
            'Escalate to the PM — if the owner cannot resolve within the window, the PM steps in with additional resources or authority.',
            'Escalate to the sponsor or steering committee — if the PM cannot resolve (e.g., the issue requires a decision above their authority or budget), escalate formally.',
            'Document the resolution — once resolved, capture what was done and update the issue log.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Escalation Avoidance',
          text: 'Many project teams wait too long to escalate, hoping the issue will resolve itself. Define escalation thresholds upfront (e.g., "any issue unresolved for more than 48 hours escalates to PM") and stick to them.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'pm-m4-q1',
      type: 'multiple-choice',
      question: 'What is the difference between a risk and an issue?',
      options: [
        'Risks are more serious than issues',
        'A risk is an uncertain future event; an issue is a current problem requiring resolution',
        'Issues are tracked in the risk register; risks are tracked in the issue log',
        'Risks are managed by the sponsor; issues are managed by the PM',
      ],
      correctIndex: 1,
      explanation: 'A risk is something that might happen in the future. Once it occurs, it becomes an issue that must be actively resolved.',
    },
    {
      id: 'pm-m4-q2',
      type: 'multiple-choice',
      question: 'Which risk response strategy involves purchasing insurance to cover potential losses?',
      options: ['Avoid', 'Mitigate', 'Accept', 'Transfer'],
      correctIndex: 3,
      explanation: 'Transfer shifts the financial impact of a risk to a third party, such as through insurance, warranties, or contractual penalty clauses.',
    },
    {
      id: 'pm-m4-q3',
      type: 'true-false',
      question: 'A risk with high probability but low impact should always be escalated to the project sponsor immediately.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Risk response should be proportional to the risk score (probability × impact). A high probability, low impact risk may warrant a mitigation plan but may not require sponsor escalation if the PM can handle it.',
    },
    {
      id: 'pm-m4-q4',
      type: 'multiple-choice',
      question: 'What is a risk trigger?',
      options: [
        'The event that causes a risk to be added to the register',
        'An early warning sign that a risk is materializing',
        'The person responsible for responding to a risk',
        'The financial threshold at which a risk becomes critical',
      ],
      correctIndex: 1,
      explanation: 'A trigger is a predefined indicator that signals a risk may be about to occur, allowing the team to activate contingency plans before full impact is felt.',
    },
    {
      id: 'pm-m4-q5',
      type: 'multiple-choice',
      question: 'What distinguishes active acceptance of a risk from passive acceptance?',
      options: [
        'Active acceptance involves documenting the risk; passive acceptance ignores it',
        'Active acceptance sets aside a contingency reserve; passive acceptance takes no advance action',
        'Active acceptance is used for high-priority risks; passive acceptance for low-priority ones',
        'Active acceptance requires sponsor approval; passive acceptance does not',
      ],
      correctIndex: 1,
      explanation: 'Active acceptance prepares for the risk by setting aside budget or resources (a contingency reserve). Passive acceptance simply acknowledges the risk and deals with it if it occurs.',
    },
  ],
};

const module5 = {
  id: 'pm-m5',
  number: 5,
  title: 'Stakeholder Communication & Reporting',
  description: 'Map stakeholders, develop a communication plan, and deliver clear, actionable status reports and dashboards.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Create a stakeholder map that identifies influence and interest',
    'Develop a communication plan tailored to different audiences',
    'Write an effective project status report',
    'Design a project dashboard that supports decision-making',
    'Adapt communication style for executive audiences',
  ],
  lessons: [
    {
      id: 'pm-m5-l1',
      title: 'Stakeholder Mapping',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph',
          text: 'A stakeholder is anyone who is affected by or can affect the project. Effective stakeholder management begins with identifying who they are, understanding their interests and concerns, and tailoring your engagement accordingly.',
        },
        {
          type: 'heading',
          text: 'Power-Interest Grid',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Quadrant', 'Power', 'Interest', 'Strategy'],
          rows: [
            ['Manage Closely', 'High', 'High', 'Engage frequently; involve in key decisions'],
            ['Keep Satisfied', 'High', 'Low', 'Meet their needs; avoid surprises'],
            ['Keep Informed', 'Low', 'High', 'Regular updates; welcome their input'],
            ['Monitor', 'Low', 'Low', 'Minimal engagement; watch for changes'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Stakeholder Positions Can Shift',
          text: 'A quiet stakeholder can become highly vocal if they feel blindsided by a project development. Reassess your stakeholder map at major project milestones and whenever significant changes occur.',
        },
        {
          type: 'heading',
          text: 'Understanding Stakeholder Interests',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'What does this stakeholder gain if the project succeeds?',
            'What do they lose or risk if it fails?',
            'What are their concerns or resistance points?',
            'Who influences them? Who do they influence?',
            'What communication style and format do they prefer?',
          ],
        },
      ],
    },
    {
      id: 'pm-m5-l2',
      title: 'Communication Planning & Status Reports',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'A communication plan defines who needs what information, when, in what format, and through which channel. It prevents information overload for some stakeholders and information gaps for others.',
        },
        {
          type: 'heading',
          text: 'Communication Plan Elements',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Element', 'Questions to Answer'],
          rows: [
            ['Audience', 'Who needs this communication?'],
            ['Content', 'What information do they need?'],
            ['Frequency', 'How often? (Daily, weekly, monthly, milestone-triggered)'],
            ['Format', 'Email, meeting, dashboard, report, presentation?'],
            ['Owner', 'Who is responsible for producing and sending it?'],
            ['Channel', 'Email, Slack, SharePoint, video call, in-person?'],
          ],
        },
        {
          type: 'heading',
          text: 'Writing an Effective Status Report',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'A good status report is concise, honest, and action-oriented. It should take less than five minutes to read and leave the reader with a clear picture of where the project stands.',
        },
        {
          type: 'ordered-list',
          items: [
            'Overall Status — Red / Yellow / Green with a one-sentence summary of why',
            'Accomplishments This Period — What was completed since the last report',
            'Planned Work Next Period — What the team will focus on next',
            'Risks & Issues — Current risks and issues requiring stakeholder awareness',
            'Decisions Needed — Any decisions that require stakeholder input or approval',
            'Schedule & Budget — Percent complete; variance from baseline',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Be Honest About Red Status',
          text: 'Many PMs are reluctant to report Red status, fearing it reflects poorly on them. In reality, stakeholders appreciate transparency — they can help solve problems they know about. A project that shows Yellow for months and then suddenly fails is far more damaging than one that proactively raised concerns.',
        },
      ],
    },
    {
      id: 'pm-m5-l3',
      title: 'Dashboard Design & Executive Communication',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph',
          text: 'A project dashboard provides a visual, at-a-glance view of project health. Well-designed dashboards enable faster decision-making by surfacing the right information without requiring stakeholders to dig through detailed reports.',
        },
        {
          type: 'heading',
          text: 'Dashboard Design Principles',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Lead with status — Overall RAG (Red/Amber/Green) status should be immediately visible',
            'Show trends, not just snapshots — Is the project improving or declining?',
            'Use consistent visual language — Same colors, same definitions across all reporting',
            'Highlight exceptions — Surface what is off-track; don\'t bury it in a sea of green',
            'Keep it current — A dashboard with outdated data is worse than no dashboard',
            'Tailor to the audience — Executives need summaries; teams need operational detail',
          ],
        },
        {
          type: 'heading',
          text: 'Communicating with Executives',
          level: 2,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The BLUF Principle',
          text: 'Bottom Line Up Front (BLUF): state your key message in the first sentence, then provide supporting detail. Executives are time-constrained and decision-focused. Lead with the answer, not the narrative.',
        },
        {
          type: 'list',
          items: [
            'Lead with impact on business objectives, not project activities',
            'Quantify — "We are 2 weeks behind schedule" not "there have been some delays"',
            'Present options with recommendations, not just problems',
            'Anticipate questions and prepare supporting data',
            'Keep presentations to 5 slides or fewer for routine updates',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'pm-m5-q1',
      type: 'multiple-choice',
      question: 'A stakeholder with high power but low interest in the project should be:',
      options: [
        'Kept informed with regular detailed updates',
        'Kept satisfied and protected from surprises',
        'Managed closely with frequent two-way engagement',
        'Monitored with minimal engagement',
      ],
      correctIndex: 1,
      explanation: 'High power / low interest stakeholders should be kept satisfied. They don\'t need frequent updates, but they have the authority to impact your project if they feel their needs are not being met.',
    },
    {
      id: 'pm-m5-q2',
      type: 'true-false',
      question: 'A project status report should always show Green status to maintain stakeholder confidence.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Status reports must be honest. Reporting Red or Yellow status enables stakeholders to help resolve issues. Masking problems with false Green status leads to larger, more damaging failures.',
    },
    {
      id: 'pm-m5-q3',
      type: 'multiple-choice',
      question: 'What does BLUF stand for in executive communication?',
      options: [
        'Budget, Labor, Utilization, Forecast',
        'Bottom Line Up Front',
        'Baseline, Launch, Update, Follow-up',
        'Brief, Logical, Urgent, Factual',
      ],
      correctIndex: 1,
      explanation: 'BLUF means Bottom Line Up Front — state your key message first, then provide supporting detail. This respects executives\' time and ensures the most important information is communicated even if they stop reading early.',
    },
    {
      id: 'pm-m5-q4',
      type: 'multiple-choice',
      question: 'Which of the following is NOT a recommended principle of dashboard design?',
      options: [
        'Show overall RAG status prominently',
        'Display all available project data to demonstrate thoroughness',
        'Highlight exceptions and off-track items',
        'Keep data current and accurate',
      ],
      correctIndex: 1,
      explanation: 'Displaying all available data creates noise that obscures critical information. Dashboards should surface key indicators and exceptions, not everything the PM tracks.',
    },
    {
      id: 'pm-m5-q5',
      type: 'multiple-choice',
      question: 'A stakeholder\'s position on the power-interest grid can change during a project.',
      options: ['True — stakeholder dynamics shift as the project evolves', 'False — stakeholder power and interest are fixed attributes'],
      correctIndex: 0,
      explanation: 'Stakeholder positions change as projects evolve. A previously disengaged stakeholder may become highly vocal when a project enters a phase that directly affects their team or priorities.',
    },
  ],
};

const module6 = {
  id: 'pm-m6',
  number: 6,
  title: 'Modern PM Tools: Smartsheet & Digital Collaboration',
  description: 'Leverage Smartsheet and digital collaboration tools to manage projects effectively in distributed, modern work environments.',
  estimatedMinutes: 65,
  learningObjectives: [
    'Explain the core components of Smartsheet and how they support project management',
    'Structure a project tracking sheet with the right columns and hierarchy',
    'Set up automated alerts and workflows to reduce manual follow-up',
    'Build a project dashboard that gives stakeholders real-time visibility',
    'Apply best practices for digital collaboration in distributed teams',
  ],
  lessons: [
    {
      id: 'pm-m6-l1',
      title: 'Smartsheet Overview: Sheets, Reports & Dashboards',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'Smartsheet is a cloud-based work management platform that combines the familiarity of a spreadsheet with powerful project management capabilities including scheduling, automation, collaboration, and reporting. It is particularly well-suited to organizations that manage multiple concurrent projects and need real-time visibility across teams.',
        },
        {
          type: 'heading',
          text: 'Core Building Blocks',
          level: 2,
        },
        {
          type: 'key-terms',
          terms: [
            { term: 'Sheet', definition: 'The primary workspace in Smartsheet. A sheet looks like a spreadsheet but supports task hierarchies, Gantt views, card views, and calendar views. Each row is typically a task; columns hold attributes like owner, due date, status, and percent complete.' },
            { term: 'Report', definition: 'A cross-sheet view that aggregates rows from multiple sheets based on criteria you define. Reports are live — when underlying data changes, the report updates automatically. Use reports to see all tasks due this week across 10 projects, or all items assigned to one team member.' },
            { term: 'Dashboard', definition: 'A visual summary page built from widgets: charts, metrics, shortcut links, images, and embedded reports. Dashboards give stakeholders a read-only, always-current snapshot without requiring access to the raw sheets.' },
            { term: 'Workspace', definition: 'A folder that organizes related sheets, reports, and dashboards. Sharing a workspace grants access to everything inside it, simplifying permission management for project teams.' },
          ],
        },
        {
          type: 'heading',
          text: 'Structuring a Project Tracking Sheet',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'The structure of your sheet determines how useful it will be throughout the project. Think of the sheet as your WBS made interactive.',
        },
        {
          type: 'list',
          items: [
            'Use parent rows for phases or major deliverables and indent child rows for individual tasks — Smartsheet automatically rolls up dates and percent-complete values from children to parents',
            'Include a Status column with a dropdown (Not Started / In Progress / Complete / Blocked) so you can filter and report by status',
            'Add an Owner column to assign accountability for each task',
            'Include Start Date, End Date, and Duration so Smartsheet can render the Gantt chart automatically',
            'Add a Predecessors column to define task dependencies — Smartsheet will adjust the schedule when dates shift',
            'Use a % Complete column to track progress and drive visual indicators',
            'Consider a Notes or Blockers column for context that doesn\'t fit into structured fields',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Consistency Across Projects',
          text: 'Create a standard project template in Smartsheet and use it for every project. Consistent column names and structures make cross-project reporting much easier and reduce the learning curve for team members who join new projects.',
        },
      ],
    },
    {
      id: 'pm-m6-l2',
      title: 'Automation Workflows & Alerts',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'One of Smartsheet\'s most powerful features is its automation engine, which allows you to trigger actions based on conditions in your sheet — without manual intervention. Automation reduces administrative overhead and ensures that the right people are notified at the right time.',
        },
        {
          type: 'heading',
          text: 'Anatomy of an Automation Workflow',
          level: 2,
        },
        {
          type: 'ordered-list',
          items: [
            'Trigger — What event starts the workflow? Options include: when a row is added or changed, when a date arrives, on a recurring schedule, or when a form is submitted.',
            'Condition (optional) — Filter to specific rows. Example: only trigger when Status = "Blocked" and Owner is not empty.',
            'Action — What happens? Options include: send an alert/notification, send a reminder, request an approval, lock a row, copy or move a row, or update a cell value.',
          ],
        },
        {
          type: 'heading',
          text: 'Practical Automation Examples',
          level: 2,
        },
        {
          type: 'table',
          headers: ['Use Case', 'Trigger', 'Condition', 'Action'],
          rows: [
            ['Overdue task alert', 'Daily schedule', 'End Date < Today AND Status ≠ Complete', 'Notify task owner and PM'],
            ['Status change notification', 'Row changed', 'Status = "Blocked"', 'Notify PM immediately'],
            ['Weekly digest to sponsor', 'Weekly schedule (Friday)', 'None', 'Send summary report via email'],
            ['New task assignment', 'Owner column changed', 'Owner is not empty', 'Notify new owner with task details'],
            ['Approval for high-cost items', 'Row added', 'Estimated Cost > $10,000', 'Send approval request to finance lead'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Automation Reduces Follow-Up Fatigue',
          text: 'PMs often spend significant time manually chasing status updates and reminders. Well-designed automation handles routine follow-up, freeing the PM to focus on decisions, relationships, and risk management — the work that requires human judgment.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Audit Your Automations Regularly',
          text: 'Automation that fires incorrectly or too frequently erodes trust. Review your workflows at each project phase to ensure triggers, conditions, and recipients are still appropriate. Remove or disable automations that are no longer relevant.',
        },
      ],
    },
    {
      id: 'pm-m6-l3',
      title: 'Dashboards, Agile Boards & Distributed Team Best Practices',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'Smartsheet dashboards bring together data from multiple sheets and reports into a single, stakeholder-friendly view. Unlike the raw sheets, dashboards are designed for consumption — they present summaries, trends, and key metrics without exposing the underlying complexity.',
        },
        {
          type: 'heading',
          text: 'Building an Effective Project Dashboard',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Start with a metrics widget showing overall project health (on track / at risk / off track)',
            'Add a chart widget visualizing tasks by status — a bar or donut chart showing Not Started / In Progress / Complete / Blocked gives an immediate sense of momentum',
            'Embed a report widget showing open risks and issues with their owners and due dates',
            'Include a Gantt or timeline widget for milestone visibility',
            'Add a shortcut widget linking to key documents: scope statement, risk register, meeting notes',
            'Use an image or text widget for a brief executive summary that the PM updates weekly',
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Dashboard Audience Design',
          text: 'Consider building two versions: an Executive Dashboard (3–4 high-level widgets: overall status, milestone timeline, budget vs. actuals, open issues count) and a Team Dashboard (detailed task list, upcoming deadlines, blockers by owner). Both pull from the same underlying sheets.',
        },
        {
          type: 'heading',
          text: 'Agile Boards in Smartsheet',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Smartsheet\'s Card View transforms a standard sheet into a Kanban-style board, allowing teams to visualize work in progress and manage flow. Each row becomes a card; you organize cards into columns based on a status or phase field.',
        },
        {
          type: 'list',
          items: [
            'Use Card View for sprint planning, content calendars, or any workflow with distinct stages',
            'Drag cards between columns to update status — the underlying sheet row updates automatically',
            'Set a Work In Progress (WIP) limit visually to prevent overloading any stage',
            'Combine Card View for day-to-day task management with Gantt View for executive milestone reporting — they draw from the same data',
          ],
        },
        {
          type: 'heading',
          text: 'Best Practices for Distributed Teams',
          level: 2,
        },
        {
          type: 'ordered-list',
          items: [
            'Establish a single source of truth — All project information lives in Smartsheet. Meeting notes, decisions, and updates go into the relevant sheet or a linked document, not scattered across email threads.',
            'Define update cadence and expectations — Specify when team members should update their task status (e.g., every Friday by 4 PM). Automate reminders to reinforce the habit.',
            'Integrate with communication tools — Connect Smartsheet to Slack or Microsoft Teams so that significant changes (status updates, new assignments, approvals needed) surface in channels your team already monitors.',
            'Use forms for intake — Instead of email requests, create a Smartsheet form for new project requests, change requests, or issue reports. Form submissions feed directly into your tracking sheet, keeping data structured.',
            'Document decisions in context — Add comments directly to rows in Smartsheet rather than in separate email threads. Context stays attached to the task, making it easy for anyone joining later to understand the history.',
            'Hold a brief async standup — Use a recurring automation to prompt team members to update a "Today I completed / Today I will work on / Blockers" field each morning, giving the PM visibility without requiring a synchronous call.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Integrations Extend Smartsheet\'s Value',
          text: 'Smartsheet integrates with tools your organization likely already uses: Microsoft 365 (sync tasks with Teams and Outlook), Google Workspace, Salesforce, Jira, DocuSign, and more. The goal is to reduce context-switching — surface project data where people already work, rather than requiring them to log into yet another tool.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'pm-m6-q1',
      type: 'multiple-choice',
      question: 'In Smartsheet, what is a Report?',
      options: [
        'A printed summary of a single sheet exported to PDF',
        'A live, cross-sheet view that aggregates rows from multiple sheets based on defined criteria',
        'A template for creating new project sheets',
        'An automated email sent to stakeholders on a schedule',
      ],
      correctIndex: 1,
      explanation: 'A Report in Smartsheet is a live view that pulls rows from multiple sheets based on criteria you define (e.g., all tasks due this week, all tasks assigned to one person). It updates automatically as underlying data changes.',
    },
    {
      id: 'pm-m6-q2',
      type: 'multiple-choice',
      question: 'Which Smartsheet automation trigger would you use to send a reminder when a task\'s due date arrives?',
      options: [
        'When a row is added',
        'When a cell is changed',
        'Based on a date in a date field',
        'When a form is submitted',
      ],
      correctIndex: 2,
      explanation: 'Smartsheet\'s date-based trigger fires when a date field reaches a specific point — for example, send a reminder when End Date = Today or End Date = 3 days from now.',
    },
    {
      id: 'pm-m6-q3',
      type: 'true-false',
      question: 'Smartsheet\'s Card View and Gantt View pull from the same underlying sheet data.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'All views in Smartsheet (Grid, Gantt, Card, Calendar) are simply different ways of visualizing the same sheet data. Updating a row in one view updates it everywhere.',
    },
    {
      id: 'pm-m6-q4',
      type: 'multiple-choice',
      question: 'What is the primary advantage of using a Smartsheet form for collecting change requests?',
      options: [
        'Forms automatically approve change requests without PM review',
        'Form submissions feed directly into a structured sheet, keeping data consistent and eliminating manual entry',
        'Forms are required by the Smartsheet licensing agreement for change management',
        'Forms send automatic approval notifications to the project sponsor',
      ],
      correctIndex: 1,
      explanation: 'Forms capture structured data from submitters and feed it directly into your tracking sheet as new rows. This eliminates manual transcription, ensures consistent data entry, and creates an automatic audit trail.',
    },
    {
      id: 'pm-m6-q5',
      type: 'multiple-choice',
      question: 'Which best practice helps distributed teams maintain a single source of truth?',
      options: [
        'Store project information across multiple tools to ensure redundancy',
        'Send all updates via email to ensure they are documented',
        'Centralize all project data in Smartsheet and add comments directly to tasks rather than in separate email threads',
        'Allow each team member to choose their preferred tool for tracking their own tasks',
      ],
      correctIndex: 2,
      explanation: 'A single source of truth means all project information — tasks, status, decisions, and comments — lives in one place. Adding comments directly to Smartsheet rows keeps context attached to the work and accessible to anyone who needs it later.',
    },
  ],
};

export const projectManagementCourse: Course = {
  id: 'project-management',
  track: 'leadership',
  title: 'Project Management Essentials',
  subtitle: 'Delivering Results with Modern PM Tools',
  description:
    'Master the fundamentals of project management and learn to use modern tools including Smartsheet for planning, tracking, and reporting. From scope definition and scheduling to risk management and stakeholder communication, deliver projects on time and on budget.',
  status: 'available',
  estimatedHours: 6,
  color: '#5ca8c4',
  icon: '📋',
  modules: [module1, module2, module3, module4, module5, module6],
};
