import React from "react";
import "./MisCursos.css"; // Archivo CSS para los estilos
import cursosImg from "../media/img/cursos.png"; // Asegúrate de reemplazar esta ruta con la imagen correcta
import Footer from "../Footer";
import Navbar from "../NavBar";

const MisCursos = () => {
  return (
    <div>
        <Navbar/>
    <div className="mis-cursos-container">
      <h1 className="mis-cursos-title">Mis cursos</h1>
      <img src={cursosImg} alt="Ilustración de cursos" className="cursos-image" />
      <p className="cursos-description">Añade formación a tu perfil</p>
      <button className="explorar-cursos-button">Explora el catálogo de cursos</button>
    </div>
    <div>
        <Footer/>
    </div>
    
    </div>
  );
};

export default MisCursos;
