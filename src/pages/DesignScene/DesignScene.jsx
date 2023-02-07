import React, { useEffect, useState } from 'react'
import './DesignScene.css'

const DesignScene = (props) => {
  
  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=>{setTransition(true)}, 100)
  })

  return (
    <div className={!transition ? 'scene-container' : 'scene-container scene-container-t'}>
        <div class='photo1-scene'></div>
        <div class='photo2-scene'></div>
        <div class='photo3-scene'></div>
        <div class='description-scene'><h1 class='product-desc-title'>PAISAJES</h1><p>Paisajes hechos de forma vectorial y animados 
en Figma como parte de un diseño de UX.
</p></div>
    </div>
  )
}

export default DesignScene