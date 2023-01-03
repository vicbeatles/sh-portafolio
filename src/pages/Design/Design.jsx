import React from 'react'
import './Design.css'

const Design = () => {
  return (
    <div class='design-container'>
        <div class='photo1-design'></div>
        <div class='photo2-design'></div>
        <div class='photo3-design'>
            <img src={require('../../assets/images/diseño/desiertogif.gif')} alt='Desierto GIF' />
            <img src={require('../../assets/images/diseño/bosquegif.gif')} alt='Bosque GIF' />
        </div>
        <div class='photo4-design'></div>
    </div>
  )
}

export default Design