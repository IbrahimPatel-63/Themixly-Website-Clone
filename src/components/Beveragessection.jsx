import React from 'react'
import Card4 from './Card1'
import dish11 from './images/dish11.webp'
import dish12 from './images/dish12.webp'
import dish13 from './images/dish13.webp'
function Beveragessection() {
  return (
      <div className='h-290 md:h-200 lg:h-110 w-full bg-black  flex flex-col gap-8 flex-wrap  items-center  pt-10 md:flex-row md:justify-center lg:items-start'>
        <Card4 img={dish11} title='Masala Chai' price='$6' desc='Spiced Indian tea brewed with fresh herbs and milk'/>
        <Card4 img={dish12} title='Fresh Sugarcane Juice' price='$7' desc='Cold-pressed sugarcane juice with ginger and lemon' />
        <Card4 img={dish13} title='Virgin Mojito' price='$8' desc='Mint, lime, and soda with a touch of sweetness' />

      
    </div>
  )
}

export default Beveragessection
