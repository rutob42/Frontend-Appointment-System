import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'; 

const DoctorProfileList = () => {
  const { doctorId } = useParams();  
  const [doctor, setDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/doctors/profile/${doctorId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };
  
    fetchDoctorDetails();
  }, [doctorId]);
  

  const handleBooking = () => {
    if (!appointmentDate || !appointmentTime) {
      setBookingStatus('Please fill in both the date and time.');
      return;
    }

    const patientId = "patientId_placeholder"; // This should be fetched from logged-in user context

    const appointmentData = {
      doctorId,
      patientId,
      date: appointmentDate,
      time: appointmentTime,
    };

    fetch('http://localhost:5000/api/appointments/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => response.json())
      .then((data) => {
        setBookingStatus('Appointment booked successfully!');
      })
      .catch((error) => {
        setBookingStatus('Error booking appointment: ' + error.message);
      });
  };

  if (!doctor) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="doctor-profile-container">
      <div className="doctor-profile-card">
        <div className="doctor-profile-header">
          <img src={doctor.profilePicture} alt={`Dr. ${doctor.name}`} className="doctor-profile-img" />
          <div className="doctor-profile-info">
            <h2 className="doctor-name">Dr. {doctor.name}</h2>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <div className="doctor-rating">
              <FaStar className="star-icon" /> {doctor.rating} / 5
            </div>
            <p className="doctor-qualifications"><strong>Qualifications:</strong> {doctor.qualifications}</p>
            <p className="doctor-qualifications"><strong>Bio:</strong> {doctor.bio}</p>
            <p className="doctor-experience"><strong>Experience:</strong> {doctor.experience} years</p>
          </div>
        </div>

        <div className="doctor-social-links">
          {doctor.socialLinks?.twitter && (
            <a href={doctor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          )}
          {doctor.socialLinks?.linkedin && (
            <a href={doctor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          )}
          {doctor.socialLinks?.facebook && (
            <a href={doctor.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
          )}
        </div>

        {/* Booking Form */}
        <div className="doctor-booking-form">
          <h3>Book an Appointment</h3>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
          <button className="book-appointment-btn" onClick={handleBooking}>Book Appointment</button>

          {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
        </div>

        <div className="doctor-testimonials">
          <h3>Patient Testimonials</h3>
          {doctor.testimonials && doctor.testimonials.length > 0 ? (
            <div className="testimonial-carousel">
              {doctor.testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <blockquote>"{testimonial}"</blockquote>
                </div>
              ))}
            </div>
          ) : (
            <p>No testimonials yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileList;
