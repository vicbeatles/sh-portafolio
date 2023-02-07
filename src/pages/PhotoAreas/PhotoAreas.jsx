import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"; 
import './PhotoAreas.css'

const PhotoAreas = (props) => {

  const {setWhere} = props;
  const navigate = useNavigate();
  const [transition, setTransition] = useState(false);

  
  useEffect(()=>{

    setWhere('photo-areas');
    setTimeout(()=>{setTransition(true)},100)

  });


  return (
    <div class='photoa-container'><div className={!transition ? 'product-area' : 'product-area product-area-t'}><button onClick={()=> {navigate('/mywork/areas/photo/product')}}><svg width="298" height="457" viewBox="0 0 298 457" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M221 81.5H257.167C266.759 81.5 275.958 85.846 282.74 93.5818C289.523 101.318 293.333 111.81 293.333 122.75V411.5C293.333 422.44 289.523 432.932 282.74 440.668C275.958 448.404 266.759 452.75 257.167 452.75H40.1667C30.5747 452.75 21.3755 448.404 14.593 440.668C7.8104 432.932 4 422.44 4 411.5V122.75C4 111.81 7.8104 101.318 14.593 93.5818C21.3755 85.846 30.5747 81.5 40.1667 81.5H76.3333" stroke="url(#paint0_linear_332_279)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path class='productcolor1' d="M210.792 4H91.5415C80.5648 4 71.6665 13.2901 71.6665 24.75V66.25C71.6665 77.7099 80.5648 87 91.5415 87H210.792C221.768 87 230.667 77.7099 230.667 66.25V24.75C230.667 13.2901 221.768 4 210.792 4Z" stroke="#00FFA3" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_332_279" x1="148.667" y1="81.5" x2="148.667" y2="452.75" gradientUnits="userSpaceOnUse">
    <stop class='productcolor1' stop-color="#00FFA3"/>
    <stop class='productcolor2' offset="1" stop-color="#DBC608" stop-opacity="0.39"/>
    </linearGradient>
    </defs>
    </svg></button>
    <div class='area-title-pa'>PRODUCTO</div>
    </div>
    <div className={!transition ? 'doc-area' : 'doc-area doc-area-t'}><button onClick={()=> {navigate('/mywork/areas/photo/documental')}}><svg width="421" height="485" viewBox="0 0 421 485" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M347.676 40.4167H73.3242C52.2044 40.4167 35.0834 60.1405 35.0834 84.4709V400.529C35.0834 424.86 52.2044 444.583 73.3242 444.583H347.676C368.796 444.583 385.917 424.86 385.917 400.529V84.4709C385.917 60.1405 368.796 40.4167 347.676 40.4167Z" stroke="url(#paint0_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M122.792 40.4167V444.583" stroke="url(#paint1_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M298.208 40.4167V444.583" stroke="url(#paint2_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.0834 242.5H385.917" stroke="url(#paint3_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.0834 141.458H122.792" stroke="url(#paint4_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.0834 343.542H122.792" stroke="url(#paint5_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M298.208 343.542H385.917" stroke="url(#paint6_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M298.208 141.458H385.917" stroke="url(#paint7_linear_332_290)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_332_290" x1="210.5" y1="40.4167" x2="210.5" y2="444.583" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint1_linear_332_290" x1="123.292" y1="40.4167" x2="123.292" y2="444.583" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint2_linear_332_290" x1="298.708" y1="40.4167" x2="298.708" y2="444.583" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint3_linear_332_290" x1="210.5" y1="242.5" x2="210.5" y2="243.5" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint4_linear_332_290" x1="78.9375" y1="141.458" x2="78.9375" y2="142.458" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint5_linear_332_290" x1="78.9375" y1="343.542" x2="78.9375" y2="344.542" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint6_linear_332_290" x1="342.063" y1="343.542" x2="342.063" y2="344.542" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
<linearGradient id="paint7_linear_332_290" x1="342.063" y1="141.458" x2="342.063" y2="142.458" gradientUnits="userSpaceOnUse">
<stop class='doccolor1' stop-color="#CCFF01"/>
<stop class='doccolor2' offset="1" stop-color="#0D0101"/>
</linearGradient>
</defs>
</svg></button>
    <div class='area-title-pa'>DOCUMENTAL</div>
    </div>
    </div>
  )
}

export default PhotoAreas