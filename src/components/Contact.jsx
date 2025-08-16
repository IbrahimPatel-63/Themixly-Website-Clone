import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";

function Contact() {
  return (
    <div className='min-h-[100vh] w-full bg-black text-white'>
      <div className='flex flex-col items-center pt-12'>
      <h1 className='text-3xl font-bold'>Reserve Your <span className='text-[#E78C37]'>Table</span></h1>
      <div className='h-1 w-20 bg-[#E78C37]  mt-4 mb-6'></div>
      <p className='text-center text-xl text-[#D8D4D0]'>Join us for an unforgettable dining experience. Make your reservation today.</p>
      </div>

      <div className='h-300 w-full bg-teal-400 flex flex-col '>
        <div className='h-[45%] w-full bg-black flex flex-col gap-5 pl-5'>
          <h1 className='text-2xl font-semibold pt-15 '>Get in Touch</h1>
          <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><IoLocationOutline className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Location</h1>
            <p className='w-55 text-[#D8D4D0]'>123 Culinary Avenue Downtown DistrictNew York, NY 10001</p>
            </div>
          </div>

            <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><MdOutlinePhone  className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Phone</h1>
            <p className='w-55 text-[#D8D4D0]'>(555) 123-4567</p>
            </div> 
          </div>

            <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><TfiEmail  className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Email</h1>
            <p className='w-55 text-[#D8D4D0]'>reservations@resto-one.com</p>
            </div> 
          </div>

            <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><IoMdTime  className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Hours</h1>
            <p className='w-55 text-[#D8D4D0]'>Mon–Thu: 5:00 PM – 10:00 PM Fri–Sat: 5:00 PM – 11:00 PMSun: 5:00 PM – 9:00 PM</p>
            </div> 
          </div>

        </div>

           <div className='h-[55%] w-full bg-green-400'></div>
      </div>

    


    </div>
  )
}

export default Contact
