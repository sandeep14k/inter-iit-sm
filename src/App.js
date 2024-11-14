import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import axios from 'axios';
import Selection from './Pages/Selection'; // New Selection page

const App = () => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('userRole') || null); // New state to store user role

  // Save role to local storage whenever it changes
  useEffect(() => {
    if (role) {
      localStorage.setItem('userRole', role);
    }
  }, [role]);

  // Function to handle setting a new role
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem('userRole', newRole);
  };

  // Function to clear the role and redirect to selection page
  const handleClearRole = () => {
    setRole(null);
    localStorage.removeItem('userRole'); // Remove role from local storage
  };

  if (!role) {
    return <Selection setRole={handleRoleChange} />;
  }


  return (
    <BrowserRouter>
      <Navbar role={role} /> {/* Pass role to Navbar for role-specific items */}
      <Loader show={loading} />
      <AnimatePresence>
        <div className={role ? 'app-content' : ''}>
        <Routes>
          {/* Conditionally render routes based on selected role */}
          {role === 'student' ? (
            <>
              <Route path="/" element={<Home role={role}/>} />
              <Route path="/Result" element={<Result role={role} />} />
              <Route path="/Schedule" element={<Schedule role={role}/>} />
              <Route path="/Livescores" element={<Livescores role={role}/>} />
              <Route path="/Athletes" element={<Athletes role={role}/>} />
              <Route path="/Contacts" element={<Contacts role={role} />} />
              <Route path="/gallery" element={<Gallery role={role} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home role={role}/>} />
              <Route path="/Result" element={<Result role={role}/>} />
              <Route path="/Schedule" element={<Schedule role={role}/>} />
              <Route path="/Livescores" element={<Livescores role={role} />} />
              <Route path="/Athletes" element={<Athletes role={role}/>} />
              <Route path="/Contacts" element={<Contacts role={role}/>} />
              <Route path="/gallery" element={<Gallery role={role}/>} />
            </>
          )}
        </Routes>
       </div>
      </AnimatePresence>
      <Footer onRoleChange={handleClearRole} /> 
    </BrowserRouter>
  );
};

export default App;
