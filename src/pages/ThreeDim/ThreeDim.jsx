import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import './ThreeDim.css'

const ThreeDim = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)
  useEffect(()=> {
    setWhere('three-area')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  const navigate = useNavigate();

  return (
    <div className={!transition ? 'threedim-container' : 'threedim-container threedim-container-t'}>
        <div class='photo1-threedim'><button onClick={()=> {navigate('/mywork/areas/threedim/japan')}}></button></div>
        <div class='photo2-threedim'><button onClick={()=> {navigate('/mywork/areas/threedim/halloween')}}></button></div>
        <div class='photo3-threedim'><button onClick={()=> {navigate('/mywork/areas/threedim/dices')}}></button></div>
    </div>
  )
}

export default ThreeDim