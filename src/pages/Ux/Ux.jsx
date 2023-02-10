import React, { useEffect, useState } from 'react'
import './Ux.css'
import video1 from '../../assets/videos/soyte.mp4'
import video2 from '../../assets/videos/ramen.mp4'

const Ux = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('ux-area')
    setTimeout(()=> {setTransition(true)}, 100)
  })

  return (
    <div className={!transition ? 'ux-container' : 'ux-container ux-container-t'}>
        <div class='photo1-ux'></div>
        <div class='photo2-ux'></div>
        <div class='photo3-ux'></div>
        <div class='photo4-ux'></div>
        <div class='photo5-ux'></div>
        <div class='photo6-ux'></div>
        <div class='photo7-ux'></div>
        <div class='photo8-ux'></div>
        <div class='photo9-ux'></div>
        <div class='photo10-ux'></div>
        <div class='video1-ux'><video src={video1} loop autoPlay muted></video></div>
        <div class='video2-ux'><video src={video2} loop autoPlay muted></video></div>
        <div class='description-ux'><h1 class='product-desc-title'>UX</h1><p>Gifs mostrando el funcionamiento de algunos botones y 
            animaciones hechas en Figma para diseño UX.</p></div>
    </div>
  )
}

export default Ux