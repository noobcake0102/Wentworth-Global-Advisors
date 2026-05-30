import type { Course } from '../../types/course';

const module1 = {
  id: 'ss-m1',
  number: 1,
  title: 'What is Six Sigma? History & Philosophy',
  description:
    'Explore the origins of Six Sigma at Motorola, its explosive growth through GE, and the statistical philosophy that underpins it — including sigma levels, defects per million opportunities, and the legacy of W. Edwards Deming.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Describe the historical origins of Six Sigma at Motorola and its adoption by GE',
    'Explain what a sigma level means and how it relates to defects per million opportunities (DPMO)',
    'Articulate the core philosophy of Six Sigma: variation is the enemy, data drives decisions',
    'Connect Deming\'s quality thinking to the modern Six Sigma methodology',
  ],
  lessons: [
    {
      id: 'ss-m1-l1',
      title: 'The Birth of Six Sigma at Motorola',
      estimatedMinutes: 14,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Six Sigma was born out of a crisis. In the early 1980s, Motorola was losing market share to Japanese competitors who were producing electronics with dramatically fewer defects. Engineer Bill Smith, often called the "Father of Six Sigma," began developing a unified quality measurement system that could pinpoint exactly how much variation existed in any manufacturing process — and how that variation translated into real-world defects.',
        },
        {
          type: 'heading' as const,
          text: 'Motorola\'s Quality Imperative',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'In 1986, Motorola CEO Bob Galvin championed Smith\'s approach and formalized it into a company-wide initiative. The goal was ambitious: achieve quality levels of 3.4 defects per million opportunities by 1992. This target — Six Sigma performance — represented a ten-fold improvement over where most manufacturers operated at the time. Motorola won the inaugural Malcolm Baldrige National Quality Award in 1988, in large part because of this commitment to measurable quality.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Why "Six Sigma"?',
          text: 'The Greek letter sigma (σ) is the statistical symbol for standard deviation — a measure of how spread out data is. "Six Sigma" means achieving a process so consistent that the nearest defect threshold is six standard deviations away from the process mean. At that distance, only 3.4 defects per million opportunities occur.',
        },
        {
          type: 'heading' as const,
          text: 'GE and the Global Explosion',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Six Sigma remained largely a manufacturing tool until Jack Welch made it the centerpiece of GE\'s strategy in 1995. Welch declared that all GE managers must become Six Sigma certified or forgo promotions. Within four years, GE reported over $2 billion in savings from Six Sigma projects. This high-profile success transformed Six Sigma from an engineering methodology into a global business discipline adopted across industries — from healthcare to financial services to software development.',
        },
        {
          type: 'list' as const,
          items: [
            'Allied Signal (now Honeywell) was an early adopter alongside GE, reporting massive cost savings',
            'Six Sigma spread from manufacturing into transactional and service industries throughout the late 1990s',
            'Today, Six Sigma certifications are offered by hundreds of organizations worldwide',
            'Many companies combine Six Sigma with Lean Manufacturing, creating Lean Six Sigma',
          ],
        },
        { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Motorola Pager Manufacturing, 1987–1991',
          text: 'After formalizing Six Sigma in 1986, Motorola applied the methodology to its pager assembly lines in Boynton Beach, Florida. The pager division was operating at roughly 3.5 sigma — approximately 22,000 DPMO — driven by inconsistent soldering, component placement errors, and supplier quality variation. Teams used defect tracking, process mapping, and statistical process control to isolate the top contributors. By 1991, the division achieved 5.5 sigma performance (~32 DPMO), reduced warranty claims by 84%, and contributed significantly to Motorola\'s $2.2 billion in documented savings. This result directly supported Motorola\'s 1988 Malcolm Baldrige Award win and became the founding proof of concept for Six Sigma as a business discipline.',
        },
        {
          type: 'paragraph' as const,
          text: 'The Motorola pager case illustrates how the birth of Six Sigma was not theoretical — it was driven by competitive survival. The link between sigma level, DPMO, and real financial impact (warranty costs, rework, customer satisfaction) proved the business case for systematic quality measurement that Bill Smith had pioneered. Understanding this origin story helps practitioners appreciate why every element of the Six Sigma philosophy — from the sigma scale to the focus on variation — was designed to solve concrete production crises.',
        },
        {
          type: 'list' as const,
          items: [
            'Setting an explicit DPMO target (3.4) gave every team a common, measurable quality language',
            'Winning a prestigious quality award required documented, quantified results — not anecdotal improvements',
            'The methodology spread to other industries because its financial results were verifiable and replicable',
          ],
        },
      ],
    },
    {
      id: 'ss-m1-l2',
      title: 'Sigma Levels and Defects Per Million',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Understanding sigma levels is foundational to Six Sigma. A sigma level is a statistical measure of how well a process performs relative to customer requirements. The higher the sigma level, the fewer defects the process produces. Most organizations, without deliberate quality programs, naturally operate at around three to four sigma.',
        },
        {
          type: 'table' as const,
          headers: ['Sigma Level', 'DPMO', 'Yield (%)', 'Typical Context'],
          rows: [
            ['1σ', '691,462', '30.9%', 'Highly chaotic, unpredictable process'],
            ['2σ', '308,538', '69.1%', 'Below average — many defects visible'],
            ['3σ', '66,807', '93.3%', 'Average for many unmanaged processes'],
            ['4σ', '6,210', '99.4%', 'Good — but still thousands of defects/million'],
            ['5σ', '233', '99.977%', 'Very good — approaching world class'],
            ['6σ', '3.4', '99.9997%', 'World class — near-perfect quality'],
          ],
        },
        {
          type: 'chart' as const,
          chartId: 'sigma-levels',
          title: 'Sigma Levels & DPMO',
          description: 'How sigma level correlates to defects per million opportunities',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The 1.5 Sigma Shift',
          text: 'You may notice that 6σ theoretically yields 2 defects per billion, yet the accepted 6σ standard is 3.4 DPMO. This accounts for a practical adjustment: over time, process means tend to drift up to 1.5 sigma in either direction. The 3.4 DPMO figure already incorporates this real-world drift, making it a more honest and useful target.',
        },
        {
          type: 'heading' as const,
          text: 'What Counts as a Defect?',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'A defect is any instance where a process output fails to meet customer requirements. An "opportunity" is any point in the process where a defect could potentially occur. DPMO is calculated as: (Number of Defects / (Number of Units × Number of Opportunities per Unit)) × 1,000,000. Defining opportunities consistently is critical — organizations that count too few opportunities artificially inflate their apparent sigma level.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'DPMO Calculation Example',
          text: 'A call center handles 10,000 calls per month. Each call has 5 opportunities for error (wrong information, long hold, missed callback, incorrect account update, unresolved issue). In a month, 150 errors are logged. DPMO = (150 / (10,000 × 5)) × 1,000,000 = 3,000 DPMO — roughly 4.25 sigma.',
        },
      ],
    },
    {
      id: 'ss-m1-l3',
      title: 'Deming\'s Legacy and the Quality Philosophy',
      estimatedMinutes: 16,
      content: [
        {
          type: 'paragraph' as const,
          text: 'W. Edwards Deming is arguably the most influential quality thinker of the 20th century. Although he worked decades before Six Sigma was named, the intellectual foundations of Six Sigma rest on Deming\'s core ideas: that quality must be measured, that variation must be understood statistically, and that most quality problems originate in the system — not individual workers.',
        },
        {
          type: 'heading' as const,
          text: 'Key Deming Principles in Six Sigma',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Plan-Do-Study-Act (PDSA)',
              definition: 'Deming\'s iterative improvement cycle, which evolved into the DMAIC framework used in Six Sigma today.',
            },
            {
              term: 'System of Profound Knowledge',
              definition: 'Deming\'s framework emphasizing appreciation for a system, knowledge about variation, theory of knowledge, and psychology — all present in Six Sigma thinking.',
            },
            {
              term: 'Common vs. Special Cause Variation',
              definition: 'Deming distinguished between variation inherent to the system (common cause) and variation from specific, identifiable sources (special cause). Six Sigma targets both.',
            },
            {
              term: '85/15 Rule',
              definition: 'Deming argued that roughly 85% of quality problems are caused by the system (management\'s responsibility), not workers. Six Sigma process focus reflects this insight.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Deming in Japan',
          text: 'Deming\'s ideas were largely ignored in post-WWII America but embraced enthusiastically in Japan, where they helped transform Japanese manufacturing into a global quality leader. The Japanese quality revolution eventually pressured American companies like Motorola to develop their own rigorous quality methodologies — leading directly to Six Sigma.',
        },
        {
          type: 'paragraph' as const,
          text: 'Six Sigma operationalizes Deming\'s vision by providing specific tools, project structures, and statistical methods that make quality improvement systematic and repeatable. Where Deming provided the philosophy, Six Sigma provides the engineering.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ss-m1-q1',
      type: 'multiple-choice' as const,
      question: 'Who is commonly credited as the "Father of Six Sigma" for his foundational work at Motorola?',
      options: ['Jack Welch', 'W. Edwards Deming', 'Bill Smith', 'Joseph Juran'],
      correctIndex: 2,
      explanation: 'Bill Smith, an engineer at Motorola, developed the original Six Sigma measurement framework in the mid-1980s and is widely credited as the Father of Six Sigma.',
    },
    {
      id: 'ss-m1-q2',
      type: 'multiple-choice' as const,
      question: 'What is the accepted defects per million opportunities (DPMO) target for Six Sigma performance?',
      options: ['0', '3.4', '233', '6,210'],
      correctIndex: 1,
      explanation: 'Six Sigma performance is defined as 3.4 DPMO. This accounts for a 1.5 sigma real-world drift in process mean over time.',
    },
    {
      id: 'ss-m1-q3',
      type: 'true-false' as const,
      question: 'A process operating at 3 sigma typically yields about 99.9997% defect-free output.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. 3 sigma yields approximately 93.3% defect-free output (66,807 DPMO). The 99.9997% figure corresponds to 6 sigma performance.',
    },
    {
      id: 'ss-m1-q4',
      type: 'multiple-choice' as const,
      question: 'Which CEO made Six Sigma the centerpiece of a major corporation\'s strategy in 1995, dramatically accelerating its global adoption?',
      options: ['Bob Galvin at Motorola', 'Jack Welch at GE', 'Larry Bossidy at Allied Signal', 'Bill Gates at Microsoft'],
      correctIndex: 1,
      explanation: 'Jack Welch at GE mandated Six Sigma training for all managers in 1995 and reported over $2 billion in savings within four years, making GE the most visible Six Sigma success story.',
    },
    {
      id: 'ss-m1-q5',
      type: 'multiple-choice' as const,
      question: 'Deming\'s "85/15 Rule" suggests that the majority of quality problems are caused by:',
      options: ['Individual worker errors', 'The system and management decisions', 'Defective raw materials', 'Poor customer specifications'],
      correctIndex: 1,
      explanation: 'Deming argued approximately 85% of quality problems stem from the system — processes, policies, and structures controlled by management — rather than from individual workers. Six Sigma\'s process focus reflects this insight.',
    },
  ],
};

