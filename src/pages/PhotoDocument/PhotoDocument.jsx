import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import './PhotoDocument.css'


const PhotoDocument = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('photo-documental')
    setTimeout(()=>{setTransition(true)}, 100)
  
  })
  
const navigate = useNavigate();

  return (
    <div className={!transition ? 'photodoc-container' : 'photodoc-container photodoc-container-t'}>
      <div class='photo1-photodoc'><button onClick={()=> {navigate('/mywork/areas/photo/documental/eiffel')}}></button></div>
      <div class='photo2-photodoc'><button onClick={()=> {navigate('/mywork/areas/photo/documental/marry')}}></button></div>
      <div class='photo3-photodoc'><button onClick={()=> {navigate('/mywork/areas/photo/documental/musician')}}></button></div>
      <div class='photo4-photodoc'><button onClick={()=> {navigate('/mywork/areas/photo/documental/music')}}></button></div>
      <div class='photo5-photodoc'><button onClick={()=> {navigate('/mywork/areas/photo/documental/age')}}></button></div>
      <div class='photo6-photodoc'><button onClick={()=> {navigate('/mywork/areas/photo/documental/prison')}}></button></div>
    </div>
  )
}

export default PhotoDocument