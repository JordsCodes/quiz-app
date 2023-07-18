import React from "react";
import "../styles/true-false.css"

const TrueFalse = () => {
    return (
        <><div className="question">
            <p>Question goes here</p>
        </div>
            <button className="true-bttn">
                True
            </button>
            <button className="false-bttn">
                False
            </button>
        </>
    )
}

export default TrueFalse;