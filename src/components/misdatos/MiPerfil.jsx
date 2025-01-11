import React from "react";
import { Link } from "react-router-dom"; // Importa Link para las rutas
import "./MiPerfil.css"; // Archivo CSS para estilos
import Navbar from "../NavBar";
import Footer from "../Footer";

const MiPerfil = () => {
  const perfil = {
    foto: "../../media/img/perfil.png", // Reemplaza con la URL de la imagen del perfil
    nombre: "Miguel Ángel Núñez",
    telefono: "645976872",
    pais: "España",
    departamento: "Informática",
    codigoEmpleado: "N99467",
    email: "miguel.n@empresa.com",
    ciudad: "Ciudad",
    fechaIncorporacion: "17/07/2023",
  };

  return (
    <div>
      <Navbar />
      <div className="mi-perfil">
        <h1>Mi perfil</h1>
        <div className="perfil-card">
          <div className="perfil-foto">
            <img src={perfil.foto} alt="Foto de perfil" />
          </div>
          <div className="perfil-detalles">
            <div className="perfil-columna">
              <p>
                <strong>Nombre y Apellidos</strong>
                <br />
                {perfil.nombre}
              </p>
              <p>
                <strong>Teléfono</strong>
                <br />
                {perfil.telefono}
              </p>
              <p>
                <strong>País</strong>
                <br />
                {perfil.pais}
              </p>
              <p>
                <strong>Departamento</strong>
                <br />
                {perfil.departamento}
              </p>
            </div>
            <div className="perfil-columna">
              <p>
                <strong>Código empleado</strong>
                <br />
                {perfil.codigoEmpleado}
              </p>
              <p>
                <strong>Email</strong>
                <br />
                {perfil.email}
              </p>
              <p>
                <strong>Ciudad</strong>
                <br />
                {perfil.ciudad}
              </p>
              <p>
                <strong>Fecha incorporación</strong>
                <br />
                {perfil.fechaIncorporacion}
              </p>
            </div>
          </div>
        </div>
        <button className="btn-editar">Editar</button>

        {/* Botones para redireccionar a Mis Cursos y Mis Proyectos */}
        <Link to="/miscursos" className="btn-link">
          <button className="btn-editar">Mis Cursos</button>
        </Link>
        <Link to="/misproyectos" className="btn-link">
          <button className="btn-editar">Mis Proyectos</button>
        </Link>
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MiPerfil;
