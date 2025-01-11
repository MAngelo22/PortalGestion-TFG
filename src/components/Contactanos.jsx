import React from "react";
import "./estilos/Contactanos.css";
import Navbar from "./NavBar.js";
import Footer from "./Footer.jsx";
import tlf from "../media/img/ct1.png";
import carta from "../media/img/ct2.png";
import ct3 from "../media/img/ct3.png";

const Contactanos = () => {
    return (
      <div>
        <Navbar/>
      
      <div className="contactanos">
        
        <h1>Contacta con nosotros</h1>
        <div className="contact-info">
          <div className="contact-item">
            <img className="contact-img" src={tlf} alt="imagen1"></img>
            <p>Llámanos en cualquier momento. Estamos disponibles 24/7.</p>
            <p>Teléfono: (+34) 999 999 999</p>
          </div>
          <div className="contact-item">
          <img className="contact-img" src={carta} alt="imagen2"></img>
            <p>Escríbenos a: info@academiamiral.com</p>
          </div>
          <div className="contact-item">
          <img className="contact-img" src={ct3} alt="imagen3"></img>
            <p>
              ¿Necesitas hablar con alguien?{" "}
              
            </p>
          </div>
        </div>
        <form className="contact-form">
          <input type="email" placeholder="Tu correo electrónico" required />
          <input type="text" placeholder="Asunto" required />
          <textarea placeholder="¿Cómo podemos ayudarte?" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <Footer/>
      </div>
      </div>
    );
  };
  
  export default Contactanos;
