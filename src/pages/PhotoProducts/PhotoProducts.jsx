import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import './PhotoProducts.css'

const PhotoProducts = (props) => {

  const {setWhere} = props;
  const navigate = useNavigate();
  const [transition,setTransition] = useState(false);

  useEffect(()=>{

    setWhere('photo-product');
    setTimeout(()=>{setTransition(true)},100)

  })

  return (
    <div className={!transition ? 'productphotos-container' : 'productphotos-container productphotos-container-t'}>
        <div class='product-photo1'><button onClick={()=> {navigate('/mywork/areas/photo/product/jewelry')}}></button></div>
        <div class='product-photo2'><button onClick={()=> {navigate('/mywork/areas/photo/product/boones')}}></button></div>
        <div class='product-photo3'><button onClick={()=> {navigate('/mywork/areas/photo/product/candy')}}></button></div>
        <div class='product-photo4'><button onClick={()=> {navigate('/mywork/areas/photo/product/watch')}}></button></div>
        <div class='product-photo5'><button onClick={()=> {navigate('/mywork/areas/photo/product/soap')}}></button></div>
        <div class='product-photo6'><button onClick={()=> {navigate('/mywork/areas/photo/product/brand')}}></button></div>
        <div class='product-photo7'><button onClick={()=> {navigate('/mywork/areas/photo/product/flowers')}}></button></div>
        <div class='product-photo8'><button onClick={()=> {navigate('/mywork/areas/photo/product/ring')}}></button></div>
    </div>
  )
}

export default PhotoProducts