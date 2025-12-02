
# CareerQuest Deployment Guide

## Prerequisites

1. **Firebase Account**: You need a Firebase project set up
2. **Judge0 RapidAPI Key**: For code execution features
3. **OpenAI API Key** (Optional): For AI study suggestions

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Judge0 RapidAPI
RAPIDAPI_KEY=your_rapidapi_key

# OpenAI (Optional)
OPENAI_API_KEY=your_openai_key

# Session Secret
SESSION_SECRET=your_random_secret_key_here
```

## Firestore Indexes

Run these commands to create required indexes:

```bash
# Deploy Firestore indexes
firebase deploy --only firestore:indexes
```

Or manually create indexes using the URLs provided in console errors.

## Initial Setup

1. **Install Dependencies**:
```bash
npm install
```

2. **Seed Database**:
```bash
# Seed career paths and badges
npm run seed

# Seed modules and lessons
npx tsx server/seed-modules.ts
```

3. **Create Admin User**:
After starting the app, register a user, then manually update in Firebase Console:
- Set `isAdmin: true` in the user document

## Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## Deployment on Replit

1. **Fork this Repl**
2. **Add Secrets** in the Replit Secrets tool:
   - Add all environment variables listed above
3. **Deploy**:
   - Click the "Deploy" button in Replit
   - Follow the deployment wizard
   - Your app will be published with a public URL

## Post-Deployment Tasks

1. **Create Firestore Indexes**: Click the URLs in console errors to create required indexes
2. **Create Admin Account**: Register and manually set admin flag
3. **Test Features**:
   - User registration/login
   - Quiz taking
   - Code challenges
   - Daily challenges
   - Leaderboard

## Common Issues

### Missing Firestore Indexes
- Click the URLs in error messages to create indexes
- Or deploy `firestore.indexes.json` via Firebase CLI

### OpenAI Quota Exceeded
- System uses fallback suggestions when quota is exceeded
- Add credits to your OpenAI account or implement caching

### Judge0 Rate Limits
- Free tier has rate limits
- Upgrade to paid plan for production use

## Security Checklist

- [ ] Change SESSION_SECRET to a random string
- [ ] Enable Firebase Authentication email verification
- [ ] Set up Firestore security rules
- [ ] Enable CORS restrictions
- [ ] Set up rate limiting on API endpoints
- [ ] Review and restrict admin routes

## Monitoring

- Check Firebase Console for:
  - User analytics
  - Database usage
  - Error logs
- Monitor Replit logs for server errors
- Set up alerts for API quota limits
# CareerQuest Deployment Guide (Replit)

## Prerequisites

1. **Replit Account**: Create a free account at [https://replit.com](https://replit.com)
2. **Firebase Project**: You'll need Firebase for authentication and database
3. **Judge0 RapidAPI Key**: For code execution features
4. **OpenAI API Key** (Optional): For AI-powered features

---

## Step 1: Import Project to Replit

### Option A: Import from GitHub

1. Go to [https://replit.com/new](https://replit.com/new)
2. Click **"Import from GitHub"** button
3. Enter the repository URL or name
4. Click **"Import from GitHub"**

### Option B: Upload ZIP File

1. Download the project as a ZIP file
2. Go to [https://replit.com/new](https://replit.com/new)
3. Click **"Upload"** and select the ZIP file
4. Replit will automatically detect it's a Node.js project

---

## Step 2: Configure Environment Variables (Secrets)

In Replit, click the **"Secrets"** tool (lock icon) in the left sidebar and add the following:

### Required Secrets

```env
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Judge0 RapidAPI (for code challenges)
RAPIDAPI_KEY=your_rapidapi_key

# Session Secret (generate a random string)
SESSION_SECRET=your_random_secret_key_here

# OpenAI (Optional - for AI features)
OPENAI_API_KEY=your_openai_key
```

### How to Get These Values

#### Firebase Keys
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Go to **Project Settings** → **General**
4. Scroll to **"Your apps"** section
5. Click **Web app** icon (</>) to create a web app
6. Copy all the configuration values

#### Judge0 RapidAPI Key
1. Sign up at [RapidAPI](https://rapidapi.com)
2. Subscribe to [Judge0 CE](https://rapidapi.com/judge0-official/api/judge0-ce)
3. Copy your API key from the dashboard

#### Session Secret
Generate a random string (minimum 32 characters):
```bash
# You can generate one using Node.js in Replit Shell:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Step 3: Set Up Firebase

### 3.1 Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click **"Get Started"**
3. Enable **Email/Password** sign-in method

### 3.2 Create Firestore Database

1. Go to **Firestore Database**
2. Click **"Create Database"**
3. Choose **"Start in production mode"**
4. Select your preferred location

### 3.3 Update Firestore Rules

Replace the default rules with (from `firestore.rules` in the project):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isAdmin() {
      return isAuthenticated() && 
             get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isAuthenticated() && request.auth.uid == userId;
      allow update: if isAdmin();
    }
    
    // Other collections - allow authenticated read, admin write
    match /{document=**} {
      allow read: if isAuthenticated();
      allow write: if isAdmin();
    }
  }
}
```

### 3.4 Create Firestore Indexes

1. In Firestore, go to **Indexes** tab
2. Create composite indexes as needed (errors will show required indexes in console)

---

## Step 4: Seed Initial Data

### 4.1 Run Database Seeders

In the Replit Shell, run these commands in order:

```bash
# Install dependencies (if not already installed)
npm install

