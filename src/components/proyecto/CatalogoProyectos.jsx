import React from "react";
import "./CatPro.css"; // Asegúrate de enlazar el CSS creado
import Navbar from "../NavBar";
import Footer from "../Footer";

const CatalogoProyectos = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <h1>Catálogo de proyectos</h1>
        <div className="catalog-grid">
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
          ].map((category) => (
            <div key={category} className="catalog-item">
              {category}
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default CatalogoProyectos;
