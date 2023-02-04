import React, { useEffect, useState } from 'react'
import './DesignCatFood.css'

const DesignCatFood = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=> {setTransition(true)}, 100)  
  })

  
  return (
    <div className={!transition ? 'catfood-container' :  'catfood-container catfood-container-t'}>
        <div class='photo1-catfood'></div>
        <div class='photo2-catfood'></div>
        <div class='description-catfood'><h1 class='product-desc-title'>WHISKAS</h1><p>Publicidad simulada para la marca de Whiskas bajo el concepto
          de "Regresa a la naturaleza", también se puede ver un mockup de como se vería en una revista.</p></div>
    </div>
  )
}

export default DesignCatFood