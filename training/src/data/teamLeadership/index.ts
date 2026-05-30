import type { Course } from '../../types/course';

const module1 = {
  id: 'tl-m1',
  number: 1,
  title: 'Leadership vs. Management in Improvement Contexts',
  description: 'Distinguish between leadership and management and understand how servant leadership, psychological safety, and transformational approaches drive improvement culture.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Differentiate leadership from management and when each is appropriate',
    'Explain servant leadership principles and their application in improvement work',
    'Compare transactional and transformational leadership styles',
    'Describe the role of psychological safety in enabling continuous improvement',
    'Apply leadership principles specific to Lean and Six Sigma environments',
  ],
  lessons: [
    {
      id: 'tl-m1-l1',
      title: 'Leadership vs. Management: Understanding the Difference',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Leadership and management are often used interchangeably, but they represent fundamentally different activities. Management focuses on systems, processes, and getting predictable results through existing structures. Leadership focuses on people, vision, and inspiring change. Both are necessary — but knowing when to lead versus when to manage is a critical competency.',
        },
        {
          type: 'heading' as const,
          text: 'Core Distinctions',
          level: 3 as const,
        },
        {
          type: 'table' as const,
          headers: ['Dimension', 'Management', 'Leadership'],
          rows: [
            ['Focus', 'Systems and processes', 'People and vision'],
            ['Orientation', 'Short-term results', 'Long-term direction'],
            ['Approach', 'Control and coordination', 'Influence and inspiration'],
            ['Question asked', '"How do we do this right?"', '"Are we doing the right things?"'],
            ['Relationship to change', 'Maintains stability', 'Drives transformation'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Key Insight',
          text: 'Warren Bennis captured this well: "Managers do things right; leaders do the right things." In improvement work, you must do both — manage the project rigorously while leading the people through change.',
        },
        {
          type: 'paragraph' as const,
          text: 'In Lean and Six Sigma contexts, project leaders often hold no formal authority over team members. This makes leadership skills — influence, motivation, clarity of purpose — even more critical than managerial control.',
        },
        {
          type: 'heading' as const,
          text: 'When to Lead, When to Manage',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Lead when the team needs direction, motivation, or a sense of shared purpose',
            'Manage when tasks need coordination, deadlines must be tracked, or resources allocated',
            'Lead during ambiguity, resistance, or cultural change',
            'Manage during execution phases where clarity and accountability matter most',
            'Always lead on the "why"; manage on the "how" and "when"',
          ],
        },
        { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
        { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Lean Transformation at a Regional Hospital System', text: 'A 600-bed regional hospital system launched a Lean transformation initiative with a newly appointed Lean director who held no formal authority over department heads. Early efforts stalled because the director defaulted to management behaviors — issuing directives and tracking compliance — rather than leading through influence. After coaching, the director shifted to clearly articulating the patient-care "why," co-creating improvement goals with department heads, and managing project logistics separately. Within 12 months, voluntary department participation rose from 3 to 14, and the initiative delivered a 22% reduction in ED wait times.' },
        { type: 'paragraph' as const, text: 'This case illustrates that in cross-functional improvement work, positional authority is rarely available and always insufficient on its own. The shift from a management mindset to a leadership mindset — leading on purpose while managing on process — is what unlocked engagement and results.' },
        { type: 'list' as const, items: ['Clarify your leadership vs. management role at the start of every improvement initiative', 'When you lack formal authority, invest heavily in shared purpose and relationship credibility', 'Track management deliverables rigorously, but never let task management substitute for people leadership'] },
      ],
    },
    {
      id: 'tl-m1-l2',
      title: 'Servant Leadership in Improvement Work',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Servant leadership, popularized by Robert Greenleaf, inverts the traditional power structure: instead of the leader being served, the leader serves the team. In improvement work, this means removing barriers, developing people\'s capabilities, and creating the conditions for success rather than directing every action.',
        },
        {
          type: 'heading' as const,
          text: 'Pillars of Servant Leadership',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Listening — Genuinely understand what the team needs, not just what you think they need',
            'Empathy — See challenges from the team member\'s perspective',
            'Healing — Help people recover from setbacks and frustration',
            'Awareness — Understand your own impact on the team\'s climate',
            'Persuasion — Build consensus rather than using positional authority',
            'Conceptual thinking — Keep the bigger purpose in view',
            'Stewardship — Act as a trustee of the team\'s energy and focus',
            'Commitment to growth — Invest in developing each person\'s skills',
            'Building community — Foster belonging and shared ownership',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Servant Leadership in Action',
          text: 'A Lean project leader notices that a team member is struggling with data analysis. Rather than doing it for them or escalating, she spends 30 minutes walking through the approach together, building the person\'s capability for future projects. This is servant leadership: investing time now to grow the person, not just solve today\'s problem.',
        },
        {
          type: 'paragraph' as const,
          text: 'Servant leadership is especially powerful in improvement contexts because sustainable change requires people who are intrinsically motivated — not just following orders. When team members feel supported and developed, they bring discretionary effort to the work.',
        },
        { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
        { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Software Engineering Team at a FinTech Startup', text: 'A FinTech startup struggling with 40% annual engineer turnover hired a new VP of Engineering who adopted a deliberate servant leadership model. She conducted weekly one-on-ones focused exclusively on removing blockers and developing each engineer\'s skills, restructured sprint reviews so engineers presented their own work, and publicly absorbed blame from leadership when sprints failed rather than deflecting to the team. Over 18 months, voluntary turnover dropped to 11%, sprint velocity increased by 34%, and the team self-reported psychological safety scores in the top quartile of the company\'s engagement survey.' },
        { type: 'paragraph' as const, text: 'The VP\'s results demonstrate that servant leadership generates measurable business outcomes — not just improved morale. By investing in people\'s growth and removing obstacles, she created the conditions for the team\'s intrinsic motivation to drive sustained performance gains.' },
        { type: 'list' as const, items: ['Serve first: schedule time specifically to remove obstacles your team faces', 'Build capability intentionally — one coaching moment per week compounds over time', 'Protect your team publicly; develop them privately — this builds the trust that enables honest feedback'] },
      ],
    },
    {
      id: 'tl-m1-l3',
      title: 'Transactional vs. Transformational Leadership',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Two dominant leadership frameworks shape how leaders engage their teams: transactional and transformational. Neither is universally superior — effective leaders move fluidly between both depending on context.',
        },
        {
          type: 'heading' as const,
          text: 'Transactional Leadership',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Transactional leadership operates through exchange: you complete this task, you receive this reward (or avoid this consequence). It works well for routine work, clear deliverables, and short-term performance goals.',
        },
        {
          type: 'list' as const,
          items: [
            'Clear expectations and defined metrics',
            'Rewards tied to specific performance outcomes',
            'Corrective feedback when standards aren\'t met',
            'Effective for compliance and consistency',
            'Less effective for innovation or culture change',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Transformational Leadership',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Transformational leaders inspire followers to exceed their own self-interest for the good of the team or organization. They connect work to meaning, develop people\'s capabilities, and model the behaviors they seek.',
        },
        {
          type: 'list' as const,
          items: [
            'Idealized influence — modeling values and inspiring trust',
            'Inspirational motivation — articulating a compelling vision',
            'Intellectual stimulation — challenging assumptions and encouraging creativity',
            'Individualized consideration — coaching and developing each person',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Practical Balance',
          text: 'Use transactional approaches to establish clear project expectations and accountability. Use transformational approaches to build commitment, develop capability, and sustain motivation over long improvement initiatives.',
        },
      ],
    },
    {
      id: 'tl-m1-l4',
      title: 'Psychological Safety: The Foundation of Improvement Culture',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Amy Edmondson\'s research identified psychological safety — the belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes — as the single biggest predictor of team learning and performance. Without it, improvement stalls.',
        },
        {
          type: 'heading' as const,
          text: 'Why Psychological Safety Matters for CI',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'People will not surface problems if they fear blame',
            'Root cause analysis requires honest disclosure of what went wrong',
            'Kaizen and innovation depend on people offering unconventional ideas',
            'Mistakes become learning opportunities rather than career risks',
            'Teams with high safety are faster to surface and resolve issues',
          ],
        },
        {
          type: 'heading' as const,
          text: 'How Leaders Build Psychological Safety',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Frame work as a learning problem, not a performance judgment',
            'Acknowledge your own uncertainty and limitations openly',
            'Model curiosity: ask questions rather than making pronouncements',
            'Respond to problems with "What can we learn?" not "Who did this?"',
            'Thank people who raise concerns or share bad news early',
            'Follow up visibly when someone\'s idea is implemented',
            'Never punish or dismiss ideas in public settings',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Warning Sign',
          text: 'If your team never surfaces problems, doesn\'t challenge assumptions, or always agrees with your ideas — psychological safety is likely low. High-performing improvement teams are characterized by healthy debate and frank problem identification.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'tl-m1-q1',
      type: 'multiple-choice' as const,
      question: 'Which best describes the primary focus of leadership compared to management?',
      options: [
        'Controlling systems and tracking metrics',
        'Inspiring people and driving change toward a vision',
        'Assigning tasks and monitoring deadlines',
        'Ensuring compliance with standard processes',
      ],
      correctIndex: 1,
      explanation: 'Leadership centers on people, vision, and inspiring change. Management focuses on systems, processes, and achieving predictable results.',
    },
    {
      id: 'tl-m1-q2',
      type: 'multiple-choice' as const,
      question: 'Which of the following is a core characteristic of servant leadership?',
      options: [
        'Directing team members through positional authority',
        'Focusing on short-term performance metrics',
        'Removing barriers and developing team members\' capabilities',
        'Assigning rewards based on task completion',
      ],
      correctIndex: 2,
      explanation: 'Servant leadership focuses on serving the team — removing obstacles, developing capabilities, and creating conditions for success rather than directing every action.',
    },
    {
      id: 'tl-m1-q3',
      type: 'multiple-choice' as const,
      question: 'Transformational leadership is MOST effective for which of the following situations?',
      options: [
        'Enforcing compliance with safety protocols',
        'Tracking project milestones and deliverables',
        'Building commitment to long-term cultural change',
        'Managing routine task assignments',
      ],
      correctIndex: 2,
      explanation: 'Transformational leadership connects work to meaning and inspires people to go beyond self-interest. It is particularly powerful for driving cultural change and sustaining long-term improvement commitment.',
    },
    {
      id: 'tl-m1-q4',
      type: 'true-false' as const,
      question: 'Psychological safety means that team members are protected from all consequences for poor performance.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Psychological safety is the belief that one won\'t be punished for speaking up, raising concerns, or admitting mistakes. It does not mean freedom from accountability for persistent poor performance.',
    },
    {
      id: 'tl-m1-q5',
      type: 'multiple-choice' as const,
      question: 'A Lean project leader holds no formal authority over team members. Which leadership approach is most critical in this situation?',
      options: [
        'Transactional — use rewards and consequences to drive compliance',
        'Authoritative — rely on positional rank to get things done',
        'Influence-based — motivate through shared purpose, trust, and relationship',
        'Directive — assign tasks with clear deadlines and monitor closely',
      ],
      correctIndex: 2,
      explanation: 'Without formal authority, leaders must rely on influence, shared purpose, and trust. This makes relationship-based and transformational approaches essential in Lean/Six Sigma contexts.',
    },
  ],
};

