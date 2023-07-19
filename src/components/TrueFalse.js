import React from "react";
import "../styles/true-false.css";

const TrueFalse = () => {
  return (
    <>
      <div className="question">
        <h1 className="true-false-question">Question goes here</h1>
      </div>
      <button className="true-bttn" type="button">
        True
      </button>
      <button className="false-bttn" type="button">
        False
      </button>
      <button type="submit" className="next-bttn">
        Next
      </button>
    </>
  );
};

export default TrueFalse;
