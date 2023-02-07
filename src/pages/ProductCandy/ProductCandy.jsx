import React, { useEffect, useState } from 'react'
import './ProductCandy.css'

const ProductCandy = (props) => {

  const {setWhere} = props;
  const [transition, setTransition]=useState(false)

  useEffect(()=>{
    setWhere('photo-product-item')
    setTimeout(() => {setTransition(true)}, 100);
  })


  return (
    <div className={!transition ? 'candy-container' : 'candy-container candy-container-t'}>
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