import React from "react";
import "./MisCursos.css"; // Archivo CSS para los estilos
import cursosImg from "../../media/img/mdc.png"; // Asegúrate de reemplazar esta ruta con la imagen correcta
import Footer from "../Footer";
import Navbar from "../NavBar";
import { Link } from 'react-router-dom';

const MisCursos = () => {
  return (
    <div>
        <Navbar/>
    <div className="mis-cursos-container">
      <h1 className="mis-cursos-title">Mis cursos</h1>
      <img src={cursosImg} alt="Ilustración de cursos" className="cursos-image" />
      <p className="cursos-description">Añade formación a tu perfil</p>
      <Link to="/catCur" className="btn-link">
          <button className="explorar-cursos-button">Explora el catálogo de cursos</button>
        </Link>
    </div>
    <div>
        <Footer/>
    </div>
    
    </div>
  );
};

export default MisCursos;
