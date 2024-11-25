import React from "react";
import '../styles/services.css';
import medicalImage from '../assets/assets/images/md15.jpg';
import medicalImage1 from '../assets/assets/images/md18.jpg';
import medicalImage2 from '../assets/assets/images/md21.jpg';

function Service() {
    return (
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
    );
}

export default Service;
