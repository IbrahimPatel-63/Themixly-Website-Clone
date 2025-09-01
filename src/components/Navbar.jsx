import React from 'react'
import { useState } from 'react';
import logo from './images/logo.png'
import { HiMiniBars3 } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
function Navbar() {

    const [isOpen,setIsOpen] = useState(false)



  return (
    <div className='h-20 w-full bg-black flex items-center justify-between px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-40 relative'>
        <img src={logo} alt="Logo" className='h-16' loading='lazy' />
        <HiMiniBars3 onClick={() => {setIsOpen(!isOpen)}} className='md:hidden text-2xl text-white cursor-pointer hover:text-gray-200 transition duration-500 linear'/>
        
        {isOpen && (
            <div className='h-82 w-[90%]  bg-black absolute top-22 left-5 rounded-xl text-white flex flex-col gap-6 px-5 py-12 text-[17px] font-semibold z-1 '>
                <ImCross onClick={() => {setIsOpen(false)}} className='text-white absolute top-4 right-5 text-xl hover:text-orange-500 cursor-pointer transition duration-500 ease-in-out' />
                <NavLink to='/'  className={({isActive}) => `${isActive ?  'text-orange-500 hover:bg-[#4D4D4D] py-1 transition duration-500 ease-in-out rounded-[5px]' : 'hover:bg-[#4D4D4D] py-1 transition duration-700 ease-in-out rounded-[5px]'}`} onClick={() => {setIsOpen(false)}}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) => `${isActive ?  'text-orange-500 hover:bg-[#4D4D4D] py-1 transition duration-500 ease-in-out rounded-[5px]' : 'hover:bg-[#4D4D4D] py-1 transition duration-700 ease-in-out rounded-[5px]'}`} onClick={() => {setIsOpen(false)}}>About</NavLink>
                <NavLink to='/menu' className={({isActive}) => `${isActive ?  'text-orange-500 hover:bg-[#4D4D4D] py-1 transition duration-500 ease-in-out rounded-[5px]' : 'hover:bg-[#4D4D4D] py-1 transition duration-700 ease-in-out rounded-[5px]'}`} onClick={() => {setIsOpen(false)}}>Menu</NavLink>
                <NavLink to='/chefs' className={({isActive}) => `${isActive ?  'text-orange-500 hover:bg-[#4D4D4D] py-1 transition duration-500 ease-in-out rounded-[5px]' : 'hover:bg-[#4D4D4D] py-1 transition duration-700 ease-in-out rounded-[5px]'}`} onClick={() => {setIsOpen(false)}}>Chefs</NavLink>
                <NavLink to='/contact' className={({isActive}) => `${isActive ?  'text-orange-500 hover:bg-[#4D4D4D] py-1 transition duration-500 ease-in-out rounded-[5px]' : 'hover:bg-[#4D4D4D] py-1 transition duration-700 ease-in-out rounded-[5px]'}`} onClick={() => {setIsOpen(false)}}>Contact</NavLink>
            </div>
        )}


        <div className='hidden md:flex text-white gap-12 xl:gap-14  font-semibold'>
            <NavLink to='/'  className={({isActive}) => `${isActive ?  'text-orange-500 border-b-1 pb-0.5 ' : ''}`}>Home</NavLink>
            <NavLink to='/about'  className={({isActive}) => `${isActive ?  'text-orange-500 border-b-1 pb-0.5' : ''}`}>About</NavLink>
            <NavLink to='/menu'  className={({isActive}) => `${isActive ?  'text-orange-500 border-b-1 pb-0.5' : ''}`}>Menu</NavLink>
            <NavLink to='/chefs'  className={({isActive}) => `${isActive ?  'text-orange-500 border-b-1 pb-0.5' : ''}`}>Chefs</NavLink>
            <NavLink to='/contact'  className={({isActive}) => `${isActive ?  'text-orange-500 border-b-1 pb-0.5' : ''}`}>Contact</NavLink>
        </div>
      
    </div>
  )
}

export default Navbar
