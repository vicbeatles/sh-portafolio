import React, { useEffect } from 'react'
import './DocPrison.css'

const DocPrison = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('photo-documental-item')})
  
  return (
    <div class='prison-container'>
      <div class='prison-photo'></div>
      <div class='prison-footer'>PRISIONERO DE TI MISMO</div>
      <div class='prison-desc'><p>FUJIFILM 2022</p><p>CENTRO HISTORICO, CIUDAD DE MEXICO</p></div>
    </div>
  )
}

export default DocPrison