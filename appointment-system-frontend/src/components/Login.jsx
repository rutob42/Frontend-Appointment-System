import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:5000/api/doctor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token); // Save the token to localStorage
        alert(data.message); // Show success message
        navigate('/doctor/dashboard'); // Redirect to dashboard
      } else {
        setError(data.message); // Show error message
      }
    } catch (error) {
      setError('Something went wrong!');
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Doctor Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>

        <p className="register-link">Are you a patient? <a href="/PatientLogin">Patient Login</a></p>
      </div>
    </div>
  );
};

export default DoctorLogin;
