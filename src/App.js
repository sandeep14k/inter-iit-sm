import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from "./Pages/Home";
import Schedule from "./Pages/Schedule";
import Result from "./Pages/Result";
import Livescores from "./Pages/Livescores";
import Athletes from "./Pages/Athletes";
import Contacts from './Pages/Contacts';
import Gallery from './Pages/Gallery';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import './App.css';
import { AnimatePresence } from 'framer-motion';
import Loader from './Components/PageTransition/Loader';
import Selection from './Pages/Selection';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('userRole') || null);

  useEffect(() => {
    if (role) {
      localStorage.setItem('userRole', role);
    }
  }, [role]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem('userRole', newRole);
  };

  const handleClearRole = () => {
    setRole(null);
    localStorage.removeItem('userRole');
  };

  if (!role) {
    return <Selection setRole={handleRoleChange} />;
  }

  const metaDescriptionContent = role === 'student'
    ? "Welcome to the Inter IIT Sports Meet 2024! Stay updated with live scores, schedules, athlete highlights, and more from India’s premier intercollegiate sports event."
    : "Explore the 29th Inter IIT Staff Sports Meet. Stay informed with event schedules, team highlights, and updates for IIT staff’s exciting annual competition.";

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Inter IIT Sports Meet 2024</title>
          <meta name="description" content={metaDescriptionContent} />
        </Helmet>
        <Navbar role={role} />
        <Loader show={loading} />
        <AnimatePresence>
          <div className={role ? 'app-content' : ''}>
            <Routes>
              <Route path="/" element={<Home role={role} />} />
              <Route path="/Result" element={<Result role={role} />} />
              <Route path="/Schedule" element={<Schedule role={role} />} />
              <Route path="/Livescores" element={<Livescores role={role} />} />
              <Route path="/Athletes" element={<Athletes role={role} />} />
              {role === 'student' && <Route path="/Contacts" element={<Contacts role={role} />} />}
              <Route path="/gallery" element={<Gallery role={role} />} />
            </Routes>
          </div>
        </AnimatePresence>
        <Footer onRoleChange={handleClearRole} />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
