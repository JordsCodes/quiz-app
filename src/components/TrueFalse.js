import React from "react";
import "../styles/true-false.css";

const TrueFalse = () => {
  return (
    <>
      <div className="question">
        <p>Question goes here</p>
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
