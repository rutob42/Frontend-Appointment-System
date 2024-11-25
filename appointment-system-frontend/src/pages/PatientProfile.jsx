import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored
        const response = await axios.get('http://localhost:5000/api/patient/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Error loading profile</div>;

  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>Contact: {profile.contact}</p>

      <h2>Upcoming Appointments</h2>
      <ul>
        {profile.appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.date} - {appointment.time} with Dr. {appointment.doctorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientProfile;
