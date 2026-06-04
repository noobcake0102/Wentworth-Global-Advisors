import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Target, CheckCircle, Circle, PlayCircle, Users, Award, Printer } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { PathIcon } from '../components/PathIcon';
import { useProgressContext } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { allCourses } from '../data/courses';
import { getPathById } from '../data/paths';
import type { Course } from '../types/course';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function PathCourseRow({ course, index, accentColor }: {
  course: Course; index: number; accentColor: string;
}) {
  const { getCourseCompletionPercent, getCourseProgress } = useProgressContext();
  const pct = getCourseCompletionPercent(course.id, course);
  const cp = getCourseProgress(course.id);
  const done = cp.certificateUnlocked || pct === 100;
  const started = pct > 0 && !done;
  const StatusIcon = done ? CheckCircle : started ? PlayCircle : Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.32 }}
      className="relative rounded-md border border-border-gold bg-card overflow-hidden hover:border-border-hover hover:shadow-[0_4px_28px_rgba(0,0,0,0.28)] transition-all duration-300"
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accentColor }} />
      <div className="flex items-start gap-5 p-6 pl-8">
        <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-0.5">
          <div style={{
            width: 28, height: 28, borderRadius: '50%', border: `1.5px solid ${accentColor}`,
            background: `${accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: accentColor, fontFamily: 'DM Sans, sans-serif',
          }}>
            {index + 1}
          </div>
          <StatusIcon className="w-5 h-5" style={{ color: done ? '#4caf82' : accentColor, opacity: done || started ? 1 : 0.4 }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <div>
              <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase mb-1" style={{ color: accentColor }}>
                {course.subtitle}
              </p>
              <h3 className="font-serif text-xl text-ink">{course.title}</h3>
            </div>
            <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
              {done && <Badge variant="success">Completed</Badge>}
              {started && <Badge variant="muted">In Progress</Badge>}
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-4 max-w-2xl">{course.description}</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-sans text-muted">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{course.estimatedHours}h</span>
              {course.modules.length > 0 && <span>{course.modules.length} modules</span>}
            </div>
            <Link
              to={`/courses/${course.id}`}
              className="ml-auto flex items-center gap-2 font-sans font-medium text-xs tracking-widest uppercase transition-all duration-200 group flex-shrink-0"
              style={{ color: accentColor }}
            >
              {pct === 0 ? 'Start Course' : done ? 'Review' : 'Continue'}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          {pct > 0 && !done && (
            <div className="mt-3 max-w-xs">
              <ProgressBar value={pct} showLabel size="sm" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Path Certificate ─────────────────────────────────────────────────────────

interface PathCertProps {
  pathTitle: string;
  pathEyebrow: string;
  pathColor: string;
  pathId: string;
  totalCourses: number;
  totalHours: number;
  completedAt: string;
  userName: string;
}

function PathCertificate({ pathTitle, pathEyebrow, pathColor, pathId, totalCourses, totalHours, completedAt, userName }: PathCertProps) {
  return (
    <>
      {/* Print controls */}
      <div className="no-print flex items-center justify-between mb-4 pt-2">
        <h2 className="font-serif text-2xl text-ink">Path Certificate</h2>
        <button
          onClick={() => window.print()}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', borderRadius: 6, cursor: 'pointer', fontSize: 13,
            fontWeight: 600, fontFamily: 'DM Sans, sans-serif',
            background: '#c9a84c', color: '#000', border: 'none',
          }}
        >
          <Printer size={14} /> Print / Save PDF
        </button>
      </div>

      {/* Certificate card */}
      <div id="path-certificate" style={{
        width: '100%', maxWidth: 780, background: '#fff', position: 'relative',
        boxShadow: '0 4px 40px rgba(0,0,0,0.25)', fontFamily: 'Georgia, serif',
      }}>
        {/* Borders */}
        <div style={{ position: 'absolute', inset: 10, border: '1px solid #c9a84c', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 14, border: '2px solid #c9a84c', pointerEvents: 'none', zIndex: 0 }} />

        {/* Accent bar top */}
        <div style={{ position: 'absolute', top: 14, left: 14, right: 14, height: 4, background: pathColor, zIndex: 2, opacity: 0.7 }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '56px 64px 48px', textAlign: 'center' }}>
          {/* WGA header */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginBottom: 6 }}>
            <svg width="40" height="40" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0,4)">
                <polygon points="0,0 10,0 21,34 32,6 38,6 27,40 15,40 0,0" fill="#c9a84c"/>
                <polygon points="17,0 27,0 43,40 38,40 27,11 17,0" fill="#b8943c" opacity="0.6"/>
              </g>
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 17, letterSpacing: '3px', color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>WENTWORTH</div>
              <div style={{ fontSize: 7.5, letterSpacing: '4px', color: '#c9a84c', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>OPERATIONS ACADEMY</div>
            </div>
          </div>

          {/* Path icon */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 8px' }}>
            <div style={{
              width: 60, height: 60, borderRadius: '50%',
              background: `${pathColor}18`, border: `1.5px solid ${pathColor}55`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <PathIcon pathId={pathId} color={pathColor} size={34} />
            </div>
          </div>

          {/* Labels */}
          <div style={{ fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: pathColor, fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>
            Learning Path Certificate
          </div>
          <div style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', letterSpacing: '1.5px', marginBottom: 18 }}>
            {pathEyebrow}
          </div>
          <div style={{ fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginBottom: 12 }}>This certifies that</div>

          {/* Recipient */}
          <div style={{
            fontSize: 34, color: '#1a1a1a', fontFamily: 'Georgia, serif', letterSpacing: '1px',
            borderBottom: `1.5px solid ${pathColor}`, display: 'inline-block',
            paddingBottom: 6, marginBottom: 16, minWidth: 320,
          }}>
            {userName}
          </div>

          <div style={{ fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginBottom: 10 }}>
            has completed the full learning path
          </div>

          <div style={{ fontSize: 24, color: '#1a1a1a', fontFamily: 'Georgia, serif', marginBottom: 6 }}>
            {pathTitle}
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', margin: '20px 0' }}>
            <div style={{ height: 1, width: 80, background: `${pathColor}55` }} />
            <Award size={16} color={pathColor} />
            <div style={{ height: 1, width: 80, background: `${pathColor}55` }} />
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 28 }}>
            {[
              { label: 'Courses Completed', value: totalCourses },
              { label: 'Total Hours', value: `${totalHours}h` },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22, color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>{value}</div>
                <div style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Signatures */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 80, marginBottom: 28 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontFamily: 'Georgia, serif', color: '#1a1a1a', borderBottom: '1px solid #d1d5db', paddingBottom: 2, marginBottom: 4 }}>
                <em>Wentworth Academy</em>
              </div>
              <div style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>Director of Programs</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontFamily: 'Georgia, serif', color: '#1a1a1a', borderBottom: '1px solid #d1d5db', paddingBottom: 2, marginBottom: 4, paddingTop: 8 }}>
                {formatDate(completedAt)}
              </div>
              <div style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>Date of Completion</div>
            </div>
          </div>

          <div style={{ fontSize: 9, color: '#d1d5db', fontFamily: 'DM Sans, sans-serif', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Wentworth Global Advisors · Operations Academy
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          #path-certificate { box-shadow: none !important; width: 100% !important; max-width: 100% !important; page-break-inside: avoid; }
        }
      `}</style>
    </>
  );
}

