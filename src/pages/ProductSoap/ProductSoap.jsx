import React, { useEffect, useState } from 'react'
import './ProductSoap.css'

const ProductSoap = (props) => {

  const {setWhere} = props;
  const [transition, setTransition]=useState(false)


  useEffect(()=>{
    
    setWhere('photo-product-item')
    setTimeout(()=>{setTransition(true)},100)
  
  })


  return (
    <div className={!transition ? 'soap-container' : 'soap-container soap-container-t'}>
      <div class='photo1-soap'></div>
      <div class='none1-soap'></div>
      <div class='photo2-soap'></div>
      <div class='none2-soap'></div>
      <div class='photo3-soap'></div>
      <div class='description-soap'>
        <h1 class='product-desc-title'>CIVALY</h1>
        <p>Civaly es una marca de jabones artesanales aromáticos que salieron a la venta en 2022
            en una exposición de productos realizados por alumnos de la carrera de Diseño y Comunicación
            Visual. Estas fotografías representan la frescura y naturaleza del producto.
        </p>
      </div>
    </div>
  )
}

export default ProductSoap