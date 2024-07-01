// src/Navbar.js
import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="#">About</a></li>
        <li><a href="#">Live Score</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">Result</a></li>
        <li><a href="#">Aquatics</a></li>
        <li><a href="#">Sponsors</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;
