import React, { useEffect, useState } from 'react'
import './DocEiffel.css'

const DocEiffel = (props) => {


  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })

  return (
    <div className={!transition ? 'eiffel-container' : 'eiffel-container eiffel-container-t'}>
      <div class='eiffel-photo'></div>
      <div class='eiffel-footer'>EIFFEL</div>
      <div class='eiffel-desc'><p>IPHONE 4 2015</p><p>PARIS TORRE EIFFEL</p></div>
    </div>
  )
}

export default DocEiffel