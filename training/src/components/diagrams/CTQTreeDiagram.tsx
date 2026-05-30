export function CTQTreeDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 700 280" className="w-full max-w-2xl mx-auto" style={{ minWidth: '420px' }}>
        {/* Root */}
        <rect x="250" y="10" width="200" height="44" rx="3" fill="rgba(201,168,76,0.12)" stroke="#c9a84c" strokeWidth="1.5" />
        <text x="350" y="28" textAnchor="middle" fill="#c9a84c" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="2">BUSINESS NEED</text>
        <text x="350" y="44" textAnchor="middle" fill="#f0ece6" fontSize="11" fontFamily="Cormorant Garamond, Georgia, serif">Fast loan approval</text>

        {/* Connectors level 1 */}
        <line x1="350" y1="54" x2="350" y2="75" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <line x1="180" y1="75" x2="520" y2="75" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <line x1="180" y1="75" x2="180" y2="100" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <line x1="350" y1="75" x2="350" y2="100" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <line x1="520" y1="75" x2="520" y2="100" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />

        {/* Quality Drivers */}
        {[
          { x: 80, label: 'Speed' },
          { x: 250, label: 'Accuracy' },
          { x: 420, label: 'Communication' },
        ].map((d, i) => (
          <g key={i}>
            <rect x={d.x} y="100" width="160" height="38" rx="3" fill="rgba(75,138,209,0.1)" stroke="#6b8ed1" strokeWidth="1" />
            <text x={d.x + 80} y="114" textAnchor="middle" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="1.5">QUALITY DRIVER</text>
            <text x={d.x + 80} y="130" textAnchor="middle" fill="#f0ece6" fontSize="11" fontFamily="Cormorant Garamond, Georgia, serif">{d.label}</text>
          </g>
        ))}

        {/* Connectors level 2 */}
        {[
          { from: 160, to: [80, 240] },
          { from: 330, to: [250, 410] },
          { from: 500, to: [420, 570] },
        ].map((c, i) => (
          <g key={i}>
            <line x1={c.from} y1="138" x2={c.from} y2="160" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
            <line x1={c.to[0]} y1="160" x2={c.to[1]} y2="160" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
            {c.to.map(x => <line key={x} x1={x} y1="160" x2={x} y2="180" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />)}
          </g>
        ))}

        {/* CTQs */}
        {[
          { x: 20, text: '≤5 day cycle time' },
          { x: 180, text: '98% data accuracy' },
          { x: 340, text: 'Zero error rate' },
          { x: 360, text: 'Daily status update' },
          { x: 520, text: 'Decision by day 3' },
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x} y="180" width="130" height="36" rx="3" fill="rgba(76,175,130,0.08)" stroke="rgba(76,175,130,0.4)" strokeWidth="1" />
            <text x={c.x + 65} y="194" textAnchor="middle" fill="#4caf82" fontSize="7.5" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="1.5">CTQ</text>
            <text x={c.x + 65} y="208" textAnchor="middle" fill="#f0ece6" fontSize="10" fontFamily="Cormorant Garamond, Georgia, serif">{c.text}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
