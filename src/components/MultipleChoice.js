import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/multiple-choice.css";

// dummy question data
/* const question = {
  category: "History",
  type: "multiple",
  difficulty: "easy",
  question: "In what year did the Wall Street Crash take place?",
  correct_answer: "1929",
  incorrect_answers: ["1932", "1930", "1925"],
}; */

// makes array of four answers
// const answers = [].concat(question.incorrect_answers, question.correct_answer);

// randomizes the order of the answers
/* for (let i = 0; i < answers.length; i += 1) {
  answers.splice(Math.round(Math.random() * i), 0, answers.pop());
}  */

const MultipleChoice = () => {
  const [activeAnswer, setActiveAnswer] = useState("");
  const [ questionCounter, setQuestionCounter ] = useState(0);
  const { state } = useLocation();
  const { allQuestions } = state; // Read values passed on state

  // eslint is being a pain and wanting destructuring. It can sod off.
  /* eslint-disable */
  const question = allQuestions[questionCounter].question;

  const answers = [].concat(allQuestions[questionCounter].incorrect_answers, allQuestions[questionCounter].correct_answer);
  /* eslint-disable */
  
  console.log('and again', allQuestions, questionCounter);
  console.log('q', allQuestions[questionCounter].question);

   const handleSubmit = async (event) => {
     event.preventDefault();
     
     setQuestionCounter(questionCounter + 1);
     console.log('q', allQuestions[questionCounter].question);
  }; 

  return (
    <div className="multiple-choice">
      <div className="multiple-choice-heading">
        <h1 className="multiple-choice-heading-text"> {question}</h1>
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
          <button className="multiple-choice-questions-button" type="button" onClick={handleSubmit}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
export default MultipleChoice;