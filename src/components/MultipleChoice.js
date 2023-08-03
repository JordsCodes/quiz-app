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
  handleAnswerCheck,
}) => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const [canClickNext, setCanClickNext] = useState(false);
  const navigate = useNavigate();
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [correctAnswerClass, setCorrectAnswerClass] = useState(
    "multiple-choice-questions-button-active",
  );
  const handleAnswerClick = (answer) => {
    setActiveAnswer(answer);
    setCanClickNext(true);
  };
  const handleNext = () => {
    if (canClickNext && !checkAnswer) {
      setCheckAnswer(true);
      console.log("answer checked");
      const response = handleAnswerCheck(activeAnswer);
      console.log(response);
      if (response === true) {
        setCorrectAnswerClass("multiple-choice-questions-button-active correct")
      }
    }
    if (canClickNext && checkAnswer) {
      handleAnswerSubmit(activeAnswer);
      setCanClickNext(false);
      setActiveAnswer("");
      const nextQuestion = questionNumber + 1;
      setQuestionNumber(nextQuestion);
      navigate("/question-drop", { replace: true });
    }
  };
  const getClasses = index => {
    if (answer === answers[index]) {
      if (answer === activeAnswer) {
        return "multiple-choice-questions-button-active correct";
      }
      return "multiple-choice-questions-button-active";
    }
    return "multiple-choice-questions-button";

  }
  return (
    <div className="multiple-choice">
      <div className="multiple-choice-heading">
        <h1 className="multiple-choice-heading-text">
          {decode(question.question)}
        </h1>
      </div>
      <div className="multiple-choice-questions">
        <button
          className={getClasses(0)}
          type="submit"
          onClick={() => handleAnswerClick(answers[0])}
        >
          {decode(answers[0])}
        </button>
        <button
          className={getClasses(1)}
          type="submit"
          onClick={() => handleAnswerClick(answers[1])}
        >
          {decode(answers[1])}
        </button>
        <button
          className={getClasses(2)}
          type="submit"
          onClick={() => handleAnswerClick(answers[2])}
        >
          {decode(answers[2])}
        </button>
        <button
          className={getClasses(3)}
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
    </div >
  );
};
export default MultipleChoice;