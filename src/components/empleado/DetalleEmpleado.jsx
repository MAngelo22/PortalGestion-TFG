import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./DetalleEmpleado.css";
import Navbar from '../NavBar';
import Footer from '../Footer';
import { format } from 'date-fns';

const DetalleEmpleado = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener empleado
  const obtenerEmpleado = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8085/api/empleado/${id}`, {
        withCredentials: true
      });
      setEmpleado(response.data);
    } catch (error) {
      setError('Error al obtener los datos del empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerEmpleado();
  }, [id]);

  if (loading) return <div className="loading-overlay">Cargando...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!empleado) return <div>No se encontró el empleado</div>;



  // En desarrollo
  const asignarEmpToProyect = async (idProyecto) => {

    console.log('Asignar Proyecto: ', idProyecto);
    setLoading(true);
    setError(null);
    try {

      const response = await axios.post(`http://localhost:8085/api/empleado/asignar-a-proyecto${idProyecto}`,
        { withCredentials: true });
      // setEmpleados(empToProyect);
      alert('Empleado asignado a proyecto exitosamente');
    } catch (error) {
      setError('Error al asignar el empleado alproyecto');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="detalle-empleado">
        <Link to="/empleados" className="back-link">
          ← Volver
        </Link>

        <div className="detalle-contenido">
          <div className="detalle-info">
            <h1 className="nombre">{empleado.nombre} {empleado.apellidos}</h1>
            <ul className="perfil-lista">
              <li><strong>Perfil:</strong> {empleado.perfil}</li>
              <li><strong>Experiencia:</strong> {empleado.experiencia}</li>
              <li><strong>Conocimientos:</strong> {empleado.conocimientos}</li>
              <li><strong>Email:</strong> {empleado.email}</li>
            </ul>

            <div className="informacion-extra">
              <span className="nivel">Nivel: {empleado.nivel}</span>
              <span className="actualizacion"> Fecha incorporación: {format(new Date(empleado.fechaIncorporacion), 'dd/MM/yyyy')}</span>
            </div>

            <div className="calificacion">
              <span className="estrellas">{"⭐".repeat(empleado.estrellas)}</span>
              <span className="puntaje">{empleado.estrellas}</span>
            </div>

            <div className="acciones">
              <button className="boton-asignar"
                onClick={() => asignarEmpToProyect('1')}
              > Asignar a proyecto ...</button>
              {/* <button className="boton-favorito">❤️</button> */}
              <button className="boton-favorito">{empleado.destacado} </button>
            </div>

            <div className="tabs">
              <button className="tab activa">Perfil</button>
              <button className="tab">Experiencia</button>
              <button className="tab">Conocimientos</button>
              <button className="tab">Proyectos</button>
            </div>

            <div className="modulos-grid">
              {empleado.habilidades && empleado.habilidades.map((habilidad, index) => (
                <div key={index} className="modulo-item">
                  <strong>{habilidad.nombre}:</strong> {habilidad.nivel}
                </div>
              ))}
            </div>
          </div>

          <div className="detalle-imagen">
            {/* <img
              className="foto-perfil"
              src={empleado.foto || '/default-profile.jpg'}
              alt={`Foto de ${empleado.nombre}`}
            /> */}
            {!empleado.foto ? (
              <img
                className="foto-perfil"
                src="/default-empleado.png"
                alt={`Imagen por defecto de ${empleado.nombre}`}
              />
            ) : (
              <img
                className="foto-perfil"
                src={empleado.foto}
                alt={`Foto de ${empleado.nombre}`}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetalleEmpleado;
