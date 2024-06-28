import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className='min-h-[60vh] bg-[rgb(3,81,164)] w-[100vw]'>
        <div className='py-[75px] px-5 grid md:grid-cols-3 grid-cols-2 gap-10'>
            <div className='flex flex-col gap-[50px] mx-5'>
                <span className='text-white text-2xl font-semibold main-txt border-b-2 border-blue-800 min-h-[60px]'>Inter IIT Sports Meet 2023</span>
                <span className='text-white text-xl border-b-2 border-blue-800 min-h-[70px]'>Official Website of INTER IIT Sports Meet 2024 Copyright &copy; 2024, IIT Kanpur, All rights reserved</span>
                <span className='text-white text-2xl font-semibold main-txt'>Connect with us!
                <div className='flex gap-4 my-2'>
                    <a href="">
                        <CiFacebook className='text-white text-3xl hover:text-gray-400 transition-all'/>
                    </a>
                    <a href="">
                        <CiInstagram className='text-white text-3xl hover:text-gray-400 transition-all'/>
                    </a>
                    <a href="">
                        <CiLinkedin className='text-white text-3xl hover:text-gray-400 transition-all'/>
                    </a>
                </div>
                </span>
            </div>
            <div className='flex flex-col gap-6'>
                <span className='text-white text-2xl font-semibold main-txt'>Quick Links</span>
                <a href="" className='flex items-center gap-3'>
                    <FaArrowRight className='text-white text-xl'/>
                    <span className='text-white text-xl'>Home</span>
                </a>
                <a href="" className='flex items-center gap-3'>
                    <FaArrowRight className='text-white text-xl'/>
                    <span className='text-white text-xl'>Schedule</span>
                </a>
                <a href="" className='flex items-center gap-3'>
                    <FaArrowRight className='text-white text-xl'/>
                    <span className='text-white text-xl'>Results</span>
                </a>
            </div>
            <div className='flex flex-col md:items-start justify-center items-center gap-[30px] md:col-span-1 col-span-2'>
                <div>
                    
                <span className='text-white text-2xl font-semibold md:mx-0  main-txt'>Reach US</span>
                </div>
                <div className='flex md:flex-col flex-row gap-[30px]'>

                <div className='flex flex-col w-1/3 md:w-[100%] text-white gap-4'>
                    <div className='flex gap-3'>

                    <CiHome className='text-white text-2xl'/>
                    <span className='text-xl'>Get in Touch</span>
                    </div>
                    <div className='text-xl'>Sports Complex, IIT Kanpur, Kalyanpur, Kanpur, Uttar Pradesh - 208016</div>
                </div>
                <div className='flex flex-col w-1/3 md:w-[100%] text-white gap-3'>
                    <div className='flex gap-3'>

                    <IoCallOutline className='text-white text-2xl'/>
                    <span className='text-xl'>Call Us</span>
                    </div>
                    <div className='text-xl'>XYZ - 1234567890</div>
                    <div className='text-xl'>XYZ - 1234567890</div>
                    <div className='text-xl'>XYZ - 1234567890</div>
                </div>
                <div className='flex flex-col w-1/3 md:w-[100%] text-white gap-4'>
                    <div className='flex gap-3'>

                    <CiMail className='text-white text-2xl'/>
                    <span className='text-xl'>Mail Us</span>
                    </div>
                    <div className='text-xl'>abc@gmail.com</div>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
