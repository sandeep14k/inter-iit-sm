/* eslint-disable jsx-a11y/img-redundant-alt */
// src/SectionHeader.js

import React from "react";
import "../css/Header.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="section-header">
      <div className="section-title">
        57th Inter IIT <br />
        Sports Meet
      </div>
      <div className="sportsbg">SPORTS</div>
      <div className="cards-container">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          // animate={{x:0, opacity:1}}
          transition={{ duration: 0.5, delay: 0 }}
          whileInView="visible"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -200, opacity: 0 },
          }}
          src="../../assets/Rectangle1.png"
          alt="Image 1"
          className="card"
        />
        <motion.img
          initial={{ y: 400, opacity: 0 }}
          // animate={{x:0, opacity:1}}
          transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
          whileInView="visible"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 400, opacity: 0 },
          }}
          src="../../assets/Rectangle2.png"
          alt="Image 2"
          className="card"
        />
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          // animate={{x:0, opacity:1}}
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -200, opacity: 0 },
          }}
          src="../../assets/Rectangle3.png"
          alt="Image 3"
          className="card"
        />
      </div>
      <div className="section-stage">
        The stage is <br />
        set where all the <br /> IITs are fighting to get the <br />
        top spot
      </div>
      <div className="section-date">IIT Kanpur </div>
      <div className="section-date2">12th Dec to 20th Dec</div>
    </div>
  );
}

export default Header;
