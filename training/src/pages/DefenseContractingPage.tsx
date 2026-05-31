import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 'role',
    question: 'What best describes your role in this organization?',
    options: [
      { label: 'Owner, CEO, President, or Board Member', value: 'exec' },
      { label: 'Operations, Program Management, or Engineering Lead', value: 'ops' },
      { label: 'Business Development, Sales, or Capture Management', value: 'bd' },
      { label: 'Multiple roles — I wear several hats', value: 'multi' },
    ],
  },
  {
    id: 'experience',
    question: 'What is your direct defense contracting experience?',
    options: [
      { label: 'None — evaluating whether to pursue defense', value: 'none' },
      { label: 'Some — one or two contracts, still learning the system', value: 'some' },
      { label: 'Moderate — active defense portfolio, 3–5 years experience', value: 'moderate' },
      { label: 'Extensive — defense is a significant part of our business', value: 'extensive' },
    ],
  },
  {
    id: 'goal',
    question: 'What is your primary goal right now?',
    options: [
      { label: 'Determine if defense contracting is right for our company', value: 'decide' },
      { label: 'Win our first or second defense contract', value: 'win' },
      { label: 'Fix execution problems on current defense programs', value: 'execute' },
      { label: 'Scale our defense business and BD operation', value: 'scale' },
    ],
  },
  {
    id: 'urgency',
    question: 'How urgent is this for your organization?',
    options: [
      { label: 'Exploring — no immediate deadline', value: 'explore' },
      { label: 'Planning — RFP or decision point within 6 months', value: 'planning' },
      { label: 'Active — contract in execution or proposal in progress', value: 'active' },
      { label: 'Critical — we have a problem that needs solving now', value: 'critical' },
    ],
  },
  {
    id: 'focus',
    question: 'Which area needs the most development in your organization?',
    options: [
      { label: 'Strategic decision-making and financial readiness', value: 'strategy' },
      { label: 'Program execution, compliance, and quality systems', value: 'execution' },
      { label: 'Pipeline development, proposals, and customer relationships', value: 'business_dev' },
      { label: 'All of the above — we need a complete education', value: 'all' },
    ],
  },
];

interface TrackRecommendation {
  track: 'A' | 'B' | 'C';
  level: 1 | 2 | 3;
  label: string;
  description: string;
  color: string;
  startCourseId: string;
}

function getRecommendation(answers: Record<string, string>): TrackRecommendation {
  const { role, experience, goal, urgency, focus } = answers;

  // BD track signals
  const bdSignals = [role === 'bd', focus === 'business_dev', goal === 'win' || goal === 'scale'].filter(Boolean).length;
  // Ops track signals
  const opsSignals = [role === 'ops', focus === 'execution', goal === 'execute'].filter(Boolean).length;
  // Exec track signals
  const execSignals = [role === 'exec', focus === 'strategy', goal === 'decide'].filter(Boolean).length;

  // Level determination
  let level: 1 | 2 | 3 = 1;
  if (experience === 'moderate') level = 2;
  if (experience === 'extensive') level = 3;
  if (urgency === 'critical' && experience !== 'none') level = Math.min(3, level + 1) as 1 | 2 | 3;

  if (bdSignals >= opsSignals && bdSignals >= execSignals) {
    const descriptions = {
      1: 'Learn how defense contracts are actually won — from acquisition system mechanics to competitive landscape intelligence.',
      2: 'Build the skills to pursue and win defense contracts with structured BD, teaming strategy, and proposal methodology.',
      3: 'Scale your BD organization with pipeline management, capture discipline, and protest intelligence.',
    };
    const courseIds = { 1: 'defense-bd-awareness', 2: 'defense-bd-practical', 3: 'defense-bd-deep' };
    return { track: 'C', level, label: 'BD & Capture Track', description: descriptions[level], color: '#6b5a8a', startCourseId: courseIds[level] };
  }

  if (opsSignals >= execSignals) {
    const descriptions = {
      1: 'Understand how defense programs actually work — the lifecycle, contract types, and the government customer relationship.',
      2: 'Master the execution disciplines that determine whether a defense contract delivers or becomes a liability.',
      3: 'Apply advanced program management — earned value, producibility, supply chain, and risk at scale.',
    };
    const courseIds = { 1: 'defense-ops-awareness', 2: 'defense-ops-practical', 3: 'defense-ops-deep' };
    return { track: 'B', level, label: 'Program Management Track', description: descriptions[level], color: '#5a6e8a', startCourseId: courseIds[level] };
  }

  const descriptions = {
    1: 'Evaluate whether defense contracting is right for your business — with the real costs, commitments, and decision framework.',
    2: 'Structure your business to win — registrations, contract types, business systems, and teaming strategy.',
    3: 'Run a defense business at scale — CAS, DCAA audit readiness, EVMS, and facility security clearances.',
  };
  const courseIds = { 1: 'defense-exec-awareness', 2: 'defense-exec-practical', 3: 'defense-exec-deep' };
  return { track: 'A', level, label: 'Executive Track', description: descriptions[level], color: '#4a7fa5', startCourseId: courseIds[level] };
}

