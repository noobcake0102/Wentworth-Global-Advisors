import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, gold = false, onClick }: CardProps) {
  const base = 'bg-card rounded-md border transition-all duration-300';
  const border = gold ? 'border-gold/40' : 'border-border-gold';
  const hoverCls = hover ? 'hover:border-border-hover hover:-translate-y-1 hover:shadow-card cursor-pointer' : '';
  return (
    <div className={`${base} ${border} ${hoverCls} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
