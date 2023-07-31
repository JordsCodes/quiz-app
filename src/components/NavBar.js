import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li>
          <Link className="navbar-links-item" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item" to="/leaderboard">
            {" "}
            Leaderboard
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item" to="sign-up">
            {" "}
            Sign Up{" "}
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item" to="log-in">
            {" "}
            Log In
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item" to="/">
            {" "}
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
