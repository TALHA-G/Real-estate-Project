// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "real-estate-3ae06.firebaseapp.com",
  projectId: "real-estate-3ae06",
  storageBucket: "real-estate-3ae06.firebasestorage.app",
  messagingSenderId: "864251984712",
  appId: "1:864251984712:web:d0f57045eaf9c5895d117d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);