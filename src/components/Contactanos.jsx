import React, { useState } from "react";
import "./estilos/Contactanos.css";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import tlf from "../media/img/ct1.png";
import carta from "../media/img/ct2.png";
import ct3 from "../media/img/ct3.png";
import axios from "axios";

const Contactanos = () => {
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const formValues = Object.fromEntries(formData.entries());
    const formValues = {
      para: event.target.para.value,
      asunto: event.target.asunto.value,
      text: event.target.text.value,
    };

    console.log('Valores del formulario:', formValues);

    try {
      const response = await axios.post(
        'http://localhost:8085/api/email/enviar',
        formValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      console.log('Respuesta:', response);
      alert('Correo enviado exitosamente');
    } catch (error) {
      setError('Error al enviar correo ');
      console.error('Error:', error);
    }

  };

  return (
    <div>
      <Navbar />

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
            <p>Escríbenos a: portal-gestion-tfc@outlook.es</p>
          </div>
          <div className="contact-item">
            <img className="contact-img" src={ct3} alt="imagen3"></img>
            <p>
              ¿Necesitas hablar con alguien?{" "}

            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Tu correo electrónico" name="para" required />
          <input type="text" placeholder="Asunto" name="asunto" required />
          <textarea placeholder="¿Cómo podemos ayudarte?" name="text" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Contactanos;
