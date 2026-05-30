import type { Course } from '../../types/course';

const module1 = {
  id: 'lean-m1',
  number: 1,
  title: 'Origins of Lean & the Toyota Production System',
  description: 'Trace the historical roots of Lean manufacturing from post-war Japan to the global Toyota Production System, and understand the foundational concept of waste elimination.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Describe the historical context that gave rise to the Toyota Production System',
    'Identify the key contributors — Ohno, Shingo, and Toyota leadership — and their contributions',
    'Define the seven forms of waste (Muda) and recognize examples of each',
    'Explain the structure of the TPS House and how its elements interrelate',
  ],
  lessons: [
    {
      id: 'lean-m1-l1',
      title: 'The Birth of the Toyota Production System',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Toyota Production System (TPS) emerged from necessity. After World War II, Japan faced severe material shortages and limited capital. Toyota, then a struggling automaker, could not afford to stockpile inventory the way American manufacturers did. This constraint forced Toyota engineers to devise a radically different approach — one that made only what was needed, when it was needed, in exactly the amount needed.',
        },
        {
          type: 'heading' as const,
          text: 'From Scarcity to Innovation',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Kiichiro Toyoda, the founder of Toyota Motor Corporation, laid the groundwork for just-in-time production in the 1930s. His vision was a system where every part arrived at the assembly line at precisely the right moment. After the war, his cousin Eiji Toyoda visited Ford\'s River Rouge plant in 1950 and returned convinced that mass production as practiced in America was not suitable for Japan\'s conditions — but that many of its ideas could be refined.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Historical Context',
          text: 'In 1950, Toyota nearly went bankrupt and had to lay off workers — a traumatic event that deeply shaped its corporate culture toward respect for people and waste elimination. The company could not afford inefficiency.',
        },
        {
          type: 'paragraph' as const,
          text: 'It was Taiichi Ohno, a Toyota engineer who rose to become vice president of manufacturing, who systematized these ideas into the coherent framework we now call TPS. Working through the 1950s and 1960s, Ohno observed operations relentlessly, asked "why?" repeatedly, and challenged his teams to eliminate anything that did not add value for the customer.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Toyota Production System (TPS)', definition: 'The manufacturing philosophy and set of practices developed by Toyota that focuses on continuous improvement and waste elimination.' },
            { term: 'Just-in-Time (JIT)', definition: 'A production strategy where materials and products are produced and delivered exactly when needed, minimizing inventory.' },
            { term: 'Taiichi Ohno', definition: 'Toyota engineer credited as the primary architect of the Toyota Production System and the concept of the seven wastes.' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Why This History Matters',
          text: 'Understanding the pressures Toyota faced helps explain why Lean principles are so focused on doing more with less. The system was not invented in a laboratory — it was forged under real constraints that your organization likely faces too.',
        },
      ],
    },
    {
      id: 'lean-m1-l2',
      title: 'Key Architects: Ohno, Shingo, and the Toyota Leaders',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Toyota Production System was not the work of a single genius but the product of sustained collaboration among several visionary thinkers. Understanding each contributor helps clarify where specific Lean tools and ideas come from.',
        },
        {
          type: 'heading' as const,
          text: 'Taiichi Ohno',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Ohno is widely regarded as the father of TPS. His most enduring contribution is the identification and systematic elimination of waste. He developed the concept of the production cell, introduced multi-machine handling (where one worker operates several machines), and championed the idea that stopping to fix problems immediately was more efficient than letting defects flow downstream. Ohno was famous for drawing circles on the factory floor and asking managers to stand in them for hours, observing what was actually happening.',
        },
        {
          type: 'heading' as const,
          text: 'Shigeo Shingo',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Shigeo Shingo worked as an industrial engineering consultant and collaborated extensively with Toyota. His most celebrated contributions include the Single-Minute Exchange of Die (SMED) system — a method for dramatically reducing machine changeover times — and Poka-Yoke, which means "mistake-proofing." Shingo believed that inspecting for defects after they occurred was wasteful and that systems should be designed to prevent errors in the first place.',
        },
        {
          type: 'heading' as const,
          text: 'Eiji Toyoda and Shoichiro Toyoda',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Without supportive leadership, TPS could never have spread through Toyota. Eiji Toyoda gave Ohno the organizational authority to transform manufacturing practices. Shoichiro Toyoda later championed Total Quality Management and helped codify respect for people as a foundational pillar alongside continuous improvement.',
        },
        {
          type: 'table' as const,
          headers: ['Contributor', 'Primary Contribution', 'Key Concept'],
          rows: [
            ['Taiichi Ohno', 'Architect of TPS', 'Seven Wastes, Kanban, Production Cells'],
            ['Shigeo Shingo', 'Industrial Engineering', 'SMED, Poka-Yoke, Zero Quality Control'],
            ['Kiichiro Toyoda', 'Founded JIT vision', 'Just-in-Time production philosophy'],
            ['Eiji Toyoda', 'Leadership & authority', 'Organizational support for TPS deployment'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: "Ohno's Circle in Practice",
          text: 'A plant manager was asked to stand in a circle Ohno drew on the factory floor for half a day. Initially frustrated, the manager began noticing how often workers left their stations to retrieve parts stored far away — a waste of motion no one had consciously recognized. This observation led to a layout redesign that cut walking distance by 40%.',
        },
      ],
    },
    {
      id: 'lean-m1-l3',
      title: 'The Seven Wastes (Muda)',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph' as const,
          text: 'At the heart of Lean thinking is the identification and elimination of waste — everything that consumes resources but creates no value for the customer. Taiichi Ohno categorized waste into seven distinct types, collectively known by the Japanese term "Muda." Lean practitioners use the acronym TIMWOOD or DOWNTIME to remember them.',
        },
        {
          type: 'heading' as const,
          text: 'The Seven Forms of Muda',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Waste', 'Description', 'Example'],
          rows: [
            ['Transportation', 'Moving materials or products unnecessarily', 'Carrying parts across the plant when workstations could be adjacent'],
            ['Inventory', 'Excess raw materials, WIP, or finished goods', 'Stacks of components waiting between process steps'],
            ['Motion', 'Unnecessary movement by people', 'Workers bending, reaching, or walking to find tools'],
            ['Waiting', 'Idle time when work cannot proceed', 'Machine downtime, waiting for approvals or materials'],
            ['Overproduction', 'Producing more than the customer needs now', 'Running large batches to keep machines busy'],
            ['Overprocessing', 'Doing more work than the customer requires', 'Polishing a surface that will be hidden in assembly'],
            ['Defects', 'Products that do not meet requirements', 'Rework, scrap, warranty repairs'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Overproduction: The Worst Waste',
          text: 'Ohno considered overproduction the most dangerous waste because it hides all the others. When you produce too much, excess inventory masks quality problems, excess motion goes unnoticed, and waiting is disguised by the appearance of activity.',
        },
        {
          type: 'paragraph' as const,
          text: 'Many organizations later added an eighth waste: underutilized talent — failing to engage the creativity, skills, and knowledge of employees. This is sometimes represented by adding an "S" to TIMWOOD to form TIMWOODS.',
        },
        {
          type: 'list' as const,
          items: [
            'Value-Added Work: Transforms the product in ways the customer would pay for',
            'Necessary Non-Value-Added: Required by current systems but not customer-valued (target for reduction)',
            'Pure Waste (Muda): Adds no value and should be eliminated immediately',
          ],
        },
      ],
    },
    {
      id: 'lean-m1-l4',
      title: 'The TPS House: Structure of a System',
      estimatedMinutes: 15,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Toyota Production System is often depicted as a house — a deliberate architectural metaphor emphasizing that all elements must work together. Remove any wall or weaken the foundation and the entire structure is compromised.',
        },
        {
          type: 'heading' as const,
          text: 'Anatomy of the TPS House',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The roof of the TPS House represents the goals: best quality, lowest cost, shortest lead time, and highest safety and morale. These goals are not competing — they are achieved simultaneously through the system beneath them.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Roof — Goals: Quality, Cost, Delivery, Safety, Morale',
            'Left Pillar — Just-in-Time: Right part, right amount, right time; continuous flow; pull systems; takt time',
            'Right Pillar — Jidoka (Built-in Quality): Stop and fix problems; separate human work from machine work; visual controls',
            'Foundation — Heijunka (Production Leveling), Standardized Work, and Kaizen (Continuous Improvement)',
            'Center — People: Teamwork, respect, problem-solving culture',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Why a House?',
          text: 'The house metaphor is intentional. A house needs a solid foundation before you erect the pillars, and the pillars must be strong before the roof is secure. Many Lean implementations fail because organizations try to install kanban or JIT (the pillars) without first standardizing work and leveling production (the foundation).',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Heijunka', definition: 'Production leveling — distributing production volume and mix evenly over time to smooth demand variation and reduce inventory.' },
            { term: 'Jidoka', definition: 'Autonomation — the ability to detect an abnormality and stop immediately; built-in quality rather than inspected-in quality.' },
            { term: 'Kaizen', definition: 'Continuous improvement; the ongoing effort to improve products, services, or processes through incremental changes.' },
          ],
        },
        {
          type: 'diagram' as const,
          diagramId: 'lean-house',
          title: 'The Toyota Production System House',
        },
        {
          type: 'paragraph' as const,
          text: 'Understanding TPS as a system — not a collection of tools — is the single most important insight for any Lean practitioner. Organizations that pick up individual tools like 5S or kanban without understanding the underlying philosophy rarely achieve lasting results. The tools work because of the thinking behind them.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'lean-m1-q1',
      type: 'multiple-choice' as const,
      question: 'Which Toyota engineer is primarily credited with identifying and categorizing the seven wastes of manufacturing?',
      options: ['Shigeo Shingo', 'Eiji Toyoda', 'Taiichi Ohno', 'Kiichiro Toyoda'],
      correctIndex: 2,
      explanation: 'Taiichi Ohno identified and categorized the seven wastes (Muda) as part of his development of the Toyota Production System. Shingo contributed SMED and Poka-Yoke, while the Toyoda family provided leadership and vision.',
    },
    {
      id: 'lean-m1-q2',
      type: 'multiple-choice' as const,
      question: 'Which of the seven wastes did Ohno consider most dangerous because it hides all other wastes?',
      options: ['Defects', 'Waiting', 'Overproduction', 'Inventory'],
      correctIndex: 2,
      explanation: 'Ohno considered overproduction the worst waste because it generates excess inventory that masks defects, motion, and waiting. When everything appears busy and product is flowing, underlying problems go undetected.',
    },
    {
      id: 'lean-m1-q3',
      type: 'true-false' as const,
      question: 'The Toyota Production System was developed primarily in response to abundant resources and high capital investment in post-war Japan.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. TPS was developed precisely because Japan faced severe resource scarcity and limited capital after World War II. Toyota could not afford to stockpile inventory or tolerate waste, which drove the development of just-in-time and waste-elimination principles.',
    },
    {
      id: 'lean-m1-q4',
      type: 'multiple-choice' as const,
      question: 'In the TPS House model, Heijunka, Standardized Work, and Kaizen form which part of the structure?',
      options: ['The roof', 'The left pillar', 'The right pillar', 'The foundation'],
      correctIndex: 3,
      explanation: 'Heijunka (production leveling), Standardized Work, and Kaizen form the foundation of the TPS House. Without a stable foundation, the pillars of JIT and Jidoka cannot support the goals represented by the roof.',
    },
    {
      id: 'lean-m1-q5',
      type: 'true-false' as const,
      question: "Shigeo Shingo's primary contribution to Lean was the development of the Kanban card system.",
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: "False. Shingo's primary contributions were SMED (Single-Minute Exchange of Die) for reducing changeover times and Poka-Yoke (mistake-proofing). The Kanban system is attributed to Taiichi Ohno.",
    },
  ],
};

