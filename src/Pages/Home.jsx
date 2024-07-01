import React from 'react'
import Footer from '../Components/Footer'
import Sponser from '../Components/Sponser'
import P_IITs from '../Components/P_IITs'
import Sports from '../Components/Sports'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import SocialMediaHandles from '../Components/SocialMediaHandles'
const Home = () => {
  return (
    <div className='min-w-[100vw]'>
        <Navbar/>
        <Header />
        <SocialMediaHandles/>
        <About/>
        <P_IITs/>
        <Sports/>
        <Sponser/>
      <Footer/>
    </div>
  )
}

export default Home
