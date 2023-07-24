import React, { useState } from "react";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";

const QuestionDrop = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);

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
  if (question.type === "multiple") {
    return (
      <MultipleChoice
        question={question}
        answers={answers}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    );
  }
  return <TrueFalse question={question} answers={answers} />;
};

export default QuestionDrop;