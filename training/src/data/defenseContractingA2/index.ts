import type { Course } from '../../types/course';

export const defenseExecPracticalCourse: Course = {
  id: 'defense-exec-practical',
  track: 'defense-contracting',
  title: 'Structuring to Win',
  subtitle: 'Track A · Level 2 · Executive Practical',
  description:
    'You understand the defense market. Now build the business infrastructure to compete in it. This course moves from orientation to execution — registration, certifications, contract mechanics, business systems, and teaming — with the specificity you need to make real decisions.',
  status: 'available',
  estimatedHours: 6,
  color: '#4a7fa5',
  icon: '🏛️',
  modules: [
    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 1 — Getting in the Game
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'a2-m1',
      number: 1,
      title: 'Getting in the Game',
      description:
        'The administrative foundation that lets you bid. SAM.gov registration, CAGE codes, UEI numbers, the right NAICS codes, SBA certifications worth pursuing, and a capability statement that actually gets read.',
      estimatedMinutes: 70,
      learningObjectives: [
        'Complete SAM.gov registration and maintain active status',
        'Obtain and understand your CAGE code and UEI',
        'Select NAICS codes that open the right contract opportunities',
        'Evaluate your eligibility for 8(a), HUBZone, and SDVOSB certification',
        'Build a capability statement that wins meetings — not just complies',
      ],
      lessons: [
        // ── Lesson 1.1 ────────────────────────────────────────────────────
        {
          id: 'a2-m1-l1',
          title: 'SAM.gov, CAGE Code, and UEI — The Paperwork That Pays',
          estimatedMinutes: 22,
          content: [
            {
              type: 'paragraph',
              text: 'Before any contracting officer can award you a dollar, your business must exist in the federal system. That means three things: an active SAM.gov registration, a valid CAGE code, and a Unique Entity Identifier (UEI). None of these are hard to get, but the mistakes people make with them cost real money — missed solicitations, payment delays, and in some cases, bid disqualification.',
            },
            {
              type: 'heading',
              text: 'The UEI: What Replaced DUNS',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'As of April 2022, the federal government replaced the Dun & Bradstreet DUNS number with the SAM.gov-issued Unique Entity Identifier (UEI). If you registered before that date, your existing SAM record already carries a UEI. If you are registering for the first time, you will receive your UEI during the SAM.gov registration process — no separate application required.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Third-Party Registration Scams',
              text: 'SAM.gov registration is free. Companies routinely receive official-looking invoices for $500–$2,000 to "register" or "renew" their SAM registration. These are scams. Register directly at sam.gov and bookmark only the official .gov URL. Report solicitations to the GSA Inspector General.',
            },
            {
              type: 'heading',
              text: 'CAGE Code: Your Five-Character Identity in the Defense Supply Chain',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The Commercial and Government Entity (CAGE) code is a five-character identifier assigned by the Defense Logistics Agency (DLA). It is not just an administrative number — it follows your company through every contract, every DD Form 250 (now the Wide Area WorkFlow receiving report), every solicitation, and every background check. Primes use it to vet subs. DCSA uses it for facility clearance records.',
            },
            {
              type: 'ordered-list',
              items: [
                'Register in SAM.gov — CAGE code application is embedded in the SAM registration flow for domestic entities.',
                'If you already have a CAGE code from prior activity, search the CAGE/NCAGE database at cage.dla.mil before requesting a new one. Duplicate codes create significant downstream problems.',
                'For foreign entities supplying the DoD, the process goes through NATO CAGE (NCAGE) via your country\'s national codification bureau.',
                'Changes to legal name, address, or ownership require a CAGE update — failure to update can freeze payments and create compliance exposure.',
                'Once issued, the CAGE code persists even if the company goes inactive. If you reactivate or acquire a company with a dormant CAGE, investigate the history before using it.',
              ],
            },
            {
              type: 'heading',
              text: 'SAM.gov Registration: The Annual Renewal Trap',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'SAM.gov registrations expire annually. An expired registration means you cannot be awarded a federal contract and, in some cases, cannot receive payment on existing contracts. The system sends email reminders, but those emails frequently land in spam. Put a calendar reminder 60 days before expiration — renewals typically take 1–3 business days but can stretch to 2 weeks if your entity data triggers a manual review.',
            },
            {
              type: 'table',
              headers: ['Registration Element', 'Where It Lives', 'Renewal Required', 'Cost'],
              rows: [
                ['SAM.gov Entity Registration', 'sam.gov', 'Annual', 'Free'],
                ['CAGE Code', 'cage.dla.mil (via SAM)', 'No expiration, update on changes', 'Free'],
                ['UEI', 'Assigned within SAM.gov', 'Persistent with SAM registration', 'Free'],
              ],
            },
            {
              type: 'heading',
              text: 'What Reviewers Actually Look At in SAM',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Your SAM record is a public document. Contracting officers, prime contractor BD teams, and your competitors can all see it. The narrative fields — particularly the "Purpose of Registration" and "Points of Contact" — are read more often than most small businesses realize. Treat these fields like marketing copy.',
            },
            {
              type: 'list',
              items: [
                'List a specific technical POC, not just a generic "info@company.com" address',
                'Your business types and socioeconomic categories drive set-aside eligibility — verify these are accurate and complete',
                'The Electronic Funds Transfer (EFT) banking information must be current or payment will be delayed on any award',
                'Ensure your representations and certifications (Reps & Certs) in SAM are complete — many solicitations require these to be current within 12 months',
              ],
            },
            {
              type: 'heading',
              text: 'NAICS Codes: The Filter That Controls Your Visibility',
              level: 3,
            },
            {
              type: 'paragraph',
              text: 'North American Industry Classification System (NAICS) codes define what your company does. They also control whether you appear in agency small business searches, whether you qualify as a small business under a specific solicitation, and which set-asides you are eligible for. Choosing wrong codes is not just a missed opportunity — it can create False Claims Act exposure if you certify as small under a size standard that does not apply to your actual work.',
            },
            {
              type: 'table',
              headers: ['NAICS Code', 'Description', 'Size Standard', 'Common Defense Application'],
              rows: [
                ['541330', 'Engineering Services', '$25.5M avg annual receipts', 'Systems engineering, technical studies'],
                ['541512', 'Computer Systems Design Services', '$34M avg annual receipts', 'C4ISR, software development'],
                ['336411', 'Aircraft Manufacturing', '1,500 employees', 'Airframe, UAV manufacturing'],
                ['336419', 'Other Aircraft Parts & Equipment', '1,250 employees', 'Avionics, components'],
                ['541715', 'R&D in Physical Sciences (non-biotech)', '1,000 employees', 'SBIR/STTR, advanced research'],
                ['561210', 'Facilities Support Services', '$47M avg annual receipts', 'Base operations, logistics'],
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Size Standards Change',
              text: 'SBA updates NAICS size standards periodically. Always verify current thresholds at sba.gov/size-standards before certifying small on a solicitation. As of this writing, the most recent comprehensive update was in 2022, with targeted adjustments ongoing. Regulatory note: verify current requirements with SBA or qualified legal counsel.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Do your SAM renewal in month 10, not month 12 — buffer for manual review delays that can freeze an award you\'re about to receive. 2. Pull your CAGE code history from cage.dla.mil before your first visit to a prime\'s supplier portal — surprises there are expensive. 3. Audit your NAICS codes against actual contract opportunities in beta.SAM.gov. If no solicitations in your sweet spot use the codes you selected, you\'re invisible to the market.',
            },
          ],
        },
        // ── Lesson 1.2 ────────────────────────────────────────────────────
        {
          id: 'a2-m1-l2',
          title: 'SBA Certifications — Which Ones Move the Needle',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'Every certification program you see advertised promises access to set-aside contracts. Most of them underdeliver. A few of them are genuinely transformative. The key is honest assessment: which certifications match your actual ownership structure and business profile, what does the application process realistically cost in time and money, and what pipeline does it actually open at your target agencies?',
            },
            {
              type: 'heading',
              text: 'The SBA 8(a) Business Development Program',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The 8(a) program is the most powerful small business certification in federal contracting. Sole-source awards up to $4.5 million (goods/services) or $7 million (manufacturing) are available without competition. Competitive set-asides run without the usual full-and-open competition pressure. For a qualifying firm in a target market, being 8(a) can mean 5–8 years of accelerated revenue growth that funds capability and personnel buildout.',
            },
            {
              type: 'table',
              headers: ['8(a) Element', 'Requirement / Detail'],
              rows: [
                ['Eligibility', 'Socially and economically disadvantaged individual(s) own ≥51% and control daily operations'],
                ['Personal net worth limit', '<$850,000 (excluding primary residence equity and 401k/IRA)'],
                ['Adjusted gross income limit', '<$400,000 averaged over 3 years (with exceptions)'],
                ['Business net worth limit', '<$6.5M at entry'],
                ['Program term', '9 years total: 4-year developmental stage + 5-year transitional stage'],
                ['Annual review', 'Yes — compliance reviews, 8(a) Annual Review submission required'],
                ['Graduation threshold', 'Varies by primary NAICS; firm must show ability to compete without the program'],
                ['Sole source ceiling (services)', '$4.5M per award'],
                ['Sole source ceiling (manufacturing)', '$7M per award'],
              ],
            },
            {
              type: 'paragraph',
              text: 'The application is submitted through the SBA\'s certify.sba.gov portal. Typical processing time is 90 days, though complex applications or requests for additional information (RFAIs) can push this to 6 months. Expect to produce 3 years of personal tax returns, business financials, a personal financial statement, corporate documents, and a detailed business plan narrative. The narrative — particularly the section on social disadvantage — receives close scrutiny.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The 8(a) Clock Starts at Approval, Not Application',
              text: 'You have exactly 9 years in the program. Every month you spend building your application is a month not spent using the program. Get qualified legal or consulting help for the application if your situation is at all complex — the cost is trivial compared to a year lost to re-application after an initial denial.',
            },
            {
              type: 'heading',
              text: 'HUBZone Certification',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'HUBZone (Historically Underutilized Business Zone) certification requires that your principal office is in a designated HUBZone and that at least 35% of your employees reside in HUBZones. The federal government has a 3% HUBZone prime contracting goal — agencies often use competitive HUBZone set-asides to meet it. The price evaluation preference (10% in full-and-open competition) is less commonly used but still valuable.',
            },
            {
              type: 'list',
              items: [
                'Check hubzonemap.sba.gov to verify your office location and employee residences qualify',
                'HUBZone boundaries change — re-certification required every 3 years, but you must maintain eligibility continuously',
                'Employee headcount for the 35% calculation includes all employees, not just full-time; part-time workers count proportionally',
                'Maintaining HUBZone status with a growing workforce that moves to non-HUBZone areas is a common compliance failure point',
              ],
            },
            {
              type: 'heading',
              text: 'SDVOSB — Service-Disabled Veteran-Owned Small Business',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'If your business is majority-owned by a service-disabled veteran, SDVOSB certification opens both VA set-asides (VA has a 3% SDVOSB goal, enforced aggressively) and non-VA federal set-asides. Since January 2023, all SDVOSB certifications are administered through SBA\'s certify.sba.gov — the old VA CVE program has been consolidated. Verify the current process, as this transition is ongoing.',
            },
            {
              type: 'heading',
              text: 'WOSB and EDWOSB',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Women-Owned Small Business (WOSB) and Economically Disadvantaged WOSB (EDWOSB) certifications are administered through SBA and open set-asides in NAICS codes where women-owned firms are underrepresented. Check the SBA\'s list of eligible NAICS codes — many defense-relevant codes qualify. The EDWOSB has an additional personal net worth test similar to 8(a).',
            },
            {
              type: 'key-terms',
              terms: [
                { term: '8(a)', definition: 'SBA Business Development Program for socially and economically disadvantaged firms. Provides sole-source and competitive set-aside access for 9 years.' },
                { term: 'HUBZone', definition: 'Historically Underutilized Business Zone. Geographic-based certification requiring principal office location and 35% employee residency in designated zones.' },
                { term: 'SDVOSB', definition: 'Service-Disabled Veteran-Owned Small Business. Requires majority ownership and control by a veteran with a service-connected disability.' },
                { term: 'WOSB', definition: 'Women-Owned Small Business. Requires 51% ownership and control by one or more women who are US citizens.' },
                { term: 'Sole-source', definition: 'Contract awarded without competition. 8(a) enables sole-source awards below statutory thresholds, dramatically reducing the cost of sales.' },
                { term: 'Set-aside', definition: 'Solicitation restricted to a specific class of offerors (e.g., small businesses, 8(a) firms). Full-and-open competition firms cannot compete.' },
              ],
            },
            {
              type: 'heading',
              text: 'Stacking Certifications',
              level: 3,
            },
            {
              type: 'paragraph',
              text: 'A firm can hold multiple certifications simultaneously. An 8(a) SDVOSB WOSB is a rare and highly competitive profile for set-aside solicitations. Contracting officers can use any applicable certification for a given procurement. More certifications mean more set-aside vehicles you can compete on and more sole-source opportunities you can pursue. The only limit is eligibility — do not manufacture or stretch qualifications that are not legitimate.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Run your 8(a) eligibility calculation before spending a day on the application — the personal net worth exclusions are complicated and an advisor can save you from a wasted effort. 2. The HUBZone 35% employee residency rule bites hard when you scale; model it before hiring aggressively. 3. SDVOSB at VA is not just a VA play — use it at DoD, DHS, and civilian agencies that have set-aside goals too.',
            },
          ],
        },
        // ── Lesson 1.3 ────────────────────────────────────────────────────
        {
          id: 'a2-m1-l3',
          title: 'The Capability Statement That Gets Read',
          estimatedMinutes: 23,
          content: [
            {
              type: 'paragraph',
              text: 'A capability statement is a one-to-two page marketing document you hand to a contracting officer at an industry day, attach to a sources-sought response, or send cold to a prime\'s supplier diversity team. Most of them are awful. They list generic services, use meaningless adjectives, and give the reader no reason to pick up the phone. The ones that work are brutally specific about what the company actually does, for whom, and with what results.',
            },
            {
              type: 'heading',
              text: 'The Five Elements That Matter',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Core Competencies — specific technical capabilities, not "engineering support." Example: "Conformal coating and potting for MIL-STD-810G environments, Class III IPC workmanship, AS9100D certified."',
                'Differentiators — what you do that competitors in your size range typically cannot. Speed, niche expertise, specific clearance level, proprietary process, geographic advantage.',
                'Past Performance — contract numbers, agency names, dollar values if public, specific technical scope. Three to five examples with quantified outcomes.',
                'NAICS codes and size standard — the filter a CO uses to verify you qualify for their set-aside.',
                'Certifications and CAGE code — prominently, in the header or footer where it is always visible.',
              ],
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Strong vs. Weak Core Competency Language',
              text: 'WEAK: "We provide comprehensive electronics manufacturing services to the defense community." STRONG: "SMT assembly and box-build integration for avionics LRUs. IPC-A-610 Class III, J-STD-001 Class III, MIL-PRF-31032 PWB qualified. Cleanroom 100K on-site. 8–12 week lead time on prototype runs."',
            },
            {
              type: 'heading',
              text: 'Tailoring to the Audience',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A capability statement sent to a Lockheed Martin F-35 supply chain manager is not the same document you send to an Air Force SBIR program office. The core facts are the same. The emphasis is different. The supply chain manager wants quality system specifics, capacity data, and financial stability signals. The SBIR program office wants innovation narrative, prior SBIR performance, and technical depth.',
            },
            {
              type: 'paragraph',
              text: 'Maintain two or three versions of your capability statement — a general one for cold outreach and tailored versions for your top two or three agency or program targets. The tailoring is largely in the differentiators section and the specific past performance examples you lead with.',
            },
            {
              type: 'heading',
              text: 'Past Performance When You Have None',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Every contractor faced this problem at the start. Commercial work counts. If you built ruggedized electronics for oil and gas, that demonstrates environmental-hardening capability. If you ran quality systems for a medical device company, that demonstrates process discipline. Be specific about the work and honest about the customer (use "confidential Fortune 500 client" if necessary, not a fabricated reference). The gap you are trying to fill is evidence of execution, not contract number pedigree.',
            },
            {
              type: 'list',
              items: [
                'Subcontract work for a prime counts — list the prime, the program name, and your role',
                'SBIR Phase I or Phase II awards carry significant credibility even if dollar values are modest',
                'Mentor-Protégé program participation under an 8(a) or other agreement counts as relevant past performance',
                'State and local government work, GSA schedule work, and non-DoD federal work all count',
              ],
            },
            {
              type: 'heading',
              text: 'Format and Distribution',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'One page is almost always the right length for initial outreach. Two pages is acceptable when past performance volume genuinely warrants it. PDF, not Word — formatting must survive email clients and printer drivers. Put your CAGE code, UEI, primary NAICS, and socioeconomic categories in the footer of every page so any page pulled out of a stack can stand alone.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Industry Day Trap',
              text: 'Industry days feel productive. You hand out 80 capability statements and come home with a stack of business cards. Two months later, nothing has happened. Industry days work when you have pre-scheduled one-on-one meetings with specific program offices or prime contractor BD contacts. Cold table drops at industry days have very low conversion. Invest the travel budget in targeted pre-work.',
            },
            {
              type: 'heading',
              text: 'Using beta.SAM.gov Sources Sought Notices',
              level: 3,
            },
            {
              type: 'paragraph',
              text: 'Sources sought notices are market research tools — the government is asking who can do this work before writing the solicitation. Responding is free, non-binding, and directly positions you with the contracting officer who will write the statement of work. A capability statement submitted in response to a sources sought is read by the CO and program office, not filed in a drawer. This is one of the highest-ROI BD activities available to a small business.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Audit your current capability statement: can someone read it in 45 seconds and know exactly what you build, for what environment, to what standard? If not, rewrite it this week. 2. Set a beta.SAM.gov alert for sources sought notices in your top three NAICS codes — respond to every relevant one with a tailored capability statement. 3. Ask your best customer to describe what you do in their words, then use that language in your differentiators section.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'a2-m1-q1',
          type: 'multiple-choice',
          question: 'What replaced the DUNS number for federal contracting entity identification as of April 2022?',
          options: [
            'CAGE code',
            'Unique Entity Identifier (UEI)',
            'Federal Employer Identification Number (FEIN)',
            'Procurement Instrument Identifier (PIID)',
          ],
          correctIndex: 1,
          explanation: 'The UEI, assigned through SAM.gov, replaced the Dun & Bradstreet DUNS number as of April 2022. Existing registrants had their UEI assigned automatically within SAM.',
        },
        {
          id: 'a2-m1-q2',
          type: 'multiple-choice',
          question: 'How long does the SBA 8(a) Business Development Program last from the date of approval?',
          options: ['5 years', '7 years', '9 years', '10 years'],
          correctIndex: 2,
          explanation: 'The 8(a) program has a 9-year term: a 4-year developmental stage followed by a 5-year transitional stage. The clock starts at approval, not application.',
        },
        {
          id: 'a2-m1-q3',
          type: 'multiple-choice',
          question: 'What percentage of employees must reside in HUBZones for a firm to maintain HUBZone certification?',
          options: ['25%', '35%', '51%', '40%'],
          correctIndex: 1,
          explanation: 'HUBZone certification requires that at least 35% of the firm\'s employees reside in designated HUBZones. This must be maintained continuously, not just at the time of certification.',
        },
        {
          id: 'a2-m1-q4',
          type: 'true-false',
          question: 'SAM.gov registration costs a processing fee that must be paid annually.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'SAM.gov registration is completely free. Any invoice you receive for SAM registration services is from a third-party scam operation. Register only at the official sam.gov website.',
        },
        {
          id: 'a2-m1-q5',
          type: 'multiple-choice',
          question: 'What is the maximum sole-source award threshold for an 8(a) firm in a services contract?',
          options: ['$1.5 million', '$3 million', '$4.5 million', '$7 million'],
          correctIndex: 2,
          explanation: 'The 8(a) sole-source threshold for services and goods is $4.5 million. For manufacturing, the threshold is $7 million. These thresholds allow contracting officers to award without competition.',
        },
        {
          id: 'a2-m1-q6',
          type: 'multiple-choice',
          question: 'Which of the following is the highest-ROI BD activity for a small defense contractor with limited travel budget?',
          options: [
            'Attending large industry days and distributing capability statements broadly',
            'Responding to sources sought notices on beta.SAM.gov with tailored capability statements',
            'Cold-calling contracting officers at target agencies',
            'Placing advertisements in defense trade publications',
          ],
          correctIndex: 1,
          explanation: 'Sources sought responses are read by the contracting officer and program office that will write the actual solicitation. They are free, targeted, and directly position your firm for the upcoming procurement — making them among the highest-ROI BD activities available.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 2 — Contract Types and What They Mean for Your Business
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'a2-m2',
      number: 2,
      title: 'Contract Types and What They Mean for Your Business',
      description:
        'Contract type is a risk allocation decision. FFP, CPFF, T&M, and IDIQ each transfer risk differently between contractor and government — affecting your cash flow, margin profile, audit exposure, and operational requirements. Know what you are signing before you sign it.',
      estimatedMinutes: 75,
      learningObjectives: [
        'Distinguish the risk and cash flow profiles of FFP, CPFF, T&M, and IDIQ contracts',
        'Explain why cost-plus contracts create audit and accounting system requirements',
        'Identify landmine clauses in a contract before award',
        'Analyze how contract type selection affects your business strategy',
      ],
      lessons: [
        // ── Lesson 2.1 ────────────────────────────────────────────────────
        {
          id: 'a2-m2-l1',
          title: 'FFP, CPFF, T&M, IDIQ — Risk, Cash, and Margin',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'Contract type is not just a term of art — it is the single most important structural decision in a defense contract relationship. It determines who absorbs cost overruns, how the government pays you, what accounting you must maintain, and ultimately what your margin looks like when the work is done. Contractors who accept the wrong contract type for their capabilities and financial position pay for it for years.',
            },
            {
              type: 'heading',
              text: 'Firm Fixed Price (FFP)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'FFP contracts pay a fixed price regardless of your actual cost to perform. If you bid $2.4M and the work costs $2.1M, you keep the $300K. If it costs $2.8M, you absorb the $400K overrun. The government takes zero cost risk. This is the government\'s preferred contract type — FAR 16.102 states that FFP is preferred to the maximum extent practicable.',
            },
            {
              type: 'list',
              items: [
                'Maximum margin potential — if you are efficient, your earned profit has no ceiling imposed by the contract',
                'No DCAA cost accounting audit of your actual performance costs (though audit rights still exist)',
                'No requirement for a Cost Accounting Standards (CAS)-compliant accounting system on the contract itself',
                'Cash flow risk: you absorb overruns with your own working capital',
                'Best suited to well-defined requirements with stable specifications — commodity hardware, mature services, production items',
              ],
            },
            {
              type: 'heading',
              text: 'Cost Plus Fixed Fee (CPFF)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'CPFF contracts reimburse your allowable costs plus a fixed fee (typically 6–8% of estimated cost for development work, 7–10% for research). The government absorbs cost overruns up to the contract ceiling. The contractor absorbs no cost risk — but the fee is fixed, so you cannot earn more by being efficient. CPFF is common in early-stage development, research, and any work where requirements are genuinely uncertain.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'CPFF Is Not Low-Risk for the Contractor',
              text: 'CPFF shifts cost risk to the government but creates significant contractor compliance risk. Your accounting system must be DCAA-approved. Your actual costs must be allowable, allocable, and reasonable under FAR Part 31. Your time-charging must be accurate — one employee charging time to the wrong project on a cost-plus contract is a potential False Claims Act violation. More on this in Module 3.',
            },
            {
              type: 'heading',
              text: 'Time and Materials (T&M)',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'T&M contracts pay fixed hourly labor rates plus actual material costs at cost. The labor rate includes loaded overhead and profit — you negotiate the rate at award and it does not change with your actual costs. T&M is used when the scope of work cannot be defined with sufficient precision for FFP and cost accounting requirements would be excessive for CPFF.',
            },
            {
              type: 'table',
              headers: ['Contract Type', 'Who Bears Cost Risk', 'Margin Control', 'Accounting Requirements', 'Best Use Case'],
              rows: [
                ['FFP', 'Contractor', 'Unlimited upside / full downside', 'Standard commercial', 'Defined scope, production, commodities'],
                ['CPFF', 'Government (up to ceiling)', 'Fee is fixed — no upside', 'DCAA-approved system required', 'R&D, early development, undefined scope'],
                ['T&M', 'Shared (labor rate fixed, hours variable)', 'Locked into negotiated rate', 'Standard + timekeeping controls', 'Services with uncertain hours'],
                ['FP-EPA', 'Contractor (with adjustment mechanism)', 'Protected against material price escalation', 'Standard + economic price adjustment data', 'Multi-year production with volatile materials'],
                ['IDIQ', 'Determined by task order type', 'Per task order type', 'Per task order type', 'Repetitive services, multiple delivery requirements'],
              ],
            },
            {
              type: 'heading',
              text: 'IDIQ: The Vehicle That Enables the Work',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Indefinite Delivery Indefinite Quantity (IDIQ) contracts are vehicles — they establish terms, conditions, rates, and a maximum ceiling, but they do not obligate the government to buy anything beyond the minimum guaranteed quantity (often as low as $1,000 or the contract minimum). Actual work happens through task orders or delivery orders issued against the IDIQ.',
            },
            {
              type: 'paragraph',
              text: 'Multi-award IDIQs (MAIDIQs) like SEAPORT-NxG, OASIS, or agency-specific omnibus contracts put multiple contractors on a single vehicle and then run competitions among those contractors for each task order. Being "on" an IDIQ is a qualification to compete — it is not revenue. The revenue comes from winning task orders.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Government-Wide Acquisition Contracts (GWACs)',
              text: 'GWACs are multi-agency IDIQs. Key ones relevant to defense tech firms: GSA OASIS (professional services), GSA STARS III (IT, small business), NIH CIO-SP4 (IT health), and SEWP V (products). Being on a GWAC gives you access to any agency that uses it — which can significantly expand your addressable market beyond your core agency relationships.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Never accept CPFF on your first cost-reimbursement contract without a DCAA-adequate accounting system already in place — the system audit will delay payment and can result in disallowed costs retroactively. 2. When pricing an FFP contract, your contingency needs to cover the full cost of a 20–30% scope creep scenario — the government will not compensate you for requirements that were "implied" in the original SOW. 3. Getting on a GWAC like OASIS or STARS III is a 12–18 month investment, but it opens dozens of agencies — it is a force multiplier for your BD capacity.',
            },
          ],
        },
        // ── Lesson 2.2 ────────────────────────────────────────────────────
        {
          id: 'a2-m2-l2',
          title: 'Why Cost-Plus Is Not Safe — The Audit Exposure You Did Not Price',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'Cost-plus contracts shift performance risk to the government, and new defense contractors gravitate to them for that reason. What they do not anticipate is the compliance infrastructure that cost-plus requires — DCAA-adequate accounting, cost accounting standards, certified cost or pricing data, and the audit exposure that follows every dollar charged to a cost-plus contract. The cost of that infrastructure is real and must be priced into your overhead rates.',
            },
            {
              type: 'heading',
              text: 'Allowable, Allocable, and Reasonable',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Under FAR Part 31, only costs that are allowable, allocable, and reasonable can be billed to a cost-plus contract. These are not subjective terms — FAR 31.201-2 defines them with precision, and DCAA auditors apply them with specificity. Getting this wrong is not just a pricing mistake; it can constitute a false claim under the False Claims Act (31 U.S.C. §§ 3729–3733).',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Allowable cost', definition: 'A cost that complies with FAR 31.201-2: compliant with contract terms, consistent with applicable CAS, consistent with generally accepted accounting principles, and not expressly unallowable.' },
                { term: 'Allocable cost', definition: 'A cost that is assignable to one or more cost objectives (contracts) in reasonable proportion to benefits received. A cost cannot be fully allocated to a cost-plus contract if it also benefits commercial work.' },
                { term: 'Expressly unallowable costs', definition: 'Categories that can never be billed to the government regardless of whether they were incurred: entertainment, alcohol, lobbying, certain legal fees, fines and penalties, interest expense (with narrow exceptions), advertising (with narrow exceptions).' },
                { term: 'Questioned cost', definition: 'A DCAA-identified cost that the auditor believes does not comply with contract terms or applicable regulations. Questioned costs must be resolved before final payment.' },
                { term: 'Disallowed cost', definition: 'A cost the contracting officer has determined to be unallowable. Disallowed costs must be repaid, with interest, if previously reimbursed.' },
              ],
            },
            {
              type: 'heading',
              text: 'DCAA Audit Types You Will Encounter',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DCAA (Defense Contract Audit Agency) conducts multiple types of audits. Understanding which applies to your situation helps you prepare appropriately and avoid being surprised.',
            },
            {
              type: 'table',
              headers: ['Audit Type', 'When Triggered', 'What They Examine'],
              rows: [
                ['Pre-award accounting system survey', 'When you propose on a cost-plus contract above $2M and lack prior approval', 'Whether your accounting system can segregate and track costs by contract'],
                ['Incurred cost audit', 'Annual for contractors with cost-type contracts above $15M; sampling below', 'Whether costs billed during the year were allowable, allocable, reasonable'],
                ['Forward pricing rate review', 'When you submit certified cost or pricing data on negotiated contracts above $2M (TINA threshold)', 'Whether your proposed rates reflect realistic projected costs'],
                ['Proposal adequacy review', 'On significant cost-plus proposals', 'Whether your proposal is structured in compliance with DFARS 252.215-7009 and Table 15-2'],
                ['Floor check', 'Random labor charging verification', 'Whether employees are charging time accurately to the correct cost objectives'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'TINA: The $2 Million Threshold',
              text: 'The Truth in Negotiations Act (TINA), codified at 10 U.S.C. § 3702, requires contractors to submit certified cost or pricing data on negotiated contracts above $2 million (threshold indexed; verify current amount). If your certified data contained inaccuracies and the government paid more than it should have, they can recover the overpayment plus interest through the defective pricing provisions. This applies even if you were negotiating in good faith.',
            },
            {
              type: 'heading',
              text: 'Margin Limitations on Cost-Plus',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Your fee on a CPFF contract is fixed at negotiation. Typical ranges: 6–8% for development, 7–10% for R&D. But that fee is calculated as a percentage of estimated cost, not actual cost. If your costs come in below estimate (because you were efficient), your absolute dollar fee stays the same — your effective margin percentage goes up. If costs run over, your effective margin goes down. The structure does not reward efficiency.',
            },
            {
              type: 'paragraph',
              text: 'Award fee and incentive fee contracts (CPAF, CPIF) add performance-based fee components that can increase total fee — but they also add performance management, evaluation, and documentation overhead that is not trivial. For contracts under $5M, the cost of managing an award fee structure often exceeds its value.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Get your accounting system audited before you need it — a pre-award accounting system survey is not something you can schedule reactively after winning a contract. 2. Build an unallowable cost account in your chart of accounts from day one, and segregate entertainment, alcohol, and lobbying expenses there automatically — even if you have no government contracts yet. 3. The False Claims Act whistleblower provision (qui tam) means a disgruntled employee can trigger a DOJ investigation of your billing practices. The standard of care for cost-plus billing must be institutionalized, not just in the CFO\'s head.',
            },
          ],
        },
        // ── Lesson 2.3 ────────────────────────────────────────────────────
        {
          id: 'a2-m2-l3',
          title: 'Reading a Contract — Finding the Landmines',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'Defense contracts are long documents filled with FAR and DFARS clauses incorporated by reference. Most of those clauses are standard — they exist in every contract and do not require line-by-line reading. But buried in that standard text are several clause types that routinely surprise contractors who did not read carefully at award. Identify them before you sign.',
            },
            {
              type: 'heading',
              text: 'Termination for Convenience',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'FAR 52.249-2 (Termination for Convenience of the Government — Fixed-Price) gives the government the right to terminate all or any part of your contract at any time, for any reason, simply by issuing a notice. You are entitled to settlement for costs incurred, work completed, and reasonable profit on completed work — but you are not entitled to anticipated profits on work not yet performed.',
            },
            {
              type: 'paragraph',
              text: 'Termination for convenience is not a rare event. Budget cuts, program cancellations, and scope restructuring happen routinely in defense programs. If you built your financial model around the assumption that you would perform the full contract, a mid-stream T4C can be devastating. Your settlement negotiation matters — contractors who understand the settlement process (FAR 49.201 et seq.) recover significantly more than those who accept the CO\'s initial proposal.',
            },
            {
              type: 'heading',
              text: 'Inspection and Acceptance',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'FAR 52.246-2 (Inspection of Supplies — Fixed-Price) gives the government the right to inspect supplies at any point during manufacture and at delivery. The government can reject non-conforming supplies, require correction at contractor expense, and — if defects are not corrected — terminate for default. The clause also gives the government inspection rights at "all reasonable times" at your facility and those of your subcontractors.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'Latent Defect Warranty Period',
              text: 'FAR 52.246-2 includes a latent defect provision — the government can reject items for hidden defects discovered after acceptance, up to the warranty period. For commercial electronics supplied to defense programs, warranty periods of 12–36 months post-acceptance are common. Ensure your quality system documents and retention policy can support a defect investigation 3 years after shipment.',
            },
            {
              type: 'heading',
              text: 'Limitation of Funds vs. Limitation of Cost',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Cost-plus contracts include either FAR 52.232-20 (Limitation of Cost) or FAR 52.232-22 (Limitation of Funds), depending on whether the contract is fully or incrementally funded. These clauses require the contractor to notify the government when costs are projected to reach 75% of the funded amount and again when 85% is reached. Failure to provide these notifications on time can result in the contractor bearing costs incurred above the funded amount — even on a cost-plus contract.',
            },
            {
              type: 'heading',
              text: 'Payment Terms',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'FAR 52.232-7 (Payments Under Time-and-Materials and Labor-Hour Contracts) and FAR 52.232-25 (Prompt Payment) govern when the government must pay you. Standard terms are net 30 from invoice receipt, with the Prompt Payment Act providing interest on late payments. However, the payment process in practice often takes 45–75 days when Wide Area WorkFlow (WAWF) submission errors, receiving report delays, or DCAA holds on cost-type invoices are factored in.',
            },
            {
              type: 'list',
              items: [
                'Understand Wide Area WorkFlow (WAWF) — it is the mandatory DoD electronic invoicing system. WAWF errors are the single most common cause of payment delay for new contractors.',
                'Identify your Administering Contracting Officer (ACO), your Contracting Officer\'s Representative (COR), and the paying office before you submit your first invoice.',
                'For cost-plus contracts, provisional billing rates are established at contract award. If your actual rates differ significantly, a rate adjustment can create a lump-sum payment or recovery obligation at final settlement.',
                'Quick Payment Act does not apply to all contract types — verify your payment clause and understand the interest calculation mechanism.',
              ],
            },
            {
              type: 'heading',
              text: 'Key DFARS Clauses to Flag Immediately',
              level: 2,
            },
            {
              type: 'table',
              headers: ['Clause', 'Subject', 'Business Impact'],
              rows: [
                ['DFARS 252.204-7012', 'Safeguarding Covered Defense Information / Cyber Incident Reporting', 'Requires NIST SP 800-171 compliance, 72-hour cyber incident reporting, cloud service provider requirements'],
                ['DFARS 252.225-7001', 'Buy American Act — Balance of Payments Program', 'Restricts use of foreign end products; end product domestic content requirements'],
                ['DFARS 252.227-7013', 'Rights in Technical Data — Noncommercial Items', 'Defines government\'s license rights in your technical data; critical for IP-intensive businesses'],
                ['DFARS 252.227-7014', 'Rights in Noncommercial Computer Software', 'Government rights in software you develop with mixed funding'],
                ['DFARS 252.246-7007', 'Contractor Counterfeit Electronic Part Detection and Avoidance', 'Requires supply chain risk management program for electronic components'],
                ['DFARS 252.215-7002', 'Cost Estimating System Requirements', 'Requires adequate estimating system for cost-plus proposals above certain thresholds'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Build a contract review checklist with the specific clause numbers above and review every award against it before you mobilize — a 30-minute review can prevent a 30-month dispute. 2. Never start work on a cost-plus contract without confirming the funding level and your notification obligation under the Limitation of Funds clause — funding shortfalls are common and running over without notice makes it your problem. 3. DFARS 252.204-7012 (cyber) is a flow-down clause — it applies to your subcontractors too. Verify your subs have a NIST SP 800-171 System Security Plan before you award them a subcontract on a covered program.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'a2-m2-q1',
          type: 'multiple-choice',
          question: 'Under a Firm Fixed Price contract, what happens when the contractor\'s actual costs exceed the bid price?',
          options: [
            'The contractor submits a Request for Equitable Adjustment to recover costs',
            'The government is required to share the overrun under the Limitation of Cost clause',
            'The contractor absorbs the overrun from its own working capital',
            'The contract automatically converts to T&M for the remaining work',
          ],
          correctIndex: 2,
          explanation: 'FFP contracts place all cost risk on the contractor. If actual costs exceed the bid price, the contractor absorbs the overrun. This is why contingency pricing is critical on FFP proposals for any work with scope uncertainty.',
        },
        {
          id: 'a2-m2-q2',
          type: 'multiple-choice',
          question: 'What is the TINA threshold above which certified cost or pricing data must be submitted on negotiated contracts?',
          options: ['$500,000', '$1 million', '$2 million', '$5 million'],
          correctIndex: 2,
          explanation: 'The Truth in Negotiations Act threshold is $2 million (verify current indexed amount). Above this threshold, contractors must certify that cost or pricing data submitted is current, accurate, and complete at the time of agreement on price.',
        },
        {
          id: 'a2-m2-q3',
          type: 'multiple-choice',
          question: 'Which FAR clause requires a contractor to notify the government when costs reach 75% of the funded amount on a cost-plus contract?',
          options: [
            'FAR 52.249-2 (Termination for Convenience)',
            'FAR 52.232-22 (Limitation of Funds)',
            'FAR 52.246-2 (Inspection of Supplies)',
            'FAR 52.215-10 (Price Reduction for Defective Certified Cost)',
          ],
          correctIndex: 1,
          explanation: 'FAR 52.232-22 (Limitation of Funds) requires notification at 75% and 85% of funded amount. Failure to notify in time can result in the contractor bearing costs incurred above the funded ceiling — even on a cost-reimbursable contract.',
        },
        {
          id: 'a2-m2-q4',
          type: 'true-false',
          question: 'An IDIQ contract guarantees the contractor a specific dollar amount of work equal to the contract ceiling.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'IDIQ contracts only guarantee the minimum quantity, which is often as low as $1,000. The ceiling represents the maximum the government may order, not a commitment. Revenue comes from task orders issued against the IDIQ, not from the contract itself.',
        },
        {
          id: 'a2-m2-q5',
          type: 'multiple-choice',
          question: 'Which DFARS clause imposes NIST SP 800-171 cybersecurity requirements and 72-hour incident reporting obligations?',
          options: [
            'DFARS 252.225-7001',
            'DFARS 252.227-7013',
            'DFARS 252.204-7012',
            'DFARS 252.246-7007',
          ],
          correctIndex: 2,
          explanation: 'DFARS 252.204-7012 (Safeguarding Covered Defense Information and Cyber Incident Reporting) requires contractors to implement NIST SP 800-171 controls and report cyber incidents within 72 hours. It is also a mandatory flow-down to subcontractors handling covered defense information.',
        },
        {
          id: 'a2-m2-q6',
          type: 'multiple-choice',
          question: 'Termination for Convenience under FAR 52.249-2 entitles the contractor to:',
          options: [
            'Full anticipated profits on all remaining unperformed work',
            'Costs incurred, completed work value, and reasonable profit on completed work only',
            'A 10% penalty payment from the government for terminating without cause',
            'Automatic conversion of the contract to a new FFP contract for the remaining scope',
          ],
          correctIndex: 1,
          explanation: 'T4C settlement covers allowable costs incurred, the value of work performed, and reasonable profit on completed work. Anticipated profits on unperformed work are expressly excluded. The quality of your settlement negotiation determines how much you actually recover.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 3 — Building the Business Systems Defense Requires
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'a2-m3',
      number: 3,
      title: 'Building the Business Systems Defense Requires',
      description:
        'The DoD evaluates six contractor business systems. Deficiencies in any of them can result in withheld payments — up to 10% of billings per deficient system. This module covers what each system is, what software satisfies it, and what implementation actually costs.',
      estimatedMinutes: 72,
      learningObjectives: [
        'Explain what DCAA-adequate accounting means and which software platforms satisfy it',
        'Identify the six DoD contractor business systems and the regulations governing each',
        'Determine which systems you need on day one vs. which can wait',
        'Build a realistic cost model for business system implementation',
      ],
      lessons: [
        // ── Lesson 3.1 ────────────────────────────────────────────────────
        {
          id: 'a2-m3-l1',
          title: 'DCAA-Compliant Accounting — What It Actually Means',
          estimatedMinutes: 24,
          content: [
            {
              type: 'paragraph',
              text: '"DCAA-compliant" is a term that gets thrown around loosely. Strictly speaking, DCAA does not certify accounting systems — it audits them and issues opinions. A system that has received an "adequate" opinion from DCAA in a Pre-Award Survey of Accounting System (sometimes called a "PASS" or SF 1408 audit) is what most people mean when they say DCAA-compliant. The standards are defined in DFARS 252.242-7006 and FAR 52.215-2.',
            },
            {
              type: 'heading',
              text: 'What the Adequacy Requirements Actually Require',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'An adequate accounting system must demonstrate eighteen specific capabilities as defined in DFARS 252.242-7006. The core requirements that trip up small businesses most frequently:',
            },
            {
              type: 'ordered-list',
              items: [
                'Proper segregation of direct costs from indirect costs — you cannot have a single "labor" account that mixes both',
                'Identification and accumulation of direct costs by contract — every dollar of direct labor and materials must be traceable to a specific contract number',
                'A logical and consistent method for the allocation of indirect costs to intermediate and final cost objectives (your overhead and G&A allocation bases)',
                'Timekeeping system — employees must charge their time daily to specific cost objectives (contracts or overhead/G&A pools), and the system must have audit trail and supervisory approval',
                'Exclusion of expressly unallowable costs — the system must identify and segregate costs like entertainment and lobbying before they touch a government billing',
                'Identification of costs by contract line item (CLIN) when required',
              ],
            },
            {
              type: 'heading',
              text: 'Software That Satisfies the Requirements',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The market has converged on a handful of platforms that have accumulated sufficient DCAA audit history to be considered proven. The right choice depends on your size, contract mix, and budget. Note: software alone does not make a system adequate — configuration, chart of accounts design, and timekeeping discipline are equally important.',
            },
            {
              type: 'table',
              headers: ['Platform', 'Target Size', 'Typical Annual Cost', 'Strengths', 'Limitations'],
              rows: [
                ['Unanet GovCon', 'Small to mid-market ($5M–$100M revenue)', '$18,000–$60,000/yr (cloud)', 'Purpose-built for govcon, strong project accounting, integrated timekeeping', 'Less robust for manufacturing/inventory'],
                ['Deltek Costpoint', 'Mid to large ($50M+ revenue)', '$80,000–$400,000+/yr', 'Industry standard for large defense contractors, full CAS compliance, deep reporting', 'Complex implementation, high TCO'],
                ['Deltek Vision/Vantagepoint', 'Professional services, $10M–$150M', '$30,000–$120,000/yr', 'Strong project management integration, good for A&E and consulting-heavy contractors', 'Less suited to manufacturing'],
                ['QuickBooks + add-ons', 'Startups and very small ($0–$5M)', '$10,000–$25,000/yr (software + config)', 'Low cost, widely understood, can be configured for DCAA adequacy', 'Requires strict discipline, limited scalability, DCAA scrutiny on adequacy'],
                ['Foundation Software', 'Construction-adjacent contractors', '$15,000–$40,000/yr', 'Strong job costing, field service orientation', 'Less common in pure defense'],
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Can QuickBooks Pass a DCAA Audit?',
              text: 'Yes, with proper configuration. DCAA does not prescribe specific software. A well-configured QuickBooks instance with a proper chart of accounts, project tracking, and a separate timekeeping tool (Clockify, TSheets, or Harvest configured appropriately) can receive an adequate opinion. However, QuickBooks has limited audit trail controls and project cost segregation capability, and DCAA auditors are less familiar with it than with Costpoint or Unanet — expect additional scrutiny. Many companies start with QuickBooks and migrate to Unanet around $3–5M in government revenue.',
            },
            {
              type: 'heading',
              text: 'Requesting a Voluntary Accounting System Review',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'You do not have to wait for a contract award to trigger an accounting system review. DCAA accepts requests for pre-award surveys initiated by contractors who want to establish adequacy before entering a proposal competition. File a request through your cognizant DCAA field office. Timeline: typically 60–120 days, though this varies by field office workload.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Budget $25,000–$75,000 for accounting system implementation and configuration for a company under $10M in revenue — the software cost is only part of it; the consultant time to configure the chart of accounts and overhead pools correctly is the other half. 2. A DCAA-adequate accounting system is a prerequisite to bidding cost-plus contracts — start the implementation before you need it, not after you win. 3. Timekeeping discipline is the number one finding in DCAA floor checks — establish a daily charge entry policy from day one and enforce it before you have government contracts.',
            },
          ],
        },
        // ── Lesson 3.2 ────────────────────────────────────────────────────
        {
          id: 'a2-m3-l2',
          title: 'The Six DoD Business Systems — Which You Need and When',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'DFARS 252.242-7005 (Contractor Business Systems) establishes the DoD\'s authority to withhold up to 5% of payments for a significant deficiency in a single business system, or 10% for deficiencies in two or more systems. This is not a theoretical risk — the DoD has actively used this authority. Understanding which systems apply to your business and at what contract values is essential to managing compliance risk.',
            },
            {
              type: 'key-terms',
              terms: [
                { term: 'Accounting System', definition: 'The system that accumulates costs by contract and cost objective. Governed by DFARS 252.242-7006. Required for any cost-reimbursable contract.' },
                { term: 'Estimating System', definition: 'The policies and procedures for developing cost estimates and proposals. Governed by DFARS 252.215-7002. Required when contractor regularly submits proposals above $50M or has $10M or more in negotiated contracts.' },
                { term: 'Purchasing System', definition: 'The system for awarding and administering subcontracts. Governed by DFARS 252.244-7001. Reviewed when subcontract value is significant relative to prime contract.' },
                { term: 'Material Management and Accounting System (MMAS)', definition: 'Tracks material from acquisition through consumption on contracts. Governed by DFARS 252.242-7004. Relevant to manufacturers and system integrators.' },
                { term: 'Earned Value Management System (EVMS)', definition: 'Integrates cost, schedule, and scope performance measurement. Governed by DFARS 252.234-7002. Required on contracts ≥$20M (significant) or ≥$50M (comprehensive EVMS).' },
                { term: 'Property Management System', definition: 'Tracks government-furnished property (GFP) and contractor-acquired property charged to the government. Governed by DFARS 252.245-7003.' },
              ],
            },
            {
              type: 'heading',
              text: 'Day One Requirements vs. Scale Requirements',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'The six systems do not all apply on day one. The trigger events differ. Understanding the thresholds lets you sequence investments rationally rather than trying to build everything simultaneously.',
            },
            {
              type: 'table',
              headers: ['System', 'When Required', 'Practical Trigger', 'Day One?'],
              rows: [
                ['Accounting System', 'Any cost-reimbursable contract', 'First CPFF or T&M contract', 'Yes, before first cost-plus bid'],
                ['Estimating System', 'Regular proposals >$50M or ≥$10M negotiated contract base', 'Usually $25–50M revenue stage', 'No'],
                ['Purchasing System', 'Significant subcontracting on cost-type contracts', 'Subcontract spend >$25M', 'No'],
                ['MMAS', 'Material management complexity on cost-type contracts', 'Manufacturing/integration focus, $20M+', 'No'],
                ['EVMS', 'Cost/schedule contract ≥$20M (significant) or ≥$50M (full)', 'Large development program award', 'No'],
                ['Property Management System', 'Government-furnished property on contract', 'First GFP-heavy contract', 'Situational'],
              ],
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The 5%/10% Withholding Is Not a Fine — It Is Leverage',
              text: 'When DCAA identifies a significant deficiency in a business system and the Contracting Officer concurs, they issue a determination and can withhold 5% (one system) or 10% (two or more systems) of billings until corrective action is accepted. On a $5M annual billing rate, a 10% withhold is $500,000 of cash flow per year. The government holds the money in trust — you get it back when deficiencies are corrected — but the working capital impact is immediate and severe.',
            },
            {
              type: 'heading',
              text: 'Earned Value Management — The $20M Threshold You Must Prepare For',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'EVMS is required on DoD cost or incentive contracts with a value of $20 million or more (significant EVMS) and on contracts of $50 million or more (formal EVMS with government surveillance). Many small businesses get their first large development contract and discover, weeks before award, that they need an EVMS — a system that typically takes 12–18 months to properly implement. The solution: build schedule and cost integration practices at small scale before they become mandatory.',
            },
            {
              type: 'paragraph',
              text: 'EVMS software options include Cobra (Deltek), Primavera P6 with EV reporting, Microsoft Project with EV-configured reporting, and purpose-built tools like ProjecTrack. At the $20M threshold, many companies start with Cobra integrated into their Costpoint or Unanet environment. Implementation cost: $50,000–$200,000 depending on complexity and training requirements.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. If you are targeting a first large cost-plus contract in the $15–25M range, initiate your EVMS capability assessment 18 months before you expect to need it — implementation timelines are long and the government may require EVMS surveillance at the $20M threshold. 2. Government-furnished property on a contract creates liability — build a physical asset tracking system (even a spreadsheet at first) and do not let GFP sit in an unmarked storage area. Loss or damage of GFP is a contractor liability. 3. Start building documented procedures for your purchasing system even before you have a formal subcontracting requirement — documented procedures are faster to upgrade than undocumented practices.',
            },
          ],
        },
        // ── Lesson 3.3 ────────────────────────────────────────────────────
        {
          id: 'a2-m3-l3',
          title: 'Real Cost Ranges for System Buildout',
          estimatedMinutes: 23,
          content: [
            {
              type: 'paragraph',
              text: 'Business systems in defense contracting are not a one-time cost — they are a permanent overhead load. Too many small businesses underestimate this and then find themselves with an overhead rate that prices them out of competitive wins. Build this into your indirect rate structure from the beginning, because the government will ask about it.',
            },
            {
              type: 'heading',
              text: 'Implementation Costs by System',
              level: 2,
            },
            {
              type: 'table',
              headers: ['System', 'Software Cost (Annual)', 'Implementation Cost (One-Time)', 'Ongoing Compliance Cost (Annual)', 'Total Year 1'],
              rows: [
                ['Accounting (Unanet, small co)', '$18,000–$40,000', '$15,000–$40,000', '$10,000–$20,000', '$43,000–$100,000'],
                ['Accounting (Costpoint, mid)', '$80,000–$200,000', '$100,000–$300,000', '$25,000–$60,000', '$205,000–$560,000'],
                ['Estimating System (procedures only)', '$0 (procedural)', '$20,000–$60,000', '$10,000–$30,000', '$30,000–$90,000'],
                ['Purchasing System (procedures + tracking)', '$5,000–$20,000', '$15,000–$40,000', '$10,000–$25,000', '$30,000–$85,000'],
                ['EVMS (Cobra, small program)', '$20,000–$60,000', '$50,000–$150,000', '$20,000–$50,000', '$90,000–$260,000'],
                ['Property Management (integrated)', '$5,000–$15,000', '$10,000–$25,000', '$5,000–$15,000', '$20,000–$55,000'],
              ],
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Indirect Rate Impact',
              text: 'Business system costs are indirect costs — they are allocated to government contracts through your overhead and G&A pools. A $120,000 annual accounting and compliance cost on a $3M revenue base represents a 4% G&A rate increase. On a competitive FFP bid, that 4% can be the difference between winning and losing. Model it explicitly.',
            },
            {
              type: 'heading',
              text: 'What You Can Negotiate',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Implementation costs are negotiable with software vendors, particularly when you are a growth-stage company. The following approaches have worked for defense contractors in the $2–10M revenue range:',
            },
            {
              type: 'list',
              items: [
                'Phased implementation — negotiate a basic DCAA-adequate configuration first ($15–25K), with advanced modules (subcontract management, EVMS integration) deferred until contract volume justifies them',
                'Vendor reference programs — some vendors offer discounted or free implementation in exchange for being a reference customer. Evaluate the trade carefully; reference obligations can be time-consuming.',
                'GSA Schedule procurement — both Unanet and Deltek are on GSA Schedule. Buying through Schedule can reduce negotiation friction and provide a defensible pricing basis for government auditors who question software costs',
                'SBA Mentor-Protégé program — a mentor prime may provide accounting system access or support as part of a formal mentor-protégé agreement',
                'Industry associations — NDIA, TechAmerica, and some state-level defense industry associations negotiate group pricing on compliance software for members',
              ],
            },
            {
              type: 'heading',
              text: 'The Human Cost: Compliance Staffing',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Software is the smaller cost. The larger cost is the people needed to run compliant systems. A company with $5M in cost-plus contracts needs, at minimum: a part-time or full-time Controller with government contracting experience, a Contracts Administrator who understands FAR/DFARS, and discipline at the project level for daily timekeeping and cost charging.',
            },
            {
              type: 'table',
              headers: ['Role', 'Revenue Trigger', 'Annual Salary Range', 'Alternative (Part-Time/Fractional)'],
              rows: [
                ['Controller / CFO', '$3M+ in cost-plus contracts', '$120,000–$180,000', 'Fractional CFO: $3,000–$8,000/month'],
                ['Contracts Administrator', '$5M+ total contracts', '$80,000–$120,000', 'Part-time contracts consultant: $1,500–$4,000/month'],
                ['Compliance Consultant (DCAA prep)', 'Any cost-plus contract', 'Project basis', '$5,000–$25,000 per engagement'],
                ['Program Control Analyst', '$10M+ with EVMS', '$85,000–$130,000', 'Can be combined with Controller early'],
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Build your indirect rate forecast with the full compliance overhead modeled — software, consultants, and compliance staff — before you bid your first cost-plus contract. If your G&A rate is uncompetitive, you need to grow revenue to spread fixed compliance costs, not cut compliance to win a bid. 2. A fractional CFO with defense contracting experience is the highest-ROI hire for a company in the $3–8M range — the cost is roughly $60,000–$96,000 per year versus $150,000+ for a full-time hire, and the specialty knowledge is immediately applicable. 3. DCAA auditors respect companies that have documented their compliance procedures even if the systems are simple — invest in written procedures before you invest in expensive software.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'a2-m3-q1',
          type: 'multiple-choice',
          question: 'Under DFARS 252.242-7005, what is the maximum percentage of contract payments that can be withheld for significant deficiencies in two or more business systems?',
          options: ['5%', '7.5%', '10%', '15%'],
          correctIndex: 2,
          explanation: 'DFARS 252.242-7005 authorizes withholding of 5% for a single business system with significant deficiencies, and up to 10% when two or more business systems have significant deficiencies.',
        },
        {
          id: 'a2-m3-q2',
          type: 'multiple-choice',
          question: 'At what contract value does formal EVMS (Earned Value Management System) with government surveillance typically become required on DoD cost or incentive contracts?',
          options: ['$5 million', '$10 million', '$20 million', '$50 million'],
          correctIndex: 3,
          explanation: 'Formal EVMS with government surveillance is required on DoD cost or incentive contracts of $50 million or more. The "significant" EVMS threshold (requiring implementation but less intensive surveillance) is $20 million.',
        },
        {
          id: 'a2-m3-q3',
          type: 'multiple-choice',
          question: 'Which of the following is a common accounting system used by mid-market defense contractors known for its deep integration with government contracting cost accounting?',
          options: ['Salesforce', 'Deltek Costpoint', 'SAP Business One', 'Oracle NetSuite'],
          correctIndex: 1,
          explanation: 'Deltek Costpoint is the industry-standard accounting platform for mid-to-large defense contractors. It is purpose-built for government contracting cost accounting, CAS compliance, and DCAA audit support.',
        },
        {
          id: 'a2-m3-q4',
          type: 'true-false',
          question: 'DCAA formally certifies accounting software platforms as "DCAA-compliant" on a published approved list.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'DCAA does not certify software or maintain an approved software list. DCAA audits individual contractors\' accounting system implementations and issues adequacy opinions based on whether the specific configuration meets the requirements of DFARS 252.242-7006.',
        },
        {
          id: 'a2-m3-q5',
          type: 'multiple-choice',
          question: 'The Material Management and Accounting System (MMAS) is most relevant to which type of defense contractor?',
          options: [
            'Software development firms with purely labor-based contracts',
            'Professional services companies providing advisory services',
            'Manufacturers and system integrators tracking material from acquisition through consumption',
            'Companies providing base support services',
          ],
          correctIndex: 2,
          explanation: 'MMAS is relevant to contractors that purchase and manage physical materials charged to government contracts — primarily manufacturers and system integrators. Software and professional services firms with minimal material costs typically do not face MMAS requirements.',
        },
        {
          id: 'a2-m3-q6',
          type: 'multiple-choice',
          question: 'Which is the most cost-effective accounting system approach for a company at $2–3M in government revenue pursuing its first cost-plus contract?',
          options: [
            'Deltek Costpoint with full CAS implementation',
            'Build a custom system using Excel',
            'Unanet GovCon or QuickBooks with proper configuration and a DCAA-experienced consultant',
            'Wait for a large contract award before investing in any system',
          ],
          correctIndex: 2,
          explanation: 'At $2–3M revenue, Unanet GovCon or a properly configured QuickBooks system with a DCAA-experienced consultant provides an adequate, cost-appropriate solution. Costpoint\'s total cost of ownership ($200K+/year) is not justifiable at this revenue level. Delaying until after award is too late — accounting system adequacy must be established before the cost-plus contract is awarded.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 4 — Teaming and Subcontracting Strategy
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'a2-m4',
      number: 4,
      title: 'Teaming and Subcontracting Strategy',
      description:
        'Most defense revenue for small businesses flows through teaming arrangements with primes. Getting on a prime\'s radar, negotiating a teaming agreement that protects your interests, and managing flow-down compliance are three distinct skill sets that most small businesses underinvest in.',
      estimatedMinutes: 72,
      learningObjectives: [
        'Execute a capability briefing that gets a prime\'s BD team to call back',
        'Negotiate a teaming agreement that protects workshare, IP, and payment terms',
        'Identify and flow down mandatory DFARS clauses to subcontractors',
        'Understand exclusivity trade-offs in teaming agreements',
      ],
      lessons: [
        // ── Lesson 4.1 ────────────────────────────────────────────────────
        {
          id: 'a2-m4-l1',
          title: 'Getting on a Prime\'s Radar',
          estimatedMinutes: 23,
          content: [
            {
              type: 'paragraph',
              text: 'The BD process for a small defense subcontractor runs 18–36 months from first contact to first dollar. Primes are not looking for vendors — they are looking for partners who solve specific technical problems on specific programs. The companies that break through do it by being specific, persistent, and technically credible. The ones who fail do it by being generic, episodic, and sales-focused.',
            },
            {
              type: 'heading',
              text: 'Targeting the Right Primes',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Not all primes are the same, and not all prime programs are addressable by a given small business. The best targets are primes with active programs where you have technical differentiation, a track record that is adjacent to their need, and no conflicting existing supplier relationship. Use USASpending.gov to identify which primes are winning work in your technical domain and which agencies are awarding it.',
            },
            {
              type: 'ordered-list',
              items: [
                'Query USASpending.gov for awards in your NAICS codes above $5M — the prime contractors on those awards are your target list',
                'Check beta.SAM.gov for upcoming solicitations with subcontracting plans — large primes on cost-plus contracts over $750K (services) or $1.5M (construction) must have approved subcontracting plans with small business goals',
                'Attend NDIA, AIA, or agency-specific industry association events where prime BD and subcontracting teams are present — not just to hand out capability statements, but to listen to what programs are active',
                'Use LinkedIn to identify the Small Business Liaison Officer (SBLO) at target primes — SBLOs exist because the government requires them, and they respond to well-targeted inquiries',
              ],
            },
            {
              type: 'heading',
              text: 'The Capability Briefing: Getting the Meeting',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A capability briefing to a prime is not a sales call — it is a technical demonstration. The format that consistently works is: a 10-slide deck that presents your technical differentiation, your relevant past performance with specific metrics, your quality systems, your financial stability signals (bonding capacity, D&B rating, years in business), and one or two specific programs where you could add value. Lead with the technical problem you solve, not the certifications you hold.',
            },
            {
              type: 'callout',
              variant: 'example',
              title: 'Capability Briefing Structure That Works',
              text: 'Slide 1: Company overview (one line). Slide 2: The specific technical problem you solve — stated in terms the prime\'s engineers use. Slide 3–5: Past performance examples with quantified outcomes (delivery performance, first-article yield, cost reduction achieved). Slide 6: Quality certifications and test capabilities. Slide 7: Facility overview (clearance level if applicable). Slide 8: Current capacity and lead times. Slide 9: The specific program or contract vehicle where you want to partner. Slide 10: Next step ask — a technical meeting with the program team.',
            },
            {
              type: 'heading',
              text: 'SBIR as a Teaming Entry Point',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Small Business Innovation Research (SBIR) awards are one of the most credible signals to a prime that your technology is validated. DoD SBIR Phase I ($150,000–$250,000) and Phase II ($750,000–$1.5M) awards are publicly searchable at sbir.gov. A prime that is building a proposal for a system in your domain will actively search SBIR databases looking for small companies with validated technology to team with — particularly for SBIR Phase III opportunities that do not require competitive re-solicitation.',
            },
            {
              type: 'heading',
              text: 'Industry Days: How to Use Them Correctly',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Industry days hosted by a program office are intelligence events, not sales events. The government is testing messaging, identifying who is paying attention, and evaluating market interest. A small business at an industry day should: submit written questions before the event (they signal technical sophistication), take notes on who from the prime community attends, and request one-on-ones with the Small Business Program Manager if available — not broad networking.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Map your target prime list to specific programs using USASpending.gov data before your first outreach — a cold call that references the specific program, contract number, and technical requirement converts at 5x the rate of a generic capability statement. 2. A Phase I SBIR award is worth $150,000–$250,000 in cash and $5,000,000 in credibility with prime BD teams — prioritize SBIR topic identification if your technology qualifies. 3. The Small Business Liaison Officer at your target prime is not a salesperson — they are a connector whose job performance is measured by how well small businesses integrate into their supply chain. Use them correctly.',
            },
          ],
        },
        // ── Lesson 4.2 ────────────────────────────────────────────────────
        {
          id: 'a2-m4-l2',
          title: 'Teaming Agreements — What to Negotiate and What to Never Give Away',
          estimatedMinutes: 25,
          content: [
            {
              type: 'paragraph',
              text: 'A teaming agreement is a pre-proposal contract between a prime and a subcontractor establishing the terms under which they will jointly pursue a specific contract opportunity. It is enforceable under general contract law (not federal procurement law), and the quality of your negotiation determines whether you are protected if you win — and if you lose. Most small businesses sign whatever the prime sends them. That is a mistake.',
            },
            {
              type: 'heading',
              text: 'Core Elements of a Teaming Agreement',
              level: 2,
            },
            {
              type: 'ordered-list',
              items: [
                'Workshare commitment — specific dollar or percentage of contract value committed to the sub, tied to specific work scope (CLIN or task level, not just a vague commitment)',
                'Exclusivity — whether the prime can team with competing subs for the same scope on the same opportunity',
                'IP ownership and licensing — who owns what is developed during the proposal phase, and what license rights the prime gets in your background IP',
                'Cost reimbursement during proposal development — who pays for proposal preparation costs (B&P) and how are they split if you lose',
                'Duration and termination — when the agreement expires and under what circumstances it can be terminated (critical: does it survive through award?)',
                'Award obligation — a binding or best-efforts commitment by the prime to award the subcontract upon winning, subject to negotiation of subcontract terms',
              ],
            },
            {
              type: 'heading',
              text: 'The Workshare Fight',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Workshare is the central issue in most teaming agreement negotiations. Primes want flexibility to reduce subcontract scope if they win and decide to self-perform more work. Subs want binding commitments. The middle ground is a statement of work attachment to the teaming agreement that defines specifically what scope is committed to the sub, with a provision that this scope can only be reduced with mutual agreement.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'The Vague Workshare Clause That Costs You the Work',
              text: '"Sub will receive a fair and equitable share of the work" is not a workshare commitment. It is a placeholder that gives the prime full discretion to award you nothing after you have contributed your technical approach to a winning proposal. Demand a percentage or dollar floor tied to specific CLINs, in writing, before your technical approach goes into the proposal.',
            },
            {
              type: 'heading',
              text: 'Exclusivity — The Double-Edged Sword',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'A prime may ask you to sign an exclusive teaming agreement — you agree not to team with their competitors on the same opportunity. This has value if the prime is likely to win and your workshare commitment is strong. It has cost if the prime loses and you have foreclosed your ability to participate on the winning vehicle. Evaluate exclusivity requests by asking: what is the prime\'s realistic win probability, and what does the exclusivity restriction cost me if they lose?',
            },
            {
              type: 'paragraph',
              text: 'A common negotiated position: exclusivity applies during the proposal phase (you will not provide the same technical approach or solution to a competing prime), but reverts after award — if the prime wins without using your scope, you are free to sub to the winner. This protects the prime\'s legitimate interest in your technical contribution while preserving your ability to work on the program.',
            },
            {
              type: 'heading',
              text: 'What to Never Give Away',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Background IP ownership: the prime may need a license to use your technology in their integrated system, but they should not receive ownership of IP you developed independently with private funding. Insist on a license grant, not an assignment.',
                'Unlimited data rights in technical data: if your competitive advantage is a proprietary manufacturing process or design, ensure the teaming agreement does not include a data rights provision that gives the prime (or through them, the government) unlimited rights in that data',
                'Open-ended B&P cost obligations: if the proposal effort requires significant engineering time from your team, establish a B&P cost limit and a cost-sharing arrangement with the prime before you start',
                'Subcontracting to competitors: ensure the prime cannot flow down your scope to another sub if you perform adequately',
              ],
            },
            {
              type: 'heading',
              text: 'When the Teaming Agreement Fails',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'Teaming agreements are not always enforced by courts. If a teaming agreement lacks specificity on workshare, courts have sometimes declined to enforce the general commitment language. The remedy is specific terms, not litigation. However, if a prime awards a contract without providing a sub its committed scope, remedies may include breach of contract claims for lost profits — but only if the workshare commitment was specific enough to calculate damages.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Never let a teaming agreement use the word "fair" or "equitable" in the workshare section — demand a specific percentage or CLIN-level dollar commitment. 2. Have a government contracts attorney review your first three teaming agreements; after that, you will recognize the standard language and know what to change. Budget $1,500–$3,000 per review. 3. Exclusivity is a negotiating chip — if a prime wants exclusive teaming, they should be prepared to offer a stronger workshare commitment and possibly a break-up fee if the team disbands without award.',
            },
          ],
        },
        // ── Lesson 4.3 ────────────────────────────────────────────────────
        {
          id: 'a2-m4-l3',
          title: 'Flow-Down Clauses — What Lands on Your Doorstep',
          estimatedMinutes: 24,
          content: [
            {
              type: 'paragraph',
              text: 'When a prime wins a government contract, they are required to flow down certain FAR and DFARS clauses to their subcontractors. These clauses impose on you the same obligations the prime has to the government — quality system requirements, cybersecurity standards, conflict of interest restrictions, and cost accounting requirements. Failure to comply with flow-down clauses is a breach of your subcontract and can expose the prime to government liability, which they will try to recover from you.',
            },
            {
              type: 'heading',
              text: 'Mandatory DFARS Flow-Downs',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DFARS 252.244-7001 (Contractor Purchasing System Administration) and DFARS Appendix I provide guidance on which clauses must be flowed down. The following are the mandatory flow-downs most frequently impactful for small subcontractors:',
            },
            {
              type: 'table',
              headers: ['Clause', 'Subject', 'Impact on Sub'],
              rows: [
                ['DFARS 252.204-7012', 'Cyber Incident Reporting / NIST 800-171', 'Must implement NIST 800-171 controls and have a System Security Plan; 72-hr incident reporting'],
                ['DFARS 252.204-7020', 'NIST SP 800-171 Assessment', 'Must have a current SPRS score and provide it to prime on request'],
                ['FAR 52.219-8', 'Utilization of Small Business Concerns', 'Prime\'s subcontracting plan goals may require you to demonstrate small business use in your own supply chain'],
                ['DFARS 252.225-7001', 'Buy American Act', 'Applies to items you procure and deliver under the subcontract'],
                ['DFARS 252.246-7007', 'Counterfeit Electronic Parts', 'Must have a counterfeit avoidance program if you use EEE components'],
                ['FAR 52.222-26', 'Equal Opportunity', 'Flows down to subs of any size'],
                ['DFARS 252.227-7013 / 7014', 'Technical Data / Software Rights', 'Prime\'s data rights obligations flow to sub; critical for IP management'],
                ['FAR 52.203-13', 'Contractor Code of Business Ethics', 'Requires internal controls and disclosure program (applies to subs over $6M with >120 day performance period)'],
              ],
            },
            {
              type: 'heading',
              text: 'The Cybersecurity Flow-Down: CMMC and NIST 800-171',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'DFARS 252.204-7012 has been in effect since 2017 and requires all contractors handling Covered Defense Information (CDI) or Controlled Unclassified Information (CUI) to implement NIST SP 800-171. The Cybersecurity Maturity Model Certification (CMMC) framework (CMMC 2.0 as of this writing) builds on 800-171 and will require third-party assessment for many defense contracts. Note: CMMC implementation is still rolling out; verify current requirements at acq.osd.mil/cmmc.',
            },
            {
              type: 'paragraph',
              text: 'The SPRS (Supplier Performance Risk System) score is derived from your self-assessment of your NIST 800-171 compliance. Primes are required to check your SPRS score before awarding subcontracts on covered contracts. A score of -203 (fully non-compliant) versus 110 (fully compliant) is visible to the prime and can disqualify you from subcontracting on sensitive programs.',
            },
            {
              type: 'callout',
              variant: 'warning',
              title: 'CUI Handling: The Contamination Problem',
              text: 'Controlled Unclassified Information received from a prime must be handled under the NIST 800-171 framework. If you store CUI on a commercial cloud service (e.g., standard Google Drive, Dropbox, or consumer Office 365), you are likely out of compliance. DFARS 252.204-7012 requires that cloud services used to process, store, or transmit CUI meet FedRAMP Moderate requirements at minimum. Microsoft 365 GCC is compliant; consumer Office 365 is not.',
            },
            {
              type: 'heading',
              text: 'Quality System Flow-Downs',
              level: 2,
            },
            {
              type: 'paragraph',
              text: 'On defense hardware contracts, primes routinely flow down AS9100 (aerospace quality management), MIL-STD-1520 (corrective action), MIL-HDBK-1991 (soldering), and program-specific quality requirements. These are not negotiable if they are in the subcontract. Ensure your quality management system is documented well enough to demonstrate compliance — and that you can survive a prime\'s supplier audit, which may be triggered by any quality escape.',
            },
            {
              type: 'list',
              items: [
                'AS9100D certification is required for most aerospace and defense electronics manufacturing subcontractors above $500K annual sub revenue',
                'NADCAP approval is required for special processes (heat treating, welding, NDT, chemical processing) on many defense programs',
                'ITAR registration (State Department, Directorate of Defense Trade Controls) is required if you handle technical data or hardware controlled under the International Traffic in Arms Regulations',
                'EAR compliance (Commerce Department, Bureau of Industry and Security) applies to dual-use items exported or re-exported under the Export Administration Regulations',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. Before signing your first subcontract, have a compliance attorney review the flow-down clause list and identify any you cannot currently satisfy — renegotiate or build a compliance plan before you are in breach. 2. Your SPRS score is visible to every prime you want to work with — do your NIST 800-171 self-assessment and enter an accurate score in SPRS before you start prime BD outreach. A score of -203 with no plan is a conversation-stopper. 3. ITAR registration ($2,250/year, State Department) is a prerequisite for most defense hardware work — do not wait for a subcontract that requires it to trigger the registration process.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'a2-m4-q1',
          type: 'multiple-choice',
          question: 'What database should a small business search first to identify which prime contractors are winning work in their technical domain?',
          options: [
            'SAM.gov entity registration database',
            'USASpending.gov contract awards database',
            'DCAA Audit Reports database',
            'CAGE code database at cage.dla.mil',
          ],
          correctIndex: 1,
          explanation: 'USASpending.gov provides public data on federal contract awards including prime contractor, award value, NAICS code, and agency. This is the primary tool for identifying which primes are active in your domain and which agencies are funding the work.',
        },
        {
          id: 'a2-m4-q2',
          type: 'multiple-choice',
          question: 'A teaming agreement states the sub will receive "a fair and equitable share of the work." What is the primary problem with this language?',
          options: [
            'It is illegal under FAR to have unspecified workshare',
            'It gives the prime full discretion on workshare and cannot be enforced for a specific dollar amount',
            'It requires SBA approval for any 8(a) participant',
            'It automatically converts the relationship to a joint venture',
          ],
          correctIndex: 1,
          explanation: '"Fair and equitable" is vague language that courts have declined to enforce as a specific workshare commitment. Without a percentage or CLIN-level dollar commitment, the sub has no enforceable claim to specific work scope even after contributing its technical approach to a winning proposal.',
        },
        {
          id: 'a2-m4-q3',
          type: 'multiple-choice',
          question: 'DFARS 252.204-7012 requires cloud services used to process CUI to meet which minimum federal security standard?',
          options: [
            'SOC 2 Type II',
            'ISO 27001',
            'FedRAMP Moderate',
            'CMMC Level 1',
          ],
          correctIndex: 2,
          explanation: 'DFARS 252.204-7012 requires that cloud services used to process, store, or transmit covered defense information (CDI/CUI) meet FedRAMP Moderate requirements at minimum. Consumer cloud services that do not have FedRAMP Moderate authorization are non-compliant.',
        },
        {
          id: 'a2-m4-q4',
          type: 'true-false',
          question: 'A prime contractor\'s DFARS cybersecurity obligations under 252.204-7012 do not need to be flowed down to subcontractors who handle CUI.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'DFARS 252.204-7012 explicitly requires flow-down to subcontractors at all tiers that handle covered defense information (CUI). The prime is responsible for ensuring its subcontractors comply, and failure of the sub to comply can create liability for the prime.',
        },
        {
          id: 'a2-m4-q5',
          type: 'multiple-choice',
          question: 'What role at a large prime contractor is specifically responsible for connecting small businesses to subcontracting opportunities and whose performance is measured by small business goal achievement?',
          options: [
            'Program Manager',
            'Contracts Administrator',
            'Small Business Liaison Officer (SBLO)',
            'Quality Management Representative',
          ],
          correctIndex: 2,
          explanation: 'The Small Business Liaison Officer (SBLO) exists at large primes because federal regulations require them. Their job is to implement the prime\'s small business subcontracting plan and connect qualifying small businesses to relevant subcontracting opportunities. They are a high-value contact for small business BD.',
        },
        {
          id: 'a2-m4-q6',
          type: 'multiple-choice',
          question: 'ITAR registration with the State Department is required for contractors who:',
          options: [
            'Have a cost-plus contract above $2 million',
            'Handle technical data or hardware controlled under the International Traffic in Arms Regulations',
            'Have more than 50 employees working on defense programs',
            'Subcontract more than 50% of their prime contract value',
          ],
          correctIndex: 1,
          explanation: 'ITAR registration ($2,250/year) is required for any company that manufactures, exports, or brokers defense articles or services controlled under the ITAR (22 CFR Parts 120-130), including handling technical data for controlled items. It is not triggered by contract value or employee count.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MODULE 5 — Capstone: Quiz & Simulation
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'a2-m5',
      number: 5,
      title: 'Capstone: Quiz & Simulation',
      description:
        'Apply the course concepts in a realistic scenario-based simulation and complete the capstone assessment. The simulation presents a defense contract award decision with real business risk, compliance, and financial trade-offs.',
      estimatedMinutes: 45,
      learningObjectives: [
        'Apply contract type risk analysis to a real business decision',
        'Identify compliance gaps that would affect contract performance',
        'Structure a teaming arrangement that protects business interests',
        'Evaluate a contract award against key risk criteria',
      ],
      lessons: [
        {
          id: 'a2-m5-l1',
          title: 'Capstone Scenario: The Meridian Avionics Decision',
          estimatedMinutes: 10,
          content: [
            {
              type: 'paragraph',
              text: 'You are the CEO of Meridian Avionics LLC, a 3-year-old company with $4.2M in annual revenue, an AS9100D certification, and two production subcontracts with a regional defense integrator. Your primary NAICS code is 336419 (Other Aircraft Parts & Equipment). You have an active SAM.gov registration and a CAGE code, but no prior cost-plus contract history and no DCAA-approved accounting system.',
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'The Opportunity',
              text: 'A major prime (Apex Defense Systems) has approached you to join their team on a DARPA-funded development program. The potential subcontract is CPFF, estimated at $3.8M over 24 months, for development and qualification of a ruggedized power conversion unit. The prime wants to submit the proposal in 8 weeks. They have sent you a teaming agreement to sign.',
            },
            {
              type: 'heading',
              text: 'What You Have — and What You Don\'t',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'Assets: AS9100D, CAGE code, SAM registration, experienced engineering team, 2 production sub references',
                'Gap 1: No DCAA-adequate accounting system — currently running QuickBooks with no job-cost segregation',
                'Gap 2: No NIST SP 800-171 System Security Plan and no SPRS score submitted',
                'Gap 3: No ITAR registration (the power conversion unit contains EAR99 components but the program involves export-controlled technical data)',
                'Gap 4: The teaming agreement has no workshare percentage, includes an exclusivity clause, and contains a clause granting Apex unlimited data rights in all technical data developed under the subcontract',
              ],
            },
            {
              type: 'heading',
              text: 'The Simulation',
              level: 3,
            },
            {
              type: 'paragraph',
              text: 'The simulation below places you in the decision seat. You will work through the accounting system gap assessment, the teaming agreement negotiation, the compliance pre-award checklist, and the go/no-go decision. Each decision has financial and legal consequences modeled in the simulation engine.',
            },
            {
              type: 'simulation',
              simulationId: 'defense-contract-risk',
              title: 'Meridian Avionics: Contract Award Decision',
              description: 'Navigate the Apex Defense Systems teaming and subcontract decision as CEO of Meridian Avionics. Assess gaps, negotiate terms, and decide whether — and how — to accept this CPFF subcontract. Your decisions will be evaluated against real-world compliance requirements and business risk criteria.',
            },
            {
              type: 'callout',
              variant: 'tip',
              title: 'What This Means for Your Business',
              text: '1. The most dangerous contract is the one that looks perfect — a large opportunity with a credible prime, in your technical domain — that has three structural problems you accept because you are excited about the revenue. The simulation is designed to replicate exactly this dynamic. 2. Eight weeks is not enough time to get a DCAA-adequate accounting system, but it may be enough time to start one and have a credible plan to present to the prime and to DCAA. The question is whether Apex will accept a go-forward plan. 3. The data rights clause is often the most expensive clause in a teaming agreement for a technology company — protect your background IP before you put your technical approach in a proposal.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'a2-m5-q1',
          type: 'multiple-choice',
          question: 'Meridian Avionics has no DCAA-approved accounting system. If they accept the CPFF subcontract and bill costs, what is the primary compliance risk?',
          options: [
            'The contract will be automatically terminated for convenience',
            'Billed costs may be questioned and disallowed if the accounting system is found inadequate in a pre-award or post-award audit',
            'The prime will be required to self-perform the work',
            'The SAM.gov registration will be suspended',
          ],
          correctIndex: 1,
          explanation: 'Without a DCAA-adequate accounting system, cost charges on a CPFF contract are at risk of being questioned in an audit. Questioned costs can be disallowed, requiring repayment with interest. The accounting system inadequacy also exposes the contractor to payment withholds under DFARS 252.242-7005.',
        },
        {
          id: 'a2-m5-q2',
          type: 'multiple-choice',
          question: 'The teaming agreement grants Apex "unlimited data rights in all technical data developed under the subcontract." What should Meridian negotiate instead?',
          options: [
            'No data rights of any kind for Apex',
            'A limited license for Apex to use the data in the specific prime contract system, with Meridian retaining ownership',
            'Transfer of all IP to a joint venture entity',
            'A 5-year exclusive license with a buyout option',
          ],
          correctIndex: 1,
          explanation: 'A limited license tied to the specific prime contract use case is the appropriate protection. Unlimited data rights would allow Apex to use, reproduce, and release Meridian\'s technology for any purpose, destroying the competitive value of Meridian\'s independent development investment.',
        },
        {
          id: 'a2-m5-q3',
          type: 'multiple-choice',
          question: 'Meridian has no ITAR registration but the program involves export-controlled technical data. What must happen before Meridian can legally receive this data from Apex?',
          options: [
            'Meridian must register with DDTC (State Department) and obtain appropriate authorizations before receiving ITAR-controlled technical data',
            'Meridian can receive the data if they sign a non-disclosure agreement with Apex',
            'No registration is needed if the data stays within the United States',
            'ITAR only applies to hardware shipments, not technical data',
          ],
          correctIndex: 0,
          explanation: 'ITAR controls apply to technical data, not just hardware. Receiving export-controlled technical data from Apex without proper DDTC registration and potentially a license or exemption would be an ITAR violation by Meridian. Registration with DDTC is a prerequisite; some data transfers require a specific license.',
        },
        {
          id: 'a2-m5-q4',
          type: 'true-false',
          question: 'Under a CPFF subcontract, Meridian\'s fee is limited to the fixed percentage negotiated at award — being more efficient than planned does not increase the total fee earned.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'This is true. The fee in a CPFF contract is fixed at award as a dollar amount (typically calculated as a percentage of estimated cost). If Meridian performs more efficiently than planned and costs come in below estimate, the fee stays the same in absolute dollars. The effective margin percentage increases, but total fee earned does not.',
        },
        {
          id: 'a2-m5-q5',
          type: 'multiple-choice',
          question: 'The Apex teaming agreement has an exclusivity clause and no workshare percentage. What is the minimum Meridian should demand before signing?',
          options: [
            'A non-compete provision protecting Meridian\'s customer relationships',
            'A specific workshare percentage or CLIN-level dollar commitment, and a cap on exclusivity duration tied to the proposal period only',
            'A guaranteed cost-plus conversion of all FFP task orders',
            'Shared ownership of all technical data produced',
          ],
          correctIndex: 1,
          explanation: 'Without a specific workshare commitment, Meridian could contribute its technical approach to a winning proposal and receive nothing. Unlimited exclusivity prevents Meridian from teaming with the eventual winner if Apex loses. The minimum acceptable terms are a specific workshare commitment and time-limited exclusivity covering only the proposal phase.',
        },
        {
          id: 'a2-m5-q6',
          type: 'multiple-choice',
          question: 'Meridian has 8 weeks before proposal submission and no NIST SP 800-171 System Security Plan. What is the most defensible course of action for cyber compliance?',
          options: [
            'Submit the proposal without addressing the cyber gap — primes rarely check SPRS scores',
            'Complete a NIST 800-171 self-assessment, submit an SPRS score (even if low), and provide Apex with a written System Security Plan and Plan of Action & Milestones (POA&M)',
            'Outsource all IT systems to a managed service provider and claim the MSP is responsible',
            'Apply for a CMMC Level 2 certification — it takes 2 weeks and resolves all requirements',
          ],
          correctIndex: 1,
          explanation: 'Completing a self-assessment, entering an SPRS score, and providing a SSP with POA&M demonstrates good faith compliance and gives Apex defensible evidence that Meridian is aware of and managing the requirement. Primes are increasingly checking SPRS scores before subcontract award. CMMC Level 2 certification takes 6–18 months and is not a 2-week process.',
        },
        {
          id: 'a2-m5-q7',
          type: 'multiple-choice',
          question: 'If Meridian accepts the CPFF subcontract and Apex is later terminated for convenience by the government, what happens to Meridian\'s subcontract?',
          options: [
            'Meridian\'s subcontract continues under the original terms because T4C only affects the prime',
            'Meridian receives full anticipated profits for all remaining unperformed work',
            'Meridian\'s subcontract may also be terminated, and recovery is limited to costs incurred and reasonable profit on completed work',
            'Meridian has no rights and receives nothing after a T4C',
          ],
          correctIndex: 2,
          explanation: 'T4C flows down to subcontracts. When a prime is terminated for convenience, they typically terminate subcontracts accordingly. Meridian\'s recovery — like the prime\'s — is limited to costs incurred, value of completed work, and reasonable profit on completed work. Anticipated profits on unperformed work are not recoverable.',
        },
        {
          id: 'a2-m5-q8',
          type: 'multiple-choice',
          question: 'Which combination of actions would best position Meridian to accept the Apex subcontract in 8 weeks while managing compliance risk?',
          options: [
            'Sign the teaming agreement as-is, accept the CPFF contract, and address compliance issues after award',
            'Decline the opportunity until all compliance gaps are fully resolved',
            'Negotiate the teaming agreement (workshare, IP, exclusivity), initiate QuickBooks reconfiguration for DCAA adequacy with a consultant, complete NIST 800-171 self-assessment, and file for ITAR registration — while communicating a compliance roadmap to Apex',
            'Accept only if Apex converts the contract to FFP to avoid accounting system requirements',
          ],
          correctIndex: 2,
          explanation: 'The best path is parallel action on all gaps while communicating transparently with Apex. Signing the agreement as-is creates legal exposure. Declining forfeits a significant opportunity that is within reach of resolution. FFP conversion would not solve the ITAR or cyber gaps and is likely unacceptable to Apex for development work. The negotiated, compliance-roadmap approach is the operational response of an experienced defense CEO.',
        },
      ],
    },
  ],
};
