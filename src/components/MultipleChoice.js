import React from "react";
import { Link } from "react-router-dom";
import "../styles/multiple-choice.css";
import GenerateQuiz from "./GenerateQuiz";

const MultipleChoice = (getQuestions) => {

  
  return (
    <div className="multiple-choice">
      <div className="multiple-choice-heading">
        <h1 className="multiple-choice-heading-text">
          {" "}
          Who built the pyramids?
        </h1>
      </div>
      <div className="multiple-choice-questions">
        <button className="multiple-choice-questions-button" type="submit">
          Henry VIII
        </button>
        <button className="multiple-choice-questions-button" type="submit">
          George Clooney
        </button>
        <button className="multiple-choice-questions-button" type="submit">
          Beyonce
        </button>
        <button className="multiple-choice-questions-button" type="submit">
          The Ancient Egyptians
        </button>
      </div>
      <div className="nav-button">
        <Link to="/">
          <button className="multiple-choice-questions-button" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MultipleChoice;
