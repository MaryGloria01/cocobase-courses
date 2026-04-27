// ─── COURSE TYPES ─────────────────────────────────────────────────────────────

export type LessonType =
  | "lesson"
  | "quiz"
  | "quiz_code"
  | "true_false"
  | "fill_code"
  | "match"
  | "reorder"
  | "short_answer"
  | "code_lesson";

export interface BaseLessonStep {
  id: number;
  type: LessonType;
  xp?: number;
}

export interface LessonStep extends BaseLessonStep {
  type: "lesson" | "code_lesson";
  icon?: string;
  title: string;
  content: string;
  codeSnippet?: string;
}

export interface QuizStep extends BaseLessonStep {
  type: "quiz";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  xp: number;
}

export interface QuizCodeStep extends BaseLessonStep {
  type: "quiz_code";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  xp: number;
}

export interface TrueFalseStep extends BaseLessonStep {
  type: "true_false";
  question: string;
  correct: boolean;
  explanation: string;
  xp: number;
}

export interface FillCodeStep extends BaseLessonStep {
  type: "fill_code";
  question: string;
  codeTemplate: string[];
  blanks: (null | string)[];
  blankAnswers: string[];
  wordBank: string[];
  explanation: string;
  xp: number;
}

export interface MatchStep extends BaseLessonStep {
  type: "match";
  question: string;
  pairs: Array<{ term: string; def: string }>;
  explanation: string;
  xp: number;
}

export interface ReorderStep extends BaseLessonStep {
  type: "reorder";
  question: string;
  items: Array<{ id: string; text: string }>;
  correct: string[];
  explanation: string;
  xp: number;
}

export interface ShortAnswerStep extends BaseLessonStep {
  type: "short_answer";
  question: string;
  placeholder: string;
  correct: string;
  caseSensitive: boolean;
  hint?: string;
  explanation: string;
  xp: number;
}

export type CourseStep =
  | LessonStep
  | QuizStep
  | QuizCodeStep
  | TrueFalseStep
  | FillCodeStep
  | MatchStep
  | ReorderStep
  | ShortAnswerStep;

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  steps: CourseStep[];
  duration: number; // in minutes
}

export interface UserProgress {
  courseId: string;
  currentStepIndex: number;
  completedSteps: number[];
  totalXp: number;
  hearts: number;
  isComplete: boolean;
  lastAccessed: number;
}

export interface StoredProgress {
  [courseId: string]: UserProgress;
}
