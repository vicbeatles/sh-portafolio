import React, { useEffect } from 'react'
import './ProductWatch.css'

const ProductWatch = (props) => {

  const {setWhere} = props;
  useEffect(()=>{setWhere('photo-product-item')})
  
  return (
    <div class='watch-container'>
      <div class='photo1-watch'></div>
      <div class='none1-watch'></div>
      <div class='photo2-watch'></div>
      <div class='none2-watch'></div>
      <div class='photo3-watch'></div>
      <div class='description-watch'>
        <h1 class='product-desc-title'>TIMEX</h1>
        <p>En este proyecto se tomó TIMEX para jugar con tonalidades doradas y con luces ya que este reloj
            es reflejante. Se quiso mostrar la elegancia de este producto. Este tipo de fotografía muestra
            los detalles pequeños de la marca. También tenemos un mockup de como se vería esta fotografía en
            la vida real.
        </p>
        <h1 class='product-desc-title'>Canon EOS T7</h1>
      </div>
    </div>
  )
}

export default ProductWatch