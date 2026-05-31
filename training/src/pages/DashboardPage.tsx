import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { useAuth } from '../context/AuthContext';
import { useProgressContext } from '../context/ProgressContext';
import { allCourses } from '../data/courses';
import type { Course } from '../types/course';

// ── Circular progress ring ──────────────────────────────────────────
function ProgressRing({ percent, color, size = 64, stroke = 5 }: {
  percent: number; color: string; size?: number; stroke?: number;
}) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.min(percent, 100) / 100);
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
    </svg>
  );
}

// ── User avatar ─────────────────────────────────────────────────────
function Avatar({ name, color, size = 40 }: { name: string; color: string; size?: number }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div className="rounded-full flex items-center justify-center flex-shrink-0 font-sans font-medium"
      style={{ width: size, height: size, background: `${color}20`, border: `1.5px solid ${color}50`, color, fontSize: size * 0.36 }}>
      {initials}
    </div>
  );
}

// ── XP helpers ───────────────────────────────────────────────────────
const XP_PER_LESSON = 10;
const XP_PER_QUIZ = 25;
const XP_PER_CERT = 100;

function computeXP(store: ReturnType<typeof useProgressContext>['store']) {
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

function computeStreak(store: ReturnType<typeof useProgressContext>['store']): number {
  const dates = new Set<string>();
  for (const cp of Object.values(store.courses)) {
    for (const mp of Object.values(cp.modules)) {
      for (const l of Object.values(mp.lessons)) {
        if (l.completedAt) dates.add(l.completedAt.slice(0, 10));
      }
    }
  }
  if (dates.size === 0) return 0;
  const sorted = [...dates].sort().reverse();
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diff = (prev.getTime() - curr.getTime()) / 86400000;
    if (Math.round(diff) === 1) streak++;
    else break;
  }
  return streak;
}

function getRecentActivity(store: ReturnType<typeof useProgressContext>['store'], courses: Course[]) {
  const items: { courseTitle: string; lessonTitle: string; completedAt: string; type: 'lesson' | 'quiz' | 'cert' }[] = [];
  for (const course of courses) {
    const cp = store.courses[course.id];
    if (!cp) continue;
    if (cp.completedAt) items.push({ courseTitle: course.title, lessonTitle: 'Certificate earned', completedAt: cp.completedAt, type: 'cert' });
    for (const mod of course.modules) {
      const mp = cp.modules[mod.id];
      if (!mp) continue;
      if (mp.quizCompletedAt) items.push({ courseTitle: course.title, lessonTitle: `${mod.title} — Quiz`, completedAt: mp.quizCompletedAt, type: 'quiz' });
      for (const lesson of mod.lessons) {
        const lp = mp.lessons[lesson.id];
        if (lp?.completedAt) items.push({ courseTitle: course.title, lessonTitle: lesson.title, completedAt: lp.completedAt, type: 'lesson' });
      }
    }
  }
  return items.sort((a, b) => b.completedAt.localeCompare(a.completedAt)).slice(0, 8);
}

function getNextLesson(store: ReturnType<typeof useProgressContext>['store'], courses: Course[]) {
  for (const course of courses) {
    const cp = store.courses[course.id];
    if (!cp || cp.certificateUnlocked) continue;
    for (const mod of course.modules) {
      const mp = cp.modules[mod.id];
      for (const lesson of mod.lessons) {
        if (!mp?.lessons[lesson.id]?.completed) {
          return { course, mod, lesson };
        }
      }
    }
  }
  return null;
}

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

// ── New courses (not started) ────────────────────────────────────────
function NewCourseCard({ course }: { course: Course }) {
  return (
    <Link to={`/courses/${course.id}`}
      className="group bg-card border border-border-gold rounded-lg p-5 hover:border-gold/40 transition-all duration-200 flex gap-4 items-start">
      <div className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center"
        style={{ background: `${course.color}15`, border: `1px solid ${course.color}40` }}>
        <span style={{ color: course.color, fontSize: 18 }}>✦</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs font-sans font-medium tracking-widest uppercase mb-1" style={{ color: course.color }}>
          {course.track.replace(/-/g, ' ')}
        </p>
        <h3 className="font-serif text-base text-ink group-hover:text-gold transition-colors leading-snug">{course.title}</h3>
        <p className="text-muted text-xs mt-1">{course.estimatedHours}h · {course.modules.length} modules</p>
      </div>
      <span className="text-muted/40 group-hover:text-gold transition-colors ml-auto flex-shrink-0 mt-1">→</span>
    </Link>
  );
}

