// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxz-Pn11zAKDB-l8A76dBZhwm4Nycz8R4",
  authDomain: "quiz-app-65833.firebaseapp.com",
  projectId: "quiz-app-65833",
  storageBucket: "quiz-app-65833.appspot.com",
  messagingSenderId: "523620517932",
  appId: "1:523620517932:web:5b8054caa85980b995e989",
  measurementId: "G-QJQVB5ZGB4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

export const db = getFirestore(app);