const module2 = {
  id: 'lean-m2',
  number: 2,
  title: 'The Five Lean Principles',
  description: "Master the five Lean principles articulated by Womack and Jones — value, value stream, flow, pull, and perfection — and learn how to apply them sequentially in any organization.",
  estimatedMinutes: 55,
  learningObjectives: [
    "Define each of the five Lean principles in Womack and Jones's framework",
    'Explain how to identify value from the customer\'s perspective',
    'Describe how to map a value stream and identify non-value-added steps',
    'Distinguish between push and pull systems and explain why pull is preferred in Lean',
  ],
  lessons: [
    {
      id: 'lean-m2-l1',
      title: 'Value and Value Stream',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'In 1996, James Womack and Daniel Jones published "Lean Thinking," distilling the essence of the Toyota Production System into five principles that any organization — not just manufacturers — could apply. These principles provide a logical sequence for a Lean transformation.',
        },
        {
          type: 'heading' as const,
          text: 'Principle 1: Specify Value',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: "Value must be defined from the customer's perspective. This sounds obvious, but it is routinely violated. Value is a specific product or service that meets the customer's needs at a specific price and time. Anything the producer adds that the customer would not consciously pay for is waste.",
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Value in Practice',
          text: 'A car buyer values a reliable vehicle delivered on time at a fair price. The buyer does not value the time spent moving cars around the lot, the rework done after a paint defect, or the administrative paperwork processed three times because systems do not communicate. These are costs the producer bears — and passes on — but the customer gains nothing from them.',
        },
        {
          type: 'heading' as const,
          text: 'Principle 2: Map the Value Stream',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The value stream is every action — both value-creating and wasteful — required to bring a product from raw material to the customer. Value Stream Mapping (VSM) is a visual tool that documents the current state of these flows, including material flows, information flows, and time data.',
        },
        {
          type: 'list' as const,
          items: [
            'Value-Added steps: Physically transform the product in ways the customer pays for',
            'Necessary Non-Value-Added steps: Required by current systems but not directly valued (target for long-term elimination)',
            'Non-Value-Added steps: Pure waste — eliminate immediately',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'The Shocking Truth of VSM',
          text: 'In most manufacturing operations, value-added time represents only 5–10% of total lead time. The rest is waiting, transporting, inspecting, and reworking. Value Stream Mapping makes this visible and creates urgency for change.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Value Stream Mapping (VSM)', definition: 'A visual tool for documenting all steps in a process, distinguishing value-added from non-value-added activities, and identifying improvement opportunities.' },
            { term: 'Lead Time', definition: 'The total time from when a customer places an order to when they receive the product or service.' },
            { term: 'Process Time', definition: 'The actual time spent transforming the product — typically a small fraction of total lead time.' },
          ],
        },
      ],
    },
    {
      id: 'lean-m2-l2',
      title: 'Flow and Pull',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Once value is defined and the value stream is mapped, the next two principles — flow and pull — address how work actually moves through the system. Together they eliminate the start-stop-wait rhythm that characterizes traditional batch manufacturing.',
        },
        {
          type: 'heading' as const,
          text: 'Principle 3: Create Flow',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Flow means that products move continuously through value-creating steps without interruption, detours, or backflow. Creating flow requires eliminating barriers between steps: reducing batch sizes, co-locating operations, cross-training workers, and balancing workloads. The goal is for work to flow like water — smoothly and continuously.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Batch vs. Flow Thinking',
          text: "Batch thinking says: \"It's more efficient to set up the machine once and run 500 parts.\" Flow thinking asks: \"What is the total time for one unit from start to finish, including all the waiting between batches?\" Batch production almost always produces longer total lead times and higher inventory levels than continuous flow.",
        },
        {
          type: 'heading' as const,
          text: 'Principle 4: Establish Pull',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'In a pull system, production is triggered by actual customer demand — downstream consumption signals upstream replenishment. Nothing is produced until something is consumed. This is the opposite of a push system, where production is scheduled based on forecasts and products are "pushed" downstream regardless of whether the next step is ready.',
        },
        {
          type: 'table' as const,
          headers: ['Dimension', 'Push System', 'Pull System'],
          rows: [
            ['Trigger for production', 'Forecast or schedule', 'Actual customer demand'],
            ['Inventory levels', 'High — safety stock buffers forecast error', 'Low — only what is needed'],
            ['Response to demand changes', 'Slow — tied to planning cycles', 'Fast — responds to real consumption'],
            ['Visibility of problems', 'Low — inventory hides issues', 'High — problems surface immediately'],
            ['Typical tool', 'MRP / ERP schedule', 'Kanban signals'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Pull Requires Stable Flow First',
          text: 'Many organizations try to implement pull (kanban) before achieving stable flow. This creates chaos — signals are sent upstream but downstream processes cannot absorb the work predictably. Always stabilize and create flow before introducing pull.',
        },
        {
          type: 'paragraph' as const,
          text: 'Pull systems are enabled by kanban cards, electronic signals, or visual bins that authorize and limit production. The beauty of pull is that it automatically limits overproduction: when downstream stops consuming, upstream stops producing.',
        },
      ],
    },
    {
      id: 'lean-m2-l3',
      title: 'Pursue Perfection',
      estimatedMinutes: 17,
      content: [
        {
          type: 'heading' as const,
          text: 'Principle 5: Seek Perfection',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The fifth principle is not a destination but a direction. Perfection in Lean means a state where every step adds value and nothing is wasted — a theoretical ideal that no organization fully reaches, but that provides an unwavering compass. As flow and pull are implemented and waste is removed, new wastes become visible that were previously hidden by inventory and workarounds.',
        },
        {
          type: 'paragraph' as const,
          text: 'Womack and Jones described a "virtuous cycle": specify value more precisely, eliminate identified waste, create tighter flow, and implement pull — then repeat. Each cycle reveals the next layer of waste. This is why Lean is never "finished" and why companies that sustain Lean thinking for decades continue to improve.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: "Toyota's Never-Ending Improvement",
          text: "Toyota has been practicing continuous improvement since the 1950s. Despite being the global benchmark for manufacturing excellence, Toyota continues to run thousands of kaizen events annually. The pursuit of perfection is not a project with an end date — it is a way of operating.",
        },
        {
          type: 'heading' as const,
          text: 'The Five Principles in Sequence',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Specify Value — Start with the customer; define what they truly need',
            'Map the Value Stream — See all steps; separate value-adding from wasteful',
            'Create Flow — Remove interruptions; make value-adding steps flow continuously',
            'Establish Pull — Let demand drive production; produce only what is consumed',
            'Pursue Perfection — Repeat the cycle; relentlessly improve',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Starting Your Lean Journey',
          text: 'Many organizations are tempted to start with tools (5S, kanban, etc.) rather than principles. The principles provide the "why" behind every tool. When you understand that 5S serves flow, and flow enables pull, and pull reduces overproduction waste, you use the tools with purpose — not as compliance exercises.',
        },
        {
          type: 'paragraph' as const,
          text: 'Transparency is central to pursuing perfection. When problems are visible, they can be solved. Lean organizations actively work to surface problems rather than hide them, because each problem is an opportunity to improve the system permanently.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'lean-m2-q1',
      type: 'multiple-choice' as const,
      question: 'According to Womack and Jones, who determines what constitutes "value" in a Lean system?',
      options: ['The production manager', 'The customer', 'The engineer who designs the product', 'The CFO based on margin targets'],
      correctIndex: 1,
      explanation: "Value must always be defined from the customer's perspective. Lean principle #1 states that value is a specific product meeting the customer's needs at a specific price and time — anything else is waste regardless of how much internal effort it requires.",
    },
    {
      id: 'lean-m2-q2',
      type: 'true-false' as const,
      question: 'In a typical manufacturing operation, value-added time usually represents 50% or more of total lead time.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. In most manufacturing operations, value-added time represents only 5–10% of total lead time. The vast majority of time is consumed by waiting, transportation, inspection, and other non-value-adding activities.',
    },
    {
      id: 'lean-m2-q3',
      type: 'multiple-choice' as const,
      question: 'What is the primary difference between a push system and a pull system?',
      options: [
        'Push systems use kanban; pull systems use MRP',
        'Push systems respond to actual demand; pull systems respond to forecasts',
        'Push systems produce based on forecasts; pull systems produce based on actual consumption',
        'Push systems have lower inventory; pull systems have higher inventory',
      ],
      correctIndex: 2,
      explanation: 'In a push system, production is scheduled based on forecasts and "pushed" downstream. In a pull system, actual customer consumption triggers replenishment — nothing is produced until something is used. Pull systems typically maintain lower inventory and respond more quickly to real demand.',
    },
    {
      id: 'lean-m2-q4',
      type: 'multiple-choice' as const,
      question: 'Which Lean principle should be established BEFORE implementing a pull system like kanban?',
      options: ['Specify Value', 'Map the Value Stream', 'Create Flow', 'Seek Perfection'],
      correctIndex: 2,
      explanation: 'Flow should be established before pull. If downstream processes cannot absorb work predictably, pull signals create chaos rather than order. Stable flow is the prerequisite for effective pull systems.',
    },
    {
      id: 'lean-m2-q5',
      type: 'true-false' as const,
      question: 'The fifth Lean principle, "Seek Perfection," implies that an organization can eventually complete its Lean transformation and stop improving.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Perfection is a direction, not a destination. As each layer of waste is removed, new wastes become visible. The pursuit of perfection is a continuous cycle — Toyota has been improving for 70+ years and continues today.',
    },
  ],
};