// ── In-progress course card ──────────────────────────────────────────
function CourseProgressCard({ course, percent }: { course: Course; percent: number }) {
  return (
    <Link to={`/courses/${course.id}`}
      className="group bg-card border border-border-gold rounded-lg p-5 hover:border-gold/40 transition-all duration-200 flex gap-4 items-center">
      <div className="relative flex-shrink-0">
        <ProgressRing percent={percent} color={course.color} size={56} stroke={4} />
        <span className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium"
          style={{ color: course.color }}>{percent}%</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-sans font-medium tracking-widest uppercase mb-0.5" style={{ color: course.color }}>
          {course.track.replace(/-/g, ' ')}
        </p>
        <h3 className="font-serif text-base text-ink group-hover:text-gold transition-colors">{course.title}</h3>
        <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${percent}%`, background: course.color }} />
        </div>
      </div>
      <span className="text-muted/40 group-hover:text-gold transition-colors flex-shrink-0">→</span>
    </Link>
  );
}

// ── Cert card ────────────────────────────────────────────────────────
function CertCard({ course }: { course: Course }) {
  return (
    <Link to={`/courses/${course.id}/certificate`}
      className="group bg-card border border-border-gold rounded-lg p-4 hover:border-gold/40 transition-all duration-200 text-center">
      <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
        style={{ background: `${course.color}15`, border: `1.5px solid ${course.color}50` }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
            stroke={course.color} strokeWidth="1.2" fill={`${course.color}20`} />
        </svg>
      </div>
      <p className="font-serif text-sm text-ink">{course.title}</p>
      <p className="text-xs text-muted mt-1">Certificate</p>
    </Link>
  );
}

export function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { store, getCourseCompletionPercent } = useProgressContext();

  if (!user) {
    return (
      <PageLayout>
        <div className="max-w-lg mx-auto px-8 pt-24 text-center">
          <h1 className="font-serif text-3xl text-ink mb-4">Your Dashboard</h1>
          <p className="text-muted mb-8">Sign in to track your progress, earn certificates, and build your learning streak.</p>
          <Link to="/login" className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-8 py-3 rounded hover:bg-gold/20 transition-all">
            Sign In →
          </Link>
        </div>
      </PageLayout>
    );
  }

  const firstName = user.name.split(' ')[0];
  const xp = useMemo(() => computeXP(store), [store]);
  const streak = useMemo(() => computeStreak(store), [store]);
  const recentActivity = useMemo(() => getRecentActivity(store, allCourses), [store]);
  const nextLesson = useMemo(() => getNextLesson(store, allCourses), [store]);

  const inProgress = allCourses.filter(c => {
    const cp = store.courses[c.id];
    if (!cp || cp.certificateUnlocked) return false;
    return Object.values(cp.modules).some(m =>
      Object.values(m.lessons).some(l => l.completed) || m.quizPassed
    );
  });

  const completed = allCourses.filter(c => store.courses[c.id]?.certificateUnlocked);

  const notStarted = allCourses.filter(c => {
    const cp = store.courses[c.id];
    if (!cp) return true;
    return !Object.values(cp.modules).some(m =>
      Object.values(m.lessons).some(l => l.completed) || m.quizPassed
    ) && !cp.certificateUnlocked;
  });

  const xpLevel = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const xpToNext = 500;

  const activityIcons: Record<string, string> = { lesson: '📖', quiz: '✅', cert: '🏆' };

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ── Hero ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <Avatar name={user.name} color={user.avatarColor} size={56} />
            <div>
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-1">Welcome back</p>
              <h1 className="font-serif text-3xl text-ink">{firstName}</h1>
              {user.title && <p className="text-sm text-muted mt-0.5">{user.title}{user.organization ? ` · ${user.organization}` : ''}</p>}
            </div>
          </div>
          <button onClick={() => navigate('/profile')}
            className="text-xs font-sans font-medium tracking-widest uppercase text-muted hover:text-gold transition-colors border border-border-gold px-4 py-2 rounded">
            Edit Profile
          </button>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total XP', value: xp.toLocaleString(), sub: `Level ${xpLevel}` },
            { label: 'Day Streak', value: streak === 0 ? '—' : `${streak}`, sub: streak === 0 ? 'Start today' : streak === 1 ? '1 day' : `${streak} days` },
            { label: 'Completed', value: completed.length, sub: 'courses' },
            { label: 'In Progress', value: inProgress.length, sub: 'courses' },
          ].map(s => (
            <div key={s.label} className="bg-card border border-border-gold rounded-lg px-5 py-4">
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-1">{s.label}</p>
              <p className="font-serif text-2xl text-ink">{s.value}</p>
              <p className="text-xs text-muted/60 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── XP bar ── */}
        <div className="bg-card border border-border-gold rounded-lg px-6 py-4 mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold">Level {xpLevel}</span>
            <span className="text-xs text-muted">{xpInLevel} / {xpToNext} XP to Level {xpLevel + 1}</span>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full rounded-full bg-gold/60 transition-all duration-700"
              style={{ width: `${(xpInLevel / xpToNext) * 100}%` }} />
          </div>
          <p className="text-xs text-muted/60 mt-2">
            +{XP_PER_LESSON} XP per lesson · +{XP_PER_QUIZ} XP per quiz · +{XP_PER_CERT} XP per certificate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Continue Learning */}
            {nextLesson && (
              <section>
                <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">Continue Learning</h2>
                <Link to={`/courses/${nextLesson.course.id}/modules/${nextLesson.mod.id}/lessons/${nextLesson.lesson.id}`}
                  className="group block bg-card border border-gold/30 rounded-lg p-6 hover:border-gold/60 transition-all duration-200">
                  <p className="text-xs font-sans font-medium tracking-widest uppercase mb-2" style={{ color: nextLesson.course.color }}>
                    {nextLesson.course.title} · {nextLesson.mod.title}
                  </p>
                  <h3 className="font-serif text-xl text-ink group-hover:text-gold transition-colors mb-1">{nextLesson.lesson.title}</h3>
                  <p className="text-muted text-sm">{nextLesson.lesson.estimatedMinutes} min</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold font-sans text-xs font-medium tracking-widest uppercase px-5 py-2 rounded group-hover:bg-gold/20 transition-all">
                    Resume Lesson →
                  </div>
                </Link>
              </section>
            )}

            {/* In Progress */}
            {inProgress.length > 0 && (
              <section>
                <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">In Progress</h2>
                <div className="space-y-3">
                  {inProgress.map(c => (
                    <CourseProgressCard key={c.id} course={c} percent={getCourseCompletionPercent(c.id, c)} />
                  ))}
                </div>
              </section>
            )}

            {/* New Courses */}
            {notStarted.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-gold">New Courses</h2>
                  <Link to="/courses" className="text-xs text-muted hover:text-gold transition-colors">Browse all →</Link>
                </div>
                <div className="space-y-3">
                  {notStarted.slice(0, 4).map(c => <NewCourseCard key={c.id} course={c} />)}
                </div>
                {notStarted.length > 4 && (
                  <Link to="/courses" className="block text-center text-xs text-muted hover:text-gold transition-colors mt-4">
                    +{notStarted.length - 4} more courses →
                  </Link>
                )}
              </section>
            )}

            {/* Certificates */}
            {completed.length > 0 && (
              <section>
                <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">Certificates Earned</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {completed.map(c => <CertCard key={c.id} course={c} />)}
                </div>
              </section>
            )}

            {/* Empty state */}
            {inProgress.length === 0 && completed.length === 0 && (
              <section>
                <div className="bg-card border border-border-gold rounded-lg p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
                        stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.1)" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-ink mb-2">Start your first course</h3>
                  <p className="text-muted text-sm mb-6">Choose from {allCourses.length} courses across LSS, Lean, Leadership, and Data.</p>
                  <Link to="/courses" className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all">
                    Browse Courses →
                  </Link>
                </div>
              </section>
            )}
          </div>

          {/* ── Right column: Activity ── */}
          <div className="space-y-6">
            <section>
              <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">Recent Activity</h2>
              {recentActivity.length === 0 ? (
                <div className="bg-card border border-border-gold rounded-lg p-6 text-center">
                  <p className="text-muted text-sm">No activity yet. Complete a lesson to start your streak.</p>
                </div>
              ) : (
                <div className="bg-card border border-border-gold rounded-lg divide-y divide-border-gold overflow-hidden">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="px-4 py-3 flex gap-3 items-start">
                      <span className="text-base flex-shrink-0 mt-0.5">{activityIcons[item.type]}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted/60">{item.courseTitle}</p>
                        <p className="text-sm text-ink leading-snug truncate">{item.lessonTitle}</p>
                      </div>
                      <span className="text-xs text-muted/50 flex-shrink-0">{relativeTime(item.completedAt)}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
