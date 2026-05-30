import type { Course } from '../types/course';
import { yellowBeltCourse } from './yellowBelt';

export const greenBeltCourse: Course = {
  id: 'green-belt',
  belt: 'green',
  title: 'Green Belt',
  subtitle: 'Lean Six Sigma Practitioner',
  description: 'Lead improvement projects with advanced statistical tools, project management skills, and deeper Lean methodology. Designed for practitioners ready to drive cross-functional change.',
  status: 'coming-soon',
  estimatedHours: 40,
  modules: [],
};

export const blackBeltCourse: Course = {
  id: 'black-belt',
  belt: 'black',
  title: 'Black Belt',
  subtitle: 'Lean Six Sigma Expert',
  description: 'Master advanced statistical analysis, design of experiments, and enterprise-wide deployment strategy. The pinnacle of LSS practitioner certification.',
  status: 'coming-soon',
  estimatedHours: 80,
  modules: [],
};

export const allCourses: Course[] = [yellowBeltCourse, greenBeltCourse, blackBeltCourse];

export function getCourseById(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}
