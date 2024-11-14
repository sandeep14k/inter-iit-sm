// src/Navbar.js
import { useWindowScroll } from "react-use";
import React, { useEffect,useRef,useState} from 'react';
import '../css/Navbar.css';
import {Link, useNavigate} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ role }) => {
  const [activeTab, setActiveTab] = useState(window.location.pathname); // State to track active tab
  const navigate = useNavigate();
  

  const handleClick = (tab) => {
    console.log(`Clicked on ${tab}`);
    setActiveTab(tab); // Set active tab on click
  };

  useEffect(() => {
    console.log("Current activeTab:", activeTab);
  }, [activeTab]);

  return (
    <>
    <nav className="navbar">
      <div className="logo-motto">
        <div className="logo">
          <Link to="/" onClick={() => handleClick("/")}>
            <img src="/assets/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="Motto">Awe. Conquer. Inspire.</div>
      </div>
      <input type="checkbox" hidden name="showNav" id="showNav" />
      <ul className="nav-links">
        <li className={activeTab === "/" ? "active-link" : ""}>
          <Link 
            to="/" 
            
            onClick={() => handleClick("/")}
          >
            About
          </Link>
        </li>
        <li className={activeTab === "/Livescores" ? "active-link" : ""}>
          <Link 
            to="/Livescores" 
            
            onClick={() => handleClick("/Livescores")}
            >
            Live Score
          </Link>
        </li>
        <li className={activeTab === "/Schedule" ? "active-link" : ""}>
          <Link 
            to="/Schedule" 
            
            onClick={() => handleClick("/Schedule")}
            >
            Schedule
          </Link>
        </li>
        <li className={activeTab === "/Result" ? "active-link" : ""}>
          <Link 
            to="/Result" 
            
            onClick={() => handleClick("/Result")}
            >
            Result
          </Link>
        </li>
        <li className={activeTab === "/Athletes" ? "active-link" : ""}>
          <Link 
            to="/Athletes" 
            
            onClick={() => handleClick("/Athletes")}
            >
            Players
          </Link>
        </li>
        <li className={activeTab === "/gallery" ? "active-link" : ""}>
          <Link 
            to="/gallery" 
            
            onClick={() => handleClick("/gallery")}
            >
            Gallery
          </Link>
        </li>
        {role !== "staff" && (
          <li className={activeTab === "/Contacts" ? "active-link" : ""}>
            <Link to="/Contacts" onClick={() => handleClick("/Contacts")}>Contact</Link>
          </li>
        )}
      </ul>
      <button
        className="mobile-menu-icon p-4"
        >
        <label htmlFor="showNav">

        <GiHamburgerMenu color = "black"/>
        </label>
      </button>
    </nav>
        </>
  );
};

export default Navbar;

