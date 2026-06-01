import { Routes, Route, Navigate } from 'react-router-dom';
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
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/courses" element={<CatalogPage />} />
      <Route path="/courses/:courseId" element={<CoursePage />} />
      <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId" element={<LessonPage />} />
      <Route path="/courses/:courseId/modules/:moduleId/quiz" element={<QuizPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/courses/:courseId/certificate" element={<CertificatePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/defense" element={<DefenseContractingPage />} />
      <Route path="/programs/six-sigma" element={<SixSigmaCertPage />} />
      <Route path="/programs/lean-foundations" element={<LeanFoundationsPage />} />
      <Route path="/programs/leadership" element={<LeadershipPage />} />
      <Route path="/programs/data-management" element={<DataManagementPage />} />
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
