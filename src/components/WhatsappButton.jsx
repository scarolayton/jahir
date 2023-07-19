import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/WhatsappButton.css'
import { BsChatLeftText } from "react-icons/bs";
const WhatsappButton = () => {
  return (
    <div className='whatsappbutton-container'>
      <BsChatLeftText style={{fontSize: '20px'}}/>

      <Link style={{color: 'whitesmoke', fontWeight: '700'}} to={'https://wa.link/ljv3a5'}>
        chatea con nosotros
      </Link>
    </div>
  )
}

export default WhatsappButton