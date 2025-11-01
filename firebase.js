// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpHSH4IxnT243B6hXw21I0NLjBF0zzwQ8",
  authDomain: "super-mall-1052a.firebaseapp.com",
  projectId: "super-mall-1052a",
  storageBucket: "super-mall-1052a.firebasestorage.app",
  messagingSenderId: "255128961041",
  appId: "1:255128961041:web:85f2a062a46fbd35cf71b0",
  measurementId: "G-FWTSMPM774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);