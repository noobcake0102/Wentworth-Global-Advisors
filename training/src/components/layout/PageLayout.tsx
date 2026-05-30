import { type ReactNode } from 'react';
import { Header } from './Header';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
    </div>
  );
}
