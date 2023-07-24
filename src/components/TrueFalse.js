import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/true-false.css";

const decode = (str) => {
  const txt = new DOMParser().parseFromString(str, "text/html");
  return txt.documentElement.textContent;
};

const TrueFalse = ({ question, questionNumber, setQuestionNumber }) => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    const nextQuestion = questionNumber + 1;
    setQuestionNumber(nextQuestion);
    navigate("/question-drop", { replace: true });
  };

  return (
    <div className="question-content">
      <h1 className="true-false-heading-text">{decode(question.question)}</h1>
      <div className="button-container">
        <button
          className={
            activeAnswer === true
              ? "true-false-questions-button-active"
              : "true-false-questions-button"
          }
          type="submit"
          onClick={() => setActiveAnswer(true)}
        >
          True
        </button>
        <button
          className={
            activeAnswer === false
              ? "true-false-questions-button-active"
              : "true-false-questions-button"
          }
          type="submit"
          onClick={() => setActiveAnswer(false)}
        >
          False
        </button>
      </div>
      <div className="next-button-container">
        <div className="nav-button">
          <button className="next-button" type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;
