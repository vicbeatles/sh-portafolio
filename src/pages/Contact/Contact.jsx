import React from 'react'
import { useNavigate } from "react-router-dom"; 
import './Contact.css'

const Contact = () => {

  const navigate = useNavigate();

  return (
    <div class='main-contact-container'>
    <div class='contact-container'>
      <div class='sh-name'>Samantha Hernandez Soto</div>
      <div class='contact-title'>Contactos</div>
      <div class='vc-name'>Victor Manuel Castro Lopez</div>
      <div class='qr-mail-sh'></div>
      <div class='qr-be-sh-bg'><div class='qr-be-sh'></div></div>
      <div class='qr-mail-vc'></div>
      <div class='text-mail-sh'>shsoto07@gmail.com</div>
      <div class='text-mail-vc'>vmcastro15@gmail.com</div>
      <div class='qr-wa-sh'></div>
      <div class='qr-wa-vc'></div>
      <div class='text-wa-sh'>5554040911</div>
      <div class='text-wa-vc'>5591071020</div>
    </div>
    <div class='contact-buttons'><button onClick={()=> {navigate('/inicio')}}>Ir a inicio</button>
    <button onClick={()=> {navigate('/mywork/areas')}}>Ir a botones</button></div>
    </div>
  )
}

export default Contact