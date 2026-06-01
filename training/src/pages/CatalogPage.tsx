import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, ChevronRight, Lock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useProgressContext } from '../context/ProgressContext';
import { allCourses } from '../data/courses';
import type { Course } from '../types/course';

function CourseIcon({ courseId, color, size = 40 }: { courseId: string; color: string; size?: number }) {
  const s = size;
  const icons: Record<string, ReactElement> = {
    'yellow-belt': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><rect x="4" y="16" width="32" height="10" rx="5" fill={color} opacity="0.25" /><rect x="4" y="16" width="32" height="10" rx="5" stroke={color} strokeWidth="1.5" /><circle cx="20" cy="21" r="6" fill={color} opacity="0.3" /><circle cx="20" cy="21" r="6" stroke={color} strokeWidth="1.5" /><circle cx="20" cy="21" r="2.5" fill={color} /></svg>),
    'green-belt': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><rect x="4" y="16" width="32" height="10" rx="5" fill={color} opacity="0.25" /><rect x="4" y="16" width="32" height="10" rx="5" stroke={color} strokeWidth="1.5" /><circle cx="20" cy="21" r="6" fill={color} opacity="0.3" /><circle cx="20" cy="21" r="6" stroke={color} strokeWidth="1.5" /><circle cx="20" cy="21" r="2.5" fill={color} /></svg>),
    'black-belt': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><rect x="4" y="16" width="32" height="10" rx="5" fill={color} opacity="0.25" /><rect x="4" y="16" width="32" height="10" rx="5" stroke={color} strokeWidth="1.5" /><circle cx="20" cy="21" r="6" fill={color} opacity="0.4" /><circle cx="20" cy="21" r="6" stroke={color} strokeWidth="1.5" /><circle cx="20" cy="21" r="2.5" fill={color} /></svg>),
    'lean-manufacturing': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><rect x="6" y="22" width="8" height="12" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" /><rect x="16" y="16" width="8" height="18" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" /><rect x="26" y="10" width="8" height="24" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" /><path d="M6 22 L16 16 L26 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></svg>),
    'six-sigma-principles': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><path d="M20 8 C12 8 8 14 8 20 C8 26 12 30 18 32 C16 30 15 28 15 26 C15 22 17 20 20 20 C23 20 25 22 25 26 C25 28 24 30 22 32 C28 30 32 26 32 20 C32 14 28 8 20 8Z" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" /><circle cx="20" cy="20" r="3" fill={color} /></svg>),
    'dmaic-methodology': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke={color} strokeWidth="1.5" opacity="0.3" /><path d="M20 7 A13 13 0 0 1 33 20" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M33 20 A13 13 0 0 1 20 33" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" /><path d="M20 33 A13 13 0 0 1 7 20" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" /><path d="M7 20 A13 13 0 0 1 20 7" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" /><circle cx="20" cy="20" r="3" fill={color} /></svg>),
    'team-leadership': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><circle cx="20" cy="13" r="5" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" /><circle cx="9" cy="26" r="4" stroke={color} strokeWidth="1.2" fill={color} opacity="0.2" /><circle cx="31" cy="26" r="4" stroke={color} strokeWidth="1.2" fill={color} opacity="0.2" /><path d="M14 28 C14 24 16 22 20 22 C24 22 26 24 26 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M5 32 C5 29 6.5 28 9 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" /><path d="M35 32 C35 29 33.5 28 31 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" /></svg>),
    'project-management': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><rect x="7" y="8" width="26" height="26" rx="3" stroke={color} strokeWidth="1.5" fill={color} opacity="0.1" /><path d="M7 14 L33 14" stroke={color} strokeWidth="1.2" /><path d="M13 8 L13 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M27 8 L27 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M12 21 L17 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M12 27 L22 27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" /><path d="M20 21 L28 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /></svg>),
    'data-engineering': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="12" rx="12" ry="4" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" /><path d="M8 12 L8 20 C8 22.2 13.4 24 20 24 C26.6 24 32 22.2 32 20 L32 12" stroke={color} strokeWidth="1.5" /><path d="M8 20 L8 28 C8 30.2 13.4 32 20 32 C26.6 32 32 30.2 32 28 L32 20" stroke={color} strokeWidth="1.5" opacity="0.6" /></svg>),
    'data-analysis': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><polyline points="6,30 14,18 21,24 28,10 34,16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /><circle cx="6" cy="30" r="2" fill={color} /><circle cx="14" cy="18" r="2" fill={color} /><circle cx="21" cy="24" r="2" fill={color} /><circle cx="28" cy="10" r="2" fill={color} /><circle cx="34" cy="16" r="2" fill={color} /></svg>),
    'crm-erp-systems': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><rect x="6" y="8" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" /><rect x="22" y="8" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" /><rect x="14" y="24" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" /><path d="M12 18 L12 21 L20 21 L20 24" stroke={color} strokeWidth="1.2" strokeLinecap="round" /><path d="M28 18 L28 21 L20 21" stroke={color} strokeWidth="1.2" strokeLinecap="round" /></svg>),
    'business-intelligence': (<svg width={s} height={s} viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke={color} strokeWidth="1.5" fill={color} opacity="0.1" /><path d="M20 20 L20 9" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M20 20 L29 25" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" /><path d="M20 20 L11 25" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" /><circle cx="20" cy="20" r="3" fill={color} /></svg>),
  };
  return icons[courseId] ?? (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="8" y="8" width="24" height="24" rx="4" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
      <path d="M14 20 L26 20 M14 15 L26 15 M14 25 L20 25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface LearningPath {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  color: string;
  courseIds: string[];
}

