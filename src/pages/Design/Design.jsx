import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import './Design.css'

const Design = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area')
    setTimeout(()=> {setTransition(true)}, 100)
    console.log(transition)
  })

  const navigate = useNavigate();
  
  return (
    <div className={!transition ? 'design-container' : 'design-container design-container-t'}>
        <div class='photo1-design'><button onClick={()=>{navigate('/mywork/areas/design/billboard')}}></button></div>
        <div class='photo2-design'><button onClick={()=>{navigate('/mywork/areas/design/cat-food')}}></button></div>
        <div class='photo3-design'><button onClick={()=>{navigate('/mywork/areas/design/scene')}}>
            <img src={require('../../assets/images/design/desiertogif.gif')} alt='Desierto GIF' />
            <img src={require('../../assets/images/design/bosquegif.gif')} alt='Bosque GIF' />
            </button>
        </div>
        <div class='photo4-design'><button onClick={()=>{navigate('/mywork/areas/design/bread')}}></button></div>
    </div>
  )
}

export default Design