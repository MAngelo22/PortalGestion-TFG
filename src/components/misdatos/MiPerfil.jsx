import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para las rutas
import "./MiPerfil.css"; // Archivo CSS para estilos
import Navbar from "../NavBar";
import Footer from "../Footer";
import axios from "axios";

const MiPerfil = () => {
  const [error, setError] = useState(null);
  const [editable, setEditable] = useState(false);

  const perfil = {
    foto: "../../media/img/perfil.png", // Reemplaza con la URL de la imagen del perfil
    nombre: "Miguel Ángel Núñez",
    telefono: "645976872",
    pais: "España",
    departamento: "Informática",
    codigoUsuario: "N99467",
    email: "miguel.n@empresa.com",
    ciudad: "Ciudad",
    fechaIncorporacion: "17/07/2023",
  };

  const handleEditarClick = () => {
    setEditable(!editable);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Valores del formulario:', formValues);

    setError(null);
    try {
      const response = await axios.put(`http://localhost:8085/api/usuario/edit/${formValues.id}`, formValues);
      // const usuarioEditar = usuarios.map(usu =>
      //   usu.id === id ? response.data : usu
      // );
      // setUsuarios(usuarioEditar);
      console.log('Respuesta:', response);
      alert('Usuario actualizado exitosamente');
    } catch (error) {
      setError('Error al actualizar el usuario');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar />

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="mi-perfil">
        <h1>Mi perfil</h1>
        <div className="perfil-card">
          <form onSubmit={handleSubmit}>
            <div className="perfil-foto">
              <img src={perfil.foto} alt="Foto de perfil" />
            </div>
            <div className="perfil-detalles">
              <div className="perfil-columna">
                <p>
                  <strong>Nombre y Apellidos</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="nombre" value={perfil.nombre} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.nombre
                  )}
                </p>
                <p>
                  <strong>Teléfono</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="telefono" value={perfil.telefono} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.telefono
                  )}
                </p>
                <p>
                  <strong>País</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="pais" value={perfil.pais} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.pais
                  )}
                </p>
                <p>
                  <strong>Departamento</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="departamento" value={perfil.departamento} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.departamento
                  )}
                </p>
              </div>
              <div className="perfil-columna">
                <p>
                  <strong>Código usuario</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="codigoUsuario" value={perfil.codigoUsuario} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.codigoUsuario
                  )}
                </p>
                <p>
                  <strong>Email</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="email" value={perfil.email} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.email
                  )}
                </p>
                <p>
                  <strong>Ciudad</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="ciudad" value={perfil.ciudad} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.ciudad
                  )}
                </p>
                <p>
                  <strong>Fecha incorporación</strong>
                  <br />
                  {editable ? (
                    <input type="text" name="fechaIncorporacion" value={perfil.fechaIncorporacion} onChange={() => {}} readOnly={!editable} />
                  ) : (
                    perfil.fechaIncorporacion
                  )}
                </p>
              </div>
            </div>
            {editable ? (
              <>
                <button type="submit" className="btn-editar">Enviar</button>
                <button className="btn-editar" onClick={handleEditarClick}>Cancelar</button>
              </>
            ) : (
              <>
                <button className="btn-editar" onClick={handleEditarClick}>Editar</button>
                <Link to="/miscursos" className="btn-link">
                  <button className="btn-editar">Mis Cursos</button>
                </Link>
                <Link to="/misproyectos" className="btn-link">
                  <button className="btn-editar">Mis Proyectos</button>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MiPerfil;
