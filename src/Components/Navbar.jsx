// src/Navbar.js
import { useWindowScroll } from "react-use";
import React, { useEffect,useState} from 'react';
import '../css/Navbar.css';
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {Link, useNavigate} from 'react-router-dom';
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
        <a href="../../Brochure/Brochure.pdf" target="_blank">
          Brochure
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Livescore">Live Score</a>
        </li>
        <li>
          <a href="/Schedule">Schedule</a>
        </li>
        <li>
          <a href="/Result">Result</a>
        </li>
        <li>
          <a href="/Athletes">Athletes</a>
        </li>
        <li>
          <a href="/Contacts">Contact</a>
        </li>
        <li>
          <Dropdown overlay={menu}>
            <Button overlayStyle={{ outline: "none", boxShadow: "none" }}>
              Info <DownOutlined />
            </Button>
          </Dropdown>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
