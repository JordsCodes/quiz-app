import React, { useState } from "react";
import "../styles/sign-in.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";
import LandingPage from "./LandingPage";

const SignUp = ({ setUser, setLoginMessage }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setUser(user);
        updateProfile(auth.currentUser, {
          displayName: username,
        });  
        setLoginMessage(`You are logged in as ${username}`);
        navigate("/");
        toast.success("Welcome to QuizBiz!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="text">Sign Up</h2>
      <label className="label" htmlFor="email">
        <p className="text">Email:</p>
        <input
          className="form-input"
          id="email"
          name="email"
          onChange={handleEmailChange}
        />
      </label>
      <label className="label" htmlFor="username">
        <p className="text">Username:</p>
        <input
          className="form-input"
          id="username"
          name="username"
          onChange={handleUsernameChange}
        />
      </label>
      <label className="label" htmlFor="password">
        <p className="text">Password:</p>
        <input
          className="form-input"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </label>
      <button className="button" type="submit">
        Sign Up
      </button>
    </form>
  );
};
export default SignUp;
