import React from 'react'
import Sponser from '../Components/Sponser'
import P_IITs from '../Components/P_IITs'
import Sports from '../Components/Sports'
import About from '../Components/About'
import Header from '../Components/Header'
import SocialMediaHandles from '../Components/SocialMediaHandles'
import FeaturedEvent from '../Components/featured_event'
const Home = ({role}) => {
  return (
    <div className='min-w-[100vw]'>
        <Header role={role}/>
        <SocialMediaHandles role={role}/>
        <About role={role}/>
        <FeaturedEvent role={role}/>
        <P_IITs role={role}/>
        <Sports role={role}/>
        {/* <Sponser role={role}/> */}
    </div>
  )
}

export default Home
