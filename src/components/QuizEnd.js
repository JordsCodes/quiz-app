import React from "react";
import "../styles/quiz-end.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";
import { auth } from "../config/firebase";

const QuizEnd = ({ score, totalQuestions }) => {
  const [user] = React.useState(auth.currentUser);
  const sadEffectProps = useSpring({
    transform: score / totalQuestions < 0.5 ? "scale(1.2)" : "scale(1)",
  });

  const getButtonStyle = () => {
    return user ? "end-page-bttn" : "end-page-bttn-disabled";
  };

  return (
    <div className="end-page-content">
      <div className="score-message">
        <h2>
          {score / totalQuestions < 0.5
            ? "Better luck next time!"
            : "Congratulations!"}
        </h2>
        <h2>
          You scored {score}/{totalQuestions}.
        </h2>
        {score / totalQuestions >= 0.5 && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
        )}
        {score / totalQuestions < 0.5 ? (
          <div className="sad-effect-content">
            <animated.span
              role="img"
              aria-label="sad emoji"
              style={{ display: "inline-block", ...sadEffectProps }}
            >
              😢
            </animated.span>
          </div>
        ) : null}
      </div>
      <div className="end-bttns-container">
        <Link to="/">
          <button className="end-page-bttn" type="button">
            Back to Home
          </button>
        </Link>
        <Link to="/leaderboard">
          <button className={getButtonStyle()} type="button" disabled={!user}>
            View Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizEnd;
