import React from 'react'

const Loader = ({show}) => {
  return show &&(
    <div className='absolute h-[95vh] top-[45%] right-[46%] z-10' >
      <video src="../../../assets/loader.webm" autoPlay muted loop className=' h-[100px]'></video>
    </div>
  )
}

export default Loader
