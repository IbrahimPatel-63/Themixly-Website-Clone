import React from 'react'
import { Link,NavLink, Outlet } from "react-router-dom";


function Menu() {
  return (
    <div className='min-h-[100vh] w-full bg-black flex flex-col items-center text-center pt-10 lg:pt-20 text-white'>
      <h1 className='text-[32px] font-bold lg:text-5xl'>Our <span className='text-[#e78c37]'>Menu</span></h1>
      <div className='bg-[#e78c37] h-1 w-24  mt-2 mb-5 lg:mt-4 lg:mb-6'></div>
      <p className='text-xl sm:text-[18px] font-semibold md:w-145 md:leading-8 text-[#f1d3b3f5]'>Explore our delightful vegetarian creations made with fresh, seasonal ingredients and global flavors.</p>
      <div className='pt-15 flex flex-wrap gap-4 items-center justify-around  sm:justify-center '>
        <NavLink to='starters' className={({isActive}) => `${isActive ?  'bg-[#f1d3b3f5] px-10 py-2.5 font-semibold rounded-full text-black' : 'bg-[#4d4d4d] px-10 py-2.5 font-semibold rounded-full'}`}>Starters</NavLink>
        <NavLink to='maincourses' className={({isActive}) => `${isActive ?  'bg-[#f1d3b3f5] px-10 py-2.5 font-semibold rounded-full text-black' : 'bg-[#4d4d4d] px-10 py-2.5 font-semibold rounded-full'}`}>Main Courses</NavLink>
        <NavLink to='desserts' className={({isActive}) => `${isActive ?  'bg-[#f1d3b3f5] px-10 py-2.5 font-semibold rounded-full text-black' : 'bg-[#4d4d4d] px-10 py-2.5 font-semibold rounded-full'}`}>Desserts</NavLink>
        <NavLink to='beverages' className={({isActive}) => `${isActive ?  'bg-[#f1d3b3f5] px-10 py-2.5 font-semibold rounded-full text-black' : 'bg-[#4d4d4d] px-10 py-2.5 font-semibold rounded-full'}`}>Beverages</NavLink>
      </div>
      
    <Outlet />
    </div>
  )
}

export default Menu
