import React from 'react'
import Header from '../components/Header';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
// import About from './About';
const Home = () => {
  return (
    <>
      <Header/>
      <article className='principal-article'>
        <h1>CUBIERTAS, REMODELACIONES Y OBRAS</h1>
        <Link className='principal-article-link' to='./Sobre'>Presupuesto sin costo</Link>
      </article>
      <article className='general-info-article'>
        <div className='general-info-article-img'></div>
        <div className='general-info-article-text'>
          <h2>Somos especialistas en cubiertas</h2>
          <p>La casa de la cubierta con su gran experienia y profesionalismo Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas alias provident quisquam tempore dolor a ullam aspernatur nihil minus</p>
          <Link className='general-info-article-link'>Más informacion aqui</Link>
        </div>
      </article>
    </>

  )
}

export default Home;