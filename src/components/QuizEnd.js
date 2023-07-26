import React from "react";
import "../styles/quiz-end.css";
import { Link } from "react-router-dom";

const QuizEnd = ({ score, totalQuestions }) => {
  return (
    <div className="end-page-content">
      <div className="congrats-message">
        <h2>Congratulations!</h2>
        <h2>
          You scored {score}/{totalQuestions}.
        </h2>
      </div>
      <div className="end-bttns-container">
        <Link to="/">
          <button className="end-page-bttn" type="button">
            Back to Home
          </button>
        </Link>
        <Link to="/">
          <button className="end-page-bttn" type="button">
            View Leader board
          </button>
        </Link>
      </div>
    </div>
  );
};
export default QuizEnd;
