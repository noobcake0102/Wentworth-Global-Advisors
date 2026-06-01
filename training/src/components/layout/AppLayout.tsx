import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const PAGE_TITLES: Record<string, string> = {
  '/courses': 'Course Catalog',
  '/dashboard': 'Dashboard',
  '/defense': 'Defense Contracting',
  '/profile': 'Profile',
  '/login': 'Sign In',
};

function getPageTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  if (pathname.includes('/certificate')) return 'Certificate';
  if (pathname.includes('/quiz')) return 'Module Quiz';
  if (pathname.includes('/lessons/')) return 'Lesson';
  if (pathname.includes('/courses/')) return 'Course Overview';
  return 'Wentworth Operations Academy';
}

interface TopbarProps {
  title: string;
}

function Topbar({ title }: TopbarProps) {
  return (
    <div style={{
      height: 54,
      background: 'rgba(17,17,17,0.98)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(201,168,76,0.12)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 28px',
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: '#f9fafb',
      }}>
        {title}
      </span>
    </div>
  );
}

interface AppLayoutProps {
  children: ReactNode;
  /** Override the auto-detected page title */
  title?: string;
  /** Set to true to remove the topbar (e.g. for lesson/quiz players that manage their own header) */
  noTopbar?: boolean;
  /** Set to true to remove padding from the view container */
  noPadding?: boolean;
}

export function AppLayout({ children, title, noTopbar = false, noPadding = false }: AppLayoutProps) {
  const location = useLocation();
  const pageTitle = title ?? getPageTitle(location.pathname);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', minWidth: 0 }}>
        {!noTopbar && <Topbar title={pageTitle} />}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: noPadding ? 0 : '28px 32px 60px',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
