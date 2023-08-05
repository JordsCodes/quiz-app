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
  const [activeAnswer, setActiveAnswer] = useState(null);
  const [canClickNext, setCanClickNext] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    setActiveAnswer(answer);
    setCanClickNext(true);
  };

  const handleNext = () => {
    if (canClickNext) {
      const formattedUserAnswer = activeAnswer === true ? "true" : "false";
      handleAnswerSubmit(formattedUserAnswer);
      setCanClickNext(false);
      setActiveAnswer(null);
      const nextQuestion = questionNumber + 1;
      setQuestionNumber(nextQuestion);
      navigate("/question-drop", { replace: true });
    }
  };

  const isAnswerCorrect = (answer) => {
    if (!canClickNext) return "";

    const formattedUserAnswer = answer === true ? "true" : "false";
    const formattedCorrectAnswer = question.correct_answer.toLowerCase();
    return formattedUserAnswer === formattedCorrectAnswer ? "correct" : "incorrect";
  };

  return (
    <div className="question-content">
      <h1 className="true-false-heading-text">{decode(question.question)}</h1>
      <div className="button-container">
        <button
          className={`true-false-questions-button ${activeAnswer === true ? "true-false-questions-button-active" : ""
            } ${isAnswerCorrect(true)}`}
          type="submit"
          onClick={() => handleAnswerClick(true)}
        >
          True
        </button>
        <button
          className={`true-false-questions-button ${activeAnswer === false ? "true-false-questions-button-active" : ""
            } ${isAnswerCorrect(false)}`}
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
          disabled={activeAnswer === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrueFalse;