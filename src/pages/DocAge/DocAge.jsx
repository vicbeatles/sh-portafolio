import React, { useEffect } from 'react'
import './DocAge.css'

const DocAge = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('photo-documental-item')})
  
  return (
    <div class='age-container'>
      <div class='age-photo'></div>
      <div class='age-footer'>LA MIRADA DE LA EDAD</div>
      <div class='age-desc'></div>
    </div>
  )
}

export default DocAge