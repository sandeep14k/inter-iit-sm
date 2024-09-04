import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import MatchCardSection from '../Components/MatchCardSection';
import Timeline from '../Components/Timeline';
import Sportsfilter from '../Components/Sportsfilter';
import '../css/Schedule.css';
import React from 'react'

const Schedule = () => {
  return (
    <div className='min-w-[100vw]'>
      <Navbar />
      <Sportsfilter/>
      {/* <Timeline/> */}
      <MatchCardSection />
      <Footer />
    </div>)
}

export default Schedule