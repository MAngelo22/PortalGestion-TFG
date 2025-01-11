import React from "react";
import "./CatCur.css";
import Navbar from "../NavBar"; // Importamos el Navbar
import Footer from "../Footer"; // Importamos el Footer

const CatalogoCurso = () => {
  return (
    <div>
      <Navbar />

      <main className="main-container">
        <h1 className="main-title">Catálogo de Cursos</h1>
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

      <Footer/>
    </div>
  );
};

export default CatalogoCurso;
