import logo from '../source/LA.png'
import React from 'react'
import { useState } from 'react';
import '../styles/Header.css'
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [menu,setMenu] = useState()
  const toggleMenu = (val) => {
    setMenu(!menu)
    document.getElementById('menu').classList.toggle('shows')
    if(menu) {
      
      document.body.style.overflow="hidden";
    }
  }
    return (
    <nav>
      <img src={logo} alt='logo'/>
      <div className='navbar-left'>
      <FaBars className='symbol-menu' onClick={toggleMenu}/>
        <ul id='menu'>
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