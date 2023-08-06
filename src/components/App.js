import "../styles/app.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "react-hot-toast";
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

const App = () => {
  const [questions, setQuestions, score] = useState([]);
  const [username, setUsername] = useState();
  const [user, setUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState();

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
              background: "green",
              textWeight: "bold",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              textWeight: "bold",
              color: "white",
            },
          },
        }}
      />
      <NavBar setUser={setUser} user={user} loginMessage={loginMessage} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="log-in" element={<LogIn setUser={setUser} />} />
        <Route
          path="sign-up"
          element={
            <SignUp
              setUser={setUser}
              user={user}
              username={username}
              setUsername={setUsername}
              loginMessage={loginMessage}
              setLoginMessage={setLoginMessage}
            />
          }
        />
        <Route
          path="generate-quiz"
          element={
            <GenerateQuiz questions={questions} setQuestions={setQuestions} />
          }
        />
        <Route
          path="question-drop"
          element={
            <QuestionDrop questions={questions} score={score} user={user} />
          }
        />
        <Route path="/multi-choice" element={<MultipleChoice />} />
        <Route path="/true-false" element={<TrueFalse />} />
        <Route
          path="/quiz-end"
          element={
            <QuizEnd
              score={score}
              totalQuestions={questions.length}
              user={user}
            />
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
