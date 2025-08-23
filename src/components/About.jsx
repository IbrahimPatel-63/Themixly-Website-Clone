import React from 'react'
import dish1 from './images/dish1.webp'

function About() {
  return (
    <div className='h-360 sm:h-300 md:h-285 lg:h-210 xl:h-185 2xl:h-[calc(100vh-80px)] w-full bg-black flex flex-col lg:flex-row text-white'>
    <div className='h-[60%] sm:h-[55%] lg:h-full lg:w-[50%] w-full bg-black px-4 pt-8 2xl:pt-8 sm:px-6 lg:px-8 2xl:pl-38 md:pt-20'>
      <h1 className='text-[28px] font-bold md:text-4xl lg:text-5xl'>Our <span className='text-[#DAA520]'>Story</span></h1>
      <div className='h-1 w-19   bg-[#DAA520] mt-2.5 mb-6 md:mt-4'></div>
      <p className='text-xl text-[#b8a474]'>Founded in 2018, RestoOne has been a beacon of culinary excellence, combining traditional techniques with modern innovation. Our journey began with a simple mission: to create memorable dining experiences that celebrate the art of exceptional cuisine.br <br /><br />We believe that great food tells a story — of the land it comes from, the hands that prepare it, and the moments it creates. Every dish at RestoOne is crafted with locally-sourced, seasonal ingredients, ensuring that each bite delivers both flavor and sustainability. <br /><br />Our commitment to excellence has earned us recognition from food critics and loyal patrons alike, but our greatest reward is the joy we bring to every table. <br /><br /></p>
      <div className='flex items-center px-5 pt-8 2xl:pt-4 justify-between text-center'>
        <div>
          <p className='font-bold text-xl md:text-2xl text-[#b88b20]'>50+</p>
          <p className='text-[#ccc3ae]'>Signature Dishes</p>
        </div>

          <div>
          <p className='font-bold text-xl md:text-2xl text-[#b88b20]'>5 STAR</p>
          <p className='text-[#ccc3ae]'>Average Rating</p>
        </div>

          <div>
          <p className='font-bold text-xl md:text-2xl text-[#b88b20]'>10K+</p>
          <p className='text-[#ccc3ae]'>Happy Customers</p>
        </div>
      </div>
    </div>




    <div className='h-[40%] sm:h-[45%] lg:h-full lg:w-[50%] w-full bg-black px-4 py-5 '>
      <div className='h-full w-full lg:h-[65%] 2xl:h-[80%] 2xl:w-[80%] lg:mt-40 xl:mt-25 2xl:mt-10  rounded-2xl overflow-hidden'><img src={dish1} alt="dish" className='h-full w-full object-cover' loading='lazy'/></div>
    </div>
  </div>

  )
}

export default About
