import React, { useEffect, useState } from 'react'
import './ThreeDimJapan.css'

const ThreeDimJapan = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('three-area-item')
    setTimeout(() => {setTransition(true)}, 100);
  })
  
  return (
    <div className={!transition ? 'japan3d-container' : 'japan3d-container japan3d-container-t'}>
      <div class='japan3d-photo'></div>
      <div class='japan3d-footer'>RENDER</div>
      <div class='japan3d-desc'><p>SELECCION JAPONESA QATAR 2022</p></div>
    </div>
  )
}

export default ThreeDimJapan