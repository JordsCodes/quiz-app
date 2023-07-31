import React from "react";
import "../styles/landing-page.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGenerateQuizClick = () => {
    navigate("/sign-up");
  }

  return (
    <div className="landing-page">
      <div className="header">
        <h1 className="header-text">Welcome to QuizBiz</h1>
        <h2 className="header-text-subheading">
          Generate your own set of trivia questions
        </h2>
      </div>
      <div className="generate-quiz">
        <p className="get-started-text">Ready to get started?</p>
        <button
          type="button"
          className="generate-quiz-button"
          onClick={handleGenerateQuizClick}
          style={{ cursor: "pointer" }}
        >
          Generate Quiz
        </button>
      </div>
    </div >
  );
};

export default LandingPage;
