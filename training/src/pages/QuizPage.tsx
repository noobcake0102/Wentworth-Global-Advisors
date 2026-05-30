import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, RotateCcw, Award, BookOpen } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useProgressContext } from '../context/ProgressContext';
import { getCourseById } from '../data/courses';
import type { QuizQuestion } from '../types/course';

const PASS_THRESHOLD = 0.8;

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

export function QuizPage() {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const navigate = useNavigate();
  const { saveQuizResult, checkAndUnlockCertificate, getModuleProgress, getCourseProgress } = useProgressContext();

  const course = getCourseById(courseId ?? '');
  const module = course?.modules.find(m => m.id === moduleId);
  const mp = course && module ? getModuleProgress(course.id, module.id) : null;
  const cp = course ? getCourseProgress(course.id) : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  // init answers array
  useEffect(() => {
    if (module) setAnswers(new Array(module.quiz.length).fill(null));
  }, [module?.id]);

  if (!course || !module) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto px-8 pt-20 text-center">
          <p className="text-muted mb-4">Quiz not found.</p>
          <Button onClick={() => navigate('/courses')}>Back to Catalog</Button>
        </div>
      </PageLayout>
    );
  }

  const questions = module.quiz;
  const question: QuizQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const answerState: AnswerState = !revealed ? 'unanswered' : selected === question.correctIndex ? 'correct' : 'incorrect';
  const accentColor = course.color ?? '#c9a84c';

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
  };

  const handleReveal = () => {
    if (selected === null) return;
    setRevealed(true);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selected;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(i => i + 1);
      setSelected(answers[currentIndex + 1]);
      setRevealed(answers[currentIndex + 1] !== null);
    } else {
      // Calculate final score
      const finalAnswers = [...answers];
      finalAnswers[currentIndex] = selected;
      const correct = finalAnswers.filter((a, i) => a === questions[i].correctIndex).length;
      const pct = correct / questions.length;
      const passed = pct >= PASS_THRESHOLD;
      setScore(pct);
      setQuizComplete(true);
      saveQuizResult(course.id, module.id, pct, passed);
      if (passed) checkAndUnlockCertificate(course.id, course);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setSelected(answers[currentIndex - 1]);
      setRevealed(answers[currentIndex - 1] !== null);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelected(null);
    setRevealed(false);
    setAnswers(new Array(questions.length).fill(null));
    setQuizComplete(false);
    setScore(0);
  };

  const answeredCount = answers.filter(a => a !== null).length + (revealed ? 0 : 0);
  const progress = ((currentIndex + (revealed ? 1 : 0)) / questions.length) * 100;

  // ── Results screen ──
  if (quizComplete) {
    const passed = score >= PASS_THRESHOLD;
    const pct = Math.round(score * 100);
    const correctCount = Math.round(score * questions.length);
    const moduleIndex = course.modules.findIndex(m => m.id === moduleId);
    const nextModule = moduleIndex < course.modules.length - 1 ? course.modules[moduleIndex + 1] : null;
    const allModulesPassed = course.modules.every(m => {
      const p = getModuleProgress(course.id, m.id);
      return p.quizPassed;
    });

    return (
      <PageLayout>
        <div className="max-w-2xl mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-border-gold bg-card overflow-hidden"
          >
            {/* Result header */}
            <div className="h-1 w-full" style={{ background: passed ? '#4caf82' : '#e05c5c' }} />
            <div className="p-10 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6
                ${passed ? 'bg-success/10 border-2 border-success/40' : 'bg-danger/10 border-2 border-danger/40'}`}>
                {passed
                  ? <CheckCircle className="w-10 h-10 text-success" />
                  : <XCircle className="w-10 h-10 text-danger" />
                }
              </div>

              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-2">
                Module {module.number} Quiz
              </p>
              <h1 className="font-serif text-3xl text-ink mb-2">
                {passed ? 'Quiz Passed' : 'Not Quite'}
              </h1>
              <p className="text-muted text-sm mb-8">
                {passed
                  ? `You scored ${pct}% — ${correctCount} of ${questions.length} correct.`
                  : `You scored ${pct}% — need ${Math.round(PASS_THRESHOLD * 100)}% to pass. ${correctCount} of ${questions.length} correct.`
                }
              </p>

              {/* Score ring */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                    <circle
                      cx="60" cy="60" r="50" fill="none"
                      stroke={passed ? '#4caf82' : '#e05c5c'}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - score)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-3xl text-ink">{pct}%</span>
                  </div>
                </div>
              </div>

              {/* Per-question breakdown */}
              <div className="grid grid-cols-5 gap-2 mb-8">
                {questions.map((q, i) => {
                  const finalAnswers = answers.slice();
                  const isCorrect = finalAnswers[i] === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className={`h-2 rounded-full ${isCorrect ? 'bg-success/70' : 'bg-danger/70'}`}
                      title={`Q${i + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`}
                    />
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {!passed && (
                  <Button variant="outline" onClick={handleRetry}>
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </Button>
                )}
                {passed && nextModule && (
                  <Button onClick={() => {
                    const firstLesson = nextModule.lessons[0];
                    if (firstLesson) navigate(`/courses/${course.id}/modules/${nextModule.id}/lessons/${firstLesson.id}`);
                  }}>
                    Next Module
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
                {passed && allModulesPassed && (
                  <Button onClick={() => navigate(`/courses/${course.id}/certificate`)}>
                    <Award className="w-4 h-4" />
                    View Certificate
                  </Button>
                )}
                <Link
                  to={`/courses/${course.id}`}
                  className="text-sm font-sans text-muted hover:text-gold transition-colors"
                >
                  Back to Course
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </PageLayout>
    );
  }

  // ── Quiz question ──
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-muted text-xs font-sans hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Course
          </Link>

          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase mb-1" style={{ color: accentColor }}>
                Module {module.number} — {module.title}
              </p>
              <h1 className="font-serif text-2xl text-ink">Knowledge Check</h1>
            </div>
            <div className="text-right">
              <p className="font-serif text-2xl text-ink">{currentIndex + 1}<span className="text-muted text-lg">/{questions.length}</span></p>
              <p className="text-xs text-muted font-sans">questions</p>
            </div>
          </div>

          <ProgressBar value={progress} size="sm" />
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="rounded-md border border-border-gold bg-card p-8 mb-6">
              <div className="flex items-start gap-3 mb-6">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-medium"
                  style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}40` }}>
                  {currentIndex + 1}
                </span>
                <p className="font-sans text-base text-ink leading-relaxed pt-0.5">{question.question}</p>
              </div>

              <div className="space-y-3">
                {question.options.map((opt, idx) => {
                  let stateClass = 'border-border-gold hover:border-border-hover hover:bg-white/[0.02] cursor-pointer';
                  let indicatorClass = 'bg-white/5 border-white/15 text-dim';

                  if (revealed) {
                    if (idx === question.correctIndex) {
                      stateClass = 'border-success/40 bg-success/5';
                      indicatorClass = 'bg-success/20 border-success/40 text-success';
                    } else if (idx === selected && idx !== question.correctIndex) {
                      stateClass = 'border-danger/40 bg-danger/5';
                      indicatorClass = 'bg-danger/20 border-danger/40 text-danger';
                    } else {
                      stateClass = 'border-border-gold opacity-50 cursor-default';
                    }
                  } else if (selected === idx) {
                    stateClass = 'border-border-hover bg-white/[0.04] cursor-pointer';
                    indicatorClass = `border-opacity-60 text-ink`;
                    indicatorClass = 'text-ink';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-sm border transition-all duration-150 ${stateClass}`}
                    >
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-medium border transition-all
                        ${revealed && idx === question.correctIndex ? 'bg-success/20 border-success/40 text-success' :
                          revealed && idx === selected && idx !== question.correctIndex ? 'bg-danger/20 border-danger/40 text-danger' :
                          selected === idx && !revealed ? 'border-gold/60 text-gold bg-gold/10' :
                          'bg-white/5 border-white/15 text-dim'
                        }`}>
                        {revealed && idx === question.correctIndex
                          ? <CheckCircle className="w-3.5 h-3.5" />
                          : revealed && idx === selected && idx !== question.correctIndex
                          ? <XCircle className="w-3.5 h-3.5" />
                          : optionLetters[idx]
                        }
                      </span>
                      <span className="text-sm font-sans text-ink leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-md border p-5 mb-6 ${answerState === 'correct' ? 'border-success/30 bg-success/5' : 'border-danger/30 bg-danger/5'}`}
                >
                  <p className={`text-xs font-sans font-medium tracking-widest uppercase mb-2 ${answerState === 'correct' ? 'text-success' : 'text-danger'}`}>
                    {answerState === 'correct' ? 'Correct' : 'Incorrect'}
                  </p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{question.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBack}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            {!revealed ? (
              <Button
                size="sm"
                onClick={handleReveal}
                disabled={selected === null}
              >
                <BookOpen className="w-4 h-4" />
                Check Answer
              </Button>
            ) : (
              <Button size="sm" onClick={handleNext}>
                {isLast ? (
                  <>
                    See Results
                    <Award className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Next Question
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-200
                ${i === currentIndex ? 'w-4 h-2' : 'w-2 h-2'}
                ${answers[i] !== null
                  ? answers[i] === questions[i].correctIndex ? 'bg-success/70' : 'bg-danger/70'
                  : i === currentIndex ? 'bg-gold/60' : 'bg-white/10'
                }`}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
