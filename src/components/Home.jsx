import React from 'react'
import hero from './images/hero-image.webp'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='h-[calc(100vh-80px)] w-full  relative'>
      <img src={hero} alt="Hero-Image" className='h-full w-full object-cover' loading='lazy' />
      <div className='h-full w-full bg-[#00000096] absolute top-0 flex items-center  flex-col  sm:pt-40 text-white pt-28'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-50 sm:w-full text-center font-semibold leading-12'>Welcome to <span className='text-[#e78c37]'> RestoOne</span></h1>
        <p className='text-xl md:text-[26px] text-center pt-5 pb-8 lg:pt-8 text-[#ffffffcd] md:w-180'>Where culinary artistry meets exceptional hospitality. Experience the finest flavors crafted with passion and precision.</p>
       <div className='flex flex-col items-center gap-5 sm:flex-row'>
         <NavLink to='/menu' className='bg-[#e78c37]  text-xl h-10 w-50  rounded-[5px] text-black font-semibold cursor-pointer flex items-center justify-center transition transform active:scale-95 duration-100'>Explore Menu</NavLink>
        <NavLink to='/contact' className='bg-black text-xl h-10 w-60  rounded-[5px] text-white font-semibold cursor-pointer border-1 border-white hover:text-black hover:bg-white transition duration-700 linear flex items-center justify-center'>Make Reservation</NavLink>
       </div>
      </div>
    </div>
  )
}

export default Home
