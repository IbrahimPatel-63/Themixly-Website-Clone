import React from 'react'

function Card3({img,title,price,desc}) {
  return (
       <div className='h-85 w-[90vw] md:w-[45vw] lg:w-[30vw] 2xl:w-[25vw] bg-[#1f1d1df8] rounded-2xl overflow-hidden shrink-0 text-white border-[1px] border-[#565454]'>
        <div className='h-[60%] w-full'><img src={img} alt="cups" className='h-full w-full object-cover hover:scale-110 transition duration-500 linear' loading='lazy' /></div>
        <div className='flex justify-between items-center px-5 pt-5 pb-2'>
            <h1 className='text-xl font-bold text-[#e78c37]'>{title}</h1>
            <p className='text-[19px] font-bold text-[#ffffffd3]'>{price}</p>
        </div>
         <p className='text-left text-[17px] px-5 font-semibold text-[#f1d3b3f5]'>{desc}</p>
      
    </div>
  )
}

export default Card3
