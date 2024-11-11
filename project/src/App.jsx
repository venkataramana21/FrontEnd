import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Services from './pages/Services/Services';

import Register from '../src/pages/Register/Register';
import Login from './pages/login/login';
import EmergencyContact from './pages/EmergencyContact/EmergencyContact';
import Home1 from './pages/Home/Home1';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/emergency-contact" element={<EmergencyContact />} />
        <Route path="/Home1" element={<Home1/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
