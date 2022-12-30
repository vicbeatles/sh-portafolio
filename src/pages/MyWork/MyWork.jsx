import React from 'react'
import './MyWork.css'

const MyWork = (props) => {

  const {where,setWhere} = props;

  setWhere('work');

  return (
    <div>
      <div class='mywork-title'>MI TRABAJO</div>
      <div class='mywork-text'>
        <p>Mi trabajo utiliza colores muy vivos así como el color negro. Mi paleta de colores
            más utilizados son los tonos azules, rojos y amarillos ya que para mí estos colores dan mucha energía y 
            calma. A veces los degrado para dar otras sensaciones, esto se puede ver reflejado en todos mis trabajos en cualquier área.</p>
        <p>Actualmente aparte de la carrera en diseño también me especializo en diseño de UX ya que me gusta provocar buenas sensaciones y ayudar a los usuarios.</p>
        <p>También soy fotógrafa de producto, tengo varias certificaciones oficiales en estas 3 áreas.</p>
      </div>
      
    </div>
  )
}

export default MyWork