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
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        navigate("/gallery"); // Navigate to Page 1
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/gallery">Gallery</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/map">Map</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="../../Brochure/Brochure.pdf" target="_blank">
          Brochure
        </Link>
      </Menu.Item>
    </Menu>
  );

  const ref =useRef(null)

  const handleClick = () => {
    
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src='/assets/logo.jpg' alt="logo" />
          </Link>
      </div>
      
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Livescores">Live Score</Link>
        </li>
        <li>
          <Link to="/Schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/Result">Result</Link>
        </li>
        <li>
          <Link to="/Athletes">Athletes</Link>
        </li>
        <li>
          <Link to="/Contacts">Contact</Link>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
      </ul>
      <button
        className="mobile-menu-icon p-4"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times">
            <GiHamburgerMenu />
          </i>
        ) : (
          <i className="fas fa-bars">
            <GiHamburgerMenu />
          </i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
