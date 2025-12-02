# CareerQuest Components Documentation

## Overview

This document provides a comprehensive guide to all components used in the CareerQuest system, including UI components, feature components, and the external packages that power them.

---

## Table of Contents

1. [UI Framework & Component Library](#ui-framework--component-library)
2. [External Packages](#external-packages)
3. [Feature Components](#feature-components)
4. [UI Components](#ui-components)
5. [Utilities & Hooks](#utilities--hooks)

---

## UI Framework & Component Library

### shadcn/ui
**Version:** Latest (New York style)  
**Location:** `client/src/components/ui/`

shadcn/ui is a collection of accessible, reusable component primitives built on Radix UI and Tailwind CSS. It provides the foundation for all custom UI components in CareerQuest.

**Configuration:**
- Style: New York
- CSS Variables: Enabled
- Base Color: Neutral
- Framework: React (Non-RSC)
- TypeScript: Yes

**Key Features:**
- Built on Radix UI for accessibility
- Tailwind CSS styling
- Fully customizable and copy-paste components
- TypeScript support

---

## External Packages

### Design & UI Framework

#### Radix UI Components (^1.x)
Provides unstyled, accessible component primitives:

| Package | Purpose |
|---------|---------|
| `@radix-ui/react-accordion` | Collapsible content sections |
| `@radix-ui/react-alert-dialog` | Accessible alert dialogs |
| `@radix-ui/react-avatar` | User profile images |
| `@radix-ui/react-checkbox` | Accessible checkboxes |
| `@radix-ui/react-dialog` | Modal dialogs |
| `@radix-ui/react-dropdown-menu` | Dropdown menus |
| `@radix-ui/react-hover-card` | Hover information cards |
| `@radix-ui/react-label` | Form labels |
| `@radix-ui/react-navigation-menu` | Navigation menus |
| `@radix-ui/react-popover` | Floating content |
| `@radix-ui/react-progress` | Progress bars |
| `@radix-ui/react-radio-group` | Radio button groups |
| `@radix-ui/react-scroll-area` | Scrollable content areas |
| `@radix-ui/react-select` | Dropdown selects |
| `@radix-ui/react-slider` | Range sliders |
| `@radix-ui/react-switch` | Toggle switches |
| `@radix-ui/react-tabs` | Tab navigation |
| `@radix-ui/react-toast` | Toast notifications |
| `@radix-ui/react-toggle` | Toggle buttons |
| `@radix-ui/react-tooltip` | Hover tooltips |

#### Tailwind CSS (^3.4.17)
Utility-first CSS framework with plugins:
- `@tailwindcss/typography` - Prose styling
- `@tailwindcss/vite` - Vite integration
- `tailwindcss-animate` - Animation utilities
- `tw-animate-css` - CSS animation support

#### Class Utilities
- `class-variance-authority` (^0.7.1) - Component variant management
- `clsx` (^2.1.1) - Conditional className merging
- `tailwind-merge` (^2.6.0) - Tailwind class merging

### Animation & Motion

#### Framer Motion (^11.13.1)
Production-ready motion library for React animations and transitions:
- Page transitions
- Component entrance/exit animations
- Gesture animations
- Layout animations

#### Embla Carousel (^8.6.0)
Lightweight carousel/slider component library
- **Used For:** Image galleries, content carousels
- **Features:** Touch support, responsive, performant

### Icons

#### Lucide React (^0.453.0)
Beautiful, consistent SVG icon library with 450+ icons
- Used throughout all components for UI icons
- Customizable size and color
- **Examples:** Trophy, Users, FileText, Settings, etc.

#### React Icons (^5.4.0)
Additional icon library with multiple icon sets
- Fallback icon options
- Icon font compatibility

### Code Editing

#### Monaco Editor for React (^4.7.0)
Lightweight React wrapper for Monaco Editor
- **Used For:** `CodeEditor` component
- **Features:** Syntax highlighting, multiple language support, code completion

#### UIW React Textarea Code Editor (^3.1.1)
CodeMirror-based code editor component
- Lightweight alternative for code input
- Syntax highlighting
- **Used In:** Quiz and coding challenge components

### Form Management

#### React Hook Form (^7.55.0)
Performant, flexible form validation library
- **Features:** Minimal re-renders, easy validation, integration with UI libraries
- **Used With:** Zod for schema validation

#### @hookform/resolvers (^3.10.0)
Schema validation adapters for React Hook Form
- Integration with Zod validation schemas

#### Zod (^3.24.2)
TypeScript-first schema validation with static type inference
- Form validation schemas
- API response validation
- **Plugin:** `drizzle-zod` for database schema validation

#### Zod Validation Error (^3.4.0)
Improved error formatting for Zod validation messages

### Data & State Management

#### TanStack React Query (^5.60.5)
Powerful server-state management library (formerly React Query)
- **Features:** Caching, synchronization, background updates
- **Used For:** API calls, quiz results, leaderboard data
- **Query Client:** Configured in `lib/queryClient.ts`

#### Wouter (^3.3.5)
Lightweight React routing library
- Smaller bundle size than React Router
- Hash-based and history API routing support

### UI Components & Patterns

#### cmdk (^1.1.1)
Fast command menu/command palette component
- Used for search functionality
- Keyboard navigation support

#### input-otp (^1.4.2)
One-Time Password (OTP) input component
- Multi-input PIN/OTP entry
- **Use Case:** Two-factor authentication

#### Vaul (^1.1.2)
Drawer component for React
- Sliding drawer/sheet UI
- Mobile-friendly
- **Integrated via:** UI drawer component

#### React Day Picker (^8.10.1)
Lightweight date picker component
- Calendar selection
- Date range support
- Accessible

#### React Resizable Panels (^2.1.7)
Resizable panel layout system
- **Use Case:** Dashboard layouts with movable panels
- **Features:** Persist layout state, keyboard support

#### Recharts (^2.15.2)
Composable charting library built on React components
- **Components:** Line charts, bar charts, pie charts, etc.
- **Used For:** Quiz results visualization, leaderboard charts

#### Embla Carousel React (^8.6.0) *(listed above)*
Used for carousel/slider functionality

### Authentication & Security

#### Firebase (^12.5.0)
Real-time database and authentication platform
- **Services:** Authentication, Cloud Firestore, Storage
- **Used For:** User management, quiz data, module storage

#### Firebase Admin (^13.5.0)
Node.js SDK for Firebase backend operations
- Server-side user management
- Database operations

#### Firebase Tools (^14.23.0)
CLI and utilities for Firebase development
- Local emulation
- Deployment management

#### Passport (^0.7.0)
Middleware for Express authentication
- **Strategy:** Local authentication (username/password)
- **Plugins:** 
  - `passport-local` (^1.0.0) - Local strategy
  - `openid-client` (^6.8.1) - OpenID Connect support

#### OpenAI (^6.7.0)
Official OpenAI API client for Node.js
- **Used For:** Career path recommendations, AI-guided content

#### Bcryptjs (^3.0.2)
Password hashing library
- Secure password storage
- Salt generation

### Backend & Infrastructure

#### Express (^4.21.2)
Fast, minimalist Node.js web framework
- REST API server
- Middleware support
- **Used With:** Helmet, rate limiting, authentication

#### Helmet (^8.1.0)
Secure Express.js by setting HTTP headers
- XSS protection
- Content Security Policy (CSP)
- Clickjacking protection

#### Express Rate Limit (^8.2.1)
Rate limiting middleware for Express
- Prevent brute-force attacks
- API request throttling

#### Express Session (^1.18.1)
Session middleware for Express
- Session storage management
- Cookie-based sessions
- **Store:** connect-pg-simple or memorystore

#### Connect PG Simple (^10.0.0)
PostgreSQL session store for Express
- Persistent session storage
- Production-ready

#### Memorystore (^1.6.7)
In-memory session store
- Development use
- Testing

### Database & ORM

#### Drizzle ORM (^0.39.1)
TypeScript-first ORM for SQL databases
- Type-safe queries
- SQL builder
- **Supported:** PostgreSQL, MySQL, SQLite

#### @neondatabase/serverless (^0.10.4)
Serverless PostgreSQL client
- Edge-compatible database access
- Connection pooling

#### Drizzle Kit (^0.31.4)
CLI and migration tool for Drizzle ORM
- **Commands:** Schema push, migrations, pulls

### File Handling & PDF

#### Multer (^2.0.2)
Middleware for handling file uploads
- Multi-part form data
- File type validation
- **Used For:** Syllabus uploads, document processing

#### PDF Parse (^2.4.5)
Extract text from PDF files
- **Used For:** Syllabus processing, content extraction

#### PDFKit (^0.17.2)
PDF generation library
- **Used For:** Creating downloadable certificates, reports

### Code Execution & Judge

#### Judge0 Integration
Third-party service for code execution and testing
- Compile and run code submissions
- **Supported Languages:** C++, Java, Python, JavaScript, etc.
- **Location:** `server/judge0.ts`

### UI/UX Utilities

#### Date Formatting
- `date-fns` (^3.6.0) - Modern date utility library
  - Parse, format, and manipulate dates
  - Timezone support

#### Motion & Animation
- `framer-motion` (^11.13.1) - Production motion library

#### Next Themes (^0.4.6)
Dark mode and theme management
- Persists user theme preference
- React-agnostic theme system
- **Used For:** ThemeToggle component

#### Memoizee (^0.4.17)
Advanced memoization library
- Function result caching
- Performance optimization

### Web Socket Support

#### WS (^8.18.0)
WebSocket library for Node.js
- Real-time bidirectional communication
- Used for live features (notifications, real-time chat)

### Build & Development

#### ESBuild (^0.25.0)
Ultra-fast JavaScript bundler
- Node.js server bundling
- Code splitting

#### PostCSS (^8.4.47)
CSS transformation tool
- Autoprefixer for browser compatibility
- Tailwind CSS processing

#### TypeScript (5.6.3)
Static type checker for JavaScript
- Type safety across project
- Modern language features

#### tsx (^4.20.5)
TypeScript execution for Node.js
- Run TS files directly
- Development scripts

#### Cross-env (^7.0.3)
Cross-platform environment variable support
- NODE_ENV setting
- Windows/Mac/Linux compatibility

#### Dotenv (^16.3.1)
Load environment variables from .env files
- Configuration management

---

## Feature Components

### Authentication Components

#### AuthModal
**Location:** `client/src/components/AuthModal.tsx`

Modal dialog for user login and registration with dual-tab interface.

**Features:**
- Tab-based interface (Login/Register)
- Password strength validation
- Email validation
- Password confirmation
- Learning path preference selection (AI-guided vs Manual)
- Deep linking via URL hash (#auth=login|register)

**Props:**
```tsx
{
  open: boolean;
  onClose: () => void;
  mode: "login" | "register";
}
```

**Dependencies:**
- Dialog, Tabs, Button, Input, Label, RadioGroup, Progress (UI)
- React Hook Form
- AuthContext (custom)
- useToast hook

---

### Quiz Components

#### QuizCard
**Location:** `client/src/components/QuizCard.tsx`

Interactive quiz question display with multi-question navigation and timer.

**Features:**
- Single question display with multiple options
- Progress tracking
- Previous/Next navigation
- Timer with warning states
- Auto-submit on timeout
- Answer tracking
- Validation (all questions must be answered)

**Props:**
```tsx
{
  questions: QuizQuestion[];
  timeLimit?: number;
  onAnswerChange?: (questionId: string, answerIndex: number) => void;
  onSubmit?: (forced?: boolean) => void;
  isSubmitting?: boolean;
}
```

#### QuizResultsTable
**Location:** `client/src/components/QuizResultsTable.tsx`

Admin table for viewing quiz submission results and analytics.

**Features:**
- User performance metrics
- Score display
- Completion status
- Sorting and filtering
- Pagination

---

### Code Challenge Components

#### CodeEditor
**Location:** `client/src/components/CodeEditor.tsx`

Multi-language code editor with syntax highlighting and templates.

**Features:**
- Language selection (JavaScript, Python, Java, C++)
- Syntax highlighting via CodeMirror
- Default code templates per language
- Reset button
- Submit functionality
- Dark theme editor

**Props:**
```tsx
{
  initialCode?: string;
  language?: string;
  onLanguageChange?: (language: string) => void;
  onSubmit?: (code: string) => void;
  isSubmitting?: boolean;
}
```

**Supported Languages:**
- JavaScript
- Python
- Java
- C++

---

### Admin Dashboard Components

#### AdminSidebar
**Location:** `client/src/components/AdminSidebar.tsx`

Navigation sidebar for admin panel with tab-based menu.

**Features:**
- Navigation menu with icons (Lucide React)
- Active tab highlighting
- Menu items:
  - Overview (Dashboard overview)
  - Users (User management)
  - Modules (Module management)
  - Quiz Results (Results analytics)
  - Syllabus Upload (Document upload)
  - Audit Logs (System audit trail)
  - Settings (Admin settings)

**Props:**
```tsx
{
  activeTab: string;
  onTabChange: (tab: string) => void;
}
```

#### AuditLogTable
**Location:** `client/src/components/AuditLogTable.tsx`

Display and filter audit logs of system events and user actions.

**Features:**
- Event logging
- User action tracking
- Timestamp display
- Filtering and sorting
- Pagination

#### ModuleManagement
**Location:** `client/src/components/ModuleManagement.tsx`

Component for creating, editing, and managing learning modules.

**Features:**
- CRUD operations for modules
- Module metadata editing
- Content organization
- Publish/unpublish functionality

#### SyllabusUpload
**Location:** `client/src/components/SyllabusUpload.tsx`

File upload component for syllabus documents.

**Features:**
- PDF file upload (using Multer)
- File validation
- Progress tracking
- Document processing (PDF Parse)
- Content extraction

---

### User Interface Components

#### BadgeCard
**Location:** `client/src/components/BadgeCard.tsx`

Display user achievement badges with metadata.

**Features:**
- Badge image display
- Achievement details
- Unlock date
- Badge tier/rarity indicators

#### ProgressRing
**Location:** `client/src/components/ProgressRing.tsx`

Circular progress indicator for skill levels or completion percentages.

**Features:**
- Animated progress ring
- Customizable size
- Label and percentage display
- Color coding by progress level

#### ProgressionRanks
**Location:** `client/src/components/ProgressionRanks.tsx`

Display user ranking progression and title.

**Features:**
- Rank display
- Title management
- XP progress tracking
- Tier visualization

#### DailyChallengeCard
**Location:** `client/src/components/DailyChallengeCard.tsx`

Daily coding challenge display card.

**Features:**
- Challenge description
- Difficulty level
- Reward indication
- Completion status
- Quick-start button

#### FeatureCard
**Location:** `client/src/components/FeatureCard.tsx`

Generic feature showcase card for landing pages.

**Features:**
- Icon support
- Title and description
- CTA button
- Responsive layout

#### CareerPathCard
**Location:** `client/src/components/CareerPathCard.tsx`

Display career path option with overview and selection.

**Features:**
- Career path name and description
- Required skills list
- Estimated duration
- Selection toggle
- Path difficulty

---

### Page Layout Components

#### HeroSection
**Location:** `client/src/components/HeroSection.tsx`

Landing page hero section with call-to-action.

**Features:**
- Headline and subheadline
- Background effects (ParticleBackground)
- CTA buttons
- Responsive layout

#### ParticleBackground
**Location:** `client/src/components/ParticleBackground.tsx`

Animated particle effect background using canvas/SVG.

**Features:**
- Particle animation
- Performance optimized
- Responsive sizing
- Customizable particle colors

#### ErrorBoundary
**Location:** `client/src/components/ErrorBoundary.tsx`

React Error Boundary for graceful error handling.

**Features:**
- Catch runtime errors
- Fallback UI display
- Error logging
- Recovery suggestions

---

### Form & Dialog Components

#### AddUserDialog
**Location:** `client/src/components/AddUserDialog.tsx`

Dialog for admin to create new user accounts.

**Features:**
- Form validation (React Hook Form + Zod)
- User role selection
- Email/password input
- Success confirmation

#### EditUserDialog
**Location:** `client/src/components/EditUserDialog.tsx`

Dialog for editing existing user information.

**Features:**
- Pre-filled user data
- Profile update
- Role modification
- Permission management

#### ConfirmationDialog
**Location:** `client/src/components/ConfirmationDialog.tsx`

Reusable confirmation dialog for destructive actions.

**Features:**
- Customizable message
- Cancel/Confirm actions
- Loading state
- Danger styling option

#### LogoutConfirmationDialog
**Location:** `client/src/components/LogoutConfirmationDialog.tsx`

Specialized confirmation dialog for logout action.

**Features:**
- Clear logout message
- Confirm/Cancel options
- Session cleanup

---

### Data Display Components

#### LeaderboardTable
**Location:** `client/src/components/LeaderboardTable.tsx`

Leaderboard display with user rankings.

**Features:**
- User ranking display
- Score sorting
- Badge indicators
- Real-time updates
- Pagination
- User filtering

#### SearchInput
**Location:** `client/src/components/SearchInput.tsx`

Search input field with suggestions.

**Features:**
- Real-time search
- Debounced queries
- Suggestion dropdown
- Icon support

---

### Utility Components

#### ThemeToggle
**Location:** `client/src/components/ThemeToggle.tsx`

Dark/Light mode toggle button.

**Features:**
- Theme switching
- Persistence (localStorage)
- System preference detection
- Uses next-themes package

#### NotificationBell
**Location:** `client/src/components/NotificationBell.tsx`

Notification display and notification menu.

**Features:**
- Unread notification count
- Notification list
- Mark as read
- Delete notifications
- Real-time notification updates

#### ProtectedRoute
**Location:** `client/src/components/ProtectedRoute.tsx`

Wrapper component for authenticated-only routes.

**Features:**
- Authentication check
- Redirect to login if not authenticated
- Loading state
- Role-based access control

#### InterestQuestionnaire
**Location:** `client/src/components/InterestQuestionnaire.tsx`

Assessment questionnaire for career path determination.

**Features:**
- Multi-step questionnaire
- Interest rating questions
- Progress indication
- Result calculation
- AI-powered path recommendations (via OpenAI)

---

## UI Components (Shadcn/ui Base Components)

### Form Components
- `input.tsx` - Text input fields
- `label.tsx` - Form labels
- `textarea.tsx` - Multiline text input
- `checkbox.tsx` - Checkbox inputs
- `radio-group.tsx` - Radio button groups
- `select.tsx` - Dropdown select
- `switch.tsx` - Toggle switches
- `slider.tsx` - Range slider
- `input-otp.tsx` - OTP input
- `form.tsx` - Form wrapper with React Hook Form integration
- `toggle.tsx` - Toggle buttons
- `toggle-group.tsx` - Button group toggles
- `button.tsx` - Base button component

### Layout Components
- `card.tsx` - Card container
- `accordion.tsx` - Accordion sections
- `collapsible.tsx` - Collapsible content
- `tabs.tsx` - Tab navigation
- `separator.tsx` - Visual separator line
- `scroll-area.tsx` - Scrollable area with custom scrollbar
- `resizable.tsx` - Resizable containers
- `sidebar.tsx` - Sidebar layout
- `sheet.tsx` - Modal sheet

### Dialog & Overlay Components
- `dialog.tsx` - Modal dialog
- `drawer.tsx` - Slide-out drawer
- `popover.tsx` - Floating popover
- `dropdown-menu.tsx` - Dropdown menu
- `context-menu.tsx` - Right-click context menu
- `hover-card.tsx` - Hover information card
- `tooltip.tsx` - Hover tooltip
- `alert-dialog.tsx` - Alert confirmation dialog
- `alert.tsx` - Alert message box

### Navigation Components
- `navigation-menu.tsx` - Navigation menu structure
- `menubar.tsx` - Menu bar
- `breadcrumb.tsx` - Breadcrumb navigation
- `pagination.tsx` - Pagination controls

### Data Display Components
- `table.tsx` - Sortable/filterable table
- `progress.tsx` - Progress bar
- `calendar.tsx` - Date calendar picker
- `badge.tsx` - Badge labels
- `avatar.tsx` - User avatar display
- `aspect-ratio.tsx` - Aspect ratio container

### Carousel
- `carousel.tsx` - Image/content carousel (uses embla-carousel)

### Charts
- `chart.tsx` - Chart components (wrapper for Recharts)

### Notifications
- `toast.tsx` - Toast notification
- `toaster.tsx` - Toast container

### Utility Components
- `skeleton.tsx` - Loading skeleton
- `command.tsx` - Command palette/search

---

## Utilities & Hooks

### Custom Hooks

#### useAuth
**Location:** `client/src/contexts/AuthContext.tsx`

Authentication context hook providing:
- `login(email, password)` - User login
- `register(userData)` - User registration
- `logout()` - User logout
- `user` - Current user data
- `isAuthenticated` - Boolean auth state

#### useToast
**Location:** `client/src/hooks/use-toast.ts`

Toast notification hook
- `toast(config)` - Show toast message
- Variants: default, destructive, success
- Auto-dismiss capability

#### useTabDetection
**Location:** `client/src/hooks/useTabDetection.ts`

Detect active tab/window focus
- Tab visibility tracking
- Auto-pause on tab blur
- Resume on tab focus

#### use-mobile
**Location:** `client/src/hooks/use-mobile.tsx`

Detect mobile viewport
- Breakpoint detection
- Responsive component behavior

### Utility Functions

#### passwordValidation.ts
**Location:** `client/src/lib/passwordValidation.ts`

Password strength validation utility:
- Minimum 8 characters
- Uppercase letter requirement
- Lowercase letter requirement
- Number requirement
- Special character requirement
- Strength scoring (0-5)
- Feedback messages

**Exported:**
```tsx
validatePasswordStrength(password): {
  isValid: boolean;
  score: number;
  feedback: string;
  checks: {
    minLength: boolean;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSpecial: boolean;
  }
}
```

#### utils.ts
**Location:** `client/src/lib/utils.ts`

Common utility functions:
- `cn()` - Class name merger (uses clsx + tailwind-merge)

#### firebase.ts
**Location:** `client/src/lib/firebase.ts`

Firebase initialization and configuration
- Firebase app instance
- Authentication provider
- Firestore database reference

#### queryClient.ts
**Location:** `client/src/lib/queryClient.ts`

TanStack React Query configuration
- Default query options
- Cache settings

---

## Backend Services

### Authentication (auth.ts)
- User registration
- Email/password validation
- Session management
- OAuth integration

### Daily Challenges (dailyChallenges.ts)
- Challenge generation
- Daily reset logic
- User attempt tracking

### Firebase Backend (firebase.ts)
- Admin SDK initialization
- Database operations
- Storage management

### Judge0 Integration (judge0.ts)
- Code submission to Judge0
- Language support mapping
- Execution result parsing
- Timeout handling

### OpenAI Client (openai-client.ts)
- Career path recommendation
- Content generation
- Text completion

### Database Storage (storage.ts, storage-firestore.ts)
- User data persistence
- Quiz results storage
- Module content storage

---

## TypeScript Schema

### shared/schema.ts
Central schema definitions for shared types across client and server:
- User types
- Quiz/Challenge types
- Module types
- Request/Response types

---

## Summary

The CareerQuest system is built on a modern, well-architected stack:

**Frontend:**
- React 18 with TypeScript
- shadcn/ui components on Radix UI + Tailwind CSS
- State management via TanStack React Query
- Form handling with React Hook Form + Zod
- Routing via Wouter
- Animation with Framer Motion

**Backend:**
- Express.js with security middleware (Helmet)
- Drizzle ORM for database operations
- Firebase for real-time features and auth
- Passport.js for session authentication
- OpenAI integration for AI features
- Judge0 for code execution

**Build & Development:**
- Vite for fast builds
- TypeScript for type safety
- Tailwind CSS for styling
- Full dev/prod environment support

This comprehensive component and package structure enables a robust, scalable platform for career guidance and skill development.
