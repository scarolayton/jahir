import logo from '../source/LA.png'
import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <nav>
      <img src={logo} alt='logo'/>
      <div className='navbar-left'>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Nosotros</a></li>
          <li><a href="/">Productos</a></li>
          <li><a href="/">Servicios</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
        <p className='number'>31690356453</p>
      </div>
    </nav>
  )
}

export default Header