const module2 = {
  id: 'tl-m2',
  number: 2,
  title: 'Facilitation & Meeting Effectiveness',
  description: 'Master the skills of structured facilitation, productive meeting design, and group decision-making tools to drive alignment and action.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Apply core facilitation techniques to guide group discussions effectively',
    'Design meetings with clear purpose, structure, and outcomes',
    'Facilitate structured brainstorming sessions that generate high-quality ideas',
    'Use multi-voting and affinity diagrams to reach group decisions',
    'Manage common meeting dysfunctions and difficult group dynamics',
  ],
  lessons: [
    {
      id: 'tl-m2-l1',
      title: 'The Facilitator\'s Role and Core Techniques',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A facilitator guides a group toward its goal without imposing their own agenda. Unlike a presenter or meeting chair, the facilitator\'s job is to create the conditions for the group to think clearly, collaborate effectively, and reach sound decisions.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Facilitation', definition: 'The process of designing and guiding group processes to help teams achieve their goals more effectively' },
            { term: 'Neutrality', definition: 'The facilitator\'s stance of not advocating for particular content outcomes while caring deeply about the quality of the group process' },
            { term: 'Process vs. Content', definition: 'Process is how the group works together; content is what they discuss. Facilitators own the process; the group owns the content' },
          ],
        },
        {
          type: 'heading' as const,
          text: 'Core Facilitation Techniques',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Active listening — Paraphrase and reflect back what you hear to ensure understanding',
            'Questioning — Use open questions to draw out ideas; use closed questions to confirm decisions',
            'Parking lot — Capture off-topic items visibly so they\'re acknowledged but deferred',
            'Round-robin — Give each person a turn to speak, preventing domination by a few voices',
            'Summarizing — Periodically consolidate what\'s been agreed to keep the group on track',
            'Bridging — Transition between agenda items with a brief recap of what was decided',
            'Temperature checks — Quickly gauge the group\'s energy, agreement, or readiness to move on',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Facilitator Tip',
          text: 'When you are both the facilitator and a content expert, be transparent about shifting roles. Say, "I\'m going to step out of my facilitator role for a moment to share a perspective..." then step back into facilitation. This preserves trust and neutrality.',
        },
      ],
    },
    {
      id: 'tl-m2-l2',
      title: 'Meeting Design: Structure, Purpose, and Outcomes',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Poor meetings are one of the greatest drains on organizational productivity. Research consistently shows that most professionals consider more than half their meetings to be wasted time. The antidote is intentional meeting design.',
        },
        {
          type: 'heading' as const,
          text: 'The Meeting Design Framework',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Define the purpose — Is this meeting for information sharing, problem-solving, or decision-making? Each requires a different design.',
            'Set clear outcomes — What specific decisions, agreements, or outputs will result from this meeting?',
            'Invite the right people — Only those who are essential to the outcome. Observers can read notes.',
            'Design the agenda backward — Start with the desired outcome and work backward to determine what conversations are needed.',
            'Assign time blocks — Be realistic. Complex decisions need time for discussion.',
            'Share the agenda in advance — Give people time to prepare and flag concerns.',
            'Assign roles — Facilitator, timekeeper, note-taker, and decision-maker should be explicit.',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Meeting Outcome Statement',
          text: 'Weak: "Discuss the new process." Strong: "By the end of this meeting, we will have selected one of three process redesign options and assigned owners for the next three action steps." The strong version creates accountability and focus.',
        },
        {
          type: 'heading' as const,
          text: 'Closing Meetings Effectively',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Summarize decisions made and agreements reached',
            'Review action items with clear owners and due dates',
            'Identify what needs to be communicated to stakeholders not in the room',
            'Conduct a brief retrospective: What worked? What would we do differently?',
            'Distribute notes within 24 hours',
          ],
        },
      ],
    },
    {
      id: 'tl-m2-l3',
      title: 'Structured Brainstorming Techniques',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Traditional brainstorming — shouting out ideas in a group — is often dominated by the loudest voices and produces fewer, lower-quality ideas than structured alternatives. Research-backed techniques generate better results.',
        },
        {
          type: 'heading' as const,
          text: 'Brainwriting (6-3-5 Method)',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: '6 people each write 3 ideas in 5 minutes on a sheet, then pass to the next person, who builds on or adds to those ideas. After 6 rounds, the group has generated up to 108 ideas. Silent generation removes social pressure and dominant voices.',
        },
        {
          type: 'heading' as const,
          text: 'Round-Robin Brainstorming',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Each person shares one idea in turn. Anyone who has no new idea says "pass." Continue until all passes are reached. This ensures equal participation and prevents groupthink.',
        },
        {
          type: 'heading' as const,
          text: 'Reverse Brainstorming',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Instead of asking "How do we solve this problem?" ask "How could we make this problem worse?" Then reverse those ideas into solutions. This technique breaks mental blocks and often generates creative approaches missed by direct brainstorming.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Brainstorming Ground Rules',
          text: 'Defer judgment (no criticism during idea generation), go for quantity, encourage wild ideas, build on others\' ideas, and keep one conversation at a time. Post these visibly during the session.',
        },
      ],
    },
    {
      id: 'tl-m2-l4',
      title: 'Decision-Making Tools: Multi-Voting and Affinity Diagrams',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'After generating ideas, teams need structured tools to evaluate, prioritize, and organize them. Multi-voting and affinity diagrams are two of the most widely used facilitation tools for this purpose.',
        },
        {
          type: 'heading' as const,
          text: 'Multi-Voting',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Multi-voting reduces a long list of options to a manageable shortlist through structured group voting. Each participant receives a set number of votes (typically one-third of the total options) and distributes them across their preferred items. Items with the most votes rise to the top.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'List all options (from brainstorming or problem identification)',
            'Give each participant N/3 votes (where N = number of options)',
            'Participants can spread votes across multiple items or stack on one',
            'Tally votes and identify top vote-getters',
            'Discuss results — don\'t treat voting as the final decision, but as input',
            'Repeat if needed to narrow further',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Affinity Diagrams',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Affinity diagrams organize large amounts of qualitative data into natural groupings based on their affinity (relationship) to each other. They are particularly useful after brainstorming sessions or when analyzing voice of the customer data.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Write each idea or data point on a separate sticky note',
            'In silence, participants begin grouping notes that seem related',
            'Continue until all notes are grouped (some items may stand alone)',
            'Name each group with a header card that captures the theme',
            'Discuss the groupings as a team — look for surprises or insights',
            'Use the resulting categories to structure analysis or planning',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Silence is Powerful',
          text: 'Affinity diagramming works best when the initial grouping is done silently. This prevents verbal dominance and allows the natural structure of the data to emerge without social influence.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'tl-m2-q1',
      type: 'multiple-choice' as const,
      question: 'What is the primary distinction between a facilitator\'s role and a presenter\'s role?',
      options: [
        'Facilitators are responsible for making final decisions',
        'Facilitators guide the group process without imposing their own content agenda',
        'Facilitators present expert information and answer questions',
        'Facilitators set the meeting agenda and control time',
      ],
      correctIndex: 1,
      explanation: 'Facilitators own the process — how the group works together — while the group owns the content. A presenter delivers information; a facilitator creates conditions for the group to think and decide effectively.',
    },
    {
      id: 'tl-m2-q2',
      type: 'multiple-choice' as const,
      question: 'Which meeting design practice most directly ensures that a meeting produces actionable results?',
      options: [
        'Sending the agenda 24 hours in advance',
        'Keeping meetings under 30 minutes',
        'Defining specific outcome statements before the meeting',
        'Having a designated timekeeper',
      ],
      correctIndex: 2,
      explanation: 'Clear outcome statements define what decisions, agreements, or outputs the meeting will produce. This creates focus and accountability that generic agendas cannot.',
    },
    {
      id: 'tl-m2-q3',
      type: 'multiple-choice' as const,
      question: 'In the 6-3-5 brainwriting method, what does each number represent?',
      options: [
        '6 ideas, 3 rounds, 5 minutes per round',
        '6 participants, 3 ideas each, 5 minutes per round',
        '6 minutes, 3 participants, 5 ideas each',
        '6 rounds, 3 participants, 5 minutes total',
      ],
      correctIndex: 1,
      explanation: '6-3-5 stands for 6 people, each writing 3 ideas in 5 minutes, then passing their sheet. The process repeats for 6 rounds, potentially generating up to 108 ideas.',
    },
    {
      id: 'tl-m2-q4',
      type: 'true-false' as const,
      question: 'Affinity diagramming works best when participants openly discuss and debate which group each idea belongs to as they sort.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Affinity diagramming is most effective when the initial grouping is done in silence. Silence prevents verbal dominance and allows natural groupings to emerge without social influence.',
    },
    {
      id: 'tl-m2-q5',
      type: 'multiple-choice' as const,
      question: 'In multi-voting, how many votes does each participant typically receive?',
      options: [
        'One vote per person regardless of options',
        'Votes equal to the total number of options',
        'Approximately one-third of the total number of options',
        'Votes determined by the facilitator based on group size',
      ],
      correctIndex: 2,
      explanation: 'In multi-voting, each participant receives approximately N/3 votes, where N is the number of options. This allows meaningful prioritization without giving participants so many votes that everything scores equally.',
    },
  ],
};