// ─── PathPage ─────────────────────────────────────────────────────────────────

export function PathPage() {
  const { pathId } = useParams<{ pathId: string }>();
  const path = pathId ? getPathById(pathId) : undefined;
  const { getCourseCompletionPercent, getCourseProgress } = useProgressContext();
  const { user } = useAuth();

  if (!path) return <Navigate to="/paths" replace />;

  const courseMap = new Map(allCourses.map(c => [c.id, c]));
  const courses = path.courseIds.map(id => courseMap.get(id)).filter((c): c is Course => !!c);

  const percents = courses.map(c => getCourseCompletionPercent(c.id, c));
  const overall = percents.length ? Math.round(percents.reduce((a, b) => a + b, 0) / percents.length) : 0;
  const completedCount = courses.filter(c => {
    const cp = getCourseProgress(c.id);
    return cp.certificateUnlocked || getCourseCompletionPercent(c.id, c) === 100;
  }).length;
  const totalHours = courses.reduce((a, c) => a + c.estimatedHours, 0);
  const pathComplete = completedCount === courses.length && courses.length > 0;

  // Latest completedAt across finished courses
  const completedDates = courses
    .map(c => getCourseProgress(c.id).completedAt)
    .filter((d): d is string => !!d);
  const latestCompletedAt = completedDates.length
    ? completedDates.reduce((a, b) => (a > b ? a : b))
    : new Date().toISOString();

  const nextCourse = courses.find(c => {
    const cp = getCourseProgress(c.id);
    return !(cp.certificateUnlocked || getCourseCompletionPercent(c.id, c) === 100);
  });

  return (
    <PageLayout title={path.title}>
      {/* Header */}
      <section className="pb-8 border-b border-border-gold">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-4">
            <div style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: `${path.color}14`, border: `1px solid ${path.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <PathIcon pathId={path.id} color={path.color} size={24} />
            </div>
            <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: path.color }}>
              {path.eyebrow}
            </p>
          </div>
          <h1 className="font-serif text-4xl text-ink mb-4">{path.title}</h1>
          <p className="text-muted text-base max-w-2xl leading-relaxed mb-3">{path.description}</p>

          <div className="flex items-start gap-2 max-w-2xl mb-2 text-sm text-muted">
            <Users className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: path.color }} />
            <span><span className="text-ink">Who it's for:</span> {path.audience}</span>
          </div>
          <div className="flex items-start gap-2 max-w-2xl text-sm text-muted">
            <Target className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: path.color }} />
            <span><span className="text-ink">When you finish:</span> {path.outcome}</span>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <div>
              <p className="font-serif text-2xl" style={{ color: path.color }}>{courses.length}</p>
              <p className="text-xs font-sans text-muted tracking-widest uppercase mt-0.5">Courses</p>
            </div>
            <div>
              <p className="font-serif text-2xl" style={{ color: path.color }}>{totalHours}h</p>
              <p className="text-xs font-sans text-muted tracking-widest uppercase mt-0.5">Total Hours</p>
            </div>
            <div>
              <p className="font-serif text-2xl" style={{ color: path.color }}>{completedCount}/{courses.length}</p>
              <p className="text-xs font-sans text-muted tracking-widest uppercase mt-0.5">Completed</p>
            </div>
          </div>

          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-sans tracking-widest uppercase text-muted">Path Progress</span>
              <span className="text-xs font-sans font-semibold" style={{ color: path.color }}>{overall}%</span>
            </div>
            <ProgressBar value={overall} size="md" />
          </div>

          {nextCourse && (
            <Link
              to={`/courses/${nextCourse.id}`}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-md font-sans font-semibold text-sm transition-all"
              style={{ background: path.color, color: '#0d0d0d' }}
            >
              {overall === 0 ? 'Start the path' : 'Continue where you left off'}: {nextCourse.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
          {pathComplete && (
            <div className="flex items-center gap-3 mt-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-sans font-semibold text-sm" style={{ background: 'rgba(76,175,130,0.15)', color: '#4caf82', border: '1px solid rgba(76,175,130,0.4)' }}>
                <CheckCircle className="w-4 h-4" /> Path complete — congratulations!
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Course sequence */}
      <div className="py-10 space-y-4 max-w-4xl">
        {courses.map((course, i) => (
          <PathCourseRow key={course.id} course={course} index={i} accentColor={path.color} />
        ))}
      </div>

      {/* Path certificate — only when all courses done */}
      {pathComplete && (
        <section className="border-t border-border-gold pt-10 pb-12 max-w-4xl">
          <PathCertificate
            pathTitle={path.title}
            pathEyebrow={path.eyebrow}
            pathColor={path.color}
            pathId={path.id}
            totalCourses={courses.length}
            totalHours={totalHours}
            completedAt={latestCompletedAt}
            userName={user?.name ?? 'Learner'}
          />
        </section>
      )}
    </PageLayout>
  );
}
