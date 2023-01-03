import React, { useEffect } from 'react'
import './ProductJewelry.css'

const ProductJewelry = (props) => {

  const {setWhere} = props;
  useEffect(()=>{setWhere('photo-product-item')})

  return (
    <div class='jewelry-container'>
      <div class='photo1-jewelry'></div>
      <div class='none1-jewelry'></div>
      <div class='photo2-jewelry'></div>
      <div class='none2-jewelry'></div>
      <div class='photo3-jewelry'></div>
      <div class='description-jewelry'>
        <h1 class='product-desc-title'>JOYERIA DAMA</h1>
        <p>Este proyecto esta pensado para mostrar una monocromía en los elementos
         representando la joyería que se exhibe en una tienda.
        También podemos ver un mokupp de como se vería en una revista.
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
  )
}

export default ProductJewelry