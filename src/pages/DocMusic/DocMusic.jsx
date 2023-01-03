import React, { useEffect } from 'react'
import './DocMusic.css'

const DocMusic = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('photo-documental-item')})
  
  return (
    <div class='music-container'>
      <div class='music-photo'></div>
      <div class='music-footer'>MUSICA DE CIEGOS</div>
      <div class='music-desc'><p>Fujifilm 2021</p><p>MINERAL DEL CHICO, HIDALGO, MEXICO</p></div>
    </div>
  )
}

export default DocMusic