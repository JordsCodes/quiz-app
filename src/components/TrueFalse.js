import React from "react";
import "../styles/true-false.css";

const TrueFalse = () => {
  return (
    <div className="true_false-container">
      <div className="true_false-content">
        <h1 className="true-false-question">Question goes here</h1>
        <button className="true-false-bttn" type="button">
          True
        </button>
        <button className="true-false-bttn" type="button">
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
