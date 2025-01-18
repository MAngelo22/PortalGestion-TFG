import React from "react";
//import "./estilos/Css_Catalogo.css";
import "./estilos/estilo.css";
import Navbar from "./NavBar.jsx"; // Importamos el Navbar
import Footer from "./Footer.jsx"; // Importamos el Footer

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <main className="main-container">
        <h1 className="main-title">Catálogo de empleados</h1>
        <div className="cards-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', width: 'auto'}}>
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
      <h4>{category}</h4>
    </div>
  ))}
</div>

      </main>

      <Footer/>
    </div>
  );
};

export default Dashboard;
