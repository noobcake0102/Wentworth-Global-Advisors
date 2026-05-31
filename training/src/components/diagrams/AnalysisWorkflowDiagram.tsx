export function AnalysisWorkflowDiagram() {
  const steps = [
    { n: '1', label: 'Define Question', color: '#c9a84c' },
    { n: '2', label: 'Collect Data', color: '#e8a84c' },
    { n: '3', label: 'Clean & Prep', color: '#6b8ed1' },
    { n: '4', label: 'Explore (EDA)', color: '#4caf82' },
    { n: '5', label: 'Model / Test', color: '#9b6bbf' },
    { n: '6', label: 'Communicate', color: '#e05c5c' },
  ];

  const r = 22, cx = 260, cy = 120, orbitR = 95;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 520 240" className="w-full max-w-xl mx-auto" style={{ minWidth: '340px' }}>
        {/* Orbit ring */}
        <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1" strokeDasharray="4,4" />

        {/* Center */}
        <circle cx={cx} cy={cy} r={36} fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#c9a84c" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">DATA</text>
        <text x={cx} y={cy + 9} textAnchor="middle" fill="#c9a84c" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">ANALYSIS</text>

        {steps.map((s, i) => {
          const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          const x = cx + orbitR * Math.cos(angle);
          const y = cy + orbitR * Math.sin(angle);
          const lx = cx + (orbitR + 52) * Math.cos(angle);
          const ly = cy + (orbitR + 52) * Math.sin(angle);

          return (
            <g key={s.n}>
              {/* Connector line */}
              <line x1={x} y1={y} x2={cx + 36 * Math.cos(angle)} y2={cy + 36 * Math.sin(angle)}
                stroke={`${s.color}30`} strokeWidth="1" strokeDasharray="3,2" />

              {/* Step circle */}
              <circle cx={x} cy={y} r={r} fill={`${s.color}18`} stroke={s.color} strokeWidth="1.3" />
              <text x={x} y={y - 4} textAnchor="middle" fill={s.color} fontSize="13"
                fontFamily="Cormorant Garamond, serif" fontWeight="600">{s.n}</text>

              {/* Label */}
              {s.label.split(' ').map((word, wi) => (
                <text key={wi} x={lx} y={ly + (wi - 0.5) * 11} textAnchor="middle" fill="#f0ece6"
                  fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">{word}</text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
