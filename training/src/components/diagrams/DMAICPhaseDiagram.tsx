const phases = [
  { name: 'Define', abbr: 'D', color: '#c9a84c', desc: 'Problem & scope' },
  { name: 'Measure', abbr: 'M', color: '#4caf82', desc: 'Baseline data' },
  { name: 'Analyze', abbr: 'A', color: '#e8a84c', desc: 'Root causes' },
  { name: 'Improve', abbr: 'I', color: '#6b8ed1', desc: 'Solutions' },
  { name: 'Control', abbr: 'C', color: '#9b6bb5', desc: 'Sustain gains' },
];

export function DMAICPhaseDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 680 160" className="w-full max-w-2xl mx-auto" style={{ minWidth: '400px' }}>
        {phases.map((p, i) => {
          const cx = 70 + i * 135;
          const cy = 80;
          // Arrow between phases
          if (i < phases.length - 1) {
            return (
              <g key={p.name}>
                <circle cx={cx} cy={cy} r={52} fill={`${p.color}18`} stroke={p.color} strokeWidth="1.5" />
                <text x={cx} y={cy - 10} textAnchor="middle" fill={p.color} fontSize="22" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="500">{p.abbr}</text>
                <text x={cx} y={cy + 8} textAnchor="middle" fill="#f0ece6" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="500">{p.name}</text>
                <text x={cx} y={cy + 22} textAnchor="middle" fill="#8a899a" fontSize="9" fontFamily="DM Sans, sans-serif">{p.desc}</text>
                {/* Arrow */}
                <line x1={cx + 52} y1={cy} x2={cx + 83} y2={cy} stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" />
                <polygon points={`${cx + 83},${cy - 4} ${cx + 90},${cy} ${cx + 83},${cy + 4}`} fill="rgba(201,168,76,0.4)" />
              </g>
            );
          }
          return (
            <g key={p.name}>
              <circle cx={cx} cy={cy} r={52} fill={`${p.color}18`} stroke={p.color} strokeWidth="1.5" />
              <text x={cx} y={cy - 10} textAnchor="middle" fill={p.color} fontSize="22" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="500">{p.abbr}</text>
              <text x={cx} y={cy + 8} textAnchor="middle" fill="#f0ece6" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="500">{p.name}</text>
              <text x={cx} y={cy + 22} textAnchor="middle" fill="#8a899a" fontSize="9" fontFamily="DM Sans, sans-serif">{p.desc}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
