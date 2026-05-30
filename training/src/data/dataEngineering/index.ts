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
