// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../api/api';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const response = await loginUser(credentials);
      if (response && response.data) { // Check if response and response.data are defined
        localStorage.setItem('token', response.data.token); // Store the token in localStorage
        alert("Login successful");
      } else {
        throw new Error("No data received from server");
      }
    } catch (error) {
      setError(error.message || "An error occurred while logging in.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} value={credentials.username} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} value={credentials.password} placeholder="Password" />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
    </form>
  );
};

export default Login;
