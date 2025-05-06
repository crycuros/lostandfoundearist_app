import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3WUiM-kJHg8f4SA4fc9rMRC-S2howfqQ",
  authDomain: "lostandfoundearist.firebaseapp.com",
  projectId: "lostandfoundearist",
  storageBucket: "lostandfoundearist.firebasestorage.app",
  messagingSenderId: "73564539526",
  appId: "1:73564539526:web:549cb20d912cab63b11f07",
  measurementId: "G-KCDV0RECW7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); 