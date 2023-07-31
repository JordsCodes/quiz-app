// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmBV-aVOwBTLZdsZZklcz_LUxziUkObOI",
  authDomain: "quiz-app-392df.firebaseapp.com",
  projectId: "quiz-app-392df",
  storageBucket: "quiz-app-392df.appspot.com",
  messagingSenderId: "452590163007",
  appId: "1:452590163007:web:9cdd6acb411bdd1e95d48a",
  measurementId: "G-ZGX5CPS98W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;