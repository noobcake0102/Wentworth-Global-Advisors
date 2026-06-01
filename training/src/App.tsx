import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CatalogPage } from './pages/CatalogPage';
import { CoursePage } from './pages/CoursePage';
import { LessonPage } from './pages/LessonPage';
import { QuizPage } from './pages/QuizPage';
import { DashboardPage } from './pages/DashboardPage';
import { CertificatePage } from './pages/CertificatePage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { DefenseContractingPage } from './pages/DefenseContractingPage';
import { SixSigmaCertPage } from './pages/programs/SixSigmaCertPage';
import { LeanFoundationsPage } from './pages/programs/LeanFoundationsPage';
import { LeadershipPage } from './pages/programs/LeadershipPage';
import { DataManagementPage } from './pages/programs/DataManagementPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0d0d0d' }}>
        <div style={{ width: 32, height: 32, border: '2px solid rgba(201,168,76,0.2)', borderTopColor: '#c9a84c', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0d0d0d' }}>
        <div style={{ width: 32, height: 32, border: '2px solid rgba(201,168,76,0.2)', borderTopColor: '#c9a84c', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/courses" element={<ProtectedRoute><CatalogPage /></ProtectedRoute>} />
      <Route path="/courses/:courseId" element={<ProtectedRoute><CoursePage /></ProtectedRoute>} />
      <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
      <Route path="/courses/:courseId/modules/:moduleId/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
      <Route path="/courses/:courseId/certificate" element={<ProtectedRoute><CertificatePage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/defense" element={<ProtectedRoute><DefenseContractingPage /></ProtectedRoute>} />
      <Route path="/programs/six-sigma" element={<ProtectedRoute><SixSigmaCertPage /></ProtectedRoute>} />
      <Route path="/programs/lean-foundations" element={<ProtectedRoute><LeanFoundationsPage /></ProtectedRoute>} />
      <Route path="/programs/leadership" element={<ProtectedRoute><LeadershipPage /></ProtectedRoute>} />
      <Route path="/programs/data-management" element={<ProtectedRoute><DataManagementPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppRoutes />
      </ProgressProvider>
    </AuthProvider>
  );
}
