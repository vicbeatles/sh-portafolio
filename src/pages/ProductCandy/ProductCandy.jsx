import React, { useEffect } from 'react'
import './ProductCandy.css'

const ProductCandy = (props) => {

  const {setWhere} = props;
  useEffect(()=>{setWhere('photo-product-item')})


  return (
    <div class='candy-container'>
      <div class='photo1-candy'></div>
      <div class='none1-candy'></div>
      <div class='photo2-candy'></div>
      <div class='photo3-candy'></div>
      <div class='none2-candy'></div>
      <div class='description-candy'>
        <h1 class='product-desc-title'>JAPAN</h1>
        <p>Esta práctica con dulces japoneses fue realizada para jugar
            con la iluminación y los contrastes ya que al ser algo
            transparentes los dulces, la luz puede mejorar o afectar su
            visibilidad en una fotorgrafía. 
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
   
  )
}

export default ProductCandy