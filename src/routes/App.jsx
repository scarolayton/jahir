import React from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import '../styles/App.css'
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Proyects from "../pages/Proyects";
import Contact from "../pages/Contact";
function App() {
  const location = useLocation();
  return (
        <div className="App">
              <AnimatePresence>
                  <Routes location={location} key={location.pathname}>

                    <Route  path="/" element={<Home/>}/>
                    <Route  path="/Sobre/*" element={<About/>}/>
                    <Route  path="/Proyectos/*" element={<Proyects/>}/>
                    <Route  path="/Contacto/*" element={<Contact/>}/>
                    <Route  path="/*" element={<Proyects/>}/>

                  </Routes> 
              </AnimatePresence>
        </div>
  );
}

export default App;
