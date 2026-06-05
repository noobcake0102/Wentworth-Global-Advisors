import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { useSidebar } from '../../context/SidebarContext';

const PAGE_TITLES: Record<string, string> = {
  '/courses': 'Course Catalog',
  '/dashboard': 'Dashboard',
  '/defense': 'Defense Contracting',
  '/profile': 'Profile',
  '/login': 'Sign In',
  '/paths': 'Learning Paths',
};

function getPageTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  if (pathname.startsWith('/paths/')) return 'Learning Path';
  if (pathname.includes('/certificate')) return 'Certificate';
  if (pathname.includes('/quiz')) return 'Module Quiz';
  if (pathname.includes('/lessons/')) return 'Lesson';
  if (pathname.includes('/courses/')) return 'Course Overview';
  return 'Wentworth Operations Academy';
}

function Topbar({ title }: { title: string }) {
  const { openMobile } = useSidebar();
  return (
    <div style={{
      height: 54,
      background: 'rgba(17,17,17,0.98)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(201,168,76,0.12)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px 0 16px',
      flexShrink: 0,
      gap: 12,
    }}>
      {/* Hamburger — mobile only */}
      <button
        onClick={openMobile}
        aria-label="Open navigation"
        style={{
          display: 'none',  // overridden by media query in <style> below
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#9ca3af', padding: 6, borderRadius: 6, flexShrink: 0,
        }}
        className="mobile-hamburger"
      >
        <Menu size={20} />
      </button>

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
  title?: string;
  noTopbar?: boolean;
  noPadding?: boolean;
}

export function AppLayout({ children, title, noTopbar = false, noPadding = false }: AppLayoutProps) {
  const location = useLocation();
  const pageTitle = title ?? getPageTitle(location.pathname);
  const { mobileOpen, closeMobile, collapsed } = useSidebar();

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .mobile-hamburger { display: flex !important; }
          .desktop-sidebar { display: none !important; }
          .mobile-backdrop { display: block !important; }
        }
        @media (min-width: 768px) {
          .mobile-drawer { display: none !important; }
        }
      `}</style>

      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

        {/* Desktop sidebar — always in flow, collapsible */}
        <div className="desktop-sidebar" style={{ flexShrink: 0, transition: 'width 0.22s ease' }}>
          <Sidebar />
        </div>

        {/* Mobile: backdrop */}
        {mobileOpen && (
          <div
            onClick={closeMobile}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)',
            }}
          />
        )}

        {/* Mobile: slide-in drawer */}
        <div
          className="mobile-drawer"
          style={{
            position: 'fixed', top: 0, left: 0, bottom: 0,
            zIndex: 100,
            transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.24s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <Sidebar onMobileClose={closeMobile} />
        </div>

        {/* Main content */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          height: '100vh', overflow: 'hidden', minWidth: 0,
          // Push content right when desktop sidebar is collapsed
          marginLeft: 0,
          transition: 'margin-left 0.22s ease',
        }}>
          {!noTopbar && <Topbar title={pageTitle} />}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: noPadding ? 0 : '24px 20px 60px',
          }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
