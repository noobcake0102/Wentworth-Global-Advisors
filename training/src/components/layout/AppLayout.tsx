import { type ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { useSidebar } from '../../context/SidebarContext';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

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

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  noTopbar?: boolean;
  noPadding?: boolean;
}

export function AppLayout({ children, title, noTopbar = false, noPadding = false }: AppLayoutProps) {
  const location = useLocation();
  const pageTitle = title ?? getPageTitle(location.pathname);
  const { mobileOpen, openMobile, closeMobile } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Desktop sidebar — only rendered when not mobile */}
      {!isMobile && <Sidebar />}

      {/* Mobile: backdrop overlay */}
      {isMobile && mobileOpen && (
        <div
          onClick={closeMobile}
          style={{
            position: 'fixed', inset: 0, zIndex: 90,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)',
          }}
        />
      )}

      {/* Mobile: slide-in drawer */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, left: 0, bottom: 0,
          zIndex: 100,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.26s cubic-bezier(0.22,1,0.36,1)',
        }}>
          <Sidebar onMobileClose={closeMobile} />
        </div>
      )}

      {/* Main content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        height: '100vh', overflow: 'hidden', minWidth: 0,
      }}>
        {/* Topbar */}
        {!noTopbar && (
          <div style={{
            height: 54, flexShrink: 0,
            background: 'rgba(17,17,17,0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            display: 'flex', alignItems: 'center',
            padding: '0 16px', gap: 12,
          }}>
            {/* Hamburger — mobile only */}
            {isMobile && (
              <button
                onClick={openMobile}
                aria-label="Open navigation"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#9ca3af', padding: 6, borderRadius: 6, flexShrink: 0,
                  display: 'flex', alignItems: 'center',
                }}
              >
                <Menu size={20} />
              </button>
            )}
            <span style={{
              fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 400,
              letterSpacing: '1.5px', textTransform: 'uppercase', color: '#f9fafb',
            }}>
              {pageTitle}
            </span>
          </div>
        )}

        {/* Page content */}
        <div style={{
          flex: 1, overflowY: 'auto',
          padding: noPadding ? 0 : '24px 16px 60px',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
