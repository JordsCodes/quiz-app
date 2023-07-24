import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/multiple-choice.css";

const MultipleChoice = ({
  question,
  answers,
  questionNumber,
  setQuestionNumber,
}) => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    const nextQuestion = questionNumber + 1;
    setQuestionNumber(nextQuestion);
    navigate("/question-drop", { replace: true });
  };

  return (
    <div className="multiple-choice">
      <div className="multiple-choice-heading">
        <h1 className="multiple-choice-heading-text"> {question.question}</h1>
      </div>
      <div className="multiple-choice-questions">
        <button
          className={
            activeAnswer === answers[0]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => setActiveAnswer(answers[0])}
        >
          {answers[0]}
        </button>
        <button
          className={
            activeAnswer === answers[1]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => setActiveAnswer(answers[1])}
        >
          {answers[1]}
        </button>
        <button
          className={
            activeAnswer === answers[2]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => setActiveAnswer(answers[2])}
        >
          {answers[2]}
        </button>
        <button
          className={
            activeAnswer === answers[3]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => setActiveAnswer(answers[3])}
        >
          {answers[3]}
        </button>
      </div>
      <div className="nav-button">

        <button
          className="multiple-choice-questions-button"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default MultipleChoice;