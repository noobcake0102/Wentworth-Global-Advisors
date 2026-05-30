import type { Course } from '../../types/course';

export const crmErpSystemsCourse: Course = {
  id: 'crm-erp-systems',
  track: 'data-management',
  title: 'CRM & ERP Systems',
  subtitle: 'Enterprise Systems for Business Operations',
  description:
    'Understand the enterprise software that runs modern organizations. From CRM platforms that manage customer relationships to ERP systems that coordinate finance, supply chain, and HR, this course covers the full landscape of enterprise systems.',
  status: 'available',
  estimatedHours: 5,
  color: '#e85d75',
  icon: '🏢',
  modules: [
    {
      id: 'ce-m1',
      number: 1,
      title: 'Introduction to Enterprise Systems',
      description:
        'Understand what CRM and ERP systems are, how enterprise software evolved, why it matters for modern organizations, and how these systems fit into the broader integration landscape.',
      estimatedMinutes: 50,
      learningObjectives: [
        'Define CRM and ERP and explain the business problems they solve',
        'Describe the historical evolution of enterprise software from the 1960s to today',
        'Explain how CRM and ERP systems differ in their primary focus',
        'Identify the key players in the enterprise software market',
        'Describe the role of integrations in connecting enterprise systems',
      ],
      lessons: [
        {
          id: 'ce-m1-l1',
          title: 'What are CRM and ERP Systems?',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Enterprise software refers to software designed to address the needs of large organizations rather than individual users. Two categories dominate: CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning). Together, they form the operational backbone of most mid-to-large organizations, managing the data and workflows that run the business day-to-day.',
            },
            {
              type: 'heading' as const,
              text: 'CRM: Managing Customer Relationships',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'A CRM system tracks every interaction a company has with its current and potential customers — leads, contacts, sales opportunities, support cases, and marketing communications. The goal is to give every customer-facing employee a complete, shared view of the customer, eliminating information silos between sales, marketing, and service teams.',
            },
            {
              type: 'heading' as const,
              text: 'ERP: Managing Business Resources',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'An ERP system is an integrated suite of applications that manages core business processes — finance, accounting, supply chain, inventory, manufacturing, HR, and payroll — within a single platform. The defining characteristic of ERP is integration: when a purchase order is created, inventory levels update automatically, financial records adjust, and the vendor payment workflow triggers — all in one system.',
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'CRM vs. ERP at a Glance',
              text: 'CRM faces outward — it manages the company\'s relationships with customers and prospects. ERP faces inward — it manages the company\'s internal resources and processes. A complete picture of a business requires both: ERP tells you what you have and what it costs; CRM tells you who is buying it and why.',
            },
          ],
        },
        {
          id: 'ce-m1-l2',
          title: 'History of Enterprise Software',
          estimatedMinutes: 12,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Enterprise software did not emerge fully formed. It evolved over six decades, tracking the development of computing power and the changing needs of organizations as they scaled and globalized.',
            },
            {
              type: 'table' as const,
              headers: ['Era', 'Technology', 'What Changed'],
              rows: [
                ['1960s', 'MRP (Material Requirements Planning)', 'First computerized inventory and production scheduling'],
                ['1970s–80s', 'MRP II', 'Extended MRP to include manufacturing and financial planning'],
                ['1990s', 'ERP', 'Integrated all business functions in one database; SAP R/3, Oracle Financials emerge'],
                ['Late 1990s', 'CRM emerges', 'Siebel Systems pioneered sales force automation; Salesforce launches 1999'],
                ['2000s', 'SaaS revolution', 'Salesforce proved cloud CRM; NetSuite, Workday emerge as cloud ERP'],
                ['2010s', 'Mobile + platform', 'CRM/ERP accessible on mobile; app ecosystems and API-first architectures'],
                ['2020s', 'AI integration', 'Generative AI built into workflows; predictive lead scoring, automated AP processing'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'Salesforce\'s 1999 Revolution',
              text: 'When Marc Benioff founded Salesforce in 1999 with the motto "No Software," it was considered heretical. Enterprise software was sold as expensive on-premise packages. Salesforce proved that CRM could be delivered over the internet as a subscription service — launching the SaaS revolution that eventually transformed the entire enterprise software industry.',
            },
          ],
        },
        {
          id: 'ce-m1-l3',
          title: 'The Integration Landscape',
          estimatedMinutes: 12,
          content: [
            {
              type: 'paragraph' as const,
              text: 'No enterprise system is an island. A typical mid-size company might have a Salesforce CRM, a NetSuite ERP, a Workday HRIS, a Shopify e-commerce platform, and dozens of other SaaS tools — all generating business-critical data. The integration landscape refers to how these systems connect and share data.',
            },
            {
              type: 'list' as const,
              items: [
                'Point-to-point integrations: Direct API connections between two specific systems — simple but creates a brittle web at scale',
                'iPaaS (Integration Platform as a Service): Middleware platforms like MuleSoft, Boomi, and Zapier that manage connections between many systems',
                'ESB (Enterprise Service Bus): Older on-premise middleware architecture for routing messages between systems',
                'Native connectors: CRM/ERP vendors provide pre-built connectors to popular adjacent systems',
                'Data warehouse: Centralizing data from all systems into an analytics layer, separate from operational integration',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Integration Sprawl',
              text: 'Organizations that add SaaS tools without integration planning end up with data silos — customer data in CRM, financial data in ERP, HR data in HRIS — with no unified view of the business. Integration projects are frequently cited as the most expensive and risky aspect of enterprise software implementations.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'ce-m1-q1',
          type: 'multiple-choice' as const,
          question: 'What is the primary distinguishing characteristic of an ERP system compared to standalone business applications?',
          options: [
            'It focuses exclusively on customer relationships',
            'It integrates core business processes (finance, supply chain, HR) within a single platform with a shared database',
            'It is only available as a cloud-based subscription service',
            'It replaces the need for CRM systems',
          ],
          correctIndex: 1,
          explanation: 'The defining characteristic of ERP is integration — it brings finance, supply chain, HR, manufacturing, and other functions into one platform with a shared database, so actions in one module automatically affect related records in others.',
        },
        {
          id: 'ce-m1-q2',
          type: 'true-false' as const,
          question: 'Salesforce was founded as an on-premise software company and later moved to cloud delivery.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Salesforce was founded in 1999 with "No Software" as its motto, explicitly as a cloud-first, SaaS CRM — revolutionary for the time. It pioneered the SaaS delivery model in enterprise software.',
        },
        {
          id: 'ce-m1-q3',
          type: 'multiple-choice' as const,
          question: 'What does CRM primarily manage?',
          options: [
            'Manufacturing schedules and inventory levels',
            'Employee payroll and benefits',
            'Interactions with current and potential customers, including leads, opportunities, and service cases',
            'Financial accounting and general ledger entries',
          ],
          correctIndex: 2,
          explanation: 'CRM (Customer Relationship Management) systems manage a company\'s interactions with customers and prospects — contacts, accounts, sales pipeline, support cases, and marketing communications.',
        },
        {
          id: 'ce-m1-q4',
          type: 'multiple-choice' as const,
          question: 'What is an iPaaS platform?',
          options: [
            'An Apple-exclusive enterprise software suite',
            'A middleware platform that manages API connections and data flow between multiple enterprise systems',
            'A type of on-premise ERP system',
            'A customer portal for self-service support',
          ],
          correctIndex: 1,
          explanation: 'iPaaS (Integration Platform as a Service) — exemplified by tools like MuleSoft, Boomi, and Zapier — provides middleware to manage connections and data flows between multiple enterprise systems, reducing point-to-point integration complexity.',
        },
        {
          id: 'ce-m1-q5',
          type: 'true-false' as const,
          question: 'ERP systems originated in the 1990s and had no predecessors.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. ERP evolved from MRP (Material Requirements Planning) in the 1960s and MRP II in the 1970s–80s. The term "ERP" and fully integrated systems emerged in the 1990s, but the lineage stretches back decades.',
        },
      ],
    },
    {
      id: 'ce-m2',
      number: 2,
      title: 'CRM Fundamentals',
      description:
        'Explore how CRM systems manage the customer lifecycle, the core data objects in CRM platforms, pipeline management, and the capabilities of leading platforms like Salesforce and HubSpot.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Describe the customer lifecycle and how CRM supports each stage',
        'Explain the core CRM data objects: leads, contacts, accounts, and opportunities',
        'Define pipeline stages and explain how they enable sales forecasting',
        'Compare the positioning and capabilities of Salesforce and HubSpot',
        'Identify key CRM metrics used to measure sales team performance',
      ],
      lessons: [
        {
          id: 'ce-m2-l1',
          title: 'The Customer Lifecycle & Core Objects',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Every CRM system is built around a shared data model that tracks the customer lifecycle from first awareness through purchase and ongoing relationship. Understanding the core data objects and how they relate is fundamental to using any CRM effectively.',
            },
            {
              type: 'heading' as const,
              text: 'Core CRM Data Objects',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Object', 'Definition', 'Example'],
              rows: [
                ['Lead', 'An unqualified potential prospect who has shown interest but hasn\'t been vetted', 'Someone who downloaded a whitepaper from your website'],
                ['Contact', 'A qualified individual associated with an account — a real person in a relationship with your company', 'The VP of Engineering at a target company'],
                ['Account', 'A company or organization that is a customer or prospect', 'Acme Corporation'],
                ['Opportunity', 'A qualified sales deal in progress, with a potential value and close date', '$50K contract renewal expected in Q4'],
                ['Case', 'A customer service or support issue', 'A product bug reported by a customer'],
                ['Activity', 'A logged interaction — call, email, meeting, task', 'Demo call with the prospect on March 15'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Lead Conversion',
              text: 'When a lead is deemed qualified — meaning they fit your ideal customer profile and have a genuine need — they are "converted" into a Contact associated with an Account, and optionally an Opportunity is created. This conversion is a key transition point that triggers handoffs between marketing and sales teams.',
            },
          ],
        },
        {
          id: 'ce-m2-l2',
          title: 'Pipeline Stages & Salesforce/HubSpot',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A sales pipeline represents all the deals a sales team is working on, organized by their stage in the buying process. Pipeline stages vary by organization but typically reflect the progression from initial discovery to closed deal. The pipeline is the central tool for sales management and revenue forecasting.',
            },
            {
              type: 'heading' as const,
              text: 'Typical Pipeline Stages',
              level: 2 as const,
            },
            {
              type: 'ordered-list' as const,
              items: [
                'Prospecting / Discovery: Initial contact; understanding if there is a fit',
                'Qualification: Confirming budget, authority, need, and timeline (BANT)',
                'Demo / Evaluation: Presenting the solution; prospect evaluates against alternatives',
                'Proposal: Formal pricing and scope submitted to the prospect',
                'Negotiation: Discussing terms, pricing, legal review',
                'Closed Won: Deal signed — customer!',
                'Closed Lost: Prospect chose a competitor or decided not to purchase',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Salesforce vs. HubSpot',
              text: 'Salesforce is the enterprise market leader — highly customizable, deeply powerful, and accordingly complex and expensive. HubSpot is a strong choice for SMBs and mid-market companies, particularly those that want CRM tightly integrated with marketing automation. HubSpot is generally faster to implement and easier to use; Salesforce is more powerful for complex enterprise needs.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Win Rate',
                  definition: 'Percentage of opportunities that result in a closed-won deal. Win Rate = Closed Won / (Closed Won + Closed Lost).',
                },
                {
                  term: 'Average Deal Size',
                  definition: 'The average revenue value of closed-won opportunities. Helps forecast revenue and identify trends in deal composition.',
                },
                {
                  term: 'Sales Velocity',
                  definition: 'How quickly revenue is generated: (# Opportunities × Win Rate × Average Deal Size) / Sales Cycle Length.',
                },
              ],
            },
          ],
        },
        {
          id: 'ce-m2-l3',
          title: 'CRM Reporting & Key Metrics',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A CRM system is only as valuable as the decisions it enables. Well-configured CRM reporting gives sales leaders real-time visibility into pipeline health, team performance, and revenue forecasts. Poor CRM hygiene — stale data, incomplete records, inconsistent stage usage — makes reports meaningless.',
            },
            {
              type: 'heading' as const,
              text: 'Essential CRM Reports',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Pipeline by stage: Total value of opportunities in each stage — identifies bottlenecks',
                'Forecast: Weighted revenue expected to close this quarter, based on stage probabilities',
                'Lead source analysis: Which marketing channels generate the most qualified leads?',
                'Win/loss analysis: Why are deals won or lost? Against which competitors?',
                'Activity reports: Are reps logging calls and emails? Is activity correlated with outcomes?',
                'Sales rep performance: Individual rep pipeline, win rates, quota attainment',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'CRM Adoption is the Hardest Part',
              text: 'The biggest CRM failure mode is not technology — it\'s adoption. Sales reps view data entry as overhead, not benefit. CRM implementation must answer "what\'s in it for me?" for reps: better forecasting for their own pipeline, less time on status update meetings, commissions paid accurately. Leaders must inspect the CRM data themselves to signal that it matters.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'ce-m2-q1',
          type: 'multiple-choice' as const,
          question: 'In CRM terminology, what is the difference between a Lead and a Contact?',
          options: [
            'A lead is a company; a contact is an individual',
            'A lead is unqualified (not yet vetted); a contact is a qualified individual associated with an account',
            'A lead is an existing customer; a contact is a new prospect',
            'There is no meaningful difference — they are interchangeable terms',
          ],
          correctIndex: 1,
          explanation: 'A Lead is an unqualified potential prospect who has shown some interest but hasn\'t been vetted yet. When qualified, a lead is "converted" into a Contact (person) associated with an Account (company), often with an Opportunity (deal) created.',
        },
        {
          id: 'ce-m2-q2',
          type: 'true-false' as const,
          question: 'In a CRM pipeline, "Closed Lost" means the deal is still being actively pursued.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. "Closed Lost" is a final stage indicating that the prospect decided not to purchase or chose a competitor. The deal is over. It is tracked (not deleted) for win/loss analysis and future re-engagement.',
        },
        {
          id: 'ce-m2-q3',
          type: 'multiple-choice' as const,
          question: 'BANT qualification stands for:',
          options: [
            'Budget, Activity, Needs, Timeline',
            'Budget, Authority, Need, Timeline',
            'Business, Account, Negotiation, Terms',
            'Buyers, Accounts, Nurturing, Targets',
          ],
          correctIndex: 1,
          explanation: 'BANT is a classic sales qualification framework: Budget (can they afford it?), Authority (do they have decision power?), Need (do they have the problem you solve?), and Timeline (when do they want to implement?).',
        },
        {
          id: 'ce-m2-q4',
          type: 'multiple-choice' as const,
          question: 'Which CRM platform is generally better suited for a small to mid-size company wanting CRM tightly integrated with marketing automation?',
          options: ['SAP CRM', 'Oracle Siebel', 'HubSpot', 'Microsoft Dynamics 365'],
          correctIndex: 2,
          explanation: 'HubSpot is specifically designed for SMB and mid-market companies and deeply integrates CRM with marketing automation tools. It is faster to implement and easier to use than enterprise platforms like Salesforce, making it ideal for smaller, growth-oriented teams.',
        },
        {
          id: 'ce-m2-q5',
          type: 'true-false' as const,
          question: 'The primary reason CRM implementations fail is poor technology selection.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. CRM failures are most commonly attributed to poor user adoption, not technology. Sales reps who don\'t enter data consistently render the system useless regardless of how sophisticated the platform is. Change management and demonstrating value to users is the critical success factor.',
        },
      ],
    },
    {
      id: 'ce-m3',
      number: 3,
      title: 'ERP Fundamentals',
      description:
        'Learn how ERP systems organize core business functions into integrated modules, understand master data concepts, and survey leading platforms including SAP, Oracle, and NetSuite.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Identify the core modules found in an ERP system',
        'Explain how the integrated nature of ERP creates a single source of truth',
        'Describe master data and why its quality is critical to ERP success',
        'Compare SAP, Oracle ERP Cloud, and NetSuite as ERP platforms',
        'Explain what a chart of accounts is and why it matters for financial reporting',
      ],
      lessons: [
        {
          id: 'ce-m3-l1',
          title: 'ERP Modules: Finance, SCM, HR',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'ERP systems are organized into functional modules, each managing a specific domain of business operations. The power of ERP comes from integration between modules — a transaction in one module automatically updates records in related modules, eliminating the need to manually re-enter data across systems.',
            },
            {
              type: 'table' as const,
              headers: ['Module', 'Key Functions'],
              rows: [
                ['Financial Management', 'General ledger, accounts payable/receivable, fixed assets, financial reporting, budgeting'],
                ['Supply Chain Management', 'Procurement, purchase orders, vendor management, inventory tracking, warehouse management'],
                ['Manufacturing', 'Bills of materials, production scheduling, work orders, quality control'],
                ['Human Resources', 'Employee records, organizational structure, compliance, benefits administration'],
                ['Payroll', 'Pay calculations, tax withholding, direct deposit, pay slips, regulatory filings'],
                ['Project Management', 'Project costing, resource allocation, time tracking, billing'],
                ['Sales Order Management', 'Customer orders, fulfillment, shipping, invoicing, returns'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'ERP Integration in Action',
              text: 'A customer places an order → Sales module creates a sales order. Warehouse management fulfills the order, updating inventory. Shipping triggers an invoice in accounts receivable. When the customer pays, cash is posted to the general ledger. The finance team sees real-time cash flow without any manual data entry. All from a single customer order.',
            },
          ],
        },
        {
          id: 'ce-m3-l2',
          title: 'Master Data & ERP Platforms',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Master data refers to the core business entities that all ERP transactions reference: customers, vendors, employees, products/items, and chart of accounts. Unlike transactional data (individual orders, payments, timesheets), master data changes infrequently and must be managed with exceptional care — errors in master data propagate through every transaction that references it.',
            },
            {
              type: 'heading' as const,
              text: 'Key Master Data Entities',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Customer master: Name, billing address, payment terms, credit limit, account manager',
                'Vendor master: Supplier name, payment terms, tax ID, banking details, approved products',
                'Item master / Product catalog: SKU, description, unit of measure, cost, price, lead time',
                'Employee master: Employee ID, job title, department, salary, manager, tax information',
                'Chart of accounts: The structured list of all general ledger accounts used in financial reporting',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'SAP vs. Oracle vs. NetSuite',
              text: 'SAP S/4HANA and Oracle ERP Cloud are enterprise-grade platforms for very large, complex organizations — powerful but requiring significant implementation resources. NetSuite (owned by Oracle) is a cloud ERP targeting mid-market companies, offering faster implementation and lower cost. Workday has become dominant for HR and financials in mid-to-large enterprises. The right choice depends heavily on company size, industry, and existing systems.',
            },
          ],
        },
        {
          id: 'ce-m3-l3',
          title: 'Financial Controls in ERP',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'One of ERP\'s most important functions is enforcing financial controls — the policies and procedures that ensure financial transactions are authorized, accurate, and auditable. Well-configured ERP systems make it difficult (not impossible) to commit financial fraud or make unauthorized payments.',
            },
            {
              type: 'heading' as const,
              text: 'Key Financial Controls',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Segregation of duties: The person who creates a vendor cannot also approve payments to that vendor',
                'Three-way match: Before paying an invoice, the system matches the purchase order, receiving record, and invoice',
                'Approval workflows: Purchases above thresholds require manager or finance approval before proceeding',
                'Audit trails: All changes to financial records are logged with user ID, timestamp, and before/after values',
                'Period close controls: Books are locked for closed accounting periods, preventing retroactive changes',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'The Chart of Accounts is the Foundation',
              text: 'The chart of accounts (COA) defines every financial category your business tracks. A poorly designed COA is one of the most expensive ERP mistakes — it shapes every financial report for years. Investing time in COA design upfront, with input from finance, accounting, and executive stakeholders, pays dividends for the lifetime of the system.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'ce-m3-q1',
          type: 'multiple-choice' as const,
          question: 'What is "master data" in the context of ERP systems?',
          options: [
            'Transaction records like individual invoices and purchase orders',
            'Core business entities (customers, vendors, products, employees) that all transactions reference',
            'System administrator configuration settings',
            'Archived historical data from legacy systems',
          ],
          correctIndex: 1,
          explanation: 'Master data represents the core, relatively stable business entities that transactions reference — customers, vendors, products, employees, and chart of accounts. High master data quality is critical because errors propagate through every transaction that references it.',
        },
        {
          id: 'ce-m3-q2',
          type: 'true-false' as const,
          question: 'Segregation of duties in ERP means the same person can both create vendor records and authorize payments to those vendors.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Segregation of duties is a key financial control that deliberately separates conflicting responsibilities. The person who creates a vendor should not also be able to approve payments to that vendor, preventing fraudulent vendor creation followed by unauthorized payments.',
        },
        {
          id: 'ce-m3-q3',
          type: 'multiple-choice' as const,
          question: 'What is a "three-way match" in accounts payable?',
          options: [
            'Matching data from three different ERP modules',
            'Validating that a purchase order, goods receipt, and vendor invoice all agree before paying',
            'Requiring three approvals for any payment above $10,000',
            'Matching records from three fiscal years for audit purposes',
          ],
          correctIndex: 1,
          explanation: 'A three-way match is an AP control: before paying a vendor invoice, the system verifies that the invoice matches the original purchase order (what was ordered) and the goods receipt (what was actually received). Discrepancies are flagged for review.',
        },
        {
          id: 'ce-m3-q4',
          type: 'multiple-choice' as const,
          question: 'Which ERP platform is generally best suited for a mid-market company seeking a cloud solution with faster implementation?',
          options: ['SAP S/4HANA', 'Oracle ERP Cloud', 'NetSuite', 'SAP ECC'],
          correctIndex: 2,
          explanation: 'NetSuite is Oracle\'s cloud ERP platform targeted at mid-market companies. It offers faster implementation, lower total cost, and simpler configuration than enterprise platforms like SAP S/4HANA or Oracle ERP Cloud, which are designed for large, complex global enterprises.',
        },
        {
          id: 'ce-m3-q5',
          type: 'true-false' as const,
          question: 'The chart of accounts can be easily redesigned years after ERP go-live without significant impact.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Redesigning the chart of accounts after go-live is extremely disruptive — it affects all historical reporting, every integration, every custom report, and requires significant testing and migration effort. Getting the COA right upfront is one of the most important ERP design decisions.',
        },
      ],
    },
    {
      id: 'ce-m4',
      number: 4,
      title: 'Data in CRM & ERP',
      description:
        'Understand how CRM and ERP systems structure data, the relationships between records, built-in reporting capabilities, and the KPIs and dashboards that drive operational decisions.',
      estimatedMinutes: 50,
      learningObjectives: [
        'Explain how records and relationships are structured in CRM and ERP systems',
        'Identify the key reporting capabilities built into enterprise platforms',
        'Define the KPIs most commonly tracked in CRM and ERP dashboards',
        'Understand the limitations of native reporting and when external BI tools are needed',
        'Describe how to assess data quality within an enterprise system',
      ],
      lessons: [
        {
          id: 'ce-m4-l1',
          title: 'Records, Relationships & Data Structure',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Enterprise systems organize data as records and relationships. A record is a single instance of an object — one customer, one invoice, one employee. Relationships link records together: an Account record links to many Contact records and many Opportunity records. Understanding this relational structure helps users navigate the system and analysts query it effectively.',
            },
            {
              type: 'heading' as const,
              text: 'Object Relationships in Salesforce CRM',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Account → Contacts (one Account has many Contacts)',
                'Account → Opportunities (one Account has many Opportunities)',
                'Opportunity → Activities (one Opportunity has many calls, emails, meetings)',
                'Contact → Cases (one Contact can have many support cases)',
                'Campaign → Leads (one Campaign generates many Leads)',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Custom Objects',
              text: 'Both Salesforce and most ERP platforms allow organizations to create custom objects — new record types beyond the standard set — and define custom fields on existing objects. This extensibility is how enterprises adapt standard platforms to their unique business processes. However, heavy customization increases upgrade complexity and maintenance cost.',
            },
          ],
        },
        {
          id: 'ce-m4-l2',
          title: 'KPIs, Dashboards & Reporting Limits',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'CRM and ERP systems include native reporting and dashboard capabilities designed for operational use — monitoring day-to-day performance metrics. These built-in tools are accessible without any external software and are used by operations managers, sales leaders, and finance teams on a daily basis.',
            },
            {
              type: 'heading' as const,
              text: 'Key CRM KPIs',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Pipeline value by stage: Total weighted revenue potential at each stage',
                'Win rate: Percentage of qualified opportunities that result in closed-won',
                'Average sales cycle: Days from opportunity creation to close',
                'Lead-to-opportunity conversion rate: Percentage of leads that become qualified opportunities',
                'Quota attainment: Each rep\'s actual vs. target revenue, expressed as a percentage',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Key ERP KPIs',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Days Sales Outstanding (DSO): Average days to collect payment after invoicing',
                'Days Payable Outstanding (DPO): Average days to pay vendors',
                'Inventory turnover: How many times inventory is sold/replaced in a period',
                'Operating cash flow: Cash generated from core business operations',
                'Budget vs. actual variance: Differences between planned and actual spend by department',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Limits of Native Reporting',
              text: 'Native CRM/ERP reports are excellent for operational questions within the system but struggle with cross-system analysis, complex multi-year trends, and blending operational data with external data. For strategic analytics, organizations typically export or sync data into a data warehouse and use a dedicated BI tool like Tableau or Power BI.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'ce-m4-q1',
          type: 'multiple-choice' as const,
          question: 'In Salesforce CRM, what is the relationship between Accounts and Contacts?',
          options: [
            'One Contact can have many Accounts',
            'One Account can have many Contacts',
            'Accounts and Contacts are the same type of record',
            'There is no relationship between Accounts and Contacts',
          ],
          correctIndex: 1,
          explanation: 'In Salesforce, one Account (a company) can have many Contacts (individuals who work at that company). This parent-child relationship is fundamental to the CRM data model.',
        },
        {
          id: 'ce-m4-q2',
          type: 'multiple-choice' as const,
          question: 'Days Sales Outstanding (DSO) measures:',
          options: [
            'The number of days inventory remains in the warehouse',
            'The average number of days from invoicing to receiving payment from customers',
            'The number of business days in a quarter',
            'How many days it takes to close a sales opportunity',
          ],
          correctIndex: 1,
          explanation: 'DSO (Days Sales Outstanding) measures the average time it takes to collect payment after an invoice is issued. A lower DSO means faster collections and better cash flow; a high or rising DSO may indicate collections problems.',
        },
        {
          id: 'ce-m4-q3',
          type: 'true-false' as const,
          question: 'Native CRM and ERP reporting tools are fully sufficient for all strategic analytics needs, eliminating the need for external BI tools.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Native reporting handles operational, within-system questions well, but struggles with cross-system analysis (blending CRM + ERP + other data), complex multi-year trend analysis, and custom visualizations. Most organizations use dedicated BI tools for strategic analytics.',
        },
        {
          id: 'ce-m4-q4',
          type: 'multiple-choice' as const,
          question: 'What is a "custom object" in a CRM or ERP platform?',
          options: [
            'A standard out-of-the-box record type like Account or Invoice',
            'A new record type created by the organization to track business-specific data not covered by standard objects',
            'A report that uses custom SQL queries',
            'A modified dashboard with custom colors',
          ],
          correctIndex: 1,
          explanation: 'Custom objects let organizations extend standard platforms by creating entirely new record types — like "Project" or "Event Registration" — beyond the built-in standard objects, allowing the platform to fit unique business processes.',
        },
        {
          id: 'ce-m4-q5',
          type: 'true-false' as const,
          question: 'Quota attainment measures each sales representative\'s actual revenue against their revenue target.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Quota attainment compares a sales rep\'s actual closed-won revenue to their assigned quota (target), expressed as a percentage. 100% means they hit their quota exactly; 120% means they exceeded it by 20%.',
        },
      ],
    },
    {
      id: 'ce-m5',
      number: 5,
      title: 'Implementation & Change Management',
      description:
        'Understand the phases of a CRM or ERP implementation project, data migration challenges, the critical role of user adoption, and the most common failure modes.',
      estimatedMinutes: 50,
      learningObjectives: [
        'Describe the typical phases of an enterprise system implementation project',
        'Explain the key challenges and risks of data migration',
        'Identify strategies to drive user adoption after go-live',
        'Describe the most common reasons CRM and ERP implementations fail',
        'Understand the role of training in successful enterprise software rollouts',
      ],
      lessons: [
        {
          id: 'ce-m5-l1',
          title: 'Implementation Phases & Data Migration',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Implementing a CRM or ERP system is a major business initiative, not just a technology project. Enterprise implementations routinely take 6–24 months, cost millions of dollars, and require significant participation from business stakeholders across the organization. The project phases are consistent across vendors and methodologies.',
            },
            {
              type: 'ordered-list' as const,
              items: [
                'Discovery & planning: Define scope, requirements, success criteria, and project team',
                'Design: Configure the system to match business processes; design integrations and custom objects',
                'Build: Configure the platform, develop customizations and integrations, build reports',
                'Data migration: Extract, clean, and load data from legacy systems into the new platform',
                'Testing: User acceptance testing (UAT) — business users validate the system meets requirements',
                'Training: Teach all end users how to operate the new system',
                'Go-live: Cutover from old system to new; hypercare support immediately post-launch',
                'Stabilization: Address post-go-live issues; optimize based on real-world usage',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Data Migration is Never Easy',
              text: 'Data migration is consistently one of the hardest parts of any implementation. Legacy systems contain decades of inconsistent, incomplete, and incorrectly formatted data. Migrating it requires extraction, extensive cleaning, transformation to the new schema, loading, and validation. Budget 30–40% of project time for data migration alone.',
            },
          ],
        },
        {
          id: 'ce-m5-l2',
          title: 'User Adoption & Common Failure Modes',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A beautifully implemented CRM or ERP is worthless if employees don\'t use it. User adoption is the most frequently cited challenge in enterprise software implementations. Systems succeed when they make users\' jobs easier; they fail when they feel like an overhead burden imposed by management.',
            },
            {
              type: 'heading' as const,
              text: 'Strategies to Drive Adoption',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Executive sponsorship: Senior leaders visibly using and endorsing the system signals its importance',
                'Champions program: Identify enthusiastic early adopters in each department as peer trainers',
                'Role-based training: Train each user on exactly what they need — not a generic overview',
                'Quick wins: Surface obvious benefits early (e.g., automated pipeline reports that replace manual spreadsheets)',
                'Measure and reinforce: Track adoption metrics; celebrate teams with high usage; coach laggards',
                'Process, not just technology: Re-examine business processes, not just which buttons to click',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'Common Failure Modes',
              text: 'The most common ERP/CRM implementation failures share consistent patterns: (1) Scope creep — requirements expanding mid-project until timelines and budgets collapse; (2) Under-resourced data migration — bad data migrated into the new system; (3) Insufficient training — users don\'t know how to use the system at go-live; (4) Lack of change management — business processes unchanged, new system bolted onto old habits; (5) Going live all at once — no phased approach, no fallback.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'ce-m5-q1',
          type: 'multiple-choice' as const,
          question: 'In a typical enterprise implementation project, what phase involves business users validating that the system meets their requirements?',
          options: ['Discovery', 'Build', 'User Acceptance Testing (UAT)', 'Go-live'],
          correctIndex: 2,
          explanation: 'User Acceptance Testing (UAT) is the phase where actual business users — not just IT — test the configured system against their requirements, validating it is ready for production use.',
        },
        {
          id: 'ce-m5-q2',
          type: 'true-false' as const,
          question: 'Data migration from legacy systems is typically straightforward because enterprise systems export data in standard, clean formats.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Legacy system data is almost invariably inconsistent, incomplete, and poorly formatted after years of manual entry and system changes. Data migration requires extensive extraction, cleaning, and transformation — typically consuming 30–40% of project effort.',
        },
        {
          id: 'ce-m5-q3',
          type: 'multiple-choice' as const,
          question: 'Which of the following is the most common primary reason enterprise software implementations fail?',
          options: [
            'The software vendor goes out of business',
            'Technical hardware limitations prevent installation',
            'Scope creep, poor change management, and insufficient user adoption',
            'Regulations prohibit the use of third-party software',
          ],
          correctIndex: 2,
          explanation: 'Enterprise software failures are predominantly people and process problems, not technology failures. Scope creep, inadequate change management, and poor user adoption are the most commonly cited causes — not the technology itself.',
        },
        {
          id: 'ce-m5-q4',
          type: 'multiple-choice' as const,
          question: 'What is a "champions program" in the context of enterprise software adoption?',
          options: [
            'A financial incentive program for the vendor\'s best salespeople',
            'Identifying enthusiastic early adopters within the business to serve as peer trainers and advocates',
            'A competition between departments for the highest system usage',
            'An executive training program for C-suite stakeholders',
          ],
          correctIndex: 1,
          explanation: 'A champions program identifies enthusiastic, tech-comfortable users in each department who receive additional training and support, then serve as first-line helpers and advocates for their colleagues — a proven peer-influence approach to driving adoption.',
        },
        {
          id: 'ce-m5-q5',
          type: 'true-false' as const,
          question: 'Enterprise software implementations should always go live with all modules simultaneously to avoid running parallel systems.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Phased go-live approaches — rolling out modules or business units sequentially — reduce risk and provide fallback options. Going live all at once with no phased approach is a recognized implementation risk factor, not a best practice.',
        },
      ],
    },
    {
      id: 'ce-m6',
      number: 6,
      title: 'Integration & the Connected Enterprise',
      description:
        'Explore how CRM and ERP systems connect with each other and the broader technology ecosystem, the concept of a single source of truth, and emerging trends in enterprise software.',
      estimatedMinutes: 50,
      learningObjectives: [
        'Explain why CRM and ERP integration is valuable and what data flows between them',
        'Describe common integration patterns: real-time APIs, batch sync, and event-driven integration',
        'Define the "single source of truth" concept and explain its challenges',
        'Identify emerging trends in enterprise software including AI and composable architectures',
        'Understand the business case for investing in enterprise system integration',
      ],
      lessons: [
        {
          id: 'ce-m6-l1',
          title: 'CRM + ERP Integration',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'CRM and ERP systems are designed to solve complementary problems — CRM for customer-facing operations, ERP for internal operations. But the two systems constantly need to share data. When a sales rep closes a deal in the CRM, the ERP needs to create the customer record and generate an invoice. When finance updates payment terms in the ERP, the CRM should reflect that when the sales team views the account.',
            },
            {
              type: 'heading' as const,
              text: 'Key Data Flows Between CRM and ERP',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Direction', 'Data Type', 'Example'],
              rows: [
                ['CRM → ERP', 'New customer / account', 'Closed won opportunity triggers customer creation in ERP'],
                ['CRM → ERP', 'Sales order', 'Quote approved in CRM creates a sales order in ERP for fulfillment'],
                ['ERP → CRM', 'Invoice status', 'Payment received in ERP updates account status in CRM'],
                ['ERP → CRM', 'Inventory availability', 'Sales rep sees real-time product availability when building a quote'],
                ['ERP → CRM', 'Credit hold status', 'Customer on credit hold in ERP prevents new orders in CRM'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Native Connectors',
              text: 'Salesforce and NetSuite, SAP and Salesforce, Microsoft Dynamics and Azure — major vendors offer pre-built native connectors or certified integration templates for common system pairs. These reduce integration project time significantly vs. building custom API integrations from scratch.',
            },
          ],
        },
        {
          id: 'ce-m6-l2',
          title: 'Single Source of Truth & Future Trends',
          estimatedMinutes: 13,
          content: [
            {
              type: 'paragraph' as const,
              text: 'The "single source of truth" (SSOT) concept describes an organizational goal: every piece of data has one authoritative system of record, and all other systems derive from it. When a customer\'s address changes, it changes in one place and propagates everywhere else. The opposite — each system maintaining its own independent copy — leads to inconsistency, reconciliation overhead, and decision-making based on conflicting data.',
            },
            {
              type: 'heading' as const,
              text: 'Emerging Enterprise Software Trends',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'AI-powered workflows: Generative AI built into CRM (Salesforce Einstein AI) and ERP (SAP Joule) for automated drafting, recommendations, and anomaly detection',
                'Composable ERP: Breaking monolithic ERP into modular microservices that can be swapped independently',
                'Unified customer data platforms (CDPs): Centralizing customer data from CRM, web analytics, and product usage for a true 360° customer view',
                'Low-code/no-code customization: Business users building automations and custom apps without traditional development',
                'Real-time ERP: Moving from nightly batch processing to event-driven, real-time inventory and financial data',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'The Myth of Perfect SSOT',
              text: 'In practice, true single source of truth is an aspiration, not a destination. Different systems are authoritative for different data — CRM owns contact info, ERP owns financial data, HRIS owns employee records. The realistic goal is clear ownership, documented authoritative systems, and robust integration — not a literal single system for everything.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'ce-m6-q1',
          type: 'multiple-choice' as const,
          question: 'When a sales deal is closed in CRM, what ERP action is typically triggered via integration?',
          options: [
            'A payroll run for the sales representative',
            'Creation of a customer record and/or sales order in the ERP for fulfillment and invoicing',
            'Deletion of the lead record from the CRM',
            'An automatic price update in the product catalog',
          ],
          correctIndex: 1,
          explanation: 'When a CRM opportunity closes, the ERP needs to create the customer record (if new) and generate a sales order to initiate fulfillment and invoicing. This is one of the most common CRM→ERP integration flows.',
        },
        {
          id: 'ce-m6-q2',
          type: 'true-false' as const,
          question: 'The "single source of truth" means all enterprise data must be stored in one system.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Single source of truth means each type of data has one authoritative system of record — CRM for customer contacts, ERP for financials, HRIS for employees. It\'s about clear ownership and reliable synchronization, not literally one monolithic system.',
        },
        {
          id: 'ce-m6-q3',
          type: 'multiple-choice' as const,
          question: 'What does "composable ERP" refer to in the context of enterprise software trends?',
          options: [
            'Writing ERP configuration rules using a visual composer tool',
            'Breaking monolithic ERP into modular, interchangeable components that can be independently replaced or updated',
            'Composing financial reports using templates',
            'Combining CRM and ERP into a single platform',
          ],
          correctIndex: 1,
          explanation: 'Composable ERP is an architectural approach that replaces the traditional monolithic ERP with modular microservices-based components. Organizations can replace individual modules (e.g., payroll) without disrupting the rest of the system.',
        },
        {
          id: 'ce-m6-q4',
          type: 'multiple-choice' as const,
          question: 'Which of the following describes a Customer Data Platform (CDP)?',
          options: [
            'A CRM system for managing B2C customer service tickets',
            'A platform that centralizes customer data from CRM, web analytics, and product usage to create a unified customer profile',
            'A paywall for accessing premium customer data',
            'A compliance tool for managing customer data deletion requests',
          ],
          correctIndex: 1,
          explanation: 'A CDP (Customer Data Platform) centralizes customer behavioral, transactional, and profile data from multiple sources — CRM, website, app, support, etc. — into unified customer profiles, enabling personalization and analysis that no individual system can provide alone.',
        },
        {
          id: 'ce-m6-q5',
          type: 'true-false' as const,
          question: 'Native vendor connectors between popular enterprise systems (e.g., Salesforce and NetSuite) always eliminate all integration work.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Native connectors significantly reduce integration effort by providing pre-built data mappings and authentication, but still require configuration, field mapping to match your specific data model, testing, and ongoing maintenance. They are not zero-effort plug-and-play solutions.',
        },
      ],
    },
  ],
};
