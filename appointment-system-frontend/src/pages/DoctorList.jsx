import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router
import '../styles/doctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    // Fetch all doctors initially
    fetch('http://localhost:5000/api/doctors')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched doctors:', data); // Log fetched data for debugging
        if (Array.isArray(data)) {
          setDoctors(data); // Directly set fetched data
          setFilteredDoctors(data); // Set initial data as filtered
        } else {
          console.error('Fetched data is not in the expected format:', data);
          setDoctors([]);
          setFilteredDoctors([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
        setDoctors([]);
        setFilteredDoctors([]);
      });
  }, []);
  

  useEffect(() => {
    console.log('Search term:', search); // Log search term for debugging
    if (search === '') {
      setFilteredDoctors(doctors);  // If search is empty, show all doctors
    } else {
      setFilteredDoctors(
        doctors.filter((doctor) =>
          doctor.name.toLowerCase().includes(search.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, doctors]); // Re-run filtering when search term or doctors list changes

  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Update search query state
  };

  return (
    <div className="doctor-list-container">
      <h2 className="heading">Meet Our Esteemed Doctors</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or specialty"
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />
      
      <div className="doctor-list">
        {Array.isArray(filteredDoctors) && filteredDoctors.length === 0 ? (
          <p>No doctors found</p>
        ) : (
          Array.isArray(filteredDoctors) && filteredDoctors.map((doctor) => (
            <div key={doctor._id} className="doctor-card">
              <img src={doctor.image || 'default-image.jpg'} alt={doctor.name} className="doctor-img" />
              <div className="doctor-details">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <div className="doctor-info">
                  <span className="doctor-rating">Rating: {doctor.rating || 'N/A'}</span>
                  <span className="doctor-location">{doctor.location || 'Location not available'}</span>
                </div>
                <Link to={`/doctor/${doctor._id}`} className="doctor-profile-link">View Profile</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorList;
