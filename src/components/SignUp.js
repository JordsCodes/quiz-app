import React, { useState } from "react";
import "../styles/sign-in.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../config/firebase";

const SignUp = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setUser(user);
        toast.success("Welcome to QuizBiz!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
      <Toaster />
    </form>
  );
};
export default SignUp;