const module2 = {
  id: 'ss-m2',
  number: 2,
  title: 'Understanding Variation & Statistical Thinking',
  description:
    'Learn to see processes through a statistical lens. Understand common and special cause variation, read basic control charts, and evaluate process capability using Cp and Cpk indices.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Distinguish between common cause and special cause variation',
    'Interpret a basic control chart (X-bar, R, or Individuals chart)',
    'Explain the concept of process capability and calculate or interpret Cp and Cpk',
    'Apply normal distribution principles to understanding process spread',
  ],
  lessons: [
    {
      id: 'ss-m2-l1',
      title: 'Common Cause vs. Special Cause Variation',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'All processes exhibit variation. The critical skill in Six Sigma is learning to distinguish between two fundamentally different types: common cause variation and special cause variation. Treating them the same — or confusing one for the other — leads to counterproductive "fixes" that actually make processes worse.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Common Cause Variation',
              definition: 'Natural, inherent variation built into the system from many small, interacting factors. It is predictable and consistent over time. Also called noise or random variation.',
            },
            {
              term: 'Special Cause Variation',
              definition: 'Variation from specific, identifiable sources outside the normal system. It is unpredictable, intermittent, and signals that something unusual has occurred. Also called assignable cause variation.',
            },
            {
              term: 'Stable Process',
              definition: 'A process exhibiting only common cause variation — it is statistically predictable, though not necessarily capable of meeting specifications.',
            },
            {
              term: 'Unstable Process',
              definition: 'A process with special cause variation present — it is unpredictable. Special causes must be identified and removed before capability can be reliably assessed.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Danger of Tampering',
          text: 'Deming warned that adjusting a stable process in response to common cause variation — thinking each fluctuation has a specific cause — actually increases variation. This "tampering" is one of the most common and costly quality mistakes. Six Sigma teaches practitioners to first determine whether a process is stable before intervening.',
        },
        {
          type: 'heading' as const,
          text: 'Responding Correctly to Each Type',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Variation Type', 'Correct Response', 'Wrong Response'],
          rows: [
            ['Common Cause', 'Redesign the system (DMAIC project)', 'React to each data point as if it has a unique cause'],
            ['Special Cause', 'Investigate the specific incident, identify root cause, correct it', 'Ignore it and hope it goes away'],
          ],
        },
      ],
    },
    {
      id: 'ss-m2-l2',
      title: 'Control Charts: The Voice of the Process',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A control chart is the primary tool for distinguishing common from special cause variation over time. Developed by Walter Shewhart in the 1920s, control charts plot process data sequentially and overlay statistically calculated control limits. Points within the limits signal a stable process; points outside or in specific patterns signal special causes.',
        },
        {
          type: 'heading' as const,
          text: 'Anatomy of a Control Chart',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Center Line (CL): The process average — the expected value of the measured characteristic',
            'Upper Control Limit (UCL): Calculated at +3 standard deviations from the mean',
            'Lower Control Limit (LCL): Calculated at -3 standard deviations from the mean',
            'Data Points: Individual measurements plotted in time sequence',
            'Control limits are calculated from the data itself — they are NOT the same as specification limits',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Control Limits vs. Specification Limits',
          text: 'This distinction is critical. Control limits come from the process data and reflect natural process behavior. Specification limits come from customer requirements. A process can be statistically stable (within control limits) yet still produce defects (outside spec limits) — or vice versa. Never put specification limits on a control chart.',
        },
        {
          type: 'heading' as const,
          text: 'Rules for Detecting Special Causes',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Any single point beyond the 3-sigma control limits (UCL or LCL)',
            'Two out of three consecutive points beyond 2 sigma on the same side of the center line',
            'Four out of five consecutive points beyond 1 sigma on the same side of the center line',
            'Eight or more consecutive points on the same side of the center line',
            'Six consecutive points steadily increasing or decreasing (a trend)',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Choosing the Right Chart',
          text: 'Different control charts apply to different data types. Use X-bar and R charts for subgroups of continuous data. Use Individuals (I-MR) charts for single measurements. Use p-charts for proportion defective, and c-charts for count of defects per unit. Choosing the wrong chart leads to incorrect control limit calculations.',
        },
      ],
    },
    {
      id: 'ss-m2-l3',
      title: 'Process Capability: Cp and Cpk',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Once a process is confirmed stable, we can assess its capability — how well it meets customer requirements. Process capability indices translate statistical performance into a single number that communicates whether a process is good enough, and by how much.',
        },
        {
          type: 'heading' as const,
          text: 'The Cp Index: Potential Capability',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Cp compares the width of the specification window to the natural spread of the process. It is calculated as: Cp = (USL - LSL) / (6σ), where USL is the upper specification limit, LSL is the lower specification limit, and 6σ is the natural process spread (six standard deviations). A Cp of 1.0 means the process spread exactly fills the specification window — borderline acceptable. A Cp of 1.33 or higher is generally considered capable.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Cp Ignores Process Centering',
          text: 'A process could have an excellent Cp of 2.0 yet still produce significant defects if the process mean is far off target. Cp only measures the ratio of specification width to process width — not where the process is centered. This is why Cpk is needed.',
        },
        {
          type: 'heading' as const,
          text: 'The Cpk Index: Actual Capability',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Cpk accounts for both spread and centering. It is the minimum of two one-sided calculations: Cpk = min[(USL - Mean) / (3σ), (Mean - LSL) / (3σ)]. The smaller of the two values tells you which specification limit the process is closest to — the binding constraint. A Cpk of 1.33 means the nearest spec limit is 4 sigma away from the mean, a common minimum target. A Cpk of 1.67 (5 sigma) is the target for safety-critical processes.',
        },
        {
          type: 'table' as const,
          headers: ['Cpk Value', 'Interpretation', 'Typical Action'],
          rows: [
            ['< 1.00', 'Not capable — producing defects', 'Immediate DMAIC project required'],
            ['1.00 – 1.33', 'Marginally capable — some risk', 'Improvement project recommended'],
            ['1.33 – 1.67', 'Capable — meets standard targets', 'Monitor with control charts'],
            ['≥ 1.67', 'Highly capable — world-class zone', 'Maintain and look for redeployment'],
          ],
        },
        {
          type: 'chart' as const,
          chartId: 'normal-distribution',
          title: 'Process Variation & Normal Distribution',
          description: 'Understanding how variation distributes around the mean',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Cp vs. Cpk in Practice',
          text: 'A shaft must be 50mm ± 2mm (LSL=48, USL=52). The process has σ=0.5mm and a mean of 51.2mm. Cp = (52-48)/(6×0.5) = 1.33 — looks capable! But Cpk = min[(52-51.2)/(3×0.5), (51.2-48)/(3×0.5)] = min[0.53, 2.13] = 0.53. The process is badly off-center and actually incapable on the upper side. Cpk reveals the real story.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ss-m2-q1',
      type: 'multiple-choice' as const,
      question: 'A machine randomly produces parts at slightly different weights each cycle due to normal vibration and material variation. This is an example of:',
      options: ['Special cause variation', 'Common cause variation', 'Process instability', 'A control chart signal'],
      correctIndex: 1,
      explanation: 'Normal, inherent variation from many small interacting factors — like machine vibration and material variation — is common cause variation. It is predictable and part of the system.',
    },
    {
      id: 'ss-m2-q2',
      type: 'true-false' as const,
      question: 'Specification limits and control limits on a control chart represent the same thing and can be used interchangeably.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Control limits are calculated from process data and reflect natural process behavior (±3σ from the mean). Specification limits come from customer requirements. Mixing them is a common and serious error.',
    },
    {
      id: 'ss-m2-q3',
      type: 'multiple-choice' as const,
      question: 'A control chart shows eight consecutive data points all falling below the center line but within control limits. This indicates:',
      options: [
        'The process is perfectly stable and no action is needed',
        'A potential special cause — the run rule for 8 consecutive points on one side is triggered',
        'The lower control limit should be adjusted',
        'Specification limits have been exceeded',
      ],
      correctIndex: 1,
      explanation: 'Eight consecutive points on the same side of the center line triggers a standard run rule, signaling a potential special cause even though no point is outside the control limits. Investigation is warranted.',
    },
    {
      id: 'ss-m2-q4',
      type: 'multiple-choice' as const,
      question: 'A process has Cp = 1.8 and Cpk = 0.7. What does this tell you?',
      options: [
        'The process is incapable and needs a wider specification window',
        'The process has enough spread potential but is significantly off-center, producing defects',
        'The process is highly capable and no action is needed',
        'The Cpk calculation must be wrong since Cp is high',
      ],
      correctIndex: 1,
      explanation: 'High Cp with low Cpk is a classic off-centering signature. The process spread is narrow enough to fit well within specs (Cp=1.8), but the mean is shifted far enough that one tail is producing defects (Cpk=0.7). The solution is to re-center the process, not widen specs.',
    },
    {
      id: 'ss-m2-q5',
      type: 'multiple-choice' as const,
      question: 'Which Cpk value is typically considered the minimum standard for a capable process in most manufacturing environments?',
      options: ['0.67', '1.00', '1.33', '2.00'],
      correctIndex: 2,
      explanation: 'A Cpk of 1.33 is the widely accepted minimum for a capable process in manufacturing, meaning the nearest specification limit is four standard deviations from the process mean.',
    },
  ],
};

