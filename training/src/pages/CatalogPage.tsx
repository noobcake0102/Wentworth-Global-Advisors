import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Lock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useProgressContext } from '../context/ProgressContext';
import { allCourses } from '../data/courses';
import type { Course } from '../types/course';

function BeltIcon({ belt }: { belt: string }) {
  const colors: Record<string, string> = { yellow: '#c9a84c', green: '#4caf82', black: '#f0ece6' };
  const color = colors[belt] ?? '#c9a84c';
  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <rect x="4" y="18" width="40" height="12" rx="6" fill={color} opacity="0.9" />
      <circle cx="24" cy="24" r="7" fill={color} />
      <circle cx="24" cy="24" r="4" fill="#09090f" />
    </svg>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  const { getCourseCompletionPercent, getCourseProgress } = useProgressContext();
  const pct = course.status === 'available' ? getCourseCompletionPercent(course.id, course) : 0;
  const cp = getCourseProgress(course.id);
  const isComingSoon = course.status === 'coming-soon';

  const beltBadge = ({ yellow: 'yellow', green: 'green', black: 'black' }[course.belt] ?? 'gold') as 'yellow' | 'green' | 'black';

  const accentColor = course.belt === 'yellow' ? '#c9a84c' : course.belt === 'green' ? '#4caf82' : '#f0ece6';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className={`relative rounded-md border bg-card flex flex-col overflow-hidden transition-all duration-300
        ${isComingSoon
          ? 'border-border-gold opacity-60'
          : 'border-border-gold hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)]'
        }`}
    >
      {/* Top accent stripe */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ background: accentColor }} />

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-6">
          <BeltIcon belt={course.belt} />
          <div className="flex flex-col items-end gap-2">
            <Badge variant={beltBadge}>{course.belt} belt</Badge>
            {isComingSoon && <Badge variant="muted">Coming Soon</Badge>}
            {cp.certificateUnlocked && <Badge variant="success">Completed</Badge>}
          </div>
        </div>

        <p className="eyebrow mb-3">{course.subtitle}</p>
        <h2 className="font-serif text-2xl text-ink mb-3">{course.title}</h2>
        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{course.description}</p>

        <div className="flex items-center gap-4 text-xs font-sans text-muted mb-6">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.estimatedHours} hours
          </span>
          {!isComingSoon && course.modules.length > 0 && (
            <span>{course.modules.length} modules</span>
          )}
        </div>

        {!isComingSoon && pct > 0 && (
          <div className="mb-6">
            <ProgressBar value={pct} showLabel size="sm" />
          </div>
        )}

        {isComingSoon ? (
          <div className="flex items-center gap-2 text-muted text-sm font-sans py-3 px-4 rounded-sm border border-border-gold bg-white/[0.02]">
            <Lock className="w-4 h-4 flex-shrink-0" />
            <span>Available after Yellow Belt completion</span>
          </div>
        ) : (
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center justify-between px-6 py-3.5 rounded-sm bg-gold text-bg font-sans font-medium text-xs tracking-widest uppercase hover:bg-gold-light transition-all duration-300 group"
          >
            {pct === 0 ? 'Start Course' : pct === 100 ? 'Review Course' : 'Continue Learning'}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function CatalogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-border-gold">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow mb-4">Training Academy</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5 max-w-2xl">
              Lean Six Sigma<br />
              <span className="text-gold">Certification Program</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              A structured curriculum designed for practitioners — built around real projects, genuine data, and the tools that drive measurable business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 border-b border-border-gold bg-surface/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-12">
            {[
              { value: '3', label: 'Belt Levels' },
              { value: '8', label: 'Yellow Belt Modules' },
              { value: '6', label: 'Interactive Simulations' },
              { value: '127+', label: 'Hours of Content' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-gold">{s.value}</p>
                <p className="text-xs font-sans text-muted tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-10">
            <p className="eyebrow mb-3">Curriculum</p>
            <h2 className="font-serif text-3xl text-ink">Choose Your Belt Level</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom callout */}
      <section className="py-16 border-t border-border-gold bg-surface/30">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">
            Wentworth Global Advisors
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
