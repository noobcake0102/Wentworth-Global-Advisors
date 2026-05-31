import type { Course } from '../types/course';
import { yellowBeltCourse } from './yellowBelt';
import { greenBeltCourse } from './greenBelt';
import { blackBeltCourseData as blackBeltCourse } from './blackBelt';

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

// Defense Contracting Track — Track A (Executive)
import { defenseExecAwarenessCourse } from './defenseContractingA1';
import { defenseExecPracticalCourse } from './defenseContractingA2';
import { defenseExecDeepCourse } from './defenseContractingA3';

// Defense Contracting Track — Track B (Operations)
import { defenseOpsAwarenessCourse } from './defenseContractingB1';
import { defenseOpsPracticalCourse } from './defenseContractingB2';
import { defenseOpsDeepCourse } from './defenseContractingB3';

// Defense Contracting Track — Track C (BD)
import { defenseBDAwarenessCourse } from './defenseContractingC1';
import { defenseBDPracticalCourse } from './defenseContractingC2';
import { defenseBDDeepCourse } from './defenseContractingC3';

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
  // Defense Contracting — Track A
  defenseExecAwarenessCourse,
  defenseExecPracticalCourse,
  defenseExecDeepCourse,
  // Defense Contracting — Track B
  defenseOpsAwarenessCourse,
  defenseOpsPracticalCourse,
  defenseOpsDeepCourse,
  // Defense Contracting — Track C
  defenseBDAwarenessCourse,
  defenseBDPracticalCourse,
  defenseBDDeepCourse,
];

export const coursesByTrack = {
  'lss-certification': allCourses.filter(c => c.track === 'lss-certification'),
  'lean-foundations': allCourses.filter(c => c.track === 'lean-foundations'),
  'leadership': allCourses.filter(c => c.track === 'leadership'),
  'data-management': allCourses.filter(c => c.track === 'data-management'),
  'defense-contracting': allCourses.filter(c => c.track === 'defense-contracting'),
};

export function getCourseById(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}
