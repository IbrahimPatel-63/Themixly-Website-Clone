import React from 'react'
import logo from './images/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='min-h-70 w-full bg-[#1E1C1C]  flex flex-col gap-10 md:flex-wrap md:flex-row 2xl:justify-center'>
      <div className='pt-15 px-5 md:w-100'>
          <img src={logo} alt="Logo" className='h-16 w-50' loading='lazy' />
          <p className='pt-5 pb-4 text-[#D8D4D0]'>Experience culinary excellence where every dish tells a story of passion, creativity, and tradition.</p>
          <div className='flex gap-5'>
            <div className='group h-10 w-10 text-xl bg-[#4D4D4D] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B8A474] transition duration-500 linear'><FaFacebookF  className='text-[#E78C37] group-hover:text-black'/></div>
            <div className='group h-10 w-10 text-xl bg-[#4D4D4D] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B8A474] transition duration-500 linear'><FaWhatsapp   className='text-[#E78C37] group-hover:text-black'/></div>
            <div className='group h-10 w-10 text-xl bg-[#4D4D4D] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B8A474] transition duration-500 linear'><FaYoutube   className=' text-[#E78C37] group-hover:text-black'/></div>
          </div>
      </div>

          <div className='px-5 md:pt-15'>
            <h1 className='text-xl font-semibold'>Quick Links</h1>
            <p className='pt-2 text-[18px] text-[#D8D4D0] cursor-pointer'>Home</p>
            <p className='pt-2 text-[18px] text-[#D8D4D0] cursor-pointer'>About</p>
            <p className='pt-2 text-[18px] text-[#D8D4D0] cursor-pointer'>Menu</p>
            <p className='pt-2 text-[18px] text-[#D8D4D0] cursor-pointer'>Chefs</p>
          </div>

            <div className='px-5 lg:pt-15'>
            <h1 className='text-xl font-semibold'>Contact</h1>
            <p className='pt-2 text-[17px] text-[#D8D4D0]  cursor-pointer'>123 Culinary Avenue</p>
            <p className='pt-2 text-[17px] text-[#D8D4D0]  cursor-pointer'>New York, NY 10001</p>
            <p className='pt-2 text-[17px] text-[#D8D4D0]  cursor-pointer'>(555) 123-4567</p>
            <p className='pt-2 text-[17px] text-[#D8D4D0]  cursor-pointer'>reservations@resto-one.com</p>
          </div>

          <div className='w-full px-5 md:w-100 xl:w-70 xl:px-0 xl:pt-15'>
            <h1 className='text-xl font-semibold'>Hours</h1>
            <div className='flex items-center justify-between'>
              <div>
                <p className='pt-2 text-[17px] text-[#D8D4D0]'>Mon-Thu:</p>
                <p className='pt-2 text-[17px] text-[#D8D4D0]'>Fri-Sat:</p>
                <p className='pt-2 text-[17px] text-[#D8D4D0]'>Sunday</p>
              </div>
                 <div>
                <p className='pt-2 text-[17px] text-[#D8D4D0]'>5:00 PM - 10:00 PM</p>
                <p className='pt-2 text-[17px] text-[#D8D4D0]'>5:00 PM - 11:00 PM</p>
                <p className='pt-2 text-[17px] text-[#D8D4D0]'>5:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
          <div className='h-35 md:h-30 lg:h-25 w-full bg-black flex items-center justify-center px-4 border-t-[.5px] border-[#ffffff55]'>
            <p className='w-full text-center text-[#D8D4D0] text-[18px]'>© 2025 RestoOne Restaurant. All rights reserved. | Crafted with passion for culinary excellence.</p>
          </div>
      
    </div>
  )
}

export default Footer
