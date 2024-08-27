import React from "react";
import "../css/featured.css";
import { motion } from "framer-motion";

const FeaturedEvent = () => {
  return (
    <div className="Featured">
      <div className="top-section">
        <div className="text-wrapper-35">Inter IIT Featured Events</div>
        <center>
          <div className="horizontal-line"></div>
        </center>

        <div className="image-container">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            // animate={{x:0, opacity:1}}
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -200, opacity: 0 },
            }}
            className="image-wrapper"
          >
            <img
              className="rectangle"
              alt="Rectangle"
              src="../../assets/8bba0c3775bb18e7c31e385f5c755edb.png"
            />
            <div className="image-text">
              <p className="image-number">37th</p>
              <p className="image-title">Inter IIT Aquatics Meet</p>
              <p className="image-date">4 - 8 October</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            // animate={{x:0, opacity:1}}
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 200, opacity: 0 },
            }}
            className="image-wrapper"
          >
            <img
              className="rectangle"
              alt="Rectangle"
              src="../../assets/29b6186c8a377f7251d13cfabed02ba6.png"
            />
            <div className="image-text">
              <div className="image-number">56th</div>
              <div className="image-title">Inter IIT Sports Meet</div>
              <div className="image-date">14 - 22 December</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            // animate={{x:0, opacity:1}}
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -200, opacity: 0 },
            }}
            className="image-wrapper"
          >
            <img
              className="rectangle"
              alt="Rectangle"
              src="../../assets/f3e70efe2889510d777cdc2aa2ce315a.png"
            />
            <div className="image-text">
              <div className="image-number">28th</div>
              <div className="image-title">Inter IIT Sports Meet</div>
              <div className="image-date">23 - 26 Dec</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bottom-section"></div>
    </div>
  );
};

export default FeaturedEvent;
