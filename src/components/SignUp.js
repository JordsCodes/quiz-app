import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import '../styles/signup.css';

const SignUp = (onSetUser) => {
  const navigate = useNavigate();
 
  /*  username: '',
   password: '',
   email: '',
   user_score: 10
 }); */

 /*  const handleFieldChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  }; 

  const handleSubmit = (data) => {
   data.preventDefault();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(userCredential.user);
        /* toast.success('some text'); */
        onSetUser(user);
        navigate('/'); 
      }
      .catch((error) => {
         toast.error('There was a problem creating the account.');
      });


    /* axios
      .post(`http://localhost:3000/users`, newUser)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.message);
      });
  }; */

    /* eslint-disable */
    return (
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="h2">Sign Up</h2>
          {/*  <label className="label" htmlFor="username">
          Username
        </label> 
          <input value={data.password} name="username" /> */}
          <label className="label" htmlFor="password">
            Password
          </label>
          <input type="password" value={data.password} name="password" />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input value={data.email} name="email" />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <p className="p">
          Already a member? <Link to="/log-in">Log In</Link>
        </p>
      </div>
    );
  };
};

SignUp.propTypes = {
  onSetUser: PropTypes.func.isRequired,
};

export default SignUp;
