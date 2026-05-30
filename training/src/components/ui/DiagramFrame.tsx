import { type ReactNode } from 'react';

interface DiagramFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DiagramFrame({ title, children, className = '' }: DiagramFrameProps) {
  return (
    <div className={`rounded-md border border-border-gold bg-surface/50 overflow-hidden my-6 ${className}`}>
      <div className="px-5 py-3 border-b border-border-gold flex items-center gap-2.5">
        <div className="w-5 h-px bg-gold" />
        <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
