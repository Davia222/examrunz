import React from 'react'
import whatsappLogo from "../assets/whatsappLogo.png"


function ContactViaWhatsapp() {
  return (
   <>
   <div className='whatsappButton'>
    <a href='https://wa.me/2347044334946?text=Hello please i have interest in examrunz . . .' target='_blank'   className='box'>
        <img className='whatsappLogo' src={whatsappLogo} alt="" />
    </a>
   </div>
   </>
  )
}

export default ContactViaWhatsapp