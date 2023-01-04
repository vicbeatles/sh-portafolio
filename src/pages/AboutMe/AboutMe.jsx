import React, { useEffect } from 'react'
import './AboutMe.css'

const AboutMe = (props) => {

  const {setWhere} = props;
 useEffect(()=>{setWhere('aboutme')})
  
  return (

    <div>
      <div class='aboutme-title'>SOBRE MI</div>
      <div class='aboutme-text'>
        <p>Soy diseñadora, fotógrafa y diseñadora UX.</p>
        <p>Tengo 21 años. Mis hobbies son: <br /> escuchar música, pintar y tomar fotografía documental.</p>
        <p>Resido en el Estado de México actualmente.</p>
      </div>
      
    </div>

  )

}

export default AboutMe