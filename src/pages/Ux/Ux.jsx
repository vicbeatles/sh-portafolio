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
        <div class='video1-ux'><video src={video1} loop autoPlay muted></video></div>
        <div class='video2-ux'><video src={video2} loop autoPlay muted></video></div>
        <div class='frame-te'>
        <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FwIcvjggBIyBb2HrIXjBE4k%2FUntitled%3Fnode-id%3D0%253A1%26t%3DKBfLEm41VDaGqv27-1" allowfullscreen title='FIGMA'></iframe>
        </div>
        <div class='description-ux'><h1 class='product-desc-title'>UX</h1><p>Gifs mostrando el funcionamiento de algunos botones y 
            animaciones hechas en Figma para diseño UX.</p></div>
        <div class='description-soyte'><h1 class='product-desc-title'>Solo Té</h1><p>Proyecto realizado para mostrar las habilidades en 
          UX y los programas de esta rama.</p></div>
    </div>
  )
}

export default Ux