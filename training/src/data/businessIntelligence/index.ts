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
              text: 'Business Intelligence (BI) is the technology, processes, and practices that transform raw data into actionable information that guides business decisions. It spans data collection, storage, analysis, and presentation — with the specific goal of helping business people understand performance, identify opportunities, and make better decisions. BI is not the same as data science or even general analytics — it occupies a specific and critical position in the data ecosystem: providing the shared factual foundation that the entire organization runs on. Without reliable BI, departments operate from their own private spreadsheets, executives make decisions based on conflicting numbers, and no one can agree on the most basic facts about business performance.',
            },
            {
              type: 'heading' as const,
              text: 'Understanding the Analytics Spectrum',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Discipline', 'Primary Question', 'Audience', 'Example'],
              rows: [
                ['BI / Reporting', 'What happened? What is happening now?', 'Business users, managers, executives', 'Monthly revenue dashboard, KPI scorecards'],
                ['Data Analysis', 'Why did it happen? What does this mean?', 'Analysts, data teams', 'Root cause analysis of a churn spike'],
                ['Data Science / ML', 'What will happen? What should we do?', 'Data scientists, engineers', 'Predictive churn model, recommendation engine'],
              ],
            },
            {
              type: 'paragraph' as const,
              text: 'BI occupies the foundational layer of the analytics spectrum. Before organizations can analyze why things happen or predict the future, they need reliable, accessible answers to "what is happening right now?" BI provides that foundation — the shared factual baseline that the entire organization can trust and act from. A data science team with no reliable BI foundation is like a chef without a working kitchen: the skills exist, but the environment doesn\'t support execution.',
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Self-Service BI',
              text: 'Traditional BI required analysts to build every report from scratch for business users — creating a constant backlog and bottleneck. Self-service BI platforms like Tableau, Power BI, and Looker empower business users to explore data and build their own reports without depending on a centralized IT team. This dramatically accelerates insight time, reduces analyst backlog, and frees data teams for higher-value analytical work. The trade-off: self-service requires business users to have sufficient data literacy and requires careful governance to prevent conflicting, unverified metrics from proliferating.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Business Intelligence (BI)',
                  definition: 'The technology, processes, and practices for collecting, integrating, analyzing, and presenting business information to support better decision-making. BI focuses on descriptive analytics — understanding what has happened and what is currently happening.',
                },
                {
                  term: 'Self-Service BI',
                  definition: 'BI tools and practices that enable business users to explore data, create reports, and build dashboards independently without relying on a centralized data team for every request.',
                },
                {
                  term: 'KPI (Key Performance Indicator)',
                  definition: 'A quantifiable metric that measures performance against a strategic objective. KPIs have precise definitions, owners, targets, and refresh cadences — a vaguely defined metric is not a true KPI.',
                },
              ],
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
              text: 'A modern BI deployment is not a single tool — it is a layered stack. Each layer serves a distinct purpose, and data flows upward from raw sources to polished visualizations that executives view on their dashboards. Understanding this stack helps practitioners know where to intervene when something goes wrong — is the dashboard showing wrong numbers because of a pipeline issue, a transformation bug, a semantic layer misconfiguration, or a visualization error? Each layer has its own failure modes and the skilled BI practitioner can diagnose problems at any layer.',
            },
            {
              type: 'diagram' as const,
              diagramId: 'bi-stack',
              title: 'The BI Technology Stack',
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
                'Data integration (ELT): Connectors that move raw data into the warehouse (Fivetran, Airbyte, Stitch)',
                'Data warehouse: Central analytical store — Snowflake, BigQuery, Redshift, Databricks',
                'Semantic / transformation layer: dbt models or BI semantic layers that define business logic and metrics',
                'BI platform: Tableau, Power BI, Looker, Metabase — visualization and report creation',
                'Distribution: Scheduled email reports, embedded dashboards, Slack notifications, mobile apps',
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
                ['Sales', 'Pipeline dashboard, quota attainment, win/loss reporting, rep performance leaderboard'],
                ['Finance', 'P&L reporting, budget vs. actual, cash flow tracking, accounts receivable aging'],
                ['Marketing', 'Campaign performance, lead source attribution, CAC/LTV, funnel conversion rates'],
                ['Operations', 'Production throughput, defect rates, SLA compliance, fulfillment lead times'],
                ['HR', 'Headcount reporting, turnover analysis, hiring pipeline, time-to-fill by role'],
                ['Product', 'Feature adoption, user retention, funnel analysis, session depth metrics'],
                ['Executive', 'Company scorecard, OKR progress, board reporting packages'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Match the Tool to the Layer',
              text: 'A common BI architecture mistake is using one tool to do everything — a BI visualization tool is not the right place to transform raw data, and a data pipeline tool is not designed for drag-and-drop dashboard building. Each layer of the stack has specialized, purpose-built tools. Trying to squeeze complex business logic into a BI tool\'s calculated fields — instead of handling it in a transformation layer like dbt — leads to unmaintainable, hard-to-test metrics.',
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
              text: 'Investing in BI is not free — platforms, engineering, and analyst time cost money. Justifying that investment requires quantifying the business value delivered. BI programs generate ROI through several mechanisms: faster decisions, more accurate decisions, reduced analyst burden from manual reporting work, and discovered opportunities that would otherwise remain invisible. A well-run BI program pays for itself many times over; a poorly-run BI program that is underutilized delivers no ROI despite significant spend.',
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
                'Analyst leverage: One analyst can serve 10× more users via self-service vs. building bespoke reports',
                'Revenue opportunities: Insights that identify underperforming segments or untapped markets',
                'Cost reduction: Identifying operational inefficiencies — inventory excess, process bottlenecks, underperforming campaigns',
                'Risk reduction: Early warning dashboards that surface problems before they become crises',
                'Avoided costs: Fewer bad hires, fewer failed product launches, fewer pricing errors — decisions improved by data',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'A BI Win: Reducing Customer Churn',
              text: 'A SaaS company builds a BI dashboard tracking early warning indicators of customer churn — declining login frequency, unresolved support tickets, low feature adoption scores. Customer success managers receive an automated weekly list of at-risk accounts ranked by churn probability. Proactive outreach to flagged accounts — a check-in call, a training session, an executive business review — reduces monthly churn from 2.5% to 2.1%. At a $2M annual churn baseline, this saves $300K per year, easily justifying the BI investment. The insight was always in the data; BI made it visible and actionable.',
            },
            {
              type: 'paragraph' as const,
              text: 'Organizations often underinvest in BI by funding the technology but not the humans and processes needed to make it effective. A sophisticated BI platform used poorly delivers no value. The full investment includes platform licensing, data engineering capacity, a dedicated BI/analytics team, training for business users, and executive sponsorship to drive adoption. Studies consistently show that organizations in the top quartile for data-driven decision-making are more profitable and grow faster than peers — but this requires investment across the full stack, not just a software purchase.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Data-Driven Decision Making',
                  definition: 'An organizational practice of grounding business decisions in quantitative evidence from data analysis, rather than solely on intuition, experience, or authority. Effective BI programs institutionalize data-driven practices at scale.',
                },
                {
                  term: 'Time-to-Insight',
                  definition: 'The elapsed time from a business question being asked to an actionable, trustworthy answer being available. Reducing time-to-insight is one of the primary value drivers of BI programs.',
                },
                {
                  term: 'Analyst Leverage',
                  definition: 'The ratio of business users served per analyst, enabled by self-service BI. A high-leverage BI program allows one analyst to support dozens of business users who build their own reports, vs. a low-leverage model where analysts manually build every report on request.',
                },
              ],
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
              text: 'Dimensional modeling, developed by Ralph Kimball in the 1990s, is the standard approach for structuring data in a data warehouse or BI layer. It organizes data into two types of tables — facts and dimensions — arranged in a pattern called the star schema. This structure prioritizes query performance and business user understandability over the storage efficiency favored by normalized operational databases. Dimensional models are designed to answer the kinds of questions business users actually ask: "How much did we sell, by product, by region, by month?" — a query that joins the central fact table to just a few dimensions.',
            },
            {
              type: 'diagram' as const,
              diagramId: 'star-schema',
              title: 'Star Schema Data Model',
            },
            {
              type: 'heading' as const,
              text: 'Why Not Use 3NF for BI?',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Third Normal Form (3NF) databases, used in operational systems like ERP and CRM, minimize data redundancy through normalization. This is ideal for transactional writes but terrible for analytical reads — queries require joining dozens of tables, making them slow and complex for business users to understand or write. Dimensional models deliberately denormalize data, accepting some redundancy in exchange for dramatically simpler queries and faster performance. A business user can understand a star schema intuitively; the 3NF schema of a production ERP might have hundreds of tables with cryptic names like FK_CUST_ACCT_REL_TYP.',
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'The Star Schema',
              text: 'In a star schema, one central fact table connects to multiple dimension tables via foreign keys — creating a star-like shape when drawn as an entity-relationship diagram. The fact table stores measures (revenue, quantity, duration), and dimension tables store descriptive attributes (customer name, product category, date). A query joining the fact table to two or three dimensions can answer most analytical questions with good performance.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Fact Table',
                  definition: 'The central table in a star schema storing quantitative measurements of business events — one row per transaction or event, with foreign keys to dimension tables and numeric measures such as revenue, quantity, and duration.',
                },
                {
                  term: 'Dimension Table',
                  definition: 'A table containing descriptive attributes about a business entity — customer name, product category, geography, sales rep name — used to filter, group, and label fact table data. Dimension tables are typically smaller than fact tables and change infrequently.',
                },
                {
                  term: 'Grain',
                  definition: 'The level of detail represented by one row in a fact table. "One row per sales line item" is a finer grain than "one row per order." Defining grain precisely before building the fact table is the most important step in dimensional modeling — getting it wrong makes the entire model unusable.',
                },
                {
                  term: 'Surrogate Key',
                  definition: 'A meaningless, system-generated integer key used to uniquely identify rows in a dimension table. Surrogate keys decouple the data warehouse from changes in source system IDs and enable SCD Type 2 history tracking.',
                },
              ],
            },
            {
              type: 'table' as const,
              headers: ['Schema Type', 'Structure', 'Query Complexity', 'Best For'],
              rows: [
                ['Star Schema', 'Fact table + denormalized dimension tables', 'Simple — few joins', 'BI / analytics workloads, self-service reporting'],
                ['Snowflake Schema', 'Star schema with some normalized dimension tables', 'Moderate — more joins than star', 'When dimension tables are very large or have sub-hierarchies'],
                ['Third Normal Form (3NF)', 'Fully normalized with many related tables', 'Complex — many joins', 'Operational transactional systems (ERP, CRM)'],
                ['Flat / Wide Table', 'All fields in one denormalized table', 'Trivial — no joins', 'Simple dashboards on small datasets; not scalable'],
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
              text: 'Dimension attributes are not permanent. A customer changes their address, a product moves to a different category, a salesperson transfers to a different region. How should the data warehouse handle these changes? The answer — called a Slowly Changing Dimension (SCD) strategy — has significant implications for historical reporting accuracy. Choose the wrong strategy and you will find that your historical reports no longer accurately reflect what was true at the time; choose correctly and you preserve the analytical integrity of your data across years of organizational change.',
            },
            {
              type: 'heading' as const,
              text: 'SCD Types Compared',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['SCD Type', 'Approach', 'Keeps History?', 'Storage Impact', 'Best For'],
              rows: [
                ['Type 1 (Overwrite)', 'Overwrite the old value with the new one in place', 'No', 'Minimal', 'Correcting data errors; attributes where history genuinely doesn\'t matter'],
                ['Type 2 (New Row)', 'Insert a new row with effective start/end dates; expire the old row', 'Yes — full history', 'Grows with each change', 'Segment changes, territory changes — where historical accuracy is critical'],
                ['Type 3 (New Column)', 'Add a "previous value" column alongside the current value', 'Partial — only previous and current', 'Moderate — extra columns', 'Simple before/after tracking; attributes that rarely change more than once'],
                ['Type 4 (History Table)', 'Maintain a separate history table alongside the current dimension', 'Yes — in separate table', 'Separate table', 'High-change dimensions where querying history is rare'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'SCD Type 2 in Practice',
              text: 'A customer was in the "SMB" segment in Q1 and moved to "Enterprise" in Q3. With SCD Type 2, the customer dimension has two rows: one for the SMB period (valid January 1–June 30, marked as expired) and one for the Enterprise period (valid July 1–present, marked as current). Historical Q1 analysis joins to the SMB row and correctly shows them as SMB at the time of purchase. Q4 analysis joins to the Enterprise row and correctly categorizes them as Enterprise. Without SCD Type 2, any change to the customer\'s segment would retroactively rewrite all historical analysis — making it impossible to accurately report on cohorts.',
            },
            {
              type: 'paragraph' as const,
              text: 'The default should be SCD Type 2 for most dimension attributes where historical accuracy matters. The additional storage cost is minimal on modern cloud warehouses where storage is cheap, and the analytical accuracy it preserves is invaluable. Many organizations regret choosing Type 1 for simplicity only to discover they cannot accurately report on historical cohorts. Type 2 does require more complex ETL logic to implement, but dbt (data build tool) and modern ELT platforms have made SCD Type 2 implementation significantly more accessible.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Slowly Changing Dimension (SCD)',
                  definition: 'A dimension whose attributes change infrequently over time, requiring a deliberate strategy for whether to overwrite old values (Type 1), preserve history with new rows (Type 2), or track changes in new columns (Type 3).',
                },
                {
                  term: 'Effective Date',
                  definition: 'In SCD Type 2, the date range during which a particular version of a dimension row was the current, accurate representation. Rows have an effective start date and either an effective end date (for expired versions) or NULL/9999-12-31 (for the current version).',
                },
              ],
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
              text: 'As data volumes grow and dashboards become more complex, query performance becomes a meaningful challenge. Analytical queries that scan billions of rows on every dashboard load create slow user experiences and high cloud compute costs. Cloud warehouses like Snowflake and BigQuery charge by the data scanned, meaning slow queries are not just frustrating — they are expensive. Aggregation layers — pre-computed summary tables — are the primary technique for addressing this challenge while keeping dashboards snappy and costs controlled.',
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
                'Materialized views: Database-native pre-computed views that are refreshed on a schedule or when underlying data changes',
                'Columnar storage: Cloud warehouses store data by column rather than row, making aggregations on specific columns extremely fast without reading unnecessary data',
                'Partitioning and clustering: Organizing data by date or key dimensions so queries scan only relevant partitions',
                'BI caching: Tableau and Power BI cache query results and serve repeat requests from cache, bypassing the warehouse entirely for common queries',
                'Import mode (Power BI): Loads a compressed snapshot into Power BI\'s in-memory engine for sub-second query performance on medium-sized datasets',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Design for the Most Common Questions',
              text: 'The 80/20 rule applies to BI queries: 80% of dashboard load comes from 20% of queries. Identify the most-viewed dashboards and most-commonly run queries using your BI platform\'s usage analytics, then pre-aggregate specifically for those. This targeted optimization delivers the largest user experience improvement for the least engineering effort. Do not pre-aggregate everything — only the queries that genuinely need it.',
            },
            {
              type: 'table' as const,
              headers: ['Performance Technique', 'Where Applied', 'Best For', 'Trade-off'],
              rows: [
                ['Pre-aggregated summary table', 'Data warehouse', 'High-traffic dashboards with known aggregations', 'Must be maintained; adds ETL complexity'],
                ['Materialized view', 'Data warehouse', 'Semi-static aggregations that change on data arrival', 'Refresh cost; stale between refreshes'],
                ['BI caching', 'BI platform', 'Repeat queries from many users hitting same dashboard', 'Cached data may be slightly stale'],
                ['Columnar + clustering', 'Data warehouse', 'All analytical queries at scale', 'One-time setup; almost no trade-off'],
                ['Import mode', 'Power BI', 'Medium datasets requiring very fast interactivity', 'Data not real-time; memory limits'],
              ],
            },
          ],
        },
        {
          id: 'bi-m2-l4',
          title: 'The Semantic Layer & dbt',
          estimatedMinutes: 12,
          content: [
            {
              type: 'paragraph' as const,
              text: 'One of the most common problems in BI programs is "metric sprawl" — different teams calculating the same business metric differently, leading to conflicting numbers and eroded trust. Revenue in the finance team\'s dashboard doesn\'t match revenue in the sales team\'s dashboard; each was calculated differently in the BI tool. The semantic layer — also called the metrics layer or transformation layer — solves this by defining business logic once, in code, where it can be version-controlled, tested, and reused across all reports.',
            },
            {
              type: 'paragraph' as const,
              text: 'dbt (data build tool) has become the standard transformation tool in the modern data stack. It allows analysts to write SQL transformations as version-controlled code, test data quality automatically, generate documentation, and build a shared library of clean, reliable tables that all downstream BI tools can reference. When a business rule changes — say, revenue is now recognized on ship date instead of invoice date — the change is made once in dbt and propagates to every dashboard that uses that model. Without a semantic layer, the same change must be made manually in every report in every BI tool.',
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'Metrics Layer in Action',
              text: 'A company defines "Monthly Recurring Revenue (MRR)" in dbt: it includes active subscriptions on the last day of the month, excludes churned customers and one-time purchases, and converts all currencies to USD at the month-end exchange rate. This definition is written once as tested dbt code. Every Tableau dashboard, every Power BI report, every Slack notification that references MRR pulls from this single model. When the CFO changes the MRR calculation, one dbt code change propagates everywhere — no hunting through 20 different dashboards to update each one.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Semantic Layer',
                  definition: 'A translation layer between raw data and BI tools that defines business metrics, dimensions, and rules in one place. Ensures consistent calculation of KPIs across all reports and tools. Implemented via tools like dbt, Looker LookML, or AtScale.',
                },
                {
                  term: 'dbt (data build tool)',
                  definition: 'An open-source transformation framework that allows analysts to define SQL-based data transformations as version-controlled, testable, documented code. The standard transformation tool in the modern data stack.',
                },
                {
                  term: 'Metric Sprawl',
                  definition: 'The proliferation of inconsistently defined metrics across multiple BI reports and tools, leading to conflicting numbers and loss of trust in data. A semantic layer is the primary remedy for metric sprawl.',
                },
              ],
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
              text: 'The most common cause of a BI dashboard that nobody uses is building the wrong thing. Requirements gathering — deeply understanding what the audience needs to know, decide, and do — is the critical first step before writing any SQL or opening a BI tool. Skip it, and you build a beautiful dashboard that answers questions nobody is asking. The requirements process is also when you surface conflicting definitions, identify data availability gaps, and align stakeholders on what the numbers will actually show — preventing post-launch disappointment when the numbers differ from someone\'s expectation.',
            },
            {
              type: 'heading' as const,
              text: 'Effective Requirements Questions',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                '"What decisions do you make regularly that this dashboard should inform?"',
                '"What questions do you currently answer using spreadsheets or manual reports?"',
                '"Who else looks at this data? What do they care about?"',
                '"If the dashboard showed you one number each morning, what would be the most valuable number?"',
                '"How will you know if the data is wrong? What would you check against?"',
                '"How often does this metric change? Do you need daily, hourly, or real-time refresh?"',
                '"What would prompt you to take action? What is the \'good\' threshold and the \'bad\' threshold?"',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'A Precise KPI Definition',
              text: 'Every KPI should have: a name, a precise formula (including what\'s included and excluded), the data source it draws from, the responsible owner (who fixes it when it\'s wrong), the refresh cadence, and the target or threshold. Vague definitions like "monthly revenue" leave ambiguity: Does it include refunds? Only invoiced or also recognized? Which entities? All subsidiaries? Each ambiguity becomes a stakeholder disagreement when the number differs from their expectation.',
            },
            {
              type: 'table' as const,
              headers: ['KPI Component', 'Purpose', 'Example: MRR'],
              rows: [
                ['Name', 'Clear, unambiguous label', 'Monthly Recurring Revenue (MRR)'],
                ['Formula', 'Exact calculation including inclusions/exclusions', 'Sum of active subscription values on last day of month, excluding one-time fees and churned accounts, in USD'],
                ['Data source', 'Where the underlying data lives', 'Billing system, converted via finance-approved FX rates'],
                ['Owner', 'Who is responsible when the number is wrong', 'VP Finance — Sarah Chen'],
                ['Refresh cadence', 'How often it updates', 'Monthly, published on the 3rd business day after month-end close'],
                ['Target / threshold', 'What constitutes good vs. bad performance', 'Target: $2.5M; red below $2.3M; green above $2.5M'],
              ],
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Dashboard Requirements',
                  definition: 'A documented specification of what a dashboard or report must show, including the audience, the decisions it supports, the specific metrics, filtering requirements, and data freshness expectations. Requirements are gathered before any development begins.',
                },
                {
                  term: 'Metric Definition',
                  definition: 'A precise, documented specification of how a business metric is calculated — including the formula, inclusions, exclusions, data source, and handling of edge cases. Prevents conflicting interpretations across teams and tools.',
                },
              ],
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
              text: 'Not all BI content serves the same purpose. Different report types answer different questions, are consumed in different contexts, and require different design approaches. A dashboard designed for an executive\'s 30-second glance during a board meeting should look very different from an operational dashboard that a customer service manager monitors all day, which should look very different from an analytical report an analyst uses to investigate a specific business question. Matching design to purpose is fundamental to building BI that gets used.',
            },
            {
              type: 'table' as const,
              headers: ['Report Type', 'Purpose', 'Audience', 'Key Design Principle'],
              rows: [
                ['Executive scorecard', 'Top-level KPIs at a glance for senior leadership', 'C-suite, board', 'Maximum 6–8 metrics; RAG status; minimal detail; mobile-friendly'],
                ['Operational dashboard', 'Real-time or near-real-time performance monitoring', 'Operations managers, team leads', 'Actionable alerts; current period focus; linked to drill-down'],
                ['Analytical report', 'Deep exploration of a specific business question', 'Analysts, managers', 'Flexible filtering; multiple chart types; exportable data'],
                ['Ad-hoc report', 'One-off questions from business users', 'Any business user', 'Self-service; flexible columns; fast to build'],
                ['Embedded analytics', 'Analytics built into an operational application', 'Application end-users', 'Context-specific; minimal navigation; personalized to user context'],
                ['Scheduled report', 'Regular delivery of a fixed snapshot', 'Busy executives, field teams', 'Email or Slack; clear subject line with key number; easy to scan'],
              ],
            },
            {
              type: 'heading' as const,
              text: 'Drill-Down Design',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'A well-designed drill-down path allows users to move from summary to detail progressively — answering the natural "why?" that follows every summary metric. The classic path: company total → region → product category → individual deal or transaction. Each level answers the follow-up question raised by the level above. Well-designed drill-downs eliminate ad-hoc report requests, because users can answer their own follow-up questions without needing to ask an analyst.',
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'The Three-Click Rule',
              text: 'Any insight a business user should be able to surface with the BI tool should require no more than three interactions (filter, click-through, or drill-down) from the entry point. If reaching a specific insight requires 10 clicks through multiple dashboards, users will give up or request a bespoke report instead. Test your dashboard with real users and count their clicks to reach common insights.',
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
              text: 'How fresh does the data need to be? This is a business question, not a technology question, and the answer must be driven by how the data is actually used. Real-time data is more expensive to deliver and significantly more complex to engineer and maintain. Most analytical use cases are perfectly well-served by daily or even weekly data. Matching refresh cadence to actual business need reduces infrastructure cost, reduces pipeline complexity, and reduces the number of things that can go wrong — all while delivering full value to the business.',
            },
            {
              type: 'heading' as const,
              text: 'Refresh Cadence by Use Case',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Cadence', 'Best For', 'Technical Approach', 'Relative Cost'],
              rows: [
                ['Real-time / streaming', 'Fraud detection, live operational monitoring, trading floors', 'Streaming pipelines (Kafka, Flink), live DB connections', 'Very high'],
                ['Hourly', 'Same-day sales monitoring, customer support queue depth', 'Incremental pipeline runs on a cron schedule', 'Moderate'],
                ['Daily (morning)', 'Management dashboards, daily standup metrics, daily P&L', 'Nightly batch pipelines completing before business hours', 'Low'],
                ['Weekly', 'Strategic KPIs, trend analysis, board reporting packages', 'Weekend pipeline runs with full-refresh', 'Very low'],
                ['On-demand', 'Ad-hoc analysis, drill-down to current transaction data', 'Direct live connection to warehouse; no cached layer', 'Variable (per-query cost)'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Avoid Unnecessary Real-Time',
              text: 'Real-time dashboards create a perception of precision that may not add actual business value. A critical question: does this audience make different decisions if they see data updated every 5 seconds vs. every morning? If not, a daily refresh is simpler, cheaper, and more reliable. Reserve real-time streaming for genuinely time-sensitive operational monitoring — fraud detection, site reliability engineering, live event tracking. Everything else is probably fine as daily or hourly.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Batch Processing',
                  definition: 'A data pipeline pattern where data is processed in periodic scheduled runs (nightly, hourly) rather than continuously. Simpler and cheaper than streaming, appropriate for most BI use cases.',
                },
                {
                  term: 'Incremental Load',
                  definition: 'A pipeline pattern where only new or changed records since the last run are processed, rather than reloading all historical data. Faster and cheaper than full-refresh loads for large tables.',
                },
                {
                  term: 'Data Freshness SLA',
                  definition: 'A documented agreement on how current the data in a dashboard or report will be — e.g., "updated by 7:00 AM daily." Setting and communicating freshness SLAs manages user expectations and surfaces when pipelines fail.',
                },
              ],
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
              text: 'DAX (Data Analysis Expressions) is the formula language of Power BI (and Excel Power Pivot). It is used to create calculated columns, calculated tables, and most importantly, measures — dynamic aggregations that respond to the filters applied in a report. Mastering DAX is the key to unlocking Power BI\'s full analytical capabilities. Unlike SQL, which operates on tables, DAX operates on a semantic data model — it is designed to answer business questions like "what was revenue last year compared to this year, within the currently selected region and product category?" dynamically, as the user changes filters.',
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
                ['Measure', 'At query time, based on current report filters', 'Not stored — computed on demand', 'Aggregations: SUM, AVG, COUNT, ratios, YoY calculations, KPIs'],
                ['Calculated Column', 'At data refresh time, row by row', 'Stored in the data model (increases file size)', 'Row-level categorizations, static labels, flags, lookup values'],
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
                'CALCULATE(): Modifies the filter context for an expression — the most powerful and most used DAX function',
                'SUM() / AVERAGE() / COUNT() / DISTINCTCOUNT(): Basic aggregations',
                'DIVIDE(numerator, denominator, [alternate]): Safe division — returns alternate value (typically 0 or BLANK) if denominator is zero, preventing errors',
                'SUMX() / AVERAGEX() / COUNTX(): Iterator functions — evaluate an expression row-by-row then aggregate the results',
                'SAMEPERIODLASTYEAR() / DATEADD(): Time intelligence functions for year-over-year and period-over-period comparisons',
                'ALL() / ALLEXCEPT(): Remove all filters or filters on specific columns — used for computing percentage-of-total metrics',
                'FILTER(): Returns a filtered table — used inside CALCULATE to apply complex filter conditions',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'DAX in Practice: Year-over-Year Revenue',
              text: 'To calculate revenue growth: Revenue YoY % = DIVIDE([Total Revenue] - [Revenue LY], [Revenue LY], BLANK()). Where [Revenue LY] = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(\'Date\'[Date])). This measure dynamically computes last year\'s revenue for the same period currently selected in the report filters — whether the user is looking at a month, a quarter, or a full year.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'DAX (Data Analysis Expressions)',
                  definition: 'The formula language used in Power BI, Excel Power Pivot, and Azure Analysis Services to define measures, calculated columns, and calculated tables that perform dynamic aggregations and business calculations.',
                },
                {
                  term: 'Filter Context',
                  definition: 'In DAX, the set of filters currently applied to a calculation — from slicers, visual filters, row context, or CALCULATE() modifications. Understanding filter context is the key to writing correct DAX measures.',
                },
                {
                  term: 'Measure',
                  definition: 'A DAX calculation that is evaluated dynamically based on the current filter context. Measures are the correct way to implement aggregations (sums, averages, ratios, KPIs) in Power BI.',
                },
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
              text: 'Tableau\'s calculated fields allow analysts to create new data fields derived from existing ones — classification logic, ratios, date calculations, string manipulations, and conditional expressions. Unlike Power BI\'s DAX, Tableau calculations are written in a syntax closer to Excel formulas and are created directly within the drag-and-drop interface. Tableau has four distinct calculation types, each operating at a different scope, which gives it remarkable analytical flexibility — but also means practitioners need to understand which type to use for each scenario.',
            },
            {
              type: 'heading' as const,
              text: 'Tableau Calculation Types',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Basic (row-level) calculations: Evaluate at the individual row level — [Revenue] - [Cost] computes margin for each row',
                'Aggregate calculations: Expressions using AGG() functions evaluated at the view level — SUM([Revenue]) / SUM([Orders]) for average order value',
                'Table calculations: Computations across rows in the current view — RUNNING_SUM(), PERCENT_OF_TOTAL(), RANK(), WINDOW_AVG()',
                'Level of Detail (LOD) expressions: Compute at a specified granularity independent of the view — { FIXED [Customer] : MAX([Revenue]) } gives each customer\'s lifetime max order',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Live vs. Extract Connection',
              level: 2 as const,
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Live vs. Extract Connection',
              text: 'Both Tableau and Power BI support live connections (queries run against the source in real time) and extract connections (data is copied into the tool\'s own optimized, compressed format). Live connections ensure the freshest possible data; extracts provide dramatically faster query performance. For large datasets or slow source databases, extracts with scheduled refresh are typically preferred for production dashboards. Live connections are ideal for operational monitoring where freshness is critical.',
            },
            {
              type: 'paragraph' as const,
              text: 'Both Tableau and Power BI connect to a wide range of data sources: Excel and CSV files for quick analysis, SQL databases (PostgreSQL, SQL Server, MySQL) for transactional data, cloud warehouses (Snowflake, BigQuery, Redshift) for large analytical datasets, and web connectors (Google Analytics, Salesforce, HubSpot) for SaaS platform data. The connection setup is straightforward in both tools — provide credentials, select a schema, choose tables or write a custom SQL query. Best practice: always connect to a curated layer in the data warehouse rather than directly to production source system databases.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Level of Detail (LOD) Expression',
                  definition: 'A Tableau calculation type using { FIXED, INCLUDE, or EXCLUDE } syntax to compute aggregations at a specified level of granularity, independent of what dimensions are currently in the view. Enables complex analyses like cohort metrics and customer-level aggregations.',
                },
                {
                  term: 'Tableau Extract (.hyper)',
                  definition: 'A compressed, columnar snapshot of data stored in Tableau\'s proprietary format. Extracts enable fast query performance and allow dashboards to work offline or after the source database is unavailable, at the cost of not showing real-time data.',
                },
              ],
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
              text: 'Building a great dashboard is only half the work. The other half is getting it in front of the right people, with the right permissions, and keeping it updated reliably. Power BI Service and Tableau Cloud or Tableau Server are the platforms where dashboards are published, shared, and managed at organizational scale. Understanding the publishing workflow, permission model, and security features of each platform is essential for any practitioner responsible for deploying BI to an organization.',
            },
            {
              type: 'heading' as const,
              text: 'Publishing Workflows',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Platform', 'Authoring Tool', 'Publishing Target', 'Key Sharing Options'],
              rows: [
                ['Power BI', 'Power BI Desktop (.pbix)', 'Power BI Service (cloud)', 'Share links, Teams/SharePoint embed, Power BI Apps for groups, subscription emails'],
                ['Tableau', 'Tableau Desktop (.twbx)', 'Tableau Cloud or Tableau Server', 'Shared views, embedded URLs, subscription emails, Slack integration, API-based embedding'],
              ],
            },
            {
              type: 'heading' as const,
              text: 'Row-Level Security (RLS)',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Row-level security restricts which data rows a specific user can see within the same published report. A regional sales manager should see only their region\'s data; an individual rep should see only their own pipeline; a finance partner should see only their business unit\'s costs. RLS enables one report to safely serve many users with different data access requirements, eliminating the need to build and maintain separate versions of the same dashboard for different audiences. In Power BI, RLS is configured as roles in the data model that filter tables based on a user identity expression. In Tableau, data-level security is typically implemented at the database level or through user filters on published data sources.',
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Test RLS Thoroughly Before Publishing',
              text: 'Row-level security misconfigurations are a serious data exposure risk. A logic error — a role that grants instead of restricts, or a condition that evaluates to TRUE for every user — can expose sensitive salary, customer, or financial data to unauthorized users. Always test RLS by impersonating multiple different user personas (use "View As" in Power BI and "Switch User" in Tableau) before publishing to production. Include edge cases: users with no matches, users in multiple regions, users who are also managers.',
            },
          ],
        },
        {
          id: 'bi-m4-l4',
          title: 'Platform Selection: Power BI vs. Tableau vs. Looker',
          estimatedMinutes: 12,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Choosing a BI platform is a significant organizational decision — switching platforms is expensive and disruptive, so the choice should be made thoughtfully with input from technical users, business users, IT, and finance. The right platform depends on the organization\'s existing technology ecosystem, data team maturity, budget, and specific use cases. Each of the three leading platforms has distinct strengths that make it the best choice for different organizational contexts.',
            },
            {
              type: 'table' as const,
              headers: ['Platform', 'Owned By', 'Best For', 'Key Strength', 'Key Limitation'],
              rows: [
                ['Power BI', 'Microsoft', 'Microsoft-ecosystem organizations', 'Deep Office 365 / Azure integration, affordable licensing, DAX power', 'Best features require Windows / Microsoft stack; less beautiful default visualizations'],
                ['Tableau', 'Salesforce', 'Data analyst-heavy teams, complex visual analytics', 'Industry-leading visualizations, flexible, deep analytical capabilities', 'Expensive per-seat licensing, higher learning curve for business users'],
                ['Looker', 'Google (Alphabet)', 'Engineering-led data teams, embedded analytics', 'LookML semantic layer, best-in-class governed metrics, API-first', 'Requires developer skills to build, higher barrier to self-service for non-technical users'],
                ['Metabase', 'Open source', 'Startups and engineering teams, self-hosted BI', 'Free, easy to self-host, simple SQL-based questions', 'Limited visualization options, less enterprise-grade governance'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Run a Proof of Concept',
              text: 'Before committing to a BI platform, run a two-week proof of concept with each finalist tool. Give a cross-functional team — including business users, analysts, and IT — a common set of dashboards to build and use. Evaluate each on: time-to-first-dashboard, user satisfaction, performance on your actual data volumes, IT security and access control features, and total cost including implementation. Vendor demos are designed to highlight strengths; POCs reveal real-world fit.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'LookML',
                  definition: 'Looker\'s proprietary modeling language used to define metrics, dimensions, and business logic in a semantic layer. LookML models are the source of truth for all Looker reports, enabling consistent, governed analytics.',
                },
                {
                  term: 'Embedded Analytics',
                  definition: 'BI visualizations embedded directly inside another application — a CRM, a customer portal, or an internal tool — rather than accessed through a standalone BI platform. Reduces context-switching and delivers analytics in the user\'s workflow.',
                },
              ],
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
          explanation: 'False. CALCULATE() is DAX\'s most powerful general-purpose function — it evaluates an expression while modifying the filter context. It is not specific to dates; it\'s used for segment comparisons, overriding filters, computing totals, percentage of total, and much more.',
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
              text: 'As BI programs mature, they encounter a predictable governance crisis: too many dashboards, conflicting metrics, duplicated content, no clear ownership, and widespread uncertainty about which number to trust. Left unaddressed, this "Wild West" phase erodes data trust to the point where executives revert to spreadsheets and informal judgment. BI governance is the set of policies, processes, roles, and standards that prevent this deterioration — ensuring that BI content is accurate, accessible, secure, and trusted throughout the organization\'s data journey.',
            },
            {
              type: 'heading' as const,
              text: 'Core Governance Components',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Certified datasets: A review and endorsement process that marks certain datasets as officially trusted, tested, and authoritative',
                'Metric definitions: A shared business glossary defining exactly what each KPI means, its formula, inclusions, exclusions, and owner',
                'Content ownership: Every dashboard and dataset has a named owner responsible for its accuracy and maintenance',
                'Access controls: Role-based permissions determining who can view, build on, and publish BI content',
                'Change management: A process for updating certified content that includes impact analysis, stakeholder notification, and testing',
                'Deprecation policy: How to retire outdated content without breaking dependent reports or confusing users',
                'Data quality monitoring: Automated checks that alert owners when data pipeline issues affect dashboard accuracy',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Certified Datasets',
              text: 'Power BI\'s "Certified Dataset" and Tableau\'s "Published Data Source" features let BI administrators mark official, reviewed datasets with a visual endorsement badge. When business users see a certified source, they know it has been reviewed for accuracy, has a defined owner, follows naming standards, and will be maintained over time. Non-certified content may still exist — user-created workbooks, experimental analyses — but users are clearly signaled to prefer certified sources for official reporting.',
            },
            {
              type: 'table' as const,
              headers: ['Governance Element', 'Problem It Solves', 'Who Owns It'],
              rows: [
                ['Certified datasets', 'Users can\'t tell which data source is authoritative', 'BI/data team lead'],
                ['Business glossary', 'Different teams define the same metric differently', 'Business intelligence team + finance'],
                ['Content ownership', 'No one updates stale dashboards; broken reports persist', 'Individual dashboard creators'],
                ['Access control policy', 'Sensitive data exposed to unauthorized users', 'IT security + BI team'],
                ['Deprecation policy', 'Old, wrong dashboards continue to be used after replacement', 'BI team + content owners'],
                ['Data quality monitoring', 'Dashboards silently show wrong numbers when pipelines break', 'Data engineering team'],
              ],
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'BI Governance',
                  definition: 'The policies, processes, roles, and standards that ensure BI content is accurate, accessible, secure, and trusted. Governance prevents metric sprawl, conflicting definitions, unauthorized data access, and the erosion of trust in organizational data.',
                },
                {
                  term: 'Business Glossary',
                  definition: 'A shared, authoritative reference that defines business terms and metrics — including precise formulas, inclusions, exclusions, data sources, and owners. The business glossary is the organizational answer to "what does [metric] mean?"',
                },
                {
                  term: 'Content Ownership',
                  definition: 'The assignment of responsibility for each BI artifact (dashboard, dataset, report) to a named individual who is accountable for its accuracy, maintenance, and timely updates.',
                },
              ],
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
              text: 'Technology and governance are necessary but not sufficient for a successful BI program. The ultimate goal is a data culture — an organizational environment where decisions at every level are routinely informed by data, where data literacy is a valued and rewarded skill, and where "what does the data say?" is the default first response to any business question. Data culture is built over years, not months, through sustained organizational behavior change. It requires visible commitment from senior leadership, investment in human capability, and elimination of the friction that prevents people from accessing and using data in their daily work.',
            },
            {
              type: 'heading' as const,
              text: 'Building Data Culture Practices',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Executive modeling: Leaders who visibly use dashboards in meetings and reference data in decisions signal that data matters more powerfully than any policy',
                'Data literacy programs: Training that improves analytical skills across all levels, not just data teams — from basic chart reading to SQL for power users',
                'Data champions network: Department-level advocates who promote data use, assist peers with self-service tools, and surface analytics needs back to the data team',
                'Celebrate data wins: Publish internal case studies of decisions that improved because of data — make the value concrete and visible',
                'Make data accessible: If getting a number requires filing a help ticket and waiting three days, people won\'t bother — reduce friction everywhere possible',
                'Reward data-informed decisions: Recognize and promote employees who bring data to discussions, even when the data challenges the current narrative',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'Measuring BI Program Success',
              text: 'BI program success metrics include: active users per week (breadth of adoption), average dashboard views per user per week (depth of engagement), the analyst-to-business-user ratio for report requests (self-service rate), time-to-insight for common questions (decision speed), and qualitative data trust survey scores (is the data believed?). Track these metrics quarterly and set targets, just as you would for any other business program. A BI program that cannot measure its own success has a governance gap.',
            },
            {
              type: 'paragraph' as const,
              text: 'Change management for BI adoption follows the same principles as any organizational change initiative: communicate the vision compellingly, involve users early in design, train thoroughly and role-specifically, address resistance and skepticism directly rather than ignoring it, and measure progress visibly. The data team\'s role is half technical and half organizational change management. Data professionals who invest only in technical skills and ignore the organizational dimension consistently underperform peers who can translate between technical possibilities and business needs.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Data Culture',
                  definition: 'An organizational environment where data-informed decision-making is the norm at every level, data literacy is valued, and barriers to accessing and using data are actively minimized.',
                },
                {
                  term: 'Data Literacy',
                  definition: 'The ability to read, understand, question, and communicate with data. A baseline level of data literacy across an organization is a prerequisite for self-service BI to deliver its full value.',
                },
                {
                  term: 'Data Champions',
                  definition: 'Enthusiastic, data-capable employees embedded in business departments who serve as advocates for data use, peer trainers, and bridges between their department\'s needs and the central data team\'s capabilities.',
                },
              ],
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
              text: 'BI platforms aggregate data from across the organization — financial performance, HR compensation, customer contracts, operational metrics, and product usage. This breadth makes access control critical: the wrong person seeing the wrong data can result in compliance violations, privacy breaches, competitive intelligence leaks, or regulatory penalties. A layered security model addresses different dimensions of access control, applying appropriate restrictions at each level of the data and content hierarchy.',
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
                ['Platform access', 'Who can log into the BI platform', 'SSO integration with company identity provider; MFA required'],
                ['Workspace/folder permissions', 'Which content areas a user can browse', 'Finance workspace visible only to Finance and Executive teams'],
                ['Dataset permissions', 'Who can access a specific dataset and build new reports on it', 'HR compensation data restricted to HR Business Partners and CHRO'],
                ['Row-level security', 'Which data rows within a dataset a user can see', 'Regional VP sees only their region; individual rep sees only their own pipeline'],
                ['Column-level security', 'Masking or hiding specific sensitive columns', 'Salary and SSN columns hidden from non-HR viewers of employee reports'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Principle of Least Privilege',
              text: 'Apply the principle of least privilege consistently: users should have access to the minimum data necessary to perform their job function — no more. It is operationally much easier to grant additional access when needed than to recover from a data breach caused by over-permissive settings. Conduct quarterly access reviews: audit who has access to sensitive BI content and promptly remove access for users who have changed roles, changed departments, or left the organization.',
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Automate Access via SSO Groups',
              text: 'The most scalable approach to BI access management is integration with your company\'s identity provider (Okta, Azure Active Directory, Google Workspace) via SSO. Map BI workspace access to SSO group membership — when an employee joins the Finance team, they automatically gain Finance BI workspace access. When they transfer to Sales, access updates automatically. This eliminates the manual overhead of provisioning and deprovisioning and prevents stale access from accumulating over time.',
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
