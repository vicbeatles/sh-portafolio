import React, { useEffect, useState } from 'react'
import './DocMusic.css'

const DocMusic = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'music-container' : 'music-container music-container-t'}>
      <div class='music-photo'></div>
      <div class='music-footer'>MUSICA DE CIEGOS</div>
      <div class='music-desc'><p>Fujifilm 2021</p><p>MINERAL DEL CHICO, HIDALGO, MEXICO</p></div>
    </div>
  )
}

export default DocMusic