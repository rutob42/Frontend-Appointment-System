import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';
import medicalImage from '../assets/assets/images/md15.jpg';
import medicalImage1 from '../assets/assets/images/md18.jpg';
import medicalImage2 from '../assets/assets/images/md21.jpg';
import image1 from '../assets/assets/images/m17.webp'

import '../styles/Home.css';

function Home() {
    const specialties = [
        { id: 1, name: "Cardiology" },
        { id: 2, name: "Neurology" },
        { id: 3, name: "Orthopedics" },
        // Add more specialties as needed
    ];

    return (
        <div>
            <div className='home-container'>
                <div className='img'>
                    <header className='home-header'>
                    <h2>Welcome to Your Trusted Health Partner!</h2>
<p>
    Prioritizing your wellness, every step of the way. <br />
    Book appointments, connect with leading specialists, <br />
    and experience care that feels like home.
</p>
                    </header>
                </div>
            </div>

            {/* Speciality Section */}


            

            <div className="below-image">
                <h3 className="speciality">
                    Find your specialty
                    <p className="speciality-description">
                        Simply by a click of a button, you get to view your desired specialist
                    </p>
                </h3>
            </div>

            {/* List of Specialties */}
           
            <div>
            
        
        <div className='doctor-container' id='doctor-speciality'>
        <img src={image1} className='image' />
            <div>
                <ul className='speciality-list'>
                    <div className='first-line'>
                    <li>Neurosurgeon</li>
                    <li>Optician</li>
                    <li>Cardiologists</li>
                    </div>
                    <div className='second-line'>
                    <li>Dermatologists</li>
                    <li>Gastroenterologists</li>
                    </div>
                   
                </ul>
            </div>
        </div>
        </div>


            <div className="services-intro">
            <h3>Services</h3>
            <p className="intro-text">
                We offer a wide range of healthcare services tailored to meet your needs. 
                From emergency services to specialized care, we're here to provide you with the best treatment.
            </p>

            <div className="features">
                <div className="feature-item">
                    <img src={medicalImage} alt="Emergency Services" className="feature-icon" />
                    <h4>Emergency Services</h4>
                    <p>Immediate care available 24/7 to handle any medical emergencies.</p>
                </div>
                <div className="feature-item">
                    <img src={medicalImage1} alt="Specialists" className="feature-icon" />
                    <h4>Specialists</h4>
                    <p>Consult with top specialists across various medical fields.</p>
                </div>
                <div className="feature-item">
                    <img src={medicalImage2} alt="Easy Appointment" className="feature-icon" />
                    <h4>Easy Appointment</h4>
                    <p>Convenient online booking or phone appointments for your convenience.</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
