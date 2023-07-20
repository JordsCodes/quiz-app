import React from "react";
import "../styles/true-false.css";

const TrueFalse = () => {
  return (
    <div className="question-content">
      <h1 className="true-false-question">Question goes here</h1>
      <div className="buttons-container">
        <button className="true-bttn" type="button">
          True
        </button>
        <button className="false-bttn" type="button">
          False
        </button>
      </div>
      <button type="submit" className="next-bttn">
        Next
      </button>
    </div>
  );
};

export default TrueFalse;
