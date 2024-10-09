// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ecommerce-8215f.firebaseapp.com",
  projectId: "ecommerce-8215f",
  storageBucket: "ecommerce-8215f.appspot.com",
  messagingSenderId: "499081831674",
  appId: "1:499081831674:web:49ce7520643212b6ed1543",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
