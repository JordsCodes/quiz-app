import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/true-false.css";

const decode = (str) => {
  const txt = new DOMParser().parseFromString(str, "text/html");
  return txt.documentElement.textContent;
};

const TrueFalse = () => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const [questionCounter, setQuestionCounter] = useState(0);

  const { state } = useLocation();
  const { allQuestions } = state; // Read allQuestions property in the 'state' object

  const chosenquestion = allQuestions[questionCounter];

  // eslint does not like the name of these destructured variables but we cannot change the structure, or name, of data that comes from a 3rd party api
  /* eslint-disable */
  const { question, incorrect_answers, correct_answer } = chosenquestion;

  console.log("and again", allQuestions, questionCounter);
  console.log("q", allQuestions[questionCounter].question);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newValue = questionCounter + 1;
    setQuestionCounter(newValue);
    console.log("counter=", newValue);
  };

  return (
    <div className="question-content">
      <h1 className="true-false-heading-text">{decode(question)}</h1>
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
        <Link to="/">
            <button className="next-button" type="button" onClick={handleSubmit}>
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;
