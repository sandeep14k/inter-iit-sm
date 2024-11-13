import React from "react";
import { motion } from "framer-motion";

const About = ({ role }) => {
  return (
    <div className="w-[100vw] py-10 bg-[#242424] flex lg:flex-row flex-col lg:justify-between items-center">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
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
        <span className="about font-bold md:text-[10vw] text-[15vw] text-white absolute md:right-[20%] md:top-[25%] right-[29%]">
          About
        </span>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView="visible"
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: 200, opacity: 0 },
        }}
        className="lg:w-[50vw] w-[95vw] flex flex-col lg:items-end items-center lg:pr-[100px] text-white"
      >
        {role === "student" ? (
          <>
            <div className="my-5 txt xl:text-lg md:text-sm text-[13px]">
              Started in 1961, the Inter IIT Sports Meet has an illustrious legacy
              as the longest-running inter-collegiate sports event, showcasing the
              prowess of India's top engineering institutions. With unwavering
              dedication and a commitment to excellence, this event brings together
              over 4,000 talented athletes from all 23 IITs, competing in 13 diverse
              sports, all vying for the coveted General Championship Trophy.
            </div>
            <div className="txt xl:text-lg md:text-sm text-[13px]">
              The Inter IIT Sports Meet is an eagerly anticipated annual sports
              tournament of the Indian Institutes of Technology. Typically organized
              in December, the Aquatics events are held separately in October,
              making it a highlight on the academic calendar.
            </div>
            <div className="lg:inline flex txt lg:w-[120px] w-[95vw] xl:text-[14px] text-[12px] my-5  text-end lg:pl-[0] pl-[60vw]">
              Preparation for the inter IITs starts way before the event with
              hundreds of students involved in the success of the event.
            </div>
          </>
        ) : (
          <>
            <div className="my-5 txt xl:text-lg md:text-sm text-[13px]">
              Started in 1992, the Inter IIT Staff Sports Meet holds a prestigious place in fostering camaraderie and sportsmanship among the staff of India's premier engineering institutions. This annual event unites over 1,500 participants from all 23 IITs, showcasing their talent and enthusiasm across a variety of sports.
            </div>
            <div className="txt xl:text-lg md:text-sm text-[13px]">
              The Staff Sports Meet is a testament to the athletic prowess and team spirit of IIT employees, competing with the same dedication as the students for the honor of their institutions. Usually held in December, this gathering strengthens bonds and promotes wellness, making it a highly anticipated event in the IIT calendar.
            </div>
            <div className="lg:inline flex txt lg:w-[120px] w-[95vw] xl:text-[14px] text-[12px] my-5  text-end lg:pl-[0] pl-[60vw]">
              Preparation for the inter IITs starts way before the event with
              hundreds of students involved in the success of the event.
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default About;
