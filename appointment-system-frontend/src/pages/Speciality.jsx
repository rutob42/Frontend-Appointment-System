import React from 'react';
import '../styles/Speciality.css';
import image1 from '../assets/assets/images/md18.jpg'
function Speciality(){
    return(
        <div>
            <img src={image1} className='image' />
        
        <div className='doctor-container' id='doctor-speciality'>
            
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
    )
}

export default Speciality;