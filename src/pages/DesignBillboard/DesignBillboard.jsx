import React, { useEffect, useState } from 'react'
import './DesignBillboard.css'

const DesignBillboard = (props) => {

  const {setWhere} = props;
  const [transition, setTransition] = useState(false)

  useEffect(()=> {
    setWhere('design-area-item')
    setTimeout(()=> {setTransition(true)}, 100)
  })
  
  return (
    <div className={!transition ? 'billboard-container' : 'billboard-container billboard-container-t'}>
        <div class='photo1-billboard'></div>
        <div class='photo2-billboard'></div>
        <div class='description-billboard'><h1 class='product-desc-title'>BILLBOARD</h1><p>Proyecto simulado para la marca de Billboard elody bajo
            el concepto "Sin cables, sin ataduras". También se puede ver un mockup de como se vería en un celular.</p></div>
    </div>
  )
}

export default DesignBillboard