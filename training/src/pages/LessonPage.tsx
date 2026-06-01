import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen, Lock } from 'lucide-react';
import { AppLayout } from '../components/layout/AppLayout';
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
  const contentRef = useRef<HTMLDivElement>(null);

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

  const modulePct = module
    ? Math.round((lessonsDone / module.lessons.length) * 100)
    : 0;

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId]);

  const handleMarkComplete = () => {
    if (!courseId || !moduleId || !lessonId) return;
    markLessonComplete(courseId, moduleId, lessonId);
  };

  const handleNext = () => {
    if (!courseId || !moduleId || !lessonId) return;
    if (!lessonDone) markLessonComplete(courseId, moduleId, lessonId);
    if (nextLesson) {
      navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${nextLesson.id}`);
    } else {
      navigate(`/courses/${courseId}/modules/${moduleId}/quiz`);
    }
  };

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
    <AppLayout noTopbar noPadding title={lesson.title}>
      {/* Course player: player-sidebar + player-content-area */}
      <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>

        {/* Player sidebar — TOC */}
        <div style={{
          width: 260,
          minWidth: 260,
          height: '100%',
          background: '#111111',
          borderRight: '1px solid rgba(201,168,76,0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Module header */}
          <div style={{ padding: '16px 16px 12px', borderBottom: '1px solid rgba(201,168,76,0.10)' }}>
            <Link
              to={`/courses/${courseId}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#9ca3af', textDecoration: 'none', marginBottom: 12, fontFamily: 'DM Sans, sans-serif' }}
            >
              <ArrowLeft size={12} />
              Back to Course
            </Link>
            <div style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>
              Module {module.number}
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 13, color: '#f9fafb', lineHeight: 1.4, marginBottom: 10 }}>
              {module.title}
            </div>
            <ProgressBar value={modulePct} size="sm" showLabel />
            <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>
              {lessonsDone} / {module.lessons.length} lessons
            </div>
          </div>

          {/* Lesson list */}
          <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
            {module.lessons.map((l, i) => {
              const isDone = mp?.lessons[l.id]?.completed ?? false;
              const isCurrent = l.id === lessonId;
              const prevDone = i === 0 || (mp?.lessons[module.lessons[i - 1].id]?.completed ?? false);
              const isLocked = !prevDone && !isDone && i > 0;

              return (
                <button
                  key={l.id}
                  onClick={() => !isLocked && navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${l.id}`)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '9px 16px',
                    background: isCurrent ? 'rgba(201,168,76,0.08)' : 'transparent',
                    border: 'none',
                    borderLeft: `2px solid ${isCurrent ? '#c9a84c' : 'transparent'}`,
                    cursor: isLocked ? 'default' : 'pointer',
                    opacity: isLocked ? 0.45 : 1,
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isDone ? 'rgba(34,197,94,0.1)' : isCurrent ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.05)',
                    border: `1.5px solid ${isDone ? 'rgba(34,197,94,0.4)' : isCurrent ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  }}>
                    {isDone
                      ? <CheckCircle size={11} color="#22c55e" />
                      : isLocked
                      ? <Lock size={9} color="#6b7280" />
                      : <span style={{ fontSize: 10, fontFamily: 'DM Sans, sans-serif', color: isCurrent ? '#c9a84c' : '#6b7280' }}>{i + 1}</span>
                    }
                  </div>
                  <span style={{
                    fontSize: 12, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4,
                    color: isCurrent ? '#c9a84c' : isDone ? '#9ca3af' : '#6b7280',
                  }}>
                    {l.title}
                  </span>
                </button>
              );
            })}

            {/* Quiz entry */}
            <button
              onClick={() => allLessonsComplete && navigate(`/courses/${courseId}/modules/${moduleId}/quiz`)}
              disabled={!allLessonsComplete}
              style={{
                width: '100%', textAlign: 'left',
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 16px', marginTop: 4,
                background: 'transparent', border: 'none',
                borderLeft: '2px solid transparent',
                borderTop: '1px dashed rgba(201,168,76,0.2)',
                cursor: allLessonsComplete ? 'pointer' : 'default',
                opacity: allLessonsComplete ? 1 : 0.4,
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(201,168,76,0.1)', border: '1.5px solid rgba(201,168,76,0.25)',
              }}>
                {mp?.quizPassed
                  ? <CheckCircle size={11} color="#22c55e" />
                  : <BookOpen size={9} color="#c9a84c" />
                }
              </div>
              <span style={{ fontSize: 12, fontFamily: 'DM Sans, sans-serif', color: allLessonsComplete ? '#c9a84c' : '#6b7280' }}>
                Module Quiz
              </span>
            </button>
          </nav>
        </div>

        {/* Player content area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
          {/* Player topbar */}
          <div style={{
            height: 54, flexShrink: 0,
            background: 'rgba(17,17,17,0.98)',
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            display: 'flex', alignItems: 'center',
            padding: '0 28px', gap: 12,
          }}>
            <span style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>
              Lesson {lessonIndex + 1} of {module.lessons.length}
            </span>
            <span style={{ color: 'rgba(201,168,76,0.3)' }}>·</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: '#f9fafb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {lesson.title}
            </span>
            {lessonDone && (
              <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#22c55e', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>
                <CheckCircle size={13} />
                Completed
              </span>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', marginLeft: lessonDone ? 8 : 'auto', flexShrink: 0 }}>
              <Clock size={12} />
              {lesson.estimatedMinutes} min
            </div>
          </div>

          {/* Scrollable content */}
          <div ref={contentRef} style={{ flex: 1, overflowY: 'auto', padding: '32px 40px 40px' }}>
            <motion.div
              key={lessonId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LessonContentRenderer content={lesson.content} />
            </motion.div>
          </div>

          {/* Player nav — prev/next bar */}
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.12)',
            padding: '14px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0f0f0f',
            flexShrink: 0,
          }}>
            <div>
              {prevLesson ? (
                <button
                  onClick={() => navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${prevLesson.id}`)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', padding: 0 }}
                >
                  <ArrowLeft size={14} />
                  <span style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{prevLesson.title}</span>
                </button>
              ) : (
                <Link
                  to={`/courses/${courseId}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#9ca3af', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}
                >
                  <ArrowLeft size={14} />
                  Course Overview
                </Link>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {!lessonDone && (
                <Button variant="outline" size="sm" onClick={handleMarkComplete}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  Mark Complete
                </Button>
              )}
              <Button size="sm" onClick={handleNext}>
                {nextLesson ? (
                  <>Next Lesson <ArrowRight className="w-3.5 h-3.5" /></>
                ) : (
                  <>Take Quiz <ArrowRight className="w-3.5 h-3.5" /></>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
