import React from "react";
import "../styles/sign-in.css";

const SignUp = () => {
  return (
    <form className="form">
      <h2 className="text">Sign Up</h2>
      <label className="label" htmlFor="username">
        <p className="text">Email:</p>
        <input className="form-input" id="username" name="username" />
      </label>
      <label className="label" htmlFor="password">
        <p className="text">Password:</p>
        <input className="form-input" type="password" name="password" />
      </label>
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
};
export default SignUp;