const TRACK_DETAILS = [
  {
    id: 'A',
    label: 'Track A — Executive & Owner',
    color: '#4a7fa5',
    description: 'For CEOs, owners, and board members evaluating or scaling defense.',
    levels: [
      { id: 'defense-exec-awareness', number: 1, title: 'Is Defense Right for Your Business?', description: 'Strategic decision framework for evaluating defense readiness.' },
      { id: 'defense-exec-practical', number: 2, title: 'Structuring to Win', description: 'Registrations, contract types, business systems, and teaming.' },
      { id: 'defense-exec-deep', number: 3, title: 'Running a Defense Business', description: 'CAS, DCAA audits, EVMS, facility clearances, and CMMC.' },
    ],
    certificate: 'Executive Defense Readiness Certificate',
  },
  {
    id: 'B',
    label: 'Track B — Operations & Program Management',
    color: '#5a6e8a',
    description: 'For program managers, operations leads, and delivery teams.',
    levels: [
      { id: 'defense-ops-awareness', number: 1, title: 'How Defense Programs Actually Work', description: 'Program lifecycle, contract types from the ops side, DCMA.' },
      { id: 'defense-ops-practical', number: 2, title: 'Executing a Defense Contract', description: 'Planning, configuration management, quality, and customer management.' },
      { id: 'defense-ops-deep', number: 3, title: 'Advanced Program Management', description: 'EVMS in practice, producibility, subcontractors, and risk management.' },
    ],
    certificate: 'Defense Program Management Certificate',
  },
  {
    id: 'C',
    label: 'Track C — BD & Sales',
    color: '#6b5a8a',
    description: 'For business development professionals and capture teams.',
    levels: [
      { id: 'defense-bd-awareness', number: 1, title: 'How Defense Contracts Are Won', description: 'Acquisition system, contract vehicles, and competitive landscape.' },
      { id: 'defense-bd-practical', number: 2, title: 'Pursuing and Winning Contracts', description: 'Bid/no-bid, teaming, proposal writing, and oral presentations.' },
      { id: 'defense-bd-deep', number: 3, title: 'BD at Scale', description: 'Pipeline management, capture discipline, protests, and BD org design.' },
    ],
    certificate: 'Defense BD & Capture Certificate',
  },
];

