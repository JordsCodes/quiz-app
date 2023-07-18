import React from "react";
import "../styles/quiz-end.css";

const QuizEnd = () => {
    return (
        <><div className="congrats-message">
            <p>Congratulations!</p>
            <p>You scored x/y.</p>
        </div>
            <button className="home-bttn">
                Back to Home
            </button>
            <button className="leader-board-bttn">
                View Leader board
            </button>
        </>
    )
}

export default QuizEnd;