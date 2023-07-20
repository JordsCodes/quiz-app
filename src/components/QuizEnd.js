import React from "react";
import "../styles/quiz-end.css";
import { Link } from "react-router-dom";

const QuizEnd = () => {
  return (
    <div className="quiz-end-container">
      <div className="congrats-message">
        <p>Congratulations!</p>
        <p>You scored x/y.</p>
      </div>
      <div className="end-page-bttn-container">
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
