import { useState, useCallback } from 'react';
import type { ProgressStore, CourseProgress, ModuleProgress } from '../types/progress';

const STORAGE_KEY = 'wga-lss-progress';

function loadStore(): ProgressStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ProgressStore;
  } catch {}
  return { courses: {} };
}

function saveStore(store: ProgressStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function useProgress() {
  const [store, setStore] = useState<ProgressStore>(loadStore);

  const getCourseProgress = useCallback((courseId: string): CourseProgress => {
    return store.courses[courseId] ?? { modules: {}, certificateUnlocked: false };
  }, [store]);

  const getModuleProgress = useCallback((courseId: string, moduleId: string): ModuleProgress => {
    const cp = store.courses[courseId];
    return cp?.modules[moduleId] ?? { lessons: {}, quizAttempts: 0 };
  }, [store]);

  const markLessonComplete = useCallback((courseId: string, moduleId: string, lessonId: string) => {
    setStore(prev => {
      const next = structuredClone(prev);
      if (!next.courses[courseId]) next.courses[courseId] = { modules: {}, certificateUnlocked: false };
      if (!next.courses[courseId].modules[moduleId]) next.courses[courseId].modules[moduleId] = { lessons: {}, quizAttempts: 0 };
      next.courses[courseId].modules[moduleId].lessons[lessonId] = {
        completed: true,
        completedAt: new Date().toISOString(),
      };
      saveStore(next);
      return next;
    });
  }, []);

  const saveQuizResult = useCallback((courseId: string, moduleId: string, score: number, passed: boolean) => {
    setStore(prev => {
      const next = structuredClone(prev);
      if (!next.courses[courseId]) next.courses[courseId] = { modules: {}, certificateUnlocked: false };
      if (!next.courses[courseId].modules[moduleId]) next.courses[courseId].modules[moduleId] = { lessons: {}, quizAttempts: 0 };
      const mp = next.courses[courseId].modules[moduleId];
      mp.quizScore = score;
      mp.quizPassed = passed;
      mp.quizAttempts = (mp.quizAttempts ?? 0) + 1;
      mp.quizCompletedAt = new Date().toISOString();
      saveStore(next);
      return next;
    });
  }, []);

  const checkAndUnlockCertificate = useCallback((courseId: string, course: { modules: { id: string; quiz: unknown[] }[] }) => {
    setStore(prev => {
      const cp = prev.courses[courseId];
      if (!cp) return prev;
      const allPassed = course.modules.every(m => cp.modules[m.id]?.quizPassed);
      if (!allPassed) return prev;
      const next = structuredClone(prev);
      next.courses[courseId].certificateUnlocked = true;
      next.courses[courseId].completedAt = new Date().toISOString();
      saveStore(next);
      return next;
    });
  }, []);

  const getLessonCompletionCount = useCallback((courseId: string, moduleId: string, _totalLessons?: number) => {
    const mp = store.courses[courseId]?.modules[moduleId];
    if (!mp) return 0;
    return Object.values(mp.lessons).filter(l => l.completed).length;
  }, [store]);

  const getCourseCompletionPercent = useCallback((courseId: string, course: { modules: { id: string; lessons: { id: string }[] }[] }) => {
    const cp = store.courses[courseId];
    if (!cp) return 0;
    let total = 0, done = 0;
    for (const m of course.modules) {
      total += m.lessons.length + 1; // +1 for quiz
      const mp = cp.modules[m.id];
      if (mp) {
        done += Object.values(mp.lessons).filter(l => l.completed).length;
        if (mp.quizPassed) done += 1;
      }
    }
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }, [store]);

  const resetCourse = useCallback((courseId: string) => {
    setStore(prev => {
      const next = structuredClone(prev);
      delete next.courses[courseId];
      saveStore(next);
      return next;
    });
  }, []);

  return {
    store,
    getCourseProgress,
    getModuleProgress,
    markLessonComplete,
    saveQuizResult,
    checkAndUnlockCertificate,
    getLessonCompletionCount,
    getCourseCompletionPercent,
    resetCourse,
  };
}
