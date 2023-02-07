import React, { useEffect, useState } from 'react'
import './DocMusician.css'

const DocMusician = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })

  return (
    <div className={!transition ? 'musician-container' : 'musician-container musician-container-t'}>
      <div class='musician-photo'></div>
      <div class='musician-footer'>EL ORGANILLERO</div>
      <div class='musician-desc'><p>FUJIFILM 2020</p><p>CENTRO HISTORICO, CIUDAD DE MEXICO</p></div>
    </div>
  )
}

export default DocMusician