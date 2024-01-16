import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// configuring firebase for my project
const firebaseConfig = {
  apiKey: "AIzaSyBqyKJJMGX90SrL_qb75B3JXSwgO5XIN_w",
  authDomain: "mangaverse-c8fd9.firebaseapp.com",
  projectId: "mangaverse-c8fd9",
  storageBucket: "mangaverse-c8fd9.appspot.com",
  messagingSenderId: "43621769223",
  appId: "1:43621769223:web:01fcd8267d03a2eb6b0aa2",
  measurementId: "G-JZSR01B5D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();