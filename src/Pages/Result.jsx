import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import MatchCardR from '../Components/MatchCardR';
import Timeline from '../Components/Timeline';
import '../css/Schedule.css';
import React from 'react'

const Schedule = () => {
  return (
    <div className='min-w-[100vw]'>
      <Navbar />
      <fieldset >
        <legend className='md:text-[50px] sm:text-[40px] text-[30px]  md:px-[75px] px-[20px]'>Result</legend></fieldset>
      <div className="button-container">
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
        <button className="button">Cricket Mens</button>
      </div>
      <Timeline/>
      <MatchCardR/>
      <Footer />
    </div>)
}

export default Schedule