import '../styles/app.css'
import { Routes, Route } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
