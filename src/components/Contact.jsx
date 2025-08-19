import React from 'react'
import { useForm } from "react-hook-form"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import Footer from './Footer';


function Contact() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function whenSubmit(data) {
    console.log('Form data submitted',data);

  }

  return (
    <div className='min-h-[100vh] w-full bg-black text-white'>
      <div className='flex flex-col items-center pt-12'>
      <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Reserve Your <span className='text-[#E78C37]'>Table</span></h1>
      <div className='h-1 w-20 bg-[#E78C37]  mt-4 mb-6'></div>
      <p className='text-center text-xl text-[#D8D4D0] sm:w-120 lg:w-full'>Join us for an unforgettable dining experience. Make your reservation today.</p>
      </div>

      <div className='h-320 w-full lg:h-200 bg-teal-400 flex flex-col lg:flex-row '>
        <div className='h-[40%] w-full lg:h-full lg:w-[50%] bg-black flex flex-col gap-5 pl-5 lg:pl-8 2xl:pl-35 sm:gap-8'>
          <h1 className='text-2xl font-semibold pt-15 lg:pt-30 '>Get in Touch</h1>
          <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><IoLocationOutline className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Location</h1>
            <p className='w-55 text-[#D8D4D0] xl:text-[18px]'>123 Culinary Avenue Downtown DistrictNew York, NY 10001</p>
            </div>
          </div>

            <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><MdOutlinePhone  className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Phone</h1>
            <p className='w-55 text-[#D8D4D0] xl:text-[18px]'>(555) 123-4567</p>
            </div> 
          </div>

            <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><TfiEmail  className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Email</h1>
            <p className='w-55 text-[#D8D4D0] xl:text-[18px]'>reservations@resto-one.com</p>
            </div> 
          </div>

            <div className='flex '>
            <div className='h-10 w-15 bg-[#1E1C1C] rounded-[50%] flex items-center justify-center'><IoMdTime  className='text-2xl text-[#FFA500]' /></div>
            <div className='ml-2'>
            <h1 className='text-[18px] font-semibold'>Hours</h1>
            <p className='w-55 text-[#D8D4D0] xl:text-[18px]'>Mon–Thu: 5:00 PM – 10:00 PM Fri–Sat: 5:00 PM – 11:00 PMSun: 5:00 PM – 9:00 PM</p>
            </div> 
          </div>

        </div>

           <div className='h-[60%] w-full lg:h-full lg:w-[50%] bg-black flex items-center justify-center'>
            <form  onSubmit={handleSubmit(whenSubmit)}>
              <div className='min-h-140 w-[90vw] lg:w-[45vw] 2xl:w-[35vw] bg-[#1E1C1C] pl-6 py-5  flex flex-col gap-5 rounded-[8px] border-1 border-[#565454]'>
                <h1 className='text-[26px]'>Make a Reservation</h1>

                
                  <input type="text" placeholder='Full Name' className='border-1 border-[#565454] h-9 w-[78vw] lg:w-[40vw] 2xl:w-[30vw] pl-2.5 text-[18px] text-[#B8A474] rounded-[5px] font-semibold bg-black outline-0'  {...register('fullName', {
                    required:'This field is required',
                    minLength:{value:4, message:'Minimum length must be 4 characters'},
                    maxLength:{value:50, message:'Maximum length must be 10 characters'},
                    pattern:{value: /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/, message:'Each word must start with a capital letter'}
                  })} />
                  {errors.fullName && <p className='text-[14px] text-red-500'>{errors.fullName.message}</p>}
                  <input type="email" placeholder='Email Address' className='border-1 border-[#565454] h-9 w-[78vw] lg:w-[40vw]  2xl:w-[30vw] pl-2.5 text-[18px] text-[#B8A474] rounded-[5px] font-semibold bg-black outline-0'  {...register('Email', {
                     required:'This field is required',
                    minLength:{value:4, message:'Minimum length must be 4 characters'},
                    maxLength:{value:50, message:'Maximum length must be 10 characters'},
                  })} />
                   {errors.Email && <p className='text-[14px] text-red-500'>{errors.Email.message}</p>}

                   <input type="text" placeholder='Phone Number' className='border-1 border-[#565454] h-9 w-[78vw] lg:w-[40vw]  2xl:w-[30vw] pl-2.5 text-[18px] text-[#B8A474] rounded-[5px] font-semibold bg-black outline-0' {...register('phoneNumber', {
                     required:'This field is required',
                    minLength:{value:10, message:'Must be 10 digits'},
                    maxLength:{value:10, message:'Must be 10 digits'},
                    pattern:{value:/^[0-9]+$/, message:'must be digit '}
                  })} />
                      {errors.phoneNumber && <p className='text-[14px] text-red-500'>{errors.phoneNumber.message}</p>}

                   <input type="text" placeholder='Number of Guests' className='border-1 border-[#565454] h-9 w-[78vw] lg:w-[40vw]  2xl:w-[30vw] pl-2.5 text-[18px] text-[#B8A474] rounded-[5px] font-semibold bg-black outline-0' {...register('guests', {
                    required:'This field is required',
                    validate:{
                      onlyDigits: (value) => /^[0-9]+$/.test(value) || 'must be digit',
                      limit: (value) => /^(?:[1-9]|1[0-9]|20)$/.test(value) || 'min 1 and max 20 members allowed'
                    }
                   })}/>
                       {errors.guests && <p className='text-[14px] text-red-500'>{errors.guests.message}</p>}

                   <input type="text" placeholder='dd-mm-yyyy' className='border-1 border-[#565454] h-9 w-[78vw] lg:w-[40vw]  2xl:w-[30vw] pl-2.5 text-[18px] text-white rounded-[5px] font-semibold bg-black outline-0' {...register('date', {
                    required: true,
                    pattern: {
                      value: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/, message: 'Date must be in DD-MM-YYYY'
                    }
                   })}/>
                   {errors.date && <p className='text-[14px] text-red-500'>{errors.date.message}</p>}

                   <textarea type='text' placeholder='Special requests or dietary restrictions' className='border-1 border-[#565454] h-32 w-[78vw] lg:w-[40vw]  2xl:w-[30vw] pl-2.5 pt-4 text-[14px] text-white rounded-[5px] font-semibold bg-black outline-0' />


                  <button type='submit' className='h-11 w-[78vw] lg:w-[40vw]  2xl:w-[30vw] bg-[#E78C37] text-black text-xl font-semibold rounded-[5px] cursor-pointer hover:bg-[#e78c37af] transition duration-300 linear'>Reserve Table</button>

              </div>
            </form>
           </div>
      </div>

      <Footer />


    </div>
  )
}

export default Contact
