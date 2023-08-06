import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/true-false.css";

const decode = (str) => {
  const txt = new DOMParser().parseFromString(str, "text/html");
  return txt.documentElement.textContent;
};

const TrueFalse = ({
  question,
  questionNumber,
  setQuestionNumber,
  handleAnswerSubmit,
}) => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const [canClickNext, setCanClickNext] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    setActiveAnswer(answer);
    setSubmitted(true);
    setCanClickNext(true);
  };

  const handleNext = () => {
    if (canClickNext) {
      setSubmitted(false);
      const formattedUserAnswer = activeAnswer === true ? "true" : "false";
      handleAnswerSubmit(formattedUserAnswer);
      setCanClickNext(false);
      setActiveAnswer("");
      const nextQuestion = questionNumber + 1;
      setQuestionNumber(nextQuestion);
      navigate("/question-drop", { replace: true });
    }
  };

  const determineClassName = (answer) => {
    return question.correct_answer === answer ? "correct" : "incorrect";
  };

  return (
    <div className="question-content">
      <h1 className="true-false-heading-text">{decode(question.question)}</h1>
      <div className="button-container">
        <button
          className={`true-false-questions-button ${
            submitted && determineClassName("True")
          }`}
          className={`true-false-questions-button ${submitted && determineClassName("True")
            }`}

          type="submit"
          onClick={() => handleAnswerClick(true)}
        >
          True
        </button>
        <button
          className={`true-false-questions-button ${
            submitted && determineClassName("False")
          }`}
          type="submit"
          onClick={() => handleAnswerClick(false)}
        >
          False
        </button>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          type="button"
          onClick={handleNext}
          disabled={!canClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrueFalse;
