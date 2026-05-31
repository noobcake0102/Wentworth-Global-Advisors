import type { Course } from '../../types/course';

export const defenseBDPracticalCourse: Course = {
  id: 'defense-bd-practical',
  track: 'defense-contracting',
  title: 'Pursuing and Winning Contracts',
  subtitle: 'Track C · Level 2 · BD Practical',
  description:
    'A field-tested BD playbook for defense firms actively competing for government contracts. Covers opportunity qualification, teaming strategy, proposal fundamentals, oral presentations, and a compliance simulation — built for teams that cannot afford to waste proposal dollars on low-probability pursuits.',
  status: 'available',
  estimatedHours: 7,
  color: '#6b5a8a',
  icon: '📊',
  modules: [
    // ─────────────────────────────────────────────
    // MODULE 1 — Opportunity Identification and Bid/No-Bid
    // ─────────────────────────────────────────────
    {
      id: 'bd-opportunity-identification',
      number: 1,
      title: 'Opportunity Identification and Bid/No-Bid',
      description:
        'Build a pipeline rooted in intelligence, not keyword alerts. Learn to evaluate opportunities rigorously before committing proposal dollars, and apply bid/no-bid criteria that protect your win rate.',
      estimatedMinutes: 84,
      learningObjectives: [
        'Distinguish intelligence-driven pipeline development from reactive SAM.gov monitoring',
        'Apply a 10-question opportunity evaluation framework before committing to a pursuit',
        'Quantify the true cost of a defense proposal across complexity tiers',
        'Understand why win rate math makes chasing every opportunity fatal for small BD teams',
        'Score opportunities using Pwin, strategic fit, execution risk, and cost-to-bid ratio criteria',
      ],
      lessons: [
        {
          id: 'bd-pipeline-intelligence',
          title: 'Building a Pipeline Based on Intelligence, Not Alerts',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'Most small defense firms build their pipeline by setting up SAM.gov keyword alerts and waiting for solicitations to appear. This approach produces a lot of proposal activity and very few wins. By the time an opportunity appears on SAM.gov, the incumbent or the best-positioned competitor has typically been working it for 12 to 24 months — shaping requirements, building relationships with program managers, and positioning their past performance. You are not competing on equal footing. You are reacting to a race that started without you.',
            },
            {
              type: 'heading',
              text: 'What Intelligence-Driven Pipeline Development Looks Like',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Intelligence-driven BD means identifying opportunities 18 to 36 months before they reach solicitation — early enough to influence requirements, establish relationships, and build relevant past performance. The sources for this intelligence are not secret. They are publicly available if you know where to look and invest the time to build them systematically.',
            },
            {
              type: 'list',
              items: [
                'POM (Program Objective Memorandum) cycles: DoD publishes program funding requests annually; new and growing programs signal future contracting activity',
                'FOIA-released contracts: actual awards show who is already working with a customer, at what price, and with what scope',
                'Congressional budget justification documents (CBJs): line-item detail on what programs are funded and why',
                'Agency forecasts: every major DoD component publishes a procurement forecast; treat it as a starting list, not a pipeline',
                'Industry days and RFIs: attending in-person signals to the government that you are a serious vendor; RFI responses let you shape requirements',
                'LinkedIn and professional networks: program managers move jobs, contracting officers post notices, teaming partners post wins — all are intelligence',
                'FPDS.gov award data: search by agency, NAICS code, and contractor to map the competitive landscape in your target market',
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The $4.2M Proposal Written in Reaction Mode',
              text: 'A 60-person IT services firm in Northern Virginia had never tracked a pursuit more than 90 days before solicitation release. When a $40M IDIQ vehicle appeared on SAM.gov, they mobilized a full proposal team — 8 writers, a pricing analyst, a contracts manager, and two subcontractors — and spent $380,000 over 6 weeks. They lost to the incumbent at 93.6% LPTA price. Post-award debrief revealed the incumbent had attended three industry days over 18 months, had two staff embedded at the agency on a prior BPA, and had been given three draft RFP reviews under a market research request. The outcome was decided long before the solicitation dropped. The $380,000 was a tuition payment for a lesson that should not have required a proposal.',
            },
            {
              type: 'heading',
              text: 'Building the Pipeline Systematically',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A real BD pipeline is a living document that tracks opportunities by stage, not just by solicitation date. Every pursuit should move through defined gates: Identify → Qualify → Pursue → Propose → Submit → Award. Opportunities that cannot clear a qualification gate get dropped — not shelved "in case the situation changes." Pipeline discipline is the difference between a team that wins and one that is always busy but never growing.',
            },
            {
              type: 'table',
              headers: ['Pipeline Stage', 'Time Horizon', 'Key Activities', 'Gate Criteria to Advance'],
              rows: [
                ['Identify', '24–36 months out', 'Monitor POM, forecasts, FPDS; flag potential fit', 'Opportunity aligns with NAICS codes and capability areas'],
                ['Qualify', '12–24 months out', 'Attend industry days, submit RFIs, map competition', 'Pwin ≥ 25% after competitor and relationship assessment'],
                ['Pursue', '6–12 months out', 'Customer engagement, teaming conversations, B&P investment', 'Customer relationship established; teaming strategy defined'],
                ['Propose', '0–6 months out', 'Color team reviews, writing, pricing, compliance', 'Bid/no-bid approved; resources allocated; team under NDA'],
                ['Submit / Await', 'Post-submission', 'BAFO readiness, EN response preparation', 'Proposal submitted; debrief planned regardless of outcome'],
              ],
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'POM', definition: 'Program Objective Memorandum — DoD\'s internal budget request document submitted annually to OSD; identifies programs slated for new funding or growth in the five-year FYDP.' },
                { term: 'FPDS', definition: 'Federal Procurement Data System — the government\'s public database of contract awards; searchable by agency, NAICS code, contractor, and dollar value.' },
                { term: 'B&P', definition: 'Bid and Proposal costs — the internal labor, subcontractor, and overhead costs incurred to prepare a proposal; allowable as an indirect cost under FAR 31.205-18 up to a reasonable ceiling.' },
                { term: 'IDIQ', definition: 'Indefinite Delivery, Indefinite Quantity — a contract vehicle that establishes a ceiling value and ordering terms without committing to specific quantities; task orders are issued against it over the ordering period.' },
                { term: 'BPA', definition: 'Blanket Purchase Agreement — a simplified acquisition method that establishes pre-negotiated terms for repetitive purchases from a single vendor; common for small-dollar recurring services.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If your current BD process starts when SAM.gov publishes a solicitation, you are competing for scraps. The minimum viable pipeline for a firm targeting prime contracts in the $5M–$50M range requires at least 8–12 actively managed pursuits at any given time, with the top 3–4 in active pursue stage. That requires dedicated BD time 18+ months before solicitation — not just a proposal team that spins up on short notice.',
            },
          ],
        },
        {
          id: 'bd-opportunity-evaluation',
          title: 'Evaluating an Opportunity Before You Spend Money',
          estimatedMinutes: 30,
          content: [
            {
              type: 'paragraph',
              text: 'The most expensive decision in defense BD is not the proposal budget — it is the decision to bid. Once you commit to a pursuit, the costs compound quickly: capture manager time, business development travel, teaming negotiations, B&P dollars, and eventually a full proposal team. The bid/no-bid decision, made rigorously and early, is where win rates are determined.',
            },
            {
              type: 'heading',
              text: 'The 10 Questions Every Opportunity Must Answer',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Do we know the customer? Have we met the program manager, COR, or contracting officer in the last 12 months — not at a conference, but in a substantive conversation about their needs?',
                'Does the customer know us? Can we name a specific person at the agency who would recognize our company name and associate it with relevant work?',
                'Do we have directly relevant past performance? Can we cite contracts — not internal projects, not commercial work — that a government evaluator would score as directly relevant to this requirement?',
                'Who is the incumbent, and what is the incumbent\'s relationship with the customer? If the incumbent is well-liked and has no performance problems, your Pwin starts at roughly 20% regardless of your technical quality.',
                'Who else is competing? Have we done a competitive assessment and identified our top two or three competitors, their teaming partners, and their likely pricing approach?',
                'Does the requirement fit our core capabilities, or are we reaching? "We can do this if we hire the right people" is not a capability — it is an execution risk.',
                'Do we have the past performance on the specific NAICS code and size thresholds for the set-aside, if any?',
                'What is the likely evaluation methodology — LPTA, best value, or source selection with tradeoffs? Our strengths as a firm must align with how the government will evaluate.',
                'What is the contract type — FFP, CPFF, T&M — and do we have the financial capacity to absorb the risk associated with it?',
                'Can we realistically deliver? Not theoretically, not if everything goes right — actually deliver with the staff and subcontractors we have or can obtain with confidence?',
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Enthusiasm Tax',
              text: 'BD teams systematically overestimate their position on every opportunity. This is called the Enthusiasm Tax — the gap between what the BD team believes about their competitive position and what the evaluation record will show. The most common inflation points are: "the customer likes us" (liking and selecting are different), "we have relevant past performance" (relevant to the team, not necessarily to the evaluator), and "our price will be competitive" (without a should-cost analysis, this is a guess). Apply the 10 questions with a skeptic in the room, not with the BD team running the meeting alone.',
            },
            {
              type: 'heading',
              text: 'Evaluation Methodology Matters More Than You Think',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'LPTA (Lowest Price Technically Acceptable) competitions are won purely on price. If you are not among the two or three lowest-cost providers in your market segment, do not bid LPTA. There is no writing skill, no discriminator, no relationship advantage that overcomes a price that is 8% higher than the technically acceptable floor. Best-value competitions reward technical differentiation — but only when the RFP has meaningful discriminating evaluation factors. Source selection with tradeoffs gives the government maximum flexibility to pay a premium for superior capability. Know which game you are playing before you commit.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'LPTA', definition: 'Lowest Price Technically Acceptable — an evaluation methodology where the contract is awarded to the offeror with the lowest price among all proposals that meet the minimum technical requirements; technical quality above the acceptable threshold is not rewarded.' },
                { term: 'Pwin', definition: 'Probability of Win — a BD team\'s quantified estimate of the likelihood of winning a specific opportunity; used in bid/no-bid analysis to determine if expected contract value justifies the cost of pursuit.' },
                { term: 'Should-cost analysis', definition: 'An independent estimate of what a contract should cost based on labor categories, rates, and scope; used to assess whether your pricing will be competitive without leaving money on the table.' },
                { term: 'COR', definition: 'Contracting Officer\'s Representative — a government employee designated to monitor contractor performance on a specific contract; often more accessible than the contracting officer and a key relationship for BD intelligence.' },
                { term: 'Source selection', definition: 'The formal government process of evaluating proposals and selecting a contractor; governed by FAR Part 15 for negotiated procurements and includes evaluation against stated criteria in Section L and M of the solicitation.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Run the 10-question evaluation for every opportunity before you assign a capture manager. Score each question red/yellow/green. Any opportunity with more than three red answers should require explicit executive approval to pursue — not just BD team enthusiasm. The evaluation framework is most valuable when it creates accountability: the BD team that answers the questions also owns the Pwin estimate and the eventual outcome.',
            },
          ],
        },
        {
          id: 'bd-proposal-cost-winrate',
          title: 'The Real Cost of a Proposal and the Math of Win Rates',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'The defense industry has a dirty secret: most proposals lose. Industry-wide average win rates for competitive full-and-open solicitations run 15–25%. For small businesses competing for their first prime contract, 10–15% is realistic. This means that for every contract you win, you are typically writing and losing 4 to 9 proposals. The math only works if the cost of the losing proposals is low enough relative to the value of the ones you win.',
            },
            {
              type: 'heading',
              text: 'What a Defense Proposal Actually Costs',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Proposal cost estimates that show up in BD planning meetings are almost always understated. Teams count writer hours but forget the pricing analyst, the color team reviewers, the contracts manager reviewing terms, the subcontractor coordination, the desktop publishing, and the executive time in gate reviews. Here is a realistic cost range by competition type.',
            },
            {
              type: 'table',
              headers: ['Competition Type', 'Contract Value Range', 'Typical Proposal Cost', 'Cost Drivers'],
              rows: [
                ['Small simplified acquisition', '$25K–$250K', '$5K–$25K', 'Mostly labor for technical write-up and pricing; minimal color teams'],
                ['Mid-tier task order (IDIQ)', '$500K–$5M', '$50K–$150K', 'Technical volume, management volume, past performance, pricing; 1–2 color teams'],
                ['Large competitive prime', '$10M–$50M', '$150K–$400K', 'Multiple volumes, full color team schedule, oral prep, DCAA-compliant pricing'],
                ['Major competitive prime', '$50M+', '$400K–$1M+', 'All of the above plus potential oral presentations, site visits, security reviews, extensive subcontractor integration'],
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The Color Team Structure',
              text: 'Color teams are structured internal reviews at defined stages of proposal development. Each team has a specific purpose: Pink Team reviews the storyboard and solution approach before significant writing begins. Red Team reviews a near-complete draft as if they were the government evaluator — scoring it, identifying compliance gaps, and challenging weak discriminators. Gold Team reviews the final proposal for executive quality, consistency, and compliance. White Glove (or Gold) is the final check before submission. Not every proposal needs all four reviews, but any proposal above $5M in value that skips Red Team is taking on significant, avoidable risk.',
            },
            {
              type: 'heading',
              text: 'The Win Rate Math — Why Chasing Everything Kills Small Teams',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Consider a 10-person BD and proposals team with a $2M annual B&P budget. They can comfortably manage 8–12 proposal efforts per year. At a 20% win rate, they win 2 to 3 contracts. If each proposal costs $150,000 on average and each win is worth $8M, the math works: $1.2M in proposal spend generates $16–24M in contract wins. But if the same team chases 20 opportunities — lowering average proposal quality and spreading the team thin — costs may drop to $80K per proposal but win rate drops to 10%. Now they win 2 contracts for $1.6M in proposal spend. The math got worse, the team burned out, and the work quality declined.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Pink team', definition: 'An early-stage proposal review that evaluates the solution approach, win themes, and storyboard before significant writing investment; catches strategic problems cheaply.' },
                { term: 'Red team', definition: 'A mid-to-late-stage proposal review where reviewers score the draft as if they were the government Source Selection Evaluation Board; identifies compliance gaps, weak themes, and scoring vulnerabilities.' },
                { term: 'Gold team', definition: 'A final proposal review focused on executive quality, consistency across volumes, and submission readiness; typically conducted 48–72 hours before the deadline.' },
                { term: 'Win rate', definition: 'The ratio of contracts won to proposals submitted over a defined period; the single most important metric for assessing BD investment efficiency.' },
                { term: 'CDRL', definition: 'Contract Data Requirements List — a list of deliverables required under a contract, defined in DD Form 1423; relevant to pricing because CDRLs add scope that must be accounted for in the cost proposal.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Calculate your firm\'s actual cost-per-proposal and win rate before setting your BD budget for the year. If you do not track these numbers, you are managing BD by feel. The firms that grow in defense contracting are almost always the ones that bid fewer opportunities, invest more per bid, and win a higher percentage — not the ones that maximize proposal volume.',
            },
          ],
        },
        {
          id: 'bd-bid-no-bid-criteria',
          title: 'Bid/No-Bid Criteria That Actually Work',
          estimatedMinutes: 0,
          content: [],
        },
      ],
      quiz: [
        {
          id: 'bd-m1-q1',
          type: 'multiple-choice',
          question: 'An intelligence-driven pipeline development approach differs from reactive SAM.gov monitoring primarily because it:',
          options: [
            'Uses software tools to filter alerts more precisely',
            'Identifies and qualifies opportunities 18–36 months before solicitation release',
            'Relies on third-party market research firms instead of internal BD staff',
            'Focuses exclusively on IDIQ vehicles rather than standalone contracts',
          ],
          correctIndex: 1,
          explanation: 'Intelligence-driven BD identifies opportunities early enough to influence requirements, build customer relationships, and establish relevant past performance before the solicitation appears — typically 18 to 36 months out. By solicitation release, positioning decisions have largely been made.',
        },
        {
          id: 'bd-m1-q2',
          type: 'multiple-choice',
          question: 'Under LPTA evaluation methodology, which of the following is the decisive factor in award?',
          options: [
            'Technical approach quality above the acceptable threshold',
            'Past performance ratings from CPARs',
            'The lowest price among proposals that meet minimum technical requirements',
            'Oral presentation score combined with written technical volume',
          ],
          correctIndex: 2,
          explanation: 'LPTA awards to the lowest-priced technically acceptable offeror. Technical quality above the minimum threshold earns no additional credit. Firms without a cost advantage should not bid LPTA competitions.',
        },
        {
          id: 'bd-m1-q3',
          type: 'multiple-choice',
          question: 'The "Enthusiasm Tax" in BD decision-making refers to:',
          options: [
            'The additional proposal cost incurred when the BD team advocates for pursuing a risky opportunity',
            'The systematic gap between what BD teams believe about their competitive position and what the evaluation record shows',
            'The cost premium associated with hiring external proposal writers',
            'The budget overruns that occur during color team reviews',
          ],
          correctIndex: 1,
          explanation: 'The Enthusiasm Tax is the tendency of BD teams to overestimate their position — inflating perceived customer relationship quality, past performance relevance, and pricing competitiveness. Applying the 10-question evaluation with a skeptic in the room counteracts this bias.',
        },
        {
          id: 'bd-m1-q4',
          type: 'multiple-choice',
          question: 'A mid-tier task order competition with a $3M contract value typically carries a realistic proposal cost in the range of:',
          options: [
            '$5,000–$15,000',
            '$50,000–$150,000',
            '$400,000–$600,000',
            '$1,000,000–$1,500,000',
          ],
          correctIndex: 1,
          explanation: 'Mid-tier task order proposals ($500K–$5M contract value) typically cost $50K–$150K to prepare, encompassing technical and management volumes, past performance documentation, pricing, and 1–2 color team reviews.',
        },
        {
          id: 'bd-m1-q5',
          type: 'true-false',
          question: 'A Red Team proposal review is conducted before any significant writing begins, to evaluate the solution approach and win themes.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. The Red Team reviews a near-complete draft, scoring it as a government evaluator would. The early-stage review conducted before significant writing is the Pink Team, which evaluates storyboards and solution approach when course corrections are still inexpensive.',
        },
        {
          id: 'bd-m1-q6',
          type: 'multiple-choice',
          question: 'According to the win rate analysis in this module, a BD team that chases more opportunities than it can execute well will typically experience:',
          options: [
            'Higher total contract wins due to increased volume',
            'Lower cost-per-proposal and proportionally higher win rates',
            'Higher proposal spend with lower win rate, producing worse financial outcomes',
            'No change in win rate, since proposal quality is fixed by staff capability',
          ],
          correctIndex: 2,
          explanation: 'Spreading a BD team too thin lowers proposal quality, increases cost (due to rework and inefficiency), and reduces win rates. The math of win rate multiplied by contract value minus proposal cost typically favors fewer, better-resourced bids over high-volume mediocre bids.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 2 — Teaming Strategy
    // ─────────────────────────────────────────────
    {
      id: 'bd-teaming-strategy',
      number: 2,
      title: 'Teaming Strategy',
      description:
        'Decide when to prime and when to sub, find the right partners, negotiate teaming agreements that protect your interests, and leverage mentor-protégé programs for accelerated growth.',
      estimatedMinutes: 84,
      learningObjectives: [
        'Apply a structured decision framework for prime vs. subcontractor positioning',
        'Identify teaming partners through industry days, SBIR ecosystem, and prime supplier portals',
        'Negotiate teaming agreements that protect workshare, IP rights, and exclusivity with appropriate conditions',
        'Avoid the four most common teaming agreement mistakes that destroy small business value',
        'Understand SBA and DoD mentor-protégé program requirements and what proteges actually receive',
      ],
      lessons: [
        {
          id: 'bd-prime-vs-sub',
          title: 'Prime vs. Sub — A Decision Beyond Capability',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'The question of whether to prime or sub on a defense opportunity is one the best BD teams answer before the solicitation drops — and it is almost never a pure capability question. A firm may be fully capable of delivering a contract as prime while being financially or strategically unprepared to accept that role. The decision framework has three dimensions: capability, financial capacity, and competitive positioning.',
            },
            {
              type: 'heading',
              text: 'The Cash Flow Reality of Priming',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'As a prime, you are responsible for paying your subcontractors — typically within 30 days of receiving payment from the government under the Prompt Payment Act and its subcontracting flow-down requirements. On cost-plus contracts, you may be invoicing monthly and waiting 30–45 days for payment, while your subs and employees need to be paid in the meantime. On a $5M annual contract with 40% subcontracted work, you may need $200,000–$300,000 in working capital available at any point to bridge the payment cycle. Small firms that prime without adequate cash flow or a line of credit get in trouble fast — not because they perform poorly, but because they cannot cover payroll while waiting for the government check.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The 40% Rule for Set-Asides',
              text: 'Under FAR 52.219-14 (Limitations on Subcontracting), a small business prime on a set-aside contract must perform at least 50% of the contract cost for services (50% of labor cost for construction). This is a compliance requirement, not a preference — violations can result in contract termination and debarment. Before agreeing to prime a set-aside, confirm you can meet the performance of work requirement with your own workforce, not just with your teaming partners.',
            },
            {
              type: 'heading',
              text: 'When Subbing is the Better Strategic Move',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Subcontracting to a well-positioned prime is not a concession — it is often the fastest path to building the past performance and customer relationships needed to prime the next recompete. When evaluating a sub position, ask: Does this give us meaningful past performance in the agency and mission area we are targeting? Does the workshare allow us to demonstrate our core capabilities, or are we filling a low-skill gap role? Is the prime likely to win, and if they do, will we receive a CPAR? Is there a path to priming this contract or a follow-on?',
            },
            {
              type: 'table',
              headers: ['Factor', 'Prime Preferred', 'Sub Preferred'],
              rows: [
                ['Customer relationship', 'You have direct, established relationship with the PM/COR', 'Prime has stronger relationship; you are gaining access'],
                ['Cash flow', 'Line of credit ≥ 15% of annual contract value available', 'Cannot support prime payment obligations without risk'],
                ['Incumbent status', 'You are the incumbent or have a strong competitive position', 'Incumbent is entrenched; best path is partnering with them or a strong competitor'],
                ['Set-aside compliance', 'Can meet performance-of-work requirements with own staff', 'Workshare would require majority subcontracting, risking compliance'],
                ['Past performance need', 'Already have strong, relevant past performance for this scope', 'Need CPARs in this customer/mission area to compete for future primes'],
                ['Risk tolerance', 'Financial and operational capacity to absorb contract risk', 'Contract type (FFP) or scope risk exceeds current risk tolerance'],
              ],
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'CPAR', definition: 'Contractor Performance Assessment Report — the government\'s official evaluation of a contractor\'s performance during a contract period; CPARs are searchable by future contracting officers and are a primary source of past performance evidence in competitive proposals.' },
                { term: 'Prompt Payment Act', definition: 'Federal statute requiring agencies to pay contractors within 30 days of invoice approval; primes must pay subs within 7 days of receiving payment from the government under subcontracting flow-down requirements.' },
                { term: 'Limitations on subcontracting', definition: 'FAR clause (52.219-14 or 52.219-27 for 8(a)) requiring small business primes on set-aside contracts to self-perform a minimum percentage of work; typically 50% of labor cost for services.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Document your prime/sub decision for every pursuit in your pipeline. If the decision is "sub because we do not have the relationship" — that is actionable intelligence: start building that relationship now for the recompete. If the decision is "prime but our cash flow is a risk" — that is a financial planning flag for your CFO. The prime/sub decision should drive behavior, not just describe a contract role.',
            },
          ],
        },
        {
          id: 'bd-finding-teaming-partners',
          title: 'Finding Teaming Partners and What to Negotiate',
          estimatedMinutes: 32,
          content: [
            {
              type: 'paragraph',
              text: 'Teaming partner selection is one of the most consequential decisions in defense BD, and it is made poorly more often than not. Firms partner with whomever they know, whomever called them first, or whomever agreed to the workshare split without complaint. The best teaming decisions start with a capability gap analysis: what does the opportunity require that you cannot deliver alone, and which partners fill that gap with verifiable past performance?',
            },
            {
              type: 'heading',
              text: 'Where to Find Teaming Partners',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Industry days: the government\'s stated purpose is to brief industry on the requirement; the actual purpose for savvy BD professionals is to identify who else is in the room, which primes are treating it as a sub-hunting expedition, and which small businesses are positioning for a specific role',
                'SBIR/STTR phase II awardees: firms with completed SBIR Phase II have government-validated technology and a customer relationship — excellent candidates for teaming on programs that need innovative technical capability',
                'Prime supplier diversity portals: Lockheed Martin, Raytheon, Booz Allen, SAIC, and others maintain supplier registration databases; registering and being searched is different from active BD, but it creates inbound teaming interest',
                'GSA Schedule contractor lists: if the opportunity will be competed off a schedule, the GSA eLibrary shows who holds the relevant schedule, what they sell, and their contract history',
                'PTAC (Procurement Technical Assistance Center) networks: PTACs facilitate introductions between small businesses and primes looking for subcontractors — underused and free',
                'Past award teaming data: FPDS shows which firms teamed together on prior awards; if a team won previously, they may be looking for additional subs for follow-on work',
              ],
            },
            {
              type: 'heading',
              text: 'Teaming Agreements — What Matters',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A teaming agreement is a binding contract. Every element you negotiate before award determines your position if you win. Four provisions drive most of the disputes and value: workshare commitment, IP ownership, exclusivity scope, and proposal cost recovery.',
            },
            {
              type: 'table',
              headers: ['Provision', 'What You Want (as Sub)', 'What You Want (as Prime)', 'Red Lines — Walk Away If You See This'],
              rows: [
                ['Workshare commitment', 'Specific dollar or percentage floor with conditions for reduction', 'Flexibility to adjust scope based on final RFP requirements', 'Workshare "to be determined at prime\'s discretion" — meaningless'],
                ['IP ownership', 'Retain ownership of your IP; license to prime for contract performance only', 'License rights sufficient to deliver the contract', 'Unlimited IP license with no scope or time limit'],
                ['Exclusivity', 'Exclusivity limited to this specific opportunity with clear termination if partner changes requirements', 'Exclusive teaming to prevent sub from supporting competitors', 'Exclusivity broader than the specific opportunity without conditions'],
                ['Proposal cost recovery', 'Reimbursement clause if prime wins and drops you without cause', 'Clearly defined circumstances in which proposal cost recovery is or is not owed', 'No provision — your proposal contribution has no protection'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What to Never Give Away',
              text: 'Three teaming agreement provisions that small businesses routinely concede and should not: (1) An unlimited IP license means the prime can use your technology to compete against you on future contracts without your involvement. Limit any license to the specific contract, agency, and mission area. (2) Exclusivity without conditions means you cannot team with another prime even if the original prime changes the requirement scope to exclude your work. Always include a "material change in scope" termination right. (3) Workshare with no floor means you may win the award and receive $0 of the work. Require a minimum workshare floor, even if it is lower than your initial expectation.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Teaming agreement', definition: 'A pre-award contract between a prime and one or more subcontractors establishing the terms of their collaborative proposal effort; typically includes workshare commitments, exclusivity terms, IP rights, and proposal cost provisions.' },
                { term: 'NDA', definition: 'Non-Disclosure Agreement — a contract protecting proprietary information shared between teaming partners during proposal development; should be executed before sharing any pricing, proprietary technical data, or business strategies.' },
                { term: 'PTAC', definition: 'Procurement Technical Assistance Center — a federally-funded program that provides free consulting to businesses pursuing government contracts; maintains networks of small business contractors and prime supplier relationships.' },
                { term: 'Phase II SBIR', definition: 'The second phase of the Small Business Innovation Research program, in which a Phase I awardee receives up to $1.75M to develop and demonstrate the technology from Phase I; completion signals both technical maturity and existing government customer relationship.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Have a standard teaming agreement template reviewed by a government contracts attorney before you need it. Negotiating terms under time pressure with a solicitation deadline looming produces bad agreements. Your template should include a workshare floor clause, a scope-limited IP license, and a conditional exclusivity termination right as non-negotiable starting positions.',
            },
          ],
        },
        {
          id: 'bd-mentor-protege',
          title: 'The Mentor-Protégé Program — What It Actually Requires',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'The mentor-protégé program is one of the most misunderstood and underutilized tools in defense small business development. Firms have vague impressions that it involves large companies helping small companies — which is accurate but incomplete. The program has specific legal structure, application requirements, and deliverables that determine whether it creates genuine value or becomes an administrative burden.',
            },
            {
              type: 'heading',
              text: 'Two Programs, Different Purposes',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The SBA Mentor-Protégé Program is open to all small businesses. The DoD Mentor-Protégé Program is specifically designed for small disadvantaged businesses, women-owned small businesses, HUBZone firms, veteran-owned firms, and firms involved in critical technology areas. The DoD program provides a key benefit the SBA program does not: reimbursement to the mentor for the costs of developmental assistance, either as a direct payment or as credit against the mentor\'s subcontracting plan goals.',
            },
            {
              type: 'table',
              headers: ['Feature', 'SBA Mentor-Protégé', 'DoD Mentor-Protégé'],
              rows: [
                ['Eligible protégés', 'Any SBA-certified small business', 'SDB, WOSB, HUBZone, VOSB, SDVOSB, or critical technology firms'],
                ['Program duration', 'Up to 3 years, extendable', 'Up to 3 years per agreement, up to 6 years total'],
                ['Mentor benefit', 'Subcontracting credit toward SB goals', 'DoD reimbursement for assistance costs OR subcontracting credit'],
                ['Joint venture eligibility', 'Yes — protégé retains SB status for JV work', 'Yes — critical for competing for set-asides as a JV team'],
                ['Annual reporting', 'Annual progress report to SBA', 'Semi-annual reports to cognizant DoD component'],
                ['Application process', 'Submit to SBA with mentor agreement', 'Submit to cognizant DoD component; more complex and slower'],
              ],
            },
            {
              type: 'heading',
              text: 'What the Protégé Actually Gets',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On paper, the protégé receives technical, managerial, financial, and business development assistance from a large, experienced prime. In practice, the value varies enormously based on how well the agreement is written and how actively the protégé pursues the relationship. The most valuable mentor-protégé outcomes are: joint venture formation that allows the protégé to compete for and win prime contracts they could not win alone, past performance citations from the joint venture\'s contract awards, and specific technical capability transfers (certifications, clearances, facilities access) with permanent value to the protégé.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Mentor-Protégé That Built a Prime Contractor',
              text: 'A 12-person cybersecurity firm in the DC area entered a DoD mentor-protégé agreement with a Tier 1 defense prime in 2018. The stated goal was to develop the firm\'s ability to manage CMMC Level 3 environments for DoD customers. Over 3 years, the mentor: co-located two technical leads with the protégé during a Navy program; sponsored the protégé\'s DCSA facility clearance application; included the protégé as a named subcontractor (with guaranteed workshare) on two new contract bids; and provided finance team training that helped the protégé develop a DCAA-compliant accounting system. By 2021, the firm had grown to 47 people, held a SECRET facility clearance, carried 3 CPARs as a subcontractor and 1 as a prime on a small set-aside, and competed as a prime on a $12M IDIQ it would never have been eligible for without the mentor relationship. The mentor-protégé program is not a subsidy — it is structured relationship development. But it only works if the protégé drives the agenda.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'If you are an eligible protégé (SDB, WOSB, HUBZone, veteran-owned, or in a critical technology area), evaluate the mentor-protégé program as a deliberate growth strategy, not a passive benefit. Before approaching a potential mentor, prepare a written development plan: what capabilities do you need to build in the next 3 years to compete for prime contracts in your target market? Mentors are more likely to commit when the protégé arrives with a specific plan, not a general request for help.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bd-m2-q1',
          type: 'multiple-choice',
          question: 'A small business prime on a services set-aside contract must self-perform at least what percentage of the contract\'s labor cost?',
          options: ['25%', '35%', '50%', '65%'],
          correctIndex: 2,
          explanation: 'Under FAR 52.219-14 (Limitations on Subcontracting), a small business prime on a services set-aside must perform at least 50% of the labor cost with its own employees. This is a compliance requirement, not a preference — violations can result in contract termination.',
        },
        {
          id: 'bd-m2-q2',
          type: 'multiple-choice',
          question: 'Which of the following teaming agreement provisions is described in this module as a "red line — walk away if you see this"?',
          options: [
            'A workshare floor set at 30% rather than the initially requested 40%',
            'An IP license limited to the specific contract, agency, and mission area',
            'Exclusivity covering this specific opportunity only',
            'An unlimited IP license with no scope or time limit',
          ],
          correctIndex: 3,
          explanation: 'An unlimited IP license means the prime can use your technology to compete against you on future contracts without your involvement. The module identifies this as a non-negotiable red line for small businesses; any IP license should be limited to the specific contract, agency, and mission area.',
        },
        {
          id: 'bd-m2-q3',
          type: 'multiple-choice',
          question: 'The DoD Mentor-Protégé Program provides a benefit not available in the SBA version. That benefit is:',
          options: [
            'Protégé access to classified program information',
            'DoD reimbursement for the mentor\'s assistance costs, or credit against the mentor\'s subcontracting plan goals',
            'Automatic small business status preservation for five years after the agreement ends',
            'Guaranteed subcontract awards to the protégé on all of the mentor\'s DoD contracts',
          ],
          correctIndex: 1,
          explanation: 'The DoD Mentor-Protégé Program uniquely provides reimbursement to the mentor for the costs of developmental assistance provided to the protégé, either as a direct payment or as credit against subcontracting plan goals. The SBA program offers only subcontracting credit.',
        },
        {
          id: 'bd-m2-q4',
          type: 'true-false',
          question: 'A teaming agreement should be executed before sharing pricing, proprietary technical data, or business strategies with a potential partner.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. An NDA (and ideally a teaming agreement) should be in place before any proprietary information — pricing, technical approaches, win strategies — is shared with a potential teaming partner. Information shared without an NDA has no legal protection if the partner later decides to compete against you or share the information.',
        },
        {
          id: 'bd-m2-q5',
          type: 'multiple-choice',
          question: 'When evaluating whether to prime or sub on an opportunity, the cash flow consideration is primarily about:',
          options: [
            'Whether the firm can afford to pay proposal writing costs before award',
            'Whether the firm can support paying subcontractors while waiting for government payment on an ongoing contract',
            'Whether the firm\'s profit margin on the contract will be sufficient to cover overhead',
            'Whether the firm\'s bank will extend a line of credit for proposal B&P costs',
          ],
          correctIndex: 1,
          explanation: 'As a prime, you must pay subcontractors within 7 days of receiving government payment, while simultaneously covering employee payroll and overhead. On a $5M contract with 40% subcontracted work, this can require $200,000–$300,000 in available working capital at any given time — a real constraint for small firms without a line of credit.',
        },
        {
          id: 'bd-m2-q6',
          type: 'multiple-choice',
          question: 'Which source of teaming partner identification is described as "underused and free" in this module?',
          options: [
            'GSA Schedule eLibrary contractor searches',
            'FPDS award data searches',
            'PTAC (Procurement Technical Assistance Center) networks',
            'LinkedIn BD outreach',
          ],
          correctIndex: 2,
          explanation: 'PTACs (Procurement Technical Assistance Centers) are federally funded programs that facilitate introductions between small businesses and primes looking for subcontractors. They are free to use and explicitly designed for this purpose — but most small defense firms do not engage them actively.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 3 — Proposal Writing Fundamentals
    // ─────────────────────────────────────────────
    {
      id: 'bd-proposal-writing',
      number: 3,
      title: 'Proposal Writing Fundamentals',
      description:
        'Apply the Shipley method to write technically compliant, evaluator-focused proposals. Build compliance matrices, write executive summaries that discriminate, and document past performance to maximize scoring.',
      estimatedMinutes: 84,
      learningObjectives: [
        'Apply Shipley method principles — customer focus, discriminators, themes, proof — to proposal content',
        'Describe how government evaluators actually process proposals and why compliance matrix order matters',
        'Build a compliance matrix that drives the proposal process rather than merely verifying output',
        'Write executive summaries that front-load discriminators rather than burying them',
        'Document past performance using CPARs, references, and metrics in the format evaluators weight most heavily',
      ],
      lessons: [
        {
          id: 'bd-shipley-method',
          title: 'The Shipley Method and How Evaluators Actually Read Proposals',
          estimatedMinutes: 30,
          content: [
            {
              type: 'paragraph',
              text: 'The Shipley method — developed by Tom Shipley and refined over five decades of defense proposal work — is the most widely taught proposal development framework in the industry. Its core insight is that proposals are not technical documents; they are sales documents written for a specific customer with specific discriminating needs. Every word should either prove compliance, communicate a discriminator, or reinforce a win theme. Words that do neither are waste.',
            },
            {
              type: 'heading',
              text: 'The Four Pillars of the Shipley Method',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Customer focus: Every section answers the question "what does this mean for the customer\'s mission?" — not "here is what our company does." The proposal should read as if it was written specifically about this customer\'s problem, not adapted from a previous proposal.',
                'Discriminators: A discriminator is a feature of your solution or company that is both important to the customer and better than the competition — not just a strength, but a strength that differentiates. Stating that your team is "highly experienced" is not a discriminator. Stating that two of your proposed key personnel built the specific system the customer is expanding is a discriminator.',
                'Themes: Win themes are the 3–5 strategic messages you want the evaluator to associate with your proposal by the time they finish reading. They appear in the executive summary, section openings, and graphics captions — not buried in paragraph five of a subsection.',
                'Proof: Every claim in a proposal should be supported by verifiable evidence — contract numbers, dollar values, performance metrics, CPAR ratings. Unsupported claims ("we have extensive experience in...") are dismissed by experienced evaluators. Specific evidence ("on Contract N00024-21-C-2143, we reduced help desk resolution time from 4.2 hours to 1.8 hours, earning an Exceptional CPAR rating") is scored.',
              ],
            },
            {
              type: 'heading',
              text: 'How Government Evaluators Actually Read Proposals',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A government Source Selection Evaluation Board (SSEB) evaluator assigned to the technical factor typically has 5–20 proposals to evaluate, each potentially running 50–200 pages, in addition to their regular job duties. They do not read your proposal the way you wrote it. Understanding their actual reading pattern changes how you structure every section.',
            },
            {
              type: 'ordered-list',
              items: [
                'Compliance matrix check first: evaluators confirm that every Section L requirement has been addressed and is findable. Missing or non-compliant responses may disqualify the proposal before detailed evaluation begins.',
                'Executive summary: this is often the first scored content read. If your executive summary does not communicate your discriminators clearly, the evaluator approaches the rest of the proposal looking to confirm an initial impression that you are average.',
                'Technical section scanning: evaluators rarely read technical sections word-for-word on a first pass. They scan for graphics, headers, and callout boxes. Your most important technical content should appear in visual formats — process diagrams, tables, annotated illustrations — not buried in paragraph prose.',
                'Past performance: evaluated separately and often before the technical volume. Past performance evaluators are looking for relevance (similar scope, dollar value, agency type) and recency (typically within 5 years), not narrative eloquence.',
                'Cost/price: evaluated for realism, completeness, and consistency with the technical approach — not just for lowest number (except in LPTA).',
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The 200-Page Proposal That Scored Below a 60-Pager',
              text: 'In a competitive procurement for a $28M Army logistics support contract, a BD director reviewed her company\'s 194-page proposal against the debrief feedback from a 63-page competitor proposal that won. The evaluator feedback revealed that the winning proposal had placed its three discriminators — unique depot certification, key personnel with installation-specific experience, and a transition plan with a 30-day zero-gap guarantee — in a single graphic on page 1 of the executive summary, and reinforced each discriminator with a specific proof point in the corresponding technical section. Her company\'s discriminators were present in the proposal but appeared for the first time in section 3, paragraphs 4, 7, and 12 respectively. The evaluator noted the information was "present but not prominent." Evaluation scores are determined by what is prominent, not what is present.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Section L', definition: 'The section of a government RFP (Proposal Instructions) that specifies exactly what the offeror must include in its proposal — content requirements, page limits, format requirements, and submission instructions.' },
                { term: 'Section M', definition: 'The section of a government RFP (Evaluation Factors and Criteria) that describes how proposals will be evaluated and the relative weight of each factor; must be read alongside Section L to understand what the government will actually score.' },
                { term: 'SSEB', definition: 'Source Selection Evaluation Board — the government team responsible for evaluating proposals and preparing the source selection recommendation; typically includes technical evaluators, past performance evaluators, and a cost/price analyst.' },
                { term: 'Win theme', definition: 'A strategic message that the proposal team wants the evaluator to associate with their proposal; appears in multiple locations (executive summary, section openings, graphics) rather than a single paragraph.' },
                { term: 'Discriminator', definition: 'A proposal element that is both important to the customer and better than what competitors are likely to offer; the combination of importance and differentiation is what makes something a true discriminator rather than merely a strength.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Before your next proposal, map where your discriminators appear in the document. If they are not on page 1 of the executive summary and visually prominent in the first graphic of each major technical section, move them. The evaluator\'s reading pattern means that content position is a scoring variable, not just content quality.',
            },
          ],
        },
        {
          id: 'bd-compliance-matrix',
          title: 'Compliance Matrices and Executive Summaries That Get Read',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'The compliance matrix is the single most important tool in your proposal process — not because it is the most creative, but because it prevents the most common and most expensive proposal failure: non-responsiveness to explicit government requirements. A proposal that fails to address a Section L requirement can be eliminated from competition regardless of technical quality. More subtly, a proposal that addresses requirements but makes them hard to find will score below a less sophisticated proposal that makes compliance obvious.',
            },
            {
              type: 'heading',
              text: 'Building a Compliance Matrix That Drives the Process',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Most proposal teams build a compliance matrix as a quality check at the end of the process — verifying that completed sections cover all requirements. This is backward. A compliance matrix built from the RFP before writing begins serves as the proposal outline, the writer\'s assignment sheet, the page budget tracker, and the evaluator simulation tool. When built first, it drives the process rather than reviewing it.',
            },
            {
              type: 'table',
              headers: ['Matrix Column', 'Purpose', 'Who Populates It'],
              rows: [
                ['Section L Reference', 'Exact RFP paragraph number and requirement text', 'Proposal manager at RFP release'],
                ['Section M Link', 'Corresponding evaluation criterion that will score this response', 'Proposal manager at RFP release'],
                ['Proposal Section', 'Where in the proposal this requirement is addressed', 'Proposal manager when outlining'],
                ['Page Location', 'Exact page number in the draft/final proposal', 'Updated by writers as drafts develop'],
                ['Writer Assigned', 'Name of the team member responsible for this response', 'Proposal manager at kickoff'],
                ['Compliance Status', 'Red/Yellow/Green — addressed, partially addressed, not yet addressed', 'Updated in every review cycle'],
                ['Evaluator Note', 'How a government evaluator will find this response based on headers and structure', 'Red Team reviewers'],
              ],
            },
            {
              type: 'heading',
              text: 'Executive Summaries That Discriminate',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The executive summary is not a summary. It is a discriminating sales document with a specific job: to make the evaluator want to give your proposal the highest score before they finish reading page 1. It accomplishes this by stating, in the first paragraph, what makes your solution better for this customer\'s mission — not what your company does, not how long you have been in business, not how committed you are to quality.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Five Opening Lines That Kill Executive Summaries',
              text: '"[Company Name] is pleased to submit this proposal..." — The government knows you submitted; they are holding it. "With over [X] years of experience..." — Experience without specificity is not a discriminator. "We understand the importance of this requirement..." — This says nothing. Every offeror understands it is important. "[Company Name] is a [size/location] company that provides [general service area]..." — The evaluator can read your SAM.gov profile. "Our team is committed to excellence..." — Commitment to excellence is table stakes, not a discriminator. Each of these openings tells the evaluator you have nothing differentiated to say. Replace all five with: "The [Agency] [Program]\'s most critical challenge is [specific problem]. [Your Company]\'s solution addresses this by [specific discriminator 1], [specific discriminator 2], and [specific discriminator 3] — as demonstrated by [specific proof point from relevant past performance]."',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Compliance matrix', definition: 'A cross-reference document mapping every Section L proposal requirement to the location in the offeror\'s proposal where that requirement is addressed; used both to drive proposal development and to verify responsiveness before submission.' },
                { term: 'Non-responsiveness', definition: 'A proposal\'s failure to address a material requirement in the solicitation; may result in the proposal being rated unacceptable or eliminated from competition without evaluation of other factors.' },
                { term: 'RFP', definition: 'Request for Proposal — a solicitation document under FAR Part 15 that invites competitive proposals; typically includes Sections L (proposal instructions) and M (evaluation criteria) as the primary guidance for offerors.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Start your compliance matrix the day the RFP drops, before assigning writers. Use it to identify ambiguous requirements (flag for the government via pre-proposal questions), conflicting page limits, and requirements that seem simple but require specific subject matter expertise. A compliance matrix built in day one becomes your proposal manager\'s most important control document.',
            },
          ],
        },
        {
          id: 'bd-past-performance',
          title: 'Past Performance — Documentation and Scoring Weight',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'Past performance is the most underinvested factor in defense proposal development. Technical approach sections get most of the writing time; past performance sections get whatever is left over, typically populated with narrative copied from previous proposals with the customer name changed. This is a strategic error. In many competitions — particularly recompetes where the incumbent has strong performance ratings — past performance is the deciding factor, not technical approach.',
            },
            {
              type: 'heading',
              text: 'What Evaluators Are Actually Measuring',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Past performance evaluation under FAR 15.305 assesses two things: relevancy and performance quality. Relevancy means the previous work is similar in scope, dollar value, complexity, and mission area to the current requirement. Performance quality means the firm did the work well — measured by CPAR ratings, reference feedback, and quantifiable performance metrics. Both must be present. Strong performance on irrelevant contracts does not help. Relevant contracts with mediocre performance hurt.',
            },
            {
              type: 'table',
              headers: ['Documentation Type', 'What It Provides', 'Strength as Evidence', 'How to Obtain'],
              rows: [
                ['CPAR (Contractor Performance Assessment Report)', 'Official government rating across 6 dimensions; searchable by contracting officers', 'Highest — government-verified, standardized, difficult to dispute', 'Automatically generated for contracts >$150K; request access via CPARS.gov'],
                ['Past Performance Questionnaire (PPQ)', 'Customer-specific performance reference completed at proposal time', 'High — custom to this proposal, but dependent on reference responsiveness', 'Send template to COR and PM 2–3 weeks before proposal due; follow up in person'],
                ['Award documents and modifications', 'Scope, dollar value, period of performance for relevancy claim', 'Medium — proves relevancy but not performance quality', 'Maintain a contract performance file with all award documents'],
                ['Internal performance metrics', 'SLA adherence, delivery timeliness, defect rates, cost performance', 'Medium — shows quality, but not independently verified', 'Build a metrics database during contract performance, not just at recompete'],
              ],
            },
            {
              type: 'heading',
              text: 'Why Incumbents Win Past Performance — and How to Compete',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On a recompete, the incumbent starts with recent, directly relevant CPARs for the exact contract being recompeted. A non-incumbent must argue that their past performance, from different contracts, is sufficiently relevant to be equivalent. This structural disadvantage in past performance scoring is one reason why incumbents win recompetes at a rate of approximately 80%. To compete, non-incumbents must: select the two or three most relevant contracts (not the most impressive ones) and make the relevancy argument explicitly; obtain strong PPQ responses from CORs and PMs who can speak to mission similarity; and include past performance citations from teaming partners where the prime\'s own past performance has gaps.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The CPAR That Changed an Award Decision',
              text: 'A mid-size cybersecurity firm was competing for a DHS network monitoring contract recompete. They were not the incumbent. During debrief on their prior (losing) bid, the Source Selection Authority noted that their past performance factor had been rated "Acceptable" rather than "Good" — despite strong technical scores — because the evaluator could not verify the performance metrics claimed in the proposal narrative. In the current recompete, the BD team spent 3 weeks before proposal submission doing something different: they logged into CPARS.gov, pulled their three most recent CPARs, extracted the exact CPAR ratings language, and built the past performance volume around direct quotes from the CPARs with contract numbers cited. They also submitted PPQs to four CORs 3 weeks before the RFP deadline and personally called each one. Result: Past Performance factor rated "Excellent," technical rated "Good," and they won at a slight price premium over the incumbent. The evaluator\'s post-award comment: "Past performance was exceptionally well-documented and directly relevant." Nothing in their past performance had changed — only their documentation of it.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Treat past performance documentation as a continuous process, not a proposal-time scramble. During every contract, maintain a running log of: significant accomplishments with metrics, COR and PM names and contact information, delivery performance against milestones, and any commendations or award fees received. When the recompete RFP drops, your past performance volume should be 80% written — not starting from scratch.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bd-m3-q1',
          type: 'multiple-choice',
          question: 'According to the Shipley method, a "discriminator" is defined as:',
          options: [
            'Any strength or capability that your company possesses',
            'A feature that is both important to the customer and better than what competitors offer',
            'A unique technology or patent held exclusively by the offeror',
            'A past performance rating of Exceptional on the most recent CPAR',
          ],
          correctIndex: 1,
          explanation: 'A discriminator must meet both criteria: it must be important to the customer (not just impressive to the offeror) and it must be better than what competitors are likely to offer. A strength that every competitor shares is not a discriminator — it is table stakes.',
        },
        {
          id: 'bd-m3-q2',
          type: 'multiple-choice',
          question: 'Government Source Selection evaluators typically begin reading a proposal by first reviewing:',
          options: [
            'The management approach section, to assess key personnel qualifications',
            'The cost/price volume, to eliminate unaffordable proposals',
            'The compliance matrix or Section L requirements coverage',
            'The executive summary',
          ],
          correctIndex: 2,
          explanation: 'Evaluators typically begin with a compliance check — confirming that every Section L requirement has been addressed and is findable in the proposal. Proposals that fail this check may be eliminated before substantive evaluation. The executive summary is read second, as the first scored content.',
        },
        {
          id: 'bd-m3-q3',
          type: 'true-false',
          question: 'An executive summary should open by describing the company\'s years of experience and commitment to quality before introducing technical discriminators.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. The module identifies "with over X years of experience" and "committed to excellence" as among the five opening lines that kill executive summaries. The first paragraph should state the customer\'s most critical challenge and your specific discriminators that address it, supported by a proof point from relevant past performance.',
        },
        {
          id: 'bd-m3-q4',
          type: 'multiple-choice',
          question: 'A compliance matrix is most valuable when it is:',
          options: [
            'Built after proposal writing is complete, as a final quality check before submission',
            'Maintained by the contracts team and reviewed only during gold team',
            'Built from the RFP before writing begins, serving as outline, writer assignment sheet, and evaluator simulation tool',
            'Provided by the government in the RFP as part of Section L instructions',
          ],
          correctIndex: 2,
          explanation: 'A compliance matrix built after writing is complete is a verification tool. A compliance matrix built before writing begins drives the entire process — it becomes the outline, the writer\'s assignment sheet, the page budget, and the evaluator simulation. Building it first is the most important use of the first 24 hours after an RFP drops.',
        },
        {
          id: 'bd-m3-q5',
          type: 'multiple-choice',
          question: 'The strongest form of past performance evidence available for a defense proposal is:',
          options: [
            'A letter of recommendation from the program manager, included as an appendix',
            'Internal performance metrics maintained by the contractor',
            'A CPAR (Contractor Performance Assessment Report) from CPARS.gov',
            'A past performance questionnaire (PPQ) completed by the COR at proposal time',
          ],
          correctIndex: 2,
          explanation: 'CPARs are government-verified, standardized, and searchable by contracting officers. They carry the highest evidentiary weight because they are independently generated by the government rather than solicited or written by the contractor. PPQs are strong but dependent on reference responsiveness and are not independently verifiable in the same way.',
        },
        {
          id: 'bd-m3-q6',
          type: 'multiple-choice',
          question: 'Incumbents win contract recompetes at approximately what rate, largely due to their advantage in past performance?',
          options: ['40%', '55%', '65%', '80%'],
          correctIndex: 3,
          explanation: 'Incumbents win recompetes at approximately an 80% rate. The incumbent starts with recent, directly relevant CPARs for the exact contract being recompeted — a structural advantage that non-incumbents must overcome through stronger documentation of past performance relevancy, PPQ responses, and teaming partner past performance citations.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 4 — Oral Presentations and Final Proposal Revisions
    // ─────────────────────────────────────────────
    {
      id: 'bd-oral-presentations',
      number: 4,
      title: 'Oral Presentations and Final Proposal Revisions',
      description:
        'Navigate the post-submission phase: evaluation timelines, Evaluation Notices, BAFOs, and oral presentations. Prepare a team to win in the final competitive round where programs are actually decided.',
      estimatedMinutes: 84,
      learningObjectives: [
        'Describe the government evaluation timeline and what happens during the silence after proposal submission',
        'Respond to Evaluation Notices (ENs) without inadvertently making new commitments or revealing competitive position',
        'Price and structure Best and Final Offers (BAFOs) with full understanding of their strategic context',
        'Prepare a proposal team for oral presentations — roles, content, and Q&A discipline',
        'Understand why oral presentations are often where competitions are decided, not confirmed',
      ],
      lessons: [
        {
          id: 'bd-post-submission-ens',
          title: 'After Submission — Evaluation Timelines and Evaluation Notices',
          estimatedMinutes: 28,
          content: [
            {
              type: 'paragraph',
              text: 'The period between proposal submission and award notification is one of the most mismanaged phases in defense BD. Companies either go completely dark — assuming the evaluation is out of their hands — or they make anxious and often counterproductive attempts to maintain contact with the contracting office. Neither is optimal. The right posture is informed readiness: understanding what the government is doing and being prepared to respond when they reach out.',
            },
            {
              type: 'heading',
              text: 'What the Government Is Doing After You Submit',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Administrative review: the contracting officer confirms that all required proposal parts were submitted, volume page limits were met, and format requirements were followed. This usually takes 1–3 days.',
                'Technical evaluation: SSEB members score each proposal against the evaluation criteria. For competitive awards in the $5M–$50M range, this typically takes 3–8 weeks depending on the number of offerors and proposal complexity.',
                'Past performance evaluation: a separate team evaluates past performance relevancy and quality, often referencing CPARs directly and contacting references.',
                'Cost/price analysis: the government contracting officer or DCAA-supported analyst performs a cost realism assessment (for cost-plus contracts) or a price reasonableness analysis (for fixed-price).',
                'Competitive range determination: for complex procurements, the Source Selection Authority may establish a competitive range — the subset of offerors in contention — and exclude offerors with unacceptably low technical scores. Offerors excluded from the competitive range receive notification.',
                'ENs and discussions (if opened): if the contracting officer opens discussions, offerors in the competitive range receive Evaluation Notices identifying deficiencies, significant weaknesses, or uncertainties. Responses are due within a specified period.',
                'BAFO request: after discussion rounds are complete, the government requests a Best and Final Offer with a firm due date.',
                'Source Selection decision and award: the Source Selection Authority makes the final decision; notification typically follows within days.',
              ],
            },
            {
              type: 'heading',
              text: 'Evaluation Notices — Responding Without Giving Away Your Position',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'An Evaluation Notice (EN) is a written communication from the government during discussions that identifies a specific element of your proposal that requires clarification or raises a concern. ENs fall into three categories: deficiencies (failures that would, unless corrected, result in unacceptable performance); significant weaknesses (aspects of the proposal that appreciably increase the risk of unsuccessful contract performance); and uncertainties (aspects that are unclear and require clarification). Each category demands a different response strategy.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Three EN Response Traps',
              text: 'Three common mistakes in EN responses that damage competitive position: (1) Volunteering new information not requested. The government asked about one issue; you responded about that issue plus added two new capabilities you had not previously mentioned. Evaluators may view this as an out-of-scope change or may wonder why the capability was not in the original proposal. Respond only to what was asked. (2) Making commitments you cannot keep. Under pressure to clarify a concern, BD writers sometimes promise specific staffing, deliverable timelines, or technical approaches that the delivery team has not approved. EN responses are contractually binding if they survive to award. Get operations and contracts sign-off on every EN response. (3) Revealing your pricing floor. Discussions are explicitly prohibited from allowing the government to conduct "auctioning" — revealing one offeror\'s price to another. But offerors sometimes reveal their pricing structure or flexibility in EN responses in ways that telegraph their BAFO strategy.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'EN', definition: 'Evaluation Notice — a written communication from the contracting officer during discussions, identifying a deficiency, significant weakness, or uncertainty in an offeror\'s proposal that requires a written response.' },
                { term: 'BAFO', definition: 'Best and Final Offer — a final revised proposal submitted after discussions are closed; represents the offeror\'s best price and final technical approach, from which the source selection decision will be made.' },
                { term: 'Competitive range', definition: 'The subset of offerors determined by the Source Selection Authority to be most likely to result in award if discussions are held; offerors outside the competitive range are notified and excluded from further evaluation.' },
                { term: 'Discussions', definition: 'Formal, structured communications between the contracting officer and offerors in the competitive range after proposal submission; differ from clarifications in that they may result in revisions to proposals including price.' },
                { term: 'Deficiency', definition: 'In proposal evaluation, a material failure to meet a government requirement that, if not corrected, would make contract award inappropriate; must be addressed in an EN response to remain in the competitive range.' },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Prepare an EN response team before you submit — not after you receive the first EN. Identify who has authority to approve commitments in EN responses (typically the contracts manager and program manager jointly), establish a review-and-sign-off process, and set a response drafting timeline that allows legal or contracts review before submission. ENs typically have 3–7 day response windows; a process defined in advance produces better responses than one improvised under deadline.',
            },
          ],
        },
        {
          id: 'bd-bafos',
          title: 'BAFOs — When They Happen and How to Price Them',
          estimatedMinutes: 26,
          content: [
            {
              type: 'paragraph',
              text: 'A Best and Final Offer is the government\'s final call for competitive price reductions and technical revisions before award. BAFOs are significant: they are your last opportunity to respond to the full competitive landscape, adjust your technical approach based on EN feedback, and sharpen your price to close the gap with lower-priced competitors — or, if you are already the lowest price, to ensure your technical approach is as strong as possible without cutting further.',
            },
            {
              type: 'heading',
              text: 'When BAFOs Do and Do Not Happen',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Not every competitive procurement results in a BAFO request. If the contracting officer determines that the proposal from the initial submission is already fairly priced and technically acceptable without discussions, they may award without a BAFO. This is permitted under FAR 15.307 and happens more often than BD teams expect — particularly on small-dollar competitions where the government wants to minimize procurement administrative burden. Always assume you may not get a BAFO. Your initial proposal should be competitive enough to win without one.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'BAFO Pricing Strategy Fundamentals',
              text: 'Pricing a BAFO requires answering three questions before adjusting a single number: (1) What did the government\'s ENs reveal about how our technical approach was evaluated — did we score where we expected to score? (2) Do we have any intelligence about the competitive pricing landscape, and is our should-cost analysis still valid? (3) What is the risk of cutting price in this BAFO — are we already at a margin level that makes the contract financially unattractive even if we win? A BAFO price reduction that wins the contract but produces a loss on the contract is not a BD success; it is a deferred operations crisis.',
            },
            {
              type: 'heading',
              text: 'Technical BAFO — What Can and Cannot Change',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The technical BAFO is not an opportunity for a complete proposal rewrite. Changes in a BAFO should be limited to: responses to specific ENs that identified deficiencies or weaknesses; corrections of factual errors identified during evaluation; and pricing adjustments that align with any technical scope changes. Introducing new capabilities, new key personnel, or new technical approaches not previously discussed raises a fairness concern — the government may view it as an out-of-scope change and request that you explain why the capability was not in the original proposal. Stick to fixing what was identified as broken.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Maintain a BAFO war room posture during the evaluation period — not constant activity, but readiness. Keep your pricing model current so that a BAFO request with a 72-hour response window does not require rebuilding from scratch. Designate a BAFO decision-maker (typically the CEO or BD Vice President) who has authority to approve price adjustments without a lengthy approval process.',
            },
          ],
        },
        {
          id: 'bd-oral-presentations-prep',
          title: 'Oral Presentations — Where Programs Are Won and Lost',
          estimatedMinutes: 30,
          content: [
            {
              type: 'paragraph',
              text: 'Oral presentations are required on an increasing proportion of DoD competitions, particularly for complex services, IT, and program management contracts. The government\'s stated purpose is to evaluate the offeror\'s understanding of the requirement and the quality of the proposed key personnel. The actual effect is more significant: oral presentations allow the government to see the actual people they will be working with, under pressure, making real-time decisions. Technical evaluators who were impressed by a polished written proposal sometimes come away from an oral more cautious — and vice versa.',
            },
            {
              type: 'heading',
              text: 'Roles in an Oral Presentation',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Presenter-in-chief: typically the proposed program manager or technical lead — the person who will actually run the contract. They should carry 60–70% of the speaking time. The government wants to evaluate them, not your BD team.',
                'Executive sponsor: the senior company representative who opens, reinforces corporate commitment, and closes. Keep their speaking time under 15% of the total — they are a credibility signal, not the evaluation focus.',
                'Technical subject matter expert: presents one or two specific technical sections. Must be credible in Q&A; do not include a technical SME who cannot defend their section under probing questions.',
                'Note-taker/timekeeper: a non-presenter role tracking questions asked, time used, and any commitments made verbally during Q&A. Every commitment made in an oral is on the record — you need a log.',
              ],
            },
            {
              type: 'heading',
              text: 'Preparing for Q&A — Where Competitions Are Decided',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The structured presentation is rehearsed, polished, and largely predictable. The Q&A is not. Government evaluators use Q&A to probe exactly the gaps and uncertainties they identified during the written evaluation. A team that answers Q&A questions with fluency, specificity, and honesty — without panicking, hedging excessively, or contradicting their written proposal — earns trust. A team that stumbles, contradicts their written approach, or defers every question to "I\'ll have to check on that" creates doubts that written excellence cannot erase.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Q&A That Flipped an Award',
              text: 'A BD director at a defense IT services firm watched her company lose a $35M DISA contract because of a single Q&A exchange during oral presentations. Their technical approach was rated Outstanding in the written evaluation. During Q&A, the evaluator asked the proposed program manager to explain the approach to handling classified data spillage in a specific scenario. The PM, who had not been the primary writer of the relevant section, gave an answer that was technically sound but differed from the approach described in the written proposal in one key procedure. The evaluator asked a follow-up clarifying question. The PM acknowledged the discrepancy and said, "I\'d want to review the proposal language before committing to a specific procedure." The evaluation board noted in their source selection report that the PM\'s uncertainty about the written technical approach "raised concerns about whether the proposed key personnel were fully engaged in developing the solution." The award went to the competitor with a slightly lower technical score and a PM who had clearly written every word of their proposal. The lesson: your proposed program manager must be the primary author of the relevant technical sections, not a name on a resume attached to someone else\'s solution.',
            },
            {
              type: 'table',
              headers: ['Oral Presentation Phase', 'Duration (Typical)', 'Government Objective', 'Preparation Focus'],
              rows: [
                ['Setup/Administrative', '10–15 min', 'Confirm participant identity, establish ground rules', 'Know the rules in advance; no surprises'],
                ['Offeror presentation', '30–60 min', 'Evaluate proposal understanding and key personnel communication', 'Discriminators in opening 5 minutes; PM carries 60%+ of time'],
                ['Government Q&A', '20–45 min', 'Probe gaps identified in written evaluation', 'Mock Q&A with red team asking the hardest questions; no hedging'],
                ['Clarifications (if any)', '10–20 min', 'Address specific factual or technical uncertainties', 'Align responses with written proposal; note all commitments made'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'Run at least two full mock oral presentations with a skeptical internal red team before the real thing. The first mock should use the questions you expect. The second should use the questions you are afraid of. Record both and watch them — you will identify body language, hedging language, and knowledge gaps that written rehearsal never reveals. The team that wins the oral is the one that prepared for the uncomfortable questions, not just the comfortable ones.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bd-m4-q1',
          type: 'multiple-choice',
          question: 'An Evaluation Notice classified as a "deficiency" represents:',
          options: [
            'A minor formatting issue that should be corrected before final submission',
            'A material failure to meet a requirement that, if not corrected, would make the proposal ineligible for award',
            'A strength in the proposal that the evaluator wants to formally acknowledge',
            'A request for a price reduction in the Best and Final Offer',
          ],
          correctIndex: 1,
          explanation: 'A deficiency is a material failure to meet a government requirement that would make contract award inappropriate if left uncorrected. Unlike a significant weakness (which increases risk) or an uncertainty (which requires clarification), a deficiency must be corrected to remain in the competitive range.',
        },
        {
          id: 'bd-m4-q2',
          type: 'true-false',
          question: 'Every competitive defense procurement results in a BAFO request before award is made.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Under FAR 15.307, the contracting officer may award without discussions (and therefore without a BAFO) if the initial proposals are sufficiently competitive. This means your initial proposal must always be strong enough to win without revision — assuming you will receive a BAFO is a dangerous planning assumption.',
        },
        {
          id: 'bd-m4-q3',
          type: 'multiple-choice',
          question: 'During the competitive range determination phase, the Source Selection Authority:',
          options: [
            'Reveals each offeror\'s score to all competing firms to encourage price competition',
            'Selects the single most technically qualified offeror for award',
            'Identifies the subset of offerors most likely to result in a successful award and may exclude others from further evaluation',
            'Requests Best and Final Offers from all offerors who submitted a responsive proposal',
          ],
          correctIndex: 2,
          explanation: 'The competitive range determination identifies the offerors whose proposals are most likely to result in award — based on initial evaluation of all factors. Offerors excluded from the competitive range receive notification and are not invited to participate in discussions or submit a BAFO.',
        },
        {
          id: 'bd-m4-q4',
          type: 'multiple-choice',
          question: 'According to the module, who should carry 60–70% of speaking time in an oral presentation and why?',
          options: [
            'The BD Director, because they have the strongest understanding of the customer relationship',
            'The proposed Program Manager, because the government wants to evaluate the person who will actually run the contract',
            'The Corporate Executive, because their seniority signals commitment to contract performance',
            'The Technical SME, because technical evaluators want detailed subject matter expertise demonstrated',
          ],
          correctIndex: 1,
          explanation: 'The proposed program manager should carry 60–70% of speaking time because the government uses oral presentations to evaluate the actual person they will be working with. The BD team wrote the proposal; the government wants to see and assess the program manager, not the BD team\'s communication skills.',
        },
        {
          id: 'bd-m4-q5',
          type: 'multiple-choice',
          question: 'The "War Story" about the $35M DISA contract loss illustrates which failure?',
          options: [
            'The proposed PM gave technically inaccurate information during the oral presentation',
            'The company did not conduct any mock oral presentation practice before the real event',
            'The proposed PM was not fully engaged in developing the written solution and could not defend it under Q&A',
            'The BD team sent too many personnel to the oral presentation, creating confusion',
          ],
          correctIndex: 2,
          explanation: 'The PM gave a technically sound but inconsistent answer that differed from the written proposal, then acknowledged uncertainty about the proposal language. This revealed to evaluators that the PM had not been the primary developer of the solution — raising doubts about whether the person managing the contract actually knew the approach. The lesson is that proposed key personnel must be primary authors of their relevant sections.',
        },
        {
          id: 'bd-m4-q6',
          type: 'true-false',
          question: 'In a BAFO, an offeror may introduce new technical capabilities or key personnel not mentioned in the original proposal without restriction.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. BAFO changes should be limited to responses to specific ENs, corrections of factual errors, and pricing adjustments aligned with technical scope changes. Introducing new capabilities or personnel not previously discussed raises fairness concerns and may prompt the contracting officer to question why the capability was absent from the original proposal.',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 5 — Simulation: Proposal Compliance Review
    // ─────────────────────────────────────────────
    {
      id: 'bd-simulation-compliance',
      number: 5,
      title: 'Simulation: Proposal Compliance Review',
      description:
        'Apply everything from this course in a hands-on proposal compliance simulation. Review a realistic RFP excerpt, identify compliance gaps in a draft proposal, score the submission, and recommend corrections before the deadline.',
      estimatedMinutes: 72,
      learningObjectives: [
        'Apply compliance matrix methodology to a realistic RFP scenario',
        'Identify deficiencies, significant weaknesses, and minor gaps in a draft proposal volume',
        'Prioritize corrections based on evaluation factor weights from Section M',
        'Assess past performance documentation quality against government evaluation standards',
        'Recommend BAFO strategy adjustments based on EN scenario inputs',
      ],
      lessons: [
        {
          id: 'bd-simulation-intro',
          title: 'Simulation Introduction: The Meridian Systems Proposal Review',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'In this simulation, you are the proposal manager for Meridian Systems, a 250-person defense IT and cybersecurity firm competing for a 5-year, $42M IDIQ contract with the Defense Information Systems Agency (DISA) for network monitoring and incident response services. The solicitation was released 30 days ago. Your team has completed a first draft. With 72 hours to submission, your job is to conduct a final compliance review, identify critical gaps, and prepare the team for a likely EN response cycle and oral presentation.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Scenario Background',
              text: 'Meridian Systems has two directly relevant contracts: a $6M DHS network monitoring contract (CPAR rating: Very Good) that ended 14 months ago, and a current $3.2M DoD COOP support contract (CPAR not yet issued — contract ends in 6 months). The proposed program manager has 12 years of DISA program management experience, but joined Meridian 8 months ago and is not cited in any of the company\'s past performance write-ups. The incumbent is a large business that was recently acquired by a prime — creating a possible SB set-aside eligibility gap that Meridian\'s BD team believes will be exploited during the evaluation.',
            },
            {
              type: 'heading',
              text: 'Your Pre-Simulation Checklist',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Review the Section L and Section M excerpt provided in the simulation to understand proposal requirements and evaluation weights',
                'Load the draft proposal compliance matrix and identify gaps flagged as Red or Yellow',
                'Evaluate the past performance documentation strategy given the CPAR timing gap on the current DoD contract',
                'Assess the proposed PM\'s presentation in the management volume and determine whether his DISA experience is adequately documented',
                'Prepare a 72-hour correction priority list based on evaluation factor weights',
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Clock Is Running',
              text: 'This simulation is time-constrained. You will make decisions under the same pressure conditions that real proposal managers face in the final 72 hours before submission. Not every gap can be fixed perfectly. Your task is to prioritize: what must be fixed to remain compliant, what should be fixed to be competitive, and what must wait until an EN response cycle.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'IDIQ', definition: 'Indefinite Delivery, Indefinite Quantity — a contract vehicle that establishes terms and a ceiling value without guaranteeing specific order quantities; task orders are placed against it during the ordering period.' },
                { term: 'COOP', definition: 'Continuity of Operations — a planning and program category focused on ensuring government functions continue during disruptions; COOP support contracts involve planning, testing, and exercising emergency response capabilities.' },
                { term: 'Incumbent advantage', definition: 'The structural competitive advantage held by an offeror currently performing on the contract being recompeted, including direct past performance relevance, customer relationship depth, and operational familiarity with the specific work scope.' },
              ],
            },
            {
              type: 'simulation',
              simulationId: 'defense-proposal-compliance',
              title: 'Meridian Systems Proposal Compliance Review',
              description: 'You are Meridian Systems\' proposal manager with 72 hours to submission. Review the RFP excerpt and draft compliance matrix, identify deficiencies and significant weaknesses in the technical and past performance volumes, prioritize corrections based on Section M evaluation weights, and prepare an EN response strategy. The simulation includes branching decision points based on your compliance choices, an EN response scenario, and an oral presentation Q&A sequence testing your ability to reconcile proposal content with real-time questions.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: 'The Meridian scenario reflects the conditions most defense firms face on a typical competitive pursuit — imperfect past performance documentation, a key hire whose experience is not yet captured in the proposal, and a compressed timeline for final corrections. The simulation is designed to develop the judgment required to triage proposal gaps effectively, not to test whether you can write a perfect proposal with unlimited time.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bd-m5-q1',
          type: 'multiple-choice',
          question: 'In the Meridian Systems scenario, the current DoD COOP support contract does not yet have a CPAR issued. What is the best strategy for documenting this contract\'s past performance in the proposal?',
          options: [
            'Exclude the contract from past performance because it lacks a CPAR rating',
            'Include the contract with a PPQ from the COR and PM, noting in the narrative that CPAR issuance is pending and the contract is currently active with strong performance',
            'Reference the contract in the technical volume only, not the past performance volume, to avoid drawing attention to the missing CPAR',
            'Request that the contracting officer issue an interim CPAR before the proposal submission deadline',
          ],
          correctIndex: 1,
          explanation: 'Active contracts without issued CPARs are still valid past performance references when documented with a PPQ from the COR and PM. The proposal narrative should note that the contract is active and performing, with a PPQ attached. Excluding a relevant active contract because the CPAR has not yet been issued wastes a potentially strong reference and weakens the past performance volume.',
        },
        {
          id: 'bd-m5-q2',
          type: 'multiple-choice',
          question: 'The Meridian proposed program manager has 12 years of DISA experience but is not cited in any of the company\'s past performance write-ups because he joined 8 months ago. What is the correct way to leverage his experience?',
          options: [
            'Do not reference his prior experience since it was with a previous employer and cannot be claimed as company past performance',
            'Document his individual DISA program management experience in the key personnel section of the management volume, with specific DISA program references and contact information, separate from corporate past performance',
            'Retroactively add his name to past performance narratives for contracts he did not work on',
            'Delay his proposal as proposed PM until he has been with the company for at least 12 months',
          ],
          correctIndex: 1,
          explanation: 'An individual\'s prior relevant experience — especially with the specific agency — is properly documented in the key personnel section of the management volume. Key personnel experience is evaluated separately from corporate past performance. His DISA background is potentially a strong discriminator if specifically documented with program names, roles, and outcomes.',
        },
        {
          id: 'bd-m5-q3',
          type: 'multiple-choice',
          question: 'In the simulation\'s EN response scenario, the government sends an EN stating that Meridian\'s proposed transition plan "lacks specific milestones with responsible parties assigned." The best EN response:',
          options: [
            'Provides a detailed revised transition timeline with specific milestones and named responsible parties, limited to addressing the identified weakness',
            'Provides the revised transition plan plus additional information about Meridian\'s overall program management approach not previously included',
            'Disputes the government\'s assessment and argues that the original transition plan was sufficient',
            'Requests a 10-day extension to allow Meridian\'s operations team to develop a more comprehensive transition plan',
          ],
          correctIndex: 0,
          explanation: 'EN responses should address exactly what was identified and nothing more. Providing a revised transition plan with milestones and responsible parties directly resolves the deficiency. Adding unrequested information about overall program management raises scope questions and risks introducing new issues. Disputing the evaluation is almost never productive. Extension requests are rarely granted and signal unpreparedness.',
        },
        {
          id: 'bd-m5-q4',
          type: 'multiple-choice',
          question: 'During the oral presentation Q&A, an evaluator asks the proposed PM: "Your transition plan shows a 45-day transition. The incumbent took 90 days on the last recompete. What specifically enables your team to do it in half the time?" The best response:',
          options: [
            '"We are confident in our team\'s ability to execute and will adjust the timeline if needed after award."',
            '"Our transition methodology is proprietary and I cannot discuss specifics in this forum."',
            '"The 45-day timeline is based on three specific factors: [names two specific technical or staffing factors from the proposal with metrics], which we demonstrated on [specific analogous contract reference]."',
            '"That\'s a good question. I\'d want to review our transition section before giving you a specific answer."',
          ],
          correctIndex: 2,
          explanation: 'A strong oral Q&A response provides specific, proposal-consistent evidence for every claim. Citing the specific factors that enable the 45-day timeline — tied to metrics and a specific analogous past performance reference — demonstrates that the PM knows the proposal content and can defend it. The other responses either evade, hedge, or signal unpreparedness, all of which undermine evaluator confidence.',
        },
        {
          id: 'bd-m5-q5',
          type: 'multiple-choice',
          question: 'In the 72-hour countdown scenario, the compliance matrix shows three gaps: (1) a missing data rights statement required by Section L, (2) a past performance write-up that exceeds the page limit by 2 pages, and (3) a technical section that does not explicitly address one of five Section L subfactors. Which should be fixed first?',
          options: [
            'The page limit violation, because page limit violations are the most common cause of proposal rejection',
            'The missing data rights statement, because omitting a required statement is a potential non-responsiveness issue',
            'The missing Section L subfactor, because technical factor gaps create scoring vulnerabilities',
            'All three simultaneously, assigning different writers to each',
          ],
          correctIndex: 1,
          explanation: 'The missing data rights statement is a compliance requirement — omitting it may render the proposal non-responsive regardless of technical quality. Page limit violations are serious but typically result in the government truncating the volume rather than disqualifying the proposal. Missing subfactor coverage is a scoring vulnerability that should be fixed next, but compliance gaps that risk non-responsiveness take priority.',
        },
        {
          id: 'bd-m5-q6',
          type: 'true-false',
          question: 'If Meridian\'s BAFO price is already at minimum margin, the correct strategic decision is always to cut price further to remain competitive.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. A BAFO price cut that wins the contract but produces a loss is not a BD success — it defers an operations crisis. Before cutting price in a BAFO, the firm must confirm the resulting contract will still be financially viable. If the minimum margin represents the true floor, the BAFO strategy should focus on strengthening the technical differentiation to justify the price premium rather than eroding margin to chase a low-cost competitor.',
        },
        {
          id: 'bd-m5-q7',
          type: 'multiple-choice',
          question: 'The incumbent in the Meridian scenario recently lost its small business size standard eligibility due to an acquisition. How should Meridian\'s proposal team handle this competitive intelligence?',
          options: [
            'Include a direct statement in the proposal asserting that the incumbent is no longer eligible for the set-aside',
            'Notify the contracting officer through an informal communication before proposal submission',
            'Build the proposal to position Meridian as the strongest small business alternative, and be prepared to raise eligibility concerns formally during discussions if the issue is not addressed by the government',
            'File a size protest with the SBA before the proposal submission deadline to disqualify the incumbent preemptively',
          ],
          correctIndex: 2,
          explanation: 'The most professionally appropriate approach is to build a strong proposal without making accusations in the proposal document itself. Size status concerns can be raised through formal channels — including a post-award size protest — if evidence supports it. Filing a pre-award protest disrupts the procurement and may damage the relationship with the contracting officer regardless of outcome. Building Meridian\'s own position strongly is the primary obligation.',
        },
        {
          id: 'bd-m5-q8',
          type: 'multiple-choice',
          question: 'At the end of the Meridian simulation, the team has corrected the compliance gaps, submitted a strong BAFO, and delivered a solid oral presentation. The contract is awarded to a competitor at a 6% lower price with a technically equivalent score. The most valuable next step is:',
          options: [
            'File a protest challenging the evaluation methodology',
            'Request a formal debriefing from the contracting officer and prepare specific questions about evaluation scores by factor, significant weaknesses cited, and competitive range standing',
            'Begin the recompete preparation immediately by contacting the winning contractor to discuss a teaming arrangement',
            'Withdraw from this agency\'s market and redirect BD resources to a different customer',
          ],
          correctIndex: 1,
          explanation: 'Requesting a formal debrief is the most valuable action after a loss. Debriefs are legally entitled under FAR 15.506 for competitive range exclusions and post-award. A well-structured debrief request — asking for evaluation scores by factor, specific weaknesses cited in each factor, and any evaluation record available — provides the intelligence needed to improve the next pursuit. The debrief is the tuition payment; failing to collect it wastes the loss.',
        },
      ],
    },
  ],
};
