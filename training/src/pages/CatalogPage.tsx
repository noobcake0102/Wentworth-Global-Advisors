import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Lock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useProgressContext } from '../context/ProgressContext';
import { coursesByTrack } from '../data/courses';
import type { Course } from '../types/course';

function CourseCard({ course, index }: { course: Course; index: number }) {
  const { getCourseCompletionPercent, getCourseProgress } = useProgressContext();
  const pct = course.status === 'available' ? getCourseCompletionPercent(course.id, course) : 0;
  const cp = getCourseProgress(course.id);
  const isComingSoon = course.status === 'coming-soon';
  const accentColor = course.color ?? '#c9a84c';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`relative rounded-md border bg-card flex flex-col overflow-hidden transition-all duration-300
        ${isComingSoon
          ? 'border-border-gold opacity-60'
          : 'border-border-gold hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(201,168,76,0.10)]'
        }`}
    >
      <div className="h-0.5 w-full flex-shrink-0" style={{ background: accentColor }} />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className="text-4xl leading-none">{course.icon}</div>
          <div className="flex flex-col items-end gap-1.5">
            {isComingSoon && <Badge variant="muted">Coming Soon</Badge>}
            {cp.certificateUnlocked && <Badge variant="success">Completed</Badge>}
          </div>
        </div>

        <p className="eyebrow mb-2" style={{ color: accentColor }}>{course.subtitle}</p>
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
            className="inline-flex items-center justify-between px-5 py-3 rounded-sm font-sans font-medium text-xs tracking-widest uppercase hover:opacity-90 transition-all duration-300 group text-bg"
            style={{ background: accentColor }}
          >
            {pct === 0 ? 'Start Course' : pct === 100 ? 'Review Course' : 'Continue Learning'}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

const tracks = [
  {
    id: 'lss-certification' as const,
    label: 'LSS Certification',
    title: 'Lean Six Sigma Certification',
    description: 'A progressive belt curriculum from Yellow through Black Belt.',
  },
  {
    id: 'lean-foundations' as const,
    label: 'Lean Foundations',
    title: 'Lean & Six Sigma Foundations',
    description: 'Core methodology courses covering Lean Manufacturing, Six Sigma, and DMAIC.',
  },
  {
    id: 'leadership' as const,
    label: 'Leadership',
    title: 'Leadership & Management',
    description: 'Tools and frameworks for leading teams and delivering projects.',
  },
];

export function CatalogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-border-gold">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow mb-4">Course Catalog</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5 max-w-2xl">
              Wentworth<br />
              <span className="text-gold">Operations Institute</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              A practitioner-focused curriculum spanning Lean Manufacturing, Six Sigma, DMAIC methodology, team leadership, and modern project management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 border-b border-border-gold bg-surface/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-12">
            {[
              { value: '8', label: 'Courses' },
              { value: '3', label: 'Learning Tracks' },
              { value: '50+', label: 'Modules' },
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

      {/* Courses by track */}
      {tracks.map((track, ti) => {
        const courses = coursesByTrack[track.id];
        if (!courses || courses.length === 0) return null;
        return (
          <section key={track.id} className={`py-16 ${ti > 0 ? 'border-t border-border-gold' : ''}`}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="mb-10">
                <p className="eyebrow mb-2">{track.label}</p>
                <h2 className="font-serif text-3xl text-ink mb-2">{track.title}</h2>
                <p className="text-muted text-sm">{track.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, i) => (
                  <CourseCard key={course.id} course={course} index={i + ti * 3} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom callout */}
      <section className="py-16 border-t border-border-gold bg-surface/30">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">
            Wentworth Operations Institute
          </div>
          <h2 className="font-serif text-3xl text-ink mb-4">Practical. Rigorous. Results-Driven.</h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Every module is designed for practitioners, not theorists. Real frameworks, real worked examples, and simulations built on the kinds of problems you will actually encounter.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
