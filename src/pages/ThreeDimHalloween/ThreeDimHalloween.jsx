import React, { useEffect } from 'react'
import './ThreeDimHalloween.css'

const ThreeDimHalloween = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('three-area-item')})
  
  return (
    <div class='halloween-container'>
      <div class='halloween-photo'></div>
      <div class='halloween-footer'>RENDER</div>
      <div class='halloween-desc'><p>CALABAZA PARA HALLOWEEN</p></div>
    </div>
  )
}

export default ThreeDimHalloween