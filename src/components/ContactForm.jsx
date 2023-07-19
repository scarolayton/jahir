import React from "react";
import '../styles/ContactForm.css'
const ContactForm = () => {
  return (
    <footer>
      <div className="footer-text">
        <h3>Cuentanos tu proyecto</h3>
        <p>Llena el formulario o llámanos para una consulta</p>
        <h5>zonas de trabajo:</h5>
        <p>A nivel nacional</p>
        <p>92, Tv. 42 #4 F, Puente Aranda, Bogotá</p>
        <p>proyetos@lacasadelacubierta.com</p>
        <p>suministros@lacasadelacubierta.com</p>
        <p>+57 320 9996291</p>
      </div>
      <form action="">
        <div className="input-container">
          <input placeholder="Nombre" type="text" id="Name" name="Name"/>
          <input placeholder="Apellido" type="text" id="Lastname" name="Lastname"/>
        </div>
        <div className="input-container">
 
          <input  placeholder="Email" type="text" id="Email" name="Email"/>
          <input placeholder="Telefono" type="text" id="Phone" name="Phone"/>
        </div>
        <div>
          <input placeholder="Asunto" type="text"  id="Subject" name="Subject"/>
        </div>
        <div >
          <input placeholder="Dirección" type="text"  id="Address" name="Address"/>
        </div>
        <div >
          <input placeholder="Mensaje" type="text"  id="Message" name="Message"/>
        </div>
        <button>Enviar</button>
      </form>
    </footer>
    
  )
}

export default ContactForm