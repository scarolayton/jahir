import React from 'react'
import Header from '../components/Header';
import '../styles/About.css'
import grid1 from '../source/about-grid-1.jpeg'
import grid2 from '../source/about-grid-2.jpeg'
import grid3 from '../source/about-grid-3.jpeg'
import grid4 from '../source/about-grid-4.jpeg'
import {motion} from 'framer-motion'
import WhatsappButton from '../components/WhatsappButton';
const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
    <Header/>
    <section className='about-principal'>
      <div className="about-text">
      <h1
      >Acerca de la casa de la cubierta</h1>
      <p>
      Entre los accesorios para cubiertas  se incluyen elementos como tejas, paneles de cubierta, aislamientos térmicos, materiales de impermeabilización, sistemas de drenaje de agua canales, claraboyas y ventiladores, entre otros.
      </p>
      </div>
      <div className="about-principal-img"></div>
    </section>
    <article className='about-text'>
      <motion.h2
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration: 0.8}}
        >Misión</motion.h2>
      <p>En nuestra empresa, nos dedicamos a proporcionar soluciones de alta calidad en la venta y fabricación de cubiertas, accesorios para cubiertas y fachadas, para satisfacer las necesidades de nuestros clientes. Nuestro compromiso es brindar productos y servicios de alto valor, mediante la implementación de procesos eficientes y sostenibles, y la utilización de tecnologías avanzadas.</p>
      <p> Buscamos crear una relación duradera con nuestros clientes, basada en la confianza, la transparencia y la satisfacción, y promover el desarrollo y bienestar de nuestra comunidad y el medio ambiente en el que operamos. Nos esforzamos por mantenernos a la vanguardia del mercado, fomentando la innovación y la mejora continua en todas nuestras actividades, y ofrecer a nuestros empleados un entorno seguro, inclusivo y enriquecedor, donde puedan desarrollarse personal y profesionalmente</p>
    </article>
    <motion.section
     initial={{ opacity:0}}
     whileInView={{ opacity:1}}
     transition={{duration: 0.8}}
     className='about-grid'>
      <img  className='about-grid-img'src={grid1} alt="grid-img" />
      <div className='about-grid-title'>
      <h4 >Calidad teja a teja</h4>
      </div>
      <img className='about-grid-img'src={grid2} alt="grid-img" />
      <div className='about-grid-title'>
      <h4 >Materiales que te hacen fuerte</h4>
      </div>
      <div className='about-grid-title'>
      <h4 >Consultas a domicilio</h4>
      </div>
      <img className='about-grid-img'src={grid3} alt="grid-img" />
      <div className='about-grid-title'>
      <h4>Hogares para todos</h4>
      </div>
      <img className='about-grid-img'src={grid4} alt="grid-img" />
    </motion.section>
    <article className='about-text'>
      <motion.h2
        initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration: 1}}
        >visión</motion.h2>
      <p>Nuestra visión es convertirnos en líderes del mercado en la venta y fabricación de cubiertas, accesorios para cubiertas y fachadas, proporcionando productos de alta calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por ser reconocidos por nuestra excelencia en el servicio al cliente, nuestro compromiso con la sostenibilidad y la calidad de nuestros productos, y por ser una empresa que inspira confianza en nuestros clientes y empleados. Queremos ser una empresa que mejora la vida de las personas a través de la creación de espacios más seguros, eficientes y atractivos para vivir y trabajar.</p>
    </article>
 
      <WhatsappButton/>
    </motion.div>
  )
}

export default About;