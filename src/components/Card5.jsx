import React from 'react'


function Card5({img,title,name,desc,btn1,btn2}) {
  return (
    <div className='group h-130 w-[90vw] md:w-[45vw] lg:w-[30vw] 2xl:w-[25vw] bg-[#1e1c1cbc] rounded-2xl overflow-hidden mt-12 border-[.5px] border-[#ffffff32] shrink-0' >
        <div className='h-[62%] w-full overflow-hidden relative'>
            <div className='h-full w-full bg-[#0000005c] absolute opacity-0 group-hover:opacity-[1] transition duration-700 linear'>
              <div className='flex gap-2 pl-6 absolute bottom-8 '>
                <button className='text-white text-[13px] bg-[#e78c37aa] tracking-wider px-2 py-1 rounded-full'>{btn1}</button>
                <button className='text-white text-[13px] bg-[#e78c37aa] tracking-wider px-2 py-1 rounded-full'>{btn2}</button>
              </div>
            </div>
            <img src={img} alt="" className='h-full w-full object-cover' />
        </div>
           <div className='px-6'>
             <h1 className='text-xl font-bold pt-4'>{title}</h1>
            <h2 className='font-semibold text-[17px] pt-1 pb-2.5 text-[#e78c37e4]'>{name}</h2>
            <p className='text-[18px] text-[#ffffffb8]'>{desc}</p>
      
           </div>
    </div> 
  )
}

export default Card5
