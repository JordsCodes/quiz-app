import React, { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import MultipleChoice from "./MultipleChoice";
import QuizEnd from "./QuizEnd";
import TrueFalse from "./TrueFalse";
import { db } from "../config/firebase";
import "../styles/question-drop.css";

const QuestionDrop = ({ questions, user }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const sendScoreToDb = async () => {
    const userRef = doc(db, "users", user.uid);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const percentage = (score / questions.length) * 100;

    if (docSnap.exists()) {
      const newTotal = score + docSnap.data().total_score;
      const newAverage = (docSnap.data().average_percentage + percentage) / 2;
      await setDoc(userRef, {
        username: user.displayName,
        total_score: newTotal,
        average_percentage: newAverage,
      });
    } else {
      await setDoc(userRef, {
        username: user.displayName,
        total_score: score,
        average_percentage: percentage,
      });
    }
  };

  if (!questions) {
    return <p>No questions available</p>;
  }

  if (questions && questionNumber >= questions.length && user) {
    sendScoreToDb();
    return <QuizEnd score={score} totalQuestions={questions.length} />;
  }
  if (questions && questionNumber >= questions.length) {
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

  const question = questions[questionNumber];
  const answers = [].concat(
    question.incorrect_answers,
    question.correct_answer,
  );
  if (answers) {
    for (let i = 0; i < answers.length; i += 1) {
      answers.splice(Math.round(Math.random() * i), 0, answers.pop());
    }
  }

  if (question.type === "boolean") {
    return (
      <div>
        {questions && questionNumber < questions.length && (
          <div>
            <h2 className="question-number">Question {questionNumber + 1}</h2>
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
      {questions && questionNumber < questions.length && (
        <div>
          <h2 className="question-number">Question {questionNumber + 1} </h2>
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
