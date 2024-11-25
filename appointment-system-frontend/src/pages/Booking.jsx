import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patientId = 'patientIdPlaceholder'; // Replace with logged-in patient's ID
    const appointmentData = { doctorId, patientId, date, time };

    try {
      const response = await fetch('http://localhost:5000/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Appointment booked successfully!');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Error booking appointment.');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookAppointment;
