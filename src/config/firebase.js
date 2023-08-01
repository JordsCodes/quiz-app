// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxz-Pn11zAKDB-l8A76dBZhwm4Nycz8R4",
  authDomain: "quiz-app-65833.firebaseapp.com",
  projectId: "quiz-app-65833",
  storageBucket: "quiz-app-65833.appspot.com",
  messagingSenderId: "523620517932",
  appId: "1:523620517932:web:5b8054caa85980b995e989",
  measurementId: "G-QJQVB5ZGB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference that we can use to handle authentication and export this so we can use the refeence in our React components
export const auth = getAuth(app);

// Export the Firebase app by default so we can use it with other Firebase services in our app if we need to
export default app;
