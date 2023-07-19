import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >

      <Header/>
      <ContactForm style={{marginTop: '300px'}}/>
      {/* <Map/> */}
      <iframe className='map' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.870558183328!2d-74.11054088930658!3d4.617170842356383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9944c9bd9765%3A0xe4a459187aa6b969!2sTv.%2042%20%234f%2094%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1688095989408!5m2!1ses!2sco" width="100%" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </motion.div>
  )
}

export default Contact