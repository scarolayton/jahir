import React, { useRef } from 'react'
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import WhatsappButton from '../components/WhatsappButton';
// import About from './About';
const Home = () => {
  const scrollRef = useRef(null);
  return (
    <motion.div
      ref={scrollRef} 
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <Header/>
      <article className='principal-article'>
        <motion.h1 
        initial={{y:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration: 1}}
        >CUBIERTAS, REMODELACIONES Y OBRAS CIVILES</motion.h1>
        <Link className='principal-article-link' to='./Sobre'>Presupuesto sin costo</Link>
      </article>
      <article className='general-info-article' >
        <div className='general-info-article-img'></div>
        <motion.div className='general-info-article-text'
          initial={{x:100, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration: 0.8}}
         >
          <h2>Somos especialistas en cubiertas</h2>
          <p>Somos una empresa que fabrica, vende e instala accesorios para cubiertas  dedicados a la producción y comercialización de una amplia variedad de productos que se utilizan para cubrir y proteger techos y fachadas de edificios, tanto residenciales como comerciales.</p>
          <Link className='general-info-article-link'>Más informacion aqui</Link>
        </motion.div>
      </article>
      <section className='Our-services'>
         <motion.h2 
         className='Our-services-title'>Nuestros Servicios</motion.h2>
         <div className='Our-services-images'>
          <span className='Our-services-img1'><motion.h3 
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration: 0.8}}
          >Cubiertas</motion.h3></span>
          <span className='Our-services-img2'><motion.h3 
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration: 0.8}}
          >Remodelaciones</motion.h3></span>
          <span className='Our-services-img3'><motion.h3 
          initial={{x:100, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration: 0.8}}
          >Obras</motion.h3></span>
         </div>
         <Link className='general-info-article-link Our-services-link'>Más informacion aqui</Link>
         <WhatsappButton/>
      </section>
      <ContactForm/>
    </motion.div>

  )
}

export default Home;