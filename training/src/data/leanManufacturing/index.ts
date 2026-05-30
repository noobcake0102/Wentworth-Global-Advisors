import type { Course, Module } from '../../types/course';

const module1: Module = {
  id: 'lean-origins-principles',
  number: 1,
  title: 'Origins of Lean & the Toyota Production System',
  description:
    'Trace the history of Lean thinking from Henry Ford to the Toyota Production System, and understand the philosophical foundation that distinguishes Lean from conventional mass production.',
  estimatedMinutes: 45,
  learningObjectives: [
    'Describe the historical development of Lean from craft production through mass production to TPS',
    "Explain Taiichi Ohno's core contributions to Lean thinking",
    'Distinguish between the mass production and Lean production paradigms',
    'Identify the two pillars of the Toyota Production System: Just-in-Time and Jidoka',
  ],
  lessons: [
    {
      id: 'production-history',
      title: 'From Craft to Mass Production to Lean',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: 'The history of manufacturing is a history of production system innovation — each era replacing the previous with something more efficient. Understanding this progression illuminates why Lean represents not just a collection of tools, but a fundamentally different way of organizing work and thinking about value.',
        },
        {
          type: 'heading',
          text: 'Craft Production: Before Mass Manufacturing',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Before industrialization, products were made by highly skilled craftspeople who controlled the entire production process — from raw material selection to finished product. Quality was high but production was slow, costs were high, and only the wealthy could afford complex goods. The carriage-maker, the blacksmith, the clockmaker each owned their complete process.',
        },
        {
          type: 'heading',
          text: 'Henry Ford and the Mass Production Revolution',
          level: 2,
        },
        {
          type: 'paragraph',
          text: "Henry Ford's Highland Park plant, which began producing the Model T in 1913, represented a revolutionary leap. Ford combined three innovations: dedicated machinery (tools designed to do one job very well), extreme standardization (parts interchangeable within and across vehicles), and moving assembly lines (work moved to workers rather than workers moving to work). The result: Model T production time dropped from 12.5 hours per car to 93 minutes.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Mass Production Trade-Off',
          text: 'Mass production achieved unprecedented cost reduction and volume, but at a price: inflexibility. Ford famously said customers could have any color they wanted "as long as it is black." Mass production systems optimize for high-volume, low-variety output — they struggle when variety increases or demand changes.',
        },
        {
          type: 'heading',
          text: 'Alfred Sloan and General Motors: Adding Variety',
          level: 2,
        },
        {
          type: 'paragraph',
          text: "Alfred Sloan at General Motors adapted Ford's system to offer product variety — multiple models at different price points, annual styling changes. He achieved this through a divisional structure (Chevrolet, Pontiac, Oldsmobile, Buick, Cadillac) and shared platforms. GM overtook Ford by the late 1920s. But Sloan's system still relied on large batch production, large inventories, and acceptance of defects as statistically inevitable.",
        },
        {
          type: 'heading',
          text: "Toyota's Impossible Challenge",
          level: 2,
        },
        {
          type: 'paragraph',
          text: "In 1950, Toyota engineer Eiji Toyoda visited Ford's River Rouge plant, then the most productive manufacturing facility in the world. He returned to Japan with a clear-eyed assessment: Toyota could not replicate the mass production model. Japan's domestic market was too small for the volumes that justified dedicated machinery. Toyota needed to produce many models in small quantities, with limited capital, on equipment shared across products.",
        },
        {
          type: 'paragraph',
          text: "This constraint became the seed of innovation. Taiichi Ohno, Toyota's chief engineer, spent the next two decades developing what became the Toyota Production System — a system designed to produce multiple models efficiently in small batches, eliminate waste at every turn, and respond quickly to changing demand.",
        },
        {
          type: 'key-terms',
          terms: [
            {
              term: 'Craft Production',
              definition:
                'Pre-industrial manufacturing where skilled individuals control the complete production process from raw material to finished product.',
            },
            {
              term: 'Mass Production',
              definition:
                'Manufacturing system using dedicated machinery, standardized parts, and moving assembly lines to produce high volumes of identical products at low cost.',
            },
            {
              term: 'Toyota Production System (TPS)',
              definition:
                'The manufacturing philosophy and set of practices developed by Toyota, centered on eliminating waste and maximizing flow. The foundation of modern Lean manufacturing.',
            },
          ],
        },
      ],
    },
    {
      id: 'tps-pillars',
      title: 'The Two Pillars: Just-in-Time and Jidoka',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'The Toyota Production System is often represented as a "house" with two foundational pillars supporting the roof of best quality, lowest cost, and shortest lead time. These two pillars — Just-in-Time and Jidoka — are the structural principles from which all Lean tools and practices derive.',
        },
        {
          type: 'heading',
          text: 'Pillar 1: Just-in-Time (JIT)',
          level: 2,
        },
        {
          type: 'paragraph',
          text: "Just-in-Time means producing and delivering only what is needed, when it is needed, in the quantity needed. It is the antithesis of mass production's \"push\" logic, which produces as much as possible and pushes it downstream into inventory buffers. JIT uses a \"pull\" logic: nothing is produced upstream until the downstream step signals that it needs it.",
        },
        {
          type: 'paragraph',
          text: "JIT requires three prerequisites that took Ohno years to develop: the ability to change over machines quickly between products (SMED — Single Minute Exchange of Die), the ability to level production across the day rather than batch large quantities (heijunka), and a signaling system to communicate what to produce and when (Kanban).",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'JIT in Practice: The Supermarket Model',
          text: "Ohno was inspired by American supermarkets. Shoppers take what they need from shelves; staff replenish shelves only when stocks drop to a trigger point. No one overproduces — no one stockpiles two months of cereal on shelves. The supermarket naturally balances supply and demand through a simple replenishment signal. Ohno applied this logic to manufacturing: each workstation is a \"supermarket\" that replenishes only when the downstream customer takes from it.",
        },
        {
          type: 'heading',
          text: 'Pillar 2: Jidoka (Autonomation)',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Jidoka — often translated as "automation with a human touch" or "autonomation" — means building quality into the process rather than inspecting quality in at the end. Machines and workers are empowered to stop production immediately when a defect or abnormality is detected. This prevents defective units from flowing to the next step.',
        },
        {
          type: 'paragraph',
          text: "Toyota's looms in the early 20th century automatically stopped when a thread broke — this ancestor of Jidoka prevented defective fabric from being produced. Applied to manufacturing, Jidoka means: machines detect problems and stop; workers can pull an Andon cord to stop the line; the problem is addressed immediately before production resumes.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why Stopping Is Faster',
          text: 'The counterintuitive insight of Jidoka: stopping production when a defect occurs actually increases output over time. If defects flow through, they compound — a defective part installed in a subassembly means the entire subassembly must be reworked. Catching defects at the source eliminates all downstream rework and prevents defective products from reaching customers.',
        },
        {
          type: 'table',
          headers: ['Characteristic', 'Mass Production', 'Toyota Production System'],
          rows: [
            ['Production logic', 'Push — make as much as possible', 'Pull — make only what is needed'],
            ['Quality approach', 'Inspect defects out at the end', 'Build quality in; stop at defect'],
            ['Inventory', 'Large buffers between steps', 'Minimal WIP; one-piece flow'],
            ['Batch size', 'Large batches for efficiency', 'Small batches or single pieces'],
            ['Machine setup', 'Infrequent, long changeovers', 'Rapid changeover (SMED)'],
            ['Worker role', 'Narrow, repetitive tasks', 'Multi-skilled, problem-solving'],
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1lm1',
      type: 'multiple-choice',
      question:
        "What production constraint did Toyota face in 1950 that prevented it from copying Ford's mass production model?",
      options: [
        'Toyota lacked skilled engineers',
        "Japan's small domestic market made high-volume, single-model production unviable",
        'Toyota could not afford modern machinery',
        'Japanese workers refused assembly line work',
      ],
      correctIndex: 1,
      explanation:
        "Japan's small domestic market could not absorb the volumes that justified Ford's dedicated, single-model machinery. Toyota needed to produce multiple models in small quantities on shared equipment — the constraint that drove Ohno to invent TPS.",
    },
    {
      id: 'q2lm1',
      type: 'multiple-choice',
      question: 'What is Jidoka, and what problem does it solve?',
      options: [
        'A scheduling system that ensures parts arrive just when needed',
        'Autonomation — machines stop automatically when defects occur, preventing defective units from flowing downstream',
        'A visual management system using colored lights and signs',
        'A quality inspection process at the end of the production line',
      ],
      correctIndex: 1,
      explanation:
        'Jidoka means building quality into the process by empowering machines and workers to stop production immediately when a defect or abnormality is detected. This prevents defects from flowing downstream and compounding into larger, more expensive problems.',
    },
    {
      id: 'q3lm1',
      type: 'true-false',
      question:
        'Just-in-Time production uses a "push" logic — producing as much as possible and pushing output downstream into inventory buffers.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        'False. JIT uses a "pull" logic — nothing is produced upstream until the downstream step signals that it needs material. This is the opposite of mass production\'s push logic, which schedules production based on forecasts rather than actual downstream demand.',
    },
    {
      id: 'q4lm1',
      type: 'multiple-choice',
      question: "Which American retail concept inspired Taiichi Ohno's Kanban replenishment system?",
      options: [
        'Department store inventory management',
        'The supermarket replenishment model',
        'Gas station just-in-time fuel delivery',
        'Mail-order catalog fulfillment',
      ],
      correctIndex: 1,
      explanation:
        "Ohno was inspired by American supermarkets, where staff replenish shelves only when stocks drop to a trigger level — responding to actual consumption rather than a forecast. He applied this pull-replenishment logic to factory workstations, creating the Kanban system.",
    },
    {
      id: 'q5lm1',
      type: 'multiple-choice',
      question:
        "What were the three key innovations Henry Ford combined at Highland Park that defined mass production?",
      options: [
        'Kanban, 5S, and standardized work',
        'Dedicated machinery, standardized parts, and moving assembly lines',
        'Pull production, Jidoka, and heijunka',
        'Statistical quality control, batch production, and end-of-line inspection',
      ],
      correctIndex: 1,
      explanation:
        "Ford's mass production system combined dedicated machinery (tools designed for one job), extreme standardization (interchangeable parts), and moving assembly lines (work comes to workers). Together these reduced Model T assembly time from 12.5 hours to 93 minutes.",
    },
  ],
};