const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'lss-cert',
    label: 'Six Sigma Certification',
    eyebrow: 'Belt Curriculum',
    description: 'A progressive credential path from Yellow through Black Belt. Each level builds on the last — structured for practitioners who need measurable, verifiable skills.',
    color: '#c9a84c',
    courseIds: ['yellow-belt', 'green-belt', 'black-belt'],
  },
  {
    id: 'lean-foundations',
    label: 'Foundations of Lean Six Sigma',
    eyebrow: 'Core Methodology',
    description: 'The foundational methodology stack: Lean Manufacturing, Six Sigma Principles, and DMAIC. Essential for anyone running or improving production and service operations.',
    color: '#7ca4c4',
    courseIds: ['lean-manufacturing', 'six-sigma-principles', 'dmaic-methodology', 'yellow-belt', 'green-belt'],
  },
  {
    id: 'leadership',
    label: 'Leadership & Management',
    eyebrow: 'People & Execution',
    description: 'Frameworks for leading teams, managing complex projects, and driving change. Pairs with any technical track to complete the practitioner picture.',
    color: '#9b8ec4',
    courseIds: ['team-leadership', 'project-management', 'black-belt'],
  },
  {
    id: 'data',
    label: 'Data Management',
    eyebrow: 'Data & Systems',
    description: 'From raw data pipelines and SQL to CRM/ERP integration and business intelligence dashboards — the full data landscape for operations leaders.',
    color: '#4caf82',
    courseIds: ['data-engineering', 'data-analysis', 'crm-erp-systems', 'business-intelligence'],
  },
  {
    id: 'defense-exec',
    label: 'Defense Contracting — Executive Track',
    eyebrow: 'Defense Series · Track A',
    description: 'For owners, CEOs, and board members evaluating or scaling a defense portfolio. Covers strategic positioning, DCAA compliance, and executive-level program oversight.',
    color: '#c4a24c',
    courseIds: ['defense-exec-awareness', 'defense-exec-practical', 'defense-exec-deep'],
  },
  {
    id: 'defense-ops',
    label: 'Defense Contracting — Operations Track',
    eyebrow: 'Defense Series · Track B',
    description: 'Built for program managers and engineering leads. CDRL management, EVMS, DCAA audit readiness, and program execution from award through delivery.',
    color: '#c4774c',
    courseIds: ['defense-ops-awareness', 'defense-ops-practical', 'defense-ops-deep'],
  },
  {
    id: 'defense-bd',
    label: 'Defense Contracting — Business Development Track',
    eyebrow: 'Defense Series · Track C',
    description: 'For BD leads, capture managers, and sales teams. Pipeline development, proposal writing, LPTA vs. best-value strategy, and the capture lifecycle end to end.',
    color: '#4c8ec4',
    courseIds: ['defense-bd-awareness', 'defense-bd-practical', 'defense-bd-deep'],
  },
];

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
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className={`relative rounded-md border bg-card flex flex-col overflow-hidden transition-all duration-300
        ${isComingSoon ? 'border-border-gold opacity-60' : 'border-border-gold hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]'}`}
    >
      <div className="h-0.5 w-full flex-shrink-0" style={{ background: accentColor }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <CourseIcon courseId={course.id} color={accentColor} />
          <div className="flex flex-col items-end gap-1.5">
            {isComingSoon && <Badge variant="muted">Coming Soon</Badge>}
            {cp.certificateUnlocked && <Badge variant="success">Completed</Badge>}
          </div>
        </div>
        <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase mb-1.5" style={{ color: accentColor }}>{course.subtitle}</p>
        <h3 className="font-serif text-lg text-ink mb-2">{course.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{course.description}</p>
        <div className="flex items-center gap-4 text-xs font-sans text-muted mb-4">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{course.estimatedHours}h</span>
          {!isComingSoon && course.modules.length > 0 && <span>{course.modules.length} modules</span>}
        </div>
        {!isComingSoon && pct > 0 && <div className="mb-4"><ProgressBar value={pct} showLabel size="sm" /></div>}
        {isComingSoon ? (
          <div className="flex items-center gap-2 text-muted text-sm font-sans py-3 px-4 rounded-sm border border-border-gold bg-white/[0.02]">
            <Lock className="w-4 h-4 flex-shrink-0" /><span>Coming soon</span>
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
  const courseMap = new Map(allCourses.map(c => [c.id, c]));
  const [searchParams] = useSearchParams();
  const pathParam = searchParams.get('path');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (pathParam && sectionRefs.current[pathParam]) {
      sectionRefs.current[pathParam]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathParam]);

  return (
    <PageLayout title="Course Catalog">
      <section className="pb-8 border-b border-border-gold">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="eyebrow mb-3">Course Catalog</p>
          <h1 className="font-serif text-4xl text-ink mb-4">
            Wentworth <span className="text-gold">Operations Academy</span>
          </h1>
          <p className="text-muted text-base max-w-2xl leading-relaxed">
            Practitioner-focused courses spanning Lean, Six Sigma, leadership, data management, and defense contracting — organized into learning paths for every role.
          </p>
        </motion.div>
      </section>

      <div className="space-y-16 py-12">
        {LEARNING_PATHS.map((path, pi) => {
          const courses = path.courseIds.map(id => courseMap.get(id)).filter((c): c is Course => !!c);
          if (courses.length === 0) return null;
          return (
            <motion.section
              key={path.id}
              ref={el => { sectionRefs.current[path.id] = el; }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: pi * 0.07, duration: 0.4 }}
            >
              <div className="mb-6 pb-4 border-b border-border-gold flex items-start gap-4">
                <div style={{ width: 3, minHeight: 44, background: path.color, borderRadius: 99, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase mb-1" style={{ color: path.color }}>{path.eyebrow}</p>
                  <h2 className="font-serif text-2xl text-ink">{path.label}</h2>
                  <p className="text-muted text-sm mt-1 max-w-2xl">{path.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map((course, i) => (
                  <CourseCard key={`${path.id}-${course.id}`} course={course} index={i} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </PageLayout>
  );
}
