import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './ChangeArrow.css'

const ChangeArrow = () => {

    /* const [clicked, setClicked] = useState(false);
    const clicker = () => {setClicked(!clicked)}


    useEffect(()=>{

        let classedArrow = document.getElementsByClassName('nextArrow')[0];
        let classedBackground = document.getElementsByClassName('startpage')[0];
        if(clicked) {
    
      
          if(classedBackground.className != 'startpage startnone') {
            classedBackground.className += ' startnone';
          console.log(classedBackground.className)
          }
          
    
          if(classedArrow.className != 'nextArrow backArrow') {
            classedArrow.className += ' backArrow';
            console.log(classedArrow.className)
          }
        }
        else {
          
          if (classedArrow.className == 'nextArrow backArrow') {
            classedArrow.className = classedArrow.className.slice(0,9);
            console.log(classedArrow.className);
          }
    
          if (classedBackground.className == 'startpage startnone') {
            classedBackground.className = classedBackground.className.slice(0,9);
            console.log(classedBackground.className);
          }
    
        } 
        console.log(clicked)
    },[clicked]);
 */
    
  return (
    <div><div className='nextArrow'><Link to='/aboutme' relative="path">.</Link></div></div>
  )
}

export default ChangeArrow