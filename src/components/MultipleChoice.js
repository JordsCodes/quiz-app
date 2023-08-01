import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/multiple-choice.css";

const decode = (str) => {
  const txt = new DOMParser().parseFromString(str, "text/html");
  return txt.documentElement.textContent;
};

const MultipleChoice = ({
  question,
  answers,
  questionNumber,
  setQuestionNumber,
  handleAnswerSubmit,
}) => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const [canClickNext, setCanClickNext] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    setActiveAnswer(answer);
    setCanClickNext(true);
  };

  const handleNext = () => {
    if (canClickNext) {
      handleAnswerSubmit(activeAnswer);

      console.log(
        "user clicked ->",
        activeAnswer,
        "correct answer is",
        question.correct_answer,
      );

      setCanClickNext(false);
      setActiveAnswer("");

      const nextQuestion = questionNumber + 1;
      setQuestionNumber(nextQuestion);
      navigate("/question-drop", { replace: true });
    }
  };

  return (
    <div className="multiple-choice">
      <div className="multiple-choice-heading">
        <h1 className="multiple-choice-heading-text">
          {decode(question.question)}
        </h1>
      </div>
      <div className="multiple-choice-questions">
        <button
          className={
            activeAnswer === answers[0]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => handleAnswerClick(answers[0])}
        >
          {decode(answers[0])}
        </button>
        <button
          className={
            activeAnswer === answers[1]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => handleAnswerClick(answers[1])}
        >
          {decode(answers[1])}
        </button>
        <button
          className={
            activeAnswer === answers[2]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => handleAnswerClick(answers[2])}
        >
          {decode(answers[2])}
        </button>
        <button
          className={
            activeAnswer === answers[3]
              ? "multiple-choice-questions-button-active"
              : "multiple-choice-questions-button"
          }
          type="submit"
          onClick={() => handleAnswerClick(answers[3])}
        >
          {decode(answers[3])}
        </button>
      </div>
      <div className="nav-button">
        <button
          className="next-button"
          type="button"
          onClick={handleNext}
          disabled={activeAnswer === ""}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default MultipleChoice;
