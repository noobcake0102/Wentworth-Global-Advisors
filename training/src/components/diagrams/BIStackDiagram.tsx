export function BIStackDiagram() {
  const layers = [
    { label: 'Consume', tools: 'Dashboards · Reports · Alerts · Mobile', color: '#c9a84c', y: 18 },
    { label: 'Visualize', tools: 'Tableau · Power BI · Looker · Metabase', color: '#e05c5c', y: 72 },
    { label: 'Model', tools: 'dbt · LookML · Semantic layer · Metrics', color: '#9b6bbf', y: 126 },
    { label: 'Warehouse', tools: 'Snowflake · BigQuery · Redshift · Databricks', color: '#4caf82', y: 180 },
    { label: 'Integrate', tools: 'Fivetran · Airbyte · Stitch · Custom ETL', color: '#6b8ed1', y: 234 },
    { label: 'Source', tools: 'Salesforce · ERP · APIs · Databases · Events', color: '#8a899a', y: 288 },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 480 344" className="w-full max-w-lg mx-auto" style={{ minWidth: '300px' }}>
        {/* Flow arrow */}
        <path d="M 28 316 L 28 36" stroke="rgba(201,168,76,0.18)" strokeWidth="2" markerEnd="url(#bi-arr)" />
        <text x="13" y="175" textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif"
          transform="rotate(-90, 13, 175)">Data Flow ↑</text>

        {layers.map((layer, i) => (
          <g key={layer.label}>
            <rect x={44} y={layer.y} width={416} height={44} rx="4"
              fill={`${layer.color}10`} stroke={layer.color} strokeWidth="1.2" />
            <text x={64} y={layer.y + 18} fill={layer.color}
              fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="700">{layer.label}</text>
            <text x={64} y={layer.y + 32} fill="#8a899a"
              fontSize="9" fontFamily="DM Sans, sans-serif">{layer.tools}</text>
            {i < layers.length - 1 && (
              <line x1={252} y1={layer.y + 44} x2={252} y2={layer.y + 54}
                stroke={`${layer.color}35`} strokeWidth="1.5" />
            )}
          </g>
        ))}

        <defs>
          <marker id="bi-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(201,168,76,0.5)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
