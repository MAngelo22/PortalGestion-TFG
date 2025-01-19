import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MiPerfil.css";
import Navbar from "../NavBar";
import Footer from "../Footer";

const MiPerfil = () => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "Miguel Angel Palomino",
    telefono: "123456789",
    pais: "España",
    departamento: "Desarrollo",
    codigoUsuario: "MAP123",
    email: "miguelangel@example.com",
    ciudad: "Madrid",
    fechaIncorporacion: "2024-01-15"
  });

  const handleEditarClick = () => {
    setEditable(!editable);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="mi-perfil">
        <h1>Mi perfil</h1>
        <div className="perfil-card">
          <div className="perfil-foto">
            <img src="../../media/img/perfil.png" alt="Foto de perfil" />
          </div>
          <div className="perfil-detalles">
            <div className="perfil-columna">
              <p>
                <strong>Nombre y Apellidos</strong>
                <br />
                {editable ? (
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="input-editable"
                  />
                ) : (
                  formData.nombre
                )}
              </p>
              <p>
                <strong>Teléfono</strong>
                <br />
                {editable ? (
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="input-editable"
                  />
                ) : (
                  formData.telefono
                )}
              </p>
              <p>
                <strong>País</strong>
                <br />
                {editable ? (
                  <input
                    type="text"
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    className="input-editable"
                  />
                ) : (
                  formData.pais
                )}
              </p>
              <p>
                <strong>Departamento</strong>
                <br />
                {editable ? (
                  <input
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleInputChange}
                    className="input-editable"
                  />
                ) : (
                  formData.departamento
                )}
              </p>
            </div>
            <div className="perfil-columna">
              <p>
                <strong>Código usuario</strong>
                <br />
                {formData.codigoUsuario}
              </p>
              <p>
                <strong>Email</strong>
                <br />
                {editable ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-editable"
                  />
                ) : (
                  formData.email
                )}
              </p>
              <p>
                <strong>Ciudad</strong>
                <br />
                {editable ? (
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    className="input-editable"
                  />
                ) : (
                  formData.ciudad
                )}
              </p>
              <p>
                <strong>Fecha incorporación</strong>
                <br />
                {new Date(formData.fechaIncorporacion).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="botones-perfil">
            {editable ? (
              <>
                <button type="button" className="btn-editar" onClick={handleEditarClick}>
                  Guardar
                </button>
                <button type="button" className="btn-cancelar" onClick={handleEditarClick}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button type="button" className="btn-editar" onClick={handleEditarClick}>
                  Editar
                </button>
                <Link to="/miscursos" className="btn-link">
                  <button type="button" className="btn-editar">Mis Cursos</button>
                </Link>
                <Link to="/misproyectos" className="btn-link">
                  <button type="button" className="btn-editar">Mis Proyectos</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MiPerfil;
