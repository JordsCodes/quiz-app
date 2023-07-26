import React, { useEffect, useInsertionEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/true-false.css";

const decode = (str) => {
  const txt = new DOMParser().parseFromString(str, "text/html");
  return txt.documentElement.textContent;
};

const TrueFalse = ({ question, questionNumber, setQuestionNumber }) => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const [canClickNext, setCanClickNext] = useState(false);
  const navigate = useNavigate();
  
  const handleAnswerClick = (answer) => {
    setActiveAnswer(answer);
    setCanClickNext(true);
  };
  
  const handleNext = () => {
    if (canClickNext) {
      // first get the activeAnswer and see if it is correct, then store this bit of information
      console.log("user clicked ->", activeAnswer, 'correct answer is', question.correct_answer);
  
      // reset these states
      setCanClickNext(false);
      setActiveAnswer("");

      // next sort out moving to the next question
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
        <div className="nav-button">
          <button className="next-button" type="button" onClick={handleNext}>
          {/* {activeAnswer =-= questionNumber.length - 1 ? 'Finish' : 'Next'} */}
            Next
          </button>
        </div>
      </div>
      </div>
  );
};

export default TrueFalse;