const module2: Module = {
  id: 'five-lean-principles',
  number: 2,
  title: 'The Five Lean Principles',
  description:
    "Master Womack and Jones's five foundational Lean principles — Value, Value Stream, Flow, Pull, and Perfection — the framework that transforms Lean from a set of tools into a management system.",
  estimatedMinutes: 50,
  learningObjectives: [
    "Define value from the customer's perspective and explain why customer-defined value matters",
    'Construct a value stream map to identify value-added and non-value-added activities',
    'Explain flow and describe the conditions that enable one-piece flow',
    'Distinguish between push and pull production systems',
    'Apply the concept of perfection as a north star for continuous improvement',
  ],
  lessons: [
    {
      id: 'value-and-value-stream',
      title: 'Principle 1 & 2: Value and the Value Stream',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'In 1996, James Womack and Daniel Jones distilled the essence of Lean thinking into five principles in their landmark book "Lean Thinking." These principles provide the strategic framework within which all Lean tools operate. Understanding them transforms Lean from a collection of techniques into a coherent management philosophy.',
        },
        {
          type: 'heading',
          text: "Principle 1: Define Value from the Customer's Perspective",
          level: 2,
        },
        {
          type: 'paragraph',
          text: "The starting point for Lean is a deceptively simple question: what does the customer actually value? Not what the organization thinks the customer values, not what is easiest to produce, but what the customer would willingly pay for. Value is always defined by the end customer — and it is specified in terms of a specific product or service with a specific capability, offered at a specific price, at a specific time.",
        },
        {
          type: 'paragraph',
          text: "This customer-centric definition of value has a powerful implication: any activity that does not contribute to this specific customer value is, by definition, waste — regardless of how much effort or expertise it requires. A beautifully engineered feature that customers don't use is waste. A quality control step that catches defects already built into the product is waste — the real waste is making the defects in the first place.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: "The Producer's Trap",
          text: "Most organizations define value from the producer's perspective — what they're good at making, what's convenient to produce, what existing assets can generate. This producer-centric view leads to offering customers what the company can make rather than what customers actually want. Lean begins with the discipline of defining value from the outside in, not the inside out.",
        },
        {
          type: 'heading',
          text: 'Principle 2: Identify the Value Stream',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'The value stream is the complete set of activities required to bring a specific product or service from raw material or concept through to the customer. It encompasses not just one department or process, but the entire end-to-end flow across all functions and, often, across multiple organizations.',
        },
        {
          type: 'paragraph',
          text: 'Value Stream Mapping (VSM) is the primary tool for making the value stream visible. By mapping every step in the production or service process — and measuring the time, inventory, and information flow at each step — teams can see which steps add value, which steps are necessary but non-value-added (required by regulation, equipment, or current design but not directly valued by the customer), and which steps are pure waste that can be eliminated immediately.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Three Categories of Activity',
          text: "Value Stream Mapping reveals three categories: Value-Added (the customer would pay for this — typically 5-10% of total lead time), Necessary Non-Value-Added (required by current technology, regulation, or process design but not valued by the customer — could be reduced over time), and Pure Waste (adds no value, is not required — can be eliminated now). Lean's first target is pure waste.",
        },
        {
          type: 'table',
          headers: ['Activity Category', 'Customer Would Pay?', 'Required?', 'Action'],
          rows: [
            ['Value-Added', 'Yes', 'Yes', 'Protect and optimize'],
            ['Necessary Non-Value-Added', 'No', 'Yes (currently)', 'Reduce over time'],
            ['Pure Waste (Muda)', 'No', 'No', 'Eliminate immediately'],
          ],
        },
      ],
    },
    {
      id: 'flow-pull-perfection',
      title: 'Principles 3, 4 & 5: Flow, Pull, and Perfection',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'Once value is defined and the value stream is mapped, the work of implementing Lean begins with enabling flow, establishing pull, and pursuing perfection.',
        },
        {
          type: 'heading',
          text: 'Principle 3: Make Value Flow Without Interruptions',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Flow means that products and services move through the value stream without stopping — no waiting, no queuing, no batching, no rework. In a true flow system, once work starts on a unit, it continues moving forward until it reaches the customer. The ideal is one-piece flow: one unit at a time, moving continuously from step to step.',
        },
        {
          type: 'paragraph',
          text: 'Achieving flow requires eliminating the conditions that cause work to stop: large batches that create queues, quality defects that require rework, machine breakdowns that interrupt production, and functional silos that create handoff delays. Lean tools like cellular manufacturing, standardized work, Total Productive Maintenance, and Jidoka all directly enable flow.',
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'The Flow vs. Batch Experiment',
          text: 'Classic Lean demonstration: fold, stuff, stamp, and seal 10 letters using batch processing (complete all folding, then all stuffing, etc.) versus one-piece flow (fold-stuff-stamp-seal each letter before starting the next). One-piece flow consistently delivers the first completed letter to the customer faster, even though total time to complete all 10 may be similar. Flow optimizes for customer delivery speed, not internal efficiency.',
        },
        {
          type: 'heading',
          text: 'Principle 4: Let the Customer Pull Value',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Pull means that nothing is produced until a downstream step (or the customer) requests it. This is the inverse of conventional "push" scheduling, where production is planned in advance based on forecasts and output is pushed downstream regardless of whether it is needed. Pull systems use actual consumption as the production signal, not forecasted demand.',
        },
        {
          type: 'paragraph',
          text: 'The Kanban system is the primary Lean pull mechanism: a physical or electronic signal that authorizes production of a specific quantity when a downstream step consumes from a standard inventory location. When the downstream step takes a part, the empty location signals upstream to produce a replacement. Production never exceeds actual consumption.',
        },
        {
          type: 'heading',
          text: 'Principle 5: Pursue Perfection',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'The fifth principle is the fuel that drives continuous improvement: pursue perfection. As the first four principles are implemented and wastes are removed, practitioners expose previously hidden problems and new improvement opportunities. Perfection in Lean terms means a product that is exactly what the customer wants, delivered immediately, at zero waste. This is an asymptotic goal — organizations move toward it continuously but never fully arrive.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Perfection as a Direction, Not a Destination',
          text: "The power of perfection as a principle is that it eliminates the natural tendency to declare victory and stop improving. When a team reduces lead time from 30 days to 10 days, the question is not \"great, we're done\" but \"why does it still take 10 days? What would zero waste look like?\" This keeps improvement energy focused and prevents the complacency that erodes gains.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1lm2',
      type: 'multiple-choice',
      question:
        'According to the first Lean principle, who defines what is "value" in a product or service?',
      options: [
        'The engineering team based on technical specifications',
        'Management based on cost analysis',
        'The end customer, in terms of specific capability at a specific price and time',
        'Industry standards bodies and certification organizations',
      ],
      correctIndex: 2,
      explanation:
        "Value is always defined by the end customer — not by the producer's capabilities, costs, or preferences. It is specified as a specific product or service with specific capability, offered at a specific price, at a specific time. Anything not meeting this definition from the customer's perspective is waste.",
    },
    {
      id: 'q2lm2',
      type: 'multiple-choice',
      question: 'What are the three categories of activity revealed by Value Stream Mapping?',
      options: [
        'Efficient, inefficient, and unnecessary',
        'Value-Added, Necessary Non-Value-Added, and Pure Waste',
        'Direct labor, indirect labor, and overhead',
        'Customer-facing, internal, and supplier-driven',
      ],
      correctIndex: 1,
      explanation:
        "VSM reveals three categories: Value-Added (customer would pay — typically 5-10% of lead time), Necessary Non-Value-Added (required by current process design but not valued by the customer — reduce over time), and Pure Waste/Muda (no value, not required — eliminate immediately). Lean's first attack is always on pure waste.",
    },
    {
      id: 'q3lm2',
      type: 'true-false',
      question:
        'In a pull production system, output is scheduled based on demand forecasts and pushed downstream into inventory buffers.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        "False. Pull systems use actual consumption as the production signal — nothing is produced until a downstream step or the customer requests it. Push systems use demand forecasts and produce regardless of whether downstream steps are ready to receive material. Kanban is the primary Lean pull mechanism.",
    },
    {
      id: 'q4lm2',
      type: 'multiple-choice',
      question:
        'In the classic "fold, stuff, stamp, seal" letters demonstration comparing batch vs. one-piece flow, what does one-piece flow optimize for?',
      options: [
        'Total completion time for all letters',
        'Worker efficiency and ergonomics',
        'Speed of delivery of the first completed letter to the customer',
        'Minimum total processing time per worker',
      ],
      correctIndex: 2,
      explanation:
        'One-piece flow delivers the first completed letter to the customer faster, even if total completion time for all letters is similar. Flow optimizes for customer delivery speed (lead time), not internal batch processing efficiency — a fundamental shift in what the system is designed to maximize.',
    },
    {
      id: 'q5lm2',
      type: 'multiple-choice',
      question:
        'Why is "Perfection" included as the fifth Lean principle if it is by definition unachievable?',
      options: [
        'It is a motivational tool with no practical application',
        "It eliminates the tendency to declare victory and stop improving, keeping improvement continuous",
        'It is a benchmark used only for external certification purposes',
        'It was included for symmetry with the other four principles',
      ],
      correctIndex: 1,
      explanation:
        "Perfection — zero waste, exactly what the customer wants, delivered instantly — serves as a north star that prevents complacency. Without it, teams achieve an improvement and stop. With it, every improvement reveals the next opportunity. It is a direction, not a destination, and that distinction keeps improvement momentum alive.",
    },
    {
      id: 'q6lm2',
      type: 'true-false',
      question:
        'The Lean value stream includes only the internal manufacturing steps within one organization.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        'False. The value stream encompasses the complete end-to-end flow from raw material or concept to the customer — crossing departments, functions, and often multiple organizations including suppliers and distributors. Mapping only internal steps produces an incomplete picture that misses major sources of waste and delay.',
    },
  ],
};