const module3 = {
  id: 'lean-m3',
  number: 3,
  title: '5S, Visual Management & Standardized Work',
  description: 'Learn the foundational practices that create a stable, organized workplace: 5S methodology, visual management systems, and standardized work documentation.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Define each of the five S steps and explain how they build upon each other',
    'Identify examples of visual management controls in a workplace setting',
    'Explain the purpose and components of a Standard Operating Procedure in Lean',
    'Describe how standardized work relates to continuous improvement',
  ],
  lessons: [
    {
      id: 'lean-m3-l1',
      title: 'The 5S Framework',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: '5S is a systematic approach to workplace organization derived from five Japanese words: Seiri, Seiton, Seiso, Seiketsu, and Shitsuke. Translated and adapted, they become Sort, Set in Order, Shine, Standardize, and Sustain. Though simple in concept, 5S is often misunderstood as a cleaning program. In reality, it is the foundation for all other Lean improvements.',
        },
        {
          type: 'heading' as const,
          text: 'Sort (Seiri)',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Sort means removing everything from the workspace that is not needed for current work. This includes broken tools, obsolete materials, excess inventory, and anything whose purpose is unclear. A common technique is "red-tagging" — attaching red tags to questionable items and moving them to a holding area where they are evaluated and either returned to use, relocated, or discarded.',
        },
        {
          type: 'heading' as const,
          text: 'Set in Order (Seiton)',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Once only necessary items remain, they must be arranged for maximum efficiency and safety. Every item should have a designated location, and that location should be chosen based on frequency of use and ergonomics. Shadow boards, floor markings, and labeled storage locations ensure that anyone can find — and return — any item without searching.',
        },
        {
          type: 'heading' as const,
          text: 'Shine (Seiso)',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Shine means cleaning the workspace thoroughly and — critically — maintaining that cleanliness as a standard. But in Lean, Shine goes beyond aesthetics. Cleaning is inspection. When workers clean their equipment regularly, they notice leaks, loose bolts, unusual wear, and early signs of failure that would otherwise go undetected until breakdown.',
        },
        {
          type: 'table' as const,
          headers: ['S Step', 'Japanese Term', 'Core Question', 'Key Tool'],
          rows: [
            ['Sort', 'Seiri', 'What do we need here?', 'Red Tag System'],
            ['Set in Order', 'Seiton', 'Where does each item belong?', 'Shadow Boards, Floor Marking'],
            ['Shine', 'Seiso', 'Is everything clean and in good condition?', 'Cleaning Schedules, Checklists'],
            ['Standardize', 'Seiketsu', 'How do we maintain the first three S steps?', 'Visual Standards, Audit Sheets'],
            ['Sustain', 'Shitsuke', 'How do we make this a habit?', 'Leadership Audits, Training'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Most Common 5S Failure',
          text: 'Most 5S efforts succeed in their first event but fail within months. The culprit is almost always the fifth S — Sustain. Without management commitment, regular audits, and accountability, workplaces gradually return to their old state. Sustain requires cultural change, not just a one-time event.',
        },
        {
          type: 'diagram' as const,
          diagramId: 'five-s-cycle',
          title: '5S Implementation Cycle',
        },
      ],
    },
    {
      id: 'lean-m3-l2',
      title: 'Visual Management Systems',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Visual management is the practice of making the state of a process immediately apparent to anyone observing it — without needing to ask questions, review reports, or consult a computer. A well-managed Lean workplace can be "read" at a glance: you can see whether production is on track, whether materials are in the right place, and whether any abnormalities exist.',
        },
        {
          type: 'heading' as const,
          text: 'Types of Visual Controls',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Visual Indicators: Show the current state (e.g., production boards, inventory level markers, traffic light indicators)',
            'Visual Signals: Prompt action when a threshold is reached (e.g., a kanban card, a low-stock indicator)',
            'Visual Standards: Show what "correct" looks like (e.g., shadow boards, photos of proper arrangement)',
            'Visual Controls: Physically prevent errors or unauthorized actions (e.g., color-coded connections, limit switches)',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Andon Lights',
          text: 'The andon light system — typically a tower light with green, yellow, and red segments — is one of the most iconic visual management tools. Green means normal operation; yellow signals that a worker needs support but has not stopped the line; red means the line has been stopped due to a problem. Any supervisor or team leader on the floor knows instantly where to direct attention.',
        },
        {
          type: 'heading' as const,
          text: 'Production Control Boards',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'A production control board (also called a "pitch board" or "hour-by-hour chart") displays planned production versus actual production at regular intervals — often every hour. When actual falls behind plan, the gap is immediately visible and corrective action can be taken within the shift rather than discovered at day\'s end.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'The Test of Visual Management',
          text: 'A useful test: walk a new employee through a work area on their first day. Can they tell, without being told, whether the process is running normally or has a problem? If not, the visual management system needs improvement.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Andon', definition: 'A visual alert system (often a light) that signals the status of a production line and enables immediate response to abnormalities.' },
            { term: 'Pitch Board', definition: 'A visual display showing planned vs. actual output at defined intervals throughout a shift.' },
            { term: 'Shadow Board', definition: 'A tool storage board with outlines of each tool, making it immediately clear when a tool is missing or out of place.' },
          ],
        },
      ],
    },
    {
      id: 'lean-m3-l3',
      title: 'Standardized Work',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Standardized work is one of the most powerful — and most misunderstood — concepts in Lean. It is not a rigid rulebook designed to constrain workers. It is the documented best-known method for performing a task, developed with input from those who do the work, and serving as the baseline from which improvements are made.',
        },
        {
          type: 'heading' as const,
          text: 'The Three Elements of Standardized Work',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Takt Time: The rate at which products must be completed to meet customer demand (calculated as available production time ÷ customer demand)',
            'Work Sequence: The specific order in which a worker performs tasks within a takt time cycle',
            'Standard Work-in-Process (SWIP): The minimum inventory needed to keep work flowing smoothly through the process',
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'Standardized work documentation typically includes a Standard Work Combination Sheet (showing how human time and machine time interrelate) and a Standard Work Chart (showing the physical layout and movement within the work area). These documents make the work visible and auditable.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Standardized Work vs. Standard Operating Procedures',
          text: 'SOPs (Standard Operating Procedures) describe WHAT to do and why. Standardized Work describes HOW to do it in a specific timed sequence, tied to takt time and customer demand. Both are necessary, but standardized work is more detailed, more visual, and more directly tied to flow.',
        },
        {
          type: 'heading' as const,
          text: 'Standardized Work as the Foundation for Kaizen',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Ohno famously said: "Where there is no standard, there can be no kaizen." This captures a critical insight — you cannot improve a process you have not yet defined. Standardized work captures the current best method, makes it visible and consistent, and then serves as the starting point for the next improvement cycle. When an improvement is found, the standard is updated to reflect the new best method.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Standards Are Not Forever',
          text: 'A common mistake is treating standards as permanent rules. Standards should be changed when a better method is found — and that better method becomes the new standard. An unchanged standard is a sign that improvement has stopped.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'lean-m3-q1',
      type: 'multiple-choice' as const,
      question: 'Which step of 5S involves attaching red tags to items of unclear necessity and moving them to a holding area for evaluation?',
      options: ['Set in Order', 'Sort', 'Shine', 'Standardize'],
      correctIndex: 1,
      explanation: 'The Sort step (Seiri) involves removing everything that is not needed for current work. Red-tagging is a common Sort technique — questionable items are tagged and held for evaluation before being returned, relocated, or discarded.',
    },
    {
      id: 'lean-m3-q2',
      type: 'true-false' as const,
      question: 'In Lean, the Shine step of 5S is primarily about aesthetics — making the workplace look clean for visitors.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. While cleanliness is a result, Shine in Lean is about inspection. Regular cleaning allows workers to detect leaks, loose components, unusual wear, and early failure signs. Cleaning is a form of preventive maintenance, not just appearance management.',
    },
    {
      id: 'lean-m3-q3',
      type: 'multiple-choice' as const,
      question: 'What is takt time, and how is it calculated?',
      options: [
        'The fastest a machine can run; calculated as machine speed ÷ cycle time',
        'The time between customer orders; calculated as order frequency ÷ demand',
        'The rate products must be completed to meet demand; calculated as available production time ÷ customer demand',
        'The total lead time through a process; calculated as process steps × average cycle time',
      ],
      correctIndex: 2,
      explanation: 'Takt time is the "beat" of production — how frequently a unit must be completed to satisfy customer demand. It is calculated as available production time divided by customer demand. For example, if 480 minutes are available and demand is 240 units, takt time is 2 minutes per unit.',
    },
    {
      id: 'lean-m3-q4',
      type: 'multiple-choice' as const,
      question: 'According to Ohno, why is standardized work essential to kaizen?',
      options: [
        'Standards make it easier to train new workers quickly',
        'Without a defined current method, there is no baseline to improve from',
        'Standards reduce the need for management oversight',
        'Standardized work eliminates the need for worker creativity',
      ],
      correctIndex: 1,
      explanation: 'Ohno\'s statement — "Where there is no standard, there can be no kaizen" — means that improvement requires a defined current state. Without standardized work, every worker does the task differently, making it impossible to identify, capture, and spread improvements consistently.',
    },
    {
      id: 'lean-m3-q5',
      type: 'true-false' as const,
      question: 'Once a standard is established in Lean, it should remain unchanged to maintain consistency and process stability.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Standards are the current best-known method and should be updated whenever a better method is discovered. An unchanged standard suggests improvement has stalled. The cycle is: standardize → improve → update the standard → repeat.',
    },
  ],
};

