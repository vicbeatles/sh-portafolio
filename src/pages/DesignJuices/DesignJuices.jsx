import React, { useEffect, useState } from 'react'
import './DesignJuices.css'

const DesignJuices = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'dsjuices-container' : 'dsjuices-container dsjuices-container-t'}>
        <div class='photo1-dsjuices'></div>
        <div class='photo2-dsjuices'></div>
        <div class='photo3-dsjuices'></div>
        <div class='description-dsjuices'><h1 class='product-desc-title'>NATURES FACTORY</h1><p>Natures Factory es una mpresa que se dedica a la creacion de té de diferentes sabores
como en este caso  MANGO y JAMAICA promete sabores frescos y frutales. <br></br>En esta practica quise mostrar la frescura y tropicalidad de ambos sabores</p></div>
    </div>
  )
}

export default DesignJuices