import { useState, useCallback, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import type { ProgressStore, CourseProgress, ModuleProgress } from '../types/progress';

const STORAGE_KEY = 'wga-lss-progress';

function loadLocalStore(): ProgressStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ProgressStore;
  } catch {}
  return { courses: {} };
}

function saveLocalStore(store: ProgressStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function createDebouncer(delay = 1500) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (fn: () => void) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

export function useProgress() {
  const { user, session } = useAuth();
  const [store, setStore] = useState<ProgressStore>(loadLocalStore);
  const pendingSync = useRef<ProgressStore | null>(null);
  const debounce = useRef(createDebouncer(1500)).current;

  // Pull progress from Supabase when user signs in
  useEffect(() => {
    if (!user || !session) {
      setStore(loadLocalStore());
      return;
    }

    supabase
      .from('user_progress')
      .select('progress_data')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) { console.error('[WGA] Failed to load progress:', error.message); return; }
        if (data?.progress_data) {
          const merged = mergeStores(loadLocalStore(), data.progress_data as ProgressStore);
          setStore(merged);
          saveLocalStore(merged);
        }
      });
  }, [user?.id]);

  function syncToSupabase(newStore: ProgressStore) {
    if (!user || !session) return;
    pendingSync.current = newStore;
    debounce(async () => {
      const toSync = pendingSync.current;
      if (!toSync || !user) return;
      const { error } = await supabase
        .from('user_progress')
        .upsert({ user_id: user.id, progress_data: toSync, updated_at: new Date().toISOString() }, { onConflict: 'user_id' });
      if (error) console.error('[WGA] Failed to sync progress:', error.message);
    });
  }

  function update(updater: (prev: ProgressStore) => ProgressStore) {
    setStore(prev => {
      const next = updater(prev);
      saveLocalStore(next);
      syncToSupabase(next);
      return next;
    });
  }

  const getCourseProgress = useCallback((courseId: string): CourseProgress => {
    return store.courses[courseId] ?? { modules: {}, certificateUnlocked: false };
  }, [store]);

  const getModuleProgress = useCallback((courseId: string, moduleId: string): ModuleProgress => {
    const cp = store.courses[courseId];
    return cp?.modules[moduleId] ?? { lessons: {}, quizAttempts: 0 };
  }, [store]);

  const markLessonComplete = useCallback((courseId: string, moduleId: string, lessonId: string) => {
    update(prev => {
      const next = structuredClone(prev);
      if (!next.courses[courseId]) next.courses[courseId] = { modules: {}, certificateUnlocked: false };
      if (!next.courses[courseId].modules[moduleId]) next.courses[courseId].modules[moduleId] = { lessons: {}, quizAttempts: 0 };
      next.courses[courseId].modules[moduleId].lessons[lessonId] = { completed: true, completedAt: new Date().toISOString() };
      return next;
    });
  }, [user?.id, session]);

  const saveQuizResult = useCallback((courseId: string, moduleId: string, score: number, passed: boolean) => {
    update(prev => {
      const next = structuredClone(prev);
      if (!next.courses[courseId]) next.courses[courseId] = { modules: {}, certificateUnlocked: false };
      if (!next.courses[courseId].modules[moduleId]) next.courses[courseId].modules[moduleId] = { lessons: {}, quizAttempts: 0 };
      const mp = next.courses[courseId].modules[moduleId];
      mp.quizScore = score;
      mp.quizPassed = passed;
      mp.quizAttempts = (mp.quizAttempts ?? 0) + 1;
      mp.quizCompletedAt = new Date().toISOString();
      return next;
    });
  }, [user?.id, session]);

  const checkAndUnlockCertificate = useCallback((courseId: string, course: { modules: { id: string; quiz: unknown[] }[] }) => {
    update(prev => {
      const cp = prev.courses[courseId];
      if (!cp) return prev;
      const allPassed = course.modules.every(m => cp.modules[m.id]?.quizPassed);
      if (!allPassed) return prev;
      const next = structuredClone(prev);
      next.courses[courseId].certificateUnlocked = true;
      next.courses[courseId].completedAt = new Date().toISOString();
      return next;
    });
  }, [user?.id, session]);

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
      total += m.lessons.length + 1;
      const mp = cp.modules[m.id];
      if (mp) {
        done += Object.values(mp.lessons).filter(l => l.completed).length;
        if (mp.quizPassed) done += 1;
      }
    }
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }, [store]);

  const resetCourse = useCallback((courseId: string) => {
    update(prev => {
      const next = structuredClone(prev);
      delete next.courses[courseId];
      return next;
    });
  }, [user?.id, session]);

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

function mergeStores(local: ProgressStore, remote: ProgressStore): ProgressStore {
  const merged: ProgressStore = { courses: {} };
  const allCourseIds = new Set([...Object.keys(local.courses), ...Object.keys(remote.courses)]);

  for (const courseId of allCourseIds) {
    const lc = local.courses[courseId];
    const rc = remote.courses[courseId];
    if (!lc && rc) { merged.courses[courseId] = structuredClone(rc); continue; }
    if (!rc && lc) { merged.courses[courseId] = structuredClone(lc); continue; }
    if (!lc || !rc) continue;

    const allModuleIds = new Set([...Object.keys(lc.modules), ...Object.keys(rc.modules)]);
    const modules: CourseProgress['modules'] = {};

    for (const moduleId of allModuleIds) {
      const lm = lc.modules[moduleId];
      const rm = rc.modules[moduleId];
      if (!lm && rm) { modules[moduleId] = structuredClone(rm); continue; }
      if (!rm && lm) { modules[moduleId] = structuredClone(lm); continue; }
      if (!lm || !rm) continue;

      const allLessonIds = new Set([...Object.keys(lm.lessons), ...Object.keys(rm.lessons)]);
      const lessons: ModuleProgress['lessons'] = {};
      for (const lid of allLessonIds) {
        const ll = lm.lessons[lid];
        const rl = rm.lessons[lid];
        lessons[lid] = (ll?.completed || rl?.completed)
          ? { completed: true, completedAt: ll?.completedAt ?? rl?.completedAt }
          : { completed: false };
      }

      modules[moduleId] = {
        lessons,
        quizAttempts: Math.max(lm.quizAttempts ?? 0, rm.quizAttempts ?? 0),
        quizPassed: lm.quizPassed || rm.quizPassed,
        quizScore: lm.quizPassed ? lm.quizScore : rm.quizScore,
        quizCompletedAt: lm.quizCompletedAt ?? rm.quizCompletedAt,
      };
    }

    merged.courses[courseId] = {
      modules,
      certificateUnlocked: lc.certificateUnlocked || rc.certificateUnlocked,
      completedAt: lc.completedAt ?? rc.completedAt,
    };
  }

  return merged;
}
