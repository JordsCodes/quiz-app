import "../styles/app.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

const App = () => {
  const [questions, setQuestions, score] = useState([]);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="sign-up" element={<SignUp />} />
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
