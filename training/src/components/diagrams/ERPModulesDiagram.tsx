export function ERPModulesDiagram() {
  const modules = [
    { label: 'Finance & Accounting', abbr: 'FIN', color: '#4caf82', col: 0, row: 0 },
    { label: 'Human Resources', abbr: 'HR', color: '#6b8ed1', col: 1, row: 0 },
    { label: 'Supply Chain', abbr: 'SCM', color: '#c9a84c', col: 2, row: 0 },
    { label: 'Manufacturing', abbr: 'MFG', color: '#9b6bbf', col: 0, row: 1 },
    { label: 'Sales & CRM', abbr: 'CRM', color: '#e05c5c', col: 1, row: 1 },
    { label: 'Procurement', abbr: 'PRC', color: '#e8a84c', col: 2, row: 1 },
  ];

  const bw = 110, bh = 58, gx = 14, gy = 14, startX = 22, startY = 16;
  const coreX = startX + bw + gx, coreY = startY + 2 * (bh + gy) + 14;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 390 260" className="w-full max-w-lg mx-auto" style={{ minWidth: '300px' }}>
        {/* Core database */}
        <rect x={coreX} y={coreY} width={bw} height={40} rx="5"
          fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
        <text x={coreX + bw / 2} y={coreY + 16} textAnchor="middle" fill="#c9a84c"
          fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="700">CENTRAL DATABASE</text>
        <text x={coreX + bw / 2} y={coreY + 29} textAnchor="middle" fill="#8a899a"
          fontSize="8" fontFamily="DM Sans, sans-serif">Shared data & workflows</text>

        {modules.map((m) => {
          const x = startX + m.col * (bw + gx);
          const y = startY + m.row * (bh + gy);
          const mx = x + bw / 2;
          const my = y + bh / 2;
          // connector to center DB
          const dbMx = coreX + bw / 2;
          const dbMy = coreY;
          return (
            <g key={m.label}>
              <line x1={mx} y1={my + bh / 2} x2={dbMx} y2={dbMy}
                stroke={`${m.color}25`} strokeWidth="1" strokeDasharray="3,2" />
              <rect x={x} y={y} width={bw} height={bh} rx="4"
                fill={`${m.color}12`} stroke={m.color} strokeWidth="1.2" />
              <text x={mx} y={y + 22} textAnchor="middle" fill={m.color}
                fontSize="14" fontFamily="Cormorant Garamond, serif" fontWeight="600">{m.abbr}</text>
              <text x={mx} y={y + 36} textAnchor="middle" fill="#f0ece6"
                fontSize="7.5" fontFamily="DM Sans, sans-serif" fontWeight="600">{m.label}</text>
            </g>
          );
        })}

        {/* ERP label */}
        <rect x={22} y={222} width={344} height={22} rx="3"
          fill="rgba(107,142,209,0.08)" stroke="rgba(107,142,209,0.2)" strokeWidth="0.8" />
        <text x={22 + 172} y={237} textAnchor="middle" fill="#6b8ed1"
          fontSize="8.5" fontFamily="DM Sans, sans-serif">All modules share a single source of truth — eliminating data silos</text>
      </svg>
    </div>
  );
}
