import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, BookOpen, Target } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { ProgressBar } from '../components/ui/ProgressBar';
import { PathIcon } from '../components/PathIcon';
import { useProgressContext } from '../context/ProgressContext';
import { allCourses } from '../data/courses';
import { learningPaths } from '../data/paths';
import type { Course } from '../types/course';

export function PathsPage() {
  const { getCourseCompletionPercent } = useProgressContext();
  const courseMap = new Map(allCourses.map(c => [c.id, c]));

  return (
    <PageLayout title="Learning Paths">
      <section className="pb-8 border-b border-border-gold">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 3, height: 36, background: '#c9a84c', borderRadius: 99 }} />
            <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gold">
              Guided Journeys
            </p>
          </div>
          <h1 className="font-serif text-4xl text-ink mb-4">Learning Paths</h1>
          <p className="text-muted text-base max-w-2xl leading-relaxed">
            Role-based journeys that take you from foundation to competence in your area of work.
            Each path is an ordered sequence of courses — start at step one and follow it through to a clear outcome.
          </p>
        </motion.div>
      </section>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl">
        {learningPaths.map((path, i) => {
          const courses = path.courseIds.map(id => courseMap.get(id)).filter((c): c is Course => !!c);
          const percents = courses.map(c => getCourseCompletionPercent(c.id, c));
          const overall = percents.length ? Math.round(percents.reduce((a, b) => a + b, 0) / percents.length) : 0;
          const totalHours = courses.reduce((a, c) => a + c.estimatedHours, 0);

          return (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
            >
              <Link
                to={`/paths/${path.id}`}
                className="block relative rounded-md border border-border-gold bg-card overflow-hidden h-full hover:border-border-hover hover:shadow-[0_4px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group"
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: path.color }} />
                <div className="p-6 pl-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: `${path.color}14`, border: `1px solid ${path.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <PathIcon pathId={path.id} color={path.color} size={28} />
                    </div>
                    <div>
                      <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase mb-0.5" style={{ color: path.color }}>
                        {path.eyebrow}
                      </p>
                      <h3 className="font-serif text-xl text-ink leading-tight">{path.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">{path.description}</p>

                  <div className="flex items-start gap-2 text-xs text-muted mb-4">
                    <Target className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: path.color }} />
                    <span>{path.outcome}</span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-xs font-sans text-muted mb-3">
                      <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{courses.length} courses</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{totalHours}h</span>
                    </div>

                    {overall > 0 && (
                      <div className="mb-3">
                        <ProgressBar value={overall} showLabel size="sm" />
                      </div>
                    )}

                    <span className="flex items-center gap-2 font-sans font-medium text-xs tracking-widest uppercase" style={{ color: path.color }}>
                      {overall === 0 ? 'Begin path' : overall === 100 ? 'View certificate' : 'Continue path'}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
}
