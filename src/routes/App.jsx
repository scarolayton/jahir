import React from "react";
import { Routes, Route} from 'react-router-dom';
import '../styles/App.css'
import Home from "../pages/Home";
import About from "../pages/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Sobre" element={<About/>}/>

      </Routes> 
    </div>
  );
}

export default App;
