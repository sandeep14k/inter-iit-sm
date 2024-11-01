// src/Navbar.js
import { useWindowScroll } from "react-use";
import React, { useEffect,useRef,useState} from 'react';
import '../css/Navbar.css';
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {Link, useNavigate} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
// import Brochure from "../../public/Brochure/Brochure.pdf";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("/"); // State to track active tab
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        navigate("/gallery");
        break;
      default:
        break;
    }
  };

  const handleClick = (tab) => {
    console.log(`Clicked on ${tab}`);
    setActiveTab(tab); // Set active tab on click
  };

  useEffect(() => {
    console.log("Current activeTab:", activeTab);
  }, [activeTab]);

  return (
    <nav className="navbar">
      <div className="logo-motto">
        <div className="logo">
          <Link to="/" onClick={() => handleClick("/")}>
            <img src="/assets/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="Motto">Awe Conquer Inspire</div>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link 
            to="/" 
            className={activeTab === "/" ? "active-link" : ""}
            onClick={() => handleClick("/")}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/Livescores" 
            className={activeTab === "/Livescores" ? "active-link" : ""}
            onClick={() => handleClick("/Livescores")}
          >
            Live Score
          </Link>
        </li>
        <li>
          <Link 
            to="/Schedule" 
            className={activeTab === "/Schedule" ? "active-link" : ""}
            onClick={() => handleClick("/Schedule")}
          >
            Schedule
          </Link>
        </li>
        <li>
          <Link 
            to="/Result" 
            className={activeTab === "/Result" ? "active-link" : ""}
            onClick={() => handleClick("/Result")}
          >
            Result
          </Link>
        </li>
        <li>
          <Link 
            to="/Athletes" 
            className={activeTab === "/Athletes" ? "active-link" : ""}
            onClick={() => handleClick("/Athletes")}
          >
            Players
          </Link>
        </li>
        <li>
          <Link 
            to="/Contacts" 
            className={activeTab === "/Contacts" ? "active-link" : ""}
            onClick={() => handleClick("/Contacts")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/gallery" 
            className={activeTab === "/gallery" ? "active-link" : ""}
            onClick={() => handleClick("/gallery")}
          >
            Gallery
          </Link>
        </li>
      </ul>
      <button
        className="mobile-menu-icon p-4"
        onClick={() => setIsMobile(!isMobile)}
      >
        <GiHamburgerMenu color = "white"/>
      </button>
    </nav>
  );
};

export default Navbar;

