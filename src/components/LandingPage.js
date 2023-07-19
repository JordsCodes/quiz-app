import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing-page.css";


const LandingPage = () => {
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
        <button className="generate-quiz-button" type="submit">
          <Link to="generate-quiz">Generate Quiz</Link>
        </button>
        
      </div>
    </div>
  );
};

export default LandingPage;