function TrackCard({ track }: { track: typeof TRACK_DETAILS[number] }) {
  return (
    <div className="rounded-md border border-border-gold bg-card overflow-hidden">
      <div className="h-0.5 w-full" style={{ background: track.color }} />
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase mb-1" style={{ color: track.color }}>
              {track.label.split('—')[0].trim()}
            </p>
            <h3 className="font-serif text-xl text-ink">{track.label.split('—')[1].trim()}</h3>
          </div>
        </div>
        <p className="text-muted text-sm mb-6 leading-relaxed">{track.description}</p>

        <div className="space-y-3 mb-6">
          {track.levels.map(level => (
            <Link
              key={level.id}
              to={`/courses/${level.id}`}
              className="flex items-center gap-4 p-3 rounded border border-border-gold hover:border-gold/40 hover:bg-surface/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: track.color + '20', color: track.color }}>
                {level.number}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-ink font-medium">{level.title}</p>
                <p className="text-xs text-muted">{level.description}</p>
              </div>
              <span className="text-muted group-hover:text-gold transition-colors text-sm">→</span>
            </Link>
          ))}
        </div>

        <div className="rounded border border-border-gold/60 bg-surface/30 p-3 flex items-center gap-3">
          <span className="text-lg">🏅</span>
          <div>
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold">Complete All 3 Levels</p>
            <p className="text-xs text-muted">{track.certificate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DefenseContractingPage() {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const allAnswered = QUIZ_QUESTIONS.every(q => quizAnswers[q.id]);
  const recommendation = allAnswered ? getRecommendation(quizAnswers) : null;

  const handleAnswer = (questionId: string, value: string) => {
    setQuizAnswers(a => ({ ...a, [questionId]: value }));
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQuestion(c => c + 1), 200);
    } else {
      setTimeout(() => setShowResult(true), 200);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-border-gold">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow mb-4">Defense Contracting Series</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5 max-w-3xl">
              Defense Contracting<br />
              <span className="text-gold">Mastery Series</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
              Built on 35 years of lived experience across aerospace, defense electronics, and satellite ground systems. Not theory — practitioner-grade content from someone who has survived DCAA audits, rebuilt failing programs, and stood in front of DCMA surveillance teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-8 py-3 rounded hover:bg-gold/20 transition-all"
              >
                Which Track Is Right for Me? →
              </button>
              <a href="#tracks" className="border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-8 py-3 rounded hover:text-ink hover:border-ink/30 transition-all">
                Browse All Tracks
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-b border-border-gold bg-surface/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-10">
            {[
              { value: '3', label: 'Learner Tracks' },
              { value: '9', label: 'Courses' },
              { value: '8', label: 'Simulations' },
              { value: '3', label: 'Certificates' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-gold">{s.value}</p>
                <p className="text-xs font-sans text-muted tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-14 border-b border-border-gold">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚖️', title: 'Regulatory Accuracy', text: 'DFARS, FAR, CAS, CMMC 2.0, and DCAA standards — accurate at publication, with explicit notes where regulations are subject to change.' },
              { icon: '🔴', title: 'War Stories, Not Case Studies', text: 'Every module includes a real-pattern scenario from aerospace, defense electronics, or satellite systems — the kinds of mistakes that cost real companies real money.' },
              { icon: '🎯', title: 'Role-Based Learning', text: 'Three tracks built for three audiences: executives making go/no-go decisions, program managers executing contracts, and BD professionals building pipelines.' },
            ].map(v => (
              <div key={v.title} className="flex gap-4">
                <span className="text-2xl flex-shrink-0">{v.icon}</span>
                <div>
                  <p className="font-serif text-lg text-ink mb-2">{v.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="w-full max-w-lg bg-card border border-border-gold rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-border-gold flex items-center justify-between">
                <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold">Which Track Is Right for Me?</p>
                <button onClick={() => { setShowQuiz(false); setCurrentQuestion(0); setQuizAnswers({}); setShowResult(false); }} className="text-muted hover:text-ink transition-colors">✕</button>
              </div>

              <div className="p-6">
                {!showResult ? (
                  <>
                    <div className="flex gap-1 mb-6">
                      {QUIZ_QUESTIONS.map((_, i) => (
                        <div key={i} className={`flex-1 h-0.5 rounded-full transition-all ${i <= currentQuestion ? 'bg-gold' : 'bg-border-gold'}`} />
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-xs font-sans tracking-widest uppercase text-muted mb-2">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</p>
                        <p className="font-serif text-xl text-ink mb-6">{QUIZ_QUESTIONS[currentQuestion].question}</p>
                        <div className="space-y-3">
                          {QUIZ_QUESTIONS[currentQuestion].options.map(opt => (
                            <button
                              key={opt.value}
                              onClick={() => handleAnswer(QUIZ_QUESTIONS[currentQuestion].id, opt.value)}
                              className={`w-full text-left px-4 py-3 rounded border text-sm transition-all ${
                                quizAnswers[QUIZ_QUESTIONS[currentQuestion].id] === opt.value
                                  ? 'border-gold/60 bg-gold/10 text-ink'
                                  : 'border-border-gold text-muted hover:border-gold/30 hover:text-ink'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </>
                ) : recommendation ? (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                    <div className="rounded border p-5" style={{ borderColor: recommendation.color + '40', backgroundColor: recommendation.color + '10' }}>
                      <p className="text-xs font-sans tracking-widest uppercase mb-2" style={{ color: recommendation.color }}>Recommended Starting Point</p>
                      <p className="font-serif text-2xl text-ink mb-1">{recommendation.label}</p>
                      <p className="text-sm text-muted leading-relaxed">{recommendation.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to={`/courses/${recommendation.startCourseId}`}
                        onClick={() => setShowQuiz(false)}
                        className="flex-1 text-center bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all"
                      >
                        Start This Course →
                      </Link>
                      <button
                        onClick={() => { setShowQuiz(false); setCurrentQuestion(0); setQuizAnswers({}); setShowResult(false); }}
                        className="border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-4 py-3 rounded hover:text-ink transition-all"
                      >
                        Browse All
                      </button>
                    </div>
                  </motion.div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tracks */}
      <section id="tracks" className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <p className="eyebrow mb-3">Three Tracks</p>
            <h2 className="font-serif text-3xl text-ink mb-3">Choose Your Role</h2>
            <p className="text-muted max-w-2xl">Each track progresses through three levels — Awareness, Practical, and Deep Implementation. Completing all three levels in a track earns a Wentworth Defense Contracting Certificate for that role.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TRACK_DETAILS.map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification section */}
      <section className="py-16 border-t border-border-gold bg-surface/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRACK_DETAILS.map(track => (
              <div key={track.id} className="rounded border border-border-gold bg-card p-6 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🏅</span>
                <div>
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-1" style={{ color: track.color }}>
                    {track.label.split('—')[0].trim()}
                  </p>
                  <p className="font-serif text-lg text-ink mb-2">{track.certificate}</p>
                  <p className="text-xs text-muted leading-relaxed">Complete all 3 levels to earn this printable, dated, name-personalized credential. Wall-worthy. LinkedIn-shareable.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
