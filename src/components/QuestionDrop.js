import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import TrueFalse from "./TrueFalse";
import { db } from "../config/firebase";

const QuestionDrop = ({ questions, user }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const sendScoreToDb = async () => {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      username: user.displayName,
      total_score: score,
      average_percentage: (score / questions.length) * 100,
    });
  };

  if (questionNumber >= questions.length) {
    sendScoreToDb();
    return <QuizEnd score={score} totalQuestions={questions.length} />;
  }

  const handleAnswerSubmit = (userAnswer) => {
    const currentQuestion = questions[questionNumber];
    const formattedUserAnswer =
      typeof userAnswer === "string" ? userAnswer.toLowerCase() : userAnswer;
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
      <div>
        {questionNumber < questions.length && (
          <div>
            <h2>Question {questionNumber + 1}</h2>
            <TrueFalse
              question={question}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              handleAnswerSubmit={handleAnswerSubmit}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {questionNumber < questions.length && (
        <div>
          <h2>Question {questionNumber + 1} </h2>
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
