import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  loading?: boolean;
}

export function Button({ variant = 'gold', size = 'md', children, loading, className = '', disabled, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    gold: 'bg-gold text-bg hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold',
    outline: 'bg-transparent text-ink border border-white/20 hover:border-gold hover:text-gold hover:-translate-y-0.5',
    ghost: 'bg-transparent text-muted hover:text-gold hover:bg-gold-subtle',
    danger: 'bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20',
  };
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3.5 text-xs',
    lg: 'px-10 py-4 text-sm',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}
