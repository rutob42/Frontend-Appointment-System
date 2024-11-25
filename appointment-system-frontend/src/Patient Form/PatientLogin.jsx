// PatientLogin.js
import React, { useState } from 'react';
import axios from 'axios';

const PatientLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/patient/login', formData);
      localStorage.setItem('patientToken', response.data.token);
      alert('Login successful');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p className="register-link">
          Don't have an account? <a href="/PatientReg">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default PatientLogin;
