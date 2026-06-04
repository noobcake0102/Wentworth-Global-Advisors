import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Target, CheckCircle, Circle, PlayCircle, Users } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useProgressContext } from '../context/ProgressContext';
import { allCourses } from '../data/courses';
import { getPathById } from '../data/paths';
import type { Course } from '../types/course';

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
        {/* Step + status */}
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

        {/* Content */}
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

export function PathPage() {
  const { pathId } = useParams<{ pathId: string }>();
  const path = pathId ? getPathById(pathId) : undefined;
  const { getCourseCompletionPercent, getCourseProgress } = useProgressContext();

  if (!path) return <Navigate to="/paths" replace />;

  const courseMap = new Map(allCourses.map(c => [c.id, c]));
  const courses = path.courseIds.map(id => courseMap.get(id)).filter((c): c is Course => !!c);

  // Overall path progress = average of course completion percents
  const percents = courses.map(c => getCourseCompletionPercent(c.id, c));
  const overall = percents.length ? Math.round(percents.reduce((a, b) => a + b, 0) / percents.length) : 0;
  const completedCount = courses.filter(c => getCourseProgress(c.id).certificateUnlocked || getCourseCompletionPercent(c.id, c) === 100).length;
  const totalHours = courses.reduce((a, c) => a + c.estimatedHours, 0);

  // Next course to take = first not-completed
  const nextCourse = courses.find(c => {
    const p = getCourseCompletionPercent(c.id, c);
    return !(getCourseProgress(c.id).certificateUnlocked || p === 100);
  });

  return (
    <PageLayout title={path.title}>
      {/* Header */}
      <section className="pb-8 border-b border-border-gold">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: 26 }}>{path.icon}</span>
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

          {/* Stats + overall progress */}
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
          {!nextCourse && (
            <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-md font-sans font-semibold text-sm" style={{ background: 'rgba(76,175,130,0.15)', color: '#4caf82', border: '1px solid rgba(76,175,130,0.4)' }}>
              <CheckCircle className="w-4 h-4" /> Path complete — congratulations!
            </div>
          )}
        </motion.div>
      </section>

      {/* Ordered course sequence */}
      <div className="py-10 space-y-4 max-w-4xl">
        {courses.map((course, i) => (
          <PathCourseRow key={course.id} course={course} index={i} accentColor={path.color} />
        ))}
      </div>
    </PageLayout>
  );
}
