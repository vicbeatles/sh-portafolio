import React, { useEffect } from 'react'
import './DocMarry.css'

const DocMarry = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('photo-documental-item')})


  return (
    <div class='marry-container'>
      <div class='marry-photo'></div>
      <div class='marry-footer'>Pedacito de felicidad</div>
      <div class='marry-desc'><p>Fujifilm 2016</p><p>Mineral del Chico, Hidalgo, México</p></div>
    </div>
  )
}

export default DocMarry