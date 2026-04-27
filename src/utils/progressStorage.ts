import type { StoredProgress, UserProgress } from "../types/course";

const STORAGE_KEY = "learn_kinyarwanda_progress";

export function getStoredProgress(): StoredProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: StoredProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

export function getCourseProgress(courseId: string): UserProgress | null {
  const stored = getStoredProgress();
  return stored[courseId] || null;
}

export function initializeCourseProgress(courseId: string): UserProgress {
  return {
    courseId,
    currentStepIndex: 0,
    completedSteps: [],
    totalXp: 0,
    hearts: 3,
    isComplete: false,
    lastAccessed: Date.now(),
  };
}

export function updateCourseProgress(
  courseId: string,
  stepIndex: number,
  xpEarned: number,
  stepId: number,
  isStepComplete: boolean,
  totalSteps: number,
): UserProgress {
  const stored = getStoredProgress();
  const current = stored[courseId] || initializeCourseProgress(courseId);

  if (isStepComplete && !current.completedSteps.includes(stepId)) {
    current.completedSteps.push(stepId);
    current.totalXp += xpEarned;
  }

  current.currentStepIndex = stepIndex;
  current.lastAccessed = Date.now();
  current.isComplete = current.completedSteps.length === totalSteps;

  stored[courseId] = current;
  saveProgress(stored);

  return current;
}

export function loseLiveProgress(courseId: string): UserProgress {
  const stored = getStoredProgress();
  const current = stored[courseId];

  if (current && current.hearts > 0) {
    current.hearts -= 1;
    current.lastAccessed = Date.now();
    stored[courseId] = current;
    saveProgress(stored);
  }

  return current;
}

export function resetCourseProgress(courseId: string): UserProgress {
  const stored = getStoredProgress();
  const reset = initializeCourseProgress(courseId);
  stored[courseId] = reset;
  saveProgress(stored);
  return reset;
}

export function getProgress(courseId: string) {
  let progress = getCourseProgress(courseId);
  if (!progress) {
    progress = initializeCourseProgress(courseId);
  }
  return progress;
}
