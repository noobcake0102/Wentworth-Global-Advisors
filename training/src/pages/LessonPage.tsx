import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen, Lock, List, X } from 'lucide-react';
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

  const [tocOpen, setTocOpen] = useState(false);

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

  // Shared TOC nav panel content
  const TocPanel = () => (
    <>
      <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid rgba(201,168,76,0.10)' }}>
        <Link
          to={`/courses/${courseId}`}
          onClick={() => setTocOpen(false)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#9ca3af', textDecoration: 'none', marginBottom: 10, fontFamily: 'DM Sans, sans-serif' }}
        >
          <ArrowLeft size={12} /> Back to Course
        </Link>
        <div style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', marginBottom: 3 }}>
          Module {module.number}
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 13, color: '#f9fafb', lineHeight: 1.4, marginBottom: 8 }}>
          {module.title}
        </div>
        <ProgressBar value={modulePct} size="sm" showLabel />
        <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>
          {lessonsDone} / {module.lessons.length} lessons
        </div>
      </div>
      <nav style={{ flex: 1, overflowY: 'auto', padding: '6px 0' }}>
        {module.lessons.map((l, i) => {
          const isDone = mp?.lessons[l.id]?.completed ?? false;
          const isCurrent = l.id === lessonId;
          const prevDone = i === 0 || (mp?.lessons[module.lessons[i - 1].id]?.completed ?? false);
          const isLocked = !prevDone && !isDone && i > 0;
          return (
            <button
              key={l.id}
              onClick={() => { if (!isLocked) { navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${l.id}`); setTocOpen(false); } }}
              style={{
                width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 14px',
                background: isCurrent ? 'rgba(201,168,76,0.08)' : 'transparent',
                border: 'none', borderLeft: `2px solid ${isCurrent ? '#c9a84c' : 'transparent'}`,
                cursor: isLocked ? 'default' : 'pointer', opacity: isLocked ? 0.45 : 1, transition: 'all 0.15s',
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isDone ? 'rgba(34,197,94,0.1)' : isCurrent ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.05)',
                border: `1.5px solid ${isDone ? 'rgba(34,197,94,0.4)' : isCurrent ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)'}`,
              }}>
                {isDone ? <CheckCircle size={11} color="#22c55e" /> : isLocked ? <Lock size={9} color="#6b7280" /> :
                  <span style={{ fontSize: 10, fontFamily: 'DM Sans, sans-serif', color: isCurrent ? '#c9a84c' : '#6b7280' }}>{i + 1}</span>}
              </div>
              <span style={{ fontSize: 12, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4, color: isCurrent ? '#c9a84c' : isDone ? '#9ca3af' : '#6b7280' }}>
                {l.title}
              </span>
            </button>
          );
        })}
        <button
          onClick={() => { if (allLessonsComplete) { navigate(`/courses/${courseId}/modules/${moduleId}/quiz`); setTocOpen(false); } }}
          disabled={!allLessonsComplete}
          style={{
            width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 14px', marginTop: 4, background: 'transparent', border: 'none',
            borderLeft: '2px solid transparent', borderTop: '1px dashed rgba(201,168,76,0.2)',
            cursor: allLessonsComplete ? 'pointer' : 'default', opacity: allLessonsComplete ? 1 : 0.4,
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.1)', border: '1.5px solid rgba(201,168,76,0.25)' }}>
            {mp?.quizPassed ? <CheckCircle size={11} color="#22c55e" /> : <BookOpen size={9} color="#c9a84c" />}
          </div>
          <span style={{ fontSize: 12, fontFamily: 'DM Sans, sans-serif', color: allLessonsComplete ? '#c9a84c' : '#6b7280' }}>Module Quiz</span>
        </button>
      </nav>
    </>
  );

  return (
    <AppLayout noTopbar noPadding title={lesson.title}>
      <style>{`
        @media (max-width: 767px) {
          .lesson-desktop-toc { display: none !important; }
          .lesson-mobile-toc-backdrop { display: block !important; }
        }
        @media (min-width: 768px) {
          .lesson-mobile-toc-btn { display: none !important; }
          .lesson-mobile-toc-drawer { display: none !important; }
        }
      `}</style>

      {/* Mobile TOC drawer backdrop */}
      {tocOpen && (
        <div className="lesson-mobile-toc-backdrop" onClick={() => setTocOpen(false)}
          style={{ display: 'none', position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(0,0,0,0.5)' }} />
      )}

      {/* Mobile TOC drawer */}
      <div className="lesson-mobile-toc-drawer" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, bottom: 0, width: 280,
        background: '#111', zIndex: 90, flexDirection: 'column', overflow: 'hidden',
        transform: tocOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.24s cubic-bezier(0.22,1,0.36,1)',
        ...(tocOpen ? { display: 'flex' } : {}),
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 14px 0' }}>
          <span style={{ fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contents</span>
          <button onClick={() => setTocOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', padding: 4 }}>
            <X size={16} />
          </button>
        </div>
        <TocPanel />
      </div>

      <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
        {/* Desktop TOC sidebar */}
        <div className="lesson-desktop-toc" style={{
          width: 260, minWidth: 260, height: '100%',
          background: '#111111', borderRight: '1px solid rgba(201,168,76,0.12)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          <TocPanel />
        </div>

        {/* Content area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
          {/* Player topbar */}
          <div style={{
            height: 54, flexShrink: 0, background: 'rgba(17,17,17,0.98)',
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10,
          }}>
            {/* Mobile TOC button */}
            <button
              className="lesson-mobile-toc-btn"
              onClick={() => setTocOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 4, flexShrink: 0 }}
            >
              <List size={18} />
            </button>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: '#f9fafb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
              {lesson.title}
            </span>
            {lessonDone && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#22c55e', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>
                <CheckCircle size={13} />
                <span className="hidden-xs" style={{ display: 'none' }}>Done</span>
              </span>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>
              <Clock size={12} />
              {lesson.estimatedMinutes}m
            </div>
          </div>

          {/* Scrollable lesson content */}
          <div ref={contentRef} style={{ flex: 1, overflowY: 'auto', padding: 'clamp(16px, 4vw, 40px)' }}>
            <motion.div key={lessonId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <LessonContentRenderer content={lesson.content} />
              </div>
            </motion.div>
          </div>

          {/* Prev / Next bar */}
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.12)', background: '#0f0f0f', flexShrink: 0,
            padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          }}>
            <div style={{ minWidth: 0 }}>
              {prevLesson ? (
                <button
                  onClick={() => navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${prevLesson.id}`)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', padding: 0, maxWidth: '100%' }}
                >
                  <ArrowLeft size={13} style={{ flexShrink: 0 }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Prev</span>
                </button>
              ) : (
                <Link to={`/courses/${courseId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#9ca3af', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                  <ArrowLeft size={13} /> Course
                </Link>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              {!lessonDone && (
                <Button variant="outline" size="sm" onClick={handleMarkComplete}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span style={{ display: 'none' }} className="btn-label-sm"> Done</span>
                </Button>
              )}
              <Button size="sm" onClick={handleNext}>
                {nextLesson ? <>Next <ArrowRight className="w-3.5 h-3.5" /></> : <>Quiz <ArrowRight className="w-3.5 h-3.5" /></>}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
