import React, { useEffect } from 'react'
import './ThreeDimJapan.css'

const ThreeDimJapan = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('three-area-item')})
  
  return (
    <div class='japan3d-container'>
      <div class='japan3d-photo'></div>
      <div class='japan3d-footer'>RENDER</div>
      <div class='japan3d-desc'><p>SELECCION JAPONESA QATAR 2022</p></div>
    </div>
  )
}

export default ThreeDimJapan