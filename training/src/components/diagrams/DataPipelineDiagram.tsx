export function DataPipelineDiagram() {
  const stages = [
    { label: 'Extract', desc: 'Pull from sources', color: '#e8a84c', icon: '⬇' },
    { label: 'Load', desc: 'Land raw data', color: '#6b8ed1', icon: '⬜' },
    { label: 'Transform', desc: 'Clean & model', color: '#4caf82', icon: '⚙' },
    { label: 'Serve', desc: 'Deliver to users', color: '#c9a84c', icon: '→' },
  ];

  const bw = 96, bh = 80, gap = 28, startX = 18;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 520 160" className="w-full max-w-xl mx-auto" style={{ minWidth: '340px' }}>
        {/* Source systems */}
        {['CRM', 'ERP', 'API', 'Events'].map((src, i) => (
          <g key={src}>
            <rect x={startX} y={20 + i * 30} width={58} height={22} rx="3"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            <text x={startX + 29} y={35 + i * 30} textAnchor="middle" fill="#8a899a"
              fontSize="9" fontFamily="DM Sans, sans-serif">{src}</text>
          </g>
        ))}

        {/* Arrow from sources to pipeline */}
        <path d="M 78 80 L 92 80" stroke="rgba(232,168,76,0.4)" strokeWidth="1.5" markerEnd="url(#dp-arr)" />

        {stages.map((s, i) => {
          const x = 96 + i * (bw + gap);
          return (
            <g key={s.label}>
              <rect x={x} y={40} width={bw} height={bh} rx="5"
                fill={`${s.color}15`} stroke={s.color} strokeWidth="1.3" />
              <text x={x + bw / 2} y={72} textAnchor="middle" fill={s.color}
                fontSize="13" fontFamily="DM Sans, sans-serif" fontWeight="700">{s.label}</text>
              <text x={x + bw / 2} y={90} textAnchor="middle" fill="#8a899a"
                fontSize="8.5" fontFamily="DM Sans, sans-serif">{s.desc}</text>

              {/* Arrow */}
              {i < stages.length - 1 && (
                <path d={`M ${x + bw + 2} 80 L ${x + bw + gap - 2} 80`}
                  stroke={`${s.color}50`} strokeWidth="1.5" markerEnd="url(#dp-arr)" />
              )}
            </g>
          );
        })}

        {/* Target output */}
        <rect x={96 + 4 * (bw + gap)} y={60} width={58} height={40} rx="3"
          fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <text x={96 + 4 * (bw + gap) + 29} y={77} textAnchor="middle" fill="#c9a84c"
          fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">BI</text>
        <text x={96 + 4 * (bw + gap) + 29} y={90} textAnchor="middle" fill="#8a899a"
          fontSize="8" fontFamily="DM Sans, sans-serif">Tools</text>

        {/* ELT label */}
        <rect x={96} y={132} width={(bw + gap) * 2 + bw} height={18} rx="3"
          fill="rgba(107,142,209,0.1)" stroke="rgba(107,142,209,0.3)" strokeWidth="0.8" />
        <text x={96 + ((bw + gap) * 2 + bw) / 2} y={144} textAnchor="middle" fill="#6b8ed1"
          fontSize="8.5" fontFamily="DM Sans, sans-serif">ELT Pattern: Load raw, transform in warehouse</text>

        <defs>
          <marker id="dp-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(201,168,76,0.5)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
