# Course Structure Guide

This document explains how to create and structure courses in Learn Kinyarwanda.

## Overview

Courses are defined as TypeScript objects that contain steps of different types. Users progress through courses, answering questions and completing challenges. Progress is stored locally in browser localStorage.

## Course Object Structure

```typescript
interface Course {
  id: string; // Unique identifier (used in URLs)
  title: string; // Display name
  description: string; // Short description shown in course list
  icon: string; // Emoji icon for visual identification
  color: string; // Hex color used in UI (e.g., "#39d353")
  difficulty: "beginner" | "intermediate" | "advanced";
  steps: CourseStep[]; // Array of lesson/quiz steps
  duration: number; // Estimated duration in minutes
}
```

## Step Types

### 1. Lesson Step

A simple informational step that automatically advances to the next one.

```typescript
{
  id: 1,
  type: "lesson",
  icon: "🥥",           // Emoji icon
  title: "Welcome to Cocobase",
  content: "HTML content describing the lesson...",
  xp: 0                 // No XP for reading-only lessons
}
```

### 2. Code Lesson Step

A lesson that displays code snippets for reference.

```typescript
{
  id: 2,
  type: "code_lesson",
  title: "Core Methods",
  content: "Description of what's shown in the code...",
  codeSnippet: `const db = createClient(API_KEY);
const users = db.from('users').get();`,
  xp: 0
}
```

### 3. Quiz Step

Multiple choice question with one correct answer.

```typescript
{
  id: 3,
  type: "quiz",
  question: "What does BaaS stand for?",
  options: [
    "Build-and-apply Service",
    "Backend-as-a-Service",
    "Browser Application Suite",
    "Base API Standard"
  ],
  correct: 1,           // Index of correct option (0-based)
  explanation: "BaaS = Backend-as-a-Service...",
  xp: 10
}
```

### 4. Code Quiz Step

Multiple choice question where options contain code snippets.

```typescript
{
  id: 4,
  type: "quiz_code",
  question: "Which snippet correctly initialises the client?",
  options: [
    `import CocoBase from 'cocobase';\nconst db = CocoBase.init('KEY');`,
    `import { createClient } from 'cocobase';\nconst db = createClient('KEY');`,
    // ... more options
  ],
  correct: 1,
  explanation: "Use the named export createClient()...",
  xp: 15
}
```

### 5. True/False Step

Binary choice question.

```typescript
{
  id: 5,
  type: "true_false",
  question: "Cocobase supports real-time subscriptions.",
  correct: true,        // or false
  explanation: "Correct! Cocobase has built-in real-time listeners...",
  xp: 10
}
```

### 6. Fill Code Step

Fill in the blanks in code using a word bank.

```typescript
{
  id: 6,
  type: "fill_code",
  question: "Fill in the blanks to query users:",
  codeTemplate: [
    "const res = await db.",
    "('users').",
    "({ role: 'admin' });"
  ],
  blanks: [null, null],  // Positions where blanks appear
  blankAnswers: ["from", "where"],  // Correct answers
  wordBank: ["from", "where", "select", "filter", "get", "query"],
  explanation: "`from()` selects collection; `where()` filters...",
  xp: 15
}
```

### 7. Match Step

Match terms to their definitions.

```typescript
{
  id: 7,
  type: "match",
  question: "Match each method to its purpose:",
  pairs: [
    { term: "from()", def: "Select collection" },
    { term: "insert()", def: "Add a record" },
    { term: "subscribe()", def: "Real-time updates" },
    { term: "auth.login()", def: "Authenticate user" }
  ],
  explanation: "These four methods form the core API...",
  xp: 15
}
```

### 8. Reorder Step

Arrange items in the correct order.

```typescript
{
  id: 8,
  type: "reorder",
  question: "Arrange these lines to insert a record correctly:",
  items: [
    { id: "a", text: "await db.from('posts').insert(data)" },
    { id: "b", text: "import { createClient } from 'cocobase'" },
    { id: "c", text: "const data = { title: 'Hello' }" },
    { id: "d", text: "const db = createClient(API_KEY)" }
  ],
  correct: ["b", "d", "c", "a"],  // Order IDs
  explanation: "Import → init → prepare → insert!",
  xp: 15
}
```

