import React, { useEffect, useState } from 'react'
import './DocAge.css'

const DocAge = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'age-container' : 'age-container age-container-t'}>
      <div class='age-photo'></div>
      <div class='age-footer'>LA MIRADA DE LA EDAD</div>
      <div class='age-desc'>FUJI FILM 2021
MINERAL DEL CHICO HIDALGO MÉXICO</div>
    </div>
  )
}

export default DocAge