const module3: Module = {
  id: 'lean-tools-5s-visual',
  number: 3,
  title: 'Lean Tools: 5S, Visual Management & Standardized Work',
  description:
    'Learn the three foundational Lean workplace tools — 5S, Visual Management, and Standardized Work — that create the stable, disciplined foundation on which all advanced Lean practices depend.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Implement all five steps of 5S in a work environment',
    'Design visual management systems that make abnormalities immediately obvious',
    'Write effective standardized work documentation for a repeatable process',
    'Explain why these three tools are prerequisites for higher-level Lean implementation',
  ],
  lessons: [
    {
      id: '5s-system',
      title: '5S: The Foundation of Workplace Organization',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph',
          text: '5S is a systematic methodology for organizing the work environment to reduce waste, improve safety, and create the visual discipline that enables all other Lean improvements. The name comes from five Japanese words: Seiri, Seiton, Seiso, Seiketsu, and Shitsuke — translated into English as Sort, Set in Order, Shine, Standardize, and Sustain.',
        },
        {
          type: 'heading',
          text: 'Step 1: Sort (Seiri)',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Sort means removing everything from the work area that is not needed for current operations. The test is simple: does this item contribute to current production or service? If not, it leaves the area — either relocated, stored elsewhere, or discarded. Red tagging is the Sort tool: any item whose status is unclear receives a red tag. Tagged items are held in a "red tag area" for a defined period; if no one claims them for use, they are removed.',
        },
        {
          type: 'heading',
          text: 'Step 2: Set in Order (Seiton)',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Set in Order means arranging everything that remains so it can be found, used, and returned effortlessly. The principle: a place for everything, and everything in its place. Set in Order eliminates motion waste — the time spent searching for tools, materials, or information. The standard: any worker, on any shift, should be able to find any item within 30 seconds without asking anyone.',
        },
        {
          type: 'heading',
          text: 'Steps 3-5: Shine, Standardize, Sustain',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Shine (Seiso): Clean the work area to a "like-new" condition, and maintain that cleanliness daily. Cleaning is inspection — it reveals equipment problems (oil leaks, worn parts, loose connections) before they become breakdowns.',
            'Standardize (Seiketsu): Create the standards, procedures, and visual controls that maintain the gains of the first three Ss. Standardize answers: what does "good" look like? How do we know when something is out of place? 5S checklists, shadow boards, color coding, and floor markings are Standardize tools.',
            'Sustain (Shitsuke): Build the habits, audits, and accountability systems that prevent regression. The hardest S — 5S gains erode within weeks without Sustain discipline. Regular audits with scoring, leader standard work that includes 5S verification, and making 5S an expected standard rather than an "initiative" are the keys to sustaining.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The 5S Failure Mode',
          text: 'The most common 5S failure: treating it as a one-time "big clean-up" event rather than a permanently maintained system. An organization that does a 5S event and then lets the area revert within a month has spent effort with no lasting benefit. Sustain is the most important S — without it, the other four create no lasting value.',
        },
      ],
    },
    {
      id: 'visual-management-std-work',
      title: 'Visual Management and Standardized Work',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph',
          text: 'Visual Management and Standardized Work are the next layer of the Lean foundation. Visual Management makes the status of every process immediately readable to any observer. Standardized Work captures the best-known method for performing a task and makes it the consistent practice.',
        },
        {
          type: 'heading',
          text: 'Visual Management: Making Problems Visible',
          level: 2,
        },
        {
          type: 'paragraph',
          text: "Visual Management is the practice of organizing the workplace so that its status is immediately obvious without verbal communication, reports, or expertise. A well-designed visual work environment communicates: what belongs here, what doesn't belong, what the standard is, and whether we are meeting that standard — all at a glance.",
        },
        {
          type: 'list',
          items: [
            'Andon boards: Real-time production status displays showing actual vs. target output, machine status, and problem alerts',
            'Kanban cards and boards: Signal the status of work in process and authorize production replenishment',
            'Floor markings: Define material locations, walking paths, equipment boundaries, and hazard zones',
            'Shadow boards: Outlines of tools at their storage location — instantly reveals what is missing',
            'Min/max inventory indicators: Red/green zones on storage locations show when inventory is within acceptable bounds',
            'Standard work displays: Posted at the workstation, showing the correct sequence and timing for each operation',
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Visual Factory Test',
          text: 'Walk through a well-implemented visual factory and ask: without speaking to anyone, can you tell whether production is on track? Where everything belongs? Whether machines are running or stopped? Whether inventory levels are normal? If you can answer all these questions in under 60 seconds with no prior knowledge, the visual management system is working.',
        },
        {
          type: 'heading',
          text: 'Standardized Work: Capturing the Best Method',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Standardized Work is the documented, agreed-upon method for performing a repeatable task. It captures three elements: Takt Time (the rate at which the process must produce to meet demand), Work Sequence (the specific order of steps the worker follows), and Standard Work-in-Process (the minimum inventory required to maintain flow).',
        },
        {
          type: 'paragraph',
          text: 'Standardized Work is the baseline from which improvement is measured and from which Kaizen begins. You cannot improve what is not standardized. If every operator performs a task differently, any improvement implemented applies to only one variant — and it is impossible to tell whether a change improved the process or just changed which variant was used.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Who Writes Standardized Work?',
          text: "Effective standardized work is written by the people who do the work, not by engineers or managers watching from a distance. Workers know the nuances, the informal tricks that prevent defects, the timing that experience has optimized. Management's role is to provide the framework and ensure standards are followed — workers' role is to define the best current method and then improve it continuously.",
        },
        {
          type: 'table',
          headers: ['Tool', 'Primary Purpose', 'What It Prevents'],
          rows: [
            ['5S', 'Organize the work environment', 'Motion waste, searching, safety incidents, hidden problems'],
            [
              'Visual Management',
              'Make process status immediately visible',
              'Communication delays, hidden abnormalities, slow problem response',
            ],
            [
              'Standardized Work',
              'Capture and apply the best current method',
              'Variation, defects, knowledge loss from turnover, inability to improve consistently',
            ],
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1lm3',
      type: 'multiple-choice',
      question:
        'What is the standard used in "Set in Order" to determine whether item placement is effective?',
      options: [
        'Items must be labeled and documented in an inventory management system',
        'Any worker on any shift can find any item in under 30 seconds without asking',
        'Managers must approve the placement of all items before finalizing',
        'Items must be stored in locked cabinets for security purposes',
      ],
      correctIndex: 1,
      explanation:
        '"Set in Order" effectiveness is measured by whether any worker, on any shift, can find any item within 30 seconds without asking anyone. This standard ensures the placement serves all users, not just those who set it up — a critical test of whether the system is truly visual and intuitive.',
    },
    {
      id: 'q2lm3',
      type: 'multiple-choice',
      question:
        'Why is "Shine" (the third S) considered an inspection activity as well as a cleaning activity?',
      options: [
        'Cleaning records are used in quality audits and certification reviews',
        'Cleaning reveals equipment problems — oil leaks, worn parts, loose connections — before they cause breakdowns',
        'Shining surfaces allows visual inspection of reflections for product defects',
        'Clean areas are formally audited by quality inspectors quarterly',
      ],
      correctIndex: 1,
      explanation:
        "Cleaning a machine to like-new condition forces the cleaner to closely examine every surface. This reveals oil leaks, worn components, loose fasteners, and cracks that would otherwise go unnoticed until they cause a breakdown. Shine makes equipment problems visible before they become failures — it is preventive maintenance through cleaning.",
    },
    {
      id: 'q3lm3',
      type: 'true-false',
      question:
        'Standardized Work is most effective when written by engineers who can observe the process objectively rather than by the workers who perform it.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        "False. Standardized work is most effective when written by the workers who perform the task. They know the nuances, timing, and informal methods that prevent defects and optimize flow. Engineers provide the framework and structure; workers define the best current method — then management ensures that standard is followed and workers continually improve it.",
    },
    {
      id: 'q4lm3',
      type: 'multiple-choice',
      question: 'What are the three elements captured in Standardized Work documentation?',
      options: [
        'Quality specs, production targets, and historical error rates',
        'Takt Time, Work Sequence, and Standard Work-in-Process',
        'Machine settings, operator training records, and inspection criteria',
        'Customer requirements, supply chain specifications, and output metrics',
      ],
      correctIndex: 1,
      explanation:
        'Standardized Work captures three elements: Takt Time (the rate at which the process must produce to meet customer demand), Work Sequence (the specific order of steps the worker follows), and Standard Work-in-Process (the minimum inventory required to maintain smooth flow through the operation).',
    },
    {
      id: 'q5lm3',
      type: 'multiple-choice',
      question:
        'What is the most common reason 5S gains erode within weeks of implementation?',
      options: [
        'Workers actively resist the organizational change',
        'Management removes resources after the initial event investment',
        'Sustain systems — audits, accountability, leader standard work — are not implemented',
        'The Sort step is not thorough enough in the first pass',
      ],
      correctIndex: 2,
      explanation:
        'The most common 5S failure is treating it as a one-time event rather than a permanently maintained system. Without Sustain mechanisms — regular audits with scoring, leader standard work that includes 5S verification, and embedded accountability — areas naturally revert to previous states within weeks as daily pressures take priority.',
    },
  ],
};

