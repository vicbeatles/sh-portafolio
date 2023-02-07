import React, { useEffect, useState } from 'react'
import './DocMarry.css'

const DocMarry = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental-item')
    setTimeout(() => {setTransition(true)}, 100);
  })


  return (
    <div className={!transition ? 'marry-container' : 'marry-container marry-container-t'}>
      <div class='marry-photo'></div>
      <div class='marry-footer'>Pedacito de felicidad</div>
      <div class='marry-desc'><p>FUJIFILM 2016</p><p>MINERAL DEL CHICO, HIDALGO, MEXICO</p></div>
    </div>
  )
}

export default DocMarry