import React from 'react'
import { useNavigate } from "react-router-dom"; 
import './PhotoDocument.css'


const PhotoDocument = () => {

  
const navigate = useNavigate();

  return (
    <div class='photodoc-container'>
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