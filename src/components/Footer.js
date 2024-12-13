import React from "react";
import { Link } from "react-router-dom";
import "./estilos/footer.css"; // Agrega estilos para el navbar

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-section">
          <h3>PRODUCTOS</h3>
          <p>Cursos</p>
          <p>Microcarreras</p>
          <p>Talleres</p>
          <p>Recursos gratuitos</p>
        </div>
        <div className="footer-section">
          <h3>SERVICIOS</h3>
          <p>Asesoramiento personalizado</p>
          <p>Financiación</p>
          <p>Bolsa de trabajo</p>
        </div>
        <div className="footer-section">
          <h3>LEGAL</h3>
          <p>Condiciones de uso</p>
          <p>Política de privacidad</p>
          <p>Política de cookies</p>
        </div>
        <div className="footer-section footer-icons">
          <a href="#facebook">🌐</a>
          <a href="#twitter">🐦</a>
          <a href="#instagram">📷</a>
          <a href="#linkedin">💼</a>
        </div>
      </footer>
  );
};

export default Footer;
