export function ADKARDiagram() {
  const steps = [
    { letter: 'A', word: 'Awareness', desc: 'Why change is needed', color: '#c9a84c' },
    { letter: 'D', word: 'Desire', desc: 'Personal motivation to change', color: '#e8a84c' },
    { letter: 'K', word: 'Knowledge', desc: 'How to change', color: '#6b8ed1' },
    { letter: 'A', word: 'Ability', desc: 'Skills & behaviors', color: '#4caf82' },
    { letter: 'R', word: 'Reinforcement', desc: 'Sustain the change', color: '#9b6bbf' },
  ];

  const blockW = 82, blockH = 110, gap = 8, startX = 22;

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 500 170" className="w-full max-w-xl mx-auto" style={{ minWidth: '340px' }}>
        {steps.map((s, i) => {
          const x = startX + i * (blockW + gap);
          return (
            <g key={`${s.letter}-${i}`}>
              {/* Block */}
              <rect x={x} y={20} width={blockW} height={blockH} rx="4"
                fill={`${s.color}15`} stroke={s.color} strokeWidth="1.2" />

              {/* Letter circle */}
              <circle cx={x + blockW / 2} cy={45} r="18" fill={`${s.color}25`} stroke={s.color} strokeWidth="1.5" />
              <text x={x + blockW / 2} y={51} textAnchor="middle" fill={s.color}
                fontSize="18" fontFamily="Cormorant Garamond, serif" fontWeight="600">{s.letter}</text>

              {/* Word */}
              <text x={x + blockW / 2} y={80} textAnchor="middle" fill="#f0ece6"
                fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600">{s.word}</text>

              {/* Description */}
              {s.desc.split(' ').reduce((lines: string[][], word) => {
                const last = lines[lines.length - 1];
                if (last && (last.join(' ') + ' ' + word).length < 13) {
                  last.push(word);
                } else {
                  lines.push([word]);
                }
                return lines;
              }, []).map((line, li) => (
                <text key={li} x={x + blockW / 2} y={96 + li * 12} textAnchor="middle"
                  fill="#8a899a" fontSize="8.5" fontFamily="DM Sans, sans-serif">{line.join(' ')}</text>
              ))}

              {/* Arrow */}
              {i < steps.length - 1 && (
                <path d={`M${x + blockW + 2} 75 L${x + blockW + gap - 2} 75`}
                  stroke={`${s.color}50`} strokeWidth="1.5" markerEnd="url(#adkar-arr)" />
              )}
            </g>
          );
        })}

        {/* Sequential requirement note */}
        <text x={startX + (blockW + gap) * 2 + blockW / 2} y={155} textAnchor="middle"
          fill="#8a899a" fontSize="8.5" fontFamily="DM Sans, sans-serif">
          Each stage must be achieved before the next is sustainable
        </text>

        <defs>
          <marker id="adkar-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(201,168,76,0.5)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
