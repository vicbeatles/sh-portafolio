import React, { useEffect } from 'react'
import './DocMusician.css'

const DocMusician = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('photo-documental-item')})

  return (
    <div class='musician-container'>
      <div class='musician-photo'></div>
      <div class='musician-footer'>EL ORGANILLERO</div>
      <div class='musician-desc'><p>Fujifilm 2020</p><p>CENTRO HISTORICO, CIUDAD DE MEXICO</p></div>
    </div>
  )
}

export default DocMusician