import "../styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GenerateQuiz from "./GenerateQuiz";
import LandingPage from "./LandingPage";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import TrueFalse from "./TrueFalse";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="generate-quiz" element={<GenerateQuiz />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/multi-choice" element={<MultipleChoice />} />
        <Route path="/true-false" element={<TrueFalse />} />
        <Route path="/quiz-end" element={<QuizEnd />} />
      </Routes>
    </div>
  );
};

export default App;