const module3 = {
  id: 'tl-m3',
  number: 3,
  title: 'Managing Change & Resistance',
  description: 'Apply structured change management models including Kotter\'s 8 steps and ADKAR, engage stakeholders effectively, and address resistance with skill and empathy.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Apply Kotter\'s 8-step change model to improvement initiatives',
    'Use the ADKAR model to diagnose and address individual change barriers',
    'Develop a stakeholder engagement strategy for a change initiative',
    'Identify common sources of resistance and appropriate responses',
    'Create a communication plan that supports change adoption',
  ],
  lessons: [
    {
      id: 'tl-m3-l1',
      title: 'Kotter\'s 8-Step Change Model',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'John Kotter\'s 8-step model, developed from studying over 100 change initiatives, remains the most widely used framework for leading organizational change. Most change failures, Kotter found, can be traced to skipping or rushing one of these steps.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Create urgency — Help others see the need for change through compelling data, stories, and honest dialogue about consequences of inaction',
            'Build a guiding coalition — Assemble a diverse group with credibility, influence, and commitment to lead the change',
            'Form a strategic vision — Develop a clear, achievable, and emotionally resonant picture of the future state',
            'Communicate the vision — Use every available channel; leaders must model the change themselves',
            'Remove obstacles — Identify and eliminate barriers: structures, processes, behaviors, or people blocking progress',
            'Generate short-term wins — Plan for and celebrate early, visible improvements to build credibility and momentum',
            'Sustain acceleration — Don\'t declare victory too early; use early wins to push for deeper change',
            'Anchor in culture — Make the new approach "the way we do things" by linking it to success stories and reinforcing through hiring and promotion',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Most Common Failure Points',
          text: 'Kotter found that the most common mistakes are: declaring victory too soon (step 7), underestimating the power of vision (step 3), and failing to anchor changes in culture (step 8). Improvement initiatives that succeed technically but don\'t change culture are not sustained.',
        },
      ],
    },
    {
      id: 'tl-m3-l2',
      title: 'The ADKAR Model: Individual Change Management',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'While Kotter focuses on organizational-level change, the ADKAR model (developed by Prosci) addresses change at the individual level. Organizations change only when enough individuals change, so understanding where a person is in their change journey is essential.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Awareness', definition: 'The individual understands why the change is needed and what will happen if nothing changes' },
            { term: 'Desire', definition: 'The individual is personally motivated to support and participate in the change' },
            { term: 'Knowledge', definition: 'The individual knows how to change — what behaviors, skills, and processes are required' },
            { term: 'Ability', definition: 'The individual can actually demonstrate the new behavior in practice, not just in theory' },
            { term: 'Reinforcement', definition: 'Factors in place (rewards, recognition, consequences) that sustain the change over time' },
          ],
        },
        { type: 'diagram' as const, diagramId: 'adkar-model', title: 'ADKAR Change Management Model' },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Using ADKAR Diagnostically',
          text: 'ADKAR is sequential — a person cannot progress to Desire without Awareness, or to Ability without Knowledge. When someone is resisting change, identify where they are stuck in the model and address that specific barrier rather than applying a one-size-fits-all response.',
        },
        {
          type: 'heading' as const,
          text: 'ADKAR in Practice',
          level: 3 as const,
        },
        {
          type: 'table' as const,
          headers: ['ADKAR Stage', 'Signs of a Gap', 'Leader Response'],
          rows: [
            ['Awareness', 'Doesn\'t understand why change is needed', 'Share data, stories, burning platform'],
            ['Desire', 'Understands but refuses to support', 'Understand personal motivators; address fears'],
            ['Knowledge', 'Willing but doesn\'t know how', 'Training, coaching, clear procedures'],
            ['Ability', 'Knows how but can\'t perform consistently', 'Practice, feedback, reduced barriers'],
            ['Reinforcement', 'Reverts to old behavior over time', 'Recognition, accountability, metrics'],
          ],
        },
      ],
    },
    {
      id: 'tl-m3-l3',
      title: 'Stakeholder Engagement and Resistance Management',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Every change initiative affects different people in different ways. Stakeholder engagement is the discipline of identifying who is affected, understanding their interests, and actively working to build support and manage opposition.',
        },
        {
          type: 'heading' as const,
          text: 'Stakeholder Analysis',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Identify all stakeholders — everyone who affects or is affected by the change',
            'Assess current position — supporter, neutral, or resistant',
            'Assess desired position — where they need to be for the change to succeed',
            'Identify influence level — high or low impact on outcomes',
            'Develop engagement strategies for each quadrant of interest/influence',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Understanding Resistance',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Resistance is not irrational. It is a signal that someone has unmet needs, legitimate concerns, or unanswered questions. Effective change leaders treat resistance as information, not opposition.',
        },
        {
          type: 'list' as const,
          items: [
            'Fear of job loss or role change',
            'Lack of confidence in ability to perform in the new way',
            'Loss of status, influence, or familiar routines',
            'Disagreement with the approach or solution chosen',
            'History of failed change initiatives creating cynicism',
            'Lack of trust in leadership\'s intentions',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Engaging Resisters',
          text: 'Invite vocal resisters into the process. Give them a role in shaping the solution. People who help design a change are far less likely to resist it. Resistance often contains the most valuable information about implementation risks.',
        },
      ],
    },
    {
      id: 'tl-m3-l4',
      title: 'Change Communication Planning',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The single most cited failure factor in change initiatives is poor communication. Not too little communication — though that is common — but communication that fails to reach people where they are or address what they actually care about.',
        },
        {
          type: 'heading' as const,
          text: 'Principles of Effective Change Communication',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Start with "why" — people commit to purpose before they follow process',
            'Communicate seven times in seven different ways — messages need reinforcement across channels',
            'Use the right messenger — direct managers are more trusted than senior executives for personal impact messages',
            'Be honest about what you don\'t know — false certainty destroys trust when reality diverges from the message',
            'Create two-way dialogue — town halls, Q&As, and feedback channels matter as much as broadcasts',
            'Tailor messages to audiences — what matters to frontline workers differs from what matters to managers',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Building a Communication Plan',
          level: 3 as const,
        },
        {
          type: 'table' as const,
          headers: ['Element', 'Questions to Answer'],
          rows: [
            ['Audiences', 'Who needs to know? What do they care about?'],
            ['Messages', 'What is the core message for each audience?'],
            ['Channels', 'Email, team meeting, video, posters, one-on-one?'],
            ['Timing', 'When do they need this information?'],
            ['Sender', 'Who is the most credible messenger for this audience?'],
            ['Feedback loop', 'How will you know if the message landed?'],
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'tl-m3-q1',
      type: 'multiple-choice' as const,
      question: 'According to Kotter, which step is most commonly skipped and leads to premature celebration of success?',
      options: [
        'Building a guiding coalition',
        'Creating urgency',
        'Sustaining acceleration and not declaring victory too soon',
        'Anchoring change in culture',
      ],
      correctIndex: 2,
      explanation: 'Kotter identified declaring victory too early as one of the most common and damaging mistakes. Early wins should build momentum for deeper change, not signal that the work is done.',
    },
    {
      id: 'tl-m3-q2',
      type: 'multiple-choice' as const,
      question: 'In the ADKAR model, a team member knows exactly why the change is needed and supports it, but consistently reverts to old behaviors after weeks. Which stage is the barrier?',
      options: [
        'Awareness',
        'Desire',
        'Knowledge',
        'Reinforcement',
      ],
      correctIndex: 3,
      explanation: 'Reverting to old behavior over time indicates a Reinforcement gap. The person has Awareness, Desire, and likely Knowledge and Ability, but the environment lacks sufficient rewards, recognition, or accountability to sustain the new behavior.',
    },
    {
      id: 'tl-m3-q3',
      type: 'true-false' as const,
      question: 'Resistance to change is generally irrational and should be managed by clearly explaining the change until resisters comply.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Resistance is a signal of unmet needs, legitimate concerns, or unanswered questions. Effective leaders treat it as information and engage resisters in the process rather than simply explaining the change more forcefully.',
    },
    {
      id: 'tl-m3-q4',
      type: 'multiple-choice' as const,
      question: 'Which communication principle most directly addresses why different audiences need different messages?',
      options: [
        'Start with why',
        'Communicate seven times in seven ways',
        'Use the right messenger',
        'Tailor messages to audiences',
      ],
      correctIndex: 3,
      explanation: 'Tailoring messages to audiences recognizes that what matters to frontline workers differs from what matters to managers or executives. Generic messages fail to connect with people\'s actual concerns and context.',
    },
    {
      id: 'tl-m3-q5',
      type: 'multiple-choice' as const,
      question: 'A stakeholder was initially resistant but after being invited to join the design team became one of the initiative\'s strongest advocates. This illustrates which principle?',
      options: [
        'ADKAR Awareness building',
        'Kotter\'s guiding coalition formation',
        'People who help design a change are less likely to resist it',
        'Communication reduces resistance through information',
      ],
      correctIndex: 2,
      explanation: 'Involving resisters in designing the solution is one of the most effective engagement strategies. Participation creates ownership, surfaces legitimate concerns early, and transforms opponents into advocates.',
    },
  ],
};

