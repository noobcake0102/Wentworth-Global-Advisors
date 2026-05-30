interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'gold' | 'success' | 'green';
}

export function ProgressBar({ value, className = '', showLabel = false, size = 'md', color = 'gold' }: ProgressBarProps) {
  const heights = { sm: 'h-1', md: 'h-1.5', lg: 'h-2' };
  const fills = { gold: 'bg-gold', success: 'bg-success', green: 'bg-success' };
  return (
    <div className={`${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-muted font-sans">Progress</span>
          <span className="text-xs text-gold font-sans font-medium">{value}%</span>
        </div>
      )}
      <div className={`w-full bg-white/5 rounded-full overflow-hidden ${heights[size]}`}>
        <div
          className={`${heights[size]} ${fills[color]} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