const module4 = {
  id: 'lean-m4',
  number: 4,
  title: 'Just-in-Time & Kanban Systems',
  description: 'Understand the philosophy and mechanics of Just-in-Time production, learn how kanban systems enable pull, and master key concepts like WIP limits and takt time.',
  estimatedMinutes: 65,
  learningObjectives: [
    'Explain the JIT philosophy and its three core requirements',
    'Describe how a kanban system works as a pull mechanism',
    'Calculate and interpret WIP limits and their effect on flow',
    'Explain takt time and how it drives production pacing',
  ],
  lessons: [
    {
      id: 'lean-m4-l1',
      title: 'Just-in-Time Philosophy',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Just-in-Time (JIT) is the principle of producing and delivering exactly what is needed, when it is needed, in exactly the amount needed. As one of the two main pillars of the TPS House, JIT is a comprehensive production philosophy rather than a single tool. It requires coordination across the entire value stream — from suppliers through to the customer.',
        },
        {
          type: 'heading' as const,
          text: 'The Three Requirements of JIT',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Continuous Flow: Products move one piece at a time (or in small batches) through value-adding steps without stopping',
            'Pull System: Production is authorized by downstream consumption, not upstream schedules',
            'Takt Time: The production pace is set to match customer demand rate — no faster, no slower',
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'When all three are in place, the result is a production system that responds quickly to real demand, maintains minimal inventory, and makes problems immediately visible. If a defect is produced, it is detected within one takt cycle rather than buried in a batch of hundreds.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'JIT is Not Zero Inventory',
          text: 'A common misconception is that JIT means no inventory at all. JIT means only as much inventory as is needed to maintain flow. Some buffer inventory is often necessary to absorb variation in demand or supply — the goal is to minimize it through improved stability, not eliminate it overnight.',
        },
        {
          type: 'heading' as const,
          text: 'JIT and Supplier Relationships',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'JIT extends beyond the factory floor to the supply chain. Toyota developed long-term, collaborative relationships with key suppliers who deliver materials frequently in small quantities. This requires suppliers to have stable processes, reliable quality, and short lead times. JIT in the supply chain is only sustainable when suppliers are treated as partners, not adversaries squeezed for price.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'JIT Supply Chain Risks',
          text: 'JIT supply chains are highly efficient but vulnerable to disruption. Natural disasters, port congestion, and geopolitical events can halt production quickly when safety stock is minimal. Leading Lean practitioners balance JIT efficiency with strategic inventory positioning for critical components.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'One-Piece Flow', definition: 'A production method where items are processed one at a time through each step, rather than in large batches, minimizing work-in-process inventory.' },
            { term: 'Pitch', definition: 'The interval at which a defined quantity of product is released or completed — often a multiple of takt time used to make flow manageable.' },
          ],
        },
      ],
    },
    {
      id: 'lean-m4-l2',
      title: 'Kanban: The Pull Signal System',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Kanban is the mechanism that makes pull systems work. The word "kanban" means "signal card" or "visual card" in Japanese. A kanban authorizes production or movement of a specific quantity of a specific item. When a downstream process consumes product, it sends a kanban upstream — authorizing replenishment of exactly what was consumed.',
        },
        {
          type: 'heading' as const,
          text: 'The Six Rules of Kanban',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Downstream processes withdraw items from upstream in the quantities and at the times specified by the kanban',
            'Upstream processes produce only the quantities and types specified by the kanban received',
            'Nothing is produced or moved without a kanban',
            'Defective products are never sent to the downstream process',
            'The number of kanbans is reduced over time to expose and solve problems',
            'Kanban must adapt to small fluctuations in demand',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Types of Kanban',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Kanban Type', 'Purpose', 'Example'],
          rows: [
            ['Production Kanban', 'Authorizes upstream process to produce', 'Card triggering machine to produce 10 units of Part A'],
            ['Withdrawal Kanban', 'Authorizes movement of material', 'Card allowing forklift to move tote from storage to line'],
            ['Supplier Kanban', 'Triggers replenishment from external supplier', 'Electronic signal sent to supplier when bin is empty'],
            ['Electronic Kanban (e-Kanban)', 'Digital signal replacing physical cards', 'Barcode scan triggers automatic purchase order'],
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'The number of kanban cards in a system is not arbitrary — it is calculated based on demand, replenishment lead time, and desired safety factor. A fundamental discipline of kanban management is gradually reducing the number of cards over time, which reduces WIP and forces the system to become more reliable and responsive.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'The Supermarket Model',
          text: "Ohno was inspired to develop kanban by observing American supermarkets. Customers take what they need from the shelf; the shelf is replenished when it reaches a reorder point. The shelf is a controlled buffer between supply and demand — not too much, not too little. Toyota applied this concept between every process step in the factory.",
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Calculating Kanban Quantity',
          text: 'Basic kanban formula: Number of kanbans = (Daily demand × Replenishment lead time in days × Safety factor) ÷ Container quantity. Start with a generous safety factor and reduce it systematically as process stability improves.',
        },
        {
          type: 'diagram' as const,
          diagramId: 'kanban-flow',
          title: 'Kanban Pull System Flow',
        },
      ],
    },
    {
      id: 'lean-m4-l3',
      title: "WIP Limits and Takt Time",
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: "Work-in-Process (WIP) limits and takt time are two of the most powerful — and most underused — concepts in Lean production. Together they define the pace and capacity of a production system.",
        },
        {
          type: 'heading' as const,
          text: "WIP Limits and Little's Law",
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: "Little's Law is a mathematical relationship that governs all queuing systems: Lead Time = WIP ÷ Throughput. This means that for a given rate of output, the only way to reduce lead time is to reduce WIP. Conversely, if WIP accumulates (because production outpaces consumption), lead time grows — often dramatically.",
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: "Little's Law in Action",
          text: "If a process completes 100 units per day and has 500 units of WIP, lead time is 5 days. Reduce WIP to 200 units (while maintaining throughput) and lead time drops to 2 days. WIP limits are a direct lever on lead time.",
        },
        {
          type: 'paragraph' as const,
          text: 'In practice, WIP limits are enforced by kanban rules (nothing is produced without a kanban) and physical constraints (limited space at each workstation). When WIP hits its limit at a downstream step, upstream steps stop — exposing the bottleneck and creating pressure to resolve it.',
        },
        {
          type: 'heading' as const,
          text: 'Takt Time in Detail',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Takt time sets the rhythm for the entire production system. The word comes from the German "Takt" meaning beat or pulse. If takt time is 3 minutes, the system must complete one unit every 3 minutes to satisfy customer demand exactly — no faster (which creates overproduction) and no slower (which creates shortfalls).',
        },
        {
          type: 'table' as const,
          headers: ['Scenario', 'Available Time', 'Customer Demand', 'Takt Time'],
          rows: [
            ['Automotive assembly', '420 min/shift', '140 vehicles/shift', '3 minutes/vehicle'],
            ['Hospital admissions', '480 min/day', '60 patients/day', '8 minutes/patient'],
            ['Software deployments', '8 hours/day', '4 releases/day', '2 hours/release'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Takt Time Changes with Demand',
          text: 'Takt time must be recalculated whenever customer demand changes. If demand increases, takt time shortens and you must find ways to produce faster or add capacity. If demand decreases, takt time lengthens and you may reduce production rates to avoid overproduction.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'lean-m4-q1',
      type: 'multiple-choice' as const,
      question: "According to Little's Law, what is the lead time for a process that completes 50 units per day and has 300 units of WIP?",
      options: ['3 days', '6 days', '15 days', '50 days'],
      correctIndex: 1,
      explanation: "Little's Law: Lead Time = WIP ÷ Throughput = 300 ÷ 50 = 6 days. Reducing WIP to 150 units while maintaining 50 units/day throughput would halve lead time to 3 days.",
    },
    {
      id: 'lean-m4-q2',
      type: 'true-false' as const,
      question: 'In a kanban system, production should begin as soon as workers become available, regardless of whether a kanban signal has been received.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Rule 3 of kanban states that nothing is produced or moved without a kanban. Producing without a signal creates overproduction — the worst of the seven wastes. If workers are idle and no kanban is present, they should use the time for improvement activities, training, or maintenance.',
    },
    {
      id: 'lean-m4-q3',
      type: 'multiple-choice' as const,
      question: 'What inspired Taiichi Ohno to develop the kanban system?',
      options: [
        "Observing Ford's assembly line in Detroit",
        'American supermarket inventory replenishment practices',
        'A visit to a Toyota supplier in Nagoya',
        "Reading Frederick Taylor's scientific management principles",
      ],
      correctIndex: 1,
      explanation: 'Ohno was inspired by American supermarkets, where customers take exactly what they need from shelves that are replenished to a defined level when they run low. He applied this model between process steps in Toyota\'s factory, creating the kanban (pull signal) system.',
    },
    {
      id: 'lean-m4-q4',
      type: 'multiple-choice' as const,
      question: 'If a factory has 480 minutes of available production time per day and customer demand is 160 units, what is the takt time?',
      options: ['1 minute per unit', '2 minutes per unit', '3 minutes per unit', '4 minutes per unit'],
      correctIndex: 2,
      explanation: 'Takt Time = Available Production Time ÷ Customer Demand = 480 minutes ÷ 160 units = 3 minutes per unit. The production system must complete one unit every 3 minutes to exactly meet demand.',
    },
    {
      id: 'lean-m4-q5',
      type: 'true-false' as const,
      question: 'Just-in-Time production is incompatible with any form of inventory buffer between process steps.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. JIT means only as much inventory as needed to maintain flow — not zero inventory. Supermarket buffers, controlled WIP, and strategic safety stock can all be part of a JIT system. The goal is to minimize inventory through improved stability and flow, not to eliminate all buffers immediately.',
    },
  ],
};

