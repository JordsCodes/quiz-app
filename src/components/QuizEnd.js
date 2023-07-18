import React from "react";
import "../styles/quiz-end.css";
import { Link } from "react-router-dom";

const QuizEnd = () => {
  return (
    <>
      <div className="congrats-message">
        <p>Congratulations!</p>
        <p>You scored x/y.</p>
      </div>
      <Link to="/">
        <button className="home-bttn" type="button">
          Back to Home
        </button>
      </Link>
      <Link to="/">
        <button className="leader-board-bttn" type="button">
          View Leader board
        </button>
      </Link>
    </>
  );
};

export default QuizEnd;
