export function PMLifecycleDiagram() {
  const phases = [
    { name: 'Initiate', icon: '◆', desc: 'Charter & stakeholders', color: '#c9a84c' },
    { name: 'Plan', icon: '◆', desc: 'Scope, schedule, budget', color: '#6b8ed1' },
    { name: 'Execute', icon: '◆', desc: 'Deliver the work', color: '#4caf82' },
    { name: 'Monitor', icon: '◆', desc: 'Track & control', color: '#e8a84c' },
    { name: 'Close', icon: '◆', desc: 'Handoff & lessons', color: '#9b6bbf' },
  ];

  const cx = [60, 160, 280, 400, 500];
  const cy = 90;
  const rx = [44, 54, 66, 54, 44];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 560 190" className="w-full max-w-2xl mx-auto" style={{ minWidth: '380px' }}>
        {/* Connecting spine */}
        <line x1={60} y1={cy} x2={500} y2={cy} stroke="rgba(201,168,76,0.15)" strokeWidth="2" />

        {phases.map((p, i) => (
          <g key={p.name}>
            {/* Ellipse — size suggests effort level */}
            <ellipse cx={cx[i]} cy={cy} rx={rx[i]} ry={46}
              fill={`${p.color}15`} stroke={p.color} strokeWidth="1.3" />

            {/* Phase name */}
            <text x={cx[i]} y={cy - 8} textAnchor="middle" fill={p.color}
              fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="700">{p.name}</text>

            {/* Desc */}
            {p.desc.split(' & ').map((line, li) => (
              <text key={li} x={cx[i]} y={cy + 10 + li * 13} textAnchor="middle" fill="#8a899a"
                fontSize="8.5" fontFamily="DM Sans, sans-serif">{line}</text>
            ))}

            {/* Arrow */}
            {i < phases.length - 1 && (
              <polygon
                points={`${cx[i] + rx[i]},${cy - 4} ${cx[i] + rx[i] + 8},${cy} ${cx[i] + rx[i]},${cy + 4}`}
                fill={`${p.color}50`}
              />
            )}
          </g>
        ))}

        {/* Monitor arrow back (iterative) */}
        <path d="M 445 136 Q 280 175 116 136" stroke="rgba(232,168,76,0.25)"
          strokeWidth="1.2" fill="none" strokeDasharray="4,3" markerEnd="url(#pm-arr)" />
        <text x="280" y="172" textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">
          Iterative monitoring throughout
        </text>

        <defs>
          <marker id="pm-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(232,168,76,0.4)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
