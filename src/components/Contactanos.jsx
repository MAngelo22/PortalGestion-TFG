import React from "react";
import "./estilos/Contactanos.css";
import Navbar from "./NavBar.js";
import Footer from "./Footer.jsx";

const Contactanos = () => {
    return (
      <div className="contactanos">
        <Navbar/>
        <h1>Contacta con nosotros</h1>
        <div className="contact-info">
          <div className="contact-item">
            <p>Llámanos en cualquier momento. Estamos disponibles 24/7.</p>
            <p>Teléfono: (+34) 999 999 999</p>
          </div>
          <div className="contact-item">
            <p>Escríbenos a: info@academiamiral.com</p>
          </div>
          <div className="contact-item">
            <p>
              ¿Necesitas hablar con alguien?{" "}
              <a href="#" className="link">Solicita una reunión</a>
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
    );
  };
  
  export default Contactanos;
