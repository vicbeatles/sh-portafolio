import React from 'react'
import { useNavigate } from "react-router-dom"; 
import './ThreeDim.css'

const ThreeDim = () => {
  
  const navigate = useNavigate();

  return (
    <div class='threedim-container'>
        <div class='photo1-threedim'><button onClick={()=> {navigate('/mywork/areas/threedim/japan')}}></button></div>
        <div class='photo2-threedim'><button onClick={()=> {navigate('/mywork/areas/threedim/halloween')}}></button></div>
        <div class='photo3-threedim'><button onClick={()=> {navigate('/mywork/areas/threedim/dices')}}></button></div>
    </div>
  )
}

export default ThreeDim