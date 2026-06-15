import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ChevronRight, Award, ArrowLeft, Lock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { useProgressContext } from '../context/ProgressContext';
import { getCourseById } from '../data/courses';

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { getCourseProgress, getModuleProgress, getCourseCompletionPercent, getLessonCompletionCount } = useProgressContext();

  const course = getCourseById(courseId ?? '');
  if (!course) return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-8 pt-16 text-center">
        <p className="text-muted">Course not found.</p>
        <Button className="mt-4" onClick={() => navigate('/courses')}>Back to Catalog</Button>
      </div>
    </PageLayout>
  );

  const cp = getCourseProgress(course.id);
  const totalPct = getCourseCompletionPercent(course.id, course);
  const beltBadge = (course.belt ? ({ yellow: 'yellow', green: 'green', black: 'black' }[course.belt] ?? 'gold') : 'gold') as 'yellow' | 'green' | 'black';
  const accentColor = course.color ?? '#c9a84c';

  // Find the first incomplete module
  const firstIncompleteModuleIndex = course.modules.findIndex(m => {
    const mp = getModuleProgress(course.id, m.id);
    return !mp.quizPassed;
  });

  const handleStartContinue = () => {
    const targetIndex = firstIncompleteModuleIndex === -1 ? 0 : firstIncompleteModuleIndex;
    const targetModule = course.modules[targetIndex];
    if (targetModule) {
      const mp = getModuleProgress(course.id, targetModule.id);
      const firstIncompleteLesson = targetModule.lessons.find(l => !mp.lessons[l.id]?.completed);
      const lessonId = firstIncompleteLesson?.id ?? targetModule.lessons[0]?.id;
      if (lessonId) {
        navigate(`/courses/${course.id}/modules/${targetModule.id}/lessons/${lessonId}`);
      }
    }
  };

  return (
    <PageLayout>
      {/* Header */}
      <div className="border-b border-border-gold bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <Link to="/courses" className="inline-flex items-center gap-2 text-muted text-sm font-sans hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Courses
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {course.belt && <Badge variant={beltBadge}>{course.belt} belt</Badge>}
                <span className="font-sans text-xs tracking-widest uppercase" style={{ color: accentColor }}>{course.subtitle}</span>
                {cp.certificateUnlocked && <Badge variant="success">Completed</Badge>}
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-ink mb-2">{course.title}</h1>
              <p className="text-muted text-base">{course.subtitle}</p>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-end gap-3 flex-wrap">
              <div className="flex items-center gap-4 text-sm text-muted font-sans">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {course.estimatedHours}h
                </span>
                <span>{course.modules.length} modules</span>
              </div>
              {totalPct > 0 && (
                <ProgressBar value={totalPct} size="md" showLabel className="w-36" />
              )}
              {course.modules.length > 0 && (
                <Button onClick={handleStartContinue}>
                  {totalPct === 0 ? 'Start Course' : totalPct === 100 ? 'Review' : 'Continue'}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Module list */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-ink mb-6">Course Modules</h2>
            {course.modules.length === 0 ? (
              <div className="rounded-md border border-border-gold bg-card/50 p-8 text-center">
                <p className="text-muted">Modules coming soon.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {course.modules.map((module, i) => {
                  const mp = getModuleProgress(course.id, module.id);
                  const lessonsDone = getLessonCompletionCount(course.id, module.id, module.lessons.length);
                  const quizPassed = mp.quizPassed ?? false;
                  const moduleComplete = quizPassed;
                  const prevModulePassed = i === 0 || getModuleProgress(course.id, course.modules[i - 1].id).quizPassed;
                  const isLocked = !prevModulePassed;

                  return (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className={`rounded-md border p-5 transition-all duration-200 ${
                        moduleComplete
                          ? 'border-success/30 bg-success/[0.03]'
                          : isLocked
                          ? 'border-border-gold opacity-50'
                          : 'border-border-gold hover:border-border-hover bg-card/50 cursor-pointer'
                      }`}
                      onClick={() => {
                        if (isLocked) return;
                        const mp2 = getModuleProgress(course.id, module.id);
                        const firstIncomplete = module.lessons.find(l => !mp2.lessons[l.id]?.completed);
                        const lessonId = firstIncomplete?.id ?? module.lessons[0]?.id;
                        if (lessonId) {
                          navigate(`/courses/${course.id}/modules/${module.id}/lessons/${lessonId}`);
                        }
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-base
                          ${moduleComplete
                            ? 'bg-success/15 border border-success/40 text-success'
                            : 'bg-gold/10 border border-gold/30 text-gold'
                          }`}>
                          {moduleComplete ? <CheckCircle className="w-4 h-4" /> : module.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-serif text-lg text-ink">{module.title}</h3>
                            {isLocked && <Lock className="w-3.5 h-3.5 text-dim" />}
                          </div>
                          <p className="text-sm text-muted leading-relaxed mb-3">{module.description}</p>
                          <div className="flex items-center gap-4 text-xs font-sans text-muted flex-wrap">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3" />
                              {module.estimatedMinutes} min
                            </span>
                            <span>{module.lessons.length} lessons</span>
                            <span>{module.quiz.length} quiz questions</span>
                            {lessonsDone > 0 && !moduleComplete && (
                              <span className="text-gold">{lessonsDone}/{module.lessons.length} lessons done</span>
                            )}
                            {quizPassed && (
                              <span className="text-success flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Quiz passed
                              </span>
                            )}
                          </div>
                        </div>
                        {!isLocked && (
                          <ChevronRight className="w-4 h-4 text-muted flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress card */}
            <div className="rounded-md border border-border-gold bg-card p-6">
              <h3 className="font-serif text-lg text-ink mb-4">Your Progress</h3>
              <ProgressBar value={totalPct} size="lg" showLabel className="mb-4" />
              <div className="space-y-2 text-sm font-sans">
                {course.modules.map(m => {
                  const mp = getModuleProgress(course.id, m.id);
                  return (
                    <div key={m.id} className="flex items-center justify-between">
                      <span className="text-muted truncate pr-2">{m.title}</span>
                      {mp.quizPassed
                        ? <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" />
                        : <span className="text-dim text-xs">—</span>
                      }
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certificate card */}
            {cp.certificateUnlocked && (
              <div className="rounded-md border border-gold/40 bg-gold/5 p-6">
                <Award className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-serif text-lg text-gold mb-2">Certificate Earned</h3>
                <p className="text-sm text-muted mb-4">You have completed this course. View and print your certificate.</p>
                <Link to={`/courses/${course.id}/certificate`}>
                  <Button size="sm" className="w-full">View Certificate</Button>
                </Link>
              </div>
            )}

            {/* Learning objectives */}
            {course.modules.length > 0 && (
              <div className="rounded-md border border-border-gold bg-card p-6">
                <h3 className="font-serif text-lg text-ink mb-4">Learning Objectives</h3>
                <ul className="space-y-2">
                  {course.modules.slice(0, 4).flatMap(m => m.learningObjectives).slice(0, 6).map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-gold mt-1 flex-shrink-0">›</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Course description card */}
            <div className="rounded-md border border-border-gold bg-card p-6">
              <h3 className="font-serif text-lg text-ink mb-3">About This Course</h3>
              <p className="text-sm text-muted leading-relaxed">{course.description}</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
