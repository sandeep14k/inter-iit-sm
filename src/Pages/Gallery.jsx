import React from 'react'
import Photos from '../Components/Photos'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MasonryGrid from '../Components/MasonryGrid'
import { Carousel } from "antd";

const Gallery = () => {
  const contentStyle = {
    height: '560px',
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
        {/* // arrows infinite={false}> */}
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>1</h3> */}
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
      <Photos/>
      <Footer/>
    </div>
  )
}

export default Gallery