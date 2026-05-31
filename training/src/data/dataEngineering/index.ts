import type { Course } from '../../types/course';

export const dataEngineeringCourse: Course = {
  id: 'data-engineering',
  track: 'data-management',
  title: 'Foundations of Data Engineering',
  subtitle: 'Building Reliable Data Infrastructure',
  description:
    'Learn how modern data engineers design, build, and maintain the pipelines and infrastructure that power data-driven organizations. From ETL fundamentals to cloud platforms, this course covers the full data engineering lifecycle.',
  status: 'available',
  estimatedHours: 7,
  color: '#4a9eff',
  icon: '🔧',
  modules: [
    {
      id: 'de-m1',
      number: 1,
      title: 'What is Data Engineering?',
      description:
        'Understand the role of the data engineer in the modern organization, how data pipelines work, and the key distinctions between ETL and ELT, batch and streaming processing.',
      estimatedMinutes: 60,
      learningObjectives: [
        'Define the data engineering role and how it differs from data science and data analysis',
        'Explain the anatomy of a data pipeline and why pipelines exist',
        'Distinguish between ETL and ELT patterns and when to use each',
        'Compare batch processing and streaming processing use cases',
        'Identify the components of the modern data stack',
      ],
      lessons: [
        {
          id: 'de-m1-l1',
          title: 'The Role of the Data Engineer',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Data engineering is the discipline of designing and building systems that collect, store, and process data at scale. While data scientists build models and analysts create reports, data engineers build and maintain the infrastructure that makes those activities possible. Think of the data engineer as the plumber of the data organization — without reliable pipes, nothing flows.',
            },
            {
              type: 'heading' as const,
              text: 'Where Data Engineers Fit',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'A data engineer sits at the intersection of software engineering and data work. They write production-grade code, manage databases and cloud infrastructure, and build pipelines that move data reliably from sources to destinations. Unlike a software engineer focused on product features, a data engineer\'s product is the data itself — clean, timely, and accessible.',
            },
            {
              type: 'list' as const,
              items: [
                'Build and maintain ETL/ELT pipelines that move data between systems',
                'Design schemas and data models in warehouses and lakes',
                'Ensure data quality and reliability through monitoring and testing',
                'Collaborate with analysts and scientists to understand data needs',
                'Manage infrastructure costs and performance on cloud platforms',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Data Engineer vs. Data Scientist',
              text: 'A common confusion: data scientists build predictive models and extract insights; data engineers build the infrastructure those scientists depend on. A well-functioning data team needs both. In smaller organizations, one person may wear both hats, but at scale the roles are distinct.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Data Pipeline',
                  definition:
                    'A series of automated steps that move and transform data from a source system to a destination, such as a data warehouse.',
                },
                {
                  term: 'Data Warehouse',
                  definition:
                    'A centralized repository optimized for analytical queries, storing structured, processed data from multiple source systems.',
                },
                {
                  term: 'Modern Data Stack',
                  definition:
                    'A collection of cloud-native tools — typically including a data warehouse, ELT tool, and BI layer — that together form a scalable analytics infrastructure.',
                },
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Building a Data Team at a Mid-Size SaaS Company', text: 'A 200-person B2B SaaS company had no dedicated data engineer — analysts pulled data manually from the product database, causing report discrepancies and 3-hour delays every morning. They hired their first data engineer to build a centralized pipeline architecture. Within 90 days the engineer had established a Fivetran → Snowflake → dbt stack, reducing data preparation time from 3 hours to under 15 minutes daily. Analyst productivity increased by an estimated 40% and cross-departmental revenue figures became consistent for the first time.' },
            { type: 'paragraph' as const, text: 'This case illustrates why the data engineer role is foundational: without reliable pipes, even skilled analysts cannot do their jobs effectively. The separation of concerns — engineers building infrastructure, analysts building insights — is what allows each function to excel.' },
            { type: 'list' as const, items: ['Data engineers unblock everyone else by building reliable, reusable infrastructure', 'Even a single dedicated data engineer can transform a team\'s analytical capacity', 'Clear role separation between engineering and analysis prevents both bottlenecks and duplicated effort'] },
          ],
        },
        {
          id: 'de-m1-l2',
          title: 'ETL vs. ELT',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'For decades, the dominant pattern for moving data was ETL: Extract, Transform, Load. Data was pulled from source systems, transformed in a separate compute layer, and then loaded into a target database. This approach worked well when storage was expensive and compute outside the database was powerful.',
            },
            {
              type: 'heading' as const,
              text: 'The Shift to ELT',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Cloud data warehouses like BigQuery, Snowflake, and Redshift changed the economics. Storage became cheap and warehouse compute became extremely powerful. This enabled ELT: Extract, Load, Transform. Data is loaded raw into the warehouse first, then transformed inside the warehouse using SQL. Tools like dbt (data build tool) were purpose-built for this pattern.',
            },
            {
              type: 'table' as const,
              headers: ['Aspect', 'ETL', 'ELT'],
              rows: [
                ['Where transforms happen', 'External compute (e.g., Spark, custom code)', 'Inside the data warehouse (SQL)'],
                ['Raw data preserved?', 'Often no — transformed before loading', 'Yes — raw data lands first'],
                ['Latency', 'Can be slow for complex transforms', 'Typically faster end-to-end'],
                ['Best for', 'Legacy systems, sensitive data masking', 'Cloud warehouses, modern analytics'],
                ['Skill required', 'Python/Java/Spark expertise', 'SQL proficiency + warehouse knowledge'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'When to Use ETL',
              text: 'ETL still makes sense when you must transform or mask sensitive data (like PII) before it ever enters your warehouse, when you\'re working with legacy on-premise databases, or when the transformations are too complex or resource-intensive to run inside the warehouse.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Healthcare Insurer Migrates from ETL to ELT', text: 'A regional health insurance company ran a legacy ETL pipeline that transformed claims data in a custom Java layer before loading into an on-premise Oracle warehouse. Each nightly run took 6 hours and frequently failed on schema changes from upstream systems. The data team migrated non-PII data to an ELT pattern using Fivetran and Snowflake, keeping a thin ETL layer only for HIPAA-regulated fields requiring masking before warehouse ingestion. The new pipeline completed in 45 minutes, schema changes no longer caused failures, and the team retired 8,000 lines of Java transformation code.' },
            { type: 'paragraph' as const, text: 'The hybrid approach this company took — ELT for most data, ETL for regulated PII fields — reflects how the two patterns complement rather than replace each other. Understanding when each pattern applies allows engineers to design systems that are both efficient and compliant.' },
            { type: 'list' as const, items: ['ELT dramatically reduces pipeline complexity by leveraging the warehouse\'s own compute', 'ETL remains the right choice when data must be masked or filtered before leaving secure boundaries', 'Migrating from ETL to ELT typically reduces pipeline run times by 50–90%'] },
          ],
        },
        {
          id: 'de-m1-l3',
          title: 'Batch vs. Streaming Processing',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'One of the most important architectural decisions in data engineering is how frequently data should be processed. Batch processing runs at scheduled intervals — hourly, daily, or weekly. Streaming processing handles data as it arrives, in real-time or near-real-time. Both have legitimate use cases, and many modern systems use both together.',
            },
            {
              type: 'heading' as const,
              text: 'Batch Processing',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Batch pipelines collect data over a period, then process it all at once. A nightly sales report that aggregates yesterday\'s transactions is a classic batch job. Batch systems are simpler to build, debug, and operate. They are the right choice when near-real-time data is not required — which is most analytical use cases.',
            },
            {
              type: 'heading' as const,
              text: 'Streaming Processing',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Streaming systems process events as they occur. Fraud detection, live inventory tracking, and real-time dashboards are common streaming use cases. Technologies like Apache Kafka (for messaging) and Apache Flink or Spark Streaming (for processing) underpin most streaming architectures. Streaming adds significant operational complexity and should only be adopted when the business genuinely requires low-latency data.',
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Avoid Premature Streaming',
              text: 'Streaming is seductive but expensive. Most analytics problems are perfectly well-served by hourly or even daily batch pipelines. Before building a streaming system, validate the business need: does the decision actually change if data arrives in 5 seconds vs. 1 hour? If not, batch is the better choice.',
            },
            {
              type: 'list' as const,
              items: [
                'Batch: simpler, cheaper, easier to reprocess historical data',
                'Streaming: lower latency, higher operational complexity, higher cost',
                'Lambda architecture: run both batch and streaming, merge results',
                'Kappa architecture: use streaming for everything, simplifying the stack',
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Ride-Share Platform Adopts Streaming for Driver Matching', text: 'A ride-share startup initially used hourly batch jobs to update driver availability data in their matching engine, causing a 15–60 minute lag between a driver going online and appearing in the system. As the platform scaled to 50,000 active drivers, this lag created significant ride abandonment. The team implemented an Apache Kafka + Flink streaming pipeline that processed driver location and status events in under 2 seconds. Ride completion rates improved by 11% and driver utilization increased by 8%, directly impacting revenue.' },
            { type: 'paragraph' as const, text: 'The key lesson from this case is that streaming was justified because the business outcome — driver matching — genuinely required sub-second data. Not all metrics in the company moved to streaming; financial reporting, driver earnings summaries, and operational dashboards stayed on batch pipelines where hourly freshness was sufficient.' },
            { type: 'list' as const, items: ['Only adopt streaming when the business decision actually changes with lower latency data', 'Batch and streaming coexist in most mature data platforms — they serve different needs', 'Streaming infrastructure carries 3–5x the operational cost and complexity of equivalent batch systems'] },
          ],
        },
        {
          id: 'de-m1-l4',
          title: 'The Modern Data Stack',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'The "modern data stack" refers to a category of cloud-native, loosely coupled tools that together form a complete analytics infrastructure. Unlike monolithic legacy platforms, modern data stack tools are best-of-breed: each tool does one thing well, and they connect via open APIs and standard formats.',
            },
            {
              type: 'heading' as const,
              text: 'Core Layers of the Modern Stack',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Layer', 'Purpose', 'Example Tools'],
              rows: [
                ['Ingestion / EL', 'Move data from sources to the warehouse', 'Fivetran, Airbyte, Stitch'],
                ['Storage / Warehouse', 'Store and query data at scale', 'Snowflake, BigQuery, Redshift'],
                ['Transformation', 'Model and clean data inside the warehouse', 'dbt, SQLMesh'],
                ['Orchestration', 'Schedule and monitor pipelines', 'Airflow, Prefect, Dagster'],
                ['BI / Visualization', 'Build dashboards and reports', 'Looker, Tableau, Power BI'],
              ],
            },
            { type: 'diagram' as const, diagramId: 'modern-data-stack', title: 'The Modern Data Stack' },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'A Typical Modern Stack',
              text: 'A mid-size company might use Fivetran to sync data from Salesforce, Stripe, and their product database into Snowflake. dbt models clean and join those sources. Airflow orchestrates the dbt runs nightly. Analysts query Snowflake directly or use Looker dashboards built on top of dbt models.',
            },
            {
              type: 'paragraph' as const,
              text: 'The shift to the modern data stack has democratized data engineering. Cloud-managed services handle infrastructure provisioning, scaling, and maintenance. This allows smaller teams to build sophisticated data platforms that would have previously required dozens of engineers.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: E-Commerce Brand Builds a Modern Stack in 60 Days', text: 'A direct-to-consumer apparel brand with $30M in annual revenue was making inventory and marketing decisions from disconnected spreadsheets exported from Shopify, Facebook Ads, and their 3PL warehouse system. A two-person data team built a modern stack in 60 days: Airbyte synced all three sources into BigQuery hourly, dbt models unified the data into clean customer and order tables, and Looker dashboards replaced the spreadsheets. Time-to-insight for weekly business reviews dropped from 2 days of manual preparation to 20 minutes, and the brand identified $400K in excess slow-moving inventory using the new unified view.' },
            { type: 'paragraph' as const, text: 'The modern data stack\'s power lies in its composability: best-of-breed tools connect through standard interfaces, so small teams can assemble enterprise-grade platforms without building everything from scratch. Each layer has a clear, single responsibility, making the system easier to upgrade, debug, and extend.' },
            { type: 'list' as const, items: ['A two-person team can build a complete modern data stack in weeks using managed cloud services', 'Separating ingestion, storage, transformation, and visualization into distinct layers makes each easier to replace or upgrade', 'Unifying data sources in a single warehouse frequently reveals insights impossible to see when data lives in silos'] },
          ],
        },
      ],
      quiz: [
        {
          id: 'de-m1-q1',
          type: 'multiple-choice' as const,
          question: 'Which pattern loads raw data into the warehouse first and then transforms it using SQL inside the warehouse?',
          options: ['ETL', 'ELT', 'Batch processing', 'Lambda architecture'],
          correctIndex: 1,
          explanation: 'ELT (Extract, Load, Transform) loads raw data into the warehouse first, then transforms it using the warehouse\'s own compute power — typically via SQL and tools like dbt.',
        },
        {
          id: 'de-m1-q2',
          type: 'multiple-choice' as const,
          question: 'Which processing approach is most appropriate for a fraud detection system that must flag suspicious transactions within seconds?',
          options: ['Nightly batch', 'Weekly batch', 'Streaming', 'Manual review'],
          correctIndex: 2,
          explanation: 'Fraud detection requires near-real-time response, making streaming the appropriate choice. Batch would introduce too much latency for timely fraud intervention.',
        },
        {
          id: 'de-m1-q3',
          type: 'true-false' as const,
          question: 'The modern data stack uses a single monolithic platform to handle ingestion, storage, transformation, and visualization.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. The modern data stack is composed of loosely coupled, best-of-breed tools where each layer is handled by a specialized tool connected via APIs and standard interfaces.',
        },
        {
          id: 'de-m1-q4',
          type: 'multiple-choice' as const,
          question: 'What is dbt primarily used for in the modern data stack?',
          options: [
            'Moving data from source systems into a warehouse',
            'Scheduling and orchestrating pipeline runs',
            'Transforming data inside the data warehouse using SQL',
            'Visualizing data in dashboards',
          ],
          correctIndex: 2,
          explanation: 'dbt (data build tool) is a transformation tool that lets data engineers and analysts write SQL models inside the warehouse. It handles compilation, testing, documentation, and lineage of those transformations.',
        },
        {
          id: 'de-m1-q5',
          type: 'true-false' as const,
          question: 'Data engineers primarily build predictive machine learning models to extract business insights.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Building predictive models is the domain of data scientists. Data engineers build the pipelines, infrastructure, and data systems that data scientists and analysts depend on.',
        },
      ],
    },
    {
      id: 'de-m2',
      number: 2,
      title: 'Data Storage & Warehousing',
      description:
        'Explore the landscape of data storage technologies — from relational databases to NoSQL, data warehouses, data lakes, and the emerging lakehouse architecture — and understand when to use each.',
      estimatedMinutes: 65,
      learningObjectives: [
        'Contrast relational and NoSQL databases and explain appropriate use cases for each',
        'Describe how data warehouses differ from operational databases',
        'Explain the data lake concept and its trade-offs',
        'Define the data lakehouse architecture and its advantages',
        'Identify common file formats (CSV, JSON, Parquet) and their characteristics',
      ],
      lessons: [
        {
          id: 'de-m2-l1',
          title: 'Relational vs. NoSQL Databases',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'The relational database, invented in the 1970s based on Edgar Codd\'s relational model, organizes data into tables with rows and columns. Relationships between tables are enforced through foreign keys. SQL (Structured Query Language) provides a standard interface for querying and manipulating this data. Relational databases remain the default choice for transactional applications.',
            },
            {
              type: 'heading' as const,
              text: 'The Rise of NoSQL',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'As internet-scale applications emerged in the 2000s, organizations like Google, Amazon, and Facebook encountered workloads that relational databases handled poorly: massive write throughput, flexible schemas, and geographic distribution. NoSQL (Not Only SQL) databases emerged to address these needs, sacrificing some relational guarantees for scalability and flexibility.',
            },
            {
              type: 'table' as const,
              headers: ['Type', 'Model', 'Examples', 'Best For'],
              rows: [
                ['Relational', 'Tables + foreign keys', 'PostgreSQL, MySQL, SQL Server', 'Transactional apps, strict consistency'],
                ['Document', 'JSON-like documents', 'MongoDB, Firestore', 'Flexible schemas, nested data'],
                ['Key-Value', 'Simple key → value pairs', 'Redis, DynamoDB', 'Caching, sessions, simple lookups'],
                ['Columnar', 'Column families', 'Cassandra, HBase', 'High write throughput, time-series'],
                ['Graph', 'Nodes and edges', 'Neo4j, Amazon Neptune', 'Relationship-heavy data, social graphs'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'OLTP vs. OLAP',
              text: 'Operational databases (OLTP — Online Transaction Processing) are optimized for many small, fast read/write operations. Analytical workloads (OLAP — Online Analytical Processing) involve complex queries over large datasets. Data warehouses are OLAP systems; application databases are OLTP systems.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Gaming Company Selects the Right Database Per Workload', text: 'A mobile gaming company running a multiplayer game needed to store player session state (updated thousands of times per second per user), social graphs showing player friendships, and historical match data for analytics. They chose three different database technologies for three different needs: Redis (key-value) for real-time session state with sub-millisecond reads, Neo4j (graph) for the social network and friend recommendations, and BigQuery (columnar warehouse) for match history analytics. Each database reduced latency or cost by over 60% compared to attempting to use a single PostgreSQL instance for all three workloads.' },
            { type: 'paragraph' as const, text: 'Database selection is one of the most consequential decisions in system design. There is no single database that excels at every workload — the right answer depends on the access patterns, consistency requirements, and scale of each specific use case.' },
            { type: 'list' as const, items: ['Match the database type to the access pattern, not the other way around', 'Polyglot persistence — using multiple database types in one system — is common in mature architectures', 'OLTP databases should never be used as analytical systems; the workloads are fundamentally incompatible at scale'] },
          ],
        },
        {
          id: 'de-m2-l2',
          title: 'Data Warehouses and Data Lakes',
          estimatedMinutes: 17,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A data warehouse is a centralized repository that stores structured, processed data from multiple source systems, optimized for analytical queries. Unlike operational databases, warehouses are designed for reading large volumes of data, often across many tables joined together. Modern cloud warehouses — Snowflake, BigQuery, Amazon Redshift — are columnar stores that can query terabytes of data in seconds.',
            },
            {
              type: 'heading' as const,
              text: 'The Data Lake',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'A data lake stores raw, unprocessed data in its native format — structured, semi-structured, and unstructured alike. The appeal: dump everything in, decide how to use it later. Object storage like Amazon S3 or Azure Data Lake Storage provides cheap, infinitely scalable storage. Data scientists can access raw logs, images, or JSON event streams that would never fit neatly into a warehouse schema.',
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'The Data Swamp Problem',
              text: 'Without governance, a data lake becomes a data swamp — a dumping ground where nobody knows what data exists, how fresh it is, or whether it can be trusted. Successful data lakes require metadata management, data cataloging, and clear ownership of datasets.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Columnar Storage',
                  definition:
                    'A database storage format where each column\'s values are stored together on disk, making analytical aggregations (SUM, AVG, COUNT) dramatically faster than row-oriented storage.',
                },
                {
                  term: 'Schema-on-Read',
                  definition:
                    'The data lake approach: data is stored without enforcing a schema, and structure is applied when the data is read/queried.',
                },
                {
                  term: 'Schema-on-Write',
                  definition:
                    'The data warehouse approach: data must conform to a defined schema before it can be loaded, ensuring consistency and quality.',
                },
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Media Streaming Platform Rescues a Data Swamp', text: 'A streaming video platform had accumulated 4 years of clickstream logs, viewing events, and content metadata in an S3-based data lake — approximately 600TB of data in inconsistent JSON formats with no catalog or ownership documentation. Data scientists spent an average of 3 days simply locating and validating data before beginning any analysis. The data engineering team implemented a governance layer: Apache Atlas for cataloging, Parquet conversion for all new data, folder-level ownership assignments, and automated freshness monitoring. After 6 months, average dataset discovery time dropped from 3 days to 2 hours, and data scientist productivity increased by an estimated 35%.' },
            { type: 'paragraph' as const, text: 'This case underscores a fundamental truth about data lakes: the technology is necessary but not sufficient. The governance layer — catalog, ownership, quality monitoring, and format standardization — is what transforms a dump of files into a usable analytical asset.' },
            { type: 'list' as const, items: ['A data lake without a catalog and ownership model will inevitably become a data swamp', 'Retroactively cleaning up a data swamp is 5–10x more expensive than building governance in from the start', 'Standardizing on Parquet and partitioning by date prevents the most common lake performance and discovery problems'] },
          ],
        },
        {
          id: 'de-m2-l3',
          title: 'The Lakehouse Architecture & File Formats',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'The data lakehouse is a newer architecture that attempts to combine the best of data lakes and data warehouses. It provides the low-cost open storage of a lake with the ACID transactions, schema enforcement, and performance of a warehouse. Platforms like Databricks Delta Lake, Apache Iceberg, and Apache Hudi enable lakehouse architectures on top of object storage.',
            },
            {
              type: 'heading' as const,
              text: 'Common Data File Formats',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Format', 'Type', 'Compression', 'Best For'],
              rows: [
                ['CSV', 'Row-oriented, plain text', 'None (or gzip)', 'Small files, human-readable exports, interoperability'],
                ['JSON', 'Row-oriented, semi-structured', 'None (or gzip)', 'APIs, nested data, flexible schemas'],
                ['Parquet', 'Columnar, binary', 'Snappy/gzip/zstd', 'Analytical queries, large datasets, cloud storage'],
                ['Avro', 'Row-oriented, binary', 'Snappy/deflate', 'Schema evolution, streaming, Kafka messages'],
                ['ORC', 'Columnar, binary', 'ZLIB/Snappy', 'Hive/Hadoop workloads, high compression needs'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Default to Parquet',
              text: 'For most data engineering use cases involving large datasets stored in a data lake or lakehouse, Parquet is the go-to format. Its columnar structure means queries only read the columns they need, dramatically reducing I/O. Its compression ratios are typically 5–10x better than equivalent CSV files.',
            },
            {
              type: 'paragraph' as const,
              text: 'Partitioning is a technique that organizes files within a storage layer into directories based on column values — commonly date, region, or customer segment. When queries filter on a partition column, the engine skips all other partitions entirely, reducing the data scanned from terabytes to gigabytes or less.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Fintech Startup Adopts Lakehouse to Unify ML and BI', text: 'A fintech company running credit risk models needed both their data scientists (working in Python with raw loan application data) and their BI team (building Tableau dashboards from aggregated tables) to work from the same source of truth. Their original architecture maintained separate data lake (S3) and warehouse (Redshift) environments that frequently diverged. They migrated to a Databricks Delta Lake lakehouse, where both teams now read from the same Delta tables — data scientists via PySpark, BI analysts via Databricks SQL. Data consistency issues dropped by 90%, and monthly data reconciliation work (previously 40 engineer-hours) was eliminated.' },
            { type: 'paragraph' as const, text: 'The lakehouse architecture resolves the organizational tension between data engineering teams serving ML use cases and those serving BI use cases. When both teams read from the same ACID-compliant tables with consistent schemas, the costly reconciliation work between diverging systems disappears.' },
            { type: 'list' as const, items: ['Lakehouse architecture eliminates the synchronization tax between separate lake and warehouse environments', 'Delta Lake\'s ACID transactions prevent the partial-write corruption that plagued earlier data lake architectures', 'Parquet partitioned by date is typically the first optimization that dramatically reduces query cost and latency in any lakehouse'] },
          ],
        },
      ],
      quiz: [
        {
          id: 'de-m2-q1',
          type: 'multiple-choice' as const,
          question: 'Which database type is best suited for storing and querying highly connected data such as social network relationships?',
          options: ['Relational', 'Key-Value', 'Graph', 'Columnar'],
          correctIndex: 2,
          explanation: 'Graph databases model data as nodes and edges, making them ideal for relationship-heavy data like social graphs, recommendation engines, and fraud networks.',
        },
        {
          id: 'de-m2-q2',
          type: 'true-false' as const,
          question: 'A data warehouse uses schema-on-read, meaning data is stored without enforcing structure until query time.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Data warehouses use schema-on-write — data must conform to a defined schema before being loaded. Schema-on-read is characteristic of data lakes.',
        },
        {
          id: 'de-m2-q3',
          type: 'multiple-choice' as const,
          question: 'Why is Parquet preferred over CSV for large-scale analytical workloads?',
          options: [
            'It is human-readable and easier to debug',
            'It requires no schema definition',
            'Its columnar format allows queries to read only relevant columns, reducing I/O',
            'It is the only format supported by cloud data warehouses',
          ],
          correctIndex: 2,
          explanation: 'Parquet\'s columnar storage means analytical queries only read the specific columns they need, dramatically reducing I/O compared to row-oriented formats like CSV where entire rows are always read.',
        },
        {
          id: 'de-m2-q4',
          type: 'multiple-choice' as const,
          question: 'What is the primary risk of a data lake without proper governance?',
          options: [
            'It becomes too expensive to store data',
            'It becomes a "data swamp" where data is untrusted and undiscoverable',
            'It can only store structured data',
            'It cannot be queried with SQL',
          ],
          correctIndex: 1,
          explanation: 'Without governance — cataloging, ownership, quality monitoring — data lakes become data swamps where teams cannot find or trust the data, negating the lake\'s value.',
        },
        {
          id: 'de-m2-q5',
          type: 'multiple-choice' as const,
          question: 'The data lakehouse architecture is designed to combine which two things?',
          options: [
            'Batch and streaming processing',
            'ETL and ELT patterns',
            'Low-cost open storage (data lake) with warehouse-quality ACID transactions and performance',
            'Relational and NoSQL databases',
          ],
          correctIndex: 2,
          explanation: 'The lakehouse architecture combines the cheap, flexible storage of a data lake with the ACID transactions, schema enforcement, and query performance of a data warehouse.',
        },
      ],
    },
    {
      id: 'de-m3',
      number: 3,
      title: 'Data Pipelines & Orchestration',
      description:
        'Learn how to design reliable data pipelines, understand transformation steps, and use orchestration tools like Apache Airflow and dbt to manage complex workflows.',
      estimatedMinutes: 65,
      learningObjectives: [
        'Describe the anatomy of a data pipeline from ingestion to serving',
        'Explain common transformation steps including cleaning, joining, and aggregating',
        'Understand the core concepts of Apache Airflow: DAGs, tasks, and operators',
        'Describe how dbt models transformations inside the data warehouse',
        'Identify pipeline monitoring strategies and common failure patterns',
      ],
      lessons: [
        {
          id: 'de-m3-l1',
          title: 'Pipeline Anatomy',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A data pipeline is a sequence of steps that moves data from one or more sources to a destination, transforming it along the way. Understanding the anatomy of a pipeline helps engineers design systems that are maintainable, debuggable, and resilient to failure.',
            },
            {
              type: 'ordered-list' as const,
              items: [
                'Extraction: Connect to source systems (databases, APIs, files) and pull raw data',
                'Validation: Check that incoming data meets basic shape and type expectations',
                'Transformation: Clean, join, enrich, and aggregate the data into desired form',
                'Loading: Write the transformed data to the target system (warehouse, lake, API)',
                'Testing: Assert that output data meets quality expectations',
                'Notification: Alert on success or failure; update monitoring dashboards',
              ],
            },
            { type: 'diagram' as const, diagramId: 'data-pipeline', title: 'Modern Data Pipeline Architecture' },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Idempotency',
              text: 'A well-designed pipeline step is idempotent: running it multiple times produces the same result as running it once. This property is critical for recovery — if a step fails halfway through, you can safely re-run it without producing duplicate or corrupted data.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'Idempotency',
                  definition:
                    'A property where repeating an operation produces the same result as performing it once. Essential for safe pipeline retries.',
                },
                {
                  term: 'Backfill',
                  definition:
                    'Re-running a pipeline over historical date ranges, typically needed after fixing a bug or adding a new data source.',
                },
                {
                  term: 'Watermark',
                  definition:
                    'A marker in a streaming pipeline that tracks how far event-time processing has progressed, enabling correct handling of late-arriving data.',
                },
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Logistics Company Recovers from a Non-Idempotent Pipeline Failure', text: 'A parcel delivery company\'s nightly pipeline that loaded shipment events into their warehouse was not idempotent — it appended new rows without checking for duplicates. When their source database suffered a partial failure mid-run, the pipeline retried and loaded 3 days of duplicate records. Analysts spent 2 weeks auditing and correcting 18 months of affected delivery metrics before stakeholders could trust reports again. The team rebuilt every pipeline step using MERGE (upsert) statements keyed on shipment IDs, making each step idempotent. In the following 12 months, two more upstream failures occurred — both resolved without data corruption through safe automatic retries.' },
            { type: 'paragraph' as const, text: 'Idempotency is not a nice-to-have — it is the property that makes pipelines survivable in the face of the inevitable failures of distributed systems. The cost of building idempotent pipelines is small; the cost of not doing so compounds with every incident.' },
            { type: 'list' as const, items: ['Always design each pipeline step around a stable unique key to enable safe upserts', 'Test idempotency explicitly by running each step twice against the same input and verifying identical output', 'Backfill capability — re-running historical ranges — depends entirely on idempotent pipeline design'] },
          ],
        },
        {
          id: 'de-m3-l2',
          title: 'Apache Airflow & Orchestration Concepts',
          estimatedMinutes: 17,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Orchestration is the discipline of scheduling, coordinating, and monitoring the many steps of a data pipeline. Apache Airflow, originally developed at Airbnb in 2014, became the dominant open-source orchestration platform. It models pipelines as DAGs — Directed Acyclic Graphs — where each node is a task and edges represent dependencies.',
            },
            {
              type: 'heading' as const,
              text: 'Core Airflow Concepts',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Concept', 'Description'],
              rows: [
                ['DAG', 'A Directed Acyclic Graph — the pipeline definition in Python. Defines tasks and their dependencies.'],
                ['Task', 'A single unit of work within a DAG (e.g., run a SQL query, call an API, execute a script).'],
                ['Operator', 'A template for a task type — PythonOperator, BashOperator, PostgresOperator, etc.'],
                ['Scheduler', 'The Airflow component that triggers DAG runs based on schedule intervals.'],
                ['Executor', 'Determines how tasks run — locally, in Celery workers, or on Kubernetes pods.'],
                ['XCom', 'Cross-communication: a mechanism for tasks to pass small data values to downstream tasks.'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Alternatives to Airflow',
              text: 'Airflow is powerful but operationally complex. Prefect and Dagster are modern alternatives with better developer experience, native data-awareness, and managed cloud offerings. For teams starting fresh, these are worth evaluating before committing to Airflow.',
            },
            {
              type: 'paragraph' as const,
              text: 'Airflow DAGs are defined in Python, giving engineers the full power of a programming language to define complex dependency graphs, parameterize runs, and integrate with any system via Python libraries. The scheduler checks DAG definitions regularly and triggers runs based on the cron-like schedule expression.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Retail Chain Orchestrates a 200-Step Nightly Pipeline', text: 'A national retail chain with 800 stores ran end-of-day sales reconciliation through a complex set of interdependent scripts — some in Python, some in bash, some triggered by cron jobs on different servers. When any step failed, engineers manually inspected logs across 6 servers to diagnose the issue, taking an average of 90 minutes. The team migrated all 200 steps into a single Airflow DAG with clear task dependencies. After the migration, mean-time-to-detect pipeline failures dropped from 90 minutes to 8 minutes (via Slack alerts), nightly reconciliation completed 40 minutes faster due to parallelized independent tasks, and on-call engineer pages decreased by 65%.' },
            { type: 'paragraph' as const, text: 'Orchestration tools like Airflow do more than schedule jobs — they make the entire pipeline visible as a single, observable system. The shift from scattered cron jobs to a dependency graph transforms debugging from detective work into a clear, traceable process.' },
            { type: 'list' as const, items: ['Centralizing all pipeline steps in an orchestration DAG dramatically reduces mean-time-to-detect failures', 'DAG dependency graphs enable automatic parallelization of independent steps, reducing total wall-clock time', 'Managed orchestration platforms (Astronomer, Prefect Cloud, Dagster Cloud) eliminate the operational burden of self-hosting Airflow'] },
          ],
        },
        {
          id: 'de-m3-l3',
          title: 'dbt and Transformation Pipelines',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'dbt (data build tool) brought software engineering best practices to SQL-based transformations. Before dbt, analysts wrote ad-hoc SQL queries with no version control, no testing, and no documentation. dbt changed that by treating SQL SELECT statements as models — named, versioned, tested, and documented assets.',
            },
            {
              type: 'heading' as const,
              text: 'How dbt Works',
              level: 2 as const,
            },
            {
              type: 'ordered-list' as const,
              items: [
                'Write a .sql file containing a SELECT statement — this is a dbt model',
                'Reference other models with the {{ ref() }} function to build a dependency graph',
                'Run dbt run — dbt compiles your SQL and executes it in the warehouse as CREATE TABLE or CREATE VIEW',
                'Run dbt test — dbt validates assertions like not-null, unique, referential integrity',
                'Run dbt docs generate — dbt creates a browsable data catalog with lineage graphs',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'A Simple dbt Model',
              text: 'A model called "orders_cleaned.sql" might SELECT from a raw orders table, cast columns to correct types, filter out test records, and join in customer names. Another model "revenue_by_month.sql" references orders_cleaned with {{ ref("orders_cleaned") }}, computing monthly revenue. dbt knows the execution order automatically.',
            },
            {
              type: 'list' as const,
              items: [
                'Staging models: lightly clean raw source data — renaming columns, casting types',
                'Intermediate models: join and enrich staging models into useful business entities',
                'Mart models: final, aggregated tables ready for BI tools and analysts',
                'Seeds: static CSV files loaded into the warehouse as reference tables',
                'Snapshots: slowly changing dimension tracking for records that change over time',
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Marketplace Platform Standardizes Revenue Definitions with dbt', text: 'A two-sided marketplace had four different definitions of "revenue" living in four different analyst-owned SQL scripts — none were in version control, and each produced different numbers depending on how refunds and fees were handled. Monthly finance reconciliations took 3 days and regularly surfaced $50K–$200K discrepancies. The analytics engineering team rebuilt all revenue logic as a single dbt mart model with documented business logic, dbt tests asserting no negative revenue rows and referential integrity with the orders table, and clear column-level descriptions. After launch, the four definitions were retired, reconciliation time dropped to 4 hours, and discrepancies dropped to under $1K monthly.' },
            { type: 'paragraph' as const, text: 'dbt\'s most transformative impact is often not technical but organizational: it creates a single, trusted, versioned definition of business metrics that all teams share. When "revenue" means exactly one thing and that definition is tested and documented, trust in data improves dramatically.' },
            { type: 'list' as const, items: ['dbt staging → intermediate → mart model layers enforce a clean separation between raw data cleanup and business logic', 'dbt tests (not_null, unique, accepted_values) function as automated quality gates that run on every deploy', 'Treating SQL models as versioned code in Git enables code review, rollback, and audit trails previously impossible with ad-hoc queries'] },
          ],
        },
        {
          id: 'de-m3-l4',
          title: 'Pipeline Monitoring & Reliability',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'A pipeline that runs unmonitored is a liability. Data engineers must instrument their pipelines to detect failures, slowdowns, and data quality regressions — ideally before downstream consumers notice. Monitoring operates at multiple levels: infrastructure, pipeline execution, and data quality.',
            },
            {
              type: 'heading' as const,
              text: 'What to Monitor',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Pipeline execution: Did it run? Did it succeed? How long did it take vs. baseline?',
                'Data freshness: Is the data in the warehouse as current as expected?',
                'Row counts: Are there dramatically more or fewer rows than the previous run?',
                'Null rates: Are critical columns suddenly producing null values?',
                'Distribution shifts: Have key metrics like average order value changed unexpectedly?',
                'Infrastructure: CPU/memory on workers, query slots in the warehouse, cost per run',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Data Observability Platforms',
              text: 'Tools like Monte Carlo, Bigeye, and dbt\'s built-in tests automate data quality monitoring. They establish baselines from historical data and alert when anomalies are detected — functioning like application performance monitoring (APM) but for data pipelines.',
            },
            {
              type: 'paragraph' as const,
              text: 'SLAs (Service Level Agreements) for data pipelines define the expected availability and freshness of datasets. A common SLA is "daily sales data must be available in the warehouse by 6:00 AM." Breaching SLAs triggers alerts to both the data engineering team and affected stakeholders.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Ad-Tech Company Catches Silent Data Quality Regression with Monitoring', text: 'A programmatic advertising platform\'s pipeline silently began dropping 12% of ad impression events due to a schema change in an upstream API response. Because there were no row count monitors, analysts unknowingly built a campaign performance model on the degraded data for 3 weeks. By the time the issue was discovered, $180K in campaign budget recommendations had been made on flawed data. The team implemented Monte Carlo data observability, setting automated row count baselines with ±15% anomaly thresholds and freshness checks on every table. In the following 6 months, 9 silent data quality regressions were caught automatically within 30 minutes of occurring — before any downstream consumers were affected.' },
            { type: 'paragraph' as const, text: 'Silent data failures are the most dangerous kind because they allow wrong data to propagate into reports and models before anyone notices. Proactive monitoring that catches anomalies at the pipeline level — not downstream in dashboards — is the difference between a 30-minute fix and a multi-week recovery.' },
            { type: 'list' as const, items: ['Row count monitoring is the single highest-ROI pipeline monitoring metric — abnormal row counts catch most failures', 'Data freshness SLAs should be defined by stakeholder need, not by what is technically convenient to build', 'Data observability tools that learn baselines from historical patterns catch regressions that static threshold alerts miss'] },
          ],
        },
      ],
      quiz: [
        {
          id: 'de-m3-q1',
          type: 'multiple-choice' as const,
          question: 'What does DAG stand for in the context of Apache Airflow?',
          options: ['Data Aggregation Graph', 'Directed Acyclic Graph', 'Dynamic Automation Gateway', 'Distributed Async Group'],
          correctIndex: 1,
          explanation: 'DAG stands for Directed Acyclic Graph. In Airflow, a DAG defines the pipeline: each node is a task, edges represent dependencies, and "acyclic" means there are no circular dependencies.',
        },
        {
          id: 'de-m3-q2',
          type: 'true-false' as const,
          question: 'An idempotent pipeline step can be safely re-run multiple times without producing duplicate or incorrect data.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Idempotency means running an operation multiple times produces the same result as running it once — a critical property for pipeline reliability and safe retries after failures.',
        },
        {
          id: 'de-m3-q3',
          type: 'multiple-choice' as const,
          question: 'In dbt, which function is used to reference another dbt model and create a dependency between them?',
          options: ['{{ source() }}', '{{ ref() }}', '{{ model() }}', '{{ depend() }}'],
          correctIndex: 1,
          explanation: 'The {{ ref() }} function in dbt references another model by name, creating a dependency so dbt knows to run the referenced model first and build a correct execution order.',
        },
        {
          id: 'de-m3-q4',
          type: 'multiple-choice' as const,
          question: 'Which of the following is NOT a recommended pipeline monitoring metric?',
          options: ['Data freshness', 'Row count changes between runs', 'The engineer\'s favorite database', 'Null rates in critical columns'],
          correctIndex: 2,
          explanation: 'The engineer\'s personal database preference is irrelevant to pipeline monitoring. Meaningful metrics include freshness, row counts, null rates, and distribution shifts.',
        },
        {
          id: 'de-m3-q5',
          type: 'multiple-choice' as const,
          question: 'What is the purpose of a "backfill" in data pipeline operations?',
          options: [
            'Filling a database table with synthetic test data',
            'Re-running a pipeline over historical date ranges after a fix or schema change',
            'Compressing old data to save storage costs',
            'Adding new columns to an existing table',
          ],
          correctIndex: 1,
          explanation: 'A backfill re-runs a pipeline over historical periods — typically needed after fixing a bug or onboarding a new data source — to ensure historical data reflects the corrected logic.',
        },
      ],
    },
    {
      id: 'de-m4',
      number: 4,
      title: 'Data Quality & Governance',
      description:
        'Learn how to profile data, handle common quality issues, define SLAs, and implement governance practices including cataloging, lineage tracking, and compliance fundamentals.',
      estimatedMinutes: 60,
      learningObjectives: [
        'Explain the dimensions of data quality and why they matter',
        'Apply data profiling techniques to understand a dataset',
        'Describe strategies for handling null values and duplicates',
        'Define data SLAs and explain their role in team accountability',
        'Understand data cataloging, lineage, and basic GDPR compliance requirements',
      ],
      lessons: [
        {
          id: 'de-m4-l1',
          title: 'Data Profiling & Quality Dimensions',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Data quality is one of the most persistent challenges in data engineering. Poor quality data leads to incorrect analyses, bad business decisions, and eroded trust in data products. Data engineers must proactively measure and improve quality, not just move data from A to B.',
            },
            {
              type: 'heading' as const,
              text: 'The Six Dimensions of Data Quality',
              level: 2 as const,
            },
            {
              type: 'table' as const,
              headers: ['Dimension', 'Definition', 'Example Issue'],
              rows: [
                ['Completeness', 'Are all required fields populated?', '15% of orders are missing customer_id'],
                ['Accuracy', 'Does the data correctly represent reality?', 'Zip codes don\'t match cities'],
                ['Consistency', 'Is data consistent across systems?', 'Revenue differs between CRM and warehouse'],
                ['Timeliness', 'Is data available when needed?', 'Sales data arrives 3 hours late each morning'],
                ['Uniqueness', 'Are records free of duplicates?', 'Same customer appears twice with different IDs'],
                ['Validity', 'Does data conform to expected formats/ranges?', 'Negative quantities in order line items'],
              ],
            },
            {
              type: 'paragraph' as const,
              text: 'Data profiling is the process of examining a dataset to understand its structure, content, and quality. Good profiling reveals column-level statistics: null rates, cardinality (number of distinct values), min/max/mean values, and common value distributions. This baseline enables anomaly detection when future data deviates unexpectedly.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Insurance Company Discovers Revenue Leakage Through Data Profiling', text: 'A property and casualty insurance company ran a data profiling exercise on their claims database as part of a warehouse migration. Profiling revealed that 8.3% of claim records had null values in the settlement_amount column, and 2.1% had settlement dates prior to the policy start date — both impossible in a valid claim lifecycle. Investigation traced the nulls to a legacy API integration that silently dropped amounts when a downstream rounding function errored. Correcting the pipeline and backfilling affected records recovered $2.4M in previously unaccounted settled claims that had been excluded from revenue reports.' },
            { type: 'paragraph' as const, text: 'Data profiling is not a one-time exercise — it is most powerful when run continuously against incoming data, establishing baselines that enable automatic detection of future quality regressions. The six quality dimensions provide a systematic framework for deciding which profiles to compute and monitor.' },
            { type: 'list' as const, items: ['Profile data before using it in any analysis or model — invisible quality problems produce quietly wrong conclusions', 'Validity checks (impossible values, constraint violations) often reveal the most actionable bugs in upstream systems', 'Automated profiling on every pipeline run turns one-time discovery into ongoing quality assurance'] },
          ],
        },
        {
          id: 'de-m4-l2',
          title: 'Handling Nulls, Duplicates, and Anomalies',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Null values represent missing or unknown data. They are neither zero nor empty string — they are the absence of a value. SQL handles nulls with special semantics: any comparison to NULL returns NULL, not TRUE or FALSE. Engineers must consciously decide how to handle nulls: drop rows, impute values, or propagate as-is.',
            },
            {
              type: 'heading' as const,
              text: 'Null Handling Strategies',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Drop: Remove rows where critical fields are null — appropriate when nulls indicate invalid records',
                'Impute with constant: Replace null with a default value (0, "Unknown", "N/A")',
                'Impute with aggregate: Replace null with column mean, median, or mode',
                'Forward-fill: In time series, carry forward the last known value',
                'Flag and preserve: Add an is_null indicator column and keep the null for downstream handling',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'warning' as const,
              title: 'Duplicate Records',
              text: 'Duplicates are insidious because they silently inflate metrics. A customer counted twice doubles their apparent revenue. Common sources of duplicates include: API retries that insert records twice, event streams without deduplication, and merges of overlapping data exports. Always deduplicate on a stable unique identifier before aggregating.',
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'dbt Tests for Quality',
              text: 'dbt provides built-in generic tests: not_null, unique, accepted_values, and relationships. Running these tests as part of every pipeline execution creates a quality gate — if a test fails, the pipeline stops and alerts fire before bad data reaches downstream consumers.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: E-Commerce Platform Eliminates Duplicate Order Revenue Counting', text: 'An e-commerce platform\'s Stripe payment webhook was configured to retry on network timeout, causing approximately 0.3% of successful payments to be inserted twice into the orders table. Because the inflated order count was gradual and small, it went undetected for 7 months. By the time it was caught, the revenue dashboard had overcounted revenue by $340K — creating problems with investor reporting and sales commission calculations. The data engineering team added a dbt unique test on order_id to every pipeline run and implemented a MERGE statement to deduplicate on ingestion. Since deployment, zero duplicate orders have reached the warehouse.' },
            { type: 'paragraph' as const, text: 'Duplicate records are dangerous precisely because they inflate numbers by a consistent percentage rather than creating obvious anomalies. The fix — deduplication on a stable unique key combined with an automated uniqueness test — is straightforward once the problem is understood, but finding the root cause requires systematic null and duplicate analysis.' },
            { type: 'list' as const, items: ['Add a dbt unique test on every primary key column as a baseline quality gate in every project', 'Always trace duplicates to their source system root cause — plugging the leak is more reliable than filtering downstream', 'Deduplication logic must run before any aggregation step, or the inflation propagates through the entire model graph'] },
          ],
        },
        {
          id: 'de-m4-l3',
          title: 'Data Cataloging, Lineage & Compliance',
          estimatedMinutes: 15,
          content: [
            {
              type: 'paragraph' as const,
              text: 'As data platforms grow, teams lose track of what data exists, where it came from, and who owns it. A data catalog is a metadata management system that inventories all data assets — tables, models, dashboards — and makes them searchable. Teams use catalogs to discover data, understand its meaning, and find its owner.',
            },
            {
              type: 'heading' as const,
              text: 'Data Lineage',
              level: 2 as const,
            },
            {
              type: 'paragraph' as const,
              text: 'Data lineage tracks the journey of data from its origin through all transformations to its final destination. When a metric in a dashboard is wrong, lineage lets engineers trace backwards through the transformation chain to find where the error was introduced. Tools like dbt, Apache Atlas, and Marquez automatically capture lineage metadata.',
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'GDPR and Data Compliance Basics',
              text: 'The EU General Data Protection Regulation (GDPR) requires organizations to track what personal data they hold, who has access to it, and be able to delete it upon request ("right to erasure"). For data engineers, this means documenting which tables contain PII, implementing column-level access controls, and supporting deletion workflows that propagate through the entire pipeline.',
            },
            {
              type: 'key-terms' as const,
              terms: [
                {
                  term: 'PII (Personally Identifiable Information)',
                  definition:
                    'Any data that can be used to identify an individual — name, email, phone number, IP address, device ID, and more. Subject to strict regulatory controls.',
                },
                {
                  term: 'Data Lineage',
                  definition:
                    'A record of where data originated, how it was transformed, and where it flows — enabling impact analysis and root cause investigation.',
                },
                {
                  term: 'Data Catalog',
                  definition:
                    'A searchable inventory of data assets with metadata: descriptions, owners, freshness, quality scores, and lineage. Examples include Apache Atlas, Alation, and DataHub.',
                },
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: SaaS Company Passes GDPR Audit Through Data Lineage', text: 'A European SaaS company received a GDPR right-to-erasure request and discovered they had no documentation of which tables contained PII or how user data flowed through their analytics stack. Manual investigation took 3 weeks and identified 23 tables across 8 databases holding user-identifiable data. A second erasure request arrived 2 months later during an EU regulatory audit — the company could not demonstrate complete erasure and received a €180,000 fine. After the fine, they implemented DataHub for cataloging (with PII tags on all identified columns), automated lineage tracking via dbt, and an erasure workflow that propagated deletion through all 23 tables. The third erasure request, received 6 months later, was completed in 4 hours.' },
            { type: 'paragraph' as const, text: 'Data lineage and cataloging are not just analytical productivity tools — they are compliance infrastructure. Knowing exactly which systems hold PII, and being able to trace how it flows through transformations, is required for GDPR compliance and increasingly for CCPA and other privacy regulations.' },
            { type: 'list' as const, items: ['Tag PII columns in your data catalog from day one — retroactive identification is enormously expensive', 'dbt model lineage automatically documents how data flows from source tables through transformations to marts', 'Erasure workflows must be designed at the data model level, not handled as one-off manual operations'] },
          ],
        },
      ],
      quiz: [
        {
          id: 'de-m4-q1',
          type: 'multiple-choice' as const,
          question: 'Which data quality dimension measures whether all required fields are populated?',
          options: ['Accuracy', 'Completeness', 'Consistency', 'Validity'],
          correctIndex: 1,
          explanation: 'Completeness measures whether all required data fields contain values. Missing data — even if the present data is accurate — is a completeness problem.',
        },
        {
          id: 'de-m4-q2',
          type: 'true-false' as const,
          question: 'In SQL, comparing any value to NULL returns FALSE.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. In SQL, any comparison to NULL returns NULL — not TRUE or FALSE. This is why you must use IS NULL or IS NOT NULL rather than = NULL to check for null values.',
        },
        {
          id: 'de-m4-q3',
          type: 'multiple-choice' as const,
          question: 'What is the primary purpose of a data catalog?',
          options: [
            'To store backup copies of all data assets',
            'To compress and archive old data to reduce costs',
            'To provide a searchable inventory of data assets with metadata about their meaning, ownership, and quality',
            'To replace the data warehouse as the central storage layer',
          ],
          correctIndex: 2,
          explanation: 'A data catalog inventories all data assets and their metadata — descriptions, owners, freshness, lineage — making data discoverable and understandable across the organization.',
        },
        {
          id: 'de-m4-q4',
          type: 'multiple-choice' as const,
          question: 'Under GDPR, what is the "right to erasure"?',
          options: [
            'The right to delete a company\'s entire database',
            'The right for individuals to request that their personal data be deleted',
            'The right for engineers to purge old logs without approval',
            'The requirement to delete data older than 5 years',
          ],
          correctIndex: 1,
          explanation: 'The GDPR right to erasure (also called "right to be forgotten") allows individuals to request that an organization delete their personal data. Data engineers must build pipelines that support these deletion requests propagating through the entire data infrastructure.',
        },
        {
          id: 'de-m4-q5',
          type: 'true-false' as const,
          question: 'Duplicate records are always easy to detect because they appear as exact copies of each other.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Duplicates can be subtle — the same customer might appear twice with different email formats, different phone number formatting, or slight name variations. Effective deduplication requires careful analysis of unique identifiers and fuzzy matching for some cases.',
        },
      ],
    },
    {
      id: 'de-m5',
      number: 5,
      title: 'Cloud Data Platforms',
      description:
        'Compare the major cloud data platforms — AWS, Google Cloud, and Azure — and understand the key services, architectural patterns, and cost considerations for each.',
      estimatedMinutes: 65,
      learningObjectives: [
        'Identify the key data services on AWS, GCP, and Azure',
        'Compare Redshift, BigQuery, and Synapse as analytical warehouses',
        'Understand the role of managed ETL and transformation services like Glue and Dataflow',
        'Apply basic cost optimization strategies for cloud data platforms',
        'Choose an appropriate cloud architecture for a given use case',
      ],
      lessons: [
        {
          id: 'de-m5-l1',
          title: 'AWS Data Services',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Amazon Web Services (AWS) offers the broadest and most mature set of data services, having launched AWS in 2006. For data engineers, the core AWS stack revolves around S3 for storage, Redshift for analytics, Glue for ETL, and Kinesis for streaming.',
            },
            {
              type: 'table' as const,
              headers: ['Service', 'Category', 'Purpose'],
              rows: [
                ['S3', 'Object Storage', 'Infinitely scalable raw data storage — the foundation of most AWS data lakes'],
                ['Amazon Redshift', 'Data Warehouse', 'Columnar analytical warehouse, Redshift Spectrum queries S3 directly'],
                ['AWS Glue', 'ETL / Catalog', 'Serverless ETL with a built-in data catalog (Glue Catalog)'],
                ['Amazon Kinesis', 'Streaming', 'Managed real-time data streaming — ingestion and processing'],
                ['Amazon Athena', 'Query Engine', 'Serverless SQL queries directly against S3 files (Parquet, CSV, JSON)'],
                ['AWS Lake Formation', 'Governance', 'Manages permissions and access controls across the data lake'],
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Athena for Ad-Hoc Exploration',
              text: 'Amazon Athena lets you run SQL queries directly against S3 files without loading data into a warehouse. At $5 per TB scanned, it\'s cost-effective for occasional queries. Always use Parquet + partitioning with Athena to minimize data scanned and cost.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Digital Media Company Builds AWS-Native Data Platform', text: 'A digital media company with 50M monthly active users needed to process 2TB of clickstream data daily for content recommendation and advertising analytics. They built an AWS-native stack: Kinesis Data Streams for real-time event ingestion, S3 with Parquet for the raw data lake (partitioned by date and content category), Glue crawlers to maintain the Glue Catalog, Athena for ad-hoc exploration by data scientists, and Redshift for the BI team\'s structured analytical queries. Total infrastructure cost was $18,000/month — 70% less than their previous on-premise Hadoop cluster — while query performance improved by 4x.' },
            { type: 'paragraph' as const, text: 'The AWS-native approach leverages managed services that handle infrastructure provisioning, scaling, and maintenance automatically. The key is understanding how S3, Glue, Athena, and Redshift each serve different access patterns within the same data platform.' },
            { type: 'list' as const, items: ['AWS Glue Catalog is the metadata layer that makes S3 data queryable by both Athena and Redshift Spectrum', 'Kinesis + S3 + Redshift is the dominant AWS pattern for platforms needing both real-time ingestion and analytical querying', 'Migrating from on-premise Hadoop to AWS-native services typically reduces infrastructure costs by 50–75%'] },
          ],
        },
        {
          id: 'de-m5-l2',
          title: 'Google Cloud & Azure Data Services',
          estimatedMinutes: 17,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Google Cloud Platform (GCP) is widely regarded as having the strongest data analytics platform, largely due to BigQuery — a serverless data warehouse that can query petabytes in seconds with no infrastructure to manage. Google\'s decades of experience processing data at internet scale is embedded in BigQuery\'s architecture.',
            },
            {
              type: 'heading' as const,
              text: 'Key GCP Data Services',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'BigQuery: Serverless, highly scalable data warehouse with built-in ML capabilities',
                'Cloud Storage (GCS): Object storage equivalent to S3, commonly used with BigQuery',
                'Dataflow: Managed Apache Beam service for both batch and streaming pipelines',
                'Pub/Sub: Managed messaging for real-time event streaming (similar to Kafka)',
                'Looker / Looker Studio: BI and data visualization integrated with BigQuery',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Microsoft Azure Data Services',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Azure Synapse Analytics: Unified analytics platform combining warehouse, lake, and pipelines',
                'Azure Data Lake Storage (ADLS): Hierarchical object storage optimized for analytics',
                'Azure Data Factory: Managed ETL/ELT pipeline service',
                'Azure Databricks: Managed Apache Spark platform for big data and ML',
                'Power BI: BI platform deeply integrated with Microsoft 365 and Azure',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Choosing a Cloud Platform',
              text: 'If your organization is already deep in AWS, stay on AWS. If you prioritize analytics power and serverless simplicity, GCP/BigQuery is compelling. If you are a Microsoft-centric enterprise with existing Azure/M365 investments, Azure Synapse + Power BI offers tight integration.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Global Retailer Chooses Azure Over GCP Due to Existing Microsoft Investment', text: 'A global retail chain with 2,000 stores evaluated GCP BigQuery and Azure Synapse for their new analytics platform. BigQuery had superior out-of-the-box query performance in benchmarks, but the company already operated entirely within the Microsoft ecosystem: Active Directory for identity management, Microsoft 365 for collaboration, and SQL Server for all store transaction systems. Choosing Azure Synapse meant analysts could authenticate with their existing corporate credentials, Power BI connected natively to Synapse without additional connectors, and Azure Data Factory could replicate from SQL Server with native, first-party connectors. The total cost of ownership over 3 years was 22% lower on Azure due to existing Enterprise Agreement licensing.' },
            { type: 'paragraph' as const, text: 'Cloud platform selection is rarely a pure technical decision. Organizational factors — existing vendor relationships, team skills, compliance requirements, and integration with adjacent systems — frequently determine the right choice more than raw performance benchmarks.' },
            { type: 'list' as const, items: ['Existing cloud investments and Enterprise Agreements often make the cloud choice obvious from a cost perspective', 'BigQuery\'s serverless model is a strong default for greenfield analytics platforms without legacy infrastructure', 'Azure Databricks gives Microsoft-native organizations access to the Apache Spark ecosystem without leaving Azure'] },
          ],
        },
        {
          id: 'de-m5-l3',
          title: 'Cloud Cost Optimization',
          estimatedMinutes: 16,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Cloud data platforms can become surprisingly expensive at scale. Data engineering teams regularly encounter "bill shock" when a new pipeline scans too much data, a warehouse runs queries inefficiently, or storage costs compound unnoticed over months. Cost optimization is an ongoing discipline, not a one-time task.',
            },
            {
              type: 'heading' as const,
              text: 'Storage Cost Strategies',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Use Parquet with compression — reduces storage 5–10x vs. CSV',
                'Partition data by date/region — reduce scanned data in queries',
                'Implement lifecycle policies — automatically move old data to cheaper storage tiers',
                'Delete data you no longer need — "keeping everything" adds up quickly',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Compute Cost Strategies',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'BigQuery: Use on-demand pricing for irregular workloads; flat-rate for predictable, high-volume use',
                'Redshift: Right-size clusters; use Redshift Serverless for variable workloads',
                'Avoid SELECT * — query only the columns you need to minimize scanned data',
                'Use materialized views and pre-aggregations to avoid recomputing expensive queries',
                'Set query cost limits and alerts to prevent runaway queries',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'The $50,000 Query',
              text: 'A common cautionary tale: an analyst runs SELECT * FROM billion_row_table without a WHERE clause against BigQuery, scanning 2TB of data. At $5/TB on-demand, that single query costs $10. Multiply by a team of 20 analysts doing this daily, and monthly costs spiral. Column selection, partition filtering, and cached results prevent this.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Analytics Agency Reduces Client BigQuery Bill by 78%', text: 'A digital analytics agency running BigQuery for 12 clients received a month-end bill of $47,000 — triple the expected amount. Audit revealed that analysts across clients were running exploratory SELECT * queries on large event tables without partition filters, and several Looker dashboards were set to refresh every 15 minutes, re-running expensive joins on every refresh. The team implemented per-client IAM cost controls, added partition filter requirements to the 8 largest tables, converted 30 dashboard queries to use pre-aggregated dbt mart tables, and changed dashboard refresh intervals to hourly. The next month\'s bill was $10,400 — a 78% reduction with no loss of analytical capability.' },
            { type: 'paragraph' as const, text: 'Cloud cost optimization is an ongoing discipline that requires both technical controls (partition filters, materialized views, lifecycle policies) and behavioral changes (analyst query habits, dashboard refresh configurations). The biggest savings typically come from a small number of high-impact changes rather than broad optimization.' },
            { type: 'list' as const, items: ['Pre-aggregated mart tables reduce BI dashboard query costs by 80–95% compared to running raw joins on every refresh', 'Partition filter requirements on large tables are the single most effective technical control for BigQuery cost management', 'Set per-project or per-user BigQuery cost limits to create a financial safety net before running large-scale analysis'] },
          ],
        },
      ],
      quiz: [
        {
          id: 'de-m5-q1',
          type: 'multiple-choice' as const,
          question: 'Which AWS service allows you to run serverless SQL queries directly against files stored in S3?',
          options: ['Amazon Redshift', 'AWS Glue', 'Amazon Athena', 'Amazon Kinesis'],
          correctIndex: 2,
          explanation: 'Amazon Athena is a serverless query service that lets you run SQL against data stored in S3 — in formats like Parquet, CSV, or JSON — with no infrastructure to manage. You pay per TB scanned.',
        },
        {
          id: 'de-m5-q2',
          type: 'true-false' as const,
          question: 'BigQuery requires users to provision and manage cluster infrastructure before running queries.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. BigQuery is a fully serverless data warehouse. There is no cluster to provision or manage — you simply run queries and Google Cloud handles all compute allocation automatically.',
        },
        {
          id: 'de-m5-q3',
          type: 'multiple-choice' as const,
          question: 'Which cost optimization technique reduces the amount of data scanned by a query by organizing files into directories based on column values?',
          options: ['Compression', 'Partitioning', 'Indexing', 'Caching'],
          correctIndex: 1,
          explanation: 'Partitioning organizes data files into directories by column values (e.g., by date). Queries that filter on the partition column skip all non-matching partitions, dramatically reducing data scanned and cost.',
        },
        {
          id: 'de-m5-q4',
          type: 'multiple-choice' as const,
          question: 'Azure Databricks is primarily built on which open-source processing framework?',
          options: ['Apache Kafka', 'Apache Airflow', 'Apache Spark', 'Apache Flink'],
          correctIndex: 2,
          explanation: 'Azure Databricks is a managed cloud service built on Apache Spark, providing a collaborative environment for big data processing, machine learning, and stream processing.',
        },
        {
          id: 'de-m5-q5',
          type: 'multiple-choice' as const,
          question: 'For an organization heavily invested in Microsoft 365 and Azure, which BI tool offers the deepest native integration?',
          options: ['Looker', 'Tableau', 'Power BI', 'Metabase'],
          correctIndex: 2,
          explanation: 'Power BI is Microsoft\'s BI platform and integrates deeply with the Azure ecosystem, Microsoft 365, and Active Directory — making it the natural choice for Microsoft-centric organizations.',
        },
      ],
    },
    {
      id: 'de-m6',
      number: 6,
      title: 'Data Engineering Best Practices',
      description:
        'Apply software engineering discipline to data work: documentation, version control, CI/CD for pipelines, observability, and effective team collaboration patterns.',
      estimatedMinutes: 55,
      learningObjectives: [
        'Apply version control practices to data pipeline code and schema changes',
        'Describe a CI/CD workflow for data pipelines',
        'Explain the importance of documentation in data engineering',
        'Understand observability principles applied to data systems',
        'Identify effective collaboration patterns between data engineers, analysts, and scientists',
      ],
      lessons: [
        {
          id: 'de-m6-l1',
          title: 'Version Control & Documentation for Data',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Data engineering code — pipeline scripts, SQL models, infrastructure definitions — must live in version control just like application code. Git enables collaboration, change history, rollbacks, and code review. Yet many data teams still share SQL scripts in email or Confluence, making changes invisible and collaboration impossible.',
            },
            {
              type: 'heading' as const,
              text: 'What Goes in Version Control',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'All pipeline code: Python scripts, Airflow DAGs, dbt models, Spark jobs',
                'Infrastructure-as-code: Terraform files defining cloud resources',
                'Schema definitions and migration scripts',
                'Configuration files (excluding secrets — use a secrets manager)',
                'Test code and data quality assertions',
                'Documentation written in Markdown alongside the code it documents',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'tip' as const,
              title: 'Documentation as Code',
              text: 'dbt makes documentation a first-class practice by allowing engineers to write column and model descriptions directly in YAML files alongside the SQL models. These descriptions are compiled into a browsable data catalog. When documentation lives next to the code, it stays current — when it lives in a separate wiki, it rots.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Startup Avoids a Compliance Catastrophe with Version Control', text: 'A health-tech startup\'s sole data engineer had built the entire pipeline without version control — all code lived on a personal laptop. When that engineer left the company unexpectedly, the team discovered they could not reproduce, modify, or even understand the pipelines that fed their core product metrics. Reconstructing the pipeline logic took 6 weeks and $80,000 in consulting fees, and during that period the company could not accurately report metrics to their Series B investors. The replacement team implemented Git for all pipeline code, required pull request reviews for every change, and stored all infrastructure definitions in Terraform. Over the following 18 months, two more engineers turned over with zero knowledge loss.' },
            { type: 'paragraph' as const, text: 'Version control for data code is not optional — it is fundamental operational resilience. A pipeline that only one person understands is a single point of failure, and undocumented code that lives outside version control is effectively a liability.' },
            { type: 'list' as const, items: ['No pipeline code should ever exist only on a personal machine — version control is the minimum viable documentation', 'Pull request reviews for data code changes catch bugs before production, just as they do for application code', 'Infrastructure-as-code (Terraform) for cloud resources enables reproducible environments and disaster recovery'] },
          ],
        },
        {
          id: 'de-m6-l2',
          title: 'CI/CD for Data Pipelines',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Continuous Integration and Continuous Deployment (CI/CD) practices — standard in software engineering — dramatically improve the reliability of data pipelines. A CI/CD workflow automatically tests every code change before it reaches production, reducing the frequency and severity of data incidents.',
            },
            {
              type: 'heading' as const,
              text: 'A Typical Data Pipeline CI/CD Workflow',
              level: 2 as const,
            },
            {
              type: 'ordered-list' as const,
              items: [
                'Engineer opens a pull request with pipeline changes',
                'CI system triggers automatically: runs unit tests, linters, and schema checks',
                'For dbt changes: CI runs dbt compile and dbt test against a staging environment',
                'Reviewers inspect the code diff and review test results',
                'After approval, merge triggers deployment to production',
                'Post-deployment: monitors run to confirm the pipeline succeeds in production',
              ],
            },
            {
              type: 'callout' as const,
              variant: 'info' as const,
              title: 'Slim CI with dbt',
              text: 'dbt supports "slim CI" — running tests only on models that changed in the PR, plus their downstream dependents. This keeps CI runs fast even in large projects with hundreds of models. GitHub Actions, GitLab CI, and dbt Cloud all support this pattern.',
            },
            {
              type: 'paragraph' as const,
              text: 'Staging environments — separate databases or schemas that mirror production — allow engineers to test pipeline changes with real (or realistic) data before those changes affect stakeholders. A common pattern is to use a dedicated "dev" schema per engineer in the warehouse for rapid development, then a shared "staging" environment for pre-production testing.',
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Fintech Company Cuts Data Incidents by 80% with CI/CD', text: 'A fintech company processing 500,000 transactions daily experienced an average of 3 data incidents per month — broken pipelines or incorrect metrics reaching production — each requiring 2–4 hours of engineer time to diagnose and fix. Their deployment process was manual: engineers SSH\'d into a server and ran scripts by hand. They implemented a GitHub Actions CI/CD pipeline: every pull request automatically ran dbt compile, dbt test against a staging schema seeded with 30 days of production data, and a cost estimator. Merges to main triggered automatic deployment. Within 3 months, data incidents dropped from 3 per month to under 0.5, and deployment frequency increased from weekly to daily.' },
            { type: 'paragraph' as const, text: 'CI/CD for data pipelines delivers the same benefits it delivers in software engineering: faster deployments with higher confidence, earlier detection of bugs, and a clear audit trail of every change. The investment in setting up automation pays back within weeks in reduced incident response time.' },
            { type: 'list' as const, items: ['Automated dbt tests in CI catch most data quality regressions before they reach production', 'Per-engineer development schemas in the warehouse enable rapid iteration without risk to production data', 'Daily deployment frequency (vs. weekly) typically reduces the size and risk of each individual change'] },
          ],
        },
        {
          id: 'de-m6-l3',
          title: 'Observability & Team Collaboration',
          estimatedMinutes: 14,
          content: [
            {
              type: 'paragraph' as const,
              text: 'Observability in data engineering means having enough visibility into your systems that you can understand any state — not just the states you anticipated. It goes beyond basic alerting to include rich metrics, logs, and traces that let engineers debug novel problems quickly.',
            },
            {
              type: 'heading' as const,
              text: 'The Three Pillars of Observability',
              level: 2 as const,
            },
            {
              type: 'list' as const,
              items: [
                'Metrics: Time-series measures — pipeline run duration, row counts, error rates, query costs',
                'Logs: Detailed event records from each pipeline execution — what ran, what failed, why',
                'Traces: End-to-end request flows showing how data moved through each system component',
              ],
            },
            {
              type: 'heading' as const,
              text: 'Collaboration Patterns',
              level: 2 as const,
            },
            {
              type: 'callout' as const,
              variant: 'example' as const,
              title: 'The Analytics Engineer Role',
              text: 'Many organizations now have "analytics engineers" — hybrids who work at the intersection of data engineering and analytics. They own dbt models, define business logic in the transformation layer, and collaborate with analysts on model design. This role emerged because pure data engineers lacked business context while pure analysts lacked engineering rigor.',
            },
            {
              type: 'list' as const,
              items: [
                'Establish clear ownership: every dataset has an owner responsible for its quality and SLA',
                'Use data contracts: explicit agreements on schema, semantics, and quality between producers and consumers',
                'Create self-service: invest in documentation and catalogs so consumers find data without asking engineers',
                'Conduct data incident reviews: when pipelines fail, run blameless postmortems to prevent recurrence',
                'Prioritize stakeholder communication: when data is late or wrong, proactively notify affected teams',
              ],
            },
            { type: 'heading' as const, text: 'Real-World Application', level: 2 as const },
            { type: 'callout' as const, variant: 'example' as const, title: 'Case Study: Scale-up Introduces Data Contracts to Tame Microservice Chaos', text: 'A growth-stage e-commerce company had 40+ microservices each producing events to a central Kafka cluster consumed by the data team. Without contracts, upstream engineering teams changed event schemas without notice — a common change was renaming or dropping fields — breaking downstream pipelines 2–3 times per week. The data and platform engineering teams jointly implemented data contracts using AsyncAPI specifications: each producing service formally documented its event schema, and consumers subscribed to contract change notifications. A schema registry enforced backward compatibility. Pipeline breakages from upstream schema changes dropped from 10+ per month to zero in the first 90 days after rollout.' },
            { type: 'paragraph' as const, text: 'Observability and collaboration practices address the human dimension of data engineering reliability. The most sophisticated monitoring cannot prevent breakages caused by undocumented schema changes from teams who do not know their consumers exist. Data contracts create the communication layer that makes distributed data systems reliable.' },
            { type: 'list' as const, items: ['Data contracts shift schema change coordination from reactive firefighting to proactive communication', 'Schema registries with backward-compatibility enforcement automate contract compliance at the infrastructure level', 'Blameless postmortems on data incidents build the psychological safety needed for teams to surface problems early'] },
          ],
        },
      ],
      quiz: [
        {
          id: 'de-m6-q1',
          type: 'true-false' as const,
          question: 'Secret credentials and API keys should be stored in the Git repository alongside pipeline code for easy access.',
          options: ['True', 'False'],
          correctIndex: 1,
          explanation: 'False. Secrets should never be stored in version control. Use a dedicated secrets manager (AWS Secrets Manager, HashiCorp Vault, environment variables) to keep credentials secure and rotatable.',
        },
        {
          id: 'de-m6-q2',
          type: 'multiple-choice' as const,
          question: 'In a dbt CI/CD workflow, what does "slim CI" refer to?',
          options: [
            'Running tests only on models that changed in the PR and their downstream dependents',
            'Using a smaller data warehouse instance for CI runs',
            'Skipping all tests in CI to make builds faster',
            'Using compressed file formats to speed up test execution',
          ],
          correctIndex: 0,
          explanation: 'Slim CI in dbt means running tests only on the models that changed in the pull request plus their downstream dependents, keeping CI fast without sacrificing coverage of affected models.',
        },
        {
          id: 'de-m6-q3',
          type: 'multiple-choice' as const,
          question: 'Which of the following best describes the "analytics engineer" role?',
          options: [
            'A data engineer who builds streaming pipelines exclusively',
            'An analyst who creates executive dashboards',
            'A hybrid role owning data transformation models, bridging engineering rigor and business context',
            'An ML engineer who deploys predictive models to production',
          ],
          correctIndex: 2,
          explanation: 'The analytics engineer is a hybrid role that owns the transformation layer (dbt models), applies software engineering practices to SQL work, and collaborates closely with analysts to define business logic correctly.',
        },
        {
          id: 'de-m6-q4',
          type: 'multiple-choice' as const,
          question: 'What are the three pillars of observability?',
          options: [
            'ETL, ELT, and streaming',
            'Metrics, logs, and traces',
            'Testing, documentation, and deployment',
            'Ingestion, transformation, and serving',
          ],
          correctIndex: 1,
          explanation: 'The three pillars of observability are metrics (time-series measurements), logs (detailed event records), and traces (end-to-end request flows). Together they provide full visibility into system behavior.',
        },
        {
          id: 'de-m6-q5',
          type: 'true-false' as const,
          question: 'A "data contract" is an explicit agreement between data producers and consumers defining schema, semantics, and quality expectations.',
          options: ['True', 'False'],
          correctIndex: 0,
          explanation: 'True. Data contracts formalize the relationship between teams that produce data and teams that consume it, specifying what the data looks like, what it means, and what quality guarantees the producer commits to.',
        },
      ],
    },
  ],
};
