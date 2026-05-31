import type { Course } from '../types/course';
import { yellowBeltCourse } from './yellowBelt';
import { greenBeltCourse } from './greenBelt';
import { blackBeltCourse } from './blackBelt';

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
