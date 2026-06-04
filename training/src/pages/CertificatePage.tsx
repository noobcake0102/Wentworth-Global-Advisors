import { useParams, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgressContext } from '../context/ProgressContext';
import { getCourseById } from '../data/courses';
import { AppLayout } from '../components/layout/AppLayout';
import { Printer, ArrowLeft, Award } from 'lucide-react';

const TRACK_LABEL: Record<string, string> = {
  'lss-certification': 'Lean Six Sigma Certification',
  'lean-foundations': 'Lean Foundations',
  'leadership': 'Leadership & Management',
  'data-management': 'Data Management',
  'defense-contracting': 'Defense Contracting',
  'accounting': 'Business Accounting',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function CertificatePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useAuth();
  const { store } = useProgressContext();

  const course = courseId ? getCourseById(courseId) : undefined;
  const cp = courseId ? store.courses[courseId] : undefined;

  if (!course || !cp?.certificateUnlocked) {
    return <Navigate to={courseId ? `/courses/${courseId}` : '/courses'} replace />;
  }

  const completedDate = cp.completedAt ? formatDate(cp.completedAt) : formatDate(new Date().toISOString());
  const trackLabel = TRACK_LABEL[course.track] ?? course.track;

  // Count modules completed
  const totalModules = course.modules.length;
  const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0);
  const estimatedHours = course.estimatedHours;

  return (
    <AppLayout>
      {/* Print controls — hidden on print */}
      <div className="no-print" style={{ padding: '20px 32px 0', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <Link
          to={`/courses/${course.id}`}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 13, color: '#9ca3af', textDecoration: 'none',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          <ArrowLeft size={14} /> Back to course
        </Link>
        <div style={{ flex: 1 }} />
        <button
          onClick={() => window.print()}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', borderRadius: 6, cursor: 'pointer', fontSize: 13,
            fontWeight: 600, fontFamily: 'DM Sans, sans-serif',
            background: '#c9a84c', color: '#000', border: 'none',
          }}
        >
          <Printer size={14} /> Print / Save PDF
        </button>
      </div>

      {/* Certificate */}
      <div style={{ padding: '16px 32px 40px', display: 'flex', justifyContent: 'center' }}>
        <div id="certificate" style={{
          width: 780, background: '#fff', position: 'relative',
          boxShadow: '0 4px 40px rgba(0,0,0,0.25)',
          fontFamily: 'Georgia, serif',
        }}>
          {/* Outer border */}
          <div style={{
            position: 'absolute', inset: 10,
            border: '1px solid #c9a84c',
            pointerEvents: 'none', zIndex: 0,
          }} />
          {/* Inner border */}
          <div style={{
            position: 'absolute', inset: 14,
            border: '2px solid #c9a84c',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1, padding: '52px 64px 48px', textAlign: 'center' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <svg width="44" height="44" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0, 4)">
                  <polygon points="0,0 10,0 21,34 32,6 38,6 27,40 15,40 0,0" fill="#c9a84c"/>
                  <polygon points="17,0 27,0 43,40 38,40 27,11 17,0" fill="#b8943c" opacity="0.6"/>
                </g>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 18, fontWeight: 400, letterSpacing: '3px', color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>WENTWORTH</div>
                <div style={{ fontSize: 8, letterSpacing: '4px', color: '#c9a84c', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>OPERATIONS ACADEMY</div>
              </div>
            </div>

            {/* Award icon line */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 6px' }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%',
                background: 'rgba(201,168,76,0.12)', border: '1.5px solid rgba(201,168,76,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Award size={26} color="#c9a84c" />
              </div>
            </div>

            {/* Title */}
            <div style={{ fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>
              Certificate of Completion
            </div>

            <div style={{ fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginBottom: 20 }}>
              This certifies that
            </div>

            {/* Recipient */}
            <div style={{
              fontSize: 36, fontWeight: 400, color: '#1a1a1a',
              fontFamily: 'Georgia, serif', letterSpacing: '1px',
              borderBottom: '1.5px solid #c9a84c', display: 'inline-block',
              paddingBottom: 6, marginBottom: 16, minWidth: 320,
            }}>
              {user?.name ?? 'Learner'}
            </div>

            <div style={{ fontSize: 11, color: '#6b7280', fontFamily: 'DM Sans, sans-serif', marginBottom: 8 }}>
              has successfully completed
            </div>

            {/* Course name */}
            <div style={{ fontSize: 22, fontWeight: 400, color: '#1a1a1a', fontFamily: 'Georgia, serif', lineHeight: 1.3, marginBottom: 4 }}>
              {course.title}
            </div>
            <div style={{ fontSize: 12, color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', letterSpacing: '1.5px', marginBottom: 4 }}>
              {course.subtitle}
            </div>
            <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'DM Sans, sans-serif', marginBottom: 24 }}>
              {trackLabel}
            </div>

            {/* Decorative divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 24 }}>
              <div style={{ height: 1, width: 80, background: 'rgba(201,168,76,0.35)' }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#c9a84c' }} />
              <div style={{ height: 1, width: 80, background: 'rgba(201,168,76,0.35)' }} />
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 28 }}>
              {[
                { label: 'Modules', value: totalModules },
                { label: 'Lessons', value: totalLessons },
                { label: 'Estimated Hours', value: estimatedHours },
              ].map(({ label, value }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 20, fontWeight: 400, color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>{value}</div>
                  <div style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Signatures row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 80, marginBottom: 28 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontFamily: 'Georgia, serif', color: '#1a1a1a', borderBottom: '1px solid #d1d5db', paddingBottom: 2, marginBottom: 4 }}>
                  <em>Wentworth Academy</em>
                </div>
                <div style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>Director of Programs</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 15, fontFamily: 'Georgia, serif', color: '#1a1a1a', borderBottom: '1px solid #d1d5db', paddingBottom: 2, marginBottom: 4, paddingTop: 8 }}>
                  {completedDate}
                </div>
                <div style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontFamily: 'DM Sans, sans-serif' }}>Date of Completion</div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ fontSize: 9, color: '#d1d5db', fontFamily: 'DM Sans, sans-serif', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Wentworth Global Advisors · Operations Academy · wentworth-global-advisors.com
            </div>
          </div>
        </div>
      </div>

      {/* Print styles injected globally */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          #certificate {
            box-shadow: none !important;
            width: 100% !important;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </AppLayout>
  );
}
