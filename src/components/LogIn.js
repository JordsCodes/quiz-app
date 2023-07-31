import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import '../styles/login.css';

const LogIn = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/users`, user)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        setIsLoggedIn(response.data.loggedIn);
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <form className="form" onChange={handleSubmit}>
        <h2 className="h2">Login</h2>
        <label className="label" htmlFor="username">
          Username
          <input id="username" value={user.username} name="username" onChange={handleFieldChange} />
        </label>

        <label className="label" htmlFor="password">
          Password
          <input type="password" value={user.password} name="password" onChange={handleFieldChange} />
        </label>

        <button className="button" type="submit">
          Log In
        </button>
      </form>
      <p>
        Not a member ? <Link to="/new-user-signup">Sign up here </Link>
      </p>
    </div>
  );
};

export default LogIn;
