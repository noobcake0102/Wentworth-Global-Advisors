export interface LearningPath {
  id: string;
  title: string;
  eyebrow: string;       // who it's for, short
  audience: string;      // longer "for someone who..."
  description: string;
  outcome: string;       // what you can do after
  color: string;
  courseIds: string[];   // ordered sequence
}

export const learningPaths: LearningPath[] = [
  {
    id: 'ci-practitioner',
    title: 'Continuous Improvement Practitioner',
    eyebrow: 'Process Improvement Career Track',
    audience: 'Anyone whose job is to make processes faster, cheaper, and more reliable.',
    description:
      'The flagship Lean Six Sigma journey. Build the foundations of Lean and Six Sigma, master the DMAIC method, then climb the belt ladder from Yellow to Black.',
    outcome: 'Independently scope, lead, and deliver data-driven improvement projects across an organization.',
    color: '#4caf82',
    courseIds: [
      'yellow-belt',
      'lean-manufacturing',
      'six-sigma-principles',
      'dmaic-methodology',
      'green-belt',
      'black-belt',
    ],
  },
  {
    id: 'operations-leader',
    title: 'New Operations Leader',
    eyebrow: 'First-Time Manager',
    audience: 'Someone stepping into managing people, projects, and a budget for the first time.',
    description:
      'Everything a new leader needs in one path: how to lead a team, run a project to completion, read the numbers, manage legal risk, and understand the improvement mindset.',
    outcome: 'Lead a team, run a project, read a P&L, and recognize legal and operational risk with confidence.',
    color: '#9b8ec4',
    courseIds: [
      'team-leadership',
      'project-management',
      'business-accounting-l1',
      'business-law',
      'yellow-belt',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics Professional',
    eyebrow: 'Analytics & Reporting',
    audience: 'Analysts and anyone responsible for turning raw data into decisions.',
    description:
      'Move from raw data to trusted insight. Start with the engineering foundations of reliable data, learn to analyze and visualize it, deliver self-service BI, and understand the enterprise systems data flows through.',
    outcome: 'Build reliable data pipelines and deliver self-service reporting that drives decisions.',
    color: '#6b8ed1',
    courseIds: [
      'data-engineering',
      'data-analysis',
      'business-intelligence',
      'crm-erp-systems',
    ],
  },
  {
    id: 'finance-acumen',
    title: 'Finance & Business Acumen',
    eyebrow: 'For Non-Finance Professionals',
    audience: 'Leaders and professionals who need to speak the language of money.',
    description:
      'Go from accounting fundamentals to enterprise finance. Understand financial statements, how leaders use financial information, ERP and revenue recognition, and the legal context around business decisions.',
    outcome: 'Interpret financial statements, understand enterprise accounting, and hold your own in a conversation with a CFO.',
    color: '#4A90D9',
    courseIds: [
      'business-accounting-l1',
      'business-accounting-l2',
      'business-accounting-l3',
      'business-law',
    ],
  },
  {
    id: 'operations-analyst',
    title: 'Operations Analyst Foundation',
    eyebrow: 'Generalist Starter Path',
    audience: 'A new generalist analyst who needs a broad operational foundation, fast.',
    description:
      'A deliberately blended starter path spanning process, data, and finance — the three lenses every operations analyst needs early. A fast on-ramp before specializing.',
    outcome: 'A broad operational foundation across process improvement, data analysis, and financial literacy.',
    color: '#e8a84c',
    courseIds: [
      'yellow-belt',
      'lean-manufacturing',
      'data-analysis',
      'business-accounting-l1',
    ],
  },
  {
    id: 'defense-executive',
    title: 'Defense Contracting — Executive',
    eyebrow: 'Defense · Executive Role',
    audience: 'Owners and executives deciding whether and how to enter defense work.',
    description:
      'The executive path through defense contracting: assess the fit, structure your business to win, and learn what it takes to run a defense business day to day.',
    outcome: 'Make an informed go/no-go on defense and lead a company that can win and deliver contracts.',
    color: '#5a7d5a',
    courseIds: [
      'defense-exec-awareness',
      'defense-exec-practical',
      'defense-exec-deep',
    ],
  },
  {
    id: 'defense-operations',
    title: 'Defense Contracting — Operations',
    eyebrow: 'Defense · Operations Role',
    audience: 'Program and operations staff executing defense contracts.',
    description:
      'The operations path: understand the defense program lifecycle, execute a contract to standard, and master earned value management when a program is under pressure.',
    outcome: 'Execute defense contracts to standard and manage program performance with earned value.',
    color: '#4a6b7d',
    courseIds: [
      'defense-ops-awareness',
      'defense-ops-practical',
      'defense-ops-deep',
    ],
  },
  {
    id: 'defense-bd',
    title: 'Defense Contracting — Business Development',
    eyebrow: 'Defense · BD Role',
    audience: 'Business development professionals pursuing and capturing defense work.',
    description:
      'The business development path: learn how defense contracts are won, how to pursue and capture opportunities, and how to scale a winning BD operation.',
    outcome: 'Identify, pursue, and win defense contracts — and build a repeatable BD engine.',
    color: '#7d6b4a',
    courseIds: [
      'defense-bd-awareness',
      'defense-bd-practical',
      'defense-bd-deep',
    ],
  },
];

export function getPathById(id: string): LearningPath | undefined {
  return learningPaths.find(p => p.id === id);
}
