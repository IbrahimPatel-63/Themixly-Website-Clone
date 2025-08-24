import React from 'react'
import dish1 from './images/dish1.webp'

function About() {
  return (
   <div className='min-h-[100vh] lg:min-h-[105vh] xl:min-h-[90vh] w-full bg-black flex flex-col lg:flex-row text-white'>
    <div className='max-h-[125vh] w-full lg:h-100vh lg:w-1/2 pt-8 px-4 md:pt-20 2xl:pl-38 '>
      <h1 className='text-[28px] md:text-4xl lg:text-5xl font-bold'>Our <span className='text-[#DAA520]'>Story</span></h1>
      <div className='h-1 w-19 mt-2.5 mb-6 bg-[#DAA520]'></div>
      <p className='text-xl md:text-[19px] text-[#D8D4D0] '>Founded in 2018, RestoOne has been a beacon of culinary excellence, combining traditional techniques with modern innovation. Our journey began with a simple mission: to create memorable dining experiences that celebrate the art of exceptional cuisine. <br /><br />
         We believe that great food tells a story — of the land it comes from, the hands that prepare it, and the moments it creates. Every dish at RestoOne is crafted with locally-sourced, seasonal ingredients, ensuring that each bite delivers both flavor and sustainability. <br /><br />
         Our commitment to excellence has earned us recognition from food critics and loyal patrons alike, but our greatest reward is the joy we bring to every table.</p>

         <div className=' flex justify-between gap-5 mt-10 sm:px-10 2xl:mt-15'>

          <div className='text-center'>
            <p className='text-xl md:text-2xl font-bold text-[#b88b20]'>50+</p>
            <p className='font-semibold text-[#ccc3ae]'>Signature Dishes</p>
          </div>

             <div className='text-center'>
            <p className='text-xl md:text-2xl font-bold text-[#b88b20]'>5 Star</p>
            <p className='font-semibold text-[#ccc3ae]'>Average Rating</p>
          </div>

             <div className='text-center'>
            <p className='text-xl md:text-2xl font-bold text-[#b88b20]'>10K+</p>
            <p className='font-semibold text-[#ccc3ae]'>Happy Customers</p>
          </div>

         </div>
    </div>


    <div className='h-[80vh] w-full lg:h-100vh lg:mt-30 lg:w-1/2  flex justify-center items-center 2xl:justify-start 2xl:pl-5'>
      <div className='h-[85%] w-[95%] 2xl:w-[80%] bg-red-400 rounded-2xl overflow-hidden '><img src={dish1} alt="dish" className='h-full w-full object-cover' /></div>
    </div>

   </div>
  )
}

export default About