const module4: Module = {
  id: 'jit-kanban',
  number: 4,
  title: 'Just-in-Time & Kanban Systems',
  description:
    'Understand Just-in-Time production as a complete management system, and learn to design and implement Kanban — the signal system that makes pull production practical in real operations.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Explain the three prerequisites for Just-in-Time implementation: SMED, heijunka, and Kanban',
    'Calculate Kanban quantities for a realistic production scenario',
    'Distinguish between production Kanban and withdrawal Kanban',
    'Describe how heijunka (production leveling) enables both JIT and flow simultaneously',
  ],
  lessons: [
    {
      id: 'jit-prerequisites',
      title: 'The Three Prerequisites of JIT',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'Just-in-Time is not a single technique — it is a production system that requires three enabling capabilities to function. Without these prerequisites in place, attempts to implement JIT result in shortages, expediting, and chaos rather than smooth flow.',
        },
        {
          type: 'heading',
          text: 'Prerequisite 1: SMED — Rapid Changeover',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Single Minute Exchange of Die (SMED), developed by Shigeo Shingo, is the methodology for reducing machine changeover time to less than 10 minutes (a "single digit" number of minutes). In mass production, long changeover times justify large batch sizes — if changing a press tool takes 8 hours, the economics favor running one product for a week before changing. JIT requires small batches; small batches require fast changeovers.',
        },
        {
          type: 'paragraph',
          text: 'SMED works by separating "internal" setup (work that can only be done while the machine is stopped) from "external" setup (work that can be done while the machine is still running), then systematically converting internal setup to external, and streamlining both. Changeovers that took 4 hours are regularly reduced to under 10 minutes through SMED, enabling production of many different products in small quantities without economic penalty.',
        },
        {
          type: 'heading',
          text: 'Prerequisite 2: Heijunka — Production Leveling',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Heijunka means leveling the production schedule by both volume and mix across the production period. Rather than producing all of Product A on Monday, all of Product B on Tuesday, and all of Product C on Wednesday, heijunka sequences: A-B-C-A-B-C-A-B-C throughout each day. This leveling is what enables upstream suppliers to produce at a steady rate (supporting JIT) while still serving variable downstream demand.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Why Leveling Matters',
          text: 'Without heijunka, demand variability amplifies as it travels upstream — the "bullwhip effect." A small variation in final customer demand becomes large variation at each upstream step, causing overproduction and stockouts alternately. Heijunka absorbs demand variability at the final assembly level, feeding upstream with a smooth, predictable signal that JIT can serve without excessive safety stock.',
        },
        {
          type: 'heading',
          text: 'Prerequisite 3: Kanban — The Pull Signal',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Kanban (Japanese for "signboard" or "card") is the information system that makes pull production operational. A Kanban card or electronic signal authorizes the production or movement of a specific quantity of a specific item when a downstream location consumes from a standard stock point. Without Kanban, pull production has no mechanism — it remains a concept rather than a functioning system.',
        },
      ],
    },
    {
      id: 'kanban-design',
      title: 'Designing and Implementing Kanban Systems',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph',
          text: 'Kanban systems have specific design parameters that must be calculated from actual process data. Improvised Kanban systems without proper calculation produce either shortages or excess inventory — the same problems they are meant to solve.',
        },
        {
          type: 'heading',
          text: 'Types of Kanban',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Production Kanban: Authorizes a producing process to make a specific item and quantity. Triggered when the downstream "supermarket" stock falls to the reorder point.',
            'Withdrawal (Transport) Kanban: Authorizes movement of a specific item and quantity from one location (typically upstream stock) to a downstream location. Used at the point of consumption.',
            'Supplier Kanban: External version that signals a supplier to deliver material — extending the pull system beyond the factory walls.',
            'Electronic Kanban (e-Kanban): Digital signal replacing physical cards — used in high-volume, complex environments where physical cards become impractical to manage.',
          ],
        },
        {
          type: 'heading',
          text: 'Calculating Kanban Quantity',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'The number of Kanban cards in a system determines the maximum work-in-process inventory. The basic formula: Number of Kanban = (Daily Demand × Replenishment Lead Time × (1 + Safety Factor)) ÷ Container Quantity. This calculation ensures enough Kanban exist to cover demand during the replenishment cycle without excess inventory accumulating.',
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Kanban Calculation Example',
          text: 'A downstream workstation consumes 200 parts per day. Replenishment lead time (signal to receipt of parts) is 0.5 days. Safety factor is 10% (0.1). Container quantity is 50 parts. Number of Kanban = (200 × 0.5 × 1.1) ÷ 50 = 110 ÷ 50 = 2.2 → round up to 3 Kanban. Maximum authorized WIP = 3 × 50 = 150 parts. No more inventory than this can accumulate in the system.',
        },
        {
          type: 'heading',
          text: 'Improving Kanban Systems Over Time',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'A fundamental Lean principle: as process capability improves (lead times shorten, quality improves, changeover times shrink), Kanban quantities should be reduced. Removing Kanban cards from the system forces the process to operate with less WIP inventory, which surfaces any remaining problems. This deliberate tightening of the system — progressively removing inventory to expose waste — is a primary Lean improvement mechanism.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Kanban as a Continuous Improvement Tool',
          text: "Taiichi Ohno described inventory as water that hides the rocks of process problems. By progressively lowering the water level (reducing Kanban quantities), you expose rocks (problems) that must be fixed. Each round of problem-solving and Kanban reduction moves the system closer to one-piece flow. The goal is not to have an efficient Kanban system — it is to have no Kanban at all (one-piece flow with zero WIP buffer).",
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1lm4',
      type: 'multiple-choice',
      question: 'What is SMED and why is it a prerequisite for Just-in-Time production?',
      options: [
        'Statistical Method for Error Detection — prevents defects from accumulating in JIT environments',
        'Single Minute Exchange of Die — rapid changeover enables economical small-batch production, which JIT requires',
        'Standard Manufacturing Efficiency Diagram — a VSM tool used in JIT scheduling',
        'Sequential Machine Equipment Deployment — a scheduling method for pull systems',
      ],
      correctIndex: 1,
      explanation:
        'SMED (Single Minute Exchange of Die) reduces machine changeover time to under 10 minutes. JIT requires small-batch production of many product varieties. Without fast changeovers, small batches are economically prohibitive — each product change would consume hours of machine time, making the economics of JIT impossible to sustain.',
    },
    {
      id: 'q2lm4',
      type: 'multiple-choice',
      question:
        'Using the Kanban formula, calculate the number of Kanban needed: 200 parts/day demand, 0.5 day replenishment lead time, 10% safety factor, 50 parts per container.',
      options: ['2 Kanban', '3 Kanban', '4 Kanban', '5 Kanban'],
      correctIndex: 1,
      explanation:
        'Number of Kanban = (Daily Demand × Lead Time × (1 + Safety Factor)) ÷ Container Quantity = (200 × 0.5 × 1.1) ÷ 50 = 110 ÷ 50 = 2.2 → round up to 3 Kanban. Maximum authorized WIP = 3 × 50 = 150 parts. Always round up to avoid shortages.',
    },
    {
      id: 'q3lm4',
      type: 'true-false',
      question:
        'Heijunka (production leveling) produces all of one product type before switching to the next, maximizing batch efficiency.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        'False. Heijunka levels production by mix and volume — sequencing multiple product types throughout the day (A-B-C-A-B-C) rather than batching all of one type together. This leveling enables JIT by creating a steady, predictable production signal for upstream processes and absorbs customer demand variability at the point of final assembly.',
    },
    {
      id: 'q4lm4',
      type: 'multiple-choice',
      question:
        'Why do Lean practitioners deliberately remove Kanban cards from a functioning system?',
      options: [
        'To reduce administrative overhead from managing too many physical cards',
        'To force the system to operate with less WIP, deliberately exposing hidden process problems',
        'To signal that a product variant is being phased out or discontinued',
        'To comply with ISO documentation reduction requirements',
      ],
      correctIndex: 1,
      explanation:
        "Removing Kanban cards reduces authorized WIP, forcing the process to surface any problems that were previously cushioned by excess inventory. This deliberate \"lowering the water level\" exposes the rocks — process problems — that must be solved to maintain flow. It is a primary continuous improvement mechanism: expose, fix, reduce further.",
    },
    {
      id: 'q5lm4',
      type: 'multiple-choice',
      question:
        'What is the difference between a Production Kanban and a Withdrawal Kanban?',
      options: [
        'Production Kanban is used for finished goods; Withdrawal Kanban is for raw materials only',
        'Production Kanban authorizes making a specific quantity; Withdrawal Kanban authorizes moving a specific quantity between locations',
        'Production Kanban is always physical; Withdrawal Kanban is always electronic',
        'There is no meaningful operational difference — both authorize the same production action',
      ],
      correctIndex: 1,
      explanation:
        'A Production Kanban authorizes an upstream process to make a specific item and quantity. A Withdrawal (Transport) Kanban authorizes movement of a specific item from one location to another — typically from a supermarket stock point to the point of use. Both work together in a two-card Kanban system to control the flow of material and information.',
    },
  ],
};

