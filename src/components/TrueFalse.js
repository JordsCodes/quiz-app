import React, { useEffect, useInsertionEffect, useState } from "react";
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
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    setActiveAnswer(answer);
    setCanClickNext(true);
  };

  const handleNext = () => {
    if (canClickNext) {
      const formattedUserAnswer = activeAnswer === true ? "true" : "false";
      handleAnswerSubmit(formattedUserAnswer);

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
          onClick={() => handleAnswerClick(true)}
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
          onClick={() => handleAnswerClick(false)}
        >
          False
        </button>
      </div>
      <div className="next-button-container">
        
        <button className="next-button" type="button" onClick={handleNext} disabled={activeAnswer === ""}> 
          {/* {questionNumber >= question.length ? 'Finish' : 'Next'} */}
            Next
          </button>
        
      </div>
    </div>
  );
};

export default TrueFalse;
