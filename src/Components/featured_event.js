import React from "react";
import "../css/featured.css";
import { motion } from "framer-motion";

const FeaturedEvent = () => {
  return (
    <div className="Featured">
      <div className="top-section">
        <div className="text-wrapper-35 md:text-[3.5vw] sm:text-[4vw] text-[8vw]">
          Inter IIT Featured Events
        </div>
        <center>
          <div className="horizontal-line"></div>
        </center>

        <div className="image-container">
          <motion.div
            initial={{ x: -75, opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -75, opacity: 0 },
            }}
            className="image-wrapper"
          >
            <img
              className="rectangle"
              alt="Rectangle"
              src="../../assets/8bba0c3775bb18e7c31e385f5c755edb.png"
            />
            <div className="image-text">
              <p className="image-number">38th</p>
              <p className="image-title">Inter IIT Aquatics Meet</p>
              <p className="image-date">1 - 5 October</p>
            </div>
          </motion.div>
          <motion.div
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
              <div className="image-number">57th</div>
              <div className="image-title">Inter IIT Sports Meet</div>
              <div className="image-date">10 - 17 December</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 75, opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 75, opacity: 0 },
            }}
            className="image-wrapper"
          >
            <img
              className="rectangle"
              alt="Rectangle"
              src="../../assets/f3e70efe2889510d777cdc2aa2ce315a.png"
            />
            <div className="image-text">
              <div className="image-number">29th</div>
              <div className="image-title">Inter IIT Staff Meet</div>
              <div className="image-date">19 - 25 December</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bottom-section"></div>
    </div>
  );
};

export default FeaturedEvent;