const module3 = {
  id: 'ss-m3',
  number: 3,
  title: 'The DMAIC Framework Overview',
  description:
    'Master the five-phase DMAIC roadmap — Define, Measure, Analyze, Improve, Control — the structured problem-solving backbone of every Six Sigma project. Learn about phase tollgates, project charters, and what deliverables each phase produces.',
  estimatedMinutes: 55,
  learningObjectives: [
    'Describe the purpose and key activities of each DMAIC phase',
    'Explain what a project charter is and what it must contain',
    'Understand the role of tollgates in keeping projects on track',
    'Recognize which tools belong to which DMAIC phase',
  ],
  lessons: [
    {
      id: 'ss-m3-l1',
      title: 'Define & Measure: Setting the Stage',
      estimatedMinutes: 18,
      content: [
        {
          type: 'diagram' as const,
          diagramId: 'dmaic-phases',
          title: 'The DMAIC Framework',
        },
        {
          type: 'paragraph' as const,
          text: 'DMAIC is a disciplined, data-driven problem-solving roadmap. Unlike ad hoc improvement efforts, DMAIC demands evidence at every step. The first two phases — Define and Measure — ensure teams are solving the right problem with reliable data before any analysis or solution work begins.',
        },
        {
          type: 'heading' as const,
          text: 'Define: Clarify the Problem',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The Define phase answers: What problem are we solving, for whom, and why does it matter? The primary deliverable is the Project Charter — a one-page document that formally authorizes the project and aligns stakeholders. A well-written charter prevents scope creep, misaligned expectations, and wasted effort.',
        },
        {
          type: 'list' as const,
          items: [
            'Problem Statement: What is wrong, where, when, and how big is the problem? (No causes, no solutions)',
            'Goal Statement: The measurable improvement target, with a deadline',
            'Scope: What is in and out of bounds for the project team',
            'Business Case: Why this problem matters in financial or strategic terms',
            'Team Members and Sponsor: Who is accountable and who has authority',
            'Project Timeline: Key milestones for each DMAIC phase',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Writing a Good Problem Statement',
          text: 'A strong problem statement is specific and factual — it describes the gap between current and desired performance without stating a cause or a solution. "Customer satisfaction scores average 72% against a target of 90%, resulting in an estimated $1.2M annual revenue risk" is a good problem statement. "Our team does not follow the right process" is not — it implies a cause.',
        },
        {
          type: 'heading' as const,
          text: 'Measure: Establish Baseline',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The Measure phase answers: How bad is the problem, exactly, and can we trust our measurement system? Teams identify the key output metric (Y), collect baseline data, calculate the current sigma level, and validate that the measurement system is reliable through Measurement System Analysis (MSA). Without a reliable baseline, you cannot know if an improvement worked.',
        },
      ],
    },
    {
      id: 'ss-m3-l2',
      title: 'Analyze & Improve: Finding and Fixing Root Causes',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The middle of DMAIC is where detective work happens. The Analyze phase uses data and structured tools to identify which input variables (Xs) are causing the output problem (Y). The Improve phase then designs and tests solutions targeting those root causes.',
        },
        {
          type: 'heading' as const,
          text: 'Analyze: From Symptoms to Root Causes',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Analyze begins with generating hypotheses about potential root causes using tools like fishbone diagrams, 5 Whys, and process mapping. These hypotheses are then tested with data — using statistical methods like regression, hypothesis testing, and ANOVA — to separate the vital few causes from the trivial many. The Analyze phase ends when data confirms the true root cause(s).',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Most Common DMAIC Mistake',
          text: 'Teams frequently jump from Define directly to solution implementation, skipping Measure and Analyze. This "ready, fire, aim" approach usually results in solutions that address symptoms rather than root causes. DMAIC discipline prevents this by requiring data evidence before any solution is tested.',
        },
        {
          type: 'heading' as const,
          text: 'Improve: Design, Test, and Implement',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'With root causes confirmed, the Improve phase generates creative solutions, evaluates them, and tests the best options in pilots. Design of Experiments (DOE) is often used to optimize multiple input variables simultaneously. The phase ends with a validated solution demonstrating measurable improvement in the Y metric — confirmed with data, not anecdote.',
        },
        {
          type: 'list' as const,
          items: [
            'Brainstorm and evaluate potential solutions using criteria matrices',
            'Pilot solutions on a small scale before full deployment',
            'Use DOE to optimize complex interactions between variables',
            'Quantify the improvement: calculate the new sigma level and financial impact',
            'Develop implementation and change management plans',
          ],
        },
      ],
    },
    {
      id: 'ss-m3-l3',
      title: 'Control: Locking in Gains & Tollgates',
      estimatedMinutes: 17,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Control phase is what separates Six Sigma from one-time improvement events. Without a robust control plan, processes tend to drift back to old behaviors within months. Control makes the improvement stick by embedding monitoring, response plans, and accountability into the process.',
        },
        {
          type: 'heading' as const,
          text: 'Control Plan Elements',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Control Charts: Ongoing statistical monitoring of key process variables',
            'Standard Operating Procedures: Updated documentation of the new process',
            'Training Plan: Ensuring all affected personnel understand the new process',
            'Response Plan: Pre-defined actions when a control chart signals out-of-control',
            'Project Handoff: Transferring ownership from the project team to the process owner',
          ],
        },
        {
          type: 'heading' as const,
          text: 'Phase Tollgates',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'At the end of each DMAIC phase, the project team presents its findings to a Champion or review board in a formal tollgate review. The Champion decides whether the team has sufficient evidence to proceed to the next phase — or whether they need to go back and collect more data. Tollgates are quality checkpoints, not ceremonial hurdles.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Tollgate Questions by Phase',
          text: 'Define: Is the problem real, significant, and worth a project? Measure: Do we have reliable baseline data? Analyze: Have we statistically confirmed root causes? Improve: Does pilot data prove the solution works? Control: Are monitoring systems in place and the process handed off?',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ss-m3-q1',
      type: 'multiple-choice' as const,
      question: 'Which DMAIC phase is primarily responsible for validating that the measurement system is reliable before baseline data is accepted?',
      options: ['Define', 'Measure', 'Analyze', 'Control'],
      correctIndex: 1,
      explanation: 'Measurement System Analysis (MSA) occurs in the Measure phase. It ensures that the data collection method is accurate and repeatable before baseline calculations are trusted.',
    },
    {
      id: 'ss-m3-q2',
      type: 'multiple-choice' as const,
      question: 'A project charter must NOT include which of the following in the problem statement?',
      options: ['The magnitude of the performance gap', 'The location or process where the problem occurs', 'The proposed root cause of the problem', 'The time period over which the problem has been observed'],
      correctIndex: 2,
      explanation: 'A problem statement should describe the gap between current and desired performance without stating a cause or solution. Root causes are discovered in the Analyze phase.',
    },
    {
      id: 'ss-m3-q3',
      type: 'true-false' as const,
      question: 'In DMAIC, a team that has brainstormed a strong solution idea in the Define phase should begin piloting it immediately to save time.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Solution implementation belongs in the Improve phase, after root causes have been confirmed with data in the Analyze phase. Acting on intuitions before analysis is the most common DMAIC failure mode.',
    },
    {
      id: 'ss-m3-q4',
      type: 'multiple-choice' as const,
      question: 'What is the primary purpose of a tollgate review in DMAIC?',
      options: [
        'To celebrate the team\'s progress at the end of the project',
        'To allow the Champion to verify sufficient evidence exists before the team moves to the next phase',
        'To assign project tasks to new team members',
        'To compare the project\'s budget against planned costs',
      ],
      correctIndex: 1,
      explanation: 'Tollgates are quality checkpoints where a Champion reviews the evidence produced in the completed phase and decides whether the team has enough rigor to proceed.',
    },
    {
      id: 'ss-m3-q5',
      type: 'multiple-choice' as const,
      question: 'Which element of the Control phase specifically defines what process operators should do when a control chart signals an out-of-control condition?',
      options: ['Standard Operating Procedure', 'Response Plan', 'Project Charter', 'Process Capability Study'],
      correctIndex: 1,
      explanation: 'The Response Plan (sometimes called a Reaction Plan) pre-defines the steps operators and supervisors should take when a control chart signals a special cause, ensuring fast, consistent response.',
    },
  ],
};

