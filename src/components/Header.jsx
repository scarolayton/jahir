import logo from '../source/logo.jpeg'
import React from 'react'
import { useState } from 'react';
import '../styles/Header.css'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [menu,setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
    document.getElementById('menu').classList.toggle('shows') 
  }
    return (
    <nav>
      <img src={logo} alt='logo'/>
      <div className='navbar-left'>
      <FaBars className='symbol-menu' onClick={toggleMenu}/>
        <ul id='menu'>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/Sobre">Nosotros</NavLink></li>
          <li><NavLink to="/Proyectos">Proyectos</NavLink></li>
          <li><NavLink to="/Contacto">Contacto</NavLink></li>
        </ul>
        <p className='number'x>320 9996291</p>
      </div>
    </nav>
  )
}

export default Header