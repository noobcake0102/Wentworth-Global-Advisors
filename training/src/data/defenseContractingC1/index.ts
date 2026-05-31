import type { Course } from '../../types/course';

export const defenseBDAwarenessCourse: Course = {
  id: 'defense-bd-awareness',
  track: 'defense-contracting',
  title: 'How Defense Contracts Are Won',
  subtitle: 'Track C · Level 1 · BD Awareness',
  description:
    'A ground-level introduction to the defense acquisition system for BD and sales professionals. Learn how money flows from Congress to a contract, where your company can realistically influence outcomes, which contract vehicles matter, how source selection actually works, and how to read the competitive landscape before you ever write a proposal.',
  status: 'available',
  estimatedHours: 4,
  color: '#6b5a8a',
  icon: '🎖️',
  modules: [
    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 1 — The Defense Acquisition System
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-bd-c1-m1',
      number: 1,
      title: 'The Defense Acquisition System',
      description:
        'Understand how the federal government decides what to buy, when to buy it, and how money gets authorized before a contract ever appears on SAM.gov.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Explain the PPBE cycle and why defense money takes 2+ years to reach a contract',
        'Distinguish between a program of record and a funded requirement',
        'Identify where in the acquisition timeline a company can realistically influence an outcome',
        'Describe the difference between the requirements community and the acquisition community',
      ],
      lessons: [
        // ── Lesson 1.1 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m1-l1',
          title: 'PPBE — How Money Flows from Congress to a Contract',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'Here is the first thing most commercial salespeople get wrong about defense: the money is not sitting somewhere waiting for you. Defense spending is a two-year-plus process that begins inside the Pentagon\'s programming shops long before any solicitation appears. Understanding that process is the difference between BD and cold-calling.',
            },
            {
              type: 'heading',
              text: 'The Four Phases of PPBE',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The Planning, Programming, Budgeting, and Execution (PPBE) process is the Department of Defense\'s system for deciding where money goes. It replaced the older PPBS (Planning, Programming, and Budgeting System) in 2003 to add the Execution phase — a recognition that actually spending money well is as important as planning to spend it. The four phases run in a roughly two-year cycle that repeats annually.',
            },
            {
              type: 'ordered-list',
              items: [
                'Planning — The Joint Chiefs and combatant commanders identify capability gaps and strategic priorities. This is where threats get named and missions get defined. If your product doesn\'t map to a named capability gap at this stage, you have a long road ahead.',
                'Programming — The military departments (Army, Navy, Air Force) and defense agencies build their Program Objective Memorandum (POM), a 5-year spending plan. Programs live or die in the POM. If your program isn\'t in the POM, it has no money — period.',
                'Budgeting — OSD and OMB scrub the POM into a budget request. This is where programs get cut, deferred, or restructured. The budget request goes to Congress in February of each year.',
                'Execution — Congress passes an appropriation (or a Continuing Resolution). The money is apportioned to the services and obligated through contracts. This is the only phase where a vendor actually gets paid.',
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Why Two Years?',
              text: 'The POM that funds a contract award in FY2027 was built in FY2025 and submitted to Congress in early FY2026. That is not inefficiency — it is a deliberate planning cycle. Your BD strategy has to work backward from award date to understand when you needed to start influencing the requirement.',
            },
            {
              type: 'heading',
              text: 'Appropriation Types — Not All DoD Money Is the Same',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Congress doesn\'t appropriate one lump sum to the Pentagon. It appropriates money in specific "colors" — categories that define what the money can be used for and how long it stays available. Confusing these gets contracting officers fired and companies in trouble.',
            },
            {
              type: 'table',
              headers: ['Appropriation Type', 'Abbreviation', 'What It Buys', 'Availability Period'],
              rows: [
                ['Research, Development, Test & Evaluation', 'RDT&E', 'Technology development, prototypes, testing', '2 years'],
                ['Procurement', 'OPA / APA / WPN etc.', 'Production units, end items', '3 years'],
                ['Operations & Maintenance', 'O&M', 'Services, repairs, supplies, sustainment', '1 year (expires Sept 30)'],
                ['Military Construction', 'MILCON', 'Facilities and infrastructure', '5 years'],
                ['Other Procurement', 'OPA', 'Support equipment, vehicles', '3 years'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'O&M Money Expires September 30',
              text: 'O&M is one-year money. If a program office has O&M funding and it\'s August, they are under pressure to obligate it or lose it. This creates real urgency — but also means the requirement was already planned. Don\'t confuse end-of-year spending frenzies with actual BD opportunities you influenced.',
            },
            {
              type: 'heading',
              text: 'From POM to Contract: The Timeline Reality',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Walk through the math. A program office identifies a need in early FY2025. They get it into the POM in spring FY2025. The budget request goes to Congress in February FY2026. Congress passes the appropriation in (optimistically) October FY2026. The program office receives and apportions funds in November FY2026. They award a contract in spring FY2027. From identified need to contract: roughly two years on a good day.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The RFP That Surprised Everyone — Except the Winner',
              text: 'A mid-size manufacturer saw an RFP drop for a vehicle protection system and put together a strong proposal. They lost. When they debriefed, they learned the winner had been working with the program office for 18 months — attending requirements reviews, providing white papers, even suggesting language that ended up in the PWS. The RFP wasn\'t the start of the competition. It was the finish line.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'PPBE', definition: 'Planning, Programming, Budgeting, and Execution — the DoD\'s annual cycle for allocating resources across all programs and activities.' },
                { term: 'PPBS', definition: 'Planning, Programming, and Budgeting System — the predecessor to PPBE, lacking the formal Execution phase.' },
                { term: 'POM', definition: 'Program Objective Memorandum — the military department\'s 5-year spending plan submitted during the Programming phase.' },
                { term: 'RDT&E', definition: 'Research, Development, Test and Evaluation — appropriation funding that covers technology development and prototyping, available for 2 years.' },
                { term: 'O&M', definition: 'Operations and Maintenance — one-year appropriation used for services, sustainment, and day-to-day operations. Expires September 30.' },
                { term: 'Continuing Resolution', definition: 'When Congress fails to pass a budget by October 1, the government operates under prior-year funding levels. New program starts are generally prohibited under a CR.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Map your BD calendar to the PPBE cycle, not to SAM.gov. If you want to influence FY2028 funding, your engagement needs to happen in FY2025-2026 during the programming phase. By the time a solicitation posts, the money is already color-coded and earmarked. You\'re either on that train or you\'re buying a ticket for the next one.',
            },
          ],
        },
        // ── Lesson 1.2 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m1-l2',
          title: 'Program of Record vs. Funded Requirement — and Why It Matters',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'Two terms get confused constantly in defense BD conversations: "program of record" and "funded requirement." They sound similar. They are not the same thing, and misunderstanding them leads to wasted pipeline entries and missed opportunities.',
            },
            {
              type: 'heading',
              text: 'What Is a Program of Record?',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A program of record (POR) is a formally recognized acquisition program that has survived the milestone review process and has an approved acquisition strategy, a program manager, and — most critically — a line item in the DoD\'s Future Years Defense Program (FYDP). A POR has political durability. Canceling it requires congressional notification and usually takes years.',
            },
            {
              type: 'paragraph',
              text: 'Getting into a program of record as a prime or major subcontractor is the holy grail for most defense manufacturers. It provides sustained revenue across multiple budget cycles. But entry is brutally competitive, the programs take years to mature, and the barrier to entry is high — especially on new starts.',
            },
            {
              type: 'heading',
              text: 'What Is a Funded Requirement?',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A funded requirement is exactly what it sounds like: a documented need with money attached to it. It may not be a formal program of record. It could be a one-time buy, a modification to an existing contract, a quick reaction capability purchase, or a below-threshold acquisition. Funded requirements are where most small and mid-size companies actually win business.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The FYDP Is Public Data',
              text: 'The Future Years Defense Program is published annually with the President\'s budget request. The President\'s Budget Justification Books — "budget exhibits" — are available on the DoD Comptroller website. Reading them tells you which programs have funding, how much, for how many years, and what the program office has told Congress it will deliver.',
            },
            {
              type: 'heading',
              text: 'The Acquisition Milestone Framework',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Major defense acquisition programs (MDAPs) follow a structured milestone process governed by DoD Instruction 5000.02. Understanding where a program sits in this framework tells you how locked-in the requirements are, how much money is flowing, and where competition is realistic.',
            },
            {
              type: 'table',
              headers: ['Milestone / Phase', 'Abbreviation', 'What Happens', 'Typical Duration'],
              rows: [
                ['Materiel Development Decision', 'MDD', 'Program officially enters acquisition; starts with a formal capability gap', 'One event'],
                ['Analysis of Alternatives', 'AoA', 'DoD evaluates multiple approaches to meeting the capability gap', '12–24 months'],
                ['Milestone A — Technology Maturation & Risk Reduction', 'TMRR / MS-A', 'Competitive prototyping authorized; early contracts awarded for technology development', '2–4 years'],
                ['Milestone B — Engineering & Manufacturing Development', 'EMD / MS-B', 'Development contract(s) awarded; requirements are now largely frozen', '3–7 years'],
                ['Milestone C — Production & Deployment', 'P&D / MS-C', 'Low-rate initial production (LRIP) authorized; full-rate production follows', '5–20+ years'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Requirements Freeze After Milestone B',
              text: 'After Milestone B, changing the requirements on a major program is politically and contractually painful. If your product doesn\'t match what\'s in the approved Requirements Document by the time of EMD contract award, you\'re either a subcontractor or you\'re out. This is why early engagement — at MDD, AoA, and TMRR — is worth so much more than a polished proposal submission.',
            },
            {
              type: 'heading',
              text: 'Below-Threshold Programs — Where Most Smaller Companies Compete',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Not every defense buy is an MDAP. Below the MDAP threshold ($480M+ RDT&E or $2.79B+ procurement), programs are managed as ACAT II, ACAT III, or Abbreviated Acquisition Programs. These have faster timelines, less oversight, and more flexibility. A significant portion of annual defense contracting dollars flows through these channels.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Program of Record (POR)', definition: 'A formally recognized acquisition program with an approved acquisition strategy, a dedicated program manager, and a FYDP line item.' },
                { term: 'FYDP', definition: 'Future Years Defense Program — the 5-year spending plan submitted with the President\'s budget, showing planned program funding through the out-years.' },
                { term: 'MDD', definition: 'Materiel Development Decision — the formal entry point into the acquisition system where a capability gap is recognized and an acquisition approach is authorized.' },
                { term: 'AoA', definition: 'Analysis of Alternatives — a structured evaluation of alternative approaches to meeting a capability need, conducted before Milestone A.' },
                { term: 'Milestone A', definition: 'Entry into Technology Maturation and Risk Reduction phase. Competitive prototyping may begin. Requirements are still maturing.' },
                { term: 'Milestone B', definition: 'Entry into Engineering and Manufacturing Development. Development contract awarded. Requirements are largely frozen.' },
                { term: 'Milestone C', definition: 'Entry into Production and Deployment. Low-Rate Initial Production authorized.' },
                { term: 'MDAP', definition: 'Major Defense Acquisition Program — a program that exceeds the dollar thresholds requiring DAE-level oversight and full milestone reviews.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Know the difference between chasing a program of record (a multi-year campaign) and winning a funded requirement (a near-term transaction). Both are valid strategies. The mistake is treating them the same way. A POR pursuit requires C-suite engagement, IR&D investment, and a 3-5 year BD horizon. A funded requirement may close in 90 days. Don\'t bring a POR strategy to a funded requirement fight — or vice versa.',
            },
          ],
        },
        // ── Lesson 1.3 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m1-l3',
          title: 'Influence Windows and the Requirements vs. Acquisition Community',
          estimatedMinutes: 19,
          content: [
            {
              type: 'paragraph',
              text: 'The most common BD mistake in defense is engaging the acquisition community — the contracting officers and program managers who run competitions — while neglecting the requirements community — the operators, warfighters, and capability developers who decide what gets bought. One writes contracts. The other decides what\'s worth buying.',
            },
            {
              type: 'heading',
              text: 'The Requirements Community: Who Writes the Spec',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The requirements community is made up of the end-users and capability sponsors who identify gaps, write doctrine, and generate the documents that define what the military needs. In the Army, this is led by Army Futures Command (AFC) and the relevant capability manager. In the Navy, it\'s the requirements officers at OPNAV. In the Air Force, it\'s the capability advocates at HAF/A5.',
            },
            {
              type: 'list',
              items: [
                'Initial Capabilities Document (ICD) — defines the capability gap; written by warfighters',
                'Capability Development Document (CDD) — defines Key Performance Parameters (KPPs); written by requirements offices',
                'Capability Production Document (CPD) — the production-phase spec; usually written late, often by the EMD contractor',
                'Joint Requirements Oversight Council (JROC) — validates requirements for major programs; chaired by the Vice Chairman of the Joint Chiefs',
              ],
            },
            {
              type: 'heading',
              text: 'The Acquisition Community: Who Runs the Contract',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The acquisition community manages programs through the milestone framework and runs the competition. This includes the Program Executive Office (PEO), the Program Manager (PM), and the Contracting Officer (KO). They turn validated requirements into contracts. They have little say over what gets bought — only how.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Program Offices Are Between the Two',
              text: 'The PM\'s office occupies a middle ground — they translate requirements into acquisition documents like the PWS or SOW, and they interact with both communities. Building relationships with the PM\'s office is valuable, but understand that requirements authority sits above them.',
            },
            {
              type: 'heading',
              text: 'Influence Windows: Where You Can Actually Move the Needle',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Not every point in the acquisition timeline is equally actionable for a vendor. Some windows are wide open for industry engagement. Others are locked. Knowing the difference saves you from wasting BD resources on engagements that look productive but change nothing.',
            },
            {
              type: 'table',
              headers: ['Acquisition Stage', 'Influence Level', 'What Industry Can Do'],
              rows: [
                ['Pre-MDD / Requirements Generation', 'HIGH', 'Brief warfighters, publish white papers, present at requirements reviews, participate in user evaluations'],
                ['AoA / TMRR', 'HIGH', 'Respond to RFIs, participate in market surveys, submit unsolicited proposals, pursue SBIR/OTA agreements'],
                ['Draft RFP / Sources Sought', 'MEDIUM', 'Submit comments on draft RFP, shape evaluation criteria, request clarifications — but major requirements are largely set'],
                ['RFP Released / Proposal Period', 'LOW', 'Write a compliant proposal. Shaping is over. Execution begins.'],
                ['Source Selection', 'NONE (legally)', 'Zero contact with Source Selection officials. Any attempt to influence is a protest risk and potentially illegal.'],
                ['Post-Award / Contract Execution', 'MEDIUM', 'Influence next procurement through performance, relationships, and technical interchange meetings (TIMs)'],
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The RFI Nobody Read',
              text: 'A program office issued an RFI eighteen months before the RFP to understand the industrial base. Fourteen companies responded. One company — a smaller, newer entrant — submitted a response that directly addressed an unspoken concern the program office had about integration complexity. That response started a relationship. They were invited to a technical interchange meeting. They understood the real requirement before the RFP was written. They won. The other thirteen treated the RFI as a checkbox. The winner treated it as intelligence gathering.',
            },
            {
              type: 'heading',
              text: 'RFI vs. RFP — The Difference That Matters',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A Request for Information (RFI) is not a procurement. It is market research. The government has no obligation to act on it, award anything, or even acknowledge your response. But responding to RFIs — thoughtfully, specifically, with real technical content — is one of the highest-ROI BD activities available to you.',
            },
            {
              type: 'paragraph',
              text: 'A Request for Proposals (RFP) or Request for Quotations (RFQ) is a commitment by the government to evaluate responses and (usually) award a contract. By the time an RFP drops, the requirement is set, the evaluation criteria are set, and the timeline is fixed. Your only job is to write a winning proposal.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'RFI', definition: 'Request for Information — a market research tool, not a procurement. No award obligation. High-value engagement opportunity.' },
                { term: 'RFP', definition: 'Request for Proposals — a formal solicitation inviting offerors to submit proposals for evaluation and potential award.' },
                { term: 'PWS', definition: 'Performance Work Statement — a type of statement of work that describes the required results in measurable, outcomes-based terms.' },
                { term: 'SOW', definition: 'Statement of Work — describes specific tasks the contractor must perform, often more prescriptive than a PWS.' },
                { term: 'SOO', definition: 'Statement of Objectives — the most minimal statement, providing only high-level objectives and letting offerors propose their own approach.' },
                { term: 'ICD', definition: 'Initial Capabilities Document — early requirements document identifying capability gaps and potential approaches.' },
                { term: 'CDD', definition: 'Capability Development Document — defines Key Performance Parameters (KPPs) and Key System Attributes (KSAs) for a program.' },
                { term: 'JROC', definition: 'Joint Requirements Oversight Council — senior DoD body that validates requirements for major programs.' },
                { term: 'TIM', definition: 'Technical Interchange Meeting — a government-industry interaction used to share technical information, refine requirements, or review progress.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Split your BD calendar explicitly: time with the requirements community (warfighters, capability managers, program sponsors) and time with the acquisition community (PMs, contracting officers, PEOs). Most BD orgs over-invest in acquisition relationships because those people are easier to find. The requirements community is harder to access, moves slower, and is worth dramatically more. Every hour you spend briefing a user command on capability gaps is worth ten hours polishing a proposal after the RFP drops.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-bd-c1-m1-q1',
          type: 'multiple-choice',
          question: 'A defense program office identifies a new capability need in early FY2025. Under the PPBE cycle, what is the earliest realistic contract award date?',
          options: [
            'Late FY2025',
            'Early FY2026',
            'Mid-to-late FY2026 at best, more likely FY2027',
            'FY2028 or later for any significant program',
          ],
          correctIndex: 2,
          explanation: 'The PPBE cycle requires the need to work through Programming (POM build in FY2025), Budgeting (budget request to Congress in Feb FY2026), and Execution (appropriation and obligation). A realistic timeline is 2+ years from identified need to contract award.',
        },
        {
          id: 'defense-bd-c1-m1-q2',
          type: 'multiple-choice',
          question: 'What is the key difference between O&M and Procurement appropriations?',
          options: [
            'O&M is only for hardware; Procurement covers services',
            'O&M is one-year money that expires September 30; Procurement funds are available for 3 years',
            'Procurement requires congressional approval; O&M does not',
            'O&M covers research and development; Procurement covers production',
          ],
          correctIndex: 1,
          explanation: 'O&M (Operations and Maintenance) is one-year money that expires at the end of the fiscal year (September 30). Procurement appropriations are 3-year money. This distinction matters for program planning and end-of-year spending dynamics.',
        },
        {
          id: 'defense-bd-c1-m1-q3',
          type: 'multiple-choice',
          question: 'At which milestone point do requirements on a major defense acquisition program become largely frozen?',
          options: [
            'Materiel Development Decision (MDD)',
            'Analysis of Alternatives (AoA) completion',
            'Milestone A (Technology Maturation & Risk Reduction entry)',
            'Milestone B (Engineering & Manufacturing Development entry)',
          ],
          correctIndex: 3,
          explanation: 'After Milestone B, the development contract is awarded and the Key Performance Parameters are locked. Changing requirements after this point is contractually and politically painful. Earlier phases — especially pre-MDD and AoA — offer the most flexibility to shape what gets bought.',
        },
        {
          id: 'defense-bd-c1-m1-q4',
          type: 'true-false',
          question: 'A "funded requirement" and a "program of record" mean the same thing — both describe a defense program with money attached to it.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. A program of record has a formal acquisition baseline, a dedicated program manager, and a FYDP line item — it is institutionally durable. A funded requirement simply means a documented need with money authorized. It may be a one-time buy, a modification, or a below-threshold purchase with no formal program structure.',
        },
        {
          id: 'defense-bd-c1-m1-q5',
          type: 'multiple-choice',
          question: 'Who has authority to define Key Performance Parameters (KPPs) that the acquisition community must satisfy?',
          options: [
            'The Program Manager (PM)',
            'The Contracting Officer (KO)',
            'The requirements community (warfighters, capability managers, JROC)',
            'The Under Secretary of Defense for Acquisition and Sustainment',
          ],
          correctIndex: 2,
          explanation: 'KPPs are defined in the Capability Development Document (CDD), which is written by the requirements community — operators, capability managers, and requirements offices — and validated by the JROC for major programs. The acquisition community manages how those requirements are met, not what the requirements are.',
        },
        {
          id: 'defense-bd-c1-m1-q6',
          type: 'multiple-choice',
          question: 'When is industry influence on a source selection officially prohibited?',
          options: [
            'After the draft RFP is released',
            'After the final RFP is released',
            'Once source selection begins — contact with source selection officials is prohibited',
            'Only after best-and-final offers (BAFOs) are submitted',
          ],
          correctIndex: 2,
          explanation: 'Once a Source Selection is underway, contact with source selection officials (SSEB members, SSAC, SSA) is strictly prohibited. Attempts to influence an active source selection can result in proposal disqualification, protest grounds for competitors, and potential legal liability.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 2 — Contract Vehicles and Where Opportunities Live
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-bd-c1-m2',
      number: 2,
      title: 'Contract Vehicles and Where Opportunities Live',
      description:
        'Navigate the maze of contract vehicles — SAM.gov, GSA Schedules, IDIQs, OTAs, and SBIRs — and learn which ones are actually worth your investment for a defense manufacturer.',
      estimatedMinutes: 58,
      learningObjectives: [
        'Use SAM.gov as an active BD intelligence tool, not just a registration database',
        'Explain how GSA Schedules work and assess whether getting on one is worth the investment',
        'Distinguish between IDIQs, GWACs, and OTAs and identify which vehicle type fits a given opportunity',
        'Evaluate SBIR/STTR as a BD investment and understand the realistic path from Phase I to revenue',
      ],
      lessons: [
        // ── Lesson 2.1 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m2-l1',
          title: 'SAM.gov — Intelligence Tool, Not Just a Registration Database',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'Most defense companies treat SAM.gov as a registration hassle — something you log into once a year to renew, then forget. That is a BD malpractice. SAM.gov is one of the richest free sources of competitive intelligence in the defense market, if you know how to use it.',
            },
            {
              type: 'heading',
              text: 'Beyond Registration: What SAM.gov Actually Contains',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Active solicitations: every federal contract opportunity above the simplified acquisition threshold ($250K) must be posted',
                'Pre-solicitation notices: agencies announce upcoming solicitations weeks or months in advance — these are early warning signals',
                'Sources Sought notices: market research notices asking whether capable vendors exist — responding signals your interest and capability',
                'Award notices: who won, how much, from which agency, under which NAICS code — invaluable competitive intel',
                'Contract data (via FPDS integration): historical award patterns by agency, contractor, and product/service code',
              ],
            },
            {
              type: 'heading',
              text: 'Building a SAM.gov Intelligence Feed',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The single highest-value action you can take right now is setting up saved searches on SAM.gov. Filter by your NAICS codes, your target agencies, and relevant PSC (Product and Service) codes. Set email alerts. Every morning you should know what new opportunities, pre-solicitations, and award notices appeared overnight in your target market.',
            },
            {
              type: 'ordered-list',
              items: [
                'Log into SAM.gov and navigate to "Contract Opportunities"',
                'Use "Advanced Search" — filter by NAICS code, agency, set-aside type, and notice type',
                'Save your search and enable email notifications — daily digest is usually sufficient',
                'Set a second search with broader NAICS codes to catch adjacent opportunities',
                'Review award notices weekly — look for patterns in who is winning, from which contracting offices, at what dollar thresholds',
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'NAICS Codes Are BD Strategy Decisions',
              text: 'Your NAICS code selection in SAM.gov is not just a registration field — it determines which set-aside competitions you\'re eligible for and how contracting officers will find you in market research. Make sure your primary NAICS code reflects your most competitive capability, not your largest historical revenue stream.',
            },
            {
              type: 'heading',
              text: 'Reading Award Notices as Competitive Intelligence',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Award notices tell you the winner, the contract value, the period of performance, the contracting office, and often the description of work. Build a tracker. Over 12 months you will see which program offices are active buyers in your space, who your consistent competitors are, what price ranges are clearing, and which vehicles are being used. This is your competitive map.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Award Notice That Predicted the Next Opportunity',
              text: 'A defense electronics company systematically tracked award notices from a particular PEO office for 18 months. They noticed a pattern: the same prime won three consecutive buys under a specific PSC code with similar dollar values. They contacted the prime\'s subcontracting manager before the fourth opportunity posted. They became a subcontractor on the next award — not because they were the most qualified, but because they were paying attention and showed up before the competition started.',
            },
            {
              type: 'heading',
              text: 'Set-Aside Types — What They Mean for Your Eligibility',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Set-Aside Type', 'Eligibility Requirement', 'Size Standard', 'Strategic Note'],
              rows: [
                ['Total Small Business', 'Small business under SBA size standard for NAICS', 'NAICS-specific', 'Largest volume of set-aside work; check your size standard carefully'],
                ['8(a)', 'SBA 8(a) program certification', 'Small business', 'Sole-source authority up to $4.5M (goods/services), $7.5M (manufacturing); valuable but slow to obtain'],
                ['SDVOSB', 'Service-Disabled Veteran-Owned, verified by VA', 'Small business', 'Sole-source up to $5.5M; growing in usage across DoD'],
                ['WOSB', 'Women-Owned Small Business, SBA-certified', 'Small business', 'Available in underrepresented industries; check NAICS eligibility'],
                ['HUBZone', 'Located in Historically Underutilized Business Zone', 'Small business', 'Price evaluation preference in full-and-open competition; powerful if you qualify'],
                ['Full and Open', 'Any responsible offeror', 'None', 'Large businesses compete; small businesses can still win on value'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Spend 30 minutes this week setting up your SAM.gov saved searches. Then spend 30 minutes reviewing last quarter\'s award notices in your target NAICS codes. You will learn more about your competitive landscape from that one hour than from a year of attending trade shows. Award notices are free, specific, and honest — the market is telling you exactly who is winning and what they\'re winning.',
            },
          ],
        },
        // ── Lesson 2.2 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m2-l2',
          title: 'GSA Schedules, IDIQs, GWACs, and OTAs — The Vehicle Landscape',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'Defense acquisition is increasingly moving away from standalone full-and-open competitions toward pre-established contract vehicles — mechanisms that let agencies order from a pre-vetted pool of vendors quickly and with reduced administrative burden. Understanding these vehicles is essential because the competition you need to win is often not the task order — it\'s getting on the vehicle in the first place.',
            },
            {
              type: 'heading',
              text: 'GSA Multiple Award Schedules',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The GSA Multiple Award Schedule (MAS) program is a long-term governmentwide contract with commercial companies that provides federal, state, and local governments access to commercial products and services at pre-negotiated prices. Getting on a Schedule establishes your pricing and terms with GSA once; agencies order from you directly without conducting a full competition above the micro-purchase threshold.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Is a GSA Schedule Worth It for a Manufacturer?',
              text: 'For commercial products with broad application across multiple agencies — IT hardware, office equipment, training services — yes, absolutely. For a highly specialized defense manufacturer whose work is all program-specific, it depends. If the agencies you target regularly use Schedule ordering authority and your products are commercially available, invest in it. If your work is all custom, cost-reimbursement development for a single PEO, the Schedule may never generate a dollar of revenue.',
            },
            {
              type: 'heading',
              text: 'IDIQs — Indefinite Delivery, Indefinite Quantity Contracts',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'An IDIQ contract establishes a pool of pre-qualified contractors for a specific category of work. The government commits to a minimum order and a maximum ceiling. Individual task orders are competed (or sometimes issued on a sole-source basis) among the pool. IDIQs dominate defense services contracting. Major defense IDIQ vehicles can carry $50B+ in ceiling value.',
            },
            {
              type: 'paragraph',
              text: 'The critical point: getting on an IDIQ is a competitive event, not a task order win. You must win a spot on the vehicle to compete for task orders. Missing a vehicle award may mean sitting out a market segment for 5-10 years. Monitoring upcoming IDIQ competitions with 12-24 months of lead time is essential.',
            },
            {
              type: 'heading',
              text: 'GWACs — Governmentwide Acquisition Contracts',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'GWACs are a subset of IDIQs authorized for governmentwide use by any federal agency. The most prominent ones in defense are IT-focused (SEWP, Alliant 2, CIO-SP3), but they are used extensively by defense agencies for IT modernization, cloud services, and cybersecurity work.',
            },
            {
              type: 'heading',
              text: 'Other Transaction Authorities (OTAs)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'OTAs are not contracts under the Federal Acquisition Regulation. They are a separate legal authority (primarily 10 U.S.C. § 4022 for R&D and 10 U.S.C. § 4021 for prototype projects) that allows DoD to execute agreements with terms, IP arrangements, and cost-sharing structures that FAR-based contracts cannot accommodate.',
            },
            {
              type: 'paragraph',
              text: 'OTAs have become a primary mechanism for getting non-traditional defense contractors and commercial technology companies involved in defense work. They are faster to award, allow more flexible IP terms, and can transition to traditional production contracts if the prototype succeeds.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'OTA ≠ No Competition',
              text: 'OTAs require competitive prototyping (at least two offers for prototype OTAs unless a waiver is granted). They also cannot exceed $100M for most prototype OTAs without additional approval. And critically — OTA prototyping vehicles cannot be directly converted to production contracts without following FAR-based procurement rules unless specifically authorized.',
            },
            {
              type: 'table',
              headers: ['Vehicle Type', 'Regulatory Framework', 'Typical Use Case', 'Speed to Award', 'Good For'],
              rows: [
                ['GSA MAS Schedule', 'FAR Subpart 8.4', 'Commercial products/services, commodities', 'Days to weeks', 'Broad commercial catalog; multi-agency reach'],
                ['IDIQ / MATOC', 'FAR Part 16', 'Recurring services or products within a defined scope', 'Months (task order)', 'Program-specific recurring work; services contracts'],
                ['GWAC', 'FAR Subpart 8.4 / 16', 'IT, cloud, cybersecurity across all agencies', 'Weeks', 'IT-centric companies wanting governmentwide reach'],
                ['OTA (Prototype)', '10 U.S.C. § 4022', 'New technology development, prototypes, non-traditional contractors', 'Weeks to months', 'Early-stage tech; non-traditional companies; IP flexibility'],
                ['OTA (Consortia)', 'Via intermediary (e.g., NSTXL, AFWERX)', 'Rapid prototyping through consortium management', 'Days to weeks', 'Fast entry for non-traditional vendors; small R&D bets'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Map each of your target program offices to the contract vehicles they use most frequently. This is in their award data on SAM.gov. A program office that issues 80% of its task orders through a specific IDIQ has told you exactly what vehicle to be on. Pursue that vehicle on its next reopen — even if the immediate task order isn\'t worth much. The vehicle is the gate.',
            },
          ],
        },
        // ── Lesson 2.3 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m2-l3',
          title: 'SBIR/STTR — Is It Worth Your BD Investment?',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'The Small Business Innovation Research (SBIR) program is simultaneously one of the most promoted and most misunderstood pathways in defense. It generates a lot of enthusiasm at industry conferences and a lot of frustration in CFO offices. Here\'s an honest assessment.',
            },
            {
              type: 'heading',
              text: 'The Three-Phase Structure',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'SBIR is structured as three sequential phases with fundamentally different purposes, funding levels, and competitive dynamics.',
            },
            {
              type: 'table',
              headers: ['Phase', 'Purpose', 'Typical Award Value', 'Duration', 'Competition'],
              rows: [
                ['Phase I', 'Feasibility study — prove the concept is technically sound', '$50K–$250K (varies by agency)', '6 months', 'Open competition; many awards made'],
                ['Phase II', 'R&D — develop and demonstrate a prototype', '$750K–$2M (varies by agency)', '2 years', 'Competitive among Phase I awardees; ~40% of Phase I winners continue'],
                ['Phase III', 'Commercialization — transition to production or government use', 'Unlimited; no SBIR-specific funding', 'Ongoing', 'No SBIR funds; must compete for or be sole-sourced under FAR-based contracts'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Phase III Is Where Most SBIR Companies Stall',
              text: 'Phase I and Phase II have dedicated SBIR funding pools. Phase III has no dedicated funding — you must win a production contract, a follow-on FAR contract, or a sole-source award under FAR 6.302-5(b)(7), which permits sole-source awards for SBIR Phase III work. That authority exists, but it requires a contracting officer to use it, a program manager to want to use it, and a budget line to fund it. Many companies successfully complete Phase II and then wait years for Phase III to materialize.',
            },
            {
              type: 'heading',
              text: 'The Cash Flow Reality',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'SBIR awards are cost-reimbursement: you spend money and get reimbursed, usually with 30-60 day payment lags. The direct labor, equipment, and overhead costs are real. The government funds a significant portion of R&D that would otherwise be IR&D — which is valuable. But if your company is expecting SBIR to generate near-term revenue to fund operations, you will be disappointed.',
            },
            {
              type: 'heading',
              text: 'Technology vs. Product — The Honest Calculus',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'SBIR is worth pursuing if you have a technology that needs government-funded development to reach maturity and you have a credible Phase III pathway — meaning a program manager who has expressed interest and a program office with potential budget. It is less worth pursuing if you have a product that is already commercially available and you\'re trying to get it into defense channels. In the latter case, an OTA or a direct IDIQ pursuit may be faster and more direct.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'STTR — The University Partnership Version',
              text: 'Small Business Technology Transfer (STTR) is similar to SBIR but requires a formal research partnership with a university or federally funded research and development center (FFRDC). If your technology has deep research roots at a university, STTR can be a pathway. If not, SBIR is more straightforward.',
            },
            {
              type: 'heading',
              text: 'The BD Investment Question',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Applying for SBIR topics costs real BD effort. Each SBIR proposal requires a technical volume, a commercialization plan, and financial documentation. A well-written Phase I proposal takes 40-80 hours. The hit rate varies: DoD-wide, roughly 15-25% of Phase I submissions are awarded. That means 75-85% of your effort produces no award.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'When SBIR Actually Works',
              text: 'A startup with a novel materials coating technology used SBIR to fund the lab work needed to prove their process at scale. Their BD team had already built a relationship with an Army research lab, and when the SBIR topic dropped — which they had partially influenced through a prior white paper — they responded with a proposal that directly addressed the program office\'s specific concern. Phase I. Phase II. Then a direct sole-source award under Phase III authority into a Next-Generation Combat Vehicle program. Total SBIR investment: 3 years. Total contract value beyond SBIR: $18M. That is the SBIR success model — but it required the relationship and the technology to exist before the topic was written.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'SBIR', definition: 'Small Business Innovation Research — a competitive program funding early-stage R&D by small businesses, with three phases from feasibility through commercialization.' },
                { term: 'STTR', definition: 'Small Business Technology Transfer — similar to SBIR but requires a formal research partnership with a university or FFRDC.' },
                { term: 'Phase III', definition: 'The commercialization phase of SBIR/STTR — no dedicated SBIR funding, but includes sole-source authority under FAR 6.302-5(b)(7) for production contracts.' },
                { term: 'IR&D', definition: 'Independent Research and Development — company-funded R&D that is separately accounted for and partially recoverable as an indirect cost on government contracts.' },
                { term: 'FFRDC', definition: 'Federally Funded Research and Development Center — a center sponsored and funded by the federal government but operated by a university or nonprofit. Examples: MITRE, RAND, Lincoln Laboratory.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Before pursuing an SBIR topic, answer three questions: (1) Do you have a relationship with the issuing agency\'s technical office? (2) Is there a program with budget that could absorb Phase III work? (3) Does your technology actually need this funded R&D phase, or are you ready for a production contract today? If the answers are no, no, and no — skip it and pursue a direct vehicle. If the answers are yes, yes, and yes — SBIR is one of the most efficient ways to fund your development and build a captive government customer simultaneously.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-bd-c1-m2-q1',
          type: 'multiple-choice',
          question: 'A company wants to set up an ongoing intelligence feed on upcoming defense opportunities in their target NAICS codes. What is the most effective free tool for this?',
          options: [
            'Defense.gov procurement page',
            'SAM.gov saved searches with email alerts',
            'The Federal Register procurement section',
            'FPDS.gov contract award database',
          ],
          correctIndex: 1,
          explanation: 'SAM.gov is the primary portal for federal contract opportunities. Saved searches with email alerts allow you to receive daily or weekly notifications of new solicitations, pre-solicitation notices, sources sought, and award notices matching your filters — making it the most practical ongoing intelligence tool.',
        },
        {
          id: 'defense-bd-c1-m2-q2',
          type: 'true-false',
          question: 'Getting on a GSA Multiple Award Schedule guarantees your company will receive task orders from defense agencies.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. A GSA Schedule makes you eligible to receive orders, but agencies must still choose to use the Schedule and select your company. For specialized defense manufacturers whose work is program-specific or custom, a Schedule may generate little to no business without active BD to drive agencies to use it.',
        },
        {
          id: 'defense-bd-c1-m2-q3',
          type: 'multiple-choice',
          question: 'What makes Other Transaction Authorities (OTAs) attractive for non-traditional defense contractors?',
          options: [
            'They eliminate all competition requirements',
            'They allow more flexible IP terms and faster timelines than FAR-based contracts',
            'They provide unlimited funding for prototype projects',
            'They automatically convert to production contracts upon successful demonstration',
          ],
          correctIndex: 1,
          explanation: 'OTAs are attractive because they operate outside the FAR, allowing negotiated IP terms (important for commercial companies), faster award timelines, and flexible cost-sharing structures. They do not eliminate competition, have dollar limits, and do not automatically convert to production contracts.',
        },
        {
          id: 'defense-bd-c1-m2-q4',
          type: 'multiple-choice',
          question: 'In the SBIR program, which phase has no dedicated government funding pool?',
          options: [
            'Phase I',
            'Phase II',
            'Phase III',
            'All phases have dedicated SBIR funding',
          ],
          correctIndex: 2,
          explanation: 'Phase III — the commercialization phase — has no dedicated SBIR funding. Companies must win traditional FAR-based contracts or be awarded under the Phase III sole-source authority (FAR 6.302-5(b)(7)). This is where many SBIR companies stall.',
        },
        {
          id: 'defense-bd-c1-m2-q5',
          type: 'multiple-choice',
          question: 'A program office issues 80% of its task orders through a specific IDIQ vehicle. What should a company targeting that program office prioritize?',
          options: [
            'Submitting unsolicited proposals directly to the program office',
            'Getting on the IDIQ vehicle at its next reopen opportunity',
            'Applying for SBIR topics sponsored by that program office',
            'Registering on SAM.gov with the relevant NAICS codes',
          ],
          correctIndex: 1,
          explanation: 'If most work flows through a specific vehicle, the gate is getting on that vehicle. Being on the IDIQ positions you to compete for task orders. Without vehicle access, you are shut out of most of that program office\'s work regardless of your capabilities.',
        },
        {
          id: 'defense-bd-c1-m2-q6',
          type: 'true-false',
          question: 'Under the SBIR program, a company that wins Phase I is automatically awarded Phase II.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Phase II is competitive among Phase I awardees. Roughly 40% of Phase I winners proceed to Phase II. Phase II requires a separate proposal demonstrating Phase I results, a credible development plan, and a viable commercialization pathway.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 3 — The Competitive Landscape
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-bd-c1-m3',
      number: 3,
      title: 'The Competitive Landscape',
      description:
        'Understand how source selection actually works, what LPTA vs. Best Value means for your strategy, and how to use public bid protest decisions as competitive intelligence.',
      estimatedMinutes: 60,
      learningObjectives: [
        'Describe the composition and role of the Source Selection Evaluation Board',
        'Explain the difference between LPTA and Best Value Tradeoff evaluation methodologies',
        'Apply source selection methodology to proposal strategy and pricing decisions',
        'Use GAO bid protest decisions as competitive intelligence on evaluator behavior',
      ],
      lessons: [
        // ── Lesson 3.1 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m3-l1',
          title: 'Source Selection — How the Government Actually Decides',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'Source selection is the formal process by which the government evaluates competing proposals and selects a contractor. Every word in FAR Part 15 matters. But more importantly, understanding the human structure behind a source selection — who is in the room, what they\'re authorized to decide, and what pressures they\'re under — changes how you approach proposal writing.',
            },
            {
              type: 'heading',
              text: 'The Source Selection Organization',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Most competitive acquisitions above the simplified acquisition threshold use a formal source selection organization. The specific structure varies by agency and program size, but the core roles are consistent.',
            },
            {
              type: 'table',
              headers: ['Role', 'Abbreviation', 'Function', 'Who They Typically Are'],
              rows: [
                ['Source Selection Authority', 'SSA', 'Final decision-maker; signs the source selection decision document', 'Senior military officer or SES civilian; PM for smaller programs'],
                ['Source Selection Advisory Council', 'SSAC', 'Reviews SSEB findings; provides written recommendation to SSA', 'Senior technical and contracting officials'],
                ['Source Selection Evaluation Board', 'SSEB', 'Evaluates proposals against stated criteria; documents strengths, weaknesses, deficiencies', 'Subject matter experts from technical, contracting, and program offices'],
                ['Source Selection Evaluation Team', 'SSET', 'Working-level evaluators within the SSEB; may be organized by factor', 'Technical specialists, program analysts'],
                ['Contracting Officer', 'KO', 'Manages the competition; conducts discussions; makes legal determinations', 'Warranted contracting professional'],
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The SSEB Does Not Know What You Know',
              text: 'SSEB members are subject matter experts but they are not telepathic. They can only credit you for what is clearly articulated and documented in your proposal. A capability you have but do not demonstrate with specificity in your proposal does not exist in their evaluation. "Our team has extensive experience in X" earns nothing. "Our team performed X on Contract Y for Agency Z, delivering A, B, and C results" earns a strength.',
            },
            {
              type: 'heading',
              text: 'The Evaluation Factors',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Every competitive source selection must state evaluation factors and subfactors in the RFP, along with their relative importance. FAR 15.304 requires this. The relative weighting — whether Technical is more important than Price, or Past Performance is equal to Technical — defines your proposal strategy.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Evaluation Factor Weighting Examples',
              text: 'Here are real-world examples of how evaluation factor hierarchies change proposal strategy.',
            },
            {
              type: 'table',
              headers: ['Scenario', 'Technical', 'Past Performance', 'Price', 'Strategy Implication'],
              rows: [
                ['Services IDIQ, agency priority is cost reduction', 'Acceptable', 'Acceptable', 'Most important', 'Price to win aggressively; Technical just needs to pass the bar'],
                ['Complex R&D development program', 'Most important', 'Significantly important', 'Less important', 'Invest in technical differentiation; price matters but won\'t decide the competition'],
                ['Logistics support, high repeat-performance value', 'Important', 'Equal to Technical', 'Less important', 'Past performance is the differentiator; build the narrative carefully'],
                ['Simplified acquisition / commercial items', 'N/A', 'Considered', 'Driving factor', 'Price competitiveness is decisive; past performance is tie-breaker'],
              ],
            },
            {
              type: 'heading',
              text: 'Strengths, Weaknesses, Deficiencies, and Risks',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'SSEB members document their findings using specific terminology defined in FAR 15.001. Understanding these definitions tells you what the evaluator is looking for.',
            },
            {
              type: 'list',
              items: [
                'Strength: An aspect of an offeror\'s proposal that has merit and exceeds specified performance or capability requirements in a way that will be advantageous to the Government during contract performance.',
                'Weakness: A flaw in the proposal that increases the risk of unsuccessful contract performance.',
                'Significant Weakness: A flaw that appreciably increases the risk of unsuccessful contract performance.',
                'Deficiency: A material failure to meet a Government requirement or a combination of weaknesses that significantly increases the risk of unsuccessful contract performance.',
                'Risk: The potential for unsuccessful contract performance — probability of occurrence × severity of consequence.',
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'A Deficiency Can End Your Proposal',
              text: 'A single deficiency in a proposal is typically grounds for exclusion from the competitive range — meaning you don\'t get into discussions, don\'t get to revise, and lose regardless of price. Deficiencies are non-negotiable failures to meet requirements. Read every PWS requirement clause carefully and make sure your proposal responds to each one explicitly.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'SSA', definition: 'Source Selection Authority — the individual responsible for making the final source selection decision.' },
                { term: 'SSAC', definition: 'Source Selection Advisory Council — a senior advisory body that reviews SSEB findings and provides a written recommendation to the SSA.' },
                { term: 'SSEB', definition: 'Source Selection Evaluation Board — the body that evaluates proposals and documents strengths, weaknesses, deficiencies, and risks.' },
                { term: 'SSET', definition: 'Source Selection Evaluation Team — working-level evaluators within the SSEB, often organized by evaluation factor.' },
                { term: 'Competitive Range', definition: 'The group of offerors determined to be most highly rated and still having a reasonable chance of award. Only competitive range offerors participate in discussions.' },
                { term: 'Discussions', definition: 'Formal exchanges between the government and offerors in the competitive range intended to allow offerors to address weaknesses and deficiencies.' },
                { term: 'BAFO', definition: 'Best and Final Offer — the final proposal revision submitted after discussions. Some agencies use "Final Proposal Revision" (FPR) instead.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Read every RFP evaluation section (Section M) before you write a single word of your technical proposal. Build a compliance matrix: one row per evaluation factor and subfactor, one column for where you address it in your proposal. If you can\'t fill every cell, you have a gap. SSEB members cannot give you credit for things you haven\'t explicitly addressed — even if you are obviously capable of doing them.',
            },
          ],
        },
        // ── Lesson 3.2 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m3-l2',
          title: 'LPTA vs. Best Value — What Each Means for Your Strategy',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'The choice between Lowest Price Technically Acceptable and Best Value Tradeoff is one of the most consequential decisions a program office makes about a competition — and one of the most consequential signals you have about how to compete. Getting this wrong is how companies write excellent proposals and lose on price, or price aggressively and lose because they can\'t explain why they\'re better.',
            },
            {
              type: 'heading',
              text: 'Lowest Price Technically Acceptable (LPTA)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Under LPTA, the government evaluates proposals on a pass/fail basis for all non-price factors. Technical, Past Performance, and any other factors are rated Acceptable or Unacceptable. Once a proposal is rated Acceptable across all factors, the evaluation is over — price wins. There is no benefit to being technically superior; you just have to clear the bar.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'LPTA Changed the Defense Market — And Not Entirely for the Better',
              text: 'LPTA was heavily used in the 2010s as a cost-cutting measure and produced some genuinely poor program outcomes — particularly in services contracts where quality variation is high. Congress subsequently directed DoD to limit LPTA use (see NDAA FY2017 Section 813). Today, LPTA is more tightly restricted and must be specifically justified. But it still exists, and in commodity-like service areas (routine logistics support, basic IT maintenance), you will encounter it.',
            },
            {
              type: 'heading',
              text: 'Best Value Tradeoff',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Under Best Value Tradeoff, the SSA may select a higher-priced offer if the technical or past performance merits justify the premium. This is where differentiation pays. The SSA must document their tradeoff reasoning — specifically why additional capability is worth additional cost. In theory, the best combination of cost and mission capability wins. In practice, it depends heavily on the SSA\'s risk tolerance and the size of the price premium.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Best Value Win That Almost Didn\'t Happen',
              text: 'A company submitted a Best Value proposal with a technical rating of Outstanding and a price 12% above the lowest offer. The SSEB recommended them based on technical merit. The SSAC agreed. The SSA nearly went with the lower-priced offer until the SSAC\'s written analysis made a specific, documented case that the technical differentiator — a particular approach to integration that the program office had historically struggled with — was worth the premium. The company\'s proposal had made that specific case. The SSA had a documented basis for the tradeoff. Award went to the higher-priced offer. The lesson: in Best Value, you must make the tradeoff case for the SSA. They cannot create justification that isn\'t in your proposal.',
            },
            {
              type: 'heading',
              text: 'How to Read the Evaluation Criteria to Determine Which Game You\'re Playing',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'RFPs are required to state the relative importance of evaluation factors explicitly. Read these phrases carefully.',
            },
            {
              type: 'table',
              headers: ['Language in the RFP', 'What It Usually Means', 'Strategic Implication'],
              rows: [
                ['"Technical is significantly more important than Price"', 'Best Value; technical quality will drive award', 'Invest in proposal quality; price competitively but don\'t sacrifice capability'],
                ['"Technical and Past Performance, combined, are approximately equal to Price"', 'Price is effectively the tiebreaker', 'Cost control is critical; technical must be excellent but differentiation pays less'],
                ['"Price is the most important factor after technical acceptability is determined"', 'This is LPTA language', 'Do not over-invest in a superior technical approach; meet the spec, then price to win'],
                ['"All evaluation factors other than cost are of equal relative importance"', 'Balanced Best Value', 'Spread proposal investment evenly; no single factor dominates'],
              ],
            },
            {
              type: 'heading',
              text: 'Price to Win Analysis',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Price to Win (PTW) analysis is the discipline of estimating what your competitors will bid, then building your price to beat them. PTW draws on historical award data, public cost data, knowledge of competitor cost structures, and analysis of program scope. In a Best Value competition, PTW analysis helps you understand how much technical premium the government can justify. In an LPTA competition, PTW is decisive — the winner is whoever is lowest among all technically acceptable offerors.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'LPTA', definition: 'Lowest Price Technically Acceptable — an evaluation methodology where all non-price factors are rated pass/fail, and award goes to the lowest-priced offeror that passes all technical factors.' },
                { term: 'Best Value Tradeoff', definition: 'An evaluation methodology that allows the SSA to select a higher-priced offer if the technical or performance advantages justify the premium. Requires documented tradeoff rationale.' },
                { term: 'Price to Win (PTW)', definition: 'An analytical process to estimate what competitors will bid and identify a price that is competitive given the evaluation methodology.' },
                { term: 'Should-Cost Analysis', definition: 'A government or contractor analysis of what a contract should cost based on actual resources, rates, and efficiencies — as opposed to what it has cost historically.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Identify the evaluation methodology in Section M of the RFP before you make any proposal investment decisions. If it\'s LPTA, your investment should go to cost reduction and proposal compliance — not to elaborate technical approaches. If it\'s Best Value with Technical significantly more important than Price, invest in the technical differentiation narrative. Spending money on elaborate graphics and technical detail for an LPTA competition is a waste. Pricing aggressively in a Best Value competition where you have genuine differentiators is leaving money on the table.',
            },
          ],
        },
        // ── Lesson 3.3 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m3-l3',
          title: 'Bid Protest Decisions as Competitive Intelligence',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'Most companies think about bid protests as things that happen to them — an unwelcome threat after a win, or a last resort after a loss. That misses one of the most valuable free intelligence resources available to any defense BD professional: the public record of GAO bid protest decisions.',
            },
            {
              type: 'heading',
              text: 'The Protest Process — A Brief Map',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'When an offeror believes a source selection was conducted improperly, they can file a protest with either the Government Accountability Office (GAO) or the Court of Federal Claims (COFC), or directly with the contracting agency. GAO is by far the most common venue.',
            },
            {
              type: 'ordered-list',
              items: [
                'File by deadline: GAO protests must be filed within 10 days of when the protester knew or should have known the basis for protest. For post-award protests, the 10-day clock usually starts at the debrief.',
                'Automatic stay: Filing a protest within the 10-day post-award window triggers an automatic stay — the government cannot proceed with contract performance until the protest is resolved (unless the agency overrides with a written D&F).',
                'GAO timeline: GAO has 100 calendar days to issue its decision. The process involves filings, agency reports, and sometimes oral hearings.',
                'Outcomes: GAO either sustains (finds for the protester), denies (finds for the agency), or dismisses. A sustained protest results in a recommendation — not a mandate — for corrective action.',
                'Corrective action: Agencies usually voluntarily take corrective action (e.g., re-do the evaluation, reopen discussions, re-solicit) to avoid a mandated remedy.',
              ],
            },
            {
              type: 'heading',
              text: 'Why GAO Decisions Are Intelligence',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Every GAO protest decision is a public document. It contains a narrative of what the agency did during source selection, what the protester alleged was wrong, what the agency\'s defense was, and what GAO concluded. In aggregate, these decisions reveal exactly how evaluators actually behave — not how they\'re supposed to behave.',
            },
            {
              type: 'list',
              items: [
                'You can see what specific language evaluators credited as strengths vs. weaknesses in real proposals',
                'You can see what evaluation errors agencies make repeatedly (inconsistent evaluation, unstated evaluation criteria, flawed discussions)',
                'You can see what competitors\' proposals contained when an agency detailed them in its protest report',
                'You can see how SSAs justify tradeoff decisions — and whether their logic holds',
                'You can identify which contracting offices have systemic evaluation problems — a signal that your own protest risk is elevated or your win probability may be lower than the technical merits justify',
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Where to Find GAO Decisions',
              text: 'All public GAO bid protest decisions are available at gao.gov/legal/bid-protests/decisions. You can search by company name, agency, or decision date. COFC decisions are on the U.S. Court of Federal Claims website. Build a search routine: at minimum, search your target agency and program names quarterly to catch any relevant decisions.',
            },
            {
              type: 'heading',
              text: 'The Sustained Rate — And What It Means',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'GAO sustains roughly 13-15% of the protests it decides on the merits in a typical year. That number looks low but misleads — it does not count the protests that result in voluntary agency corrective action before GAO issues a decision (which agencies often do to retain acquisition flexibility). The "effective sustain rate" is closer to 40-45% when corrective actions are included.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Using a Protest Decision to Prepare a Better Proposal',
              text: 'A company was preparing to compete on a re-solicitation following a corrective action on a prior award. They pulled the original protest decision. The decision detailed exactly what had been wrong with the original evaluation — and in doing so, revealed what the winning proposal had contained. The program office\'s corrective action was to re-do the technical evaluation. The company used the decision to understand the specific strengths the previous winner had been credited for, and wrote their proposal to directly match and exceed them. They won.',
            },
            {
              type: 'heading',
              text: 'When to File — and When Not To',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Filing a protest is a serious decision. It freezes the program, costs the government money, consumes your legal resources, and — if you win and the agency does corrective action — may result in another competition you could lose again. Protest when you have a clear, documentable legal basis: the agency departed from stated evaluation criteria, failed to conduct meaningful discussions, or made an error of fact. Do not protest because you lost and you\'re frustrated.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Relationship Cost of Protests',
              text: 'Sustained protests damage your relationship with the program office — even if you were right. The contracting officer, program manager, and SSEB members whose work was overturned will remember. This doesn\'t mean you should never protest, but weigh the relationship cost against the value of the contract and your long-term strategy in that program office.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'GAO', definition: 'Government Accountability Office — the primary forum for bid protest decisions in federal contracting. Decisions are public and issued within 100 days.' },
                { term: 'COFC', definition: 'Court of Federal Claims — an alternative protest forum for larger or more complex protests; decisions are legally binding, not recommendations.' },
                { term: 'Automatic Stay', definition: 'When a protest is filed within 10 days of a debrief, contract performance is automatically suspended until the protest is resolved, unless the agency issues an override.' },
                { term: 'Corrective Action', definition: 'An agency\'s voluntary remediation of a procurement error, often taken before or after a GAO decision to preserve acquisition flexibility.' },
                { term: 'D&F', definition: 'Determination and Findings — a written document by an authorized official that justifies a specific acquisition action. Used to override an automatic stay in the protest context.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Assign someone on your BD team a quarterly task: search GAO decisions for your five target agencies and program offices. Read every decision that mentions your NAICS codes or technical domains. Build a file of what evaluators actually credit as strengths in your market. This is primary research that your competitors are not doing. The companies that understand how evaluators think before they write proposals write better proposals.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-bd-c1-m3-q1',
          type: 'multiple-choice',
          question: 'An SSEB member evaluating a technical proposal can only rate it as having a "Strength" if:',
          options: [
            'The offeror is well-known in the industry for capability in the relevant area',
            'The proposal explicitly demonstrates an aspect that exceeds specified requirements in a way advantageous to the Government',
            'The offeror submits supporting documentation with their proposal',
            'The contracting officer requests additional information from the offeror',
          ],
          correctIndex: 1,
          explanation: 'Under FAR 15.001, a Strength is an aspect of the proposal that exceeds specified performance or capability requirements in a way that will be advantageous during contract performance. Evaluators cannot credit capabilities that are implied but not explicitly demonstrated in the proposal.',
        },
        {
          id: 'defense-bd-c1-m3-q2',
          type: 'multiple-choice',
          question: 'Under LPTA evaluation methodology, a company submits a proposal with an exceptional technical approach that far exceeds the minimum requirements. How does this affect the award decision?',
          options: [
            'It earns the company a higher technical rating and improves their probability of award',
            'It has no effect on award — under LPTA, meeting minimum requirements is all that matters, and price decides',
            'It qualifies the company for a sole-source follow-on award',
            'It earns the company past performance credit for future procurements',
          ],
          correctIndex: 1,
          explanation: 'Under LPTA, technical factors are pass/fail. There is no benefit to exceeding minimum requirements beyond passing the threshold. Once technically acceptable, award goes to the lowest-priced offeror. An exceptional technical proposal earns nothing additional in an LPTA competition.',
        },
        {
          id: 'defense-bd-c1-m3-q3',
          type: 'multiple-choice',
          question: 'What is the GAO bid protest filing deadline after an offeror receives a post-award debrief?',
          options: [
            '30 calendar days',
            '10 calendar days',
            '5 business days',
            '60 calendar days',
          ],
          correctIndex: 1,
          explanation: 'GAO protests must generally be filed within 10 calendar days of when the protester knew or should have known the basis for protest. For post-award protests, this clock typically starts at the debriefing. Filing within this window also triggers an automatic stay of contract performance.',
        },
        {
          id: 'defense-bd-c1-m3-q4',
          type: 'true-false',
          question: 'In a Best Value Tradeoff competition, the Source Selection Authority (SSA) is legally required to select the lowest-priced technically acceptable offeror.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Best Value Tradeoff explicitly permits the SSA to select a higher-priced offer when the technical or past performance advantages are determined to justify the price premium. The SSA must document their tradeoff rationale, but there is no legal requirement to select the lowest price.',
        },
        {
          id: 'defense-bd-c1-m3-q5',
          type: 'multiple-choice',
          question: 'An RFP states: "Technical Approach is significantly more important than Past Performance. Technical and Past Performance, combined, are significantly more important than Price." What is the recommended proposal strategy?',
          options: [
            'Price to win aggressively — price is the only differentiator in this competition',
            'Invest in technical differentiation and a strong past performance narrative; price competitively but do not sacrifice capability to cut cost',
            'Treat this as LPTA — meet the technical minimum and price as low as possible',
            'Focus exclusively on past performance since it is named alongside technical',
          ],
          correctIndex: 1,
          explanation: 'This is a Best Value Tradeoff competition with Technical as the dominant factor. The right strategy is to invest in technical quality and past performance narrative while pricing competitively. Price matters but is not the primary differentiator. Cutting technical quality to cut price trades away the ground where you can win.',
        },
        {
          id: 'defense-bd-c1-m3-q6',
          type: 'multiple-choice',
          question: 'What is the primary BD value of reading GAO bid protest decisions for your target agencies?',
          options: [
            'They provide legally binding guidance on how you must write your proposals',
            'They reveal how evaluators actually assess proposals — what earns strengths, what earns weaknesses, and what errors agencies make repeatedly',
            'They provide the names of SSEB members so you can contact them before the next competition',
            'They allow you to identify protests you can file to delay competitor awards',
          ],
          correctIndex: 1,
          explanation: 'GAO decisions contain detailed narratives of source selection evaluation — what evaluators credited, what they penalized, and what errors they made. This is primary intelligence on evaluator behavior in your target agencies. It is free, public, and largely unused by most companies.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 4 — Capstone: Putting It Together
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-bd-c1-m4',
      number: 4,
      title: 'Capstone — Putting It Together',
      description:
        'Apply everything from the first three modules to a realistic BD scenario: a source selection evaluation, a competitive decision, and a BD strategy for a fictional defense product.',
      estimatedMinutes: 47,
      learningObjectives: [
        'Apply acquisition timeline knowledge to a realistic BD scenario',
        'Recommend a contract vehicle strategy based on program and company characteristics',
        'Evaluate a source selection scenario and predict the likely outcome',
        'Identify where a company\'s BD strategy has gaps or opportunities',
      ],
      lessons: [
        // ── Lesson 4.1 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m4-l1',
          title: 'BD Strategy Simulation — Meridian Defense Products',
          estimatedMinutes: 22,
          content: [
            {
              type: 'paragraph',
              text: 'Meet Meridian Defense Products. They manufacture a ruggedized power management system originally developed for the commercial oil and gas market. Their system has been adapted for military use by two Army units operating in field environments. They have two contracts totaling $1.8M. Their CEO wants to "scale defense." This lesson walks through the BD decisions they face.',
            },
            {
              type: 'heading',
              text: 'Meridian\'s Situation',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Product: Ruggedized mobile power management system, COTS-based with DoD-specific firmware modifications',
                'Current contracts: Two O&M-funded task orders under a broad logistics IDIQ, totaling $1.8M',
                'Relationships: One satisfied program manager at a small Army program office; one contracting officer they\'ve worked with twice',
                'Certifications: SAM registered, SDVOSB certified, no 8(a), no GSA Schedule',
                'Team: 3-person BD team including the CEO, a business developer, and a proposal writer',
                'Technical staff: 12 engineers, 8 production/operations staff',
              ],
            },
            {
              type: 'heading',
              text: 'The Opportunity Landscape They\'re Considering',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Meridian has identified four potential paths to growth. Each is real. Each has a different time horizon, investment requirement, and probability of success. Your job — and theirs — is to rank them intelligently.',
            },
            {
              type: 'table',
              headers: ['Opportunity', 'Vehicle', 'Time to Revenue', 'Investment Required', 'Key Risk'],
              rows: [
                ['Follow-on task order from existing Army PM', 'Existing IDIQ', '90–120 days', 'Low (incumbent advantage)', 'IDIQ ceiling may be exhausted; existing KO relationship critical'],
                ['New IDIQ vehicle opening in 3 months — same NAICS/PSC', 'New MATOC', '6–18 months post-award', 'Medium (proposal cost $40–80K)', 'May not win vehicle; 5-year lockout if they miss it'],
                ['SBIR Phase I topic in power management — DoD-wide', 'SBIR', '6 months to Phase I award, 3+ years to revenue', 'Medium (80-100 hours BD + proposal)', 'Phase III path unclear; no program sponsor identified'],
                ['Army program of record entering AoA — potential 5-year IDIQ', 'New MDAP entry', '3–5 years to revenue', 'High (IR&D, demos, requirements engagement)', 'Long-term bet; requires sustained investment with uncertain payoff'],
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The Right Answer Is a Portfolio, Not a Choice',
              text: 'Meridian should not pick one of these and ignore the others. Sophisticated BD strategy manages a pipeline across time horizons: near-term revenue (follow-on task order), medium-term vehicle positioning (new IDIQ), and long-term program investment (MDAP entry). The SBIR question depends on whether they have a technology gap they need funded R&D to close or whether their product is already production-ready.',
            },
            {
              type: 'heading',
              text: 'The SDVOSB Advantage — And Its Limits',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Meridian\'s SDVOSB certification is a genuine competitive advantage in set-aside competitions — but only if the agency uses SDVOSB set-asides and only if the program office values that authority. Not every contracting office uses SDVOSB set-asides. Meridian should map which of their target program offices have a history of SDVOSB set-aside awards in their NAICS codes — that data is in SAM.gov award history.',
            },
            {
              type: 'heading',
              text: 'What Meridian Should Do in the Next 90 Days',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Secure the follow-on task order from the existing Army PM — this is incumbent revenue with the highest probability of win. Meet with the PM\'s office, confirm the requirement, confirm the funding timeline, and make sure the contracting officer knows they\'re ready.',
                'Evaluate the new IDIQ vehicle — pull the draft solicitation or sources sought, assess the scope, estimate the proposal cost, and decide whether to bid. Missing this vehicle could close the door for 5 years.',
                'On the SBIR: skip it for now unless they can identify a program sponsor and an RDT&E budget line that could absorb Phase III work. An unfunded SBIR is a cash drain, not a BD investment.',
                'Start low-cost requirements engagement with the MDAP program office entering AoA — not a proposal, not an IDIQ pursuit, just a relationship and a white paper.',
              ],
            },
            {
              type: 'simulation',
              simulationId: 'meridian-bd-strategy',
              title: 'Meridian BD Strategy Decision',
              description: 'Work through the Meridian scenario: choose their vehicle strategy, evaluate their SDVOSB opportunity mapping, and prioritize their BD investment. The simulation presents three decision points with real trade-offs.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Draw the Meridian matrix for your own pipeline. List every opportunity you\'re tracking by vehicle type, time to revenue, investment required, and key risk. If your pipeline is 80% "long-term bets" with no near-term revenue, you have a cash flow problem. If it\'s 80% near-term incumbent work, you have a growth problem. Healthy defense BD pipelines look like Meridian\'s should: layered across time horizons, with active work in each band.',
            },
          ],
        },
        // ── Lesson 4.2 ──────────────────────────────────────────────────────
        {
          id: 'defense-bd-c1-m4-l2',
          title: 'Source Selection Evaluation — Reading the Room',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'The following is a capstone scenario. Read the situation carefully. The questions that follow — both in this lesson and in the module quiz — are based on this scenario. The scenario is fictional but constructed from real source selection patterns.',
            },
            {
              type: 'heading',
              text: 'The Scenario: Consolidated Tactical Power Supply Program (CTPSP)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The Army has issued an RFP for the Consolidated Tactical Power Supply Program (CTPSP) — a multi-year IDIQ with a $35M ceiling for ruggedized mobile power management systems for forward-deployed units. The acquisition is set aside for SDVOSBs. The evaluation methodology is Best Value Tradeoff. The RFP states: "Technical Approach is the most important evaluation factor. Past Performance is significantly less important than Technical Approach but more important than Price. Price is the least important factor."',
            },
            {
              type: 'paragraph',
              text: 'Three offerors have submitted proposals. The SSEB has rated them as follows.',
            },
            {
              type: 'table',
              headers: ['Offeror', 'Technical Rating', 'Past Performance Rating', 'Evaluated Price (base year)', 'Notable Strengths / Weaknesses'],
              rows: [
                ['Meridian Defense Products', 'Good', 'Satisfactory', '$2.1M', 'Strength: Innovative thermal management approach exceeding spec; Weakness: Staffing plan lacks key personnel redundancy'],
                ['Ironside Systems', 'Outstanding', 'Very Good', '$2.6M', 'Strength: Two documented strengths including a unique redundancy architecture; no weaknesses noted'],
                ['Pacific Forge Technologies', 'Acceptable', 'Satisfactory', '$1.85M', 'No strengths documented; Weakness: Integration approach assessed as high risk for SINCGARS compatibility'],
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Question: Who Should Win?',
              text: 'Before reading the analysis below, make a prediction. Given the evaluation methodology (Best Value with Technical as most important), which offeror should win this competition, and why? What tradeoff argument would justify selecting Ironside at $500K more per year over Meridian?',
            },
            {
              type: 'heading',
              text: 'Source Selection Analysis',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Under Best Value Tradeoff with Technical as the dominant factor, the SSA must decide whether the difference between "Outstanding" and "Good" justifies the $500K premium ($2.6M vs. $2.1M annually). This is the central tradeoff decision.',
            },
            {
              type: 'paragraph',
              text: 'Pacific Forge is likely out of the competitive range or at the bottom of it. An "Acceptable" technical rating with a documented weakness and no strengths, against two offerors with stronger technical profiles, is not competitive even at the lowest price — particularly in a Best Value competition where technical is dominant.',
            },
            {
              type: 'paragraph',
              text: 'The real competition is Ironside vs. Meridian. Ironside has two documented strengths and no weaknesses. Meridian has one strength and one weakness. On a $35M IDIQ over the full period, the price difference is material — but so is the evaluation gap.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'What the SSA Is Actually Weighing',
              text: 'The SSA will ask: (1) Is Ironside\'s "Outstanding" vs. Meridian\'s "Good" a meaningful performance difference that will affect contract outcomes? (2) Is $500K/year (or roughly $2.5M over a 5-year IDIQ) a reasonable premium for that difference? (3) Does Meridian\'s staffing weakness create enough risk to exclude them? A well-documented source selection could go either way — which is exactly why both companies need to make the tradeoff case in their proposals. Ironside needs to document specifically why their redundancy architecture is worth the premium. Meridian should have addressed the staffing risk before the RFP closed.',
            },
            {
              type: 'heading',
              text: 'Lessons from the Scenario',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Technical dominance in a Best Value competition means investing in documented strengths, not just compliance. Ironside won the technical evaluation by addressing requirements in ways that generated documented strengths.',
                'Weaknesses are costly. Meridian\'s staffing plan weakness may not cost them the award — but it gave the SSA a documented risk to weigh. Addressing that weakness before submission would have been two hours of revision.',
                'Past Performance does matter, but less here. Both Meridian and Ironside have acceptable past performance ratings. The competition is being decided on Technical.',
                'Pacific Forge\'s SINCGARS compatibility weakness is a near-deficiency in a field communications application. Integration risk with a core radio system is exactly the type of concern that generates a Significant Weakness or Deficiency in SSEB scoring.',
              ],
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'IDIQ', definition: 'Indefinite Delivery, Indefinite Quantity — a contract type with a ceiling value and minimum guarantee, under which individual task or delivery orders are placed.' },
                { term: 'MATOC', definition: 'Multiple Award Task Order Contract — an IDIQ awarded to multiple vendors, who then compete for individual task orders.' },
                { term: 'SINCGARS', definition: 'Single Channel Ground and Airborne Radio System — the standard Army tactical radio system. Integration compatibility with SINCGARS is a recurring technical requirement in tactical electronics programs.' },
                { term: 'Source Selection Decision Document', definition: 'The written record of the SSA\'s tradeoff analysis and award decision. Must be documented and is discoverable in a protest.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Every proposal you submit has a "ghost SSEB" reading it. Before you submit, do a self-evaluation: what are your documented strengths? What are your weaknesses — the things an evaluator could flag as risk? What has your past performance section done to specifically address the evaluation criteria rather than just listing contracts? The companies that win consistently approach their own proposals the way an SSEB approaches an evaluation: looking for evidence, not assertions.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-bd-c1-m4-q1',
          type: 'multiple-choice',
          question: 'Meridian Defense Products is an incumbent on a task order that expires in 4 months. They have a strong relationship with the program manager but have not spoken with the contracting officer in 8 months. What is their highest-priority BD action?',
          options: [
            'Submit a white paper to the program office about their next-generation product line',
            'Apply for SBIR topics in their NAICS code to demonstrate technology leadership',
            'Contact the contracting officer to confirm funding availability and the re-compete timeline before the award lapses',
            'Begin writing a proposal for the new IDIQ vehicle that opens in 3 months',
          ],
          correctIndex: 2,
          explanation: 'Incumbent revenue is the highest-probability, lowest-cost win available. The contracting officer controls the mechanics of a follow-on task order — funding confirmation, modification authority, and re-compete timing. Letting an incumbent relationship lapse for 8 months and not confirming the re-compete path is a preventable BD failure.',
        },
        {
          id: 'defense-bd-c1-m4-q2',
          type: 'multiple-choice',
          question: 'In the CTPSP scenario, Pacific Forge Technologies submitted a proposal at the lowest price but with an "Acceptable" technical rating and a documented weakness in SINCGARS compatibility. What is the most likely outcome for Pacific Forge?',
          options: [
            'Award — their price advantage is decisive in a Best Value competition',
            'Exclusion from the competitive range or rank-order last — the technical weakness and low rating make them non-competitive against higher-rated offerors even at lower price',
            'Award with a reduced scope to reflect their technical limitation',
            'Discussions invitation — the government will ask them to address the SINCGARS compatibility issue',
          ],
          correctIndex: 1,
          explanation: 'In a Best Value Tradeoff competition where Technical is the most important factor, an "Acceptable" rating with a documented weakness is not competitive against offerors rated "Good" or "Outstanding" — even at a lower price. The SSA cannot easily justify selecting a technically inferior offeror when better-rated alternatives exist, especially when the weakness involves a core operational requirement like radio compatibility.',
        },
        {
          id: 'defense-bd-c1-m4-q3',
          type: 'multiple-choice',
          question: 'Ironside Systems is rated "Outstanding" at $2.6M. Meridian is rated "Good" at $2.1M. The RFP states Technical is the most important factor. What argument must Ironside\'s proposal have made to justify the SSA selecting them?',
          options: [
            'That their company is larger and more financially stable than Meridian',
            'That the documented strengths — specifically the redundancy architecture — will provide specific, measurable performance advantages that are worth the $500K annual premium during contract performance',
            'That Meridian\'s staffing weakness is a deficiency and should disqualify their proposal',
            'That their past performance is superior to Meridian\'s',
          ],
          correctIndex: 1,
          explanation: 'In a Best Value Tradeoff, the SSA must document a specific, articulable reason why technical superiority justifies a price premium. The winning offeror\'s proposal must have made that case — not just been technically superior in the abstract, but provided the narrative the SSA can cite in the Source Selection Decision Document.',
        },
        {
          id: 'defense-bd-c1-m4-q4',
          type: 'true-false',
          question: 'A company that wins an IDIQ vehicle but does not win any task orders has achieved a meaningful BD milestone that creates future revenue opportunity.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True — though it is incomplete. Being on the vehicle is necessary to compete for task orders; without it, you are locked out regardless of capability. However, vehicle placement only creates revenue opportunity, not revenue. The company must still actively pursue and win individual task orders. Vehicle placement without active task order pursuit is a wasted investment.',
        },
        {
          id: 'defense-bd-c1-m4-q5',
          type: 'multiple-choice',
          question: 'A company has a commercially mature ruggedized electronics product that requires no additional R&D to meet a specific defense requirement. Which statement best describes whether SBIR is the right path?',
          options: [
            'Yes — SBIR is always the fastest path to defense revenue for small manufacturers',
            'Yes — SBIR Phase II funding can be used to manufacture initial production units',
            'No — SBIR is designed for technology development, not commercialization of finished products; a direct vehicle pursuit (IDIQ, MATOC, or GSA Schedule) is likely more appropriate',
            'No — SBIR is only available for software companies, not manufacturers',
          ],
          correctIndex: 2,
          explanation: 'SBIR funds research and development. If a product is already commercially mature and ready for defense deployment, the relevant question is not "how do we fund development?" but "how do we get on a vehicle that lets this program office buy from us?" An IDIQ vehicle, a GSA Schedule, or an OTA prototype (if some integration work is needed) is a more direct path than SBIR.',
        },
        {
          id: 'defense-bd-c1-m4-q6',
          type: 'multiple-choice',
          question: 'The PPBE cycle began programming for FY2030 defense budgets in early FY2028. A company wants their product funded in a specific Army program in FY2030. When is the last realistic opportunity to influence the requirement before the money is locked?',
          options: [
            'When the FY2030 RFP is released (likely FY2029)',
            'During the FY2028 POM build — the programming phase when requirements and funding levels are set',
            'At the Army\'s FY2030 budget request to Congress (February FY2029)',
            'During contract execution in FY2030 when CLIN modifications can be negotiated',
          ],
          correctIndex: 1,
          explanation: 'The FY2030 POM is built in the FY2028 timeframe. This is the last window where requirements can be shaped and new capabilities can be added to the program. By the time the budget is submitted to Congress (FY2029), funding levels and program content are effectively locked. RFP release in FY2029 is far too late to influence what gets bought — only how it\'s competed.',
        },
        {
          id: 'defense-bd-c1-m4-q7',
          type: 'multiple-choice',
          question: 'A company loses a source selection. Their debrief reveals a significant weakness in their technical proposal on a factor that they could easily address. What is the first action they should take?',
          options: [
            'File a GAO protest immediately to preserve all legal options',
            'Request a meeting with the program office to informally discuss the evaluation',
            'Document the weakness, determine whether they have a legitimate legal basis for protest, and — regardless of protest decision — fix the proposal gap before the next competition',
            'Submit a Freedom of Information Act (FOIA) request to obtain the winning proposal',
          ],
          correctIndex: 2,
          explanation: 'The first priority is learning from the loss. Document the weakness, fix it, and apply the lesson to the next proposal. Protest is a separate decision that requires a legitimate legal basis — not just losing. Informal discussions with program offices during or after source selection are restricted. FOIA requests for the winning proposal are legally complicated and often return heavily redacted documents.',
        },
        {
          id: 'defense-bd-c1-m4-q8',
          type: 'multiple-choice',
          question: 'In the CTPSP scenario, the competition is set aside for SDVOSBs. What does this mean for Meridian\'s proposal strategy?',
          options: [
            'Meridian automatically wins as the incumbent SDVOSB with prior Army experience',
            'Meridian competes only against other SDVOSBs — but still must win on Best Value criteria within that set-aside pool',
            'Meridian\'s SDVOSB status gives them a 10% price evaluation preference over competitors',
            'Meridian can request a sole-source award based on their SDVOSB certification',
          ],
          correctIndex: 1,
          explanation: 'A set-aside restricts competition to eligible vendors — in this case, SDVOSBs — but does not change the evaluation methodology or guarantee award to any specific offeror. Meridian still competes on Best Value criteria (Technical, Past Performance, Price) against the other SDVOSB offerors in the competitive range.',
        },
      ],
    },
  ],
};
