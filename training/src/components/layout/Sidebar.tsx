import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useProgressContext } from '../../context/ProgressContext';
import { useSidebar } from '../../context/SidebarContext';
import { useMemo } from 'react';
import {
  LayoutDashboard, BookOpen, Shield, User, Award, Lightbulb,
  Users, Database, FlaskConical, Route, ChevronLeft, ChevronRight, X,
} from 'lucide-react';
import type { ProgressStore } from '../../types/progress';

const XP_PER_LESSON = 10;
const XP_PER_QUIZ = 25;
const XP_PER_CERT = 100;

function computeXP(store: ProgressStore): number {
  let xp = 0;
  for (const cp of Object.values(store.courses)) {
    for (const mp of Object.values(cp.modules)) {
      xp += Object.values(mp.lessons).filter(l => l.completed).length * XP_PER_LESSON;
      if (mp.quizPassed) xp += XP_PER_QUIZ;
    }
    if (cp.certificateUnlocked) xp += XP_PER_CERT;
  }
  return xp;
}

function WGALogo({ collapsed }: { collapsed: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, overflow: 'hidden' }}>
      <svg width="34" height="34" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <g transform="translate(0, 4)">
          <polygon points="0,0 10,0 21,34 32,6 38,6 27,40 15,40 0,0" fill="#c9a84c"/>
          <polygon points="17,0 27,0 43,40 38,40 27,11 17,0" fill="#e2c47a" opacity="0.6"/>
        </g>
      </svg>
      {!collapsed && (
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '12px', letterSpacing: '2px', color: '#fff' }}>WENTWORTH</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '6.5px', letterSpacing: '3px', color: '#c9a84c', textTransform: 'uppercase' }}>OPERATIONS ACADEMY</div>
        </div>
      )}
    </div>
  );
}

function UserAvatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: 32, height: 32, borderRadius: '50%',
      backgroundColor: color + '22', border: `1.5px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, fontWeight: 600, color, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  exact?: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
}

function NavItem({ to, icon, label, exact, collapsed, onNavigate }: NavItemProps) {
  const location = useLocation();
  const active = exact
    ? location.pathname === to
    : location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <Link
      to={to}
      title={collapsed ? label : undefined}
      onClick={onNavigate}
      style={{
        display: 'flex', alignItems: 'center',
        gap: collapsed ? 0 : 10,
        justifyContent: collapsed ? 'center' : 'flex-start',
        padding: collapsed ? '10px 0' : '9px 18px',
        fontSize: 13, fontWeight: 500,
        fontFamily: 'DM Sans, sans-serif',
        color: active ? '#c9a84c' : '#9ca3af',
        background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
        borderLeft: collapsed ? 'none' : `2px solid ${active ? '#c9a84c' : 'transparent'}`,
        borderRight: collapsed ? `2px solid ${active ? '#c9a84c' : 'transparent'}` : 'none',
        transition: 'all 0.15s', textDecoration: 'none',
        position: 'relative',
      }}
      onMouseEnter={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.color = '#d1d5db';
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.color = '#9ca3af';
          (e.currentTarget as HTMLElement).style.background = 'transparent';
        }
      }}
    >
      <span style={{ opacity: active ? 1 : 0.7, flexShrink: 0 }}>{icon}</span>
      {!collapsed && label}
    </Link>
  );
}

function SectionLabel({ label, collapsed }: { label: string; collapsed: boolean }) {
  if (collapsed) {
    return <div style={{ height: 1, background: 'rgba(201,168,76,0.1)', margin: '8px 10px' }} />;
  }
  return (
    <div style={{
      fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#6b7280', padding: '14px 18px 6px', fontFamily: 'DM Sans, sans-serif',
    }}>
      {label}
    </div>
  );
}

interface SidebarProps {
  onMobileClose?: () => void;
}

export function Sidebar({ onMobileClose }: SidebarProps) {
  const { user } = useAuth();
  const { store } = useProgressContext();
  const { collapsed, toggleCollapsed } = useSidebar();
  const xp = useMemo(() => computeXP(store), [store]);
  const level = Math.floor(xp / 500) + 1;

  // On mobile (drawer), never use collapsed rail — always full width
  const isMobileDrawer = !!onMobileClose;
  const isCollapsed = isMobileDrawer ? false : collapsed;
  const width = isCollapsed ? 56 : 220;

  const nav = onMobileClose;  // alias for clarity

  return (
    <aside style={{
      width, minWidth: width, height: '100vh',
      background: '#111111', borderRight: '1px solid rgba(201,168,76,0.15)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0,
      transition: 'width 0.22s ease, min-width 0.22s ease',
    }}>
      {/* Header: logo + close (mobile) or collapse toggle (desktop) */}
      <div style={{
        padding: isCollapsed ? '18px 0' : '16px 14px 14px',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        display: 'flex', alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'space-between',
        gap: 8,
      }}>
        <Link to="/" style={{ textDecoration: 'none', overflow: 'hidden' }} onClick={nav}>
          <WGALogo collapsed={isCollapsed} />
        </Link>

        {/* Mobile: close button */}
        {isMobileDrawer && (
          <button onClick={onMobileClose} aria-label="Close navigation" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#6b7280', padding: 4, borderRadius: 4, flexShrink: 0,
          }}>
            <X size={18} />
          </button>
        )}

        {/* Desktop: collapse toggle */}
        {!isMobileDrawer && (
          <button onClick={toggleCollapsed} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#6b7280', padding: 4, borderRadius: 4, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 0' }}>
        <SectionLabel label="Main" collapsed={isCollapsed} />
        <NavItem to="/dashboard"  icon={<LayoutDashboard size={15} />} label="Dashboard"        exact collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/paths"      icon={<Route size={15} />}           label="Learning Paths"         collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/courses"    icon={<BookOpen size={15} />}        label="All Courses"      exact collapsed={isCollapsed} onNavigate={nav} />

        <SectionLabel label="Programs" collapsed={isCollapsed} />
        <NavItem to="/programs/six-sigma"      icon={<Award size={15} />}     label="Six Sigma Cert"    exact collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/programs/lean-foundations" icon={<Lightbulb size={15} />} label="Lean Six Sigma"  exact collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/programs/leadership"     icon={<Users size={15} />}     label="Leadership & Mgmt" exact collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/programs/data-management" icon={<Database size={15} />} label="Data Management"   exact collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/defense"                 icon={<Shield size={15} />}    label="Defense Contracting" exact collapsed={isCollapsed} onNavigate={nav} />
        <NavItem to="/programs/accounting"     icon={<BookOpen size={15} />}  label="Accounting"         exact collapsed={isCollapsed} onNavigate={nav} />

        <SectionLabel label="Simulations" collapsed={isCollapsed} />
        <NavItem to="/simulations/factory-optimizer" icon={<FlaskConical size={15} />} label="Factory Optimizer" exact collapsed={isCollapsed} onNavigate={nav} />

        <SectionLabel label="Account" collapsed={isCollapsed} />
        <NavItem to="/profile" icon={<User size={15} />} label="Profile" exact collapsed={isCollapsed} onNavigate={nav} />
      </nav>

      {/* User footer */}
      {user ? (
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', padding: isCollapsed ? '12px 0' : '12px 14px' }}>
          {isCollapsed ? (
            /* Collapsed: just the avatar centered */
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <UserAvatar name={user.name} color={user.avatarColor} />
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
                <UserAvatar name={user.name} color={user.avatarColor} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#f9fafb', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user.title ?? 'Learner'}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 10, color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  ⚡ {xp.toLocaleString()} XP
                </span>
                <span style={{ fontSize: 9, fontFamily: 'DM Sans, sans-serif', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 99, padding: '1px 6px', color: '#c9a84c' }}>
                  Lv {level}
                </span>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${((xp % 500) / 500) * 100}%`, background: '#c9a84c', borderRadius: 99, transition: 'width 0.4s' }} />
              </div>
            </>
          )}
        </div>
      ) : (
        !isCollapsed && (
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', padding: '12px 14px' }}>
            <Link to="/login" onClick={nav} style={{
              display: 'block', textAlign: 'center', fontSize: 12, fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif', color: '#c9a84c',
              background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 6, padding: '8px 12px', textDecoration: 'none',
            }}>
              Sign In
            </Link>
          </div>
        )
      )}
    </aside>
  );
}
