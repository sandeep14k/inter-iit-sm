import React from 'react';
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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar is displayed on every page */}
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Livescores" element={<Livescores />} />
        <Route path="/Athletes" element={<Athletes />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
      <Footer /> {/* Footer is displayed on every page */}
    </BrowserRouter>
  );
};

export default App;
