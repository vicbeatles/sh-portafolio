import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import './Design.css'

const Design = (props) => {

  const {setWhere} = props;
  useEffect(()=> {setWhere('design-area')})

  const navigate = useNavigate();
  
  return (
    <div class='design-container'>
        <div class='photo1-design'><button onClick={()=>{navigate('/mywork/areas/design/billboard')}}></button></div>
        <div class='photo2-design'><button onClick={()=>{navigate('/mywork/areas/design/cat-food')}}></button></div>
        <div class='photo3-design'><button onClick={()=>{navigate('/mywork/areas/design/scene')}}>
            <img src={require('../../assets/images/diseño/desiertogif.gif')} alt='Desierto GIF' />
            <img src={require('../../assets/images/diseño/bosquegif.gif')} alt='Bosque GIF' />
            </button>
        </div>
        <div class='photo4-design'><button onClick={()=>{navigate('/mywork/areas/design/bread')}}></button></div>
    </div>
  )
}

export default Design