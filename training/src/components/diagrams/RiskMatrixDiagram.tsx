export function RiskMatrixDiagram() {
  const cells = [
    // [col, row, label, color]
    [0, 2, 'Low', '#4caf8220'], [1, 2, 'Low', '#4caf8220'], [2, 2, 'Medium', '#e8a84c20'],
    [0, 1, 'Low', '#4caf8220'], [1, 1, 'Medium', '#e8a84c20'], [2, 1, 'High', '#e05c5c20'],
    [0, 0, 'Medium', '#e8a84c20'], [1, 0, 'High', '#e05c5c20'], [2, 0, 'Critical', '#e05c5c40'],
  ];

  const colLabels = ['Low', 'Medium', 'High'];
  const rowLabels = ['High', 'Medium', 'Low'];
  const cellSize = 70, padL = 64, padB = 44, padT = 16, padR = 16;
  const w = padL + cellSize * 3 + padR;
  const h = padT + cellSize * 3 + padB;

  const colorMap: Record<string, string> = {
    Low: '#4caf82', Medium: '#e8a84c', High: '#e05c5c', Critical: '#e05c5c',
  };

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto" style={{ minWidth: '280px' }}>
        {/* Y-axis label */}
        <text x="10" y={padT + cellSize * 1.5} textAnchor="middle" fill="#8a899a"
          fontSize="9" fontFamily="DM Sans, sans-serif"
          transform={`rotate(-90, 10, ${padT + cellSize * 1.5})`}>Probability</text>

        {/* X-axis label */}
        <text x={padL + cellSize * 1.5} y={h - 6} textAnchor="middle" fill="#8a899a"
          fontSize="9" fontFamily="DM Sans, sans-serif">Impact</text>

        {/* Row labels (probability) */}
        {rowLabels.map((label, i) => (
          <text key={label} x={padL - 8} y={padT + i * cellSize + cellSize / 2 + 4}
            textAnchor="end" fill="#8a899a" fontSize="9" fontFamily="DM Sans, sans-serif">{label}</text>
        ))}

        {/* Col labels (impact) */}
        {colLabels.map((label, i) => (
          <text key={label} x={padL + i * cellSize + cellSize / 2} y={padT + cellSize * 3 + 16}
            textAnchor="middle" fill="#8a899a" fontSize="9" fontFamily="DM Sans, sans-serif">{label}</text>
        ))}

        {/* Grid cells */}
        {cells.map(([ci, ri, label, fill]) => {
          const x = padL + (ci as number) * cellSize;
          const y = padT + (ri as number) * cellSize;
          const c = colorMap[label as string];
          return (
            <g key={`${ci}-${ri}`}>
              <rect x={x} y={y} width={cellSize} height={cellSize}
                fill={fill as string} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <text x={x + cellSize / 2} y={y + cellSize / 2 + 4} textAnchor="middle"
                fill={c} fontSize="9.5" fontFamily="DM Sans, sans-serif" fontWeight="600">
                {label as string}
              </text>
            </g>
          );
        })}

        {/* Critical region highlight */}
        <rect x={padL + 2 * cellSize} y={padT} width={cellSize} height={cellSize}
          fill="none" stroke="#e05c5c" strokeWidth="1.5" strokeDasharray="3,2" />
      </svg>
    </div>
  );
}
