import React, { useEffect, useState } from 'react'
import './ThreeDimDices.css'

const ThreeDimDices = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)
  useEffect(()=> {
    setWhere('three-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })

  return (
    <div className={!transition ? 'dices-container' : 'dices-container dices-container-t'}>
      <div class='dices-photo'></div>
      <div class='dices-footer'>RENDER</div>
      <div class='dices-desc'><p>DADOS DE PELUCHE</p></div>
    </div>
  )
}

export default ThreeDimDices