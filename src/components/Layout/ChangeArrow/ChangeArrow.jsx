import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"; 
import './ChangeArrow.css'

const ChangeArrow = () => {


  const navigate = useNavigate();
  const [clicked,setClicked] = useState('nextArrow');
  const [toWorkClick,setToWorkClick] = useState('toWorkArrow toWorkArrowHide');
  const params = useParams();
  console.log(params)

  if(clicked === 'nextArrow nextArrowClicked' && params.inicio === 'inicio') {
    setClicked('nextArrow')
  }

  if(!params.inicio && clicked === 'nextArrow') {  
    setClicked('nextArrow nextArrowClicked')
    setToWorkClick('toWorkArrow')
  }

  return (
    <div>
      <div className={clicked}><button onClick={()=> {
      
      if(clicked === 'nextArrow nextArrowClicked')
      {
        setClicked('nextArrow');
        setToWorkClick('toWorkArrowHide')
        
        if(!params.incio) {
          navigate('/inicio')
          
        } else {
          navigate(-1);
        }
      } else {
        setClicked('nextArrow nextArrowClicked')
        setToWorkClick('toWorkArrow');
        navigate('/aboutme');
      }
      }}></button>
      </div>
    <div className={toWorkClick}><button onClick={ ()=> {
      navigate('/mywork');
    }}></button>
    </div>

  </div>
  )
}

export default ChangeArrow