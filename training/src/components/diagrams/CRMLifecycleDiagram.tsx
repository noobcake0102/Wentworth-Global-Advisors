export function CRMLifecycleDiagram() {
  const stages = [
    { label: 'Awareness', desc: 'Attract prospects', color: '#6b8ed1', icon: '◎' },
    { label: 'Acquisition', desc: 'Convert to leads', color: '#9b6bbf', icon: '◉' },
    { label: 'Onboarding', desc: 'First purchase', color: '#4caf82', icon: '✓' },
    { label: 'Engagement', desc: 'Drive usage & value', color: '#c9a84c', icon: '↑' },
    { label: 'Retention', desc: 'Prevent churn', color: '#e8a84c', icon: '⟳' },
    { label: 'Advocacy', desc: 'Referrals & upsells', color: '#e05c5c', icon: '★' },
  ];

  const cx = 230, cy = 128, r = 88;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 460 256" className="w-full max-w-lg mx-auto" style={{ minWidth: '320px' }}>
        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={r + 14} fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx={cx} cy={cy} r={r - 14} fill="none" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />

        {/* Center */}
        <circle cx={cx} cy={cy} r={38} fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.25)" strokeWidth="1.2" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#c9a84c" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="700">CUSTOMER</text>
        <text x={cx} y={cy + 7} textAnchor="middle" fill="#c9a84c" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="700">LIFECYCLE</text>

        {/* Curved arrows between stages */}
        {stages.map((_, i) => {
          const a1 = (i / stages.length) * 2 * Math.PI - Math.PI / 2;
          const a2 = ((i + 0.85) / stages.length) * 2 * Math.PI - Math.PI / 2;
          const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
          const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
          return (
            <path key={i} d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
              fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
          );
        })}

        {stages.map((s, i) => {
          const angle = (i / stages.length) * 2 * Math.PI - Math.PI / 2;
          const nx = cx + r * Math.cos(angle);
          const ny = cy + r * Math.sin(angle);
          const lx = cx + (r + 46) * Math.cos(angle);
          const ly = cy + (r + 46) * Math.sin(angle);

          return (
            <g key={s.label}>
              <circle cx={nx} cy={ny} r={18} fill={`${s.color}18`} stroke={s.color} strokeWidth="1.3" />
              <text x={nx} y={ny + 4} textAnchor="middle" fill={s.color} fontSize="10" fontFamily="DM Sans, sans-serif">{s.icon}</text>

              <text x={lx} y={ly - 5} textAnchor="middle" fill={s.color} fontSize="8.5" fontFamily="DM Sans, sans-serif" fontWeight="700">{s.label}</text>
              <text x={lx} y={ly + 7} textAnchor="middle" fill="#8a899a" fontSize="7.5" fontFamily="DM Sans, sans-serif">{s.desc}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
