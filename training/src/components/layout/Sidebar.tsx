import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useProgressContext } from '../../context/ProgressContext';
import { useMemo } from 'react';
import { LayoutDashboard, BookOpen, Shield, User, Award, Lightbulb, Users, Database, FlaskConical } from 'lucide-react';
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

function WGALogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <g transform="translate(0, 4)">
          <polygon points="0,0 10,0 21,34 32,6 38,6 27,40 15,40 0,0" fill="#c9a84c"/>
          <polygon points="17,0 27,0 43,40 38,40 27,11 17,0" fill="#e2c47a" opacity="0.6"/>
        </g>
      </svg>
      <div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '13px', fontWeight: 400, letterSpacing: '2px', color: '#ffffff' }}>WENTWORTH</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '7px', fontWeight: 400, letterSpacing: '3px', color: '#c9a84c', textTransform: 'uppercase' }}>OPERATIONS ACADEMY</div>
      </div>
    </div>
  );
}

function UserAvatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: 34, height: 34, borderRadius: '50%',
      backgroundColor: color + '22', border: `1.5px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12, fontWeight: 600, color, flexShrink: 0,
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
}

function NavItem({ to, icon, label, exact }: NavItemProps) {
  const location = useLocation();
  const active = exact
    ? location.pathname === to
    : location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <Link
      to={to}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '9px 18px', fontSize: 13, fontWeight: 500,
        fontFamily: 'DM Sans, sans-serif',
        color: active ? '#c9a84c' : '#9ca3af',
        background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
        borderLeft: `2px solid ${active ? '#c9a84c' : 'transparent'}`,
        transition: 'all 0.15s', textDecoration: 'none',
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
      <span style={{ opacity: active ? 1 : 0.7 }}>{icon}</span>
      {label}
    </Link>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{
      fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#6b7280', padding: '14px 18px 6px', fontFamily: 'DM Sans, sans-serif',
    }}>
      {label}
    </div>
  );
}

export function Sidebar() {
  const { user } = useAuth();
  const { store } = useProgressContext();
  const xp = useMemo(() => computeXP(store), [store]);
  const level = Math.floor(xp / 500) + 1;

  return (
    <aside style={{
      width: 220, minWidth: 220, height: '100vh',
      background: '#111111', borderRight: '1px solid rgba(201,168,76,0.15)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0, zIndex: 50,
    }}>
      <div style={{ padding: '20px 18px 16px', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <WGALogo />
        </Link>
      </div>

      <nav style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
        <SectionLabel label="Main" />
        <NavItem to="/dashboard" icon={<LayoutDashboard size={15} />} label="Dashboard" exact />
        <NavItem to="/courses" icon={<BookOpen size={15} />} label="All Courses" exact />

        <SectionLabel label="Programs" />
        <NavItem to="/programs/six-sigma" icon={<Award size={15} />} label="Six Sigma Cert" exact />
        <NavItem to="/programs/lean-foundations" icon={<Lightbulb size={15} />} label="Lean Six Sigma" exact />
        <NavItem to="/programs/leadership" icon={<Users size={15} />} label="Leadership & Mgmt" exact />
        <NavItem to="/programs/data-management" icon={<Database size={15} />} label="Data Management" exact />
        <NavItem to="/defense" icon={<Shield size={15} />} label="Defense Contracting" exact />

        <SectionLabel label="Simulations" />
        <NavItem to="/simulations/factory-flow" icon={<FlaskConical size={15} />} label="Factory Flow" exact />

        <SectionLabel label="Account" />
        <NavItem to="/profile" icon={<User size={15} />} label="Profile" exact />
      </nav>

      {user ? (
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
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
        </div>
      ) : (
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', padding: '14px 16px' }}>
          <Link to="/login" style={{
            display: 'block', textAlign: 'center', fontSize: 12, fontWeight: 600,
            fontFamily: 'DM Sans, sans-serif', color: '#c9a84c',
            background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 6, padding: '8px 12px', textDecoration: 'none',
          }}>
            Sign In
          </Link>
        </div>
      )}
    </aside>
  );
}
