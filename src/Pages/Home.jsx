import React from 'react'
import Sponser from '../Components/Sponser'
import P_IITs from '../Components/P_IITs'
import Sports from '../Components/Sports'
import About from '../Components/About'
import Header from '../Components/Header'
import SocialMediaHandles from '../Components/SocialMediaHandles'
import FeaturedEvent from '../Components/featured_event'
const Home = () => {
  return (
    <div className='min-w-[100vw]'>
        <Header />
        <SocialMediaHandles/>
        <About/>
        <FeaturedEvent />
        <P_IITs/>
        <Sports/>
        <Sponser/>
    </div>
  )
}

export default Home
