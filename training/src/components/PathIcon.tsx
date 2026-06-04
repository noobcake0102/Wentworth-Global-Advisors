// Custom SVG icons for each learning path, matching the WGA dark/gold theme.
// Each icon is 40×40 viewBox, stroke-based, matching the ProgramPage course icon style.

interface PathIconProps {
  pathId: string;
  color: string;
  size?: number;
}

export function PathIcon({ pathId, color, size = 40 }: PathIconProps) {
  const s = size;

  const icons: Record<string, React.ReactElement> = {
    // Continuous Improvement Practitioner — belt knot / rank stripe
    'ci-practitioner': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="4" y="15" width="32" height="11" rx="5.5" fill={color} opacity="0.15" stroke={color} strokeWidth="1.4" />
        <ellipse cx="20" cy="20.5" rx="6" ry="5.5" fill={color} opacity="0.25" stroke={color} strokeWidth="1.4" />
        <circle cx="20" cy="20.5" r="2.5" fill={color} />
        <line x1="4" y1="23" x2="9" y2="23" stroke={color} strokeWidth="1" opacity="0.5" />
        <line x1="31" y1="23" x2="36" y2="23" stroke={color} strokeWidth="1" opacity="0.5" />
      </svg>
    ),

    // New Operations Leader — org chart / people hierarchy
    'operations-leader': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="10" r="4.5" fill={color} opacity="0.22" stroke={color} strokeWidth="1.4" />
        <circle cx="9" cy="28" r="4" fill={color} opacity="0.22" stroke={color} strokeWidth="1.3" />
        <circle cx="31" cy="28" r="4" fill={color} opacity="0.22" stroke={color} strokeWidth="1.3" />
        <line x1="20" y1="14.5" x2="20" y2="19" stroke={color} strokeWidth="1.3" />
        <line x1="20" y1="19" x2="9" y2="24" stroke={color} strokeWidth="1.3" />
        <line x1="20" y1="19" x2="31" y2="24" stroke={color} strokeWidth="1.3" />
        <circle cx="20" cy="19" r="1.5" fill={color} opacity="0.6" />
      </svg>
    ),

    // Data & Analytics Professional — line chart with nodes
    'data-analytics': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <polyline points="5,30 13,18 20,23 28,11 35,17"
          stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5"  cy="30" r="2.2" fill={color} />
        <circle cx="13" cy="18" r="2.2" fill={color} />
        <circle cx="20" cy="23" r="2.2" fill={color} />
        <circle cx="28" cy="11" r="2.2" fill={color} />
        <circle cx="35" cy="17" r="2.2" fill={color} />
        <line x1="5" y1="33" x2="35" y2="33" stroke={color} strokeWidth="1" opacity="0.3" />
      </svg>
    ),

    // Finance & Business Acumen — coin / currency ring with bars
    'finance-acumen': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="13" fill={color} opacity="0.12" stroke={color} strokeWidth="1.4" />
        <circle cx="20" cy="20" r="8" fill={color} opacity="0.18" stroke={color} strokeWidth="1.2" />
        <text x="20" y="25" textAnchor="middle" fontSize="11" fontFamily="Georgia, serif" fill={color} fontWeight="400">$</text>
      </svg>
    ),

    // Operations Analyst Foundation — seedling / foundation layers
    'operations-analyst': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        {/* stem */}
        <line x1="20" y1="32" x2="20" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        {/* left leaf */}
        <path d="M20 22 C14 20 10 14 13 9 C16 9 20 14 20 22Z" fill={color} opacity="0.25" stroke={color} strokeWidth="1.3" />
        {/* right leaf */}
        <path d="M20 22 C26 20 30 14 27 9 C24 9 20 14 20 22Z" fill={color} opacity="0.25" stroke={color} strokeWidth="1.3" />
        {/* soil baseline */}
        <rect x="10" y="32" width="20" height="3" rx="1.5" fill={color} opacity="0.35" />
      </svg>
    ),

    // Defense Executive — shield with star
    'defense-executive': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <path d="M20 5 L33 10 L33 22 C33 29 27 34 20 37 C13 34 7 29 7 22 L7 10 Z"
          fill={color} opacity="0.15" stroke={color} strokeWidth="1.4" />
        <polygon points="20,13 21.8,18.5 27.5,18.5 22.9,21.8 24.7,27.3 20,24 15.3,27.3 17.1,21.8 12.5,18.5 18.2,18.5"
          fill={color} opacity="0.7" />
      </svg>
    ),

    // Defense Operations — gear / cog
    'defense-operations': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="6" fill={color} opacity="0.25" stroke={color} strokeWidth="1.4" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const r = Math.PI * deg / 180;
          const x1 = 20 + 7.5 * Math.cos(r), y1 = 20 + 7.5 * Math.sin(r);
          const x2 = 20 + 12 * Math.cos(r), y2 = 20 + 12 * Math.sin(r);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" />;
        })}
        <circle cx="20" cy="20" r="6" fill={color} opacity="0.2" stroke={color} strokeWidth="1.4" />
        <circle cx="20" cy="20" r="2.5" fill={color} />
      </svg>
    ),

    // Defense BD — target / bullseye with arrow
    'defense-bd': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="19" cy="21" r="13" fill={color} opacity="0.1" stroke={color} strokeWidth="1.3" />
        <circle cx="19" cy="21" r="8"  fill={color} opacity="0.15" stroke={color} strokeWidth="1.3" />
        <circle cx="19" cy="21" r="3.5" fill={color} opacity="0.6" />
        {/* arrow coming in from top-right */}
        <line x1="30" y1="10" x2="21" y2="19" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <polyline points="25,9 30,10 29,15" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  };

  return icons[pathId] ?? (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="8" y="8" width="24" height="24" rx="4" stroke={color} strokeWidth="1.4" fill={color} opacity="0.15" />
      <path d="M14 20 L26 20 M14 15 L26 15 M14 25 L20 25" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
