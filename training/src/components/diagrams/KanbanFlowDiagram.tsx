export function KanbanFlowDiagram() {
  const gold = '#c9a84c';
  const blue = '#6b8ed1';
  const green = '#4caf82';
  const muted = '#8a899a';
  const ink = '#f0ece6';

  const columns = [
    { label: 'Backlog', color: muted, cards: ['Task A', 'Task B', 'Task C'] },
    { label: 'In Progress', color: blue, cards: ['Task D', 'Task E'], wip: 3 },
    { label: 'Review', color: gold, cards: ['Task F'], wip: 2 },
    { label: 'Done', color: green, cards: ['Task G', 'Task H'] },
  ];

  const colW = 108, gap = 12, startX = 20, cardH = 28, cardGap = 8;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 480 260" className="w-full max-w-2xl mx-auto" style={{ minWidth: '360px' }}>
        {columns.map((col, ci) => {
          const x = startX + ci * (colW + gap);
          return (
            <g key={col.label}>
              {/* Column header */}
              <rect x={x} y={8} width={colW} height={32} rx="3" fill={`${col.color}20`} stroke={col.color} strokeWidth="1.2" />
              <text x={x + colW / 2} y={26} textAnchor="middle" fill={col.color} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.5">{col.label}</text>
              {col.wip && (
                <text x={x + colW - 10} y={26} textAnchor="middle" fill={col.color} fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.7">WIP:{col.wip}</text>
              )}

              {/* Cards */}
              {col.cards.map((card, ki) => {
                const y = 52 + ki * (cardH + cardGap);
                return (
                  <g key={card}>
                    <rect x={x + 6} y={y} width={colW - 12} height={cardH} rx="3"
                      fill="rgba(255,255,255,0.04)" stroke={`${col.color}40`} strokeWidth="1" />
                    <rect x={x + 6} y={y} width="3" height={cardH} rx="1.5" fill={col.color} opacity="0.7" />
                    <text x={x + 18} y={y + 17} fill={ink} fontSize="9.5" fontFamily="DM Sans, sans-serif">{card}</text>
                  </g>
                );
              })}

              {/* Pull arrow between columns */}
              {ci < columns.length - 1 && (
                <g>
                  <path
                    d={`M ${x + colW + 2} 95 L ${x + colW + gap - 2} 95`}
                    stroke={`${gold}50`} strokeWidth="1.5" markerEnd="url(#karr)" fill="none"
                  />
                  <text x={x + colW + gap / 2} y={88} textAnchor="middle" fill={muted} fontSize="7" fontFamily="DM Sans, sans-serif">pull</text>
                </g>
              )}
            </g>
          );
        })}

        {/* WIP limit annotation */}
        <rect x={startX + colW + gap} y={220} width={(colW + gap) * 2} height={22} rx="3"
          fill={`${gold}10`} stroke={`${gold}30`} strokeWidth="1" strokeDasharray="4,3" />
        <text x={startX + colW + gap + (colW + gap)} y={234} textAnchor="middle" fill={gold} fontSize="8.5" fontFamily="DM Sans, sans-serif">WIP limits prevent overloading stages</text>

        <defs>
          <marker id="karr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill={`${gold}70`} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
