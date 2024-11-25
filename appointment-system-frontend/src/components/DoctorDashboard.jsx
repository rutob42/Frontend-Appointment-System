import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DoctorDashboard.css';
import '../assets/assets/images/md15.jpg';

const DoctorDashboard = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    const fetchDoctorData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctor/profile', {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDoctorData(data.doctor);
        } else {
          setError('Failed to load doctor data.');
        }
      } catch (err) {
        setError('Something went wrong!');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, [navigate]);

  // Fetch appointments once doctorData is loaded
  useEffect(() => {
    if (doctorData) {
      fetch(`http://localhost:5000/api/appointments/${doctorData._id}`)
        .then((response) => response.json())
        .then((data) => setAppointments(data))
        .catch((error) => console.error('Error fetching appointments:', error));
    }
  }, [doctorData]); // This effect depends on doctorData

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  if (loading) return <div className="spinner"></div>;

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="doctor-profile">
          <h1>Welcome, Dr. {doctorData?.name}</h1>
          <div className="profile-info">
            {doctorData?.image ? (
              <img src={`http://localhost:5000${doctorData.image}`} alt="Doctor Profile" />
            ) : (
              <img src="path/to/default/profile/image.jpg" alt="Default Profile" />
            )}

            <p><strong>Specialty:</strong> {doctorData?.specialty}</p>
            <p><strong>Email:</strong> {doctorData?.email}</p>
            <p><strong>Qualifications:</strong> {doctorData?.qualification}</p>
            <p><strong>Bio:</strong> {doctorData?.bio}</p>
            <p><strong>About:</strong> {doctorData?.about}</p>
          </div>

          {/* Button to edit profile */}
          <button className="button" onClick={handleEditProfile}>Edit Profile</button>
        </div>

        <div className="appointments-section">
          <h2>Upcoming Appointments</h2>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div className="appointments-placeholder" key={appointment._id}>
                <p>Patient: {appointment.patient.name} - {appointment.date} at {appointment.time}</p>
              </div>
            ))
          ) : (
            <p>No upcoming appointments.</p>
          )}
          <button className="button">View Appointments</button>
        </div>

        <div className="logout-section">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
