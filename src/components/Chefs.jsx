import React from 'react'
import Chefssection from './Chefssection'

function Chefs() {
  return (
    <div className='min-h-[100vh] w-full bg-black flex flex-col items-center text-white'>
      <h1 className='text-[28px] sm:text-[32px] font-bold pt-8 md:pt-15 md:text-[38px] lg:text-5xl'>Meet Our <span className='text-[#e78c37]'>Chefs</span></h1>
      <div className='h-1 w-20 bg-[#e78c37] mt-2.5 mb-5 xl:mt-4 xl:mb-6 2xl:mt-4 2xl:mb-6'></div>
      <p className='text-[18px] text-center font-semibold text-[#f1d3b3f5] md:w-160'>Our talented culinary team brings passion, creativity, and years of experience to every dish they create.</p>
      
      <Chefssection />
    </div>
  )
}

export default Chefs
