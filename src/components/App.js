import '../styles/app.css'
import { Routes, Route } from "react-router-dom";
import GenerateQuiz from "../components/GenerateQuiz";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" /> 
        <Route path="generate-quiz" element={<GenerateQuiz />} />
        <Route path="/multi-choice" />
        <Route path="/true-false" />
        <Route path="/quiz-end" />
      </Routes>
    </div>
  );
}

export default App;
