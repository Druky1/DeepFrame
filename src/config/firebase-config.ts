
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY!,
  authDomain: "deepframe-df830.firebaseapp.com",
  projectId: "deepframe-df830",
  storageBucket: "deepframe-df830.firebasestorage.app",
  messagingSenderId: "715896482187",
  appId: "1:715896482187:web:f2869340becb558057278e",
  measurementId: "G-G6L3SLPEZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseStorage = getStorage(app);