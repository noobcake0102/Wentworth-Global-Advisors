export function ImprovementJourneyDiagram() {
  const steps = [
    { x: 60, y: 220, label: 'Start', sublabel: 'Baseline', color: '#8a899a' },
    { x: 180, y: 175, label: 'DMAIC', sublabel: 'Project 1', color: '#c9a84c' },
    { x: 300, y: 140, label: 'Kaizen', sublabel: 'Daily CI', color: '#4caf82' },
    { x: 420, y: 100, label: 'DMAIC', sublabel: 'Project 2', color: '#c9a84c' },
    { x: 540, y: 60, label: 'Kaizen', sublabel: 'Daily CI', color: '#4caf82' },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 640 280" className="w-full max-w-xl mx-auto" style={{ minWidth: '380px' }}>
        {/* Axes */}
        <line x1="50" y1="240" x2="610" y2="240" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="50" y1="30" x2="50" y2="240" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <text x="330" y="260" textAnchor="middle" fill="#8a899a" fontSize="10" fontFamily="DM Sans, sans-serif">Time →</text>
        <text x="18" y="140" textAnchor="middle" fill="#8a899a" fontSize="10" fontFamily="DM Sans, sans-serif" transform="rotate(-90 18 140)">Performance ↑</text>

        {/* Staircase line */}
        {steps.map((s, i) => {
          if (i === 0) return null;
          const prev = steps[i - 1];
          return (
            <g key={i}>
              <line x1={prev.x + 20} y1={prev.y + 20} x2={s.x - 20} y2={prev.y + 20} stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1={s.x - 20} y1={prev.y + 20} x2={s.x - 20} y2={s.y + 20} stroke={s.color} strokeWidth="2" />
            </g>
          );
        })}

        {/* Step markers */}
        {steps.map((s, i) => (
          <g key={i}>
            <circle cx={s.x} cy={s.y + 20} r="18" fill={`${s.color}18`} stroke={s.color} strokeWidth="1.5" />
            <text x={s.x} y={s.y + 17} textAnchor="middle" fill={s.color} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">{s.label}</text>
            <text x={s.x} y={s.y + 27} textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">{s.sublabel}</text>
          </g>
        ))}

        {/* Legend */}
        <rect x="430" y="210" width="12" height="12" rx="2" fill="rgba(201,168,76,0.3)" stroke="#c9a84c" strokeWidth="1" />
        <text x="448" y="221" fill="#c9a84c" fontSize="9" fontFamily="DM Sans, sans-serif">DMAIC Project</text>
        <rect x="530" y="210" width="12" height="12" rx="2" fill="rgba(76,175,130,0.3)" stroke="#4caf82" strokeWidth="1" />
        <text x="548" y="221" fill="#4caf82" fontSize="9" fontFamily="DM Sans, sans-serif">Kaizen</text>
      </svg>
    </div>
  );
}
