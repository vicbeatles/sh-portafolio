import React, { useEffect, useState } from 'react'
import './ProductFlowers.css'

const ProductFlowers = (props) => {

  const {setWhere} = props;
  const [transition, setTransition]=useState(false)

  useEffect(()=>{
    setWhere('photo-product-item')
    setTimeout(()=> {setTransition(true)},100)
  })
  
  return (
    <div className={!transition ? 'flowers-container' : 'flowers-container flowers-container-t'}>
      <div class='photo1-flowers'></div>
      <div class='none1-flowers'></div>
      <div class='photo2-flowers'></div>
      <div class='photo3-flowers'></div>
      <div class='photo4-flowers'></div>
      <div class='description-flowers'>
        <h1 class='product-desc-title'>Flores rosas</h1>
        <p>En este proyecto me centré en mostrar los pequeños detalles de una bolsa, como los 
            elementos dorados y las flores, también se ve un mockup de como se vería en la vida real.
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
  )
}

export default ProductFlowers