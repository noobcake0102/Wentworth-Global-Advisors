interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'success' | 'danger' | 'muted' | 'yellow' | 'green' | 'black';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'muted', size = 'md' }: BadgeProps) {
  const variants = {
    gold:    'bg-gold/10 text-gold border border-gold/20',
    success: 'bg-success/10 text-success border border-success/20',
    danger:  'bg-danger/10 text-danger border border-danger/20',
    muted:   'bg-white/5 text-muted border border-white/10',
    yellow:  'bg-gold text-bg',
    green:   'bg-success text-bg',
    black:   'bg-ink text-bg',
  };
  const sizes = { sm: 'px-2 py-0.5 text-xs', md: 'px-3 py-1 text-xs' };
  return (
    <span className={`inline-flex items-center font-sans font-medium tracking-wider uppercase rounded-sm ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
