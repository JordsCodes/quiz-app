import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/multiple-choice.css";

const question = {
  category: "History",
  type: "multiple",
  difficulty: "easy",
  question: "In what year did the Wall Street Crash take place?",
  correct_answer: "1929",
  incorrect_answers: ["1932", "1930", "1925"],
};

const answers = [].concat(question.incorrect_answers, question.correct_answer);
for (let i = 0; i < answers.length; i += 1) {
  answers.splice(Math.round(Math.random() * i), 0, answers.pop());
}

const MultipleChoice = () => {
  const [activeAnswer, setActiveAnswer] = useState("");

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
