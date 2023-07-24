import "../styles/app.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GenerateQuiz from "./GenerateQuiz";
import LandingPage from "./LandingPage";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import TrueFalse from "./TrueFalse";
import QuestionDrop from "./QuestionDrop";

const App = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
        <Route path="/quiz-end" element={<QuizEnd />} />
      </Routes>
    </div>
  );
};

export default App;
