import "../styles/app.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import GenerateQuiz from "./GenerateQuiz";
import LandingPage from "./LandingPage";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import TrueFalse from "./TrueFalse";
import QuestionDrop from "./QuestionDrop";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Leaderboard from "./Leaderboard";
import { auth } from "../config/firebase";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [questions, setQuestions, score] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="app">
      <Toaster
      toastOptions={{
        success: {
          style: {
            background: 'green',
            textWeight: 'bold',
            color: 'white',
          },
        },
        error: {
          style: {
            background: 'red',
            textWeight: 'bold',
            color: 'white',
          },
        },
      }}/>
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="log-in" element={<LogIn setUser={setUser} />} />
        <Route path="sign-up" element={<SignUp setUser={setUser} />} />
        <Route
          path="generate-quiz"
          element={
            <GenerateQuiz questions={questions} setQuestions={setQuestions} />
          }
        />
        <Route
          path="question-drop"
          element={<QuestionDrop questions={questions} />}
        />
        <Route path="/multi-choice" element={<MultipleChoice />} />
        <Route path="/true-false" element={<TrueFalse />} />
        <Route
          path="/quiz-end"
          element={<QuizEnd score={score} totalQuestions={questions.length} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