const module4 = {
  id: 'tl-m4',
  number: 4,
  title: 'Team Dynamics & High-Performance Teams',
  description: 'Understand how teams develop over time, define roles and accountability structures, and use team charters and RACI to build cohesion and clarity.',
  estimatedMinutes: 45,
  learningObjectives: [
    'Apply Tuckman\'s model to diagnose and support team development stages',
    'Identify common team roles and how they contribute to effectiveness',
    'Build a RACI matrix to clarify decision-making and accountability',
    'Develop a team charter that establishes shared agreements and norms',
    'Recognize and address common causes of team dysfunction',
  ],
  lessons: [
    {
      id: 'tl-m4-l1',
      title: 'Tuckman\'s Model: Forming, Storming, Norming, Performing',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Bruce Tuckman\'s model of group development describes the predictable stages teams move through on their way to high performance. Understanding these stages helps leaders normalize conflict, provide appropriate support, and accelerate the team\'s development.',
        },
        {
          type: 'heading' as const,
          text: 'The Four Stages',
          level: 3 as const,
        },
        {
          type: 'table' as const,
          headers: ['Stage', 'Team Characteristics', 'Leader\'s Focus'],
          rows: [
            ['Forming', 'Polite, uncertain, dependent on leader for direction', 'Provide clarity on purpose, roles, and norms'],
            ['Storming', 'Conflict over roles, approaches, and authority; frustration', 'Facilitate conflict resolution; keep focus on shared goal'],
            ['Norming', 'Agreed ways of working; growing trust and collaboration', 'Step back; build ownership and shared accountability'],
            ['Performing', 'High trust, self-managing, focused on results', 'Coach and challenge; remove organizational barriers'],
          ],
        },
        { type: 'diagram' as const, diagramId: 'tuckman-model', title: 'Tuckman Team Development Model' },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Storming is Normal',
          text: 'Many leaders try to prevent or suppress the Storming stage. This is a mistake. Productive conflict about how to work together is necessary for teams to develop authentic norms and trust. The goal is to navigate Storming well, not avoid it.',
        },
        {
          type: 'paragraph' as const,
          text: 'Teams can regress to earlier stages when membership changes, the task changes significantly, or a major disruption occurs. A Performing team that loses key members or takes on a new challenge may cycle back through Forming and Storming briefly.',
        },
      ],
    },
    {
      id: 'tl-m4-l2',
      title: 'Team Roles and Accountability',
      estimatedMinutes: 11,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Effective teams have clarity about who does what and who decides what. Without this clarity, important work falls through the cracks, duplication wastes effort, and conflict arises over territory.',
        },
        {
          type: 'heading' as const,
          text: 'Functional Roles in Improvement Teams',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Project sponsor — Provides resources, removes organizational barriers, and champions the initiative at the leadership level',
            'Project leader/Black Belt — Leads the improvement effort, owns the methodology, and drives results',
            'Team members — Contribute process knowledge, execute analysis tasks, and implement solutions',
            'Subject matter experts — Provide deep expertise in specific areas; may be part-time contributors',
            'Process owner — Accountable for the process being improved; must ultimately accept and sustain the solution',
            'Facilitator — May be external; focuses on group process rather than content',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Critical Role of the Process Owner',
          text: 'A common failure in improvement projects is delivering a solution that the process owner doesn\'t own. Involve the process owner early and continuously. Without their commitment, solutions are rarely sustained after the project closes.',
        },
      ],
    },
    {
      id: 'tl-m4-l3',
      title: 'RACI: Clarifying Roles and Decision Rights',
      estimatedMinutes: 11,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A RACI matrix maps tasks or decisions to roles, clarifying who is Responsible, Accountable, Consulted, and Informed for each. It is one of the simplest and most effective tools for eliminating the confusion that causes missed handoffs and duplicated work.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Responsible (R)', definition: 'Does the work. Multiple people can be Responsible for a task.' },
            { term: 'Accountable (A)', definition: 'Owns the outcome and has final decision authority. Only one person should be Accountable per task.' },
            { term: 'Consulted (C)', definition: 'Provides input before work is done or decisions are made. Communication is two-way.' },
            { term: 'Informed (I)', definition: 'Kept up to date on progress and decisions. Communication is one-way.' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'RACI Clarity Rule',
          text: 'Every task must have exactly one Accountable owner. If multiple people are Accountable, no one truly is. When building a RACI, flag any row with no A, multiple A\'s, or no R as a structural problem to resolve.',
        },
        {
          type: 'heading' as const,
          text: 'Common RACI Mistakes',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Too many R\'s — diffuses responsibility',
            'Multiple A\'s — creates authority ambiguity',
            'Everyone is C or I — signals unclear ownership',
            'RACI exists but is never referenced — becomes a document artifact rather than a working tool',
          ],
        },
      ],
    },
    {
      id: 'tl-m4-l4',
      title: 'Team Charters: Building Shared Agreements',
      estimatedMinutes: 10,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A team charter is a document the team creates together that defines how they will work together. Unlike a project charter (which defines what will be done), a team charter defines behavioral and operational norms.',
        },
        {
          type: 'heading' as const,
          text: 'Elements of an Effective Team Charter',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Purpose and goals — Why does this team exist and what does success look like?',
            'Roles and responsibilities — Who does what (can reference the RACI)',
            'Meeting norms — Frequency, format, attendance expectations, use of technology',
            'Communication norms — Preferred channels, response time expectations, how decisions will be shared',
            'Decision-making — What decisions can the team make independently? What requires escalation?',
            'Conflict resolution — How will the team handle disagreements?',
            'Working agreements — Punctuality, preparation expectations, how feedback is given',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Team Charter in Practice',
          text: 'A Six Sigma team uses their charter to agree that decisions within the project scope are made by majority vote with the project leader having a tiebreaker, all members come to meetings having reviewed shared documents, and conflicts are first discussed directly between the parties before bringing to the project leader. These agreements prevent many common dysfunctions before they emerge.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'tl-m4-q1',
      type: 'multiple-choice' as const,
      question: 'A newly formed improvement team is experiencing significant conflict over roles and how to approach the problem. According to Tuckman\'s model, this team is in which stage?',
      options: [
        'Forming',
        'Storming',
        'Norming',
        'Performing',
      ],
      correctIndex: 1,
      explanation: 'Conflict over roles, approaches, and authority is the hallmark of the Storming stage. This is a normal and necessary phase of team development that, when navigated well, leads to the Norming stage.',
    },
    {
      id: 'tl-m4-q2',
      type: 'true-false' as const,
      question: 'In a RACI matrix, it is acceptable and sometimes preferable to assign multiple people as Accountable for a complex task to ensure adequate oversight.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Each task should have exactly one Accountable owner. Multiple Accountable owners creates authority ambiguity — when everyone is accountable, no one truly is. This is one of the most common RACI mistakes.',
    },
    {
      id: 'tl-m4-q3',
      type: 'multiple-choice' as const,
      question: 'Which stakeholder is most critical to involve early in an improvement project to ensure solutions are sustained after the project closes?',
      options: [
        'The executive sponsor',
        'The project team members',
        'The process owner',
        'The Black Belt or project leader',
      ],
      correctIndex: 2,
      explanation: 'The process owner is accountable for the process being improved and must ultimately accept and sustain the solution. Without their early involvement and commitment, solutions are rarely maintained after the project closes.',
    },
    {
      id: 'tl-m4-q4',
      type: 'multiple-choice' as const,
      question: 'What distinguishes a team charter from a project charter?',
      options: [
        'A team charter defines the project scope and timeline; a project charter defines team roles',
        'A team charter defines how the team will work together; a project charter defines what will be done',
        'Team charters are used only in Agile projects; project charters are used in Lean and Six Sigma',
        'A team charter is created by the sponsor; a project charter is created by the team',
      ],
      correctIndex: 1,
      explanation: 'A team charter establishes behavioral and operational norms — how the team will work together. A project charter defines the what: scope, objectives, timeline, and deliverables.',
    },
    {
      id: 'tl-m4-q5',
      type: 'multiple-choice' as const,
      question: 'A Performing team onboards three new members and immediately begins experiencing confusion about roles and direction. This best illustrates:',
      options: [
        'A failure of the team charter to define norms',
        'That the team was never truly at the Performing stage',
        'Teams can regress to earlier Tuckman stages when significant changes occur',
        'The new members lack the skills needed for the team',
      ],
      correctIndex: 2,
      explanation: 'Teams can cycle back through earlier Tuckman stages when membership changes, the task changes, or a significant disruption occurs. This is normal and the team typically moves through earlier stages more quickly the second time.',
    },
  ],
};

