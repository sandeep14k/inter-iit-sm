// src/Navbar.js
import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><a href="/">Logo</a></div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="/About">About</a></li>
        <li><a href="/Livescore">Live Score</a></li>
        <li><a href="/Schedule">Schedule</a></li>
        <li><a href="/Result">Result</a></li>
        <li><a href="/Athletes">Athletes</a></li>
        <li><a href="/Contacts">Contact</a></li>
        <li><a href="/Info">Info</a></li>
      </ul>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;
