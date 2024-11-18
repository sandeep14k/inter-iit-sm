import React from 'react'
import '../css/Sponser.css'

const Sponser = () => {
  return (
    <div className='SponsorBox'>
        <fieldset >
            <legend className='md:text-[5vh] sm:text-[5vh] text-[5vh]  md:px-[75px] px-[20px]'>Sponsorship</legend></fieldset>
      <div className='grid grid-cols-1 sm:grid-cols-3 content-center pt-5'>
        <div className='flex flex-col justify-center items-center gap-5'>

            <div className='md:w-[200px] md:h-[220px]  w-[150px] h-[150px] flex justify-center items-center'>

            <img src="../../Sponsors/Gujurat_Tourism.png" alt=""/>
            </div >
            <span className='md:text-2xl text-xl font-semibold'>Tourism Partner</span>
            <div className='md:w-[250px] md:h-[250px] w-[200px] h-[200px]  flex justify-center items-center'>

            <img src="../../Sponsors/easemytrip-com-seeklogo.svg" alt=""/>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>

            <div className='md:w-[200px] md:h-[220px] w-[150px] h-[150px]  flex justify-center items-center'>

            <img src="../../Sponsors/Hyperice.jpeg" alt=""/>
            </div >
            <span className='md:text-2xl text-xl font-semibold'>Recovery Partner</span>
            <div className='md:w-[250px] md:h-[250px] w-[200px] h-[200px] flex justify-center items-center'>

            <img src="../../Sponsors/hitbullseye.png" alt=""/>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>

            <div className='md:w-[200px] md:h-[220px] w-[150px] h-[150px] flex justify-center items-center'>

            <img src="../../Sponsors/MiraeAsset.jpeg" alt=""/>
            </div >
            <span className='md:text-2xl text-xl font-semibold'>Wealth Management Partner</span>
            <div className='md:w-[250px] md:h-[250px] w-[200px] h-[200px] flex justify-center items-center'>

            <img src="../../Sponsors/Afton.png" alt="" className='invert'/>
            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Sponser
