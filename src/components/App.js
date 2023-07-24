import "../styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GenerateQuiz from "./GenerateQuiz";
import LandingPage from "./LandingPage";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import GetQuestion from "../requests/getQuestion";
import TrueFalse from "./TrueFalse";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="generate-quiz" element={<GenerateQuiz />} />
        <Route path="/multi-choice" element={<MultipleChoice />} />
        <Route path="/true-false" element={<TrueFalse />} />
        <Route path="/quiz-end" element={<QuizEnd />} />
        <Route path="/get-question" element={<GetQuestion />} />
      </Routes>
    </div>
  );
};

export default App;
