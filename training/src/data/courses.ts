import type { Course } from '../types/course';
import { yellowBeltCourse } from './yellowBelt';

// LSS Certification Track
export const greenBeltCourse: Course = {
  id: 'green-belt',
  belt: 'green',
  track: 'lss-certification',
  title: 'Green Belt',
  subtitle: 'Lean Six Sigma Practitioner',
  description: 'Lead improvement projects with advanced statistical tools, project management skills, and deeper Lean methodology. Designed for practitioners ready to drive cross-functional change.',
  status: 'coming-soon',
  estimatedHours: 40,
  color: '#4caf82',
  icon: '🟢',
  modules: [],
};

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

export const allCourses: Course[] = [
  yellowBeltCourse,
  greenBeltCourse,
  blackBeltCourse,
  leanManufacturingCourse,
  sixSigmaPrinciplesCourse,
  dmaicMethodologyCourse,
  teamLeadershipCourse,
  projectManagementCourse,
];

export const coursesByTrack = {
  'lss-certification': allCourses.filter(c => c.track === 'lss-certification'),
  'lean-foundations': allCourses.filter(c => c.track === 'lean-foundations'),
  'leadership': allCourses.filter(c => c.track === 'leadership'),
};

export function getCourseById(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}
