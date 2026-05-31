// TPS House: Foundation → Pillars → Roof
export function LeanHouseDiagram() {
  const gold = '#c9a84c';
  const blue = '#6b8ed1';
  const green = '#4caf82';
  const muted = '#8a899a';
  const ink = '#f0ece6';

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 600 340" className="w-full max-w-2xl mx-auto" style={{ minWidth: '380px' }}>
        {/* Roof */}
        <polygon points="300,18 560,120 40,120" fill={`${gold}18`} stroke={gold} strokeWidth="1.5" />
        <text x="300" y="72" textAnchor="middle" fill={gold} fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="2">BEST QUALITY · LOWEST COST · SHORTEST LEAD TIME</text>

        {/* Left pillar — JIT */}
        <rect x="55" y="126" width="195" height="140" rx="2" fill={`${blue}12`} stroke={blue} strokeWidth="1.2" />
        <text x="152" y="150" textAnchor="middle" fill={blue} fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="1">JUST-IN-TIME</text>
        {['Right part, right time,', 'right amount', '', 'Continuous flow', 'Takt time', 'Pull system'].map((t, i) => (
          <text key={i} x="152" y={170 + i * 16} textAnchor="middle" fill={i === 0 || i === 1 ? ink : muted} fontSize="10" fontFamily="DM Sans, sans-serif">{t}</text>
        ))}

        {/* Right pillar — Jidoka */}
        <rect x="350" y="126" width="195" height="140" rx="2" fill={`${green}12`} stroke={green} strokeWidth="1.2" />
        <text x="447" y="150" textAnchor="middle" fill={green} fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="1">JIDOKA</text>
        {['Make problems visible', '', 'Automatic stop', 'Andon', 'Problem-solving', 'Error-proofing'].map((t, i) => (
          <text key={i} x="447" y={170 + i * 16} textAnchor="middle" fill={i === 0 ? ink : muted} fontSize="10" fontFamily="DM Sans, sans-serif">{t}</text>
        ))}

        {/* Center — Heijunka */}
        <rect x="255" y="126" width="90" height="140" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="300" y="155" textAnchor="middle" fill={muted} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="1">HEIJUNKA</text>
        <text x="300" y="172" textAnchor="middle" fill={muted} fontSize="8" fontFamily="DM Sans, sans-serif">Level</text>
        <text x="300" y="185" textAnchor="middle" fill={muted} fontSize="8" fontFamily="DM Sans, sans-serif">scheduling</text>
        <text x="300" y="215" textAnchor="middle" fill={muted} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="1">STANDARD</text>
        <text x="300" y="228" textAnchor="middle" fill={muted} fontSize="8" fontFamily="DM Sans, sans-serif">WORK</text>
        <text x="300" y="250" textAnchor="middle" fill={muted} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="1">KAIZEN</text>

        {/* Foundation */}
        <rect x="40" y="272" width="520" height="52" rx="2" fill={`${gold}15`} stroke={gold} strokeWidth="1.5" />
        <text x="300" y="294" textAnchor="middle" fill={gold} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="2">STABLE &amp; STANDARDIZED PROCESSES</text>
        <text x="300" y="312" textAnchor="middle" fill={muted} fontSize="10" fontFamily="DM Sans, sans-serif">Total Productive Maintenance · Visual Management · 5S</text>
      </svg>
    </div>
  );
}
