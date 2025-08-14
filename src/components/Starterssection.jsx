import React from 'react'
import Card1 from './Card1'
import dish2 from './images/dish2.webp'
import dish3 from './images/dish3.webp'
import dish4 from './images/dish4.webp'

function Starterssection() {
  return (
    <div className='h-290 md:h-200 lg:h-110 w-full bg-black  flex flex-col gap-8 flex-wrap  items-center  pt-10 md:flex-row md:justify-center lg:items-start'>
        <Card1 img={dish2} title='Stuffed Mushrooms' price='$18' desc='Portobello mushrooms filled with herbed cheese and breadcrumbs'/>
        <Card1 img={dish3} title='Avocado Bruschetta' price='$16' desc='Crispy baguette topped with avocado, cherry tomatoes, and balsamic glaze' />
        <Card1 img={dish4} title='Paneer Tikka' price='$20' desc='Char-grilled cottage cheese with bell peppers and Indian spices' />

      
    </div>
  )
}

export default Starterssection







