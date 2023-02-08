import React, { useEffect, useState } from 'react'
import './DesignBread.css'

const DesignBread = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'bread-container' : 'bread-container bread-container-t'}>
        <div class='photo1-bread'></div>
        <div class='photo2-bread'></div>
        <div class='description-bread'><h1 class='product-desc-title'>EL GLOBO</h1><p>Ilustración realizada para mostrar un promocional de El Globo en 
          la época de Día de Muertos, promocionando pan de muerto.</p></div>
    </div>
  )
}

export default DesignBread