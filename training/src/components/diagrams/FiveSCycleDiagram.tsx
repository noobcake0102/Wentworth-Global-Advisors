export function FiveSCycleDiagram() {
  const steps = [
    { s: 'Sort', jp: 'Seiri', desc: 'Remove the unnecessary', color: '#e05c5c', angle: -90 },
    { s: 'Set in Order', jp: 'Seiton', desc: 'A place for everything', color: '#e8a84c', angle: -18 },
    { s: 'Shine', jp: 'Seiso', desc: 'Clean & inspect', color: '#4caf82', angle: 54 },
    { s: 'Standardize', jp: 'Seiketsu', desc: 'Document the standard', color: '#6b8ed1', angle: 126 },
    { s: 'Sustain', jp: 'Shitsuke', desc: 'Make it a habit', color: '#c9a84c', angle: 198 },
  ];

  const cx = 200, cy = 170, r = 120, innerR = 52;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 400 340" className="w-full max-w-lg mx-auto" style={{ minWidth: '300px' }}>
        {steps.map((step, i) => {
          const rad = (step.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          const lx = cx + (r + 48) * Math.cos(rad);
          const ly = cy + (r + 48) * Math.sin(rad);

          // Segment arc
          const startAngle = step.angle - 36;
          const endAngle = step.angle + 36;
          const x1 = cx + (innerR + 2) * Math.cos((startAngle * Math.PI) / 180);
          const y1 = cy + (innerR + 2) * Math.sin((startAngle * Math.PI) / 180);
          const x2 = cx + (r - 8) * Math.cos((startAngle * Math.PI) / 180);
          const y2 = cy + (r - 8) * Math.sin((startAngle * Math.PI) / 180);
          const x3 = cx + (r - 8) * Math.cos((endAngle * Math.PI) / 180);
          const y3 = cy + (r - 8) * Math.sin((endAngle * Math.PI) / 180);
          const x4 = cx + (innerR + 2) * Math.cos((endAngle * Math.PI) / 180);
          const y4 = cy + (innerR + 2) * Math.sin((endAngle * Math.PI) / 180);

          return (
            <g key={step.s}>
              <path
                d={`M ${x1} ${y1} L ${x2} ${y2} A ${r - 8} ${r - 8} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR + 2} ${innerR + 2} 0 0 0 ${x1} ${y1}`}
                fill={`${step.color}22`} stroke={step.color} strokeWidth="1.2"
              />
              {/* Number */}
              <circle cx={x} cy={y} r="14" fill={`${step.color}30`} stroke={step.color} strokeWidth="1" />
              <text x={x} y={y + 4} textAnchor="middle" fill={step.color} fontSize="11" fontFamily="Cormorant Garamond, serif" fontWeight="600">{i + 1}</text>

              {/* Label */}
              <text x={lx} y={ly - 6} textAnchor="middle" fill="#f0ece6" fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600">{step.s}</text>
              <text x={lx} y={ly + 7} textAnchor="middle" fill={step.color} fontSize="8.5" fontFamily="DM Sans, sans-serif">{step.jp}</text>
              <text x={lx} y={ly + 19} textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">{step.desc}</text>
            </g>
          );
        })}

        {/* Center */}
        <circle cx={cx} cy={cy} r={innerR} fill="#0f0f18" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
        <text x={cx} y={cy - 5} textAnchor="middle" fill="#c9a84c" fontSize="16" fontFamily="Cormorant Garamond, serif" fontWeight="500">5S</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">Continuous</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">Improvement</text>

        {/* Rotation arrows */}
        <path d="M 245 100 A 75 75 0 0 1 275 170" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(201,168,76,0.4)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
