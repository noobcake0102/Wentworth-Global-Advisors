import type { Course } from '../types/course';
import { yellowBeltCourse } from './yellowBelt';
import { greenBeltCourse } from './greenBelt';

export const blackBeltCourse: Course = {
  id: 'black-belt',
  belt: 'black',
  track: 'lss-certification',
  title: 'Black Belt',
  subtitle: 'Lean Six Sigma Expert',
  description: 'Master advanced statistical analysis, design of experiments, and enterprise-wide deployment strategy. The pinnacle of LSS practitioner certification.',
  status: 'coming-soon',
  estimatedHours: 80,
  color: '#f0ece6',
  icon: '⬛',
  modules: [],
};

// Lean Foundations Track
import { leanManufacturingCourse } from './leanManufacturing';
import { sixSigmaPrinciplesCourse } from './sixSigmaPrinciples';
import { dmaicMethodologyCourse } from './dmaicMethodology';

// Leadership Track
import { teamLeadershipCourse } from './teamLeadership';
import { projectManagementCourse } from './projectManagement';

// Data Management Track
import { dataEngineeringCourse } from './dataEngineering';
import { dataAnalysisCourse } from './dataAnalysis';
import { crmErpSystemsCourse } from './crmErpSystems';
import { businessIntelligenceCourse } from './businessIntelligence';

export const allCourses: Course[] = [
  yellowBeltCourse,
  greenBeltCourse,
  blackBeltCourse,
  leanManufacturingCourse,
  sixSigmaPrinciplesCourse,
  dmaicMethodologyCourse,
  teamLeadershipCourse,
  projectManagementCourse,
  dataEngineeringCourse,
  dataAnalysisCourse,
  crmErpSystemsCourse,
  businessIntelligenceCourse,
];

export const coursesByTrack = {
  'lss-certification': allCourses.filter(c => c.track === 'lss-certification'),
  'lean-foundations': allCourses.filter(c => c.track === 'lean-foundations'),
  'leadership': allCourses.filter(c => c.track === 'leadership'),
  'data-management': allCourses.filter(c => c.track === 'data-management'),
};

export function getCourseById(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}
