import React from 'react'
import Photos from '../Components/Photos'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Carousel } from "antd";

const Gallery = () => {
  const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <Navbar/>
      <div >
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
      </div>
      <h2 className='photo-sep'>Gallery</h2>
      <Photos/>
      <Footer/>
    </div>
  )
}

export default Gallery