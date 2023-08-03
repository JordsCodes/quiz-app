import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";

const NavBar = ({ user, setUser }) => {
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully logged out");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
          {user ? (
            <Link className="navbar-links-item" to="/leaderboard">
              {" "}
              Leaderboard
            </Link>
          ) : null}
        </li>
        <li>
          {user ? null : (
            <Link className="navbar-links-item" to="sign-up">
              {" "}
              Sign Up{" "}
            </Link>
          )}
        </li>
        <li>
          {user ? null : (
            <Link className="navbar-links-item" to="log-in">
              {" "}
              Log In
            </Link>
          )}
        </li>
        <li>
          {user ? (
            <Link className="navbar-links-item" to="/" onClick={handleLogOut}>
              {" "}
              Log Out
            </Link>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