const module4 = {
  id: 'ss-m4',
  number: 4,
  title: 'Voice of the Customer & CTQ Translation',
  description:
    'Learn how to capture customer needs through VoC methods, translate fuzzy requirements into measurable Critical-to-Quality characteristics, and apply the Kano model to prioritize what matters most.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Apply Voice of the Customer (VoC) methods to gather customer requirements',
    'Build a CTQ tree to translate customer needs into measurable specifications',
    'Explain the three categories of the Kano model and their implications',
    'Identify how customer requirements drive project selection and goal setting',
  ],
  lessons: [
    {
      id: 'ss-m4-l1',
      title: 'Capturing Voice of the Customer',
      estimatedMinutes: 16,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Six Sigma begins and ends with the customer. The Voice of the Customer (VoC) is any method used to capture customer needs, expectations, preferences, and complaints. Without systematic VoC collection, teams risk optimizing the wrong things — improving features customers don\'t care about while ignoring the ones that drive loyalty and revenue.',
        },
        {
          type: 'heading' as const,
          text: 'VoC Collection Methods',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Method', 'Best Used When', 'Strength'],
          rows: [
            ['Customer Surveys', 'Large populations, quantitative data needed', 'Statistical validity, comparability over time'],
            ['Interviews & Focus Groups', 'Exploratory — understanding the "why"', 'Rich qualitative detail, uncovers hidden needs'],
            ['Complaint & Return Analysis', 'Problem is already occurring', 'Identifies the most acute pain points'],
            ['Observation (Gemba)', 'Customers can\'t articulate what they want', 'Reveals needs customers don\'t know they have'],
            ['Warranty & Service Data', 'Post-purchase quality issues', 'Objective, large sample, tracks trends'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Listen for "Verbatims"',
          text: 'In customer interviews, record exact quotes rather than your interpretation. "The checkout took forever" is a verbatim. "Customers want faster checkout" is your interpretation. Start with verbatims — they carry the emotional truth of the customer experience and often reveal needs that interpretation would sanitize away.',
        },
      ],
    },
    {
      id: 'ss-m4-l2',
      title: 'CTQ Trees: From Needs to Specifications',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Customer statements are almost always vague: "I want fast service," "I need reliable parts," "Make it easier." These cannot drive improvement directly. A Critical-to-Quality (CTQ) tree is a structured tool that translates vague customer needs into specific, measurable requirements that engineers and process owners can act on.',
        },
        {
          type: 'heading' as const,
          text: 'CTQ Tree Structure',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Customer Need (top level): The broad, vague want — "I want fast delivery"',
            'Quality Driver (middle level): What does "fast" mean in this context? — "Order-to-door cycle time"',
            'CTQ (bottom level): A specific, measurable specification — "Delivery completed within 2 business days, 95% of orders"',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'CTQ Translation Example',
          text: 'Customer need: "I want my loan approved quickly." Quality driver: Application processing speed. CTQ: "95% of standard residential mortgage applications receive a decision within 5 business days of complete document submission." This CTQ can now be measured, monitored, and targeted for improvement.',
        },
        {
          type: 'heading' as const,
          text: 'What Makes a Good CTQ?',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Measurable: You can assign a number to it',
            'Specific: Leaves no ambiguity about what is being measured',
            'Customer-linked: Directly traceable to a customer need',
            'Actionable: The process team can influence it',
            'Time-bounded: Includes a timeframe where relevant',
          ],
        },
      ],
    },
    {
      id: 'ss-m4-l3',
      title: 'The Kano Model: Prioritizing What Matters',
      estimatedMinutes: 16,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Not all customer requirements are equal. Professor Noriaki Kano developed a model in the 1980s that categorizes product and service attributes by their relationship to customer satisfaction. Understanding Kano helps teams decide where to invest improvement resources for maximum satisfaction impact.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Must-Be (Basic) Attributes',
              definition: 'Requirements customers take for granted. Their absence causes extreme dissatisfaction, but their presence is not noticed or appreciated. A hotel room must have a working lock — guests expect it but won\'t praise it.',
            },
            {
              term: 'Performance (One-Dimensional) Attributes',
              definition: 'Requirements where more is better — satisfaction increases linearly with performance. A faster laptop, better fuel economy, or lower service fees all create proportionally more satisfaction the better they get.',
            },
            {
              term: 'Excitement (Delighter) Attributes',
              definition: 'Unexpected features that customers don\'t know to ask for. Their absence is not noticed, but their presence creates delight and loyalty. A hotel leaving personalized local recommendations creates excitement.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Kano Attributes Migrate Over Time',
          text: 'Excitement attributes become performance attributes, and performance attributes become must-be attributes as customer expectations evolve. In-flight Wi-Fi was an exciting surprise in 2010; today its absence causes complaints. Six Sigma practitioners must re-assess Kano categories periodically.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Practical Implication',
          text: 'Six Sigma projects should first ensure all Must-Be attributes meet baseline requirements (failure here is catastrophic to satisfaction). Then optimize Performance attributes where improvement resources yield the greatest return. Delighters, while valuable for differentiation, should not distract from fixing failing basics.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ss-m4-q1',
      type: 'multiple-choice' as const,
      question: 'A customer says: "I want software that doesn\'t crash." In a CTQ tree, this statement represents which level?',
      options: ['CTQ specification', 'Quality driver', 'Customer need', 'Measurement metric'],
      correctIndex: 2,
      explanation: 'This is a vague customer need — the starting point of a CTQ tree. It must be translated into quality drivers (e.g., system reliability) and then specific measurable CTQs (e.g., 99.9% uptime, mean time between failures > 2,000 hours).',
    },
    {
      id: 'ss-m4-q2',
      type: 'multiple-choice' as const,
      question: 'Which VoC method is most effective for uncovering customer needs that customers themselves cannot articulate?',
      options: ['Customer satisfaction surveys', 'Complaint log analysis', 'Gemba observation', 'Warranty return data'],
      correctIndex: 2,
      explanation: 'Gemba observation — watching customers use products or services in their natural environment — reveals needs customers don\'t know they have because they\'ve worked around problems so long they\'ve stopped noticing them.',
    },
    {
      id: 'ss-m4-q3',
      type: 'true-false' as const,
      question: 'In the Kano model, dramatically improving a Must-Be attribute will significantly increase customer satisfaction.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Must-Be attributes only move satisfaction from strongly negative to neutral — their presence is expected. No amount of exceeding them generates delight. Over-investing in Must-Be attributes is a common misallocation of improvement resources.',
    },
    {
      id: 'ss-m4-q4',
      type: 'multiple-choice' as const,
      question: 'A well-formed CTQ must include which of the following?',
      options: [
        'A root cause statement explaining why the attribute matters',
        'A specific, measurable specification directly traceable to a customer need',
        'A list of process steps needed to achieve the requirement',
        'An analysis of competitor performance on the same dimension',
      ],
      correctIndex: 1,
      explanation: 'A CTQ is a specific, measurable requirement directly linked to a customer need. It defines what good looks like in objective terms, without prescribing how to achieve it.',
    },
    {
      id: 'ss-m4-q5',
      type: 'multiple-choice' as const,
      question: 'According to the Kano model, an attribute that was a customer "delighter" in 2015 is likely which category today?',
      options: [
        'Still a delighter — excitement attributes are permanent',
        'A performance or must-be attribute, as expectations evolve over time',
        'Irrelevant — Kano attributes disappear as markets mature',
        'A basic quality driver with no satisfaction impact',
      ],
      correctIndex: 1,
      explanation: 'Kano categories migrate over time. Delighters become performance attributes as they spread, and performance attributes become must-be attributes as they become standard. Organizations must periodically reassess their Kano categorizations.',
    },
  ],
};

