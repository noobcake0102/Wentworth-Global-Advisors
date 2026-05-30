import type { Course } from '../../types/course';

export const businessIntelligenceCourse: Course = {
  id: 'business-intelligence',
  track: 'data-management',
  title: 'Business Intelligence & Reporting',
  subtitle: 'Self-Service Analytics for Decision Makers',
  description:
    'Master the concepts and tools of modern business intelligence. Learn how to model data for analytics, build reports and dashboards that drive decisions, and create a data culture where self-service analytics empowers every team.',
  status: 'available',
  estimatedHours: 5,
  color: '#7b68ee',
  icon: '🧠',
  modules: [
    {
      id: 'bi-m1',
      number: 1,
      title: 'What is Business Intelligence?',
      description:
        'Define BI, understand how it differs from general analytics, survey the BI technology stack, and build the business case for data-driven decision-making.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Define business intelligence and explain how it differs from data analysis and data science',
        'Describe the core components of the BI technology stack',
        'Explain the concept of self-service BI and why it matters',
        'Identify common BI use cases across business functions',
        'Articulate the business value and ROI of effective BI programs',
      ],
      lessons: [
        {
          id: 'bi-m1-l1',
          title: 'BI vs. Analytics vs. Data Science',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Business Intelligence (BI) is the technology, processes, and practices that transform raw data into actionable information that guides business decisions. It spans data collection, storage, analysis, and presentation — with the specific goal of helping business people understand performance, identify opportunities, and make better decisions.',
            },
            {
              type: 'heading' as const,
              text: 'Understanding the Spectrum',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Discipline', 'Primary Question', 'Audience', 'Example'],
              rows: [
                ['BI / Reporting', 'What happened? What is happening now?', 'Business users, managers, executives', 'Monthly revenue dashboard, KPI scorecards'],
                ['Data Analysis', 'Why did it happen? What does this mean?', 'Analysts, data teams', 'Root cause analysis of churn spike'],
                ['Data Science / ML', 'What will happen? What should we do?', 'Data scientists, engineers', 'Predictive churn model, recommendation engine'],
              ],
            },
            {
              type: 'paragraph' as const,
              text: 'BI occupies the foundational layer of the analytics spectrum. Before organizations can analyze why things happen or predict the future, they need reliable, accessible answers to "what is happening right now?" BI provides that foundation — the shared factual baseline that the entire organization can trust and act from.',
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Self-Service BI',
              text: 'Traditional BI required analysts to build every report from scratch for business users. Self-service BI platforms like Tableau, Power BI, and Looker empower business users to explore data and build their own reports without depending on a centralized IT team. This dramatically accelerates insight time and frees analysts for higher-value work.',
            },
          ],
        },
        {
          id: 'bi-m1-l2',
          title: 'The BI Stack & Common Use Cases',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A modern BI deployment is not a single tool — it is a layered stack. Each layer serves a distinct purpose, and data flows upward from raw sources to polished visualizations that executives view on their dashboards. Understanding this stack helps practitioners know where to intervene when something goes wrong.',
            },
            {
              type: 'heading' as const,
              text: 'The BI Technology Stack',
              level: 2 as const,
            },
            {
              type: 'ordered-list' as const,
              items: [
                'Source systems: CRM, ERP, product databases, marketing platforms — where data originates',
                'Data integration (ELT): Connectors that move raw data into the warehouse (Fivetran, Airbyte)',
                'Data warehouse: Central analytical store — Snowflake, BigQuery, Redshift',
                'Semantic / transformation layer: dbt models or BI semantic layers that define business logic',
                'BI platform: Tableau, Power BI, Looker — visualization and report creation',
                'Distribution: Scheduled email reports, embedded dashboards, Slack notifications',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Common BI Use Cases by Function',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Function', 'Common BI Use Cases'],
              rows: [
                ['Sales', 'Pipeline dashboard, quota attainment, win/loss reporting'],
                ['Finance', 'P&L reporting, budget vs. actual, cash flow tracking'],
                ['Marketing', 'Campaign performance, lead source attribution, CAC/LTV'],
                ['Operations', 'Production throughput, defect rates, SLA compliance'],
                ['HR', 'Headcount reporting, turnover analysis, hiring pipeline'],
                ['Product', 'Feature adoption, user retention, funnel analysis'],
              ],
            },
          ],
        },
        {
          id: 'bi-m1-l3',
          title: 'The ROI of Data-Driven Decisions',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Investing in BI is not free — platforms, engineering, and analyst time cost money. Justifying that investment requires quantifying the business value delivered. BI programs generate ROI through several mechanisms: faster decisions, more accurate decisions, reduced analyst burden, and discovered opportunities that would otherwise remain invisible.',
            },
            {
              type: 'heading' as const,
              text: 'Measuring BI Value',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Decision speed: Time from question to actionable answer — reduced from weeks to minutes',
                'Analyst leverage: One analyst can serve 10x more users via self-service vs. building bespoke reports',
                'Revenue opportunities: Insights that identify underperforming segments or untapped markets',
                'Cost reduction: Identifying operational inefficiencies — inventory excess, process bottlenecks',
                'Risk reduction: Early warning dashboards that surface problems before they become crises',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'A BI Win: Reducing Customer Churn',
              text: 'A SaaS company builds a BI dashboard tracking early warning indicators of customer churn — declining login frequency, unresolved support tickets, low feature adoption. Customer success managers receive weekly at-risk customer lists. Proactive outreach to flagged accounts reduces churn by 15%. At a $2M annual churn baseline, this saves $300K/year — easily justifying the BI investment.',
            },
            {
              type: 'paragraph' as const,
              text: 'Organizations often underinvest in BI by funding the technology but not the humans and processes needed to make it effective. A sophisticated BI platform used poorly delivers no value. The full investment includes platform costs, data engineering, a dedicated BI/analytics team, training for business users, and executive sponsorship.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bi-m1-q1',
          type: 'multiple-choice' as const,
          question: 'Which analytical discipline primarily answers the question "What will happen next?"',
          options: ['Business Intelligence', 'Descriptive analysis', 'Data Science / Machine Learning', 'Standard reporting'],
          correctIndex: 2,
          explanation: 'Data Science and Machine Learning answer forward-looking questions — predictive and prescriptive analysis. BI primarily answers "what happened" and "what is happening now" through reporting and monitoring.',
        },
        {
          id: 'bi-m1-q2',
          type: 'true-false' as const,
          question: 'Self-service BI means business users can explore data and build reports without depending on a centralized IT team for every request.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Self-service BI platforms like Tableau and Power BI are designed to empower business users to explore data and build their own reports — reducing the backlog of analyst requests and accelerating time-to-insight.',
        },
        {
          id: 'bi-m1-q3',
          type: 'multiple-choice' as const,
          question: 'In the BI technology stack, what role does the data warehouse serve?',
          options: [
            'It is the visualization layer where dashboards are built',
            'It is the central analytical store that receives data from source systems and serves queries for BI tools',
            'It manages ETL pipelines and data movement',
            'It replaces the need for source systems like CRM and ERP',
          ],
          correctIndex: 1,
          explanation: 'The data warehouse is the central analytical data store — it consolidates data from multiple source systems, enables fast analytical queries, and serves as the data foundation for BI tools and reports.',
        },
        {
          id: 'bi-m1-q4',
          type: 'multiple-choice' as const,
          question: 'A SaaS company uses BI to identify customers at risk of churning and alerts customer success managers. This is an example of BI delivering value through:',
          options: [
            'Reducing infrastructure costs',
            'Risk reduction via early warning signals that enable proactive intervention',
            'Replacing the need for human customer success managers',
            'Automating new customer onboarding',
          ],
          correctIndex: 1,
          explanation: 'Using BI dashboards to surface early warning indicators and enable proactive intervention is a classic example of BI delivering value through risk reduction — catching problems before they become costly.',
        },
        {
          id: 'bi-m1-q5',
          type: 'true-false' as const,
          question: 'A BI program delivers full value by investing in the platform technology alone, without needing dedicated people or training.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Technology alone is insufficient. Effective BI requires the platform, data engineering to populate it, analysts to build and maintain content, training for business users, and organizational processes that embed data into decision-making. Underinvesting in people is a common cause of BI program failure.',
        },
      ],
    },
    {
      id: 'bi-m2',
      number: 2,
      title: 'Data Modeling for BI',
      description:
        'Master dimensional modeling — the foundational technique for structuring data to support fast, flexible analytics — including star schemas, fact tables, dimension tables, and slowly changing dimensions.',
      estimatedMinutes: 60,
      learningObjectives: [
        'Explain why dimensional modeling is preferred over normalized schemas for BI workloads',
        'Describe the star schema and its components',
        'Distinguish fact tables from dimension tables and explain the role of each',
        'Handle slowly changing dimensions using Type 1, 2, and 3 approaches',
        'Explain the purpose of aggregation layers and pre-computed tables in BI performance',
      ],
      lessons: [
        {
          id: 'bi-m2-l1',
          title: 'Dimensional Modeling & Star Schema',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Dimensional modeling, developed by Ralph Kimball in the 1990s, is the standard approach for structuring data in a data warehouse or BI layer. It organizes data into two types of tables — facts and dimensions — arranged in a pattern called the star schema. This structure prioritizes query performance and business user understandability over the storage efficiency favored by normalized operational databases.',
            },
            {
              type: 'heading' as const,
              text: 'Why Not Use 3NF for BI?',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Third Normal Form (3NF) databases, used in operational systems, minimize data redundancy through normalization. This is ideal for transactional writes but terrible for analytical reads — queries require joining dozens of tables, making them slow and complex. Dimensional models deliberately denormalize data (accepting some redundancy) to make analytical queries fast and intuitive.',
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'The Star Schema',
              text: 'In a star schema, one central fact table connects to multiple dimension tables via foreign keys — creating a star-like shape. The fact table stores measures (revenue, quantity, duration), and dimension tables store descriptive attributes (customer name, product category, date). A query joining the fact table to a few dimensions can answer most analytical questions.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Fact Table',
                  definition:
                    'The central table in a star schema storing quantitative measurements of business events — one row per transaction or event, with foreign keys to dimension tables and numeric measures.',
                },
                {
                  term: 'Dimension Table',
                  definition:
                    'A table containing descriptive attributes about a business entity — customer name, product category, geography, date — used to filter, group, and label fact table data.',
                },
                {
                  term: 'Grain',
                  definition:
                    'The level of detail represented by one row in a fact table. "One row per sales line item" is a finer grain than "one row per order." Defining grain clearly is the most important step in dimensional modeling.',
                },
              ],
            },
          ],
        },
        {
          id: 'bi-m2-l2',
          title: 'Slowly Changing Dimensions',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Dimension attributes are not permanent. A customer changes their address, a product moves to a different category, a salesperson transfers to a different region. How should the data warehouse handle these changes? The answer — called a Slowly Changing Dimension (SCD) strategy — has significant implications for historical reporting accuracy.',
            },
            {
              type: 'heading' as const,
              text: 'SCD Types',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['SCD Type', 'Approach', 'Keeps History?', 'Best For'],
              rows: [
                ['Type 1 (Overwrite)', 'Simply overwrite the old value with the new one', 'No', 'Corrections to bad data; attributes where history doesn\'t matter'],
                ['Type 2 (New Row)', 'Insert a new row for the changed version with effective dates; expire the old row', 'Yes — full history', 'Customer segment changes, sales territory changes — where historical accuracy matters most'],
                ['Type 3 (New Column)', 'Add a "previous value" column alongside the current value', 'Partial — only previous and current', 'Simple before/after tracking for low-change attributes'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'SCD Type 2 in Practice',
              text: 'A customer was in the "SMB" segment in Q1 and moved to "Enterprise" in Q3. With SCD Type 2, the customer dimension has two rows: one for Q1 transactions (SMB segment, valid Jan 1–Jun 30) and one for Q3 onwards (Enterprise segment, valid Jul 1–present). Historical Q1 analysis correctly shows them as SMB; future analysis shows them as Enterprise.',
            },
            {
              type: 'paragraph' as const,
              text: 'The default should be SCD Type 2 for most dimension attributes where historical accuracy matters. The additional storage cost is minimal on modern cloud warehouses, and the analytical accuracy it preserves is invaluable. Many organizations regret choosing Type 1 for simplicity only to discover they cannot accurately report on historical cohorts.',
            },
          ],
        },
        {
          id: 'bi-m2-l3',
          title: 'Aggregation Layers & BI Performance',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'As data volumes grow and dashboards become more complex, query performance becomes a challenge. Analytical queries that scan billions of rows on every dashboard load create slow user experiences and high cloud costs. Aggregation layers — pre-computed summary tables — are the primary technique for addressing this.',
            },
            {
              type: 'heading' as const,
              text: 'Aggregation Strategies',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Pre-aggregated summary tables: Nightly (or hourly) jobs that pre-compute common aggregations — monthly revenue by region, daily active users by product',
                'Materialized views: Database-native pre-computed views that are refreshed on a schedule or on change',
                'Columnar storage: Cloud warehouses store data by column, making aggregations on specific columns very fast',
                'Partitioning and clustering: Organizing data so queries only scan the relevant partitions',
                'BI caching: Tableau and Power BI can cache query results, serving repeat requests from cache rather than re-querying',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Design for the Most Common Questions',
              text: 'The 80/20 rule applies to BI queries: 80% of dashboard load comes from 20% of queries. Identify the most-viewed dashboards and most-commonly run queries, then pre-aggregate specifically for those. This targeted optimization delivers the largest user experience improvement for the least engineering effort.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bi-m2-q1',
          type: 'multiple-choice' as const,
          question: 'In a star schema dimensional model, what type of data does the fact table primarily store?',
          options: [
            'Descriptive attributes about customers and products',
            'Quantitative measurements of business events (e.g., revenue, quantity, duration)',
            'Configuration settings and metadata',
            'Raw unprocessed source data from operational systems',
          ],
          correctIndex: 1,
          explanation: 'Fact tables store quantitative measurements of business events — revenue, quantity sold, call duration, page views. Each row represents one event or transaction, with foreign keys linking to dimension tables for descriptive context.',
        },
        {
          id: 'bi-m2-q2',
          type: 'true-false' as const,
          question: 'The "grain" of a fact table refers to how many bytes of storage each row consumes.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. The grain of a fact table defines the level of detail represented by one row — e.g., "one row per sales line item" or "one row per daily user session." Defining grain clearly is the most important step in dimensional modeling.',
        },
        {
          id: 'bi-m2-q3',
          type: 'multiple-choice' as const,
          question: 'A customer moves from "SMB" to "Enterprise" segment. You need historical analysis to accurately reflect what segment they were in at the time of each transaction. Which SCD type should you use?',
          options: ['Type 1 (Overwrite)', 'Type 2 (New Row with effective dates)', 'Type 3 (New Column for previous value)', 'Type 0 (No changes allowed)'],
          correctIndex: 1,
          explanation: 'SCD Type 2 inserts a new row for the changed dimension value with effective date ranges, preserving full history. This allows historical analysis to correctly join to the segment the customer was in at the time of each transaction.',
        },
        {
          id: 'bi-m2-q4',
          type: 'multiple-choice' as const,
          question: 'Why is Third Normal Form (3NF) schema design less ideal for BI workloads than dimensional modeling?',
          options: [
            '3NF schemas cannot be stored in cloud data warehouses',
            '3NF schemas require too much storage space',
            '3NF schemas require joining many tables for analytical queries, resulting in complex, slow queries',
            '3NF schemas are only suitable for small datasets',
          ],
          correctIndex: 2,
          explanation: '3NF minimizes redundancy through normalization, which is great for transactional writes but requires joining many tables for analytical reads — making queries complex, slow, and hard for business users to understand. Dimensional models denormalize strategically to optimize for reads.',
        },
        {
          id: 'bi-m2-q5',
          type: 'true-false' as const,
          question: 'Pre-aggregated summary tables are a technique for improving dashboard query performance by pre-computing common aggregations.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Pre-aggregating common metrics (like monthly revenue by region) into summary tables means dashboards query a small, pre-computed table rather than scanning billions of raw fact rows on every page load — dramatically improving performance.',
        },
      ],
    },
    {
      id: 'bi-m3',
      number: 3,
      title: 'Building Reports & Dashboards',
      description:
        'Learn the full lifecycle of BI content development — from requirements gathering and KPI definition through report types, drill-down design, and refresh schedules.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Conduct effective requirements gathering for BI reports and dashboards',
        'Define KPIs with precision: formula, source, owner, and refresh cadence',
        'Choose the appropriate report type for different analytical purposes',
        'Design effective drill-down paths that help users explore data contextually',
        'Define appropriate data refresh schedules for different use cases',
      ],
      lessons: [
        {
          id: 'bi-m3-l1',
          title: 'Requirements Gathering & KPI Definition',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'The most common cause of a BI dashboard that nobody uses is building the wrong thing. Requirements gathering — deeply understanding what the audience needs to know, decide, and do — is the critical first step. Skip it, and you build a beautiful dashboard that answers questions nobody is asking.',
            },
            {
              type: 'heading' as const,
              text: 'Effective Requirements Questions',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                '"What decisions do you make regularly that this should inform?"',
                '"What questions do you currently answer using spreadsheets or manual reports?"',
                '"Who else looks at this data? What do they care about?"',
                '"If the dashboard showed you one number each morning, what would be the most valuable number?"',
                '"How will you know if the data is wrong? What would you check against?"',
                '"How often does this metric change? Do you need daily, hourly, or real-time refresh?"',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'A Precise KPI Definition',
              text: 'Every KPI should have: a name, a precise formula, the data source it draws from, the responsible owner (who fixes it when it\'s wrong), the refresh cadence, and the target or threshold. Vague definitions like "monthly revenue" leave ambiguity: Does it include refunds? Only invoiced or also recognized? Which entities? All subsidiaries? Each ambiguity becomes a stakeholder disagreement when the number differs from their expectation.',
            },
          ],
        },
        {
          id: 'bi-m3-l2',
          title: 'Report Types & Drill-Down Design',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Not all BI content serves the same purpose. Different report types answer different questions and are consumed in different contexts. Understanding the purpose of each report type guides both design decisions and user training.',
            },
            {
              type: 'table' as const,
              headers: ['Report Type', 'Purpose', 'Key Design Principle'],
              rows: [
                ['Executive scorecard', 'Top-level KPIs at a glance for senior leadership', 'Maximum 6–8 metrics; RAG status; minimal detail'],
                ['Operational dashboard', 'Real-time or near-real-time performance monitoring', 'Actionable alerts; current period focus; linked to drill-down'],
                ['Analytical report', 'Deep exploration of a specific business question', 'Flexible filtering; multiple chart types; exportable'],
                ['Ad-hoc report', 'One-off questions from business users', 'Self-service; flexible columns; export capability'],
                ['Embedded analytics', 'Analytics built into an operational application', 'Context-specific; minimal navigation; personalized to user'],
              ],
            },
            {
              type: 'heading' as const,
              text: 'Drill-Down Design',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'A well-designed drill-down path allows users to move from summary to detail progressively — answering the natural "why?" that follows every summary metric. The classic path: company total → region → product category → individual deal/transaction. Each level answers the follow-up question raised by the level above.',
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'The Three-Click Rule',
              text: 'Any question a business user should be able to answer with the BI tool should require no more than three interactions (filter, click-through, or drill-down). If reaching a specific insight requires 10 clicks through multiple dashboards, users will give up or request a bespoke report instead.',
            },
          ],
        },
        {
          id: 'bi-m3-l3',
          title: 'Data Refresh Schedules',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'How fresh does the data need to be? This is a business question, not a technology question. Real-time data is more expensive to deliver and more complex to engineer. Most analytical use cases are perfectly served by daily or even weekly data. Matching refresh cadence to actual business need reduces cost and complexity without sacrificing value.',
            },
            {
              type: 'heading' as const,
              text: 'Refresh Cadence by Use Case',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Cadence', 'Best For', 'Technical Approach'],
              rows: [
                ['Real-time / streaming', 'Fraud detection, live operational monitoring, trading', 'Streaming pipelines, live connections to source systems'],
                ['Hourly', 'Same-day sales monitoring, customer support queue', 'Incremental pipeline runs every hour'],
                ['Daily (morning)', 'Management dashboards, daily standup metrics, daily P&L', 'Nightly batch pipelines complete before business hours'],
                ['Weekly', 'Strategic KPIs, trend analysis, board reporting', 'Weekend pipeline runs'],
                ['On-demand', 'Ad-hoc analysis, drill-down to current transaction data', 'Direct live connection to warehouse'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Avoid Unnecessary Real-Time',
              text: 'Real-time dashboards create a perception of precision that may not add business value. Does a marketing manager actually make different decisions if they see conversions updated every second vs. every morning? If not, a daily refresh is simpler, cheaper, and more reliable. Reserve real-time for genuinely time-sensitive operational monitoring.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bi-m3-q1',
          type: 'multiple-choice' as const,
          question: 'What is the primary purpose of requirements gathering before building a BI dashboard?',
          options: [
            'To determine which BI tool to purchase',
            'To understand the audience\'s actual decisions, questions, and needs — ensuring you build the right thing',
            'To document the technical data model',
            'To get budget approval from finance',
          ],
          correctIndex: 1,
          explanation: 'Requirements gathering ensures you understand what decisions the dashboard should support and what questions it must answer. Skipping this step commonly results in technically correct dashboards that nobody uses because they don\'t address real needs.',
        },
        {
          id: 'bi-m3-q2',
          type: 'true-false' as const,
          question: 'A precise KPI definition only requires a name and a formula.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. A complete KPI definition requires: name, precise formula (including what is/isn\'t included), data source, owner (responsible when wrong), refresh cadence, and target/threshold. Missing any element creates ambiguity that becomes stakeholder conflict.',
        },
        {
          id: 'bi-m3-q3',
          type: 'multiple-choice' as const,
          question: 'A "drill-down path" in BI design refers to:',
          options: [
            'A technical debugging process for fixing pipeline errors',
            'A progressive navigation from summary totals to more detailed breakdowns that answer follow-up "why?" questions',
            'A method for importing detailed data into a spreadsheet',
            'A training curriculum for new BI users',
          ],
          correctIndex: 1,
          explanation: 'Drill-down paths allow users to progressively explore from high-level summaries (company total) to underlying detail (individual transactions), answering the natural "why?" questions that follow every aggregate metric.',
        },
        {
          id: 'bi-m3-q4',
          type: 'multiple-choice' as const,
          question: 'Which refresh cadence is most appropriate for a management dashboard reviewed during a morning standup meeting?',
          options: ['Real-time streaming', 'Hourly', 'Daily (completed before business hours)', 'Monthly'],
          correctIndex: 2,
          explanation: 'A daily refresh completed before business hours is ideal for morning standup dashboards — the data is current as of yesterday, fresh enough for operational discussions, without the complexity and cost of real-time streaming.',
        },
        {
          id: 'bi-m3-q5',
          type: 'true-false' as const,
          question: 'Real-time dashboards are always preferable to daily refreshed dashboards because they provide more current data.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Real-time delivery adds significant complexity and cost. Unless the business genuinely makes different decisions based on second-by-second data, daily or hourly refreshes are simpler, cheaper, and more maintainable. Always match refresh cadence to actual business need.',
        },
      ],
    },
    {
      id: 'bi-m4',
      number: 4,
      title: 'Power BI / Tableau Deep Dive',
      description:
        'Get hands-on with the core capabilities of the two leading BI platforms: DAX fundamentals for Power BI users, calculated fields in Tableau, connecting data sources, and publishing and sharing dashboards.',
      estimatedMinutes: 60,
      learningObjectives: [
        'Write basic DAX measures in Power BI for common analytical calculations',
        'Create calculated fields in Tableau using Tableau\'s calculation syntax',
        'Connect both tools to common data sources including Excel files, databases, and cloud warehouses',
        'Apply row-level security to restrict what data different users can see',
        'Publish and share dashboards using Power BI Service and Tableau Server / Tableau Cloud',
      ],
      lessons: [
        {
          id: 'bi-m4-l1',
          title: 'DAX Basics for Power BI',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'DAX (Data Analysis Expressions) is the formula language of Power BI (and Excel Power Pivot). It is used to create calculated columns, calculated tables, and most importantly, measures — dynamic aggregations that respond to the filters applied in a report. Mastering DAX is the key to unlocking Power BI\'s full analytical capabilities.',
            },
            {
              type: 'heading' as const,
              text: 'Measures vs. Calculated Columns',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Type', 'When Evaluated', 'Stored In', 'Best For'],
              rows: [
                ['Measure', 'At query time, based on current filters', 'Not stored — computed on demand', 'Aggregations: SUM, AVG, COUNT, ratios, YoY calculations'],
                ['Calculated Column', 'At data refresh time, row by row', 'Stored in the data model', 'Row-level categorizations, static labels, flags'],
              ],
            },
            {
              type: 'heading' as const,
              text: 'Essential DAX Functions',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'CALCULATE(): Modifies the filter context for an expression — the most powerful DAX function',
                'SUM() / AVERAGE() / COUNT(): Basic aggregations',
                'DIVIDE(numerator, denominator, [alternate]): Safe division — returns alternate if denominator is zero',
                'SUMX() / AVERAGEX(): Iterator functions — evaluate an expression row-by-row then aggregate',
                'SAMEPERIODLASTYEAR(): Time intelligence — returns values for the same period in the prior year',
                'ALL() / ALLEXCEPT(): Remove filters from columns to compute totals or ratios of total',
              ],
            },
          ],
        },
        {
          id: 'bi-m4-l2',
          title: 'Tableau Calculated Fields & Data Connections',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Tableau\'s calculated fields allow analysts to create new data fields derived from existing ones — classification logic, ratios, date calculations, string manipulations, and conditional expressions. Unlike Power BI\'s DAX, Tableau calculations are written directly in Tableau\'s drag-and-drop interface and use a syntax closer to Excel formulas.',
            },
            {
              type: 'heading' as const,
              text: 'Tableau Calculation Types',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Basic calculations: Row-level formulas — [Revenue] - [Cost] to compute margin',
                'Aggregate calculations: Expressions using AGG() functions — SUM([Revenue]) / SUM([Orders]) for average order value',
                'Table calculations: Computations across rows in the current view — RUNNING_SUM(), PERCENT_OF_TOTAL(), RANK()',
                'Level of Detail (LOD) expressions: { FIXED [Customer] : MAX([Revenue]) } — compute at a different granularity than the view',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Connecting to Data Sources',
              level: 2 as const,
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Live vs. Extract Connection',
              text: 'Both Tableau and Power BI support live connections (queries run against the source in real time) and extracted connections (data is copied into the tool\'s own compressed format). Live connections ensure freshness; extracts provide faster performance. For large datasets, extracts with scheduled refresh are typically preferred.',
            },
            {
              type: 'paragraph' as const,
              text: 'Both Tableau and Power BI connect to a wide range of data sources: Excel files, CSV files, SQL databases (PostgreSQL, SQL Server, MySQL), cloud warehouses (Snowflake, BigQuery, Redshift), and web connectors (Google Analytics, Salesforce). The connection setup process is similar in both tools — provide credentials, select a database and schema, choose tables or write a custom SQL query.',
            },
          ],
        },
        {
          id: 'bi-m4-l3',
          title: 'Publishing, Sharing & Row-Level Security',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Building a great dashboard is only half the work. The other half is getting it in front of the right people, with the right permissions, and keeping it updated. Power BI Service and Tableau Cloud/Server are the platforms where dashboards are published, shared, and managed at organizational scale.',
            },
            {
              type: 'heading' as const,
              text: 'Publishing Workflows',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Platform', 'Publishing Tool', 'Sharing Options'],
              rows: [
                ['Power BI', 'Publish from Power BI Desktop to Power BI Service', 'Share links, embed in Teams/SharePoint, Apps for groups'],
                ['Tableau', 'Publish from Tableau Desktop to Tableau Cloud/Server', 'Shared views, embedded URLs, subscriptions, Slack integration'],
              ],
            },
            {
              type: 'heading' as const,
              text: 'Row-Level Security (RLS)',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Row-level security restricts which data rows a user can see within the same report. A regional sales manager should see only their region\'s data; a rep should see only their own opportunities. RLS is configured in the data model (Power BI) or in the data source/server (Tableau), using rules that filter data based on the logged-in user\'s identity.',
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Test RLS Thoroughly',
              text: 'Row-level security misconfigurations are a serious data exposure risk. A rule that grants access instead of restricting it — or a logic error in user-to-region mapping — can expose sensitive data to unauthorized users. Always test RLS as multiple different user personas before publishing to production.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bi-m4-q1',
          type: 'multiple-choice' as const,
          question: 'In Power BI DAX, what is the key difference between a Measure and a Calculated Column?',
          options: [
            'Measures are stored in the database; calculated columns are computed on demand',
            'Measures are computed dynamically at query time based on filters; calculated columns are computed row-by-row at refresh time and stored',
            'Measures can only be used in charts; calculated columns can only be used in tables',
            'There is no meaningful difference — they produce the same results',
          ],
          correctIndex: 1,
          explanation: 'Measures are computed dynamically at query time and respond to report filters — ideal for aggregations. Calculated columns are evaluated row-by-row at data refresh time and stored in the model — ideal for row-level categorizations.',
        },
        {
          id: 'bi-m4-q2',
          type: 'true-false' as const,
          question: 'Tableau\'s Level of Detail (LOD) expressions allow computations at a different granularity than the current view.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. LOD expressions like { FIXED [Customer] : SUM([Revenue]) } compute aggregations at a specified level of detail — in this case, total revenue per customer — regardless of what dimensions are in the current view.',
        },
        {
          id: 'bi-m4-q3',
          type: 'multiple-choice' as const,
          question: 'When should you prefer an extract connection over a live connection in Tableau or Power BI?',
          options: [
            'When you need the absolute latest data at all times',
            'When the data source is a slow or large database and faster query performance is needed',
            'When you want users to see data without any credentials',
            'When the data source does not support SQL',
          ],
          correctIndex: 1,
          explanation: 'Extract connections copy data into the BI tool\'s optimized format, enabling faster dashboard performance — especially useful for large datasets or slow source databases. They trade absolute freshness for performance, with scheduled refreshes maintaining reasonable currency.',
        },
        {
          id: 'bi-m4-q4',
          type: 'multiple-choice' as const,
          question: 'What is the purpose of row-level security in a BI platform?',
          options: [
            'To restrict which reports users can see in the dashboard catalog',
            'To limit how many rows a query can return to improve performance',
            'To control which data rows individual users can see within the same report, based on their identity',
            'To prevent users from exporting data to CSV',
          ],
          correctIndex: 2,
          explanation: 'Row-level security (RLS) filters data rows based on the logged-in user\'s identity — so a regional manager sees only their region\'s data in the same report that a national manager sees all regions. It enables one report to safely serve multiple user types.',
        },
        {
          id: 'bi-m4-q5',
          type: 'true-false' as const,
          question: 'DAX\'s CALCULATE() function is used specifically for creating date/time calculations in Power BI.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. CALCULATE() is DAX\'s most powerful general-purpose function — it evaluates an expression while modifying the filter context. It is not specific to dates; it\'s used for segment comparisons, overriding filters, computing totals, and much more.',
        },
      ],
    },
    {
      id: 'bi-m5',
      number: 5,
      title: 'BI Governance & Adoption',
      description:
        'Build a sustainable BI program with certified datasets, access controls, change management, and the cultural practices that make data truly central to how an organization makes decisions.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Explain the purpose and components of a BI governance framework',
        'Describe certified datasets and how they establish trusted metrics',
        'Implement row-level security and access control policies for BI content',
        'Apply change management principles to drive BI adoption across the organization',
        'Define and measure the success of a BI program using adoption metrics',
      ],
      lessons: [
        {
          id: 'bi-m5-l1',
          title: 'BI Governance Framework',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'As BI programs mature, they encounter a governance challenge: too many dashboards, conflicting metrics, duplicated content, and no clear authority about which number is right. BI governance is the set of policies, processes, and standards that ensure BI content is accurate, accessible, secure, and trusted.',
            },
            {
              type: 'heading' as const,
              text: 'Core Governance Components',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Certified datasets: A review and endorsement process that marks certain datasets as officially trusted and authoritative',
                'Metric definitions: A shared business glossary defining what each KPI means, its formula, and who owns it',
                'Content ownership: Every dashboard and dataset has a named owner responsible for its accuracy',
                'Access controls: Role-based permissions that determine who can view, build, and publish content',
                'Change management: A process for updating certified content that includes impact analysis and notification',
                'Deprecation policy: How to retire outdated content without breaking dependent reports',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Certified Datasets',
              text: 'Power BI\'s "Certified Dataset" and Tableau\'s "Published Data Source" features let BI administrators mark official, reviewed datasets with a badge that users can trust. When business users see a certified source, they know it has been reviewed for accuracy, has a defined owner, and will be maintained. Non-certified content may still exist but users are signaled to prefer certified sources.',
            },
          ],
        },
        {
          id: 'bi-m5-l2',
          title: 'Building a Data Culture',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Technology and governance are necessary but not sufficient for a successful BI program. The ultimate goal is a data culture — an organizational environment where decisions at every level are informed by data, where data literacy is a valued skill, and where asking "what does the data say?" is the default first response to any business question.',
            },
            {
              type: 'heading' as const,
              text: 'Building Data Culture Practices',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Executive modeling: Leaders who visibly use dashboards in meetings signal that data matters',
                'Data literacy programs: Training programs that improve the analytical skills of all employees, not just data teams',
                'Data champions network: Department-level advocates who promote data use and assist peers',
                'Celebrate data wins: Share stories of decisions that went better because of data',
                'Make data accessible: Reduce friction — if getting data requires a help ticket, people won\'t bother',
                'Reward data-informed decisions: Recognize employees who bring data to discussions',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'Measuring BI Success',
              text: 'BI program success metrics include: active users per week (breadth of adoption), dashboard views per user per week (depth of engagement), report request backlog (how self-sufficient are users?), time-to-insight for common questions (are decisions faster?), and qualitative feedback on data trust. Track these metrics like any other product.',
            },
            {
              type: 'paragraph' as const,
              text: 'Change management for BI adoption follows the same principles as any organizational change initiative: communicate the vision, involve users early, train thoroughly, address resistance directly, and measure progress. The data team\'s role is half technical and half change management — neglecting either half produces an underused BI investment.',
            },
          ],
        },
        {
          id: 'bi-m5-l3',
          title: 'Access Control & BI Security',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'BI platforms aggregate data from across the organization — financial data, HR data, customer data, operational data. This makes access control critical: the wrong person seeing the wrong data can result in compliance violations, privacy breaches, or competitive information leaks. A layered security model addresses different dimensions of access control.',
            },
            {
              type: 'heading' as const,
              text: 'Layers of BI Security',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Layer', 'What It Controls', 'Example'],
              rows: [
                ['Platform access', 'Who can log into the BI platform', 'SSO integration with company identity provider'],
                ['Workspace/folder permissions', 'Which content areas a user can browse', 'Finance workspace visible only to Finance team'],
                ['Dataset permissions', 'Who can access a specific dataset and build on it', 'HR dataset restricted to HR and People Analytics'],
                ['Row-level security', 'Which data rows within a dataset a user can see', 'Regional manager sees only their region'],
                ['Column-level security', 'Masking or hiding specific sensitive columns', 'Salary column hidden from non-HR viewers'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Principle of Least Privilege',
              text: 'Apply the principle of least privilege: users should have access to the minimum data necessary to do their job. It is easier to grant additional access when needed than to claw back access after a data breach. Regularly audit who has access to sensitive BI content and remove access from users who have changed roles or left the organization.',
            },
          ],
        },
      ],
      quiz: [
        {
          id: 'bi-m5-q1',
          type: 'multiple-choice' as const,
          question: 'What is the purpose of a "certified dataset" in a BI platform like Power BI or Tableau?',
          options: [
            'To compress the dataset for faster query performance',
            'To mark a dataset as officially reviewed, trusted, and authoritative so users can confidently build on it',
            'To encrypt the dataset for security compliance',
            'To restrict the dataset to certified users only',
          ],
          correctIndex: 1,
          explanation: 'Certified datasets signal to business users that the data has been reviewed for accuracy, has a defined owner, follows naming standards, and will be maintained. They distinguish authoritative content from unreviewed, potentially unreliable user-created content.',
        },
        {
          id: 'bi-m5-q2',
          type: 'true-false' as const,
          question: 'Building a data culture is primarily a technology challenge that is solved by deploying a good BI platform.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Technology is a necessary but insufficient condition for a data culture. Culture change requires executive modeling, training programs, change management, accessibility improvements, and organizational incentives that make data-informed behavior the norm.',
        },
        {
          id: 'bi-m5-q3',
          type: 'multiple-choice' as const,
          question: 'Which security principle states that users should only have access to the minimum data required to perform their job?',
          options: [
            'Defense in depth',
            'Zero trust architecture',
            'Principle of least privilege',
            'Data minimization',
          ],
          correctIndex: 2,
          explanation: 'The principle of least privilege limits each user\'s access to exactly what they need for their role — no more. It minimizes the blast radius of compromised credentials or accidental data exposure.',
        },
        {
          id: 'bi-m5-q4',
          type: 'multiple-choice' as const,
          question: 'Which of the following is a good metric for measuring the breadth of BI program adoption?',
          options: [
            'Number of dashboards created by the analytics team',
            'Total storage used by the BI platform',
            'Active users per week across the BI platform',
            'Query execution time for the most complex report',
          ],
          correctIndex: 2,
          explanation: 'Active users per week measures how broadly across the organization the BI platform is actually being used — breadth of adoption. Other metrics like dashboard count measure supply, not demand.',
        },
        {
          id: 'bi-m5-q5',
          type: 'true-false' as const,
          question: 'Column-level security in BI allows specific sensitive columns (like salary) to be hidden from unauthorized viewers within a dataset they otherwise have access to.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Column-level security allows administrators to hide or mask specific sensitive columns — like compensation, social security numbers, or HIPAA-protected health information — from users who have access to the broader dataset but should not see those specific fields.',
        },
      ],
    },
  ],
};
