import React from 'react'
import Card5 from './Card5'
import chef1 from './images/chef1.webp'
import chef2 from './images/chef2.webp'
import chef3 from './images/chef3.webp'

function Chefssection() {
  return (
    <div className='h-435 md:h-310 lg:h-160 w-full bg-black flex flex-col md:flex-row md:flex-wrap md:gap-8 items-center md:justify-center md:items-start'>

      <Card5 img={chef1} title='Aarav Kapoor' name='Head Chef & Owner' desc='With over 15 years of culinary excellence, Aarav brings innovative techniques to traditional flavors.' btn1='French Cuisine' btn2='Molecular Gastronomy'/>
      <Card5 img={chef2} title='Sloane Harper' name='Pastry Chef' desc='Sloane creates stunning desserts that are as beautiful as they are delicious, trained in Paris.' btn1='Patisserie' btn2='Artisan Breads'/>
      <Card5 img={chef3} title='Diego Montoya' name='Sous Chef' desc='Diego specializes in Asian fusion, bringing bold flavors and precision to every dish.' btn1='Asian Fusion' btn2='Seafood'/>

        
      
    </div>
  )
}

export default Chefssection
