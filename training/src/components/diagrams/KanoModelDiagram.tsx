export function KanoModelDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 500 340" className="w-full max-w-lg mx-auto" style={{ minWidth: '320px' }}>
        {/* Axes */}
        <line x1="60" y1="280" x2="460" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="60" y1="20" x2="60" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="60" y1="150" x2="460" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="260" y1="20" x2="260" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Axis labels */}
        <text x="260" y="300" textAnchor="middle" fill="#8a899a" fontSize="10" fontFamily="DM Sans, sans-serif">Fulfilled →</text>
        <text x="12" y="155" textAnchor="middle" fill="#8a899a" fontSize="10" fontFamily="DM Sans, sans-serif" transform="rotate(-90 12 155)">Satisfied →</text>
        <text x="460" y="155" textAnchor="end" fill="#52515f" fontSize="9" fontFamily="DM Sans, sans-serif">→ Not fulfilled</text>
        <text x="260" y="18" textAnchor="middle" fill="#52515f" fontSize="9" fontFamily="DM Sans, sans-serif">Dissatisfied ↓</text>

        {/* Delighter curve (exponential rise top right) */}
        <path d="M 60,155 Q 200,148 260,120 T 460,30" fill="none" stroke="#c9a84c" strokeWidth="2" />
        <text x="390" y="55" fill="#c9a84c" fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="500">Delighters</text>
        <text x="390" y="67" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">(Excitement)</text>

        {/* Performance line (diagonal) */}
        <line x1="60" y1="280" x2="460" y2="20" stroke="#6b8ed1" strokeWidth="2" />
        <text x="360" y="100" fill="#6b8ed1" fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="500">Performance</text>
        <text x="360" y="112" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">(Satisfiers)</text>

        {/* Must-Have curve (flat negative, rises slightly right) */}
        <path d="M 60,270 Q 160,265 260,250 T 460,150" fill="none" stroke="#4caf82" strokeWidth="2" />
        <text x="100" y="300" fill="#4caf82" fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="500">Must-Haves</text>
        <text x="100" y="312" fill="#8a899a" fontSize="8" fontFamily="DM Sans, sans-serif">(Basic Needs)</text>
      </svg>
    </div>
  );
}
