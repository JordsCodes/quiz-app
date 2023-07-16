import '../styles/app.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <Routes>
        <Route path="/" /> {/* landing page here */}
        <Route path="/generate-quiz" />
        <Route path="/multi-choice" />
        <Route path="/true-false" />
        <Route path="/quiz-end" />
      </Routes>
    </div>
  );
}

export default App;
