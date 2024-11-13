import React, { useState } from 'react';
import { registerUser } from '../api/api';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      alert(response.data.message); // Display success message
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} value={formData.username} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
