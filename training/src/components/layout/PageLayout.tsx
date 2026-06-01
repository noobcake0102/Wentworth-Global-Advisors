import { type ReactNode } from 'react';
import { AppLayout } from './AppLayout';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <AppLayout title={title}>
      {children}
    </AppLayout>
  );
}
