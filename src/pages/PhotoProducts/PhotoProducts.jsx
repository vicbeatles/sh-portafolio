import React from 'react'
import { useNavigate } from "react-router-dom"; 
import './PhotoProducts.css'

const PhotoProducts = () => {

  const navigate = useNavigate();


  return (
    <div class='productphotos-container'>
        <div class='product-photo1'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo2'><button onClick={()=> {navigate('/mywork/areas/photo/product/boones')}}></button></div>
        <div class='product-photo3'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo4'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo5'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo6'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo7'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo8'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
    </div>
  )
}

export default PhotoProducts