const module5 = {
  id: 'tl-m5',
  number: 5,
  title: 'Coaching, Feedback & Performance Conversations',
  description: 'Develop skills in coaching versus directing, use the GROW model, deliver effective feedback, and navigate difficult performance conversations with confidence.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Distinguish between coaching and directing and choose the right approach for the situation',
    'Apply the GROW model to structure coaching conversations',
    'Deliver specific, behavioral, and balanced feedback effectively',
    'Navigate difficult performance conversations with clarity and empathy',
    'Use recognition strategically to reinforce desired behaviors',
  ],
  lessons: [
    {
      id: 'tl-m5-l1',
      title: 'Coaching vs. Directing: Choosing the Right Approach',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Coaching and directing are both valid leadership tools — but they serve different purposes. Choosing the wrong approach for a situation frustrates both the leader and the team member.',
        },
        {
          type: 'table' as const,
          headers: ['Dimension', 'Directing', 'Coaching'],
          rows: [
            ['Leader\'s role', 'Expert providing answers', 'Partner helping the person discover answers'],
            ['Communication', 'Leader talks; person listens', 'Leader asks; person talks'],
            ['Goal', 'Task completion', 'Capability development'],
            ['Best for', 'Low skill, urgent situations, safety', 'High potential, complex problems, growth'],
            ['Risk', 'Creates dependency', 'Takes longer; not suited to crises'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The Coaching Mindset',
          text: 'Coaching assumes the person has the capacity to find the answer themselves. The coach\'s job is to ask better questions, not provide better answers. This shift in mindset is harder than learning the techniques — it requires resisting the urge to fix and advise.',
        },
        {
          type: 'paragraph' as const,
          text: 'A situational leadership approach suggests that leaders adapt their style to the person\'s readiness level. A new team member working on an unfamiliar task needs more directing. An experienced person who is motivated but stuck on a complex problem benefits from coaching.',
        },
      ],
    },
    {
      id: 'tl-m5-l2',
      title: 'The GROW Model for Coaching Conversations',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The GROW model provides a simple, powerful framework for structuring coaching conversations. Developed by Sir John Whitmore, GROW stands for Goal, Reality, Options, and Will (or Way Forward).',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Goal', definition: 'What does the person want to achieve? Establish a specific, meaningful goal for the conversation and the broader situation.' },
            { term: 'Reality', definition: 'What is currently happening? Explore the current situation honestly, including obstacles and contributing factors.' },
            { term: 'Options', definition: 'What could be done? Generate multiple possibilities without judgment before evaluating them.' },
            { term: 'Will (Way Forward)', definition: 'What will the person actually do? Commit to specific actions, timelines, and accountability.' },
          ],
        },
        {
          type: 'heading' as const,
          text: 'Powerful Coaching Questions by Stage',
          level: 3 as const,
        },
        {
          type: 'table' as const,
          headers: ['Stage', 'Example Questions'],
          rows: [
            ['Goal', '"What do you want to achieve?" / "What would a great outcome look like?" / "How will you know you\'ve succeeded?"'],
            ['Reality', '"What\'s happening right now?" / "What have you tried?" / "What\'s getting in the way?" / "What do others say?"'],
            ['Options', '"What could you do?" / "What else?" / "What would you do if you had no constraints?" / "What has worked before?"'],
            ['Will', '"What will you do?" / "When will you do it?" / "On a scale of 1-10, how committed are you?" / "What support do you need?"'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'The Power of "What Else?"',
          text: '"What else?" is one of the most valuable questions in a coaching conversation. It pushes beyond the first obvious answer to deeper thinking. Ask "What else?" at least three times in the Options stage before evaluating options.',
        },
      ],
    },
    {
      id: 'tl-m5-l3',
      title: 'Delivering Effective Feedback',
      estimatedMinutes: 13,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Feedback is one of the most powerful tools for developing people — and one of the most commonly misused. Vague, delayed, or emotionally loaded feedback fails to change behavior. Specific, timely, behavioral feedback does.',
        },
        {
          type: 'heading' as const,
          text: 'Characteristics of Effective Feedback',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Specific — Describes the exact behavior, not a general personality judgment',
            'Behavioral — References observable actions, not intentions or character',
            'Timely — Given close to the event while memory is fresh',
            'Private for criticism — Developmental feedback delivered one-on-one',
            'Balanced — Addresses both strengths and areas for development',
            'Actionable — The person knows what to do differently next time',
            'Dialogic — Invites the person\'s perspective, not just delivered as a verdict',
          ],
        },
        {
          type: 'heading' as const,
          text: 'The SBI Feedback Model',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Situation-Behavior-Impact (SBI) is a clean, non-judgmental feedback structure: describe the situation, describe the specific behavior, and describe the impact of that behavior.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'SBI in Practice',
          text: 'Weak: "You\'re always negative in meetings." SBI: "In yesterday\'s project review [Situation], when you said \'this will never work\' before we finished presenting the data [Behavior], it shut down the discussion and two people stopped contributing ideas [Impact]. Can we talk about how to raise concerns more constructively?"',
        },
      ],
    },
    {
      id: 'tl-m5-l4',
      title: 'Difficult Conversations and Recognition',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Difficult conversations — about performance gaps, behavior issues, or interpersonal conflict — are ones most leaders avoid or handle poorly. But avoiding them compounds the problem, damages trust with those affected, and signals that poor performance is acceptable.',
        },
        {
          type: 'heading' as const,
          text: 'Framework for Difficult Conversations',
          level: 3 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Prepare — Clarify the specific issue, the impact, and the outcome you want from the conversation',
            'Open with curiosity — State what you\'ve observed and ask for their perspective before presenting your conclusions',
            'Stay on behavior and impact — Avoid labels, judgments, or generalizations',
            'Listen genuinely — You may learn information that changes your view',
            'Be clear about expectations going forward — Don\'t leave ambiguity about what needs to change',
            'Agree on next steps and follow-up — When will you check in? What does success look like?',
            'Document significant conversations — For your records and theirs',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Strategic Recognition',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Recognition is not just about making people feel good — it is a behavioral reinforcement tool. Specific, timely recognition connected to the behaviors and results you want to see more of is far more powerful than generic praise.',
        },
        {
          type: 'list' as const,
          items: [
            'Recognize specific behaviors, not just outcomes — "The way you handled that customer complaint..." not just "Great job this month"',
            'Public recognition for team-visible behaviors reinforces cultural norms',
            'Know individual preferences — some people prefer private acknowledgment',
            'Recognize effort on failed attempts — this builds psychological safety and risk-taking',
            'Make recognition timely — the closer to the behavior, the stronger the reinforcement',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'tl-m5-q1',
      type: 'multiple-choice' as const,
      question: 'A new team member is unfamiliar with a critical safety procedure that must be followed immediately. Which approach is most appropriate?',
      options: [
        'Coaching — ask questions to help them figure out the right approach',
        'Directing — clearly explain the procedure and ensure they can follow it',
        'Delegating — give them the documentation and let them work through it',
        'Mentoring — share your own experience with similar situations',
      ],
      correctIndex: 1,
      explanation: 'For low-skill, urgent, or safety-critical situations, directing is the appropriate approach. Coaching takes longer and is better suited for capability development in non-urgent contexts.',
    },
    {
      id: 'tl-m5-q2',
      type: 'multiple-choice' as const,
      question: 'In the GROW model, what is the primary purpose of the "Options" stage?',
      options: [
        'Evaluate the single best solution to the problem',
        'Generate multiple possibilities before narrowing down',
        'Identify the gap between current reality and the goal',
        'Commit to specific actions and timelines',
      ],
      correctIndex: 1,
      explanation: 'The Options stage is about generating possibilities — exploring a wide range of approaches before evaluating or selecting any of them. Premature evaluation limits creative thinking.',
    },
    {
      id: 'tl-m5-q3',
      type: 'multiple-choice' as const,
      question: 'Which of the following is an example of effective SBI feedback?',
      options: [
        '"You always dominate meetings and don\'t let others speak."',
        '"Your communication style needs significant improvement."',
        '"In today\'s planning meeting, when you interrupted three colleagues, it prevented them from sharing their perspectives and we missed key input."',
        '"You did a great job last quarter — keep up the good work!"',
      ],
      correctIndex: 2,
      explanation: 'Effective SBI feedback describes the Situation (today\'s planning meeting), the specific Behavior (interrupting three colleagues), and the Impact (prevented others from sharing, missed key input). The other options use generalizations, labels, or are too vague.',
    },
    {
      id: 'tl-m5-q4',
      type: 'true-false' as const,
      question: 'Recognition is most effective when it is specific, timely, and tied to the exact behaviors and results you want reinforced.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'Specific, timely recognition connected to desired behaviors is far more powerful than generic praise. It reinforces exactly what you want to see more of and signals to the broader team what behaviors are valued.',
    },
    {
      id: 'tl-m5-q5',
      type: 'multiple-choice' as const,
      question: 'When opening a difficult performance conversation, which approach best sets the right tone?',
      options: [
        'Present your conclusions about the problem directly to show clarity and confidence',
        'State what you\'ve observed and ask for the person\'s perspective before drawing conclusions',
        'Begin with positive feedback to soften the impact of the criticism to follow',
        'Focus on the impact of their behavior rather than exploring the context',
      ],
      correctIndex: 1,
      explanation: 'Opening with observations and genuine curiosity — not pre-formed conclusions — creates a dialogue rather than a confrontation. You may learn context that changes your view, and the person is more likely to engage constructively when they feel heard.',
    },
  ],
};

