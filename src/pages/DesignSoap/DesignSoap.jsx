import React, { useEffect, useState } from 'react'
import './DesignSoap.css'
import video1 from '../../assets/videos/civali.mp4'

const DesignSoap = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'soap-container' : 'soap-container soap-container-t'}>
        <div class='video1-soap-ds'><video src={video1} loop autoPlay muted></video></div>
        <div class='description-soap-ds'><h1 class='product-desc-title'>CIVALY</h1><p>Mini reel realizado para Civaly marca emergente de jabones artesanales </p></div>
    </div>
  )
}

export default DesignSoap