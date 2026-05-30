import type { ReactElement } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Lock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useProgressContext } from '../context/ProgressContext';
import { coursesByTrack } from '../data/courses';
import type { Course, CourseTrack } from '../types/course';

// ── Custom SVG course icons keyed by course id ──
function CourseIcon({ courseId, color, size = 40 }: { courseId: string; color: string; size?: number }) {
  const s = size;
  const icons: Record<string, ReactElement> = {
    'yellow-belt': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="4" y="16" width="32" height="10" rx="5" fill={color} opacity="0.25" />
        <rect x="4" y="16" width="32" height="10" rx="5" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="21" r="6" fill={color} opacity="0.3" />
        <circle cx="20" cy="21" r="6" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="21" r="2.5" fill={color} />
      </svg>
    ),
    'green-belt': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="4" y="16" width="32" height="10" rx="5" fill={color} opacity="0.25" />
        <rect x="4" y="16" width="32" height="10" rx="5" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="21" r="6" fill={color} opacity="0.3" />
        <circle cx="20" cy="21" r="6" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="21" r="2.5" fill={color} />
      </svg>
    ),
    'black-belt': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="4" y="16" width="32" height="10" rx="5" fill={color} opacity="0.25" />
        <rect x="4" y="16" width="32" height="10" rx="5" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="21" r="6" fill={color} opacity="0.4" />
        <circle cx="20" cy="21" r="6" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="21" r="2.5" fill={color} />
      </svg>
    ),
    'lean-manufacturing': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="6" y="22" width="8" height="12" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" />
        <rect x="16" y="16" width="8" height="18" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" />
        <rect x="26" y="10" width="8" height="24" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" />
        <path d="M6 22 L16 16 L26 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'six-sigma-principles': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <path d="M20 8 C12 8 8 14 8 20 C8 26 12 30 18 32 C16 30 15 28 15 26 C15 22 17 20 20 20 C23 20 25 22 25 26 C25 28 24 30 22 32 C28 30 32 26 32 20 C32 14 28 8 20 8Z" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <circle cx="20" cy="20" r="3" fill={color} />
      </svg>
    ),
    'dmaic-methodology': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="13" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <path d="M20 7 A13 13 0 0 1 33 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M33 20 A13 13 0 0 1 20 33" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M20 33 A13 13 0 0 1 7 20" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M7 20 A13 13 0 0 1 20 7" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <circle cx="20" cy="20" r="3" fill={color} />
      </svg>
    ),
    'team-leadership': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="13" r="5" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <circle cx="9" cy="26" r="4" stroke={color} strokeWidth="1.2" fill={color} opacity="0.2" />
        <circle cx="31" cy="26" r="4" stroke={color} strokeWidth="1.2" fill={color} opacity="0.2" />
        <path d="M14 28 C14 24 16 22 20 22 C24 22 26 24 26 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 32 C5 29 6.5 28 9 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <path d="M35 32 C35 29 33.5 28 31 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
    'project-management': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="7" y="8" width="26" height="26" rx="3" stroke={color} strokeWidth="1.5" fill={color} opacity="0.1" />
        <path d="M7 14 L33 14" stroke={color} strokeWidth="1.2" />
        <path d="M13 8 L13 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 8 L27 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 21 L17 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 27 L22 27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M20 21 L28 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    'data-engineering': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="12" rx="12" ry="4" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <path d="M8 12 L8 20 C8 22.2 13.4 24 20 24 C26.6 24 32 22.2 32 20 L32 12" stroke={color} strokeWidth="1.5" />
        <path d="M8 20 L8 28 C8 30.2 13.4 32 20 32 C26.6 32 32 30.2 32 28 L32 20" stroke={color} strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
    'data-analysis': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <polyline points="6,30 14,18 21,24 28,10 34,16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="6" cy="30" r="2" fill={color} />
        <circle cx="14" cy="18" r="2" fill={color} />
        <circle cx="21" cy="24" r="2" fill={color} />
        <circle cx="28" cy="10" r="2" fill={color} />
        <circle cx="34" cy="16" r="2" fill={color} />
      </svg>
    ),
    'crm-erp-systems': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <rect x="22" y="8" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <rect x="14" y="24" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <path d="M12 18 L12 21 L20 21 L20 24" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M28 18 L28 21 L20 21" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    'business-intelligence': (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="13" stroke={color} strokeWidth="1.5" fill={color} opacity="0.1" />
        <path d="M20 20 L20 9" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20 L29 25" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M20 20 L11 25" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="20" cy="20" r="3" fill={color} />
      </svg>
    ),
  };

  return icons[courseId] ?? (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="8" y="8" width="24" height="24" rx="4" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
      <path d="M14 20 L26 20 M14 15 L26 15 M14 25 L20 25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Track tab definitions ──
const TRACKS: { id: 'all' | CourseTrack; label: string; shortLabel: string }[] = [
  { id: 'all', label: 'All Courses', shortLabel: 'All' },
  { id: 'lss-certification', label: 'Six Sigma Certification', shortLabel: 'LSS Cert' },
  { id: 'lean-foundations', label: 'Lean Principles', shortLabel: 'Lean' },
  { id: 'leadership', label: 'Leadership', shortLabel: 'Leadership' },
  { id: 'data-management', label: 'Data Management', shortLabel: 'Data' },
];

const TRACK_META: Record<string, { title: string; description: string }> = {
  'lss-certification': {
    title: 'Lean Six Sigma Certification',
    description: 'A progressive belt curriculum from Yellow through Black Belt — structured for measurable impact.',
  },
  'lean-foundations': {
    title: 'Lean & Six Sigma Foundations',
    description: 'Core methodology courses covering Lean Manufacturing, Six Sigma, and DMAIC in depth.',
  },
  'leadership': {
    title: 'Leadership & Management',
    description: 'Frameworks and tools for leading teams, managing projects, and driving organizational change.',
  },
  'data-management': {
    title: 'Data Management',
    description: 'From data engineering and SQL to CRM/ERP systems and business intelligence — the full data landscape.',
  },
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const { getCourseCompletionPercent, getCourseProgress } = useProgressContext();
  const pct = course.status === 'available' ? getCourseCompletionPercent(course.id, course) : 0;
  const cp = getCourseProgress(course.id);
  const isComingSoon = course.status === 'coming-soon';
  const accentColor = course.color ?? '#c9a84c';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`relative rounded-md border bg-card flex flex-col overflow-hidden transition-all duration-300
        ${isComingSoon
          ? 'border-border-gold opacity-60'
          : 'border-border-gold hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]'
        }`}
    >
      <div className="h-0.5 w-full flex-shrink-0" style={{ background: accentColor }} />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <CourseIcon courseId={course.id} color={accentColor} />
          <div className="flex flex-col items-end gap-1.5">
            {isComingSoon && <Badge variant="muted">Coming Soon</Badge>}
            {cp.certificateUnlocked && <Badge variant="success">Completed</Badge>}
          </div>
        </div>

        <p className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase mb-2" style={{ color: accentColor }}>
          {course.subtitle}
        </p>
        <h3 className="font-serif text-xl text-ink mb-3">{course.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{course.description}</p>

        <div className="flex items-center gap-4 text-xs font-sans text-muted mb-5">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.estimatedHours}h
          </span>
          {!isComingSoon && course.modules.length > 0 && (
            <span>{course.modules.length} modules</span>
          )}
        </div>

        {!isComingSoon && pct > 0 && (
          <div className="mb-5">
            <ProgressBar value={pct} showLabel size="sm" />
          </div>
        )}

        {isComingSoon ? (
          <div className="flex items-center gap-2 text-muted text-sm font-sans py-3 px-4 rounded-sm border border-border-gold bg-white/[0.02]">
            <Lock className="w-4 h-4 flex-shrink-0" />
            <span>Coming soon</span>
          </div>
        ) : (
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center justify-between px-5 py-3 rounded-sm font-sans font-medium text-xs tracking-widest uppercase transition-all duration-300 group text-bg"
            style={{ background: accentColor }}
          >
            {pct === 0 ? 'Start Course' : pct === 100 ? 'Review Course' : 'Continue'}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function CatalogPage() {
  const [activeTrack, setActiveTrack] = useState<'all' | CourseTrack>('all');

  const allCoursesList = Object.values(coursesByTrack).flat();
  const filteredCourses = activeTrack === 'all' ? allCoursesList : (coursesByTrack[activeTrack as CourseTrack] ?? []);

  const totalCourses = allCoursesList.length;
  const totalModules = allCoursesList.reduce((acc, c) => acc + c.modules.length, 0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-12 border-b border-border-gold">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow mb-4">Course Catalog</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5 max-w-2xl">
              Wentworth<br />
              <span className="text-gold">Operations Institute</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Practitioner-focused courses spanning Lean, Six Sigma, DMAIC, leadership, and data management — built for real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-b border-border-gold bg-surface/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-10">
            {[
              { value: String(totalCourses), label: 'Courses' },
              { value: '4', label: 'Learning Tracks' },
              { value: String(totalModules) + '+', label: 'Modules' },
              { value: '6', label: 'Simulations' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-gold">{s.value}</p>
                <p className="text-xs font-sans text-muted tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track navigation tabs */}
      <section className="sticky top-20 z-30 bg-bg/95 backdrop-blur-xl border-b border-border-gold">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
            {TRACKS.map(track => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`relative flex-shrink-0 px-5 py-3 font-sans text-xs font-medium tracking-widest uppercase transition-all duration-200 rounded-sm
                  ${activeTrack === track.id ? 'text-gold' : 'text-muted hover:text-ink'}`}
              >
                {track.label}
                {activeTrack === track.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatePresence mode="wait">
            {activeTrack === 'all' ? (
              // Show all tracks grouped
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Object.entries(coursesByTrack).map(([trackId, courses], ti) => {
                  const meta = TRACK_META[trackId];
                  if (!courses || courses.length === 0) return null;
                  return (
                    <div key={trackId} className={ti > 0 ? 'mt-16 pt-16 border-t border-border-gold' : ''}>
                      <div className="mb-8 flex items-end justify-between">
                        <div>
                          <p className="eyebrow mb-2">{trackId.replace(/-/g, ' ')}</p>
                          <h2 className="font-serif text-2xl text-ink">{meta?.title ?? trackId}</h2>
                          <p className="text-muted text-sm mt-1">{meta?.description}</p>
                        </div>
                        <button
                          onClick={() => setActiveTrack(trackId as CourseTrack)}
                          className="text-xs font-sans text-muted hover:text-gold transition-colors tracking-widest uppercase hidden md:block"
                        >
                          View all →
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course, i) => (
                          <CourseCard key={course.id} course={course} index={i} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              // Show filtered track
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {TRACK_META[activeTrack] && (
                  <div className="mb-10">
                    <h2 className="font-serif text-2xl text-ink mb-1">{TRACK_META[activeTrack].title}</h2>
                    <p className="text-muted text-sm">{TRACK_META[activeTrack].description}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, i) => (
                    <CourseCard key={course.id} course={course} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer callout */}
      <section className="py-16 border-t border-border-gold bg-surface/30">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">
            Wentworth Operations Institute
          </div>
          <h2 className="font-serif text-3xl text-ink mb-4">Practical. Rigorous. Results-Driven.</h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Every module is designed for practitioners. Real frameworks, worked examples, and simulations built on the problems you will actually encounter.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