const module5 = {
  id: 'lean-m5',
  number: 5,
  title: 'Total Productive Maintenance & Quality at Source',
  description: 'Explore how Total Productive Maintenance, OEE measurement, and built-in quality practices like poka-yoke and jidoka prevent defects and equipment failures from disrupting flow.',
  estimatedMinutes: 65,
  learningObjectives: [
    'Define Overall Equipment Effectiveness (OEE) and calculate its three components',
    'Describe the pillars of Total Productive Maintenance and explain autonomous maintenance',
    'Explain the poka-yoke concept and classify mistake-proofing devices by type',
    'Describe jidoka and how it differs from traditional quality inspection approaches',
  ],
  lessons: [
    {
      id: 'lean-m5-l1',
      title: 'Total Productive Maintenance and OEE',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Total Productive Maintenance (TPM) is a manufacturing philosophy that aims for perfect production — no breakdowns, no defects, no accidents — by involving all employees in maintaining and improving equipment. Developed by Seiichi Nakajima in Japan in the 1970s, TPM shifted maintenance from a reactive ("fix it when it breaks") to a proactive ("prevent it from breaking") mindset.',
        },
        {
          type: 'heading' as const,
          text: 'The Eight Pillars of TPM',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Autonomous Maintenance: Operators perform routine care and inspection of their own equipment',
            'Planned Maintenance: Maintenance team schedules preventive work based on reliability data',
            'Quality Maintenance: Equipment is maintained to prevent defect-causing conditions',
            'Focused Improvement (Kobetsu Kaizen): Cross-functional teams eliminate major losses systematically',
            'Early Equipment Management: Apply maintenance knowledge when designing new equipment',
            'Training and Education: Build skills for both operators and maintenance personnel',
            'Safety, Health & Environment: Ensure all maintenance activities are safe and sustainable',
            'TPM in Administration: Apply TPM principles to office and support functions',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Overall Equipment Effectiveness (OEE)',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'OEE is the primary metric for measuring manufacturing productivity and the effectiveness of TPM. It captures three dimensions of equipment performance and multiplies them together to reveal the percentage of planned production time that is truly productive.',
        },
        {
          type: 'table' as const,
          headers: ['OEE Factor', 'What It Measures', 'Common Losses'],
          rows: [
            ['Availability', 'Planned time minus unplanned downtime', 'Equipment failures, material shortages, changeovers'],
            ['Performance', 'Actual output vs. theoretical maximum speed', 'Minor stoppages, slow cycles, operator inefficiency'],
            ['Quality', 'Good units vs. total units produced', 'Defects, rework, startup scrap'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'OEE Calculation Example',
          text: 'Availability = 85%, Performance = 90%, Quality = 95%. OEE = 0.85 × 0.90 × 0.95 = 72.7%. World-class OEE is generally considered to be 85% or above. Most manufacturers start around 40–60%, which means significant room for improvement.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Use OEE to Find the Right Problem',
          text: "Don't just track overall OEE — break it into its three components to diagnose where losses are concentrated. An OEE of 60% driven by poor Availability points to maintenance and reliability issues, while the same OEE score driven by poor Quality points to process control and poka-yoke opportunities.",
        },
      ],
    },
    {
      id: 'lean-m5-l2',
      title: 'Autonomous Maintenance',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Autonomous Maintenance (AM) is the TPM pillar that restores the relationship between operators and their equipment. In traditional manufacturing, a strict division exists between "operators run machines" and "maintenance fixes machines." Autonomous Maintenance breaks down this wall, training operators to perform routine care tasks and detect early abnormalities.',
        },
        {
          type: 'heading' as const,
          text: 'The Seven Steps of Autonomous Maintenance',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Initial Cleaning: Deep clean equipment; identify and tag problems found',
            'Eliminate Sources of Contamination: Prevent dirt, oil, and debris from accumulating',
            'Establish Cleaning and Lubrication Standards: Define what to do, how often, and who does it',
            'General Inspection: Train operators to inspect mechanisms; find hidden deficiencies',
            'Autonomous Inspection: Conduct self-directed inspection using developed standards',
            'Standardization: Standardize cleaning, lubrication, and inspection across all machines',
            'Self-Management: Operators take full ownership of equipment condition; continuous improvement',
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'The initial deep cleaning in Step 1 is often revelatory. Teams find oil leaks that have been present for years, bolts that have been loose for months, and contamination pathways that explain chronic quality defects. Cleaning is not just housekeeping — it is the beginning of understanding the machine.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Autonomous Maintenance Results',
          text: 'A food packaging plant implemented the first three steps of AM over six months. Operators discovered 47 abnormalities during initial cleaning, including a coolant leak that had been causing surface defects on 3% of packages for over a year. After correcting these issues, defect rate dropped from 3.2% to 0.4% without any other process changes.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'AM is Not Just Extra Work for Operators',
          text: 'Autonomous Maintenance must be supported by proper training, dedicated time, and recognition. If operators are expected to add AM tasks to an already full schedule without relieving other duties, it will be resisted and fail. Management must demonstrate commitment by providing the resources needed.',
        },
      ],
    },
    {
      id: 'lean-m5-l3',
      title: 'Poka-Yoke and Jidoka',
      estimatedMinutes: 23,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Quality at the source means preventing defects from being created rather than detecting them after the fact. Two fundamental Lean concepts — Poka-Yoke and Jidoka — operationalize this philosophy in different but complementary ways.',
        },
        {
          type: 'heading' as const,
          text: 'Poka-Yoke: Mistake-Proofing',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Poka-Yoke (pronounced "poh-kah YOH-kay") is a Japanese term meaning "mistake-proofing" or "inadvertent error prevention." Developed by Shigeo Shingo, it refers to any mechanism that prevents a mistake from being made or immediately detects a mistake before it becomes a defect. The philosophy is that humans will inevitably make errors — the system must be designed to prevent those errors from causing harm.',
        },
        {
          type: 'table' as const,
          headers: ['Poka-Yoke Type', 'Function', 'Example'],
          rows: [
            ['Prevention', 'Makes the mistake physically impossible', 'USB-C connector that can only be inserted one way'],
            ['Detection', 'Signals when an error has occurred', 'Sensor that stops a machine if a part is missing'],
            ['Contact', 'Uses physical shape or size to detect abnormalities', 'Go/no-go gauge that checks a dimension automatically'],
            ['Fixed-value', 'Alerts when a specific count or quantity is not met', 'Parts tray with exact number of compartments for assembly'],
            ['Motion-step', 'Verifies the correct sequence of steps', 'Software that prevents saving until all required fields are complete'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Jidoka: Autonomation',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Jidoka is the second pillar of the TPS House, alongside Just-in-Time. It is often translated as "autonomation" — automation with a human touch. The concept has two components: (1) the ability to detect an abnormality automatically, and (2) the authority and obligation to stop the process immediately when an abnormality is detected.',
        },
        {
          type: 'paragraph' as const,
          text: 'In traditional manufacturing, workers run machines and inspectors check output periodically. Under Jidoka, machines detect their own problems (through sensors, counters, or other mechanisms) and stop automatically. Workers can then tend multiple machines simultaneously, because the machine will signal when human attention is needed.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The Andon Cord',
          text: "Toyota's assembly lines have an \"andon cord\" — a rope or button that any worker can pull to stop the line if they detect a problem they cannot fix within their takt time. Initially this seems inefficient (stopping a 5,000-unit-per-day line for one worker's problem). In practice, it forces problems to be solved permanently rather than passed on, and average line stop time has shrunk to seconds at world-class plants.",
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Never Penalize Workers for Stopping the Line',
          text: 'The andon system and jidoka philosophy only work if workers feel psychologically safe to signal problems. If stopping the line leads to criticism or blame, workers will hide problems — and defects will flow to the customer. Building this culture is a leadership responsibility.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Poka-Yoke', definition: 'Any device or mechanism that prevents human errors from occurring or immediately detects them before they cause defects.' },
            { term: 'Jidoka', definition: 'Autonomation — the capability to detect abnormalities and stop the process immediately, preventing defects from being passed downstream.' },
            { term: 'Andon', definition: 'A visual and/or audible signal system that indicates the status of production and enables immediate response to abnormalities.' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'lean-m5-q1',
      type: 'multiple-choice' as const,
      question: "A machine has 90% Availability, 80% Performance, and 95% Quality. What is its OEE?",
      options: ['68.4%', '72.5%', '85%', '91.5%'],
      correctIndex: 0,
      explanation: 'OEE = Availability × Performance × Quality = 0.90 × 0.80 × 0.95 = 0.684 = 68.4%. World-class OEE is typically 85% or above, so this machine has significant room for improvement, particularly in Performance.',
    },
    {
      id: 'lean-m5-q2',
      type: 'true-false' as const,
      question: 'In Autonomous Maintenance, the primary goal of the initial deep cleaning step is to make the workplace look presentable to customers.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. The initial cleaning step in AM is about discovering abnormalities — leaks, loose components, contamination sources, and hidden defects — that have accumulated over time. Cleaning is inspection. The goal is to restore the machine to its proper baseline condition and identify problems that need correction.',
    },
    {
      id: 'lean-m5-q3',
      type: 'multiple-choice' as const,
      question: 'Which of the following is the best example of a PREVENTION type poka-yoke?',
      options: [
        'A sensor that sounds an alarm when a part is installed incorrectly',
        'A visual checklist that reminds workers of the correct sequence',
        'A keyed connector that physically cannot be plugged in wrong',
        'A camera system that photographs each assembly for later inspection',
      ],
      correctIndex: 2,
      explanation: 'A prevention poka-yoke makes the mistake physically impossible. A keyed connector that can only be inserted in the correct orientation prevents incorrect assembly — it cannot be done wrong, even accidentally. The other options detect errors after they occur or rely on human attention.',
    },
    {
      id: 'lean-m5-q4',
      type: 'multiple-choice' as const,
      question: 'What does "jidoka" add to conventional automation?',
      options: [
        'Higher machine speed through optimized programming',
        'The ability to detect abnormalities and stop automatically when they occur',
        'Robotic arms that replace human labor entirely',
        'Wireless connectivity to ERP systems for real-time scheduling',
      ],
      correctIndex: 1,
      explanation: 'Jidoka adds "intelligence" to automation — the ability to detect an abnormality and stop the process immediately, preventing defects from being produced and passed downstream. This is what "autonomation" (automation with a human touch) means: machines that know when something is wrong and respond appropriately.',
    },
    {
      id: 'lean-m5-q5',
      type: 'true-false' as const,
      question: 'Total Productive Maintenance is primarily the responsibility of the maintenance department and does not require significant involvement from production operators.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. TPM explicitly involves all employees — especially production operators — in maintaining and improving equipment. Autonomous Maintenance, one of the eight TPM pillars, trains operators to perform routine care tasks and detect early abnormalities themselves. TPM breaks down the barrier between "operators run" and "maintenance fixes."',
    },
  ],
};

