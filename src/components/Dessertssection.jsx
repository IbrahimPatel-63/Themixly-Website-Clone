import React from 'react'
import Card3 from './Card3'
import dish8 from './images/dish8.webp'
import dish9 from './images/dish9.webp'
import dish10 from './images/dish10.webp'

function Dessertssection() {
  return (
     <div className='h-290 md:h-200 lg:h-110 w-full bg-black  flex flex-col gap-8 flex-wrap  items-center  pt-10 md:flex-row md:justify-center lg:items-start'>
        <Card3 img={dish8} title='Mango Cheesecake' price='$14' desc='Rich and creamy mango-flavored cheesecake with biscuit base'/>
        <Card3 img={dish9} title='Gulab Jamun Parfait' price='$13' desc='Fusion dessert with layers of gulab jamun and saffron cream' />
        <Card3 img={dish10} title='Pistachio Kulfi' price='$12' desc='Traditional Indian ice cream with a pistachio twist' />

      
    </div>
  )
}

export default Dessertssection
