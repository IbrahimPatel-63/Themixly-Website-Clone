import React from 'react'
import Card2 from './Card2'
import dish5 from './images/dish5.webp'
import dish6 from './images/dish6.webp'
import dish7 from './images/dish7.webp'

function Maincoursessection({}) {
  return (
      <div className='h-290 md:h-200 lg:h-110 w-full bg-black  flex flex-col gap-8 flex-wrap  items-center  pt-10 md:flex-row md:justify-center lg:items-start'>
        <Card2 img={dish5} title='Mushroom Risotto' price='$28' desc='Creamy Arborio rice with wild mushrooms and parmesan'/>
        <Card2 img={dish6} title='Vegetable Lasagna' price='$26' desc='Layered pasta with zucchini, bell peppers, spinach, and béchamel sauce' />
        <Card2 img={dish7} title='Thai Green Curry' price='$24' desc='Seasonal vegetables simmered in coconut milk with jasmine rice' />

      
    </div>
  )
}

export default Maincoursessection