const module6 = {
  id: 'lean-m6',
  number: 6,
  title: 'Lean Culture & Sustaining Improvement',
  description: 'Discover how to build and sustain a culture of continuous improvement through kaizen events, gemba walks, A3 thinking, and the leadership behaviors that make Lean last.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Explain the kaizen philosophy and describe the difference between kaizen events and daily kaizen',
    'Describe the purpose and structure of a gemba walk',
    'Apply the A3 problem-solving framework to a real workplace challenge',
    'Identify the leadership behaviors that sustain a Lean culture versus those that undermine it',
  ],
  lessons: [
    {
      id: 'lean-m6-l1',
      title: 'Kaizen: The Philosophy of Continuous Improvement',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Kaizen — meaning "change for the better" — is simultaneously a philosophy, a practice, and a mindset. As a philosophy, it holds that every process can always be improved and that small, frequent improvements accumulate into transformational change. As a practice, it takes structured forms that engage teams in focused improvement efforts. As a mindset, it makes every employee an active problem-solver rather than a passive task-completer.',
        },
        {
          type: 'heading' as const,
          text: 'Two Levels of Kaizen',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Lean organizations practice kaizen at two levels. Point kaizen (or daily kaizen) consists of small, immediate improvements made by individuals or small teams in their own work areas — without waiting for an event or approval. System kaizen involves cross-functional teams working intensively over several days to redesign a value stream or solve a significant systemic problem.',
        },
        {
          type: 'table' as const,
          headers: ['Dimension', 'Point/Daily Kaizen', 'System/Event Kaizen'],
          rows: [
            ['Scope', 'Single workstation or task', 'Entire value stream or major process'],
            ['Duration', 'Minutes to hours', '3–5 days (kaizen event/blitz)'],
            ['Participants', '1–3 people directly doing the work', 'Cross-functional team of 6–12'],
            ['Approval needed', 'Minimal — often autonomous', 'Management sponsorship required'],
            ['Frequency', 'Daily', 'Monthly to quarterly'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The Power of Many Small Improvements',
          text: 'If every worker makes one small improvement per week — saving even 2 minutes per day — the cumulative effect across a team of 50 workers over a year is enormous: 50 workers × 2 minutes × 250 days = 25,000 minutes = over 400 hours of recovered capacity annually. Daily kaizen at scale outperforms periodic large projects.',
        },
        {
          type: 'paragraph' as const,
          text: 'A kaizen event (also called a Rapid Improvement Event or Kaizen Blitz) follows a structured format: Define the problem and scope on Day 1, observe and measure the current state on Day 2, develop and test countermeasures on Day 3, implement and standardize on Day 4, and present results to leadership on Day 5. This compressed timeline creates urgency and focuses energy.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Make Kaizen a Right, Not a Request',
          text: 'Lean cultures give workers the authority to stop, experiment, and improve their work within defined parameters — without needing permission for every small change. This signals trust and dramatically increases improvement velocity. Define the boundaries clearly (scope, budget, safety rules), then get out of the way.',
        },
      ],
    },
    {
      id: 'lean-m6-l2',
      title: 'Gemba Walks and A3 Thinking',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: '"Gemba" is a Japanese word meaning "the real place" — specifically, where value is created. In manufacturing, the gemba is the shop floor. In healthcare, it is the patient care area. In software, it is where developers write code and users interact with the product. The gemba walk is a structured practice of going to where work happens to observe, understand, and support improvement.',
        },
        {
          type: 'heading' as const,
          text: 'Principles of an Effective Gemba Walk',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Go to see: Physical presence, not reports. Observe the actual process, not presentations about it.',
            'Ask "why?": Understand the purpose of each step, not just what is happening',
            'Show respect: Listen to workers; they know the process best. Do not walk past problems without engaging.',
            'Do not jump to solutions: Your role is to ask questions and understand, not to immediately fix',
            'Follow up: Commitments made during gemba walks must be tracked and honored',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Common Gemba Walk Mistakes',
          text: 'Gemba walks fail when leaders arrive to inspect rather than learn, when they jump to solutions before understanding root causes, or when workers feel audited rather than supported. A gemba walk where the leader asks "why is this dirty?" rather than "what makes it hard to keep clean?" sends very different signals.',
        },
        {
          type: 'heading' as const,
          text: 'A3 Problem Solving',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The A3 is a structured problem-solving and communication tool developed at Toyota. Named after the international paper size (A3, approximately 11×17 inches), it captures an entire problem-solving story on a single page. The constraint of one page forces clear thinking and prevents unnecessary complexity.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Background: Why is this problem important? What is the business context?',
            'Current Condition: What is actually happening now? (Supported by data and visual mapping)',
            'Target Condition: What specific, measurable improvement are we seeking?',
            'Root Cause Analysis: What are the deep causes driving the current condition? (Use 5-Why or fishbone)',
            'Countermeasures: What specific actions will address root causes? Who is responsible? By when?',
            'Implementation Plan: Detailed action items with owners and due dates',
            'Effect Confirmation: How will we verify that the countermeasures worked?',
            'Follow-up: What new standards result? What problems remain for the next A3?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'A3 in Action',
          text: 'A team used an A3 to address late order shipments. Current state: 23% of orders shipped late. Root cause analysis revealed that late shipments clustered around one workstation due to a single setup that took 45 minutes. Countermeasure: apply SMED to reduce setup to under 10 minutes. After implementation, late shipments dropped to 4%. The A3 made the entire story — problem, cause, solution, and result — visible to anyone in one page.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Gemba', definition: 'Japanese for "the real place" — where value is actually created. Gemba walks involve leaders going to observe and understand the actual work.' },
            { term: 'A3', definition: 'A structured one-page problem-solving and communication tool that guides teams through background, current state, root cause, countermeasures, and follow-up.' },
            { term: '5 Whys', definition: 'A root cause analysis technique of asking "why?" repeatedly (typically five times) until the underlying cause of a problem is identified.' },
          ],
        },
      ],
    },
    {
      id: 'lean-m6-l3',
      title: 'Leadership Behaviors That Sustain Lean',
      estimatedMinutes: 17,
      content: [
        {
          type: 'paragraph' as const,
          text: "The most common reason Lean transformations fail is not poor tool selection or inadequate training — it is leadership behavior. Lean requires a fundamentally different type of leadership: one that develops people's problem-solving capabilities rather than simply directing action.",
        },
        {
          type: 'heading' as const,
          text: 'Lean Leadership vs. Traditional Management',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Behavior', 'Traditional Management', 'Lean Leadership'],
          rows: [
            ['Problem-solving', 'Leader identifies and fixes problems', 'Leader coaches others to solve problems'],
            ['Visibility', 'Manages from the office with reports', 'Spends time at gemba observing and learning'],
            ['Standards', 'Sets standards; workers comply', 'Develops standards with workers; updates them through kaizen'],
            ['Failure response', 'Assigns blame; demands explanation', 'Asks why; focuses on system causes; supports learning'],
            ['Metrics focus', 'Results only (lagging indicators)', 'Process + results (leading and lagging indicators)'],
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'The concept of "servant leadership" aligns closely with Lean leadership — the leader\'s role is to serve the team by removing obstacles, providing resources, clarifying direction, and developing people\'s capabilities. This inverts the traditional hierarchy: leaders exist to support frontline workers, not the other way around.',
        },
        {
          type: 'heading' as const,
          text: 'Sustaining Gains Over Time',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Many improvement initiatives produce impressive initial results that gradually erode. Sustaining gains requires three things: updated standards that capture new methods, training that ensures all workers can follow the new standards, and regular auditing (through gemba walks and process audits) that confirms standards are being followed and identifies new opportunities.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The PDCA Cycle',
          text: 'The Plan-Do-Check-Act (PDCA) cycle, popularized by W. Edwards Deming, is the meta-framework for all Lean improvement. Plan the change; Do it on a small scale; Check whether it worked; Act to standardize (if successful) or revise (if not). Every kaizen, A3, and improvement activity follows this cycle — explicitly or implicitly.',
        },
        {
          type: 'list' as const,
          items: [
            'Acknowledge and celebrate improvements — recognition sustains motivation',
            'Review leading indicators weekly, not just results at month-end',
            'Include Lean adherence in performance reviews for all levels, including management',
            'Create communities of practice where problem-solvers share learning across the organization',
            'Invest in ongoing Lean education — early training alone is not sufficient',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'The Long View',
          text: "Toyota's competitive advantage is not any single Lean tool — it is 70 years of consistent leadership behavior, continuous improvement culture, and respect for people that cannot be copied in a year-long transformation project. Begin with urgency, act with patience, and commit for the long term.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'lean-m6-q1',
      type: 'multiple-choice' as const,
      question: 'What is the primary difference between daily kaizen and a kaizen event (blitz)?',
      options: [
        'Daily kaizen requires management approval; kaizen events are self-directed',
        'Daily kaizen involves small, immediate improvements by individuals; kaizen events are intensive cross-functional efforts over several days',
        'Kaizen events focus on equipment; daily kaizen focuses on administrative processes',
        'Daily kaizen is a Japanese concept; kaizen events were developed in the United States',
      ],
      correctIndex: 1,
      explanation: 'Daily (point) kaizen consists of small, immediate improvements made by individuals in their own work areas without formal events or extensive approval. Kaizen events (blitzes) are intensive, structured efforts involving cross-functional teams working for 3–5 days on a more significant improvement challenge.',
    },
    {
      id: 'lean-m6-q2',
      type: 'true-false' as const,
      question: "During a gemba walk, an effective Lean leader's primary role is to identify problems and immediately prescribe solutions to the workers.",
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: "False. Effective gemba walks involve asking questions and understanding, not jumping to solutions. The leader's role is to observe, listen, understand root causes, and coach workers in solving their own problems. Prescribing solutions bypasses the learning that builds organizational problem-solving capability.",
    },
    {
      id: 'lean-m6-q3',
      type: 'multiple-choice' as const,
      question: 'The A3 problem-solving tool is named after what?',
      options: [
        'A Toyota engineer named Akira Ando-3',
        "The third version of Toyota's quality assurance process",
        'An international paper size approximately 11×17 inches',
        'The three-step improvement process: Assess, Analyze, Act',
      ],
      correctIndex: 2,
      explanation: 'The A3 is named after the international A3 paper size (approximately 11×17 inches or 297×420 mm). Toyota required that an entire problem-solving story fit on a single A3 sheet, which forced concise thinking and clear visual communication.',
    },
    {
      id: 'lean-m6-q4',
      type: 'multiple-choice' as const,
      question: "According to Lean leadership principles, how should a manager respond when a worker's process error causes a quality defect?",
      options: [
        "Document the incident in the worker's personnel file to ensure accountability",
        'Ask why the error occurred and focus on improving the system to prevent recurrence',
        'Retrain the worker on the existing standard immediately',
        'Temporarily assign the worker to a simpler task until confidence is restored',
      ],
      correctIndex: 1,
      explanation: "Lean leaders focus on system causes rather than individual blame. Asking why — and following the 5-Why process to root causes — reveals whether the error was caused by an unclear standard, a poorly designed process, missing poka-yoke, or inadequate training. Fixing the system prevents the error from recurring with any worker.",
    },
    {
      id: 'lean-m6-q5',
      type: 'true-false' as const,
      question: 'In the PDCA cycle, the "Act" step means taking large-scale action to implement the solution organization-wide immediately after the Plan step.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. PDCA is sequential and iterative: Plan (define the change), Do (implement it on a small scale), Check (measure whether it worked), Act (standardize if successful, revise if not). The "Act" step comes after the Check step confirms results — and the cycle then repeats at a higher level of improvement.',
    },
  ],
};

export const leanManufacturingCourse: Course = {
  id: 'lean-manufacturing',
  track: 'lean-foundations',
  title: 'Principles of Lean Manufacturing',
  subtitle: 'From Toyota to Your Organization',
  description: 'Explore the foundational principles of Lean manufacturing rooted in the Toyota Production System. Learn to identify and eliminate waste, implement 5S, standardize work, and build a culture of continuous improvement.',
  status: 'available',
  estimatedHours: 6,
  color: '#6b8ed1',
  icon: '🏭',
  modules: [module1, module2, module3, module4, module5, module6],
};
