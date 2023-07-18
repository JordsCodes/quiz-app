import React from "react";
import "../styles/multiple-choice.css";

const MultipleChoice = () => {
  return (
    <div className="multiple-choice">
      <div className="multiple-choice-heading">
        <h1 className="multiple-choice-heading-text">
          {" "}
          Who built the pyramids?
        </h1>
      </div>
      <div className="multiple-choice-questions">
        <button className="multiple-choice-questions-button" type="submit">
          Henry VIII
        </button>
        <button className="multiple-choice-questions-button" type="submit">
          George Clooney
        </button>
        <button className="multiple-choice-questions-button" type="submit">
          Beyonce
        </button>
        <button className="multiple-choice-questions-button" type="submit">
          The Ancient Egyptians
        </button>
      </div>
    </div>
  );
};

export default MultipleChoice;