const module6 = {
  id: 'tl-m6',
  number: 6,
  title: 'Sustaining a Culture of Continuous Improvement',
  description: 'Build the management systems, habits, and visual controls that make continuous improvement a daily practice rather than a periodic initiative.',
  estimatedMinutes: 45,
  learningObjectives: [
    'Design a daily management system that connects team activity to organizational goals',
    'Develop leader standard work to establish consistent leadership practices',
    'Conduct effective gemba walks that engage rather than intimidate teams',
    'Use visual management boards to make performance visible and actionable',
    'Build habits and routines that make continuous improvement self-sustaining',
  ],
  lessons: [
    {
      id: 'tl-m6-l1',
      title: 'Daily Management Systems',
      estimatedMinutes: 12,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A daily management system (DMS) is a structured set of routines, visual displays, and review meetings that help teams monitor performance, identify problems, and take corrective action in real time. Rather than waiting for monthly reviews, teams address issues when they are small.',
        },
        {
          type: 'heading' as const,
          text: 'Components of an Effective Daily Management System',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Visual performance boards — Display key metrics, targets, and status at a glance',
            'Daily stand-up meetings — Brief (15 minutes or less), structured, standing meetings to review yesterday\'s performance and today\'s priorities',
            'Escalation pathways — Clear rules for when and how problems are escalated up the management hierarchy',
            'Problem-solving routines — Standard process for identifying, containing, and resolving issues',
            'Accountability rhythms — Regular cadence for tracking action items and commitments',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Tiered Daily Management',
          text: 'Effective DMS operates in tiers: Team level (daily, 15 min), Department level (daily or weekly, 30 min), and Site/Leadership level (weekly, focused on cross-functional issues). Each tier reviews what the tier below could not resolve.',
        },
        {
          type: 'paragraph' as const,
          text: 'The key discipline in daily management is keeping the meetings short, focused on exceptions (not routine updates), and action-oriented. When every meeting covers everything, attention dilutes and urgency fades.',
        },
      ],
    },
    {
      id: 'tl-m6-l2',
      title: 'Leader Standard Work',
      estimatedMinutes: 11,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Leader standard work (LSW) defines the routines that leaders commit to performing consistently. Just as standard work on the shop floor defines how a process is performed, LSW defines how leadership is practiced — making it visible, auditable, and improvable.',
        },
        {
          type: 'heading' as const,
          text: 'Why Leader Standard Work Matters',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Prevents leadership from being consumed by reactive fire-fighting',
            'Makes the leader\'s contributions visible to the team',
            'Creates a baseline for continuous improvement of leadership practices',
            'Ensures consistent execution of critical management routines',
            'Demonstrates that leaders hold themselves to standards, not just their teams',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Elements of Leader Standard Work',
          level: 3 as const,
        },
        {
          type: 'table' as const,
          headers: ['Frequency', 'Example Routines'],
          rows: [
            ['Daily', 'Gemba walk, stand-up attendance, safety check, board review'],
            ['Weekly', 'Team coaching conversation, metrics review, 5S audit, project check-in'],
            ['Monthly', 'Performance reviews, process audits, strategic alignment check'],
            ['Quarterly', 'Team development planning, recognition, retrospectives'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Start Small',
          text: 'Don\'t create a 40-item leader standard work checklist. Start with 5-8 high-impact routines you can actually sustain. A short checklist executed consistently beats a comprehensive one ignored.',
        },
      ],
    },
    {
      id: 'tl-m6-l3',
      title: 'Gemba Leadership: Leading at the Point of Work',
      estimatedMinutes: 11,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Gemba is the Japanese term for "the actual place" — in manufacturing and service contexts, the place where value is created. Gemba walks are structured visits by leaders to the point of work, with the purpose of seeing, understanding, and supporting the people who do the work.',
        },
        {
          type: 'heading' as const,
          text: 'Principles of Effective Gemba Walks',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Go to see — Visit regularly with genuine curiosity, not to inspect or criticize',
            'Ask to understand — Lead with questions, not answers',
            'Respect people — Acknowledge expertise of those closest to the work',
            'Follow the value — Walk the process end-to-end periodically to understand flow',
            'Focus on process, not people — When problems are found, ask about the system, not who is to blame',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Common Gemba Walk Mistakes',
          text: 'Gemba walks lose their value when leaders: use them to inspect and criticize rather than learn; solve problems on the spot (bypassing the team\'s problem-solving process); go infrequently or only when there is a crisis; or fail to follow up on what was observed.',
        },
        {
          type: 'paragraph' as const,
          text: 'The most powerful question a leader can ask on a gemba walk is: "What is one thing that makes your work harder than it should be?" This surfaces improvement opportunities while demonstrating respect for the team\'s experience.',
        },
      ],
    },
    {
      id: 'tl-m6-l4',
      title: 'Visual Management and Making CI a Habit',
      estimatedMinutes: 11,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Visual management makes the state of work — performance, problems, priorities — visible at a glance without requiring reports or meetings. When people can see their own performance in real time, they are better positioned to identify problems and take ownership of improvement.',
        },
        {
          type: 'heading' as const,
          text: 'Elements of Visual Management Boards',
          level: 3 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Safety metrics — Incidents, near-misses, days without incident',
            'Quality metrics — Defect rates, first-pass yield, customer complaints',
            'Delivery metrics — On-time performance, cycle time, backlog',
            'Productivity metrics — Output vs. plan, efficiency trends',
            'People metrics — Attendance, training completion, open positions',
            'Improvement activity — Active kaizen events, idea submissions, project status',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Making Continuous Improvement a Habit',
          level: 3 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Habits form through consistent routines tied to cues and reinforced by rewards. To make CI a habit, embed it into existing routines rather than creating separate improvement activities.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Integrate CI questions into daily stand-ups: "What waste did you see yesterday? What could be improved?"',
            'Make idea submission easy — physical cards, digital apps, five-minute conversations',
            'Close the feedback loop quickly — act on ideas visibly and fast',
            'Celebrate improvement activity, not just outcomes — recognize people who submit ideas, not just those whose ideas succeed',
            'Make the invisible visible — use visual boards to show progress on improvement initiatives',
            'Build reflection into team rhythms — brief retrospectives after key events',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'CI Habit in Action',
          text: 'A healthcare team adds two standing questions to their daily huddle: "What went wrong yesterday and what did we do about it?" and "What can we make better today?" Over 90 days, this 5-minute addition produces 47 implemented improvements and measurably raises team engagement scores.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'tl-m6-q1',
      type: 'multiple-choice' as const,
      question: 'What is the primary purpose of a daily management system?',
      options: [
        'Replace monthly performance reviews with more frequent meetings',
        'Monitor performance in real time so small problems are addressed before they become large ones',
        'Give leadership visibility into team-level activities and personnel issues',
        'Standardize reporting formats across departments',
      ],
      correctIndex: 1,
      explanation: 'A daily management system enables teams to monitor performance in real time and address issues when they are small. The goal is responsive, proactive management — not just more frequent reporting.',
    },
    {
      id: 'tl-m6-q2',
      type: 'multiple-choice' as const,
      question: 'Which best describes the purpose of leader standard work?',
      options: [
        'Define standard operating procedures for the processes leaders oversee',
        'Establish consistent leadership routines that are visible, auditable, and improvable',
        'Measure leader performance against a set of quantitative metrics',
        'Replace ad hoc management practices with scripted leadership behaviors',
      ],
      correctIndex: 1,
      explanation: 'Leader standard work defines the routines leaders commit to performing consistently — making leadership practice visible and improvable, just as standard work does for process work.',
    },
    {
      id: 'tl-m6-q3',
      type: 'true-false' as const,
      question: 'Effective gemba walks focus primarily on identifying which team members are responsible for the problems observed.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'Effective gemba walks focus on understanding processes and systems, not on identifying who is at fault. The principle is "go to see and learn," with problems attributed to process, not people.',
    },
    {
      id: 'tl-m6-q4',
      type: 'multiple-choice' as const,
      question: 'A tiered daily management system escalates unresolved issues from team level to department level to leadership level. What is the primary benefit of this structure?',
      options: [
        'It ensures leadership is informed of all team-level issues daily',
        'It creates clear pathways for escalation so problems get appropriate attention at the right level',
        'It reduces the number of daily meetings required at the team level',
        'It holds team leaders accountable for metrics they directly control',
      ],
      correctIndex: 1,
      explanation: 'Tiered escalation ensures that problems the team cannot solve on their own receive attention at the appropriate level. Each tier handles what the tier below could not resolve, preventing both under- and over-escalation.',
    },
    {
      id: 'tl-m6-q5',
      type: 'multiple-choice' as const,
      question: 'Which practice is most effective for sustaining a continuous improvement culture over time?',
      options: [
        'Running annual kaizen events to generate large numbers of improvement ideas',
        'Embedding CI questions and reflection into existing daily and weekly routines',
        'Appointing a dedicated CI team responsible for improvement initiatives',
        'Setting quantitative improvement targets for each department quarterly',
      ],
      correctIndex: 1,
      explanation: 'Habits form through consistent routines. Embedding CI into existing daily and weekly rhythms — rather than treating it as a separate activity — is the most reliable way to sustain an improvement culture over time.',
    },
  ],
};

export const teamLeadershipCourse: Course = {
  id: 'team-leadership',
  track: 'leadership',
  title: 'Team Leadership & Management Tools',
  subtitle: 'Leading People Through Change and Improvement',
  description: 'Develop the leadership skills and management tools to guide teams through improvement initiatives. From facilitation and conflict resolution to change management and performance coaching, build your capability to lead with influence.',
  status: 'available',
  estimatedHours: 5,
  color: '#e07b5c',
  icon: '👥',
  modules: [module1, module2, module3, module4, module5, module6],
};
