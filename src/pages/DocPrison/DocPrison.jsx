import React, { useEffect, useState } from 'react'
import './DocPrison.css'

const DocPrison = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'prison-container' : 'prison-container prison-container-t'}>
      <div class='prison-photo'></div>
      <div class='prison-footer'>PRISIONERO DE TI MISMO</div>
      <div class='prison-desc'><p>FUJIFILM 2022</p><p>CENTRO HISTORICO, CIUDAD DE MEXICO</p></div>
    </div>
  )
}

export default DocPrison