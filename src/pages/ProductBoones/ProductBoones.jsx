import React, { useEffect } from 'react'
import './ProductBoones.css'

const ProductBoones = (props) => {

  const {setWhere} = props;
  useEffect(()=>{setWhere('photo-product-item')})

  return (
    <div class='boones-container'>
      <div class='photo1-boones'></div>
      <div class='none1-boones'></div>
      <div class='photo2-boones'></div>
      <div class='description-boones'>
        <h1 class='product-desc-title'>BOONES</h1>
        <p>Este proyecto esta enfocado en Boones, una marca de alcohol dulce.
          Sus sabores son frutales y tropicales. También tenemos un mockup de
          como se vería en una computadora.
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
  )
}

export default ProductBoones