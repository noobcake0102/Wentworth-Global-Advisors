import type { Course } from '../../types/course';

export const defenseExecAwarenessCourse: Course = {
  id: 'defense-exec-awareness',
  track: 'defense-contracting',
  title: 'Is Defense Right for Your Business?',
  subtitle: 'Track A · Level 1 · Executive Awareness',
  description:
    'A no-nonsense executive briefing on what defense contracting actually demands — the compliance infrastructure, capital requirements, cash flow realities, and organizational commitments that textbooks omit. Before you pursue your first RFP, understand what you are agreeing to.',
  status: 'available',
  estimatedHours: 4,
  color: '#4a7fa5',
  icon: '🛡️',
  modules: [
    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 1 — The Reality of Defense Contracting
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-a1-m1',
      number: 1,
      title: 'The Reality of Defense Contracting',
      description:
        'Strip away the mythology. Defense is a legitimate market with real money — and real costs that most companies discover only after they have already committed.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Distinguish the actual defense market from common executive misconceptions',
        'Identify the addressable segments for small and mid-size manufacturers',
        'Explain the operational differences between cost-plus and fixed-price contracts',
        'Recognize the full scope of the compliance, security, and capital commitment required',
      ],
      lessons: [
        // Lesson 1.1
        {
          id: 'defense-a1-m1-l1',
          title: 'What Defense Actually Is — And What It Is Not',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'Most business owners who approach defense contracting carry one of two mental models: either defense is a golden ticket where the government writes enormous checks for mediocre work, or it is an impenetrable fortress reserved for Lockheed Martin and Raytheon. Both are wrong, and both will get you into serious trouble.',
            },
            {
              type: 'heading',
              text: 'The Actual Market Structure',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The U.S. defense industrial base spent approximately $400 billion in FY2023 on contracts to private companies. Of that, roughly 65% flows through five large prime contractors — Lockheed Martin, Raytheon Technologies, Boeing, Northrop Grumman, and General Dynamics. The remaining 35% — still well over $100 billion — flows through thousands of second- and third-tier suppliers, many of them small and mid-size manufacturers.',
            },
            {
              type: 'paragraph',
              text: 'The money is real. The opportunity for a capable manufacturer in aerospace structures, defense electronics, precision machining, specialized coatings, or ground support equipment is genuine. But the path from "we can make that" to "we are receiving and performing on government contracts" involves a sequence of organizational changes that most companies significantly underestimate.',
            },
            {
              type: 'heading',
              text: 'Five Things That Are Not True About Defense',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'The government will overlook quality problems because they need the part. False. DCMA surveillance is continuous. A single Corrective Action Request can suspend your source approval. A pattern of quality escapes gets you removed from approved supplier lists — sometimes permanently.',
                'Cost-plus means you make money no matter what. False. Cost-plus means the government reimburses allowable, allocable, and reasonable costs plus a negotiated fee. "Allowable" is a defined legal concept, not a blank check. Unallowable costs billed to the government expose you to False Claims Act liability.',
                'Winning one contract means you are in. False. Each contract vehicle, each prime, each program office has its own qualification requirements. Your approval at Boeing St. Louis does not transfer to Boeing Huntsville.',
                'You need security clearances from day one. Partially false. Many defense subcontracts — especially commercial-adjacent hardware — do not require facility clearances. However, some programs require them, and obtaining a facility clearance (FCL) takes 12–24 months.',
                'Small businesses get preferential treatment. Partially true, and mostly irrelevant. Set-aside programs exist but competing primarily on small-business status rather than capability is a short-term strategy with a hard ceiling.',
              ],
            },
            {
              type: 'heading',
              text: 'A War Story: The $8M Contract That Nearly Killed a Company',
              level: 2,
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: Aerospace Structures, Mid-Atlantic Region',
              text: 'A 45-person precision machining shop landed a $8.2M firm-fixed-price subcontract for structural brackets on a military rotorcraft program. The owner had 22 years of commercial aerospace experience. He had never worked direct-to-government or as a DoD sub. Within 90 days: DCMA had assigned a resident QAR (Quality Assurance Representative) to his facility who flagged his existing AS9100 quality system as inadequate for the specific DFARS clauses in his subcontract. He needed a DCAA-compliant accounting system — his QuickBooks setup did not segregate direct and indirect costs by contract. His prime demanded certified cost and pricing data under TINA (Truth in Negotiations Act) for a follow-on order, a process his team had never done. He survived. It cost him $340,000 in compliance infrastructure, delayed his first delivery by four months, and his CFO left during the ordeal. He says today: "I would do it again, but I would have spent six months preparing before I bid."',
            },
            {
              type: 'key-terms',
              terms: [
                {
                  term: 'DFARS',
                  definition: 'Defense Federal Acquisition Regulation Supplement — the DoD-specific supplement to the Federal Acquisition Regulation (FAR). DFARS clauses are incorporated by reference into contracts and flow down to subcontractors. They govern everything from cybersecurity requirements (DFARS 252.204-7012) to cost accounting (DFARS 252.215-7002).',
                },
                {
                  term: 'DCMA',
                  definition: 'Defense Contract Management Agency — the DoD component that administers contracts post-award. DCMA conducts quality surveillance, reviews contractor systems, and has authority to issue corrective action requests and recommend contract termination.',
                },
                {
                  term: 'DCAA',
                  definition: 'Defense Contract Audit Agency — audits contractor accounting systems, forward pricing, incurred costs, and internal controls. A DCAA finding of an "inadequate" accounting system can prevent the government from awarding or paying on cost-reimbursement contracts.',
                },
                {
                  term: 'Prime Contractor',
                  definition: 'A company that holds a direct contract with the U.S. government. Primes typically manage large programs and subcontract significant portions of work. Their subcontracts flow down FAR/DFARS obligations to you.',
                },
                {
                  term: 'Firm-Fixed-Price (FFP)',
                  definition: 'A contract type where the price is set at award and does not change regardless of your actual costs. You absorb all cost growth. Typical for mature, well-defined requirements.',
                },
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: '1. Do not price a defense opportunity against your commercial cost structure — your compliance overhead will be materially higher, and failing to account for it means you are subsidizing the government. 2. Your existing quality system (ISO 9001, even AS9100) may be insufficient for specific DFARS clauses — get a gap assessment before you bid. 3. The first 90 days of your first defense contract will be the most organizationally stressful period your company has experienced since its founding — plan for it, or you will be managed by it.',
            },
          ],
        },
        // Lesson 1.2
        {
          id: 'defense-a1-m1-l2',
          title: 'Market Size, Segments, and Where You Actually Fit',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'Knowing that "defense is a big market" is not actionable. The question for your business is whether the specific segments where you have genuine capability have realistic entry points for a company your size, with your current certifications, operating in your geography.',
            },
            {
              type: 'heading',
              text: 'Addressable Segments for Small and Mid-Size Manufacturers',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Segment', 'Typical Annual Value', 'Entry Path', 'Key Qualifications'],
              rows: [
                ['Precision machined components (structural, flight-critical)', '$50K–$5M per award', 'Prime subcontract via approved supplier list', 'AS9100, NADCAP (if special processes), Mil-spec compliance'],
                ['Defense electronics / PCBAs', '$200K–$20M per award', 'Prime sub or direct IDIQ task order', 'IPC-A-610 Class 3, ITAR registration, cybersecurity (CMMC Level 2)'],
                ['Specialty coatings / surface treatments', '$100K–$3M per award', 'NADCAP certification, prime qualification', 'NADCAP AC7004/AC7108, Mil-spec process approval'],
                ['Ground support equipment (GSE)', '$500K–$15M per award', 'Direct-to-government or prime sub', 'ISO 9001 or AS9100, drawing/spec compliance, DCMA surveillance'],
                ['Satellite / space ground systems', '$2M–$100M per award', 'Prime sub or OTA agreement', 'Often requires facility clearance, cybersecurity, specialized certifications'],
                ['Maintenance, Repair & Overhaul (MRO)', '$1M–$50M per award', 'FAA/DER approval, government-approved TDP', 'FAA Part 145, often dual civil/military approval required'],
              ],
            },
            {
              type: 'paragraph',
              text: 'These ranges are directional. A $500K GSE contract for one vehicle type may come with options that take total value to $8M. An electronics IDIQ vehicle may have a $50M ceiling but task orders averaging $800K. The point is not the number — it is whether the segment maps to your genuine capability, and whether the qualification barrier is surmountable in a 12–24 month runway.',
            },
            {
              type: 'heading',
              text: 'The Geography Question',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Defense contracting is less geography-dependent than most people assume for the manufacturing work itself, but enormously geography-dependent for relationship development. Program offices cluster at certain installations — Wright-Patterson AFB drives significant aerospace electronics and aircraft systems work in the Ohio/Indiana corridor. Aberdeen Proving Ground anchors ground vehicle work. Redstone Arsenal is the hub for missile and aviation programs. Huntsville, Alabama has become the fastest-growing defense tech corridor in the country.',
            },
            {
              type: 'paragraph',
              text: 'You do not need to relocate. You do need a business development presence — or a teaming partner who has one — near the programs you intend to pursue. Winning defense work from a cold start, purely through SAM.gov solicitation responses, without established relationships, is possible but slow. Budget two to three years of relationship development before you see significant prime subcontract awards.',
            },
            {
              type: 'heading',
              text: 'The CMMC Reality',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The Cybersecurity Maturity Model Certification (CMMC) program — now in its 2.0 iteration — requires defense contractors handling Controlled Unclassified Information (CUI) to achieve third-party certification at Level 2 (110 controls from NIST SP 800-171) before they can bid on covered contracts. DoD began phasing CMMC requirements into solicitations starting in 2025. If you handle any technical data, drawings, specifications, or program information that the government marks as CUI, you are in scope. Budget $50,000–$250,000 for Level 2 readiness depending on your current IT posture, and 12–18 months for implementation and certification.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Regulatory Note',
              text: 'CMMC 2.0 implementation timelines and contract coverage requirements are subject to ongoing rulemaking. Always verify current requirements at dodcio.defense.gov/CMMC and confirm with your contracting officer or prime contractor what specific solicitations require.',
            },
            {
              type: 'key-terms',
              terms: [
                {
                  term: 'CMMC',
                  definition: 'Cybersecurity Maturity Model Certification — DoD\'s framework for certifying that contractors protect Controlled Unclassified Information (CUI) on their networks. Level 1 (15 controls) is self-assessed. Level 2 (110 controls, NIST SP 800-171) requires third-party assessment by a C3PAO. Level 3 (government-led assessment) applies to the most sensitive programs.',
                },
                {
                  term: 'CUI',
                  definition: 'Controlled Unclassified Information — government-designated sensitive information that is not classified but must be protected under NIST SP 800-171 and handled according to 32 CFR Part 2002. Technical drawings, specifications, and program data are commonly marked CUI.',
                },
                {
                  term: 'SAM.gov',
                  definition: 'System for Award Management — the federal government\'s official registration and procurement portal. All entities doing business with the federal government must be registered in SAM.gov. Contract solicitations (RFPs, RFQs) are posted here.',
                },
                {
                  term: 'NADCAP',
                  definition: 'National Aerospace and Defense Contractors Accreditation Program — an industry-managed accreditation program for special processes (heat treating, welding, coatings, NDT, etc.). Many prime contractors require NADCAP accreditation for flight-critical processes.',
                },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Map your actual capabilities to the specific segment table above — "we do precision machining" is not specific enough; "we do 5-axis titanium structural components to AMS 4928 with AS9100 Rev D" is a qualification statement. 2. CMMC is not optional if you intend to pursue programs involving technical data — start your gap assessment now, not after you win a contract. 3. Pick one primary segment and one primary installation to build relationships around — trying to be everywhere in year one means you are nowhere.',
            },
          ],
        },
        // Lesson 1.3
        {
          id: 'defense-a1-m1-l3',
          title: 'Margin Realities: Cost-Plus vs. Fixed-Price — What They Actually Mean Operationally',
          estimatedMinutes: 19,
          content: [
            {
              type: 'paragraph',
              text: 'Nothing in defense contracting is more misunderstood at the executive level than contract type. The name "cost-plus" makes it sound like a profit guarantee. The name "firm-fixed-price" sounds clean and simple. The operational reality of each is considerably more nuanced — and getting the wrong contract type for your capabilities can destroy margin or create accounting exposure you did not anticipate.',
            },
            {
              type: 'heading',
              text: 'The Contract Type Spectrum',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Contract Type', 'Who Bears Cost Risk', 'Typical Use Case', 'Margin Range', 'Accounting Requirements'],
              rows: [
                ['Firm-Fixed-Price (FFP)', 'Contractor absorbs all cost growth', 'Mature, defined products with stable costs', '8–15% (if you cost it right)', 'Minimal — no DCAA cost accounting required unless >$2M and cost or pricing data required'],
                ['Fixed-Price Incentive (FPI)', 'Shared — ceiling price limits government exposure', 'Production with some uncertainty', '5–12% target, incentive fee above', 'Moderate — cost tracking required'],
                ['Cost-Plus-Fixed-Fee (CPFF)', 'Government bears cost risk', 'R&D, development, early production', '6–12% fixed fee on estimated cost', 'Full DCAA-compliant accounting system required'],
                ['Cost-Plus-Incentive-Fee (CPIF)', 'Government bears cost risk with incentive pool', 'Major development programs', '5–15% depending on performance', 'Full DCAA-compliant accounting system required'],
                ['Time and Materials (T&M)', 'Hybrid — labor billed at fixed rates, materials at cost', 'Engineering services, maintenance', '10–20% on labor rates if burdened correctly', 'Labor category definitions, rate support required'],
              ],
            },
            {
              type: 'heading',
              text: 'What Cost-Plus Actually Means Operationally',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On a cost-reimbursement contract, you submit periodic invoices (typically monthly) for costs you have incurred — direct labor, direct materials, and a share of your indirect costs (overhead, G&A) — plus your fee. The government pays those costs. Sounds simple. Here is the catch.',
            },
            {
              type: 'paragraph',
              text: 'Not all costs are allowable. FAR Part 31 defines allowability. Entertainment costs are unallowable. Certain advertising costs are unallowable. Interest expense is unallowable. Fines and penalties are unallowable. Executive compensation above the benchmark established by DoD Office of Inspector General is unallowable. If you include unallowable costs in your indirect cost pools and they flow to government contracts, you have a problem. DCAA audits your incurred costs annually. When they find unallowable costs billed to the government, they issue findings. Significant findings become demand letters. Demand letters become repayments. Patterns of unallowable cost billings can trigger False Claims Act referrals.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Unallowable Overhead Problem',
              text: 'A 120-person defense electronics firm was performing well on a $22M CPFF development contract. Their indirect rates — burdened at 185% overhead on direct labor — looked reasonable. DCAA incurred cost audit in year two found $380,000 in costs that had been pooled into overhead and billed to the contract that were unallowable: contributions to a local political campaign (absolutely unallowable under FAR 31.205-22), the owner\'s country club dues (unallowable under FAR 31.205-14), and a portion of the company Christmas party that exceeded the threshold for employee morale costs. The company had to repay $380,000 plus interest. They also had to restate their forward pricing rates and renegotiate ongoing contracts based on the corrected rates. Total cost of the audit finding: approximately $520,000 in repayments, rate adjustments, and legal fees. The owner said: "I had no idea my accounting system was feeding those costs to the government. My CFO thought they were just overhead."',
            },
            {
              type: 'heading',
              text: 'What Firm-Fixed-Price Actually Means Operationally',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On an FFP contract, you bear all cost risk. If your materials cost 20% more than you quoted, you absorb it. If a key employee leaves mid-program and you have to hire at a premium, you absorb it. If your scrap rate is worse than estimated, you absorb it. The government pays the agreed price — period. This sounds obvious but has a critical implication: you must have solid historical cost data before you price an FFP contract. Companies that come from commercial aerospace — where they have years of actuals — generally price FFP competently. Companies entering defense from commercial non-aerospace markets often price on instinct and intuition, which is a recipe for a loss contract.',
            },
            {
              type: 'paragraph',
              text: 'For FFP contracts over the cost or pricing data threshold (currently $2 million, adjusted periodically), the prime or the government may require you to provide certified cost and pricing data under the Truth in Negotiations Act (TINA). This means your cost basis is disclosed, certified as current and complete, and subject to audit. If the government later finds your actual costs were significantly lower than what you represented, they can seek a price reduction through defective pricing claims. This is not a hypothetical — DCAA has an active defective pricing program.',
            },
            {
              type: 'table',
              headers: ['Your Situation', 'Contract Type to Prefer', 'Why'],
              rows: [
                ['New to defense, uncertain about full cost structure', 'Avoid FFP on complex work — negotiate T&M or CPFF for initial contracts', 'You do not have good actuals yet; cost surprises on FFP can be existential'],
                ['Strong historical cost data, mature product', 'FFP is acceptable — higher potential margin, less accounting overhead', 'You know your costs; the simplicity of FFP is an advantage'],
                ['Development / R&D work with inherent uncertainty', 'CPFF or CPIF — pass cost risk to government where it belongs', 'Development scope changes are normal; FFP on development creates adversarial dynamics'],
                ['Engineering services, technical support', 'T&M with well-structured labor categories', 'Predictable billing, defensible rates, manageable compliance'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: '1. Before you bid any cost-reimbursement contract, have a qualified defense accounting consultant review your indirect cost structure — what you think is overhead may include significant unallowable costs that will become repayment obligations. 2. Do not accept an FFP contract on a new, complex product without actual cost history — negotiate for cost-type or T&M for the first run, then convert to FFP once you have actuals. 3. The TINA threshold and FAR Part 31 allowability rules change — the numbers cited here are accurate as of this writing but verify current thresholds at acquisition.gov before pricing any proposal.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-a1-m1-q1',
          type: 'multiple-choice',
          question: 'Approximately what percentage of total DoD contract spending flows through second- and third-tier suppliers rather than the five largest prime contractors?',
          options: ['About 10%', 'About 35%', 'About 55%', 'About 75%'],
          correctIndex: 1,
          explanation: 'Roughly 35% of DoD contract spending — over $100 billion — flows outside the five largest primes to thousands of smaller suppliers. This represents the addressable market for capable small and mid-size manufacturers.',
        },
        {
          id: 'defense-a1-m1-q2',
          type: 'multiple-choice',
          question: 'Under FAR Part 31, which of the following costs is unallowable on a cost-reimbursement government contract?',
          options: ['Direct labor for engineers working on the contract', 'Materials purchased specifically for the contract', 'Interest expense on company debt', 'Depreciation on equipment used to perform the contract'],
          correctIndex: 2,
          explanation: 'Interest expense is explicitly unallowable under FAR 31.205-20. Direct labor, direct materials, and depreciation on assets used for contract performance are generally allowable when properly allocable and reasonable.',
        },
        {
          id: 'defense-a1-m1-q3',
          type: 'true-false',
          question: 'An AS9100-certified quality management system automatically satisfies all DCMA quality surveillance requirements for a DoD subcontract.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. AS9100 is a strong foundation but many defense contracts incorporate specific DFARS quality clauses, MIL-spec requirements, and contract data requirements lists (CDRLs) that go beyond AS9100. DCMA evaluates compliance with the specific contract\'s quality requirements, not just certification status.',
        },
        {
          id: 'defense-a1-m1-q4',
          type: 'multiple-choice',
          question: 'A company wins its first defense contract — a firm-fixed-price subcontract. Material costs rise 25% above what was quoted due to supply chain disruption. Who absorbs the cost increase?',
          options: ['The prime contractor reimburses the difference', 'The government adjusts the contract price through an Economic Price Adjustment clause (unless one is specifically included)', 'The subcontractor absorbs the full cost increase', 'The cost is shared 50/50 between the government and contractor'],
          correctIndex: 2,
          explanation: 'On a firm-fixed-price contract, the contractor bears all cost risk. Unless the contract specifically includes an Economic Price Adjustment (EPA) clause, cost increases are the contractor\'s responsibility. This is why accurately pricing FFP contracts with good historical cost data is essential.',
        },
        {
          id: 'defense-a1-m1-q5',
          type: 'multiple-choice',
          question: 'What does CMMC Level 2 certification require for a defense contractor handling CUI?',
          options: ['Self-assessment against 15 basic cyber hygiene practices', 'Third-party assessment by a C3PAO against 110 NIST SP 800-171 controls', 'Government-led assessment of classified programs only', 'Annual penetration testing and an ISO 27001 certification'],
          correctIndex: 1,
          explanation: 'CMMC Level 2 requires implementation of all 110 controls from NIST SP 800-171 and a third-party assessment conducted by a Certified Third-Party Assessment Organization (C3PAO). Self-assessment applies to Level 1 (15 practices). Government-led assessments are reserved for Level 3.',
        },
        {
          id: 'defense-a1-m1-q6',
          type: 'true-false',
          question: 'Winning a position on an approved supplier list with one Boeing division automatically qualifies a company to supply the same parts to a different Boeing division or program.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Approved Supplier List (ASL) qualifications are typically program-specific or division-specific. Boeing St. Louis does not automatically accept qualifications granted by Boeing Huntsville. Each program office, and often each prime, maintains its own qualification requirements.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 2 — The Defense Ecosystem
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-a1-m2',
      number: 2,
      title: 'The Defense Ecosystem',
      description:
        'Understand who the major players are and — critically — what authority each one has over your business once you are under contract.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Describe the roles of primes, subs, and direct-to-government contractors',
        'Explain the distinct functions of DCSA, DCMA, and DCAA and how each interacts with your company',
        'Summarize how the DoD acquisition process moves from requirement to contract award',
        'Identify where small and mid-size manufacturers realistically enter the supply chain',
      ],
      lessons: [
        // Lesson 2.1
        {
          id: 'defense-a1-m2-l1',
          title: 'Primes, Subs, and Direct-to-Government — Where You Sit in the Food Chain',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'Your position in the defense supply chain determines your compliance obligations, your cash flow profile, your customer relationship, and your pricing leverage. These are not subtle differences. A first-tier subcontractor to Northrop Grumman has a fundamentally different business relationship than a company that holds a direct contract with the Army Contracting Command. Know where you are — or where you intend to be.',
            },
            {
              type: 'heading',
              text: 'The Three Entry Points',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Position', 'Your Customer', 'Who Audits You', 'Contract Flow-Down', 'Typical Cash Flow'],
              rows: [
                ['Prime Contractor', 'U.S. Government directly', 'DCAA, DCMA directly', 'You originate FAR/DFARS compliance — full burden', '30–60 days after invoice; progress payments available'],
                ['First-Tier Subcontractor', 'Prime contractor', 'Prime\'s supply chain quality team; DCMA may surveil', 'FAR/DFARS clauses flow down from prime\'s contract', '45–90 days after invoice typical; no progress payments unless negotiated'],
                ['Second/Third-Tier Supplier', 'First-tier sub or system integrator', 'Customer quality team; rarely direct government contact', 'Selected clauses flow down; commercial terms may apply', '60–90 days common; leverage for payment terms is minimal'],
              ],
            },
            {
              type: 'paragraph',
              text: 'Most small and mid-size manufacturers enter as first- or second-tier subcontractors. This is not a criticism — it is a rational entry path. You get program revenue, experience with government quality requirements, and relationship development without the full prime contractor compliance burden. The downside: the prime is your customer, not the government, and prime contractors protect their margins. Your invoice is paid after the prime gets paid, and the prime negotiates your price hard because their profit depends on it.',
            },
            {
              type: 'heading',
              text: 'The Prime Contractor Dynamic',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Large prime contractors run supply chains the way large retailers run vendor programs — with systematic price pressure, quality requirements that shift risk downward, and payment terms designed to optimize their own cash position. If you want to understand what it is like to work for a prime, talk to companies who already do. Ask specifically: How long do they actually take to pay? Do they exercise options or rebid every year? Have they ever terminated a subcontract? What happens when there is a design change — do they fund your rework or is it your problem?',
            },
            {
              type: 'paragraph',
              text: 'The best prime relationships are with program offices that need you more than you need them — unique capability, long qualification cycle, sole-source position. The worst are commodity positions where you are competing on price every renewal. Your goal should be to build toward the former.',
            },
            {
              type: 'heading',
              text: 'A War Story: The Subcontract That Changed Everything',
              level: 2,
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: Defense Electronics, Pacific Northwest',
              text: 'A 60-person defense electronics manufacturer operated as a second-tier sub for eight years, making PCBAs for a ground vehicle communications system. Their prime\'s prime (the first-tier) was acquired in a merger. The new parent company\'s procurement team reviewed all sub-tier supply chain and decided to consolidate PCBA work to their own captive shop. Eight years of work, $3.2M in annual revenue — gone in 90 days. They had no direct relationship with the government, no visibility into the program\'s future, and no leverage. The lesson: at some point you need either a direct government relationship or a position as a first-tier sub with your own contract — not a position two levels deep where a corporate decision you have no visibility into can eliminate you overnight.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Enter as a first-tier sub where possible — the compliance burden is higher but so is your relationship security and visibility into program health. 2. When you are a sub, continuously work toward a direct government relationship — attending program office reviews, participating in industry days, building technical relationships with government program managers. 3. Never let a single prime represent more than 40% of your defense revenue — the acquisition and consolidation risk in the prime contractor tier is not hypothetical.',
            },
          ],
        },
        // Lesson 2.2
        {
          id: 'defense-a1-m2-l2',
          title: 'DCSA, DCMA, DCAA — Who They Are and What They Do to You',
          estimatedMinutes: 19,
          content: [
            {
              type: 'paragraph',
              text: 'Three government agencies will have direct authority over your operations once you are performing defense contracts. Understanding what each one does — and what they cannot do — is the difference between managing these relationships and being managed by them.',
            },
            {
              type: 'heading',
              text: 'DCSA: Defense Counterintelligence and Security Agency',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DCSA is responsible for industrial security. Their primary role relevant to your business is the Facility Clearance (FCL) process. If your program requires handling classified information — or if you want to pursue programs that require one — DCSA is the agency that investigates your facility, your key management personnel (KMPs), and your information security program. DCSA also administers the National Industrial Security Program (NISP) and conducts inspections of cleared contractor facilities under 32 CFR Part 117.',
            },
            {
              type: 'paragraph',
              text: 'If you do not need a facility clearance for your target market segment, you will have minimal DCSA interaction. Many excellent defense subcontractors — particularly in precision manufacturing, coatings, and non-sensitive electronics — operate without any facility clearance. Do not pursue a clearance speculatively. Do pursue one if your target program segment requires it, and budget 12–24 months and significant management time for the process.',
            },
            {
              type: 'heading',
              text: 'DCMA: Defense Contract Management Agency',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DCMA is your day-to-day government presence on active contracts. They administer contracts after award — the ACO (Administrative Contracting Officer) at DCMA handles contract modifications, invoice approval, and contractor system reviews. On larger or higher-risk contracts, DCMA may assign a resident QAR (Quality Assurance Representative) to your facility who will be physically present, conducting surveillance of your manufacturing and inspection processes.',
            },
            {
              type: 'paragraph',
              text: 'DCMA has authority to issue Corrective Action Requests (CARs), place material or operations on hold, and recommend contract termination for quality failures. They also conduct contractor purchasing system reviews (CPSRs) if your subcontracting volume exceeds certain thresholds, and property system reviews if you hold government-furnished property.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Understanding the CAR Process',
              text: 'A Corrective Action Request from DCMA is not a termination notice — it is a formal request for you to identify root cause and implement corrective action for a specific nonconformance or quality system deficiency. Most companies that maintain a functioning corrective action process handle CARs routinely. The ones that get into trouble are companies that treat DCMA surveillance as adversarial interference rather than contract oversight, and who fail to close CARs on time or with substantive root cause analysis.',
            },
            {
              type: 'heading',
              text: 'DCAA: Defense Contract Audit Agency',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DCAA audits your money — your accounting system, your forward pricing rates, and your incurred costs on cost-type contracts. They are independent of the contracting officer and DCMA. Their findings go to the contracting officer who then decides what action to take. DCAA cannot order you to do anything — but their findings can cause the contracting officer to withhold payments, reject your accounting system as inadequate, or demand repayment of questioned costs.',
            },
            {
              type: 'paragraph',
              text: 'The most consequential DCAA engagement for a new defense contractor is the Pre-Award Accounting System Survey (also called a SFAC — Suitability for Award of Cost-type Contracts review). If you want to perform on a cost-reimbursement contract, DCAA will assess whether your accounting system adequately: separates direct and indirect costs; identifies and excludes unallowable costs; accumulates costs by contract; and supports the preparation of required cost reports. If they determine your system is inadequate, you cannot receive award on cost-type contracts until it is remediated.',
            },
            {
              type: 'key-terms',
              terms: [
                {
                  term: 'ACO (Administrative Contracting Officer)',
                  definition: 'A DCMA contracting officer who administers the contract after award. The ACO handles contract modifications, consent to subcontract, invoice certification, and contractor system acceptance. Distinct from the PCO (Procuring Contracting Officer) who negotiates and awards the contract.',
                },
                {
                  term: 'QAR (Quality Assurance Representative)',
                  definition: 'A DCMA quality specialist assigned to a contractor facility to conduct quality surveillance on behalf of the government. May be resident (at your facility regularly) or itinerant (visits periodically). QARs review First Article Test results, inspect product, witness tests, and review quality system documentation.',
                },
                {
                  term: 'FCL (Facility Clearance)',
                  definition: 'A determination by DCSA that a contractor facility is eligible to access classified information at a specified level (Secret or Top Secret). Requires sponsorship by a government agency or prime contractor, investigation of key management personnel, and implementation of an approved security program under NISPOM (32 CFR Part 117).',
                },
                {
                  term: 'CAR (Corrective Action Request)',
                  definition: 'A formal DCMA document requiring a contractor to identify root cause and implement corrective action for a quality system deficiency or product nonconformance. Open CARs must be closed within the specified timeframe with documented root cause analysis and evidence of corrective action.',
                },
                {
                  term: 'Incurred Cost Audit',
                  definition: 'An annual DCAA audit of a contractor\'s actual costs claimed against cost-type contracts for a completed fiscal year. DCAA reviews whether costs were allowable, allocable, and reasonable under FAR Part 31. Companies with cost-type contracts must submit an Incurred Cost Submission (ICS) within six months of fiscal year end.',
                },
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: '1. DCAA and DCMA are not adversaries — they are oversight agencies doing their jobs. Companies that treat oversight as warfare invite more of it; companies that maintain clean systems and transparent communication have predictable, manageable interactions. 2. If you pursue cost-type contracts, assume a DCAA accounting system survey will happen within the first 12 months — prepare for it by retaining a defense accounting consultant before you bid, not after. 3. DCMA quality surveillance will expose gaps in your quality system that commercial customers never found — this is actually an opportunity to improve, if you approach it constructively.',
            },
          ],
        },
        // Lesson 2.3
        {
          id: 'defense-a1-m2-l3',
          title: 'How the DoD Acquisition Machine Works — And Where You Find Your Entry Point',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'The DoD acquisition process is governed by DoDI 5000.02 and its successor guidance. Understanding the broad phases helps you identify at which point your company should be engaging — because if you wait until an RFP is published to start building relationships, you are almost certainly too late.',
            },
            {
              type: 'heading',
              text: 'The Major Acquisition Phases',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Materiel Solution Analysis (MSA): A capability gap has been identified. Government and industry are exchanging information about potential solutions. Industry Days and Requests for Information (RFIs) happen here. This is when you want to be visible.',
                'Technology Maturation & Risk Reduction (TMRR): Government is selecting a technology approach. Competitive prototype contracts may be awarded. Small Business Innovative Research (SBIR) and Other Transaction Authority (OTA) agreements are common vehicles here.',
                'Engineering and Manufacturing Development (EMD): Design is being finalized. Prime contractors are selecting their supply chains. This is when prime approved supplier qualification must happen if you want to be on the team.',
                'Production and Deployment (P&D): The program is in production. Supply chain is largely locked. This is the easiest phase to enter as a sub — primes sometimes need to add suppliers — but leverage is lowest because the program is established.',
                'Operations and Support (O&S): The system is fielded. Sustainment, MRO, and spare parts contracts are active. Often the most accessible phase for new entrants — sustainment contracts are frequently competed separately from production.',
              ],
            },
            {
              type: 'paragraph',
              text: 'The practical implication: if you want to be on a major program as a first-tier sub, you need to be engaging with primes during the TMRR or early EMD phase — two to five years before production starts. If you are reading solicitations on SAM.gov and responding cold, you are typically competing for production or sustainment work where the supply chain is already established and your leverage is minimal.',
            },
            {
              type: 'heading',
              text: 'Contract Vehicles You Will Encounter',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Vehicle Type', 'How It Works', 'Best for Small/Mid Manufacturer?'],
              rows: [
                ['Single-Award Contract', 'One award to one company after full competition', 'Yes — direct, straightforward, highest value if you win'],
                ['IDIQ (Indefinite Delivery/Indefinite Quantity)', 'Ceiling price contract; orders placed against it via task/delivery orders', 'Yes — once on a vehicle, orders can come without re-competing'],
                ['GWAC (Government-Wide Acquisition Contract)', 'IDIQ usable by multiple agencies — typically IT-focused', 'Rarely applicable to manufacturers'],
                ['OTA (Other Transaction Authority)', 'Streamlined acquisition outside FAR — used for prototype/R&D', 'Growing opportunity — less compliance burden than FAR contracts'],
                ['SBIR/STTR', 'R&D grants for small businesses with novel technology', 'Yes if you have technology to develop — path to follow-on production contracts'],
                ['BPA (Blanket Purchase Agreement)', 'Simplified ordering against an existing schedule', 'Moderate — useful for MRO and recurring parts'],
              ],
            },
            {
              type: 'heading',
              text: 'Industry Days and Pre-Solicitation Engagement',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Government program offices and prime contractors regularly host Industry Days — formal events where they brief upcoming requirements and hear from potential suppliers. These are not optional networking events for the serious defense entrant. They are your primary mechanism for getting in front of program managers and prime contractor supply chain teams before the RFP drops.',
            },
            {
              type: 'paragraph',
              text: 'Track solicitations and pre-solicitation notices on SAM.gov using keyword and NAICS code searches. Subscribe to prime contractor supplier portal updates at Lockheed Martin, Northrop Grumman, Raytheon, L3Harris, and General Dynamics for your product categories. Attend the Association of the United States Army (AUSA), Air Force Association (AFA), and National Defense Industrial Association (NDIA) conferences relevant to your segment. These are where program managers and prime supply chain directors are accessible.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Do not wait for an RFP — your business development timeline in defense should be 18–36 months ahead of when you want to receive your first award. Start attending industry days and establishing prime supplier portal registrations now. 2. OTAs are the fastest-growing entry point for companies with novel technology or manufacturing capabilities — they bypass much of the FAR compliance burden and move significantly faster than traditional acquisition. 3. Sustainment and O&S phase contracts are the easiest entry point but the least strategically valuable — the programs are winding down, not ramping up. Use them to build credibility, not to build a defense business.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-a1-m2-q1',
          type: 'multiple-choice',
          question: 'Which government agency is responsible for auditing a defense contractor\'s accounting system to determine whether it is suitable for cost-reimbursement contracts?',
          options: ['DCSA', 'DCMA', 'DCAA', 'The Contracting Officer\'s office'],
          correctIndex: 2,
          explanation: 'DCAA (Defense Contract Audit Agency) performs Pre-Award Accounting System Surveys to assess whether a contractor\'s accounting system is adequate for cost-type contracts. DCMA handles contract administration and quality surveillance. DCSA handles security clearances.',
        },
        {
          id: 'defense-a1-m2-q2',
          type: 'multiple-choice',
          question: 'A manufacturer wants to pursue a $3M subcontract on a classified satellite program. Which agency must be involved in approving the company\'s ability to access classified program information?',
          options: ['DCMA', 'DCAA', 'DCSA', 'The prime contractor alone'],
          correctIndex: 2,
          explanation: 'DCSA (Defense Counterintelligence and Security Agency) administers the National Industrial Security Program and processes Facility Clearance (FCL) requests. DCSA must investigate the facility and its Key Management Personnel before classified information can be accessed.',
        },
        {
          id: 'defense-a1-m2-q3',
          type: 'true-false',
          question: 'If a company responds to an RFP posted on SAM.gov without prior engagement with the program office, they have an equal chance of winning as a company that participated in the Industry Day and built relationships during the Technology Maturation phase.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Companies that engage during pre-solicitation phases understand requirements more deeply, have established relationships with evaluators, and may have helped shape requirements. Cold RFP responses from unknown vendors succeed occasionally but at a significantly lower rate, especially for complex development or production programs.',
        },
        {
          id: 'defense-a1-m2-q4',
          type: 'multiple-choice',
          question: 'A DCMA Quality Assurance Representative issues a Corrective Action Request (CAR) to a subcontractor. What is the subcontractor required to do?',
          options: [
            'Immediately halt all operations until the issue is resolved',
            'Identify root cause and implement corrective action within the specified timeframe, with documented evidence',
            'Appeal the CAR to the prime contractor, who will negotiate with DCMA',
            'Pay a fine and resume normal operations',
          ],
          correctIndex: 1,
          explanation: 'A CAR requires the contractor to perform root cause analysis and implement documented corrective action within the timeframe specified in the CAR. Operations are not automatically halted (though specific nonconforming product may be placed on hold). CARs are administrative — there are no fines. Unresolved CARs can escalate to contract performance issues.',
        },
        {
          id: 'defense-a1-m2-q5',
          type: 'multiple-choice',
          question: 'Which acquisition phase represents the best opportunity for a small manufacturer to build a first-tier subcontract position on a new major program?',
          options: [
            'Operations and Support (O&S) — the program is established and predictable',
            'Production and Deployment (P&D) — orders are being placed',
            'Technology Maturation & Risk Reduction (TMRR) or Engineering and Manufacturing Development (EMD) — supply chain is being selected',
            'Materiel Solution Analysis (MSA) — requirements are being defined',
          ],
          correctIndex: 2,
          explanation: 'TMRR and early EMD phases are when prime contractors are selecting their supply chains. Qualifying at this stage positions a company as a program-of-record supplier with maximum leverage and longevity. By P&D, supply chains are largely locked and new entrants have limited leverage.',
        },
        {
          id: 'defense-a1-m2-q6',
          type: 'true-false',
          question: 'Other Transaction Authority (OTA) agreements follow all FAR and DFARS requirements and carry the same compliance burden as traditional government contracts.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. OTAs are explicitly authorized outside the FAR/DFARS framework under 10 U.S.C. § 4022. They offer significantly reduced compliance burden — no FAR cost accounting requirements, no standard contract clauses unless specifically included, and faster award timelines. This makes them particularly attractive for companies entering defense for the first time.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 3 — The Strategic Decision Framework
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-a1-m3',
      number: 3,
      title: 'The Strategic Decision Framework',
      description:
        'A structured approach to evaluating your organization\'s actual readiness for defense contracting — before you spend a dollar on proposal development.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Assess your organization against the five readiness dimensions for defense contracting',
        'Quantify the hidden costs of defense market entry not captured in standard business planning',
        'Apply bid/no-bid thinking at the executive level to evaluate specific opportunities',
        'Identify the minimum viable compliance infrastructure required before pursuing defense awards',
      ],
      lessons: [
        // Lesson 3.1
        {
          id: 'defense-a1-m3-l1',
          title: 'Evaluating Readiness: The Five Dimensions',
          estimatedMinutes: 19,
          content: [
            {
              type: 'paragraph',
              text: 'Readiness for defense contracting is not a binary yes/no. It is a profile across five dimensions. Most companies that fail in defense do not fail because they lacked technical capability — they fail because they were underprepared in one of the supporting dimensions, usually financial systems, quality systems, or capital runway.',
            },
            {
              type: 'heading',
              text: 'Dimension 1: Financial Systems',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Your accounting system must be able to segregate costs by contract, separate direct and indirect costs, identify and exclude unallowable costs, and generate reports in a format that supports DCAA audit. QuickBooks, Sage 50, and most small-business accounting platforms do not do this out of the box. Companies typically need either a defense-specific accounting system (Deltek Costpoint, Unanet, or similar) or a heavily customized implementation of their existing platform, plus a cost accounting expert to configure and maintain it.',
            },
            {
              type: 'paragraph',
              text: 'The cost of implementing a compliant accounting system ranges from $30,000 (customized QuickBooks with a knowledgeable consultant) to $200,000+ (Deltek implementation with training). Annual maintenance and the cost of a qualified cost accountant add $60,000–$120,000 per year. These are not one-time costs — they are permanent additions to your overhead structure.',
            },
            {
              type: 'heading',
              text: 'Dimension 2: Quality Systems',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'For manufactured hardware, the baseline expectation from most primes and from DCMA is AS9100 Rev D certification. For electronics, IPC-A-610 Class 3 workmanship standards are typically required. For special processes — welding, heat treating, NDT, chemical processing — NADCAP accreditation is increasingly required on flight-critical programs.',
            },
            {
              type: 'paragraph',
              text: 'If you currently hold ISO 9001 but not AS9100, budget 6–12 months and $25,000–$60,000 for transition, gap remediation, and re-certification. If you are building a quality system from scratch, double those estimates. DCMA will conduct their own assessment regardless of your certification status — their focus is on how your quality system actually operates, not just what your certificate says.',
            },
            {
              type: 'heading',
              text: 'Dimension 3: Workforce',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Defense contracts require people who understand defense requirements — program management, contract administration, quality engineering, and configuration management are disciplines with significant learning curves. If none of your current leadership team has defense experience, you will spend your first 12–18 months of a live contract learning the hard way. Hire at least one experienced defense program manager or contracts administrator before you win your first award, not after. The $120,000–$180,000 annual cost of that hire is cheap insurance against a first-contract disaster.',
            },
            {
              type: 'heading',
              text: 'Dimension 4: Facilities',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Some programs require physical security measures — badge access logs, visitor control, separation of defense work areas from commercial work. If you pursue a facility clearance, DCSA will assess your facility against NISPOM requirements. If you handle ITAR-controlled technical data, your facility and network must implement physical and cybersecurity controls. Many companies discover during this assessment that their facility was designed for commercial production and requires significant physical modification — badge readers, separate server rooms, controlled-access storage, visitor logs — before defense work can begin.',
            },
            {
              type: 'heading',
              text: 'Dimension 5: Capital Runway',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Defense is a cash-intensive business with long cash conversion cycles. You may invest 6–12 months of capital in compliance infrastructure before your first award. First deliveries on a production contract may be 12–18 months after award. Even when invoicing begins, government payment cycles are 30–60 days. Subcontract payment from primes can be 45–90 days. You need 18–24 months of operating capital beyond your current needs to enter defense without financial stress driving poor decisions.',
            },
            {
              type: 'table',
              headers: ['Readiness Dimension', 'Minimum Threshold', 'Typical Investment to Reach Threshold', 'Timeline'],
              rows: [
                ['Financial Systems', 'DCAA-auditable cost accounting system', '$30K–$200K implementation; $60K–$120K/yr ongoing', '3–9 months'],
                ['Quality Systems', 'AS9100 Rev D (manufacturing); IPC-A-610 Class 3 (electronics)', '$25K–$60K (from ISO 9001); $80K–$150K (from scratch)', '6–18 months'],
                ['Workforce', 'At least one defense-experienced PM or contracts admin', '$120K–$180K/yr salary; or $150–$250/hr consultant', 'Hire before first bid'],
                ['Facilities', 'Basic physical security; ITAR-compliant network if handling CUI', '$20K–$100K depending on scope', '3–12 months'],
                ['Capital Runway', '18–24 months operating capital beyond current operations', 'Existing capital or credit facility — must be planned pre-entry', 'Establish before committing'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: '1. Run a readiness assessment against all five dimensions before you commit to pursuing defense — not during your first contract performance. A spreadsheet scoring your current state versus minimum threshold in each dimension will tell you whether you have an 18-month runway to entry or a 36-month one. 2. The workforce dimension is the most commonly underestimated — technical capability without defense-experienced program management creates avoidable crises in the first year of performance. 3. Capital runway must include the compliance investment, not just the working capital for production — many companies run out of money building compliance infrastructure before they ever see revenue.',
            },
          ],
        },
        // Lesson 3.2
        {
          id: 'defense-a1-m3-l2',
          title: 'Hidden Costs Nobody Tells You About',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'There is a category of defense market entry costs that does not appear in most business plans, is not discussed in most defense contracting seminars, and is not visible until you are already in the hole. These are not small items. They are, collectively, what separates companies that enter defense profitably from companies that conclude after two years that "defense was not worth it."',
            },
            {
              type: 'heading',
              text: 'Proposal Costs: The Investment Before Revenue',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A competitive response to a government RFP or a prime contractor solicitation for complex manufactured hardware is not a quote. It is a managed document project. A credible proposal for a $3M–$10M defense subcontract involves: a technical volume (how you will perform the work), a management volume (your team, your facilities, your quality plan), a past performance volume (references and documentation of similar work), and a cost/price volume (fully burdened cost buildup, compliance with cost or pricing data requirements if applicable).',
            },
            {
              type: 'paragraph',
              text: 'Across these volumes, a competitive proposal for a mid-size contract represents 200–500 hours of your team\'s time plus potential consultant support. At fully burdened labor rates, that is $50,000–$150,000 per proposal. Win rates for new entrants without established relationships are typically 15–25%. To build a $5M defense revenue stream, you may spend $300,000–$600,000 in proposal costs over 24–36 months. This is marketing spend, not recoverable — it comes from your operating capital.',
            },
            {
              type: 'heading',
              text: 'First Article Test (FAT): The Gate Nobody Budgets For',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Many defense hardware contracts require First Article Testing — formal testing and inspection of the first unit or units produced, conducted in accordance with AS9102 or a contract-specific First Article Test Plan. FAT is conducted at your facility, witnessed by DCMA or the prime\'s QAR, and must be fully documented. The first-article unit is typically produced at your expense (it may be partially or fully delivered to the government, but FAT itself is a cost element you must budget).',
            },
            {
              type: 'paragraph',
              text: 'For a complex precision machined assembly, a FAT process can cost $80,000–$200,000 in direct labor, inspection, test equipment, and documentation. Companies that do not budget FAT into their proposal pricing discover it after award — when it is too late to recover the cost. On a fixed-price contract, FAT is your money.',
            },
            {
              type: 'heading',
              text: 'Cash Flow Timing: The Gap That Sinks Companies',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'From contract award to first cash receipt on a production subcontract typically runs 6–15 months. The sequence: award → material procurement → manufacturing → quality inspection → first article testing → delivery → invoice submission → prime review → payment. At each step, your capital is deployed and not yet returned. On a $4M contract, you may have $1.5M–$2.5M of working capital deployed simultaneously at peak production before your first invoice is paid.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Cash Flow Trap',
              text: 'A satellite ground system hardware manufacturer won a $6.2M FFP subcontract for ruggedized enclosures — their largest single award ever. They financed material procurement through their line of credit, expecting to invoice within 8 months of award. Tooling delays (the prime\'s drawing release was late), a first article failure requiring redesign, and a prime payment cycle that ran 75 days average stretched their cash flow gap to 14 months. Their line of credit was exhausted at month 11. They had to take a short-term loan at 14% interest to make payroll and finish the contract. They delivered on time. Their net margin on the contract was 2.1% instead of the 11% they had priced. "We won," the president said. "It just didn\'t look like winning."',
            },
            {
              type: 'heading',
              text: 'The Compliance Maintenance Cost',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Defense compliance is not a one-time build — it is an ongoing operating cost. AS9100 surveillance audits are annual. CMMC certification requires triennial re-assessment (with annual affirmations). DCAA incurred cost submissions are annual. ITAR compliance program maintenance — export licenses, training, technology control plans — requires ongoing management. Facility clearance reinvestigations are periodic. Budget 2–4% of your defense revenue as a baseline for ongoing compliance maintenance, above and beyond your initial build-out investment.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Build a defense-specific P&L pro forma that includes: proposal cost (as a % of anticipated awards), FAT costs, compliance build-out and maintenance, and a cash flow model that shows peak working capital deployment — if the business case does not hold at a 20% win rate and 12-month cash conversion cycle, it does not hold. 2. Negotiate progress payments into subcontracts wherever possible — most primes resist, but on contracts over $2M with long lead times, progress payments are defensible and protect your working capital. 3. The compliance maintenance cost is a permanent overhead item — as you add defense contracts, this overhead must be spread across your cost base and reflected in your indirect rates.',
            },
          ],
        },
        // Lesson 3.3
        {
          id: 'defense-a1-m3-l3',
          title: 'Bid/No-Bid Thinking at the Executive Level',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'In a mature defense company, bid/no-bid decisions are made by a structured process — not by enthusiasm for the opportunity or the size of the potential award. For a company new to defense, this discipline is even more critical, because you have limited proposal resources and high proposal costs. Pursuing the wrong opportunities is not neutral — it consumes capital and bandwidth that could have been directed toward opportunities you could actually win.',
            },
            {
              type: 'heading',
              text: 'The Six-Question Bid/No-Bid Framework',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Do we have the technical capability to perform this work, today, without major investment? If yes, proceed. If no, be honest — capabilities you are "planning to develop" are not current capabilities for bid evaluation.',
                'Do we have or can we obtain the required certifications before contract start? AS9100, NADCAP, CMMC, FCL, special process approvals — each takes time and money. If you cannot achieve the required certifications within the contract timeline, do not bid.',
                'Have we had any meaningful pre-solicitation engagement with this customer? If you are responding cold to an RFP and have never spoken to the program office or prime supply chain team, your probability of win (Pwin) is likely below 20%. Is the proposal investment justified at that Pwin?',
                'Can we finance this contract\'s working capital requirements without distressing our commercial business? Model the cash flow profile of this specific opportunity. If executing this contract would require more than 40% of your available credit line for more than 6 months, your commercial business is at risk if this contract underperforms.',
                'Does this contract support our long-term defense strategy, or is it an opportunistic one-off? A one-off contract that does not build toward a strategic position in a specific program or customer relationship may not be worth the organizational disruption.',
                'What is our realistic probability of winning, and does the expected value of the award justify the proposal cost? At a $100,000 proposal cost and a 20% Pwin on a $5M award generating $500,000 margin, your expected return on proposal investment is ($500K × 0.20) − $100K = $0. That is break-even before risk. Factor in execution risk on a new contract type and it is negative expected value.',
              ],
            },
            {
              type: 'heading',
              text: 'Pwin Calibration for New Defense Entrants',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Scenario', 'Realistic Pwin Range', 'Notes'],
              rows: [
                ['Incumbent supplier, same customer, follow-on award', '60–80%', 'Still competitive in most cases; do not take incumbency for granted'],
                ['Strong pre-solicitation engagement, 2+ years of relationship, sole capability', '40–60%', 'Best position for a new entrant; invest heavily in proposal quality'],
                ['Some pre-solicitation engagement, multiple qualified competitors', '20–35%', 'Viable if proposal investment is justified; proposal quality is decisive'],
                ['Cold response to posted RFP, no prior engagement', '5–15%', 'Rarely justifies full proposal investment; consider no-bid or minimal-cost response'],
                ['Small Business set-aside, first time competing for this customer', '15–30%', 'Depends heavily on technical differentiation and past performance quality'],
              ],
            },
            {
              type: 'paragraph',
              text: 'These are directional — actual Pwin depends on the specific opportunity, the competition, and your proposal execution. The point is to be realistic, not pessimistic. Companies that consistently overestimate Pwin spend their proposal budgets on losses and conclude that defense is unprofitable. Companies that accurately estimate Pwin focus their investments on the opportunities where the math works.',
            },
            {
              type: 'heading',
              text: 'The Teaming Decision',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'For many defense opportunities, teaming with an established defense contractor is the difference between a no-bid and a competitive proposal. Teaming means another company — typically one with prime or first-tier experience and existing customer relationships — agrees to include you on their team, bringing your specific capability in exchange for a subcontract if they win. You contribute scope, they contribute relationships and compliance infrastructure.',
            },
            {
              type: 'paragraph',
              text: 'Teaming agreements require careful attention: scope definition (exactly what you are performing and for what price), exclusivity (can you team with other companies on the same solicitation?), workshare protection (what happens if the prime wins but decides to in-source your scope after award?), and flow-down provisions (what compliance obligations are you accepting?). Do not execute a teaming agreement without legal review by counsel experienced in defense contracting.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: '1. Establish a formal bid/no-bid gate process before you begin proposal development on any opportunity — it should take less than two hours and involve at least your CEO, VP of Operations, CFO, and whoever owns business development. 2. Track your proposal costs as a discrete line item, by opportunity — after 12–18 months you will have actual data on your win rate and cost-per-award, which should drive portfolio decisions going forward. 3. Never sign a teaming agreement without legal review — the workshare protection clause alone is worth the attorney fee; companies that skip this step discover post-award that the prime is free to take their scope in-house.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-a1-m3-q1',
          type: 'multiple-choice',
          question: 'A company has ISO 9001 certification and is pursuing its first defense manufacturing subcontract. What is the most likely quality system gap they will face?',
          options: [
            'ISO 9001 is fully sufficient for all defense subcontracts',
            'They need Six Sigma Black Belt certification for their quality engineers',
            'Most primes and DCMA expect AS9100 Rev D, which has defense/aerospace-specific requirements beyond ISO 9001',
            'They need to replace ISO 9001 with a military-specific quality system like MIL-Q-9858',
          ],
          correctIndex: 2,
          explanation: 'AS9100 Rev D is the aerospace/defense standard that builds on ISO 9001 with additional requirements for risk management, configuration management, key characteristics, and first article inspection. Most prime contractors require AS9100 for hardware subcontractors. MIL-Q-9858 is obsolete.',
        },
        {
          id: 'defense-a1-m3-q2',
          type: 'multiple-choice',
          question: 'A company has a $3M credit line and is evaluating a $4M FFP defense subcontract. The cash flow model shows peak working capital deployment of $1.8M for approximately 9 months. What is the primary financial risk?',
          options: [
            'The contract is too small to justify the accounting compliance investment',
            'Peak deployment of $1.8M represents 60% of the credit line for 9 months, leaving minimal buffer for commercial business needs or cost overruns',
            'FFP contracts do not allow working capital financing through credit lines',
            'The company cannot bid unless it has $4M in cash reserves equal to the full contract value',
          ],
          correctIndex: 1,
          explanation: 'Deploying 60% of available credit capacity on a single defense contract for 9 months leaves minimal buffer for commercial operations, unexpected material costs, or delivery delays. If the contract experiences even moderate cost growth, the company may exhaust its credit line before invoicing begins — the scenario described in the cash flow trap war story.',
        },
        {
          id: 'defense-a1-m3-q3',
          type: 'true-false',
          question: 'First Article Testing (FAT) costs on a firm-fixed-price contract are typically reimbursed separately by the government as a direct cost above the contract price.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. On a firm-fixed-price contract, FAT costs are included in the contract price and are the contractor\'s responsibility to absorb. If you do not budget FAT into your FFP proposal pricing, the cost comes directly out of your margin. Some contracts include a separate CLIN for FAT, but this must be explicitly negotiated — it is not automatic.',
        },
        {
          id: 'defense-a1-m3-q4',
          type: 'multiple-choice',
          question: 'A company is responding to an RFP cold — no prior engagement with the program office, no existing prime relationship on this program. What is a realistic Probability of Win (Pwin) range for this scenario?',
          options: ['40–60%', '25–40%', '5–15%', '60–80%'],
          correctIndex: 2,
          explanation: 'Cold RFP responses without prior engagement typically yield Pwin in the 5–15% range. Source selection evaluators tend to favor teams with demonstrated understanding of requirements, which develops through pre-solicitation engagement. This low Pwin must be weighed against the proposal investment cost to determine whether bidding is rational.',
        },
        {
          id: 'defense-a1-m3-q5',
          type: 'multiple-choice',
          question: 'What is the typical annual cost range for ongoing defense compliance maintenance (AS9100 surveillance, CMMC affirmations, DCAA incurred cost submissions, ITAR program) as a percentage of defense revenue?',
          options: ['Less than 0.5%', '2–4%', '8–12%', '15–20%'],
          correctIndex: 1,
          explanation: 'Ongoing compliance maintenance typically runs 2–4% of defense revenue as a baseline, above initial build-out costs. This includes surveillance audit fees, accounting system maintenance, export compliance, CMMC annual affirmations, and the loaded cost of compliance-focused staff. This must be reflected in your indirect cost rates.',
        },
        {
          id: 'defense-a1-m3-q6',
          type: 'true-false',
          question: 'A teaming agreement that does not specifically address workshare protection allows the prime contractor to in-source the subcontractor\'s scope after winning the contract.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Without explicit workshare protection provisions in the teaming agreement, prime contractors are generally free to make their own subcontracting decisions after award. Workshare protection clauses — which specify that the prime will flow a defined scope and value to the teaming partner if the team wins — must be explicitly negotiated and documented before the proposal is submitted.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 4 — Decision Point: Go or No-Go
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'defense-a1-m4',
      number: 4,
      title: 'Decision Point: Go or No-Go',
      description:
        'Synthesize the course into a structured board-level decision. This module provides the decision framework, the board case template, and a hands-on simulation of the go/no-go process.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Apply the complete decision framework to evaluate a defense market entry opportunity',
        'Structure a board-level business case for or against defense market entry',
        'Navigate a simulated go/no-go decision tree with realistic organizational constraints',
        'Identify the specific next actions required to move from decision to execution',
      ],
      lessons: [
        // Lesson 4.1
        {
          id: 'defense-a1-m4-l1',
          title: 'The Decision Framework: Synthesizing What You Know',
          estimatedMinutes: 18,
          content: [
            {
              type: 'paragraph',
              text: 'You have now covered the market reality, the ecosystem, the readiness dimensions, and the hidden costs. This lesson pulls it into a single decision framework — the structure you use to make a defensible, data-driven Go or No-Go recommendation to your board or ownership group.',
            },
            {
              type: 'heading',
              text: 'The Four-Gate Decision Model',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Defense market entry decisions should pass through four gates sequentially. A No at any gate is a signal to pause and remediate before proceeding — not necessarily a permanent No, but a call to address the gap before committing resources.',
            },
            {
              type: 'ordered-list',
              items: [
                'Gate 1 — Strategic Fit: Does defense align with our core capability, our 5-year growth strategy, and our ownership\'s risk tolerance? This is a qualitative gate. If defense is a tactical revenue grab rather than a strategic commitment, the compliance investment will never generate adequate return.',
                'Gate 2 — Readiness Profile: Have we assessed ourselves honestly against the five dimensions (financial systems, quality systems, workforce, facilities, capital runway)? Do we have a funded plan to reach minimum threshold in each dimension before contract award?',
                'Gate 3 — Market Opportunity: Have we identified a specific, addressable segment where we have genuine differentiated capability and a realistic entry path? Have we validated that segment with at least preliminary engagement with program offices or prime contractor supply chain teams?',
                'Gate 4 — Financial Viability: Does the defense business case — including compliance investment, proposal costs, cash flow profile, and a realistic Pwin — generate adequate return relative to investing the same capital in our commercial business?',
              ],
            },
            {
              type: 'heading',
              text: 'Common Failure Patterns at Each Gate',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Gate', 'Common Failure Pattern', 'Consequence'],
              rows: [
                ['Gate 1: Strategic Fit', 'Owner pursues defense because "the government always pays" — not because it aligns with core capability', 'High compliance investment with mediocre differentiation; cannot command premium pricing'],
                ['Gate 2: Readiness', 'Company bids before compliance infrastructure is built, wins a contract, then scrambles to build compliance under live program pressure', 'First-year performance crisis; DCAA/DCMA findings; program damage before first delivery'],
                ['Gate 3: Market Opportunity', 'Company responds to every SAM.gov posting in their NAICS code without strategic targeting', 'Excessive proposal spend with low win rates; no accumulation of customer relationships'],
                ['Gate 4: Financial Viability', 'Business case is built on optimistic Pwin, ignores proposal costs, understates compliance investment', 'Actual economics of first 24 months are deeply negative; ownership loses confidence in defense strategy'],
              ],
            },
            {
              type: 'heading',
              text: 'The "18-Month Readiness Plan"',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'For most companies that pass Gates 1 and 3 but have work to do on Gates 2 and 4, the right answer is not "No" — it is "Not yet, with a specific plan." The 18-month readiness plan is the artifact that converts a Go decision into funded execution.',
            },
            {
              type: 'paragraph',
              text: 'The plan covers: (1) Month 1–3: Hire or retain a defense program manager; initiate DCAA accounting system gap assessment; begin SAM.gov registration and ITAR registration if applicable. (2) Month 3–9: Implement compliant accounting system; begin AS9100 transition if needed; identify 2–3 prime contractor supply chain teams for relationship development. (3) Month 9–15: Begin CMMC Level 2 gap assessment and remediation; attend first program-specific Industry Day; submit RFI responses to build visibility. (4) Month 15–18: Respond to first full RFP with proposal; target award in months 20–24.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'War Story: The Company That Got the Sequence Right',
              text: 'A 200-person defense electronics manufacturer in the Southeast spent 20 months building compliance infrastructure before bidding their first government prime contract. They hired a former DCMA program manager as their VP of Programs. They implemented Deltek Costpoint with a qualified defense cost accountant. They achieved AS9100 Rev D and initiated CMMC Level 2 readiness. They attended three NDIA working groups and two prime-sponsored Industry Days. By the time their first RFP dropped, they had a DCAA-accepted accounting system, a quality-system surveillance-ready facility, and a VP who had stood in front of DCMA review teams many times before. They won a $14M IDIQ on their first bid. "We had the discipline to invest before we asked the government to trust us," their president said. "That investment is why we won."',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. The four-gate framework is not bureaucracy — it is protection against committing $500K+ to a market entry that your organization is not ready to execute. Run each gate as a 2-hour workshop with your leadership team and document your honest assessments. 2. "Not yet" with a funded 18-month plan is a more valuable outcome from this process than "No" — most companies that should be in defense eventually can be, with the right sequencing. 3. The single most important hire for a company entering defense is someone who has operated inside defense program management, not just sold into it — find a former prime PM or a DCMA/DCAA professional who has crossed to industry.',
            },
          ],
        },
        // Lesson 4.2
        {
          id: 'defense-a1-m4-l2',
          title: 'Preparing the Board-Level Case',
          estimatedMinutes: 17,
          content: [
            {
              type: 'paragraph',
              text: 'At some point you need to present this decision to your board of directors, your private equity sponsor, your family ownership group, or your co-founders. The quality of that presentation determines whether you get the funding and organizational commitment the strategy requires — or whether you get a watered-down "explore it cautiously" that never generates real resources.',
            },
            {
              type: 'heading',
              text: 'What a Board-Level Defense Case Must Address',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Market opportunity: specific segment, addressable value, competitive positioning vs. current alternatives',
                'Readiness gap analysis: honest current-state vs. minimum threshold across all five dimensions',
                'Investment required: total compliance build-out cost, timeline, and funding source',
                'Revenue model: target contracts, expected timeline to first award, expected timeline to breakeven on compliance investment',
                'Risk analysis: what happens if first contract is delayed 12 months? What happens if compliance build-out costs 50% more than planned? What happens if DCAA rejects accounting system?',
                'Go/No-Go recommendation with specific decision criteria for a future checkpoint',
              ],
            },
            {
              type: 'heading',
              text: 'The Financial Model That Boards Actually Need',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A defense market entry financial model should include three scenarios — base, upside, and downside — each modeled over a 60-month horizon. The base case should not be optimistic; it should reflect realistic Pwin, realistic compliance costs, and realistic cash conversion cycles. Boards have seen too many business development opportunities modeled with best-case assumptions. A conservative base case with a compelling return profile is far more credible — and far more likely to get funded — than an optimistic model that experienced directors will immediately discount.',
            },
            {
              type: 'table',
              headers: ['Scenario', 'Pwin Assumption', 'Compliance Cost', 'First Award Timeline', 'Year 3 Revenue', 'Breakeven on Investment'],
              rows: [
                ['Upside', '35% per proposal', '$350K total build-out', 'Month 20', '$8M', 'Month 30'],
                ['Base', '22% per proposal', '$500K total build-out', 'Month 26', '$5M', 'Month 42'],
                ['Downside', '12% per proposal', '$700K total build-out', 'Month 34', '$2.5M', 'Month 54+'],
              ],
            },
            {
              type: 'paragraph',
              text: 'These are illustrative — your actual model will depend on your specific segment, investment requirements, and competitive position. The structure is what matters: model all three scenarios, show the board what "bad" looks like, and let the decision be informed by a realistic range of outcomes.',
            },
            {
              type: 'heading',
              text: 'The Governance Decision: Who Owns This?',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'One of the most common failures in defense market entry is unclear internal ownership. Defense programs require sustained executive attention — this is not a project that can be delegated to a mid-level business development person and checked in on quarterly. Assign a named executive (ideally the CEO or COO) as the defense program executive. That person owns: the relationships with program offices and primes, the bid/no-bid gate decisions, the monthly review of compliance infrastructure progress, and the board-level reporting on defense strategy.',
            },
            {
              type: 'paragraph',
              text: 'If no member of your current executive team has bandwidth to own defense as a priority, you are not ready to enter defense — you are ready to plan to enter defense when you have the leadership capacity to do so responsibly.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'What This Means for Your Business',
              text: '1. Model the downside scenario first — if the downside still leaves your commercial business healthy and your ownership can accept the investment loss, defense entry is financially defensible. If the downside scenario threatens your core business, you are overcommitting. 2. The governance decision is as important as the financial model — name the executive owner and their accountability structure before you present to the board, not as an afterthought. 3. Do not ask the board for "permission to explore" — that yields no resources and no accountability. Ask for a specific funding commitment and a specific decision checkpoint (e.g., "Fund $300K for 12 months of readiness work; we will present a first contract bid decision at month 12").',
            },
          ],
        },
        // Lesson 4.3 — Simulation
        {
          id: 'defense-a1-m4-l3',
          title: 'Simulation: The Go/No-Go Decision Tree',
          estimatedMinutes: 20,
          content: [
            {
              type: 'paragraph',
              text: 'You have worked through the market reality, the ecosystem, the readiness framework, the hidden costs, and the board case structure. Now it is time to apply it. This simulation places you in the role of CEO of a mid-size manufacturer evaluating a specific defense market entry opportunity. Your decisions will have compounding consequences — the same way they do in practice.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'How This Simulation Works',
              text: 'The simulation presents a series of decision points with realistic organizational constraints. At each step, you will see the consequences of your choice — both immediate and downstream. There is no single "correct" path; different strategic positions and risk tolerances lead to different defensible outcomes. The goal is to experience the decision dynamics, not to guess the "right answer."',
            },
            {
              type: 'simulation',
              simulationId: 'defense-go-nogo',
              title: 'Go/No-Go: Defense Market Entry Decision',
              description: 'You are the CEO of Meridian Precision — a 180-person manufacturer of aluminum and titanium structural components, currently 100% commercial aerospace. Revenue is $24M. You have AS9100 Rev D, a solid quality system, and a strong balance sheet with $2.8M available on your credit line. A Tier 1 prime contractor has reached out asking if you are interested in their upcoming rotorcraft structural bracket program — estimated $6M per year for 5 years. You have 60 days to respond. Work through the decision framework, evaluate your readiness, model the financial case, and make a Go/No-Go recommendation with a specific execution plan.',
            },
            {
              type: 'heading',
              text: 'After the Simulation: Key Lessons',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Regardless of which path you took in the simulation, several lessons tend to emerge consistently from this exercise. The first is that urgency is the enemy of good decisions in defense. The 60-day response window feels pressing, but the prime knows their supply chain alternatives — your timeline to respond with a credible capability statement is rarely as rigid as it appears. Do not let artificial urgency compress the due diligence you would otherwise conduct.',
            },
            {
              type: 'paragraph',
              text: 'The second lesson is that the readiness gap assessment always surfaces at least one surprise. In this simulation, as in practice, there is usually one dimension — most often financial systems or cybersecurity — where the company is further from minimum threshold than the leadership team initially believed. Finding that gap in a simulation costs nothing. Finding it after award costs significantly more.',
            },
            {
              type: 'paragraph',
              text: 'The third lesson is about teaming. Many paths through this simulation that look like a "No" because of individual readiness gaps become a viable "Go — with the right partner" when a teaming arrangement is introduced. An established defense manufacturer who can provide compliance infrastructure while you provide manufacturing capability is a legitimate entry strategy, particularly for the first 24 months.',
            },
            {
              type: 'key-terms',
              terms: [
                {
                  term: 'Capability Statement',
                  definition: 'A 1–2 page document summarizing your company\'s core competencies, key differentiators, certifications, past performance, and contact information. The standard marketing document for defense business development — used in responses to RFIs, Industry Day introductions, and prime supplier portal registrations.',
                },
                {
                  term: 'Past Performance',
                  definition: 'Documented history of similar work performed for prior customers, used by government evaluators and prime supply chain teams to assess your ability to perform on new contracts. Past performance volumes are a required element of most government proposals. Commercial aerospace past performance is accepted for defense evaluations — it is not disqualifying to be new to defense if your commercial record is strong and comparable.',
                },
                {
                  term: 'Progress Payments',
                  definition: 'Periodic payments to contractors during contract performance, before final delivery, based on costs incurred. Authorized under FAR 32.5 for contracts over a certain dollar threshold. Progress payments improve contractor cash flow but require the contractor to grant the government a lien on work in process. Not all primes offer progress payments to subs — it must be negotiated.',
                },
                {
                  term: 'ITAR (International Traffic in Arms Regulations)',
                  definition: 'U.S. export control regulations governing defense articles, services, and related technical data listed on the U.S. Munitions List (USML). Companies that manufacture, export, or broker ITAR-controlled items must register with the State Department\'s Directorate of Defense Trade Controls (DDTC). Violations carry severe civil and criminal penalties.',
                },
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Use the simulation scenario as a template for your own internal decision exercise — replace Meridian Precision\'s profile with your company\'s actual data and run the same decision tree with your leadership team. The exercise reveals alignment (or lack of it) in your team\'s risk assessment before real money is at stake. 2. The most valuable outcome of this course is a specific, actionable decision: Go with a funded 18-month readiness plan, No-Go with documented criteria for re-evaluation, or Not Yet with a defined set of milestones that change the answer. Anything less than a specific decision is an expensive equivocation. 3. Defense contracting rewards companies that commit fully and prepare rigorously — it punishes companies that dabble. If your board\'s conclusion is "let\'s try one small contract and see how it goes," this is not a defense strategy. It is an expensive education.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'defense-a1-m4-q1',
          type: 'multiple-choice',
          question: 'In the four-gate decision model, what does a "No" at Gate 2 (Readiness Profile) indicate?',
          options: [
            'The company should permanently abandon defense market entry',
            'The company should proceed but accept higher compliance risk during early contracts',
            'The company should pause and develop a funded plan to reach minimum threshold before proceeding to bid',
            'The company should hire a lobbyist to obtain set-aside contracts that have reduced compliance requirements',
          ],
          correctIndex: 2,
          explanation: 'A "No" at Gate 2 is a signal to pause and remediate — not a permanent No. The right response is to develop a funded readiness plan (the 18-month readiness plan) that addresses specific gaps before committing to proposal activity. Proceeding without adequate readiness typically results in post-award compliance crises that damage both performance and the company\'s reputation.',
        },
        {
          id: 'defense-a1-m4-q2',
          type: 'true-false',
          question: 'A conservative base case in a defense market entry financial model — with realistic Pwin, full compliance costs, and realistic cash conversion cycles — is more credible to experienced board members than an optimistic model.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Experienced directors and investors discount optimistic projections, especially for new market entries. A conservative base case that still generates acceptable returns is far more credible — and far more likely to secure funding and organizational commitment — than an optimistic model that experienced decision-makers will immediately question.',
        },
        {
          id: 'defense-a1-m4-q3',
          type: 'multiple-choice',
          question: 'Which of the following is the most critical single hire for a company entering defense contracting for the first time?',
          options: [
            'A lobbyist with Congressional relationships to influence program budgets',
            'A former prime contractor program manager or DCMA/DCAA professional who has operated inside defense programs',
            'A cybersecurity engineer to build CMMC compliance infrastructure',
            'A business development executive with an existing Rolodex of government contracting officers',
          ],
          correctIndex: 1,
          explanation: 'A former prime contractor PM or government oversight professional (DCMA, DCAA) brings operational knowledge of how defense programs actually work — compliance requirements, program documentation expectations, corrective action processes, and cost accounting. This experience prevents the first-contract crisis that technical companies without defense experience commonly experience. BD executives and cyber engineers are important but secondary.',
        },
        {
          id: 'defense-a1-m4-q4',
          type: 'multiple-choice',
          question: 'A company has strong commercial aerospace past performance but zero defense contract history. How does this affect their ability to compete for defense work?',
          options: [
            'Commercial aerospace past performance is completely irrelevant to defense evaluations — only prior defense contracts count',
            'It disqualifies them from all DoD prime contracts but not subcontracts',
            'Commercial aerospace past performance is acceptable for defense evaluations — it is not disqualifying to be new to defense with comparable commercial performance',
            'They must complete a SBIR Phase I award before any past performance can be submitted',
          ],
          correctIndex: 2,
          explanation: 'Commercial aerospace past performance — particularly for similar scope, complexity, and customer criticality — is evaluated by government source selection teams and prime contractor supply chain evaluators as relevant experience. It is not equivalent to defense past performance in every evaluator\'s eyes, but it is not disqualifying. Presentation quality and specificity of the past performance narrative matters significantly.',
        },
        {
          id: 'defense-a1-m4-q5',
          type: 'true-false',
          question: 'Presenting a board with a recommendation to "explore defense cautiously" without a specific funding commitment and decision checkpoint is an effective governance approach for defense market entry.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Vague "explore cautiously" directives generate no resources, no accountability, and no results. An effective board presentation asks for a specific funding commitment and defines a specific decision checkpoint — for example, "Fund $300K for 12 months of readiness work; we will present a first contract bid decision at month 12." Without specific commitments, defense entry becomes an ongoing deferral.',
        },
        {
          id: 'defense-a1-m4-q6',
          type: 'multiple-choice',
          question: 'A teaming arrangement for defense market entry typically means:',
          options: [
            'Two companies merge to form a new entity that bids together',
            'One company provides manufacturing capability while another provides compliance infrastructure and customer relationships, with a subcontract to the manufacturing company if the team wins',
            'The government assigns a mentor prime contractor to help a small business win set-aside awards',
            'Two companies share a single SAM.gov registration and split all contract revenue equally',
          ],
          correctIndex: 1,
          explanation: 'In a teaming arrangement, each company brings complementary strengths — typically one party brings program relationships and compliance infrastructure (acting as prime or first-tier sub), while the other brings specific technical or manufacturing capability. If the team wins, the capability provider receives a subcontract for their defined scope. This is a common and legitimate entry strategy for manufacturers new to defense.',
        },
        {
          id: 'defense-a1-m4-q7',
          type: 'multiple-choice',
          question: 'Under the Downside scenario in a typical defense market entry model (12% Pwin, $700K compliance costs, first award at month 34), which aspect of the business is most at risk?',
          options: [
            'The company\'s existing commercial customer relationships',
            'The management bandwidth and capital committed to defense that could have been invested in commercial growth',
            'The company\'s AS9100 certification, which lapses if not used on defense programs',
            'The company\'s SAM.gov registration, which expires after 12 months',
          ],
          correctIndex: 1,
          explanation: 'In the downside scenario, the primary risk is opportunity cost — management bandwidth and capital invested in defense compliance and proposal activity that could have been deployed in the commercial business. This is why the downside scenario must show that the commercial business remains healthy even under the worst-case defense trajectory. The company\'s certifications, registrations, and customer relationships are not at risk from a slow defense entry.',
        },
        {
          id: 'defense-a1-m4-q8',
          type: 'multiple-choice',
          question: 'CAPSTONE SCENARIO: Meridian Precision (from the module simulation) has $2.8M available credit, AS9100 Rev D, strong commercial aerospace performance, no defense accounting system, no CMMC assessment, and no defense-experienced PM on staff. A prime is asking for a response in 60 days on a $6M/year rotorcraft subcontract. What is the most strategically sound response?',
          options: [
            'Submit a capability statement immediately, accept the subcontract if offered, and build compliance infrastructure under contract pressure',
            'Decline immediately — no defense-experienced company should take a $6M subcontract in their first year',
            'Respond with a capability statement and express strong interest, while simultaneously initiating a 90-day readiness assessment; propose a teaming arrangement if the readiness gaps cannot be closed in the prime\'s timeline',
            'Submit a no-bid — the CMMC gap alone makes any defense work impossible until the next calendar year',
          ],
          correctIndex: 2,
          explanation: 'The strategically sound response balances maintaining the opportunity with protecting the company from an underprepared performance. Submitting a capability statement signals genuine interest and buys time. Initiating a rapid readiness assessment identifies whether gaps can be closed in the available timeline. Proposing a teaming arrangement with a compliance-capable partner converts a conditional "not ready alone" into a viable "ready with the right partner." Accepting a subcontract without addressing accounting system and workforce gaps is the path to the first-contract crisis. Declining outright foregoes a potentially transformative opportunity.',
        },
      ],
    },
  ],
};