# Seed career paths and badges
npm run seed

# Seed modules and lessons
npm run seed-modules
```

### 4.2 Create Admin User

1. Start the application (click **Run** button)
2. Register a new user account through the UI
3. In Firebase Console, go to **Firestore Database**
4. Find your user in the `users` collection
5. Edit the document and add: `isAdmin: true`

---

## Step 5: Configure Deployment

### 5.1 Verify Run Configuration

The `.replit` file should already be configured. Verify it contains:

```toml
[deployment]
deploymentTarget = "autoscale"
build = ["npm", "run", "build"]
run = ["npm", "run", "start"]
```

### 5.2 Set Port Configuration

Ensure `server/index.ts` uses port 5000 (already configured):

```typescript
const port = parseInt(process.env.PORT || '5000', 10);
```

---

## Step 6: Deploy to Production

### 6.1 Choose Deployment Type

Click the **"Deploy"** button in Replit and choose:

- **Autoscale Deployment** (Recommended): Scales automatically with traffic
- **Reserved VM**: Fixed resources, always running
- **Static**: Not suitable for this full-stack app

### 6.2 Configure Autoscale Deployment

1. Click **"Deploy"** → **"Autoscale"**
2. Review build and run commands
3. Click **"Deploy"**
4. Wait for the build process to complete

### 6.3 Access Your Deployed App

Once deployed, Replit will provide:
- A `.replit.app` URL (e.g., `your-app.replit.app`)
- Option to add a custom domain

---

## Step 7: Post-Deployment Tasks

### 7.1 Test Core Features

✅ User registration and login  
✅ Quiz functionality  
✅ Code challenges (requires Judge0 API)  
✅ Daily challenges  
✅ Leaderboard  
✅ Career path selection  

### 7.2 Create Firestore Indexes

Monitor the console logs for index creation URLs. Click them to automatically create required indexes.

### 7.3 Configure Custom Domain (Optional)

1. In Deployment settings, click **"Add custom domain"**
2. Follow DNS configuration instructions
3. Add your domain records

---

## Troubleshooting

### Build Fails

**Error**: `Module not found`  
**Solution**: Run `npm install` in Shell, then redeploy

**Error**: `TypeScript compilation errors`  
**Solution**: Run `npm run check` to see type errors, fix them

### Runtime Errors

**Error**: `Firebase not initialized`  
**Solution**: Verify all Firebase secrets are set correctly

**Error**: `Port already in use`  
**Solution**: Stop existing processes, Replit will handle port forwarding

**Error**: `Judge0 API errors`  
**Solution**: Verify RAPIDAPI_KEY is correct and has active subscription

### Database Issues

**Error**: `Permission denied` in Firestore  
**Solution**: Update Firestore rules as shown in Step 3.3

**Error**: `Missing index` errors  
**Solution**: Click the URLs in console logs to create indexes

### Session Issues

**Error**: `Session secret not set`  
**Solution**: Add SESSION_SECRET to Replit Secrets

---

## Environment-Specific Notes

### Development (Workspace)

- Uses `npm run dev` (with hot reload)
- Runs on port 5000
- Access via Replit's webview

### Production (Deployment)

- Uses `npm run start` (compiled code)
- Environment: `NODE_ENV=production`
- Optimized builds with Vite

---

## Monitoring and Logs

### View Application Logs

1. In Deployment view, click **"Logs"** tab
2. Monitor for errors or warnings
3. Use logs to debug production issues

### Monitor Performance

- Check Replit's built-in analytics
- Monitor Firebase usage in Firebase Console
- Track API usage in RapidAPI dashboard

---

## Scaling Considerations

### Autoscale Benefits

- **Scales to zero**: No cost when inactive
- **Auto-scaling**: Handles traffic spikes
- **99.95% uptime**: High availability

### Costs

- Free tier includes $25/month credits (Replit Core)
- Additional usage billed per vCPU/RAM usage
- See [Replit Pricing](https://replit.com/pricing) for details

---

## Security Checklist

✅ Change `SESSION_SECRET` to a strong random value  
✅ Enable Firebase email verification (optional)  
✅ Set up proper Firestore security rules  
✅ Never commit API keys to Git  
✅ Use environment variables for all secrets  
✅ Enable rate limiting (already configured)  
✅ Review admin access regularly  

---

## Support Resources

- **Replit Docs**: [https://docs.replit.com](https://docs.replit.com)
- **Firebase Docs**: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- **Judge0 API**: [https://ce.judge0.com](https://ce.judge0.com)

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Seed database
npm run seed
npm run seed-modules

# Type checking
npm run check
```

---

## Next Steps After Deployment

1. **Create first admin account** (Step 4.2)
2. **Test all features** (Step 7.1)
3. **Invite test users** to validate functionality
4. **Monitor logs** for any errors
5. **Set up analytics** (optional)

---

## Common Deployment Patterns

### Development Workflow

1. Make changes in Replit workspace
2. Test with `npm run dev`
3. Commit changes to Git (optional)
4. Click **Deploy** to push to production

### Continuous Deployment

- Connect GitHub repository
- Enable auto-deploy on push
- Each commit triggers new deployment

---

Your CareerQuest system is now deployed and ready to use! 🚀

For any issues, check the troubleshooting section or consult Replit's documentation.
