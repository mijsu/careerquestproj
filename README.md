
# CareerQuest - Gamified Career Path Learning Platform

A full-stack application for computer science students to explore career paths through gamification, AI-powered recommendations, and interactive learning.

## 🚀 Quick Start (Local Development in VS Code)

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Clone/Download the project**
   ```bash
   # If downloaded as ZIP, extract it
   # If using Git:
   git clone <your-repo-url>
   cd careerquest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your credentials
   ```

   **Required variables:**
   - `FIREBASE_*`: Get from [Firebase Console](https://console.firebase.google.com)
   - `OPENAI_API_KEY`: Get from [Bytez](https://bytez.com) or [OpenAI](https://openai.com)
   - `SESSION_SECRET`: Generate a random string (64+ characters)

4. **Run the application**
   ```bash
   npm run dev
   ```

5. **Access the app**
   Open [http://localhost:5000](http://localhost:5000) in your browser

## 📦 Production Deployment (Replit)

This application is optimized for deployment on Replit:

1. Import the project to Replit
2. Set environment variables in Replit Secrets (🔒 icon):
   - Add all variables from `.env.example`
3. Click **Deploy** → **Autoscale Deployment**
4. Your app will be live at `your-app.replit.app`

### Deployment Configuration

The project is pre-configured for Replit deployment:
- Build command: `npm run build`
- Run command: `npm run start`
- Port: 5000 (automatically forwarded to 80/443)

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run seed         # Seed database with initial data
npm run seed-modules # Seed learning modules
npm run check        # TypeScript type checking
```

## 🗄️ Database Setup

The application uses Firebase Firestore. Initial setup:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Copy configuration to `.env`
4. Run `npm run seed` to populate initial data

## 🔑 Getting API Keys

### Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing
3. Go to Project Settings → General → Your apps
4. Copy the Firebase configuration values to `.env`

### Bytez/OpenAI API Key
1. **Bytez** (recommended): Visit [bytez.com](https://bytez.com), sign up, get API key
2. **OpenAI**: Visit [platform.openai.com](https://platform.openai.com), create account, generate API key

### Judge0 API (Optional)
1. Visit [RapidAPI Judge0](https://rapidapi.com/judge0-official/api/judge0-ce)
2. Subscribe to the free tier
3. Copy your API key

## 📁 Project Structure

```
careerquest/
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types/schemas
├── .env            # Environment variables (not in Git)
├── .env.example    # Environment template
└── package.json    # Dependencies
```

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express, Node.js
- **Database**: Firebase Firestore
- **AI**: OpenAI/Bytez API
- **Code Execution**: Judge0 API

## 📝 License

MIT License - See LICENSE file for details
