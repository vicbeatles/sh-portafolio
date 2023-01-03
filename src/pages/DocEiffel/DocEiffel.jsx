import React, { useEffect } from 'react'
import './DocEiffel.css'

const DocEiffel = (props) => {


  const {setWhere} = props;
  useEffect(()=> {setWhere('photo-documental-item')})

  return (
    <div class='eiffel-container'>
      <div class='eiffel-photo'></div>
      <div class='eiffel-footer'>EIFFEL</div>
      <div class='eiffel-desc'><p>IPHONE 4 2015</p><p>PARIS TORRE EIFFEL</p></div>
    </div>
  )
}

export default DocEiffel