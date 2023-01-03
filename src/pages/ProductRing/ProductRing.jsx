import React, { useEffect } from 'react'
import './ProductRing.css'

const ProductRing = (props) => {

  const {setWhere} = props;
  useEffect(()=>{setWhere('photo-product-item')})
  
  return (
    <div class='ring-container'>
      <div class='photo1-ring'></div>
      <div class='none1-ring'></div>
      <div class='photo2-ring'></div>
      <div class='none2-ring'></div>
      <div class='description-ring'>
        <h1 class='product-desc-title'>Anillo de calavera</h1>
        <p>En este caso se representó un pequeño anillo masculino en forma de calavera, se jugó con la
            iluminación y el fondo negro para darle protagonismo a este. También tenemos un mockup de como
            se vería en la vida real.
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
  )
}

export default ProductRing