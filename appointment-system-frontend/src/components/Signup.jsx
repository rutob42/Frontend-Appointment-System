import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css'
const DoctorRegister = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('specialty', specialty);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('bio', bio);
    formData.append('qualifications', qualifications);
    formData.append('about', about);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/doctor/signup', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage('Doctor registered successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setLoading(false);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        {message && (
          <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <h2>Register as a Doctor</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="specialty">Specialty:</label>
            <input
              type="text"
              id="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="qualifications">Qualifications:</label>
            <input
              type="text"
              id="qualifications"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="about">About:</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="image">Profile Image:</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              required
            />

          </div>
          
          <div>
            <button type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register Doctor'}
            </button>
            <p className="signup-link">
          Already have an account? <a href="/Login">Login</a>
        </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
