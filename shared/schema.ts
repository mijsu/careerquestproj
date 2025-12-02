import { z } from "zod";

// Zod schemas for validation (Firestore doesn't need table definitions)
export const insertUserSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  displayName: z.string().min(1),
  pathSelectionMode: z.string().optional(),
  currentCareerPathId: z.string().nullable().optional(),
});

export const registerRequestSchema = insertUserSchema
  .extend({
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

// TypeScript types for Firestore documents
export type InsertUser = z.infer<typeof insertUserSchema>;
export type RegisterRequest = z.infer<typeof registerRequestSchema>;

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  displayName: string;
  level: number;
  xp: number;
  totalXp: number;
  currentCareerPathId: string | null;
  pathSelectionMode: string;
  hasCompletedInterestAssessment: boolean;
  isAdmin: boolean;
  currentStreak: number;
  lastLoginDate?: Date;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface CareerPath {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  progressionRanks: string[];
  requiredSkills: string[];
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: string;
  requirement: string;
  createdAt: Date;
}

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: Date;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  careerPathId?: string;
  requiredLevel: number;
  xpReward: number;
  timeLimit?: number;
  isFinalAssessment: boolean;
  createdAt: Date;
}

export interface Question {
  id: string;
  quizId: string;
  questionText: string;
  questionType: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  category?: string;
  createdAt: Date;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  completedAt: Date;
  wasTabSwitched: boolean;
  timeSpent?: number;
}

export interface QuestionAttempt {
  id: string;
  userId: string;
  questionId: string;
  quizAttemptId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  category?: string;
  answeredAt: Date;
}

export interface CodeChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  careerPathId?: string;
  requiredLevel: number;
  xpReward: number;
  starterCode: string;
  testCases: Array<{ input: string; expectedOutput: string }>;
  supportedLanguages: string[];
  createdAt: Date;
}

export interface ChallengeAttempt {
  id: string;
  userId: string;
  challengeId: string;
  code: string;
  language: string;
  passed: boolean;
  xpEarned: number;
  submittedAt: Date;
}

export interface InterestResponse {
  id: string;
  userId: string;
  questionId: number;
  response: string;
  completedAt: Date;
}

export interface DailyChallenge {
  id: string;
  userId: string;
  challengeType: string;
  challengeId: string;
  assignedDate: Date;
  completed: boolean;
  completedAt?: Date;
}

export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  details: string;
  status: string;
  ipAddress?: string;
  createdAt: Date;
}

export interface SyllabusUpload {
  id: string;
  uploadedBy: string;
  fileName: string;
  careerPathId?: string;
  questionsGenerated: number;
  uploadedAt: Date;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  careerPath: string | null; // null for general modules
  requiredLevel: number;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  pdfUrl?: string; // Optional PDF file URL for lessons
  type: "theory" | "practice" | "quiz";
  order: number;
  xpReward: number;
}

export interface UserProgress {
  id: string;
  userId: string;
  moduleId: string;
  lessonId: string;
  completed: boolean;
  completedAt?: string;
  score?: number;
}