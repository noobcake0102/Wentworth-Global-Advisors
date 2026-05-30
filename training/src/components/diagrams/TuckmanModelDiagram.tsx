export function TuckmanModelDiagram() {
  const stages = [
    { name: 'Forming', desc: 'Polite, uncertain', color: '#6b8ed1', perf: 20 },
    { name: 'Storming', desc: 'Conflict emerges', color: '#e05c5c', perf: 35 },
    { name: 'Norming', desc: 'Trust builds', color: '#e8a84c', perf: 62 },
    { name: 'Performing', desc: 'High output', color: '#4caf82', perf: 90 },
    { name: 'Adjourning', desc: 'Wrap-up & reflect', color: '#c9a84c', perf: 70 },
  ];

  const w = 500, h = 220, padL = 30, padR = 20, padT = 20, padB = 50;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const stageW = plotW / stages.length;

  // Performance curve points
  const points = stages.map((s, i) => {
    const x = padL + i * stageW + stageW / 2;
    const y = padT + plotH - (s.perf / 100) * plotH;
    return { x, y, ...s };
  });
  // Smooth it: cubic bezier
  const smoothD = points.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = points[i - 1];
    const cpx = (prev.x + p.x) / 2;
    return `${acc} C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
  }, '');

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h + 10}`} className="w-full max-w-2xl mx-auto" style={{ minWidth: '360px' }}>
        {/* Background stage columns */}
        {stages.map((s, i) => (
          <rect key={s.name} x={padL + i * stageW} y={padT} width={stageW} height={plotH}
            fill={`${s.color}08`} stroke={`${s.color}20`} strokeWidth="0.5" />
        ))}

        {/* Y-axis label */}
        <text x="12" y={padT + plotH / 2} textAnchor="middle" fill="#8a899a" fontSize="8"
          fontFamily="DM Sans, sans-serif" transform={`rotate(-90, 12, ${padT + plotH / 2})`}>
          Team Performance
        </text>

        {/* Performance curve area fill */}
        <path d={`${smoothD} L${points[points.length - 1].x},${padT + plotH} L${padL},${padT + plotH} Z`}
          fill="rgba(201,168,76,0.05)" />

        {/* Performance curve line */}
        <path d={smoothD} fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />

        {/* Data points */}
        {points.map(p => (
          <circle key={p.name} cx={p.x} cy={p.y} r="5" fill={p.color} stroke="#09090f" strokeWidth="1.5" />
        ))}

        {/* Stage labels */}
        {stages.map((s, i) => {
          const x = padL + i * stageW + stageW / 2;
          return (
            <g key={s.name}>
              <text x={x} y={padT + plotH + 16} textAnchor="middle" fill={s.color}
                fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700">{s.name}</text>
              <text x={x} y={padT + plotH + 28} textAnchor="middle" fill="#8a899a"
                fontSize="8" fontFamily="DM Sans, sans-serif">{s.desc}</text>
            </g>
          );
        })}

        {/* Storming annotation */}
        <text x={padL + 1 * stageW + stageW / 2} y={padT + plotH - (35 / 100) * plotH - 14}
          textAnchor="middle" fill="#e05c5c" fontSize="8" fontFamily="DM Sans, sans-serif">
          Leadership needed most
        </text>
      </svg>
    </div>
  );
}