### 9. Short Answer Step

Type a short text answer.

```typescript
{
  id: 9,
  type: "short_answer",
  question: "What method do you call for real-time changes?",
  placeholder: "Type the method name…",
  correct: "subscribe",      // Exact text to match
  caseSensitive: false,       // Optional: true for case matching
  hint: "db.from('table')._____(callback)",  // Optional: hints for user
  explanation: "`subscribe()` registers a real-time listener...",
  xp: 15
}
```

## Creating a New Course

### Step 1: Define the course object

```typescript
export const MyNewCourse: Course = {
  id: "my-course",
  title: "My Course Title",
  description: "Brief description",
  icon: "🎯",
  color: "#39d353",
  difficulty: "beginner",
  duration: 20,
  steps: [
    // Define steps here
  ],
};
```

### Step 2: Add steps

Mix different step types to create an engaging learning experience:

- Start with **Lesson** or **Code Lesson** to introduce concepts
- Follow with **Quiz** or **True/False** for quick checks
- Use **Fill Code** or **Match** for deeper practice
- End with **Reorder** or **Short Answer** for application

### Step 3: Register the course

In `src/data/courses.ts`, add your course to the `ALL_COURSES` array:

```typescript
export const ALL_COURSES: Course[] = [
  CocobaseIntro,
  QueriesCourse,
  MyNewCourse, // Add here
  // ... other courses
];
```

## Best Practices

### Content Design

- **Keep it concise**: Lessons should be focused and brief
- **Progressive difficulty**: Start simple, gradually increase complexity
- **Mix step types**: Vary between reading, quizzes, and practical exercises
- **Provide explanations**: Always explain correct answers, even for simple questions

### Scoring

- **Lesson/Code Lesson**: 0 XP (informational only, no correct answer needed)
- **Simple quizzes**: 10 XP
- **Complex quizzes**: 15-20 XP
- **Practical exercises**: 15-20 XP

### User Experience

- **3 hearts**: Users get 3 wrong answers before restarting
- **Auto-advance**: Lesson and Code Lesson steps automatically move to the next step
- **Feedback**: Always provide clear feedback for correct and incorrect answers
- **Progress saving**: All progress is automatically saved to localStorage

## Example: Complete Course

```typescript
export const AdvancedQueryCourse: Course = {
  id: "advanced-queries",
  title: "Advanced Queries",
  description: "Master complex querying with filters and operators",
  icon: "🔍",
  color: "#58a6ff",
  difficulty: "advanced",
  duration: 30,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Query Operators",
      content: "Learn advanced operators for filtering data...",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Comparison Operators",
      content: "Use >, <, >=, <=, != in your queries",
      codeSnippet: `const expensive = await db
  .from('products')
  .where({ price: { '>': 100 } })
  .get();`,
      xp: 0,
    },
    {
      id: 3,
      type: "quiz_code",
      question: "How to query price > 50?",
      options: [
        "db.from('products').where({ price > 50 })",
        "db.from('products').where({ price: { '>': 50 } })",
        // ...
      ],
      correct: 1,
      explanation: "Use object syntax with operators",
      xp: 15,
    },
    {
      id: 4,
      type: "short_answer",
      question: "What operator for OR conditions?",
      placeholder: "Enter operator",
      correct: "$or",
      caseSensitive: true,
      explanation: "Use $or array for logical OR",
      xp: 20,
    },
  ],
};
```

## Local Storage

Progress is automatically saved to localStorage under the key `learn_kinyarwanda_progress`. Each course stores:

- Current step index
- Completed steps
- Total XP earned
- Hearts remaining
- Is course complete
- Last accessed timestamp

Users can clear their browser cache to reset progress.

## Content Guidelines

### Writing Explanations

- Be encouraging and supportive
- Explain the "why" not just the "what"
- Reference relevant documentation or concepts
- Keep it professional but friendly

### Code Examples

- Use realistic, production-like examples
- Include comments in complex code
- Avoid overly simplified or toy examples
- Match the project's actual API

### Difficulty Levels

- **Beginner**: Assumes no prior knowledge, covers basics
- **Intermediate**: Assumes completion of beginner courses, introduces advanced concepts
- **Advanced**: Requires intermediate knowledge, covers edge cases and optimization
