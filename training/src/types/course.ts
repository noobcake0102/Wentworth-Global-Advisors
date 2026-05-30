export type QuestionType = 'multiple-choice' | 'true-false';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  estimatedMinutes: number;
  content: LessonContent[];
}

export type LessonContent =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; level: 2 | 3 }
  | { type: 'callout'; variant: 'info' | 'tip' | 'warning' | 'example'; title?: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'simulation'; simulationId: string; title: string; description: string }
  | { type: 'chart'; chartId: string; title: string; description: string }
  | { type: 'diagram'; diagramId: string; title: string }
  | { type: 'key-terms'; terms: { term: string; definition: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  estimatedMinutes: number;
  learningObjectives: string[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export type BeltLevel = 'yellow' | 'green' | 'black';
export type CourseStatus = 'available' | 'coming-soon';
export type CourseTrack = 'lss-certification' | 'lean-foundations' | 'leadership' | 'data-management';

export interface Course {
  id: string;
  belt?: BeltLevel;
  track: CourseTrack;
  title: string;
  subtitle: string;
  description: string;
  status: CourseStatus;
  estimatedHours: number;
  color: string;       // accent color for the course card
  icon: string;        // emoji icon
  modules: Module[];
}
