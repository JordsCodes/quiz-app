import "../styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import TrueFalse from "./TrueFalse";
import QuizEnd from './QuizEnd';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" />
        <Route path="/generate-quiz" />
        <Route path="/multi-choice" />
        <Route path="/true-false" element={<TrueFalse />} />
        <Route path="/quiz-end" element={<QuizEnd />} />
=======
import GenerateQuiz from "./GenerateQuiz";
import LandingPage from "./LandingPage";
import MultipleChoice from "./MultipleChoice";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="generate-quiz" element={<GenerateQuiz />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/multi-choice" element={<MultipleChoice />} />
        <Route path="/true-false" />
        <Route path="/quiz-end" />
>>>>>>> main
      </Routes>
    </div>
  );
};

export default App;
