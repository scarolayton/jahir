import React, {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header';
import '../styles/Proyects.css'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdClear } from "react-icons/md";
import img1 from "../source/proyects-grid-1.jpeg"
import img2 from "../source/proyects-grid-2.jpeg"
import img3 from "../source/proyects-grid-3.jpeg"
import img4 from "../source/proyects-grid-4.jpeg"
import img5 from "../source/proyects-grid-5.jpeg"
import img6 from "../source/proyects-grid-6.jpeg"
import img7 from "../source/proyects-grid-7.jpeg"
import img8 from "../source/proyects-grid-8.jpeg"
import img9 from "../source/proyects-grid-9.jpeg"
import WhatsappButton from '../components/WhatsappButton';
const galleryimg = require.context('../source/', true)
const Proyects =  (() => {
  const scrollRef = useRef(null);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const textForEachImage = [
    ['Apartaestudios', 'Construcción de aparta-estudios y remodelación casa galería con materiales de primera calidad'], 
    ['cambio cubierta upvc', 'Esta es cambio de cubierta de teja de barro por teja upvc colonial en inmuebles de conservación patrimonial'], 
    ['Apartaestudios', 'Construcción de aparta-estudios y remodelación casa galería con materiales de primera calidad'], 
    ['Apartaestudios', 'Construcción de aparta-estudios y remodelación casa galería con materiales de primera calidad'],
    ['Edificio Oproc 66', 'Contrucción de espacios nuevos Y remodelación de recepción y áreas comunes en edificio Oproc 66 chapinero alto'],
    ['Edificio Oproc 66', 'Contrucción de espacios nuevos Y remodelación de recepción y áreas comunes en edificio Oproc 66 chapinero alto'],
    ['Cocinas', 'Construcción de apartaestudios nuevos Remodelación de espacios y adecuaciones generales'],
    ['Cocinas', 'Construcción de apartaestudios nuevos Remodelación de espacios y adecuaciones generales'],
     ['Cubierta centro medico', 'Cambio de cubierta de medical center, centro medico ubicado en Kennedy Bogotá, con teja STANDING SEAM y canales galvanizadas CL 18'], 
  ]
  const [gallery, setGallery] = useState(false);  
  const [pictureInGallery, setPictureInGallery] = useState(1);
  const showGallery = (e) => {
      setGallery(!gallery)
      const numberImage = parseInt(e.target.getAttribute('alt'));
      document.querySelector('body').style.overflow = 'hidden'
      // console.log(element);
      setPictureInGallery(numberImage)
      document.querySelector('.zoom-gallery').classList.add('shows-gallery')
      document.getElementById('zoom-img').classList.add('shows-gallery')
  }
  const hideGallery = () => {
    setGallery(!gallery)
    console.log(gallery);
    document.querySelector('.zoom-gallery').classList.remove('shows-gallery')

  }
  const changePictureUp = () => {
    if(pictureInGallery < 9 ){
      setPictureInGallery(pictureInGallery +1)
    }else {
      setPictureInGallery(1)
    }
    
    document.getElementById('zoom-img').src = pictureInGallery
    // document.getElementById('zoom-img').animate([
    //   // fotogramas clave
    //   { transform: 'opacity(0)' },
    //   { transform: 'opacity(1)' }
    // ], {
    //   // opciones de sincronización
    //   duration: 100
    // });
    
  }
  const changePictureDown = () => {
    if(pictureInGallery > 1 ){
      setPictureInGallery(pictureInGallery - 1)
    }else {
      setPictureInGallery(9)
    }
    document.getElementById('zoom-img').src = pictureInGallery
  }
  return (
    <motion.div
      ref={scrollRef}
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
    >
      <Header/>
      <div className='principal-proyects'>
        <h1>Nuestros Proyectos</h1>
        <p>A continuación podras ver algunos de nuestros proyectos más recientes</p>
      </div>
      <article className='article-grid-proyects'>
        {images.map(image  => (
          <div className="image-container">

            <img src={image} className='images-proyects' onClick={showGallery} alt={images.indexOf(image) + 1} />
          </div>
        ))}
      </article>
      <div className='zoom-gallery'>
        <MdClear className='close' onClick={hideGallery}/>

        <div className='zoom-gallery-principal'> 
        <MdArrowBackIos className='arrow' onClick={changePictureDown}/>
        <img src={galleryimg(`./proyects-grid-${pictureInGallery}.jpeg`)} alt="zoom" id='zoom-img' />
        <MdArrowForwardIos onClick={changePictureUp} className='arrow'/>
        </div>
        <div className='zoom-gallery-text'>
        <h5>{textForEachImage[pictureInGallery-1][0]}</h5>
        <p>{textForEachImage[pictureInGallery-1][1]}</p>
          
        </div>
      </div>
      <WhatsappButton/>
    </motion.div>
  )
})

export default Proyects