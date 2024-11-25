import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Speciality from './pages/Speciality';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import DoctorLogin from './components/Login';
import Signup from './components/Signup';  // Import your Signup component
import DoctorProfileList from './pages/DoctorProfileList';
import DoctorProfile from './components/DoctorDashboard';
import BookAppointment from './pages/booking';
import DoctorList from './pages/DoctorList';
import EditProfile from './components/EditDoctorDashboard';
import PatientRegister from './Patient Form/PatientReg';
import PatientLogin from './Patient Form/PatientLogin';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route path="/register" element={<Signup />} />
        <Route path='/doctor/dashboard' element={<DoctorProfile />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path="/PatientReg" element={<PatientRegister />} />
        <Route path="/PatientLogin" element={<PatientLogin />} />
        <Route path="/doctorList" element={<DoctorList />} />
        <Route path="/doctor/:doctorId" element={<DoctorProfileList />} />
        <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
