import React from "react";
import "./estilos/Css_Catalogo.css";
import Navbar from "./NavBar.js"; // Importamos el Navbar


const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1 className="main-title">Catálogo de empleados</h1>
        <div className="cards-container">
          {[
            "Diseño",
            "Desarrollo",
            "Marketing",
            "Informática",
            "Desarrollo personal",
            "Fotografía",
            "Salud y fitness",
            "Música",
            "Ilustración",
            "Arquitectura",
            "Caligrafía",
            "Moda",
          ].map((category, index) => (
            <div className="card" key={index}>
              {category}
            </div>
          ))}
        </div>
      </main>

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
    </div>
  );
};

export default Dashboard;