const module5: Module = {
  id: 'tpm-quality-at-source',
  number: 5,
  title: 'Total Productive Maintenance & Quality at the Source',
  description:
    'Learn how Total Productive Maintenance eliminates equipment losses and how quality-at-the-source principles build defect prevention into every operation — creating the reliable foundation that Lean flow requires.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Calculate Overall Equipment Effectiveness (OEE) and identify the six major equipment losses',
    'Describe the eight pillars of Total Productive Maintenance',
    'Explain the Poka-Yoke (error-proofing) concept and its three levels',
    'Apply quality-at-the-source principles to prevent defect propagation',
  ],
  lessons: [
    {
      id: 'tpm-oee',
      title: 'Total Productive Maintenance and OEE',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'Lean flow depends on reliable equipment. A machine that breaks down unexpectedly, runs slowly, or produces defective output disrupts JIT production immediately — there is no inventory buffer to absorb the disruption. Total Productive Maintenance (TPM), developed by Seiichi Nakajima at the Japan Institute of Plant Maintenance in the 1970s, addresses equipment reliability as a strategic priority rather than a reactive maintenance cost.',
        },
        {
          type: 'heading',
          text: 'Overall Equipment Effectiveness (OEE)',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'OEE is the primary TPM metric — a composite measure of how effectively a manufacturing operation is run relative to its full potential. OEE = Availability × Performance × Quality. A world-class OEE benchmark is 85% for discrete manufacturing; most facilities starting TPM are in the 40-60% range, revealing enormous untapped capacity hidden inside existing equipment.',
        },
        {
          type: 'table',
          headers: ['OEE Factor', 'What It Measures', 'Losses It Captures'],
          rows: [
            [
              'Availability',
              'Actual run time vs. planned run time',
              'Unplanned breakdowns, planned downtime, changeover and setup time',
            ],
            [
              'Performance',
              'Actual production rate vs. designed rate',
              'Slow running, minor stoppages, idling and empty running',
            ],
            [
              'Quality',
              'Good units produced vs. total units started',
              'Defects requiring rework, scrap, and startup yield losses',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'OEE Calculation Walkthrough',
          text: 'Machine planned for 8 hours. Unplanned downtime: 1 hour → Availability = 7/8 = 87.5%. Design rate: 100 parts/hour; actual rate: 80 parts/hour → Performance = 80%. Of 560 parts produced, 532 pass quality inspection → Quality = 532/560 = 95%. OEE = 87.5% × 80% × 95% = 66.5%. This machine produces only 66.5% of its theoretical maximum output — 33.5% of capacity is lost to the six major equipment losses.',
        },
        {
          type: 'heading',
          text: 'The Eight Pillars of TPM',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Autonomous Maintenance: Operators perform routine maintenance (cleaning, inspection, lubrication, minor adjustments), freeing maintenance technicians for more complex work and building operator ownership of equipment condition',
            'Planned Maintenance: Scheduled preventive maintenance based on equipment condition, run time, and manufacturer recommendations — preventing failures before they occur',
            'Quality Maintenance: Maintaining specific equipment conditions (tolerances, pressures, temperatures) that are proven to prevent quality defects from occurring',
            'Focused Improvement (Kobetsu Kaizen): Structured cross-functional projects targeting the elimination of chronic equipment losses measured by OEE',
            'Early Equipment Management: Applying TPM knowledge and lessons learned to the design and commissioning of new equipment, building reliability in from the start',
            'Training and Education: Building the technical skills operators and maintenance technicians need to implement autonomous maintenance and planned maintenance effectively',
            'Safety, Health and Environment: Ensuring zero accidents and maintaining a safe, clean working environment as a non-negotiable condition of TPM',
            'TPM in Administration: Extending TPM principles and efficiency thinking to office and administrative processes that support manufacturing operations',
          ],
        },
      ],
    },
    {
      id: 'poka-yoke-quality-source',
      title: 'Poka-Yoke and Quality at the Source',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'Quality at the source means building quality into the process so defects are prevented from occurring — or detected and contained immediately when they do occur — rather than relying on downstream inspection to catch them. This is the operational expression of Jidoka: instead of inspecting quality in, design quality in.',
        },
        {
          type: 'heading',
          text: 'Poka-Yoke: Error Proofing',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Poka-Yoke (Japanese: "mistake-proofing" or "error-proofing") is any mechanism that prevents a defect from occurring or makes a defect immediately obvious when it does occur. Shigeo Shingo, who also developed SMED, formalized Poka-Yoke as a systematic approach to eliminating human error from manufacturing processes — recognizing that defects are caused by process conditions, not worker carelessness.',
        },
        {
          type: 'list',
          items: [
            'Prevention Poka-Yoke: Makes it physically impossible to make an error. Example: USB connectors that can only be inserted one way; asymmetric locating pins on a fixture that prevent a part from being loaded in the wrong orientation.',
            'Detection Poka-Yoke: Detects an error or defect immediately when it occurs and stops the process. Example: a fixture with sensors that verify all components are present and correctly positioned before the machine cycle begins; a scale that flags when a package is outside acceptable weight range.',
            'Warning Poka-Yoke: Alerts the operator that an error is about to occur or has occurred. Example: a light that illuminates when a part is installed in the wrong orientation; an audible alarm when a process parameter drifts outside specification.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Prevention Before Detection',
          text: 'The hierarchy of Poka-Yoke mirrors the hierarchy of error control: prevention is better than detection, which is better than warning. A device that makes an error impossible is superior to one that detects it after the fact — at that point, one defective unit has already been made. When designing Poka-Yoke, always attempt prevention first; detection and warning are fallbacks when prevention is technically or economically impractical.',
        },
        {
          type: 'heading',
          text: 'Three Quality Inspection Approaches',
          level: 2,
        },
        {
          type: 'paragraph',
          text: "Three inspection approaches define quality-at-the-source thinking: Successive Check (the next operator inspects the previous operator's work — catches defects before they continue downstream), Self Check (the operator inspects their own work immediately after performing it — faster feedback than successive check), and Source Inspection (inspect the process conditions that cause defects, before production begins — prevents defects from occurring at all).",
        },
        {
          type: 'paragraph',
          text: 'Source Inspection is the most powerful of the three: rather than inspecting output, inspect the process conditions (machine settings, material condition, fixture position, tooling wear) that determine whether good output will be produced. Correct the process condition, and the output is automatically correct. This shifts quality control from reactive detection to proactive prevention.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Cost of Late Detection',
          text: 'Quality defects discovered at the source cost far less to correct than those discovered downstream. A defect caught at the operation where it is made requires only that operation to be repeated. The same defect discovered at final inspection may require disassembling a complete product, reworking multiple subassemblies, and re-inspecting the entire unit — often at 10-100x the cost of source detection.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1lm5',
      type: 'multiple-choice',
      question:
        'A machine runs for 7.2 hours of an 8-hour planned shift, produces at 80% of its designed rate, and 95% of parts are defect-free. What is its OEE?',
      options: ['54.7%', '68.4%', '75.0%', '85.0%'],
      correctIndex: 1,
      explanation:
        'OEE = Availability × Performance × Quality = (7.2/8) × 0.80 × 0.95 = 0.90 × 0.80 × 0.95 = 0.684 = 68.4%. The machine is operating at 68.4% of its theoretical maximum — 31.6% of capacity is lost to downtime, slow running, and quality defects.',
    },
    {
      id: 'q2lm5',
      type: 'multiple-choice',
      question:
        'What is the primary responsibility of operators under the Autonomous Maintenance pillar of TPM?',
      options: [
        'Full responsibility for all maintenance including major repairs and equipment overhauls',
        'Routine maintenance tasks: cleaning, inspection, lubrication, and minor adjustments',
        'Ordering spare parts and managing the maintenance department budget',
        'Training maintenance technicians on equipment operating procedures',
      ],
      correctIndex: 1,
      explanation:
        'Autonomous Maintenance involves operators performing routine maintenance activities — cleaning, inspection, lubrication, and minor adjustments — that were previously done exclusively by maintenance technicians. This builds operator ownership of equipment condition and frees skilled maintenance personnel for more complex preventive and predictive maintenance work.',
    },
    {
      id: 'q3lm5',
      type: 'true-false',
      question:
        'A Warning Poka-Yoke is more effective than a Prevention Poka-Yoke because it provides direct feedback to the operator about what went wrong.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        'False. The effectiveness hierarchy is: Prevention (makes error impossible — no defect is ever produced) > Detection (stops when error occurs — one defect may be produced but it is contained) > Warning (alerts that an error may occur — the defect can still proceed if the operator ignores or misses the alert). Prevention is always preferred; warning is the least reliable because it depends entirely on human response.',
    },
    {
      id: 'q4lm5',
      type: 'multiple-choice',
      question:
        'Why is Source Inspection considered more powerful than Successive Check or Self Check approaches?',
      options: [
        'It requires fewer quality inspectors, significantly reducing cost',
        'It inspects process conditions before production begins, preventing defects rather than detecting them after they are made',
        'It provides faster cycle time because operators check while working rather than stopping',
        'It generates more statistical data points per shift for control chart analysis',
      ],
      correctIndex: 1,
      explanation:
        "Source Inspection examines the process conditions — machine settings, material condition, fixture position, tooling condition — that determine whether good output will be produced. By identifying and correcting these conditions before production begins, defects are prevented from occurring at all. Successive and Self Check catch defects after they've been made; Source Inspection prevents them.",
    },
    {
      id: 'q5lm5',
      type: 'multiple-choice',
      question:
        'World-class OEE for discrete manufacturing is approximately what percentage?',
      options: ['55-65%', '70-75%', '85%', '95-100%'],
      correctIndex: 2,
      explanation:
        'World-class OEE for discrete manufacturing is approximately 85%. Most facilities beginning TPM implementation are in the 40-60% range, indicating that 40-60% of potential capacity is lost to equipment losses — availability, performance, and quality losses. Reaching 85% OEE represents significant untapped production capacity recovered without capital investment in new equipment.',
    },
  ],
};

