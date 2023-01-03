import React, { useEffect } from 'react'
import './ThreeDimDices.css'

const ThreeDimDices = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('three-area-item')})

  return (
    <div class='dices-container'>
      <div class='dices-photo'></div>
      <div class='dices-footer'>RENDER</div>
      <div class='dices-desc'><p>DADOS DE PELUCHE</p></div>
    </div>
  )
}

export default ThreeDimDices