const module5 = {
  id: 'ss-m5',
  number: 5,
  title: 'Root Cause Analysis Tools',
  description:
    'Develop mastery of the Analyze phase toolkit: Ishikawa fishbone diagrams, the 5 Whys, failure mode thinking, hypothesis-based analysis, and data stratification. Learn to find the causes that truly drive defects.',
  estimatedMinutes: 60,
  learningObjectives: [
    'Construct an Ishikawa (fishbone) diagram to organize potential root causes',
    'Apply the 5 Whys technique to drill from symptoms to root causes',
    'Use data stratification to isolate where and when defects occur',
    'Explain the logic of hypothesis testing in Six Sigma root cause analysis',
  ],
  lessons: [
    {
      id: 'ss-m5-l1',
      title: 'Fishbone Diagrams & Cause Categories',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The Ishikawa diagram — named after quality pioneer Kaoru Ishikawa and also called a fishbone or cause-and-effect diagram — is one of the most widely used tools for organizing potential root causes of a problem. It provides a visual structure that prevents teams from fixating on one category of causes while overlooking others.',
        },
        {
          type: 'heading' as const,
          text: 'The 6M Framework',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'For manufacturing contexts, causes are typically organized into six major categories called the 6Ms. For service and transactional processes, the categories are adapted accordingly.',
        },
        {
          type: 'table' as const,
          headers: ['Category', 'Manufacturing', 'Service/Transactional Equivalent'],
          rows: [
            ['Man (People)', 'Operator skill, training, fatigue', 'Staff knowledge, motivation, turnover'],
            ['Machine', 'Equipment condition, calibration, maintenance', 'Systems, software, tools'],
            ['Method', 'Process steps, procedures, work instructions', 'Policies, procedures, workflows'],
            ['Material', 'Raw material quality, suppliers', 'Input data quality, information'],
            ['Measurement', 'Gauge accuracy, measurement error', 'Data collection integrity'],
            ['Mother Nature (Environment)', 'Temperature, humidity, lighting', 'Physical workspace, organizational culture'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'How to Use a Fishbone Effectively',
          text: 'Place the problem (effect) at the fish\'s head. Draw the major cause categories as bones. Brainstorm specific potential causes under each category using "why" questions. Then — critically — use data to test which causes are actually correlated with the problem. A fishbone generates hypotheses; data tests them.',
        },
      ],
    },
    {
      id: 'ss-m5-l2',
      title: '5 Whys and Hypothesis Thinking',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The 5 Whys is a deceptively simple technique: ask "why" repeatedly until you reach the root cause rather than stopping at a symptom. Developed by Sakichi Toyoda and used extensively in the Toyota Production System, it forces analysts to dig deeper than the obvious first answer.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: '5 Whys in Action',
          text: 'Problem: Invoices are being sent to the wrong address. Why? Because the customer\'s address is wrong in the system. Why? Because the order entry rep entered it incorrectly. Why? Because the customer\'s handwriting was illegible on the paper form. Why? Because we still use paper forms rather than digital entry. Why? Because the digital entry system was never updated for this customer type. Root cause: System gap for a customer category — not human error.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: '5 Whys Pitfalls',
          text: 'The 5 Whys can lead different analysts to different root causes based on which "why" path they follow. It works best for relatively simple, linear problems. For complex processes with multiple interacting causes, complement it with fishbone diagrams and statistical analysis. Also guard against stopping too early — "human error" is almost never a true root cause.',
        },
        {
          type: 'heading' as const,
          text: 'Hypothesis-Based Root Cause Analysis',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Six Sigma elevates root cause analysis by requiring statistical validation of hypotheses. After generating potential causes through fishbones and 5 Whys, the team forms explicit hypotheses: "We believe defect rate is higher when Supplier A provides material than when Supplier B does." Data is then collected and analyzed — using chi-square tests, t-tests, ANOVA, or regression — to accept or reject the hypothesis. This prevents the team from implementing solutions based on opinions or compelling stories rather than evidence.',
        },
        {
          type: 'ordered-list' as const,
          items: [
            'Generate hypotheses from fishbone, 5 Whys, and team brainstorming',
            'Define the null hypothesis (H0): No difference or no relationship exists',
            'Define the alternative hypothesis (H1): The suspected cause has a real effect',
            'Collect data and apply the appropriate statistical test',
            'Interpret the p-value: if p < 0.05, reject H0 and accept the relationship',
            'Confirm practical significance — statistical significance alone is not enough',
          ],
        },
      ],
    },
    {
      id: 'ss-m5-l3',
      title: 'Data Stratification and Failure Mode Thinking',
      estimatedMinutes: 22,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Two powerful but often underutilized Analyze phase techniques are data stratification and failure mode thinking. Together, they help teams pinpoint where and why defects occur before committing to root causes.',
        },
        {
          type: 'heading' as const,
          text: 'Data Stratification',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Stratification means slicing your data by different categories to see if the problem is concentrated in a specific segment. Defect rates often look uniform in aggregate but reveal dramatic differences when stratified by shift, machine, supplier, operator, product type, location, or time of day. Finding these concentrations dramatically narrows the root cause search.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Stratification Revealing Hidden Patterns',
          text: 'An overall defect rate of 4% masked a critical pattern: stratification by shift showed Shift 1 at 1.2%, Shift 2 at 1.8%, and Shift 3 at 9.1%. This immediately focused the investigation on what was different about Shift 3 — leading to discovery of a calibration procedure that was skipped during the overnight handoff.',
        },
        {
          type: 'heading' as const,
          text: 'Failure Mode Thinking',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Failure Mode and Effects Analysis (FMEA) is a structured method for proactively identifying how a process can fail, what effects those failures produce, and how detectable they are. Each failure mode is scored on Severity (1-10), Occurrence frequency (1-10), and Detection difficulty (1-10). The Risk Priority Number (RPN) = S × O × D prioritizes which failure modes deserve immediate attention.',
        },
        {
          type: 'table' as const,
          headers: ['FMEA Element', 'Question It Answers', 'Scale'],
          rows: [
            ['Severity (S)', 'How bad is the impact if this failure occurs?', '1=Minor → 10=Catastrophic'],
            ['Occurrence (O)', 'How often does this failure mode happen?', '1=Rare → 10=Inevitable'],
            ['Detection (D)', 'How likely are current controls to catch this before it reaches the customer?', '1=Always detected → 10=Never detected'],
            ['RPN', 'Overall risk priority (S × O × D)', 'Higher RPN = higher priority'],
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ss-m5-q1',
      type: 'multiple-choice' as const,
      question: 'In a fishbone diagram for a manufacturing process, which category would include issues with machine calibration and maintenance?',
      options: ['Method', 'Material', 'Machine', 'Measurement'],
      correctIndex: 2,
      explanation: 'Machine is the 6M category covering equipment, machinery, tools, calibration, and maintenance conditions. Method covers process steps and procedures; Measurement covers gauge accuracy and data collection.',
    },
    {
      id: 'ss-m5-q2',
      type: 'true-false' as const,
      question: 'In Six Sigma root cause analysis, "human error" is typically considered an acceptable final root cause that justifies closing the investigation.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. "Human error" is almost never a true root cause — it is a symptom. Effective root cause analysis asks why the human error was possible: Was training inadequate? Was the process poorly designed? Were controls missing? Stopping at "human error" leads to ineffective solutions like retraining that don\'t prevent recurrence.',
    },
    {
      id: 'ss-m5-q3',
      type: 'multiple-choice' as const,
      question: 'A team stratifies its defect data by day of week and discovers that 78% of all defects occur on Mondays. This finding is most useful for:',
      options: [
        'Confirming the FMEA risk priority numbers',
        'Narrowing the root cause investigation to what is uniquely different about Mondays',
        'Proving that the process is out of statistical control',
        'Establishing the baseline sigma level for the DMAIC project',
      ],
      correctIndex: 1,
      explanation: 'Stratification revealing a concentration on Mondays gives the team a powerful clue — now they investigate what is different about Mondays. Is it a different shift crew? Weekend equipment shutdown procedures? A supplier delivery pattern? Stratification focuses the investigation.',
    },
    {
      id: 'ss-m5-q4',
      type: 'multiple-choice' as const,
      question: 'In FMEA, a failure mode has Severity=9, Occurrence=2, and Detection=1. What is its RPN, and what does the Detection score tell you?',
      options: [
        'RPN=18; Detection=1 means the failure is almost always caught before reaching the customer',
        'RPN=12; Detection=1 means the failure is very hard to detect',
        'RPN=18; Detection=1 means the failure is very hard to detect',
        'RPN=18; Detection=1 means this failure is the highest priority',
      ],
      correctIndex: 0,
      explanation: 'RPN = 9 × 2 × 1 = 18. A Detection score of 1 means current controls almost always catch the failure before it reaches the customer — the best possible detection score. Despite the high severity, the low occurrence and excellent detection yield a low RPN.',
    },
    {
      id: 'ss-m5-q5',
      type: 'multiple-choice' as const,
      question: 'Which of the following best describes the purpose of hypothesis testing in the DMAIC Analyze phase?',
      options: [
        'To calculate the current sigma level of the process',
        'To statistically confirm or reject proposed root causes using data',
        'To design the optimal improved process solution',
        'To update the project charter with newly discovered scope items',
      ],
      correctIndex: 1,
      explanation: 'Hypothesis testing in Analyze uses statistical methods (t-tests, ANOVA, regression, etc.) to determine whether a suspected cause-and-effect relationship is real or due to chance. It transforms team opinions into evidence-based conclusions.',
    },
  ],
};

