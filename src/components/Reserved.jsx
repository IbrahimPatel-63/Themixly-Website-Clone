import React from 'react'
import { useNavigate } from 'react-router-dom'

function Reserved() {
    const navigate = useNavigate()

    function gotohome() {
        navigate('/')
    }

  return (
    <div className='h-[100vh] flex flex-col items-center pt-50 bg-black text-white md:px-5 lg:pt-60 xl:px-25'>
        <h1 className='text-center text-4xl lg:text-5xl font-semibold text-[#A1CDF4] lg:leading-[1.2] tracking-wider'>Thank you! Your table has been successfully reserved. We look forward to welcoming you.</h1>
        <button className='bg-[#78befc] hover:bg-[#78befccf] text-black px-6 py-2 md:px-10 md:py-2.5 lg:px-12 text-[18px] rounded-2xl cursor-pointer font-semibold mt-10 transition duration-500 linear' onClick={gotohome}>Go to Home</button>
      
    </div>
  )
}

export default Reserved
