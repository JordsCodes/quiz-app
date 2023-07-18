import React from "react";
import "../styles/true-false.css"
import { Link } from "react-router-dom";

const TrueFalse = () => {
    return (
        <><div className="question">
            <p>Question goes here</p>
        </div>
            <Link>
                <button className="true-bttn">
                    True
                </button>
            </Link>
            <Link>
                <button className="false-bttn">
                    False
                </button>
            </Link>
            <Link>
                <button type="submit" className="next-bttn">Next</button>
            </Link>
        </>
    )
}

export default TrueFalse;