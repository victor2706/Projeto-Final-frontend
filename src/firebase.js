
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-361c5.firebaseapp.com",
  projectId: "dashboard-361c5",
  storageBucket: "dashboard-361c5.appspot.com",
  messagingSenderId: "822457424736",
  appId: "1:822457424736:web:3228bd87c30a8fca609c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()