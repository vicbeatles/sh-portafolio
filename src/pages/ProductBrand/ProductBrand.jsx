import React, { useEffect } from 'react'
import './ProductBrand.css'

const ProductBrand = (props) => {


  const {setWhere} = props;
  useEffect(()=>{setWhere('photo-product-item')})

  return (
    <div class='brand-container'>
      <div class='none1-brand'></div>
      <div class='photo1-brand'></div>
      <div class='photo2-brand'></div>
      <div class='description-brand'>
        <h1 class='product-desc-title'>Aretes SHASA</h1>
        <p>Shasa es una marca de ropa y joyería para jóvenes que saca productos por temporada al igual
            que sus accesorios, entre ellos aretes color aqua marina. Esta fotografía representa unos
            aretes en forma de hojas color aqua marina, está centrado más en el producto en si. También 
            podemos ver un mockup de como se vería en la vida real.
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
  )
}

export default ProductBrand