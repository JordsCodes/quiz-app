import React, { useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";

const NavBar = ({ user, setUser, username }) => {
  /* useEffect(() => {
    if (user && username) {
      updateProfile(user, {
        displayName: username,
      })
        .then(() => {
          toast.success("Display name updated successfully");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [user, username]); */

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

  if (user) {
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
            <Link className="navbar-links-item" to="/" onClick={handleLogOut}>
              {" "}
              Log Out
            </Link>
          </li>
        </ul>
        <h2 className="displayname">You are logged in as {user.displayName}</h2>
      </div>
    );
  }

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
      </ul>
    </div>
  );
};

export default NavBar;
