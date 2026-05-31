export function ChartSelectionDiagram() {
  const charts = [
    { type: 'Bar', use: 'Compare categories', good: 'Rankings, counts', color: '#6b8ed1' },
    { type: 'Line', use: 'Show trends over time', good: 'Time series, rates', color: '#4caf82' },
    { type: 'Scatter', use: 'Show relationships', good: 'Correlation, outliers', color: '#c9a84c' },
    { type: 'Histogram', use: 'Show distribution', good: 'Frequency, spread', color: '#e8a84c' },
    { type: 'Pie', use: 'Show composition', good: 'Parts of a whole (≤5)', color: '#9b6bbf' },
    { type: 'Heatmap', use: 'Show magnitude grid', good: 'Cross-tab patterns', color: '#e05c5c' },
  ];

  const cardW = 142, cardH = 78, cols = 3, gap = 12, startX = 22;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 480 200" className="w-full max-w-xl mx-auto" style={{ minWidth: '360px' }}>
        {charts.map((c, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = startX + col * (cardW + gap);
          const y = 12 + row * (cardH + gap);
          return (
            <g key={c.type}>
              <rect x={x} y={y} width={cardW} height={cardH} rx="4"
                fill={`${c.color}10`} stroke={c.color} strokeWidth="1.1" />

              {/* Mini chart preview */}
              {c.type === 'Bar' && (
                <g>
                  {[28, 40, 22, 34].map((h, bi) => (
                    <rect key={bi} x={x + 8 + bi * 10} y={y + 38 - h / 2} width={7} height={h / 2} rx="1"
                      fill={`${c.color}50`} />
                  ))}
                </g>
              )}
              {c.type === 'Line' && (
                <polyline points={`${x + 8},${y + 36} ${x + 19},${y + 28} ${x + 30},${y + 32} ${x + 41},${y + 22} ${x + 52},${y + 26}`}
                  fill="none" stroke={c.color} strokeWidth="1.5" opacity="0.5" />
              )}
              {c.type === 'Scatter' && (
                <g>
                  {[[10, 34], [18, 28], [28, 22], [38, 18], [48, 14]].map(([bx, by], si) => (
                    <circle key={si} cx={x + bx} cy={y + by} r="2.5" fill={`${c.color}60`} />
                  ))}
                </g>
              )}
              {c.type === 'Histogram' && (
                <g>
                  {[10, 22, 36, 28, 16].map((h, bi) => (
                    <rect key={bi} x={x + 7 + bi * 9} y={y + 40 - h} width={8} height={h} rx="0.5"
                      fill={`${c.color}50`} />
                  ))}
                </g>
              )}
              {c.type === 'Pie' && (
                <g>
                  <circle cx={x + 30} cy={y + 28} r="18" fill="none" stroke={`${c.color}20`} strokeWidth="12" />
                  <circle cx={x + 30} cy={y + 28} r="18" fill="none" stroke={c.color} strokeWidth="12"
                    strokeDasharray={`${0.45 * 2 * Math.PI * 18} ${2 * Math.PI * 18}`} strokeDashoffset="0" opacity="0.4" />
                </g>
              )}
              {c.type === 'Heatmap' && (
                <g>
                  {[0.2, 0.8, 0.4, 0.9, 0.3, 0.6, 0.7, 0.1, 0.5].map((v, hi) => (
                    <rect key={hi} x={x + 8 + (hi % 3) * 14} y={y + 18 + Math.floor(hi / 3) * 9}
                      width={12} height={7} rx="1" fill={c.color} opacity={v * 0.7} />
                  ))}
                </g>
              )}

              {/* Chart type name */}
              <text x={x + 64} y={y + 22} fill={c.color} fontSize="11"
                fontFamily="DM Sans, sans-serif" fontWeight="700">{c.type}</text>
              <text x={x + 64} y={y + 36} fill="#f0ece6" fontSize="8.5"
                fontFamily="DM Sans, sans-serif">{c.use}</text>
              <text x={x + 64} y={y + 49} fill="#8a899a" fontSize="8"
                fontFamily="DM Sans, sans-serif">{c.good}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
