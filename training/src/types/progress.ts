export interface LessonProgress {
  completed: boolean;
  completedAt?: string;
}

export interface ModuleProgress {
  lessons: Record<string, LessonProgress>;
  quizScore?: number;
  quizPassed?: boolean;
  quizAttempts: number;
  quizCompletedAt?: string;
}

export interface CourseProgress {
  modules: Record<string, ModuleProgress>;
  completedAt?: string;
  certificateUnlocked: boolean;
}

export interface ProgressStore {
  courses: Record<string, CourseProgress>;
}
