import React from 'react'
import Photos from '../Components/Photos'
import Transition from "../Components/PageTransition/PageTransition";

const Gallery = ({role}) => {
  // const contentStyle = {
  //   height: '450px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  return (
      <Transition>
    <div>
      <div className='photo-sep'>Gallery<div><hr className='custom-line'></hr></div></div>
      <Photos/>
    </div>
      </Transition>
  )
}

export default Gallery
