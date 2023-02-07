import React, { useEffect, useState } from 'react'
import './ThreeDimHalloween.css'

const ThreeDimHalloween = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('three-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  }
    )

  
  return (
    <div className={!transition ? 'halloween-container' : 'halloween-container halloween-container-t'}>
      <div class='halloween-photo'></div>
      <div class='halloween-footer'>RENDER</div>
      <div class='halloween-desc'><p>CALABAZA PARA HALLOWEEN</p></div>
    </div>
  )
}

export default ThreeDimHalloween