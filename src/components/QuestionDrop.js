import React, { useState } from "react";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import TrueFalse from "./TrueFalse";

const QuestionDrop = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  if (questionNumber >= questions.length) {
    return <QuizEnd score={score} totalQuestions={questions.length} />;
  }

  const handleAnswerSubmit = (userAnswer) => {
    const currentQuestion = questions[questionNumber];
    const formattedUserAnswer = typeof userAnswer === "string" ? userAnswer.toLowerCase() : userAnswer;
    const formattedCorrectAnswer = currentQuestion.correct_answer.toLowerCase();

    if (formattedUserAnswer === formattedCorrectAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
  };
  // initialise question to be rendered:
  const question = questions[questionNumber];
  // initialise answers array:
  const answers = [].concat(
    question.incorrect_answers,
    question.correct_answer,
  );
  // randomise the order of the answers:
  for (let i = 0; i < answers.length; i += 1) {
    answers.splice(Math.round(Math.random() * i), 0, answers.pop());
  }
  // return either a MultipleChoice or TrueFalse component:
  if (question.type === "boolean") {
    return (
      <TrueFalse
        question={question}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        handleAnswerSubmit={handleAnswerSubmit}
      />
    );
  }


  return (
    <div>
      {questionNumber < questions.length && (
        <div>
          <h2>Question {questionNumber + 1}</h2>
          <MultipleChoice
            question={question}
            answers={answers}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            handleAnswerSubmit={handleAnswerSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionDrop;
