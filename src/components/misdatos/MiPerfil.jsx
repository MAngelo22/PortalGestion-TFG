import React from "react";
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MiPerfil;
