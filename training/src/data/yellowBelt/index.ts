import type { Course } from '../../types/course';
import { modules1to4 } from './modules1to4';
import { modules5to8 } from './modules5to8';

export const yellowBeltCourse: Course = {
  id: 'yellow-belt',
  belt: 'yellow',
  title: 'Yellow Belt',
  subtitle: 'Lean Six Sigma Foundations',
  description: 'Build a solid foundation in Lean Six Sigma principles, the DMAIC framework, process mapping, data analysis, and root cause investigation. Gain the skills to contribute meaningfully to improvement projects and drive change in your daily work.',
  status: 'available',
  estimatedHours: 7,
  modules: [...modules1to4, ...modules5to8],
};
