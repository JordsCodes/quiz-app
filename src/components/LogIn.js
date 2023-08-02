import React, { useState } from "react";
import "../styles/log-in.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import toast, { Toaster } from "react-hot-toast";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setUser(user);
        toast.success("Welcome back!");
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
      <h2 className="text">Log In</h2>
      <label className="label" htmlFor="username">
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
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </label>
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
};
export default LogIn;
