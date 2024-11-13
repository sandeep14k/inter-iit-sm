import React from 'react'
import '../css/footer.css';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = ({ onRoleChange }) => {
  return (
    <footer className="min-h-[60vh] bg-black w-[100vw]">
      <div className="py-[75px] sm:px-5 px-1 grid md:grid-cols-3 grid-cols-2 sm:gap-10 gap-[0]">
        <div className="flex flex-col sm:gap-[50px] gap-[25px] mx-5">
          <span className="text-white sm:text-2xl text-lg font-semibold main-txt border-b-2 border-white min-h-[60px]">
            Inter IIT Sports Meet 2024
          </span>
          <span className="text-white sm:text-xl text-lg border-b-2 border-white min-h-[70px]">
            Official Website of INTER IIT Sports Meet 2024 Copyright &copy;
            2024, IIT Kanpur, All rights reserved
          </span>
          <span className="text-white sm:text-2xl text-lg font-semibold main-txt">
            Connect with us!
            <div className="flex gap-4 my-2">
              <a href="https://x.com/interiit_sports?s=09"
              target='_blank'>

                <FaXTwitter className="text-white sm:text-3xl text-xl hover:text-gray-400 transition-all" />
              </a>
              <a
                href="https://www.instagram.com/interiit_sports2024?igsh=MmpteTdsMTFnemg2"
                target="_blank"
              >
                <CiInstagram className="text-white sm:text-3xl text-xl hover:text-gray-400 transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/company/inter-iit-sports-meet/about/"
                target="_blank"
              >
                <CiLinkedin className="text-white sm:text-3xl text-xl hover:text-gray-400 transition-all" />
              </a>
            </div>
          </span>
          {/* Change Section Button */}
        <button
          onClick={onRoleChange}
          className="change-section-button"
          style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer', fontSize: '1rem' }}
        >
          Change Section
        </button>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-white sm:text-2xl text-xl font-semibold main-txt">
            Quick Links
          </span>
          <a href="/" className="flex items-center gap-3">
            <FaArrowRight className="text-white sm:text-xl text-lg" />
            <span className="text-white sm:text-xl text-lg">Home</span>
          </a>
          <a href="/Schedule" className="flex items-center gap-3">
            <FaArrowRight className="text-white sm:text-xl text-lg" />
            <span className="text-white sm:text-xl text-lg">Schedule</span>
          </a>
          <a href="/Result" className="flex items-center gap-3">
            <FaArrowRight className="text-white sm:text-xl text-lg" />
            <span className="text-white sm:text-xl text-lg">Results</span>
          </a>
          <a
            href="/Brochure/Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <FaArrowRight className="text-white sm:text-xl text-lg" />
            <span className="text-white sm:text-xl text-lg">Brochure</span>
          </a>
        </div>
        <div className="flex flex-col md:items-start justify-center items-center sm:gap-[30px] gap-[10px] md:col-span-1 col-span-2">
          <div>
            <span className="text-white sm:text-2xl text-xl font-semibold md:mx-0  main-txt">
              Reach US
            </span>
          </div>
          <div className="flex md:flex-col flex-row sm:gap-[30px] gap-1">
            <div className="flex flex-col w-1/3 md:w-[100%] text-white gap-4">
              <div className="flex sm:gap-3 gap-1">
                <CiHome className="text-white text-2xl" />
                <span className="sm:text-xl text-lg">Get in Touch</span>
              </div>
              <div className="sm:text-xl text-md">
                Sports Complex, IIT Kanpur, Kalyanpur, Kanpur, Uttar Pradesh -
                208016
              </div>
            </div>
            <div className="flex flex-col w-1/3 md:w-[100%] text-white gap-3">
              <div className="flex gap-3">
                <IoCallOutline className="text-white text-2xl" />
                <span className="sm:text-xl text-lg h-14">Call Us</span>
              </div>
              <div className="sm:text-xl text-md">
                Hemant Tiwari (Organising Secretary) - +919838189697
              </div>
              <div className="sm:text-xl text-md">
                Health Centre - 0512-259-7777
              </div>
              <div className="sm:text-xl text-md">
                Security Control Office - 0512-679-7999
              </div>
            </div>
            <div className="flex flex-col w-1/3 md:w-[100%] text-white gap-4">
              <div className="flex gap-3">
                <CiMail className="text-white text-2xl" />
                <span className="sm:text-xl text-md h-14">Mail Us</span>
              </div>
              <div className="sm:text-xl text-md break-words cursor-pointer">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ocs_iism24@iitk.ac.in"
                  target="_blank"
                >
                  ocs_iism24@iitk.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
