import React, { useEffect, useState } from 'react'
import './DesignBoones.css'
import video1 from '../../assets/videos/boones-design.mp4'

const DesignBoones = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'boones-container' : 'boones-container boones-container-t'}>
        <div class='video1-boones-ds'><video src={video1} loop autoPlay muted></video></div>
        <div class='description-boones-ds'><h1 class='product-desc-title'>BOONES</h1><p>Este video  es una practica de un mini reel de la marca para redes social.</p></div>
    </div>
  )
}

export default DesignBoones