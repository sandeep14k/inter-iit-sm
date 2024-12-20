import React from "react";
import "../css/Header.css";
import { motion } from "framer-motion";

function Header({ role }) {
  return (
    <div className="section-header">
      <div className="section-title">
        {role !== "student" ? "29th": "57th"} Inter IIT <br /> {role !== "student" ? "Staff": "Sports"} Meet
      </div>
      <div className="sportsbg">{role !== "student" ? "STAFF" : "SPORTS"}</div>
      <div className="cards-container">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2}}
          whileInView="visible"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -200, opacity: 0 },
          }}
          src="../../assets/Rectangle2.png"
          alt="Image 2"
          className="card"
        />
        <motion.img
          initial={{ x: -200, opacity: 0 }}
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
        <div className="play-button"></div>
      </div>
      <div className="section-stage">
        The stage is <br />
        set where all the <br /> IITs are fighting to get the <br />
        top spot
      </div>
      <div className="section-date">IIT Kanpur </div>
      <div className="section-date2">
        {role !== "student" ? "19th Dec to 25th Dec" : "10th Dec to 17th Dec"}
      </div>
    </div>
  );
}

export default Header;
