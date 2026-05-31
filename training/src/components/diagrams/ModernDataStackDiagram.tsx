export function ModernDataStackDiagram() {
  const layers = [
    { label: 'Consume', tools: 'BI · Dashboards · ML', color: '#c9a84c', y: 20 },
    { label: 'Orchestrate', tools: 'Airflow · Prefect · dbt', color: '#9b6bbf', y: 76 },
    { label: 'Transform', tools: 'dbt · Spark · SQL', color: '#6b8ed1', y: 132 },
    { label: 'Store', tools: 'Snowflake · BigQuery · Redshift', color: '#4caf82', y: 188 },
    { label: 'Ingest', tools: 'Fivetran · Airbyte · Kafka', color: '#e8a84c', y: 244 },
    { label: 'Source', tools: 'CRM · ERP · APIs · Events', color: '#8a899a', y: 300 },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 500 356" className="w-full max-w-lg mx-auto" style={{ minWidth: '300px' }}>
        {/* Arrow showing data flow up */}
        <path d="M 30 320 L 30 36" stroke="rgba(201,168,76,0.2)" strokeWidth="2" markerEnd="url(#ds-arr)" />
        <text x="14" y="180" textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif"
          transform="rotate(-90, 14, 180)">Data Flow</text>

        {layers.map((layer, i) => (
          <g key={layer.label}>
            <rect x={46} y={layer.y} width={430} height={46} rx="4"
              fill={`${layer.color}12`} stroke={layer.color} strokeWidth="1.2" />
            <text x={68} y={layer.y + 20} fill={layer.color}
              fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700">{layer.label}</text>
            <text x={68} y={layer.y + 34} fill="#8a899a"
              fontSize="10" fontFamily="DM Sans, sans-serif">{layer.tools}</text>

            {/* Connector */}
            {i < layers.length - 1 && (
              <line x1={261} y1={layer.y + 46} x2={261} y2={layer.y + 56}
                stroke={`${layer.color}40`} strokeWidth="1.5" />
            )}
          </g>
        ))}

        <defs>
          <marker id="ds-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(201,168,76,0.5)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
