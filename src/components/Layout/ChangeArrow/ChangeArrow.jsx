import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"; 
import './ChangeArrow.css'

const ChangeArrow = (props) => {

  const {where, setWhere} = props;
  console.log(where)


  const navigate = useNavigate();
  const [clicked,setClicked] = useState('nextArrow');
  const [toWorkClick,setToWorkClick] = useState('toWorkArrow toWorkArrowHide');
  const [DiskImageDisplayed,setDiskImageDisplayed] = useState('abourWork-image aboutWork-imageHide');
  const params = useParams();
  console.log(params)
  console.log(clicked);

  if(clicked === 'nextArrow nextArrowClicked' && params.inicio === 'inicio') {
    setClicked('nextArrow')
    setToWorkClick('toWorkArrowHide')
    setDiskImageDisplayed('aboutWork-imageHide')
  }

  if(!params.inicio && clicked === 'nextArrow') {  
    setClicked('nextArrow nextArrowClicked')
    setToWorkClick('toWorkArrow')
    setDiskImageDisplayed('aboutWork-image')

  }

  if(!params.inicio && where === 'work' && DiskImageDisplayed === 'aboutWork-image') {  
    setDiskImageDisplayed('aboutWork-image aboutWork-image-rotate')

  }

  if(!params.inicio && where === 'work' && DiskImageDisplayed === 'aboutWork-imageHide') {  
    setDiskImageDisplayed('aboutWork-image aboutWork-image-rotate')
    setToWorkClick('toWorkArrow')
    setClicked('nextArrow nextArrowClicked')

  }

  if(!params.inicio && where === 'aboutme' && DiskImageDisplayed === 'aboutWork-imageHide') {  
    setDiskImageDisplayed('aboutWork-image aboutWork-image-rotate')
    setToWorkClick('toWorkArrow')

  }

  if(!params.inicio && where === 'aboutme' && DiskImageDisplayed === 'aboutWork-image aboutWork-image-rotate') {  
    setDiskImageDisplayed('aboutWork-image')
    setToWorkClick('toWorkArrow')

  }


  if(!params.inicio && where === 'work-areas' && toWorkClick === 'toWorkArrow') {  

    setDiskImageDisplayed('aboutWork-imageHide')
    setToWorkClick('toWorkArrowHide');

  }

  if(where === 'work-areas' && clicked === 'nextArrow nextArrowClicked')
  {
    setClicked('nextArrow nextArrowClickedWorkAreas')
  }



  if(where === 'photo-areas' && clicked === 'nextArrow nextArrowClicked')
  {
  
    setClicked('nextArrow nextArrowClickedTop');
    setToWorkClick('toWorkArrowHide');
    setDiskImageDisplayed('aboutWork-imageHide')
  }

  
  if(where === 'photo-areas' && clicked === 'nextArrow nextArrowClickedWorkAreas')
  {
  
    setClicked('nextArrow nextArrowClickedTop');
    setToWorkClick('toWorkArrowHide');
    setDiskImageDisplayed('aboutWork-imageHide')
  }

  if(where !== 'photo-areas' && clicked === 'nextArrow nextArrowClickedTop')
  {
  
    setClicked('nextArrow nextArrowClickedWorkAreas');
    setToWorkClick('toWorkArrowHide');
    setDiskImageDisplayed('aboutWork-imageHide')
  }




  return (
    <div>

      
    <div className={clicked}><button onClick={()=> {
      
      if(clicked === 'nextArrow nextArrowClicked')
      {
        setClicked('nextArrow');
        setToWorkClick('toWorkArrowHide')
        setDiskImageDisplayed('aboutWork-imageHide');
        
        if(!params.incio) {
          if(toWorkClick === 'toWorkArrow' && DiskImageDisplayed === 'aboutWork-image aboutWork-image-rotate')
          {
            navigate('/aboutme')
            setWhere('aboutme')
            
          } else {
            if(where==='work-areas') {
              navigate('/mywork')
            } else {
              navigate('/inicio')
            }
            
          }
          
        } else {
            navigate(-1);
        }

      } else {
        if(where === 'work-areas')
        {
          console.log('ahora si aqui')
          setToWorkClick('toWorkArrow')
          setDiskImageDisplayed('aboutWork-image aboutWork-image-rotate');
          setClicked('nextArrow nextArrowClicked ')
          navigate('/mywork')

        } else {
          if(where==='photo-areas') {
          setToWorkClick('toWorkArrowHide')
          setDiskImageDisplayed('aboutWork-imageHide');
          setClicked('nextArrow nextArrowClicked')
          navigate('/mywork/areas')
          } else {
            setClicked('nextArrow nextArrowClicked')
        setToWorkClick('toWorkArrow');
        setDiskImageDisplayed('aboutWork-image about-Work-image-rotateback')
        navigate('/aboutme');
        setWhere('aboutme')
          }

        }

      }
      }}></button>
    </div>
    <div className={toWorkClick}><button onClick={ ()=> {

      if(where==='work') {
        navigate('/mywork/areas')
        setToWorkClick('toWorkArrowHide');
        setDiskImageDisplayed('aboutWork-imageHide');
        setClicked('nextArrow nextArrowClicked')
      } else {
        navigate('/mywork');
        setDiskImageDisplayed('aboutWork-image aboutWork-image-rotate');
      }
     
    }}></button>
    </div>
    <div className={DiskImageDisplayed}><img src={require('../../../assets/images/sobremi-imagen.png')} alt='Animación' /></div>
  </div>
  )
}

export default ChangeArrow