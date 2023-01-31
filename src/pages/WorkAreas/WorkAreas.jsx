import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"; 
import './WorkAreas.css'

const WorkAreas = (props) => {

        const {setWhere} = props;
        const [transition, setTransition] = useState(false);
        
        useEffect(()=> {

                setWhere('work-areas');
                setTimeout(()=>{setTransition(true)},100)
        });
        
const navigate = useNavigate();


  return (
    <div className="workareas-container">
        <div className={transition == false ? 'photo-area' : 'photo-area photo-area-t'}><button className='photo-area-button' onClick={()=> {
                navigate('/mywork/areas/photo');
        }}><svg viewBox="0 0 298 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M296.25 248C296.25 256.155 293.432 263.977 288.415 269.744C283.399 275.51 276.595 278.75 269.5 278.75H28.75C21.6555 278.75 14.8515 275.51 9.83489 269.744C4.8183 263.977 2 256.155 2 248V78.875C2 70.7196 4.8183 62.8982 9.83489 57.1315C14.8515 51.3647 21.6555 48.125 28.75 48.125H82.25L109 2H189.25L216 48.125H269.5C276.595 48.125 283.399 51.3647 288.415 57.1315C293.432 62.8982 296.25 70.7196 296.25 78.875V248Z" stroke="url(#paint0_linear_310_24)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M149.125 217.25C178.672 217.25 202.625 189.716 202.625 155.75C202.625 121.784 178.672 94.25 149.125 94.25C119.578 94.25 95.625 121.784 95.625 155.75C95.625 189.716 119.578 217.25 149.125 217.25Z" stroke="url(#paint1_linear_310_24)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_310_24" x1="149.125" y1="2" x2="149.125" y2="278.75" gradientUnits="userSpaceOnUse">
<stop  className='photocolor1' stop-color="#00F7CA"/>
<stop className='photocolor2' offset="1" stop-color="#1D58F2"/>
</linearGradient>
<linearGradient id="paint1_linear_310_24" x1="149.125" y1="94.25" x2="149.125" y2="217.25" gradientUnits="userSpaceOnUse">
<stop className='photocolor1' stop-color="#00F7CA"/>
<stop className='photocolor2' offset="1" stop-color="#1D58F2"/>
</linearGradient>
</defs>
</svg></button>
<div className='area-title-workareas'>FOTOGRAFIA</div>
</div>
        <div className='design-area'><button className='design-area-button' onClick={()=> {
                navigate('/mywork/areas/design');
        }}><svg width="186" height="192" viewBox="0 0 186 192" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M141 105.042L127.875 34.1042L1 1L31.625 138.146L97.25 152.333L141 105.042Z" stroke="url(#paint0_linear_332_329)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1L67.3775 72.7509" stroke="url(#paint1_linear_332_329)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M79.75 105.042C89.415 105.042 97.25 96.5724 97.25 86.125C97.25 75.6777 89.415 67.2084 79.75 67.2084C70.085 67.2084 62.25 75.6777 62.25 86.125C62.25 96.5724 70.085 105.042 79.75 105.042Z" stroke="url(#paint2_linear_332_329)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M97 162.208L158.25 96L184.5 124.375L123.25 190.583L97 162.208Z" stroke="url(#paint3_linear_332_329)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_332_329" x1="71" y1="1" x2="71" y2="152.333" gradientUnits="userSpaceOnUse">
<stop className='designcolor1' stop-color="#10FFB7"/>
<stop className='designcolor2' offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint1_linear_332_329" x1="34.1888" y1="1" x2="34.1888" y2="72.7509" gradientUnits="userSpaceOnUse">
<stop className='designcolor1' stop-color="#10FFB7"/>
<stop className='designcolor2' offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint2_linear_332_329" x1="79.75" y1="67.2084" x2="79.75" y2="105.042" gradientUnits="userSpaceOnUse">
<stop className='designcolor1' stop-color="#10FFB7"/>
<stop className='designcolor2' offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint3_linear_332_329" x1="140.75" y1="96" x2="140.75" y2="190.583" gradientUnits="userSpaceOnUse">
<stop className='designcolor1' stop-color="#10FFB7"/>
<stop className='designcolor2' offset="1" stop-color="#FFF500"/>
</linearGradient>
</defs>
</svg></button>
<div className='area-title-workareas'>DISEÑO</div>
</div>
        <div className='three-area'><button className='three-area-button' onClick={()=>{navigate('/mywork/areas/threedim')}}><svg width="322" height="339" viewBox="0 0 322 339" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M318.75 234.549V102.216C318.744 96.4145 317.12 90.7165 314.041 85.6936C310.962 80.6708 306.536 76.4998 301.208 73.599L178.417 7.43232C173.083 4.52866 167.033 3 160.875 3C154.717 3 148.667 4.52866 143.333 7.43232L20.5417 73.599C15.2136 76.4998 10.7882 80.6708 7.70926 85.6936C4.63037 90.7165 3.00631 96.4145 3 102.216V234.549C3.00631 240.351 4.63037 246.049 7.70926 251.072C10.7882 256.095 15.2136 260.266 20.5417 263.166L143.333 329.333C148.667 332.237 154.717 333.765 160.875 333.765C167.033 333.765 173.083 332.237 178.417 329.333L301.208 263.166C306.536 260.266 310.962 256.095 314.041 251.072C317.12 246.049 318.744 240.351 318.75 234.549Z" stroke="url(#paint0_linear_310_110)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.73633 85.0127L160.875 168.548L314.014 85.0127" stroke="url(#paint1_linear_310_110)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M160.875 335.123V168.383" stroke="url(#paint2_linear_310_110)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_310_110" x1="160.875" y1="3" x2="160.875" y2="333.766" gradientUnits="userSpaceOnUse">
<stop className='threecolor1' offset="0.0001" stop-color="#5200FF"/>
<stop className='threecolor2' offset="1" stop-color="#D9035D"/>
</linearGradient>
<linearGradient id="paint1_linear_310_110" x1="160.875" y1="85.0127" x2="160.875" y2="168.548" gradientUnits="userSpaceOnUse">
<stop className='threecolor1' offset="0.0001" stop-color="#5200FF"/>
<stop className='threecolor2' offset="1" stop-color="#D9035D"/>
</linearGradient>
<linearGradient id="paint2_linear_310_110" x1="161.375" y1="168.383" x2="161.375" y2="335.123" gradientUnits="userSpaceOnUse">
<stop className='threecolor1' offset="0.0001" stop-color="#5200FF"/>
<stop className='threecolor2' offset="1" stop-color="#D9035D"/>
</linearGradient>
</defs>
</svg></button>
<div className='area-title-workareas'>3D</div>
</div>
        <div className='ux-area'><button className='ux-area-button' onClick={()=> {navigate('/mywork/areas/ux')}}><svg width="332" height="398" viewBox="0 0 332 398" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.1667 91.2083C69.1667 75.8147 74.2677 61.0516 83.3476 50.1666C92.4275 39.2817 104.742 33.1666 117.583 33.1666H166V149.25H117.583C104.742 149.25 92.4275 143.135 83.3476 132.25C74.2677 121.365 69.1667 106.602 69.1667 91.2083Z" stroke="url(#paint0_linear_332_147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M166 33.1666H214.417C220.775 33.1666 227.071 34.6679 232.945 37.5848C238.819 40.5016 244.157 44.777 248.652 50.1666C253.148 55.5563 256.715 61.9548 259.148 68.9967C261.581 76.0386 262.833 83.5861 262.833 91.2083C262.833 98.8304 261.581 106.378 259.148 113.42C256.715 120.462 253.148 126.86 248.652 132.25C244.157 137.64 238.819 141.915 232.945 144.832C227.071 147.749 220.775 149.25 214.417 149.25H166V33.1666Z" stroke="url(#paint1_linear_332_147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M166 207.292C166 199.67 167.252 192.122 169.685 185.08C172.119 178.038 175.685 171.64 180.181 166.25C184.677 160.86 190.014 156.585 195.888 153.668C201.763 150.751 208.059 149.25 214.417 149.25C220.775 149.25 227.071 150.751 232.945 153.668C238.819 156.585 244.157 160.86 248.652 166.25C253.148 171.64 256.715 178.038 259.148 185.08C261.581 192.122 262.833 199.67 262.833 207.292C262.833 214.914 261.581 222.461 259.148 229.503C256.715 236.545 253.148 242.944 248.652 248.333C244.157 253.723 238.819 257.998 232.945 260.915C227.071 263.832 220.775 265.333 214.417 265.333C208.059 265.333 201.763 263.832 195.888 260.915C190.014 257.998 184.677 253.723 180.181 248.333C175.685 242.944 172.119 236.545 169.685 229.503C167.252 222.461 166 214.914 166 207.292V207.292Z" stroke="url(#paint2_linear_332_147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M69.1667 323.375C69.1667 307.981 74.2677 293.218 83.3476 282.333C92.4275 271.448 104.742 265.333 117.583 265.333H166V323.375C166 338.769 160.899 353.532 151.819 364.417C142.739 375.302 130.424 381.417 117.583 381.417C104.742 381.417 92.4275 375.302 83.3476 364.417C74.2677 353.532 69.1667 338.769 69.1667 323.375Z" stroke="url(#paint3_linear_332_147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M69.1667 207.292C69.1667 191.898 74.2677 177.135 83.3476 166.25C92.4275 155.365 104.742 149.25 117.583 149.25H166V265.333H117.583C104.742 265.333 92.4275 259.218 83.3476 248.333C74.2677 237.448 69.1667 222.685 69.1667 207.292Z" stroke="url(#paint4_linear_332_147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_332_147" x1="117.583" y1="33.1666" x2="117.583" y2="149.25" gradientUnits="userSpaceOnUse">
<stop className='uxcolor1' stop-color="#BF08FF"/>
<stop className='uxcolor2' offset="1" stop-color="#24FF00" stop-opacity="0.37"/>
</linearGradient>
<linearGradient id="paint1_linear_332_147" x1="214.417" y1="33.1666" x2="214.417" y2="149.25" gradientUnits="userSpaceOnUse">
<stop className='uxcolor1' stop-color="#BF08FF"/>
<stop className='uxcolor2' offset="1" stop-color="#24FF00" stop-opacity="0.37"/>
</linearGradient>
<linearGradient id="paint2_linear_332_147" x1="214.417" y1="149.25" x2="214.417" y2="265.333" gradientUnits="userSpaceOnUse">
<stop className='uxcolor1' stop-color="#BF08FF"/>
<stop className='uxcolor2' offset="1" stop-color="#24FF00" stop-opacity="0.37"/>
</linearGradient>
<linearGradient id="paint3_linear_332_147" x1="117.583" y1="265.333" x2="117.583" y2="381.417" gradientUnits="userSpaceOnUse">
<stop className='uxcolor1' stop-color="#BF08FF"/>
<stop className='uxcolor2' offset="1" stop-color="#24FF00" stop-opacity="0.37"/>
</linearGradient>
<linearGradient id="paint4_linear_332_147" x1="117.583" y1="149.25" x2="117.583" y2="265.333" gradientUnits="userSpaceOnUse">
<stop className='uxcolor1' stop-color="#BF08FF"/>
<stop className='uxcolor2' offset="1" stop-color="#24FF00" stop-opacity="0.37"/>
</linearGradient>
</defs>
</svg></button>
<div className='area-title-workareas'>UX</div></div>

<div className='contact-area'><button className='contact-area-button' onClick={()=> {navigate('/mywork/areas/contact')}}>Contactos</button></div>
<div className='noneareas-area'></div>
    </div>
  )
}

export default WorkAreas