import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen, ChevronRight, Lock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { LessonContentRenderer } from '../components/lesson/LessonContentRenderer';
import { useProgressContext } from '../context/ProgressContext';
import { getCourseById } from '../data/courses';

export function LessonPage() {
  const { courseId, moduleId, lessonId } = useParams<{
    courseId: string;
    moduleId: string;
    lessonId: string;
  }>();
  const navigate = useNavigate();
  const { markLessonComplete, getModuleProgress, getLessonCompletionCount } = useProgressContext();

  const course = getCourseById(courseId ?? '');
  const module = useMemo(
    () => course?.modules.find(m => m.id === moduleId),
    [course, moduleId]
  );
  const lesson = useMemo(
    () => module?.lessons.find(l => l.id === lessonId),
    [module, lessonId]
  );

  const mp = module && courseId ? getModuleProgress(courseId, module.id) : null;
  const lessonDone = mp?.lessons[lessonId ?? '']?.completed ?? false;
  const lessonsDone = module && courseId
    ? getLessonCompletionCount(courseId, module.id, module.lessons.length)
    : 0;

  const lessonIndex = module?.lessons.findIndex(l => l.id === lessonId) ?? -1;
  const prevLesson = lessonIndex > 0 ? module?.lessons[lessonIndex - 1] : null;
  const nextLesson = module && lessonIndex < module.lessons.length - 1
    ? module.lessons[lessonIndex + 1]
    : null;

  // Module progress among lessons
  const modulePct = module
    ? Math.round((lessonsDone / module.lessons.length) * 100)
    : 0;

  // Scroll to top on lesson change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId]);

  const handleMarkComplete = () => {
    if (!courseId || !moduleId || !lessonId) return;
    markLessonComplete(courseId, moduleId, lessonId);
  };

  const handleNext = () => {
    if (!courseId || !moduleId || !lessonId) return;
    // Mark complete if not already
    if (!lessonDone) markLessonComplete(courseId, moduleId, lessonId);

    if (nextLesson) {
      navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${nextLesson.id}`);
    } else {
      // Last lesson — go to quiz
      navigate(`/courses/${courseId}/modules/${moduleId}/quiz`);
    }
  };

  // Error state
  if (!course || !module || !lesson) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-8 pt-16 text-center">
          <p className="text-muted mb-4">Lesson not found.</p>
          <Button onClick={() => navigate('/courses')}>Back to Catalog</Button>
        </div>
      </PageLayout>
    );
  }

  const allLessonsComplete = lessonsDone === module.lessons.length;

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              {/* Back link */}
              <Link
                to={`/courses/${courseId}`}
                className="inline-flex items-center gap-2 text-muted text-xs font-sans hover:text-gold transition-colors mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Course
              </Link>

              {/* Module info */}
              <div className="rounded-md border border-border-gold bg-card p-5 mb-4">
                <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-1">
                  Module {module.number}
                </p>
                <p className="font-serif text-base text-ink mb-3">{module.title}</p>
                <ProgressBar value={modulePct} size="sm" showLabel className="mb-3" />
                <p className="text-xs text-muted font-sans">
                  {lessonsDone} / {module.lessons.length} lessons
                </p>
              </div>

              {/* Lesson list */}
              <nav className="space-y-1">
                {module.lessons.map((l, i) => {
                  const isDone = mp?.lessons[l.id]?.completed ?? false;
                  const isCurrent = l.id === lessonId;
                  const prevDone = i === 0 || (mp?.lessons[module.lessons[i - 1].id]?.completed ?? false);

                  return (
                    <button
                      key={l.id}
                      onClick={() => navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${l.id}`)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-150 group
                        ${isCurrent
                          ? 'bg-gold/10 border border-gold/30'
                          : isDone
                          ? 'hover:bg-white/3 border border-transparent'
                          : 'hover:bg-white/3 border border-transparent'
                        }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${isDone
                          ? 'bg-success/15 border border-success/40'
                          : isCurrent
                          ? 'bg-gold/15 border border-gold/40'
                          : 'bg-white/5 border border-white/10'
                        }`}>
                        {isDone
                          ? <CheckCircle className="w-3 h-3 text-success" />
                          : !prevDone && !isDone && i > 0
                          ? <Lock className="w-2.5 h-2.5 text-dim" />
                          : <span className="text-[10px] font-sans text-muted">{i + 1}</span>
                        }
                      </div>
                      <span className={`text-xs font-sans leading-tight
                        ${isCurrent ? 'text-gold' : isDone ? 'text-muted' : 'text-dim'}`}>
                        {l.title}
                      </span>
                    </button>
                  );
                })}

                {/* Quiz entry */}
                <button
                  onClick={() => {
                    if (allLessonsComplete) {
                      navigate(`/courses/${courseId}/modules/${moduleId}/quiz`);
                    }
                  }}
                  disabled={!allLessonsComplete}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-150 mt-2
                    border border-dashed
                    ${allLessonsComplete
                      ? 'border-gold/30 hover:bg-gold/5 cursor-pointer'
                      : 'border-white/10 opacity-40 cursor-not-allowed'
                    }`}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gold/10 border border-gold/20">
                    {mp?.quizPassed
                      ? <CheckCircle className="w-3 h-3 text-success" />
                      : <BookOpen className="w-2.5 h-2.5 text-gold" />
                    }
                  </div>
                  <span className={`text-xs font-sans leading-tight ${allLessonsComplete ? 'text-gold' : 'text-dim'}`}>
                    Module Quiz
                  </span>
                </button>
              </nav>
            </div>
          </aside>

          {/* ── Main content ── */}
          <main>
            {/* Lesson header */}
            <motion.div
              key={lessonId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Breadcrumb — mobile only */}
              <div className="flex items-center gap-2 text-xs font-sans text-muted mb-6 lg:hidden">
                <Link to={`/courses/${courseId}`} className="hover:text-gold transition-colors">
                  {course.title}
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-dim truncate">{module.title}</span>
              </div>

              {/* Lesson meta */}
              <div className="flex items-start justify-between gap-4 mb-8 pb-6 border-b border-border-gold">
                <div>
                  <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-2">
                    Lesson {lessonIndex + 1} of {module.lessons.length}
                  </p>
                  <h1 className="font-serif text-3xl text-ink mb-2">{lesson.title}</h1>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted font-sans">
                    <Clock className="w-3.5 h-3.5" />
                    {lesson.estimatedMinutes} min
                  </span>
                </div>
                {lessonDone && (
                  <div className="flex items-center gap-1.5 text-success text-xs font-sans flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4" />
                    Completed
                  </div>
                )}
              </div>

              {/* Lesson content */}
              <LessonContentRenderer content={lesson.content} />

              {/* Actions */}
              <div className="mt-12 pt-8 border-t border-border-gold flex items-center justify-between gap-4 flex-wrap">
                {/* Previous */}
                <div>
                  {prevLesson ? (
                    <button
                      onClick={() => navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${prevLesson.id}`)}
                      className="inline-flex items-center gap-2 text-sm text-muted font-sans hover:text-gold transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Previous:</span>
                      <span className="text-muted">{prevLesson.title}</span>
                    </button>
                  ) : (
                    <Link
                      to={`/courses/${courseId}`}
                      className="inline-flex items-center gap-2 text-sm text-muted font-sans hover:text-gold transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Course Overview
                    </Link>
                  )}
                </div>

                {/* Next / complete */}
                <div className="flex items-center gap-3">
                  {!lessonDone && (
                    <Button variant="outline" size="sm" onClick={handleMarkComplete}>
                      <CheckCircle className="w-3.5 h-3.5" />
                      Mark Complete
                    </Button>
                  )}
                  <Button size="sm" onClick={handleNext}>
                    {nextLesson ? (
                      <>
                        Next Lesson
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Take Quiz
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </main>

        </div>
      </div>
    </PageLayout>
  );
}
