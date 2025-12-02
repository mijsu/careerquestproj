
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAtXt_mx217dS4KmIzQ78_KafufDwuGhm4",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "careerquest-7a741.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "careerquest-7a741",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "careerquest-7a741.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "864822379969",
  appId: process.env.FIREBASE_APP_ID || "1:864822379969:web:2e86263d38376c9a219b40"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