const module6: Module = {
  id: 'lean-culture',
  number: 6,
  title: 'Lean Culture & Sustaining Improvement',
  description:
    'Explore what separates organizations that sustain Lean improvements for decades from those where gains erode within months — and learn the leadership behaviors, management systems, and cultural practices that make Lean self-sustaining.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Describe the role of leadership behavior in building or destroying Lean culture',
    'Design a Leader Standard Work routine that supports daily Lean management',
    'Explain how A3 problem solving differs from conventional management reporting',
    'Identify the warning signs of a Lean implementation that is losing momentum',
  ],
  lessons: [
    {
      id: 'lean-leadership',
      title: "Leadership's Role in Lean Culture",
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'The most consistent finding from studying Lean implementations across industries is this: technical tools are necessary but insufficient. Organizations that implement 5S, VSM, Kanban, and SMED but do not change leadership behavior and management systems consistently see their improvements erode within 12-24 months. Lean culture — the beliefs, behaviors, and management practices that sustain improvement — is the difference between Lean as an event and Lean as a way of operating.',
        },
        {
          type: 'heading',
          text: 'What Leaders Must Do Differently',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Lean leadership differs from conventional management in four fundamental ways: going to the Gemba (being present where value is created, not in offices reviewing reports), asking questions rather than giving answers (building capability rather than dependency), making problems visible rather than hiding them (creating psychological safety to surface issues), and treating failures as learning opportunities rather than performance deficiencies requiring punishment.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Gemba Walk',
          text: 'The Gemba Walk is a structured leadership practice — not a casual walk-through. Lean leaders walk the Gemba with specific purpose: to observe the work (not to evaluate the workers), ask questions that develop understanding, and identify system-level problems that workers cannot solve alone. "What does standard look like here? How do you know when something is wrong? What is preventing you from doing your best work?" These questions build organizational problem-solving capability rather than dependence on the leader for answers.',
        },
        {
          type: 'heading',
          text: 'Leader Standard Work',
          level: 2,
        },
        {
          type: 'paragraph',
          text: 'Leader Standard Work is the documented routine of activities that leaders at every level perform to sustain Lean management systems. Just as operator standardized work captures the best method for a production task, Leader Standard Work captures what leaders must do daily, weekly, and monthly to keep the management system functioning. It typically includes: daily Gemba walks with specific focus areas, review of visual management boards with teams, participation in active problem-solving, and verification that operational standards are being followed.',
        },
        {
          type: 'paragraph',
          text: 'Leader Standard Work makes leadership behavior visible and auditable. When a leader skips their Gemba walk, it is as visible as when an operator skips a process step. This accountability is essential for sustaining Lean — when leadership discipline erodes, everything else erodes with it. The presence or absence of leader standard work is one of the strongest predictors of whether a Lean implementation sustains beyond three years.',
        },
        {
          type: 'table',
          headers: ['Leadership Behavior', 'Conventional Management', 'Lean Leadership'],
          rows: [
            [
              'Problem response',
              'Who is responsible for this? Fix it.',
              'What caused this? What can we learn?',
            ],
            [
              'Time allocation',
              'Office, meetings, reviewing reports',
              'Gemba — where value is created',
            ],
            [
              'When problems arise',
              'Contain information; escalate quietly',
              'Make visible; engage the team',
            ],
            [
              'Improvement ideas',
              'Submit through formal channels',
              'Try, observe, adjust — rapid experiments',
            ],
            [
              'Expert role',
              'Provide answers and direction',
              'Ask questions; develop others\' thinking',
            ],
          ],
        },
      ],
    },
    {
      id: 'a3-thinking-sustainability',
      title: 'A3 Thinking and Sustaining the Lean System',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph',
          text: 'A3 thinking — named for the A3 paper size on which the entire problem, analysis, and solution fit on one page — is Toyota\'s method for structured problem solving and organizational learning. It is not a form; it is a thinking process that develops rigorous analysis skills and creates shared understanding between problem-solvers and their coaches.',
        },
        {
          type: 'heading',
          text: 'The A3 Structure',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Background: Why is this problem important? What is the business context and strategic connection?',
            'Current Condition: What is actually happening now? What does data tell us about the current situation?',
            'Goal/Target Condition: What specific, measurable outcome are we aiming for, and by when?',
            'Root Cause Analysis: What is causing the gap between current and target? What is the validated root cause — not symptoms, but the underlying condition?',
            'Countermeasures: What specific actions will address the root cause? Who is responsible for each? By when will each be complete?',
            'Plan/Implementation: How will countermeasures be implemented, sequenced, and tracked?',
            'Follow-Up: How will we confirm that countermeasures achieved the target condition? What is the review cadence?',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A3 as a Coaching Tool',
          text: 'Toyota managers use A3 development as a coaching process, not a reporting process. A manager reviewing an A3 asks questions: "How do you know this is the root cause? What data supports this? Have you confirmed that this countermeasure actually addresses the validated root cause rather than just the symptom?" The goal is to develop the problem-solver\'s thinking capability, not just to solve this specific problem. Each A3 cycle builds analytical discipline that applies to every future problem.',
        },
        {
          type: 'heading',
          text: 'Warning Signs of a Fading Lean Implementation',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Leaders stop going to the Gemba regularly and return to managing from offices and summary reports',
            'Improvement suggestions from workers decrease significantly or go unaddressed for weeks',
            '5S areas that were pristine begin accumulating untagged items and visual clutter',
            'Metrics are displayed but not reviewed with teams in meaningful discussions',
            'Lean tools are used in isolation without connection to value stream improvement goals',
            '"We tried that already" becomes the default response to improvement ideas',
            'Improvement activity slows or stops during busy periods and is never resumed at previous intensity',
            'New managers arrive and quietly deprioritize Lean, redirecting attention to short-term output targets',
          ],
        },
        {
          type: 'paragraph',
          text: 'Lean is not a state to achieve but a direction to travel. Organizations that sustain Lean treat it as their operating system — the way work is managed, problems are solved, and people are developed — rather than an improvement program running alongside their business. When Lean becomes how the business operates rather than something the business does, it becomes self-sustaining.',
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Toyota's Decades of Continuous Improvement",
          text: "Toyota began developing TPS in earnest in the 1950s and has never stopped improving. By 2020, Toyota employees submitted approximately 10 improvement suggestions per person per year, with roughly 90% implemented. This is not exceptional individual motivation — it is the result of 70 years of building a management system that makes improvement everyone's daily responsibility. No improvement program has a finish line; Lean is the operating system that runs permanently.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1lm6',
      type: 'multiple-choice',
      question:
        'What distinguishes a Lean Gemba Walk from a casual supervisor walk-through?',
      options: [
        'Gemba Walks must be unannounced to catch problems in their natural state',
        "Gemba Walks focus on observing the work system and asking development questions — not inspecting or evaluating individual workers",
        'Gemba Walks require recording every observation in a standardized tracking report',
        'Gemba Walks are conducted exclusively by senior executives and plant managers',
      ],
      correctIndex: 1,
      explanation:
        "A Lean Gemba Walk is structured around observing the work system — how work flows, whether standards are followed, what obstacles workers face — and asking questions that develop problem-solving capability. The focus is on understanding and improving the system, not on evaluating individual worker performance. Leaders ask: \"What does standard look like? What is preventing you from doing your best work?\"",
    },
    {
      id: 'q2lm6',
      type: 'multiple-choice',
      question:
        'What is Leader Standard Work and why is it important for sustaining Lean?',
      options: [
        'A simplified version of operator standardized work used in leadership training programs',
        "The documented routine of activities leaders perform to maintain the Lean management system — making leadership behavior visible and auditable",
        'The target performance metrics that leaders are held accountable for achieving each quarter',
        'A scheduling tool that coordinates improvement projects across the organization',
      ],
      correctIndex: 1,
      explanation:
        "Leader Standard Work documents the routine activities leaders at every level must perform to sustain the Lean management system — Gemba walks, visual board reviews, problem-solving participation. It makes leadership discipline visible: just as an operator skipping a process step is visible, so is a leader skipping their standard work. When leadership discipline holds, everything else holds with it.",
    },
    {
      id: 'q3lm6',
      type: 'true-false',
      question:
        'An A3 document is primarily a reporting tool used to communicate completed project results to management.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation:
        "False. An A3 is a thinking and coaching tool, not a reporting tool. The process of developing an A3 — working through problem definition, current condition analysis, root cause investigation, and countermeasure design — develops the problem-solver's analytical capability. Toyota managers use A3 review as a coaching conversation that builds thinking skills, not a status report review.",
    },
    {
      id: 'q4lm6',
      type: 'multiple-choice',
      question:
        'Which of the following is an early warning sign that a Lean implementation is losing momentum?',
      options: [
        'A3 problems are being solved faster as teams build analytical skill',
        'Leaders increase Gemba walk frequency during high-pressure production periods',
        'Worker improvement suggestions decrease significantly over several months',
        'OEE continues to improve but at a progressively slower rate',
      ],
      correctIndex: 2,
      explanation:
        "Decreasing worker improvement suggestions is one of the clearest early warning signs of a fading Lean implementation. It indicates that workers no longer believe their ideas will be heard, taken seriously, or implemented — a direct symptom of leadership disengagement. An engaged Lean culture should show steady or increasing suggestion rates as workers build confidence that improvement is welcomed.",
    },
    {
      id: 'q5lm6',
      type: 'multiple-choice',
      question:
        'What fundamentally differentiates organizations that sustain Lean for decades from those where gains erode within years?',
      options: [
        'More sophisticated Lean tools and a broader portfolio of implemented techniques',
        'Larger continuous improvement budgets and dedicated project teams',
        "Treating Lean as the operating system for how the business runs — not as a separate improvement program",
        'External consultant relationships providing ongoing implementation guidance',
      ],
      correctIndex: 2,
      explanation:
        "Organizations that sustain Lean treat it as their operating system — the way work is managed, problems are solved, and people are developed — rather than a separate improvement program with a budget and a sponsor. When Lean becomes how the business operates at every level, it becomes self-sustaining. When it remains a program, it lives and dies with program sponsorship.",
    },
  ],
};

export const leanManufacturingCourse: Course = {
  id: 'lean-manufacturing',
  belt: undefined,
  track: 'lean-foundations',
  title: 'Principles of Lean Manufacturing',
  subtitle: 'From Toyota to Your Organization',
  description:
    "A rigorous grounding in Lean manufacturing principles — from the Toyota Production System's historical roots through the five Lean principles, 5S, Kanban, TPM, and the leadership practices that make Lean self-sustaining.",
  status: 'available',
  estimatedHours: 6,
  color: '#6b8ed1',
  icon: '🏭',
  modules: [module1, module2, module3, module4, module5, module6],
};
