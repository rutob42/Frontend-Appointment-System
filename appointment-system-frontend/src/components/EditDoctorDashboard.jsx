import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EditDoctorDashboard.css';

const EditProfile = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    email: '',
    specialty: '',
    qualifications: '',
    bio: '',
    about: '',
  });
  const [profileImage, setProfileImage] = useState(null); // For storing the image file
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    const fetchDoctorData = async () => {
      const response = await fetch('http://localhost:5000/api/doctor/profile', {
        headers: { 'Authorization': `Bearer ${authToken}` },
      });
      if (response.ok) {
        const data = await response.json();
        setDoctorData(data.doctor);
      }
    };
    fetchDoctorData();
  }, [navigate]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]); // Store the selected file
  };

  const handleSave = async () => {
    const authToken = localStorage.getItem('authToken');
    const formData = new FormData();

    // Append text fields
    for (const key in doctorData) {
      formData.append(key, doctorData[key]);
    }

    // Append the image file if it's selected
    if (profileImage) {
      formData.append('image', profileImage);
    }

    const response = await fetch('http://localhost:5000/api/doctor/profile', {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${authToken}` },
      body: formData, // Send formData instead of JSON
    });

    if (response.ok) {
      alert('Profile updated successfully');
      navigate('/doctor/dashboard'); // Redirect to the dashboard after saving
    } else {
      alert('Failed to update profile');
    }
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form className="profile-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={doctorData.name}
            onChange={(e) => setDoctorData({ ...doctorData, name: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={doctorData.email}
            onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Specialty:</label>
          <input
            type="text"
            value={doctorData.specialty}
            onChange={(e) => setDoctorData({ ...doctorData, specialty: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Qualifications:</label>
          <input
            type="text"
            value={doctorData.qualifications}
            onChange={(e) => setDoctorData({ ...doctorData, qualifications: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea
            value={doctorData.bio}
            onChange={(e) => setDoctorData({ ...doctorData, bio: e.target.value })}
            className="textarea-field"
          />
        </div>
        <div className="form-group">
          <label>About:</label>
          <textarea
            value={doctorData.about}
            onChange={(e) => setDoctorData({ ...doctorData, about: e.target.value })}
            className="textarea-field"
          />
        </div>
        <div className="form-group">
          <label>Profile Image:</label>
          <input type="file" onChange={handleImageChange} className="file-input" />
        </div>
        <button type="button" onClick={handleSave} className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
