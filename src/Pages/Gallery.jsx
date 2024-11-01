import React from 'react'
import Photos from '../Components/Photos'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Carousel } from "antd";

import Transition from "../Components/PageTransition/PageTransition";
// import "../css/Gallery.css";

const Gallery = () => {
  const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
      <Transition>
    <div>
      {/* <div >
        <Carousel autoplay effect="fade" >
          <div style={contentStyle}>
            <img src="/gallery/cricket3.jpg" alt=""/>
          </div>
          <div>
            <img src="/gallery/chess1.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/football2.JPG" alt="" />
          </div>
          <div>
            <img src="/gallery/hockey1.jpg" alt="" />
          </div>
        </Carousel>
      </div> */}
      <div className='photo-sep'>Gallery<div><hr className='custom-line'></hr></div></div>
      <Photos/>
    </div>
      </Transition>
  )
}

export default Gallery