const module6 = {
  id: 'ss-m6',
  number: 6,
  title: 'Roles, Teams & Organizational Deployment',
  description:
    'Understand the Belt hierarchy — Yellow, Green, Black, and Master Black Belts — as well as the Champion role. Learn how organizations select and prioritize Six Sigma projects and link them to strategic goals.',
  estimatedMinutes: 50,
  learningObjectives: [
    'Describe the responsibilities and typical project scope of each Belt level',
    'Explain the Champion\'s role in sponsoring and removing barriers from projects',
    'Apply basic criteria for selecting high-value Six Sigma projects',
    'Explain how effective Six Sigma deployment connects project work to business strategy',
  ],
  lessons: [
    {
      id: 'ss-m6-l1',
      title: 'The Belt Hierarchy: Roles and Responsibilities',
      estimatedMinutes: 18,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Six Sigma uses a belt-based hierarchy — borrowed loosely from martial arts — to define different levels of training, expertise, and project leadership responsibility. Each belt level has a distinct role in the organization, and understanding these roles prevents confusion about who does what on a Six Sigma project.',
        },
        {
          type: 'key-terms' as const,
          terms: [
            {
              term: 'Yellow Belt (YB)',
              definition: 'Entry-level Six Sigma practitioners. Yellow Belts understand Six Sigma concepts and participate as team members on DMAIC projects, often contributing process knowledge and helping implement solutions. Typical training: 1-3 days.',
            },
            {
              term: 'Green Belt (GB)',
              definition: 'Mid-level practitioners who lead smaller-scope DMAIC projects, typically within their own functional area, while maintaining their regular job responsibilities. They apply statistical tools and lead teams of Yellow Belts. Typical training: 2-4 weeks.',
            },
            {
              term: 'Black Belt (BB)',
              definition: 'Full-time Six Sigma project leaders who manage complex, cross-functional DMAIC projects with significant financial impact. Black Belts mentor Green Belts and serve as the primary technical experts on methodology. Typical training: 4-5 weeks plus project completion.',
            },
            {
              term: 'Master Black Belt (MBB)',
              definition: 'Senior Six Sigma experts who coach and develop Black and Green Belts, lead the most complex strategic projects, develop training curriculum, and serve as internal consultants on methodology. MBBs are typically full-time Six Sigma resources.',
            },
            {
              term: 'Champion',
              definition: 'A senior leader (typically a VP or Director) who sponsors Six Sigma projects, selects and prioritizes project portfolios, removes organizational barriers, provides resources, and ensures projects are linked to business strategy. Champions do not typically have formal Belt certification.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Typical Project Financial Targets by Belt',
          text: 'While organizations vary, common targets are: Green Belt projects — $50,000 to $150,000 in annual savings; Black Belt projects — $150,000 to $500,000+ in annual savings. Master Black Belts focus on strategic impact and capability development rather than single project savings.',
        },
      ],
    },
    {
      id: 'ss-m6-l2',
      title: 'Project Selection: Picking the Right Problems',
      estimatedMinutes: 16,
      content: [
        {
          type: 'paragraph' as const,
          text: 'The best DMAIC methodology in the world cannot overcome a poorly selected project. Project selection is the most important leverage point in a Six Sigma deployment — it determines whether the program creates real business value or generates impressive-looking statistics disconnected from strategy.',
        },
        {
          type: 'heading' as const,
          text: 'Criteria for Good Project Selection',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Strategic linkage: The project addresses a recognized strategic priority or key performance gap',
            'Measurable gap: A clear, quantified difference between current and desired performance exists',
            'Unknown root cause: The solution is not already known — if it is, do a just-do-it, not a DMAIC project',
            'Appropriate scope: The project can be completed in 3-6 months — not so narrow it\'s trivial, not so broad it\'s unmanageable',
            'Data available: Process data exists or can be collected within the project timeline',
            'Financial impact: Expected savings or revenue impact is significant relative to project cost',
            'Champion support: A senior leader is committed and will remove barriers',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Signs of a Poorly Chosen Project',
          text: 'Beware projects where the solution is already decided before the team starts (DMAIC becomes theater), scope is defined by organizational boundaries rather than the actual problem, root causes are already "known" by everyone but data is missing, or financial benefits are speculative and hard to validate.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Project Selection in Practice',
          text: 'A financial services firm identifies three candidate projects: (1) Reduce loan application processing time from 12 days to 5 days — $800K annual revenue impact, (2) Reduce paper usage in the mailroom — $15K annual savings, (3) Improve quarterly report formatting — subjective benefit. Project 1 is the right Six Sigma project. Project 2 might be a quick win. Project 3 is not a Six Sigma project at all.',
        },
      ],
    },
    {
      id: 'ss-m6-l3',
      title: 'Linking Six Sigma to Organizational Strategy',
      estimatedMinutes: 16,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Six Sigma programs that operate as isolated training exercises or generate "feel good" savings without strategic impact tend to fade within two to three years. Sustainable, high-impact deployments explicitly connect the Six Sigma project portfolio to the organization\'s strategic objectives.',
        },
        {
          type: 'heading' as const,
          text: 'Strategy Deployment and Six Sigma',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The most effective organizations use a top-down approach to project identification: (1) Senior leadership identifies strategic priorities and key performance gaps. (2) Champions translate these into specific improvement opportunities. (3) Master Black Belts help scope these opportunities into executable DMAIC projects. (4) Black and Green Belts execute the projects. (5) Results are tracked against strategic goals, not just project-level savings.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Hoshin Kanri and Six Sigma',
          text: 'Many mature Six Sigma organizations use Hoshin Kanri (Policy Deployment) — a Japanese strategic planning method — to cascade organizational goals through the hierarchy and align Six Sigma project selection with breakthrough strategic objectives. This ensures that Six Sigma effort flows toward the organization\'s most critical few priorities.',
        },
        {
          type: 'heading' as const,
          text: 'Common Deployment Pitfalls',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Training without projects: Certifying Belts without assigning real projects produces no results',
            'Bottom-up project selection: Allowing individuals to self-select projects leads to low-impact work',
            'Lack of Champion engagement: Projects stall when Champions don\'t actively remove barriers',
            'Ignoring change management: Technical solutions fail when people aren\'t brought along',
            'Measuring belt counts, not business impact: Deployments that celebrate certifications without tracking financial results lose executive support quickly',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ss-m6-q1',
      type: 'multiple-choice' as const,
      question: 'Which Belt level typically leads complex, cross-functional DMAIC projects full-time and also mentors Green Belts?',
      options: ['Yellow Belt', 'Green Belt', 'Black Belt', 'Champion'],
      correctIndex: 2,
      explanation: 'Black Belts are full-time Six Sigma project leaders who manage complex cross-functional projects and serve as technical mentors to Green Belts. Green Belts lead projects while maintaining their regular roles; Champions are senior leaders who sponsor projects.',
    },
    {
      id: 'ss-m6-q2',
      type: 'true-false' as const,
      question: 'A good Six Sigma project candidate is one where the team already knows the root cause and just needs DMAIC structure to implement the solution.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. If the root cause is already known, the project is a "just-do-it" — implement the solution directly without a full DMAIC investigation. DMAIC is appropriate when the root cause is genuinely unknown and requires data-driven analysis to discover.',
    },
    {
      id: 'ss-m6-q3',
      type: 'multiple-choice' as const,
      question: 'What is the primary responsibility of a Six Sigma Champion?',
      options: [
        'Leading DMAIC project teams through statistical analysis',
        'Training Yellow Belts in basic quality tools',
        'Sponsoring projects, selecting the project portfolio, and removing organizational barriers',
        'Developing and updating Six Sigma training curriculum',
      ],
      correctIndex: 2,
      explanation: 'Champions are senior leaders who sponsor projects, make strategic project selection decisions, and use their authority to remove the organizational obstacles that would otherwise stall projects. Curriculum development is an MBB responsibility; statistical leadership belongs to Black Belts.',
    },
    {
      id: 'ss-m6-q4',
      type: 'multiple-choice' as const,
      question: 'Which of the following is a warning sign that a Six Sigma deployment is NOT effectively linked to organizational strategy?',
      options: [
        'Projects are selected through a top-down process tied to strategic priorities',
        'The deployment tracks belt certifications but not financial results or strategic impact',
        'Champions actively participate in tollgate reviews',
        'Master Black Belts help scope projects from strategic gaps',
      ],
      correctIndex: 1,
      explanation: 'Measuring belt counts without tracking business impact signals a deployment focused on activity rather than results. Effective deployments report financial savings and strategic improvements — not just how many people got certified.',
    },
    {
      id: 'ss-m6-q5',
      type: 'multiple-choice' as const,
      question: 'Hoshin Kanri contributes to Six Sigma deployment by:',
      options: [
        'Providing a structured format for FMEA analysis',
        'Aligning Six Sigma project selection with breakthrough strategic objectives through structured policy deployment',
        'Defining the statistical thresholds for Green and Black Belt certification',
        'Replacing the DMAIC framework for service industry applications',
      ],
      correctIndex: 1,
      explanation: 'Hoshin Kanri (Policy Deployment) cascades strategic objectives through the organization and helps ensure that Six Sigma projects are selected based on strategic priorities — connecting improvement work directly to what matters most to leadership.',
    },
  ],
};

export const sixSigmaPrinciplesCourse: Course = {
  id: 'six-sigma-principles',
  track: 'lean-foundations',
  title: 'Principles of Six Sigma Process Improvement',
  subtitle: 'Data-Driven Quality at Every Level',
  description:
    'Master the foundational concepts of Six Sigma, from statistical thinking and variation to the DMAIC framework. Learn how organizations use data to identify root causes, reduce defects, and achieve breakthrough improvements.',
  status: 'available',
  estimatedHours: 6,
  color: '#9b6bbf',
  icon: '📊',
  modules: [module1, module2, module3, module4, module5, module6],
};
