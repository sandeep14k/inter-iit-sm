import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-[100vw] py-10 bg-[#242424] flex lg:flex-row flex-col lg:justify-between items-center">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        // animate={{x:0, opacity:1}}
        transition={{ duration: 0.5 }}
        whileInView="visible"
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: -200, opacity: 0 },
        }}
        className="md:w-[40vw] flex justify-center items-center md:h-[30vw] w-[100vw] h-[30vh] relative "
      >
        <img
          src="../../About/about.svg"
          alt=""
          className="saturate-[0.4] contrast-[0.7] md:w-[40vw] md:h-[30vw] w-[100vw] h-[30vh] object-cover"
        />
        <span className="about font-bold md:text-[10vw] text-[12vw] text-white absolute md:right-[20%] md:top-[25%] right-[32%]">
          About
        </span>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        delay={0.5}
        // animate={{x:0, opacity:1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView="visible"
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: 200, opacity: 0 },
        }}
        className="lg:w-[50vw] w-[95vw] flex flex-col lg:items-end items-center lg:pr-[100px] text-white"
      >
        <div className="my-5 txt lg:text-lg md:text-sm text-[13px]">
          Started in 1961, the Inter IIT Sports Meet has an illustrious legacy
          as the longest-running inter-collegiate sports event, showcasing the
          prowess of India's top engineering institutions. With unwavering
          dedication and a commitment to excellence, this event brings together
          over 4,000 talented athletes from all 23 IITs, competing in 13 diverse
          sports, all vying for the coveted General Championship Trophy.
        </div>
        <div className="txt lg:text-lg md:text-sm text-[13px]">
          The Inter IIT Sports Meet is an eagerly anticipated annual sports
          tournament of the Indian Institutes of Technology. Typically organized
          in December, the Aquatics events are held separately in October,
          making it a highlight on the academic calendar.
        </div>
        <div className="txt w-[120px] lg:text-[14px] text-[12px]  my-5 text-end">
          Preparation for the inter IITs starts way before the event with
          hundreds of students involved in the success of the event
        </div>
      </motion.div>
    </div>
  );
};

export default About;
