import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./DetalleProyecto.css";
import Navbar from '../NavBar';
import Footer from '../Footer';
import { format } from 'date-fns';


const DetalleProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [solicitado, setSolicitado] = useState(null);

  const obtenerProyecto = async () => {
    try {
      const response = await axios.get(`http://localhost:8085/api/proyecto/${id}`, {
        withCredentials: true
      });
      setProyecto(response.data);
    } catch (error) {
      setError('Error al obtener los datos del proyecto');
      console.error('Error:', error);
      return null;
    }
  };

  const isSolicitadoProyecto = async (proyectoId) => {
    try {
      console.log('Solicitar Proyecto: ', proyecto.id);
      const response = await axios.get(`http://localhost:8085/api/empleado/proyecto-asignado/${proyectoId}`,
        { withCredentials: true });
      setSolicitado(response.data);
    } catch (error) {
      setError('Error al comprobar solicitud');
      console.error('Error:', error);
    }
  };

  // En desarrollo
  const solicitarProyect = async () => {
    console.log('Solicitar Proyecto: ', proyecto.id);
    setLoading(true);
    try {

      await axios.post(`http://localhost:8085/api/empleado/solicitar-proyecto${proyecto.id}`,
        null,
        { withCredentials: true });
      await isSolicitadoProyecto(proyecto.id);
      // setEmpleados(empToProyect);
      alert('Solicitud proyecto enviada exitosamente');
    } catch (error) {
      setError('Error al solicitar proyecto');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cargarDatos = async () => {
      setLoading(true);
      try {
        const proyectoResponse = await obtenerProyecto();
        if (proyectoResponse) {
          await isSolicitadoProyecto(proyectoResponse.id);
        }
      } catch (error) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [id]);

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

      {loading && <div className="loading-overlay">Cargando...</div>}
      {error && <div className="error-message">{error}</div>}
      {!proyecto && <div>No se encontró el proyecto</div>}
      {proyecto && (

        <div className="detalle-proyecto">
          <Link to="/proyectos" className="back-link">
            ← Volver
          </Link>

          <div className="detalle-contenido">
            <div className="detalle-info">
              <h1 className="nombre">{proyecto.nombre}</h1>
              <ul className="perfil-lista">
                <li><strong>Descripción:</strong> {proyecto.descripcion}</li>
                <li><strong>Requisitos Técnicos:</strong> {proyecto.requisitosTecnicos}</li>
                <li><strong>Nivel de Experiencia:</strong> {proyecto.nivelExperiencia}</li>
                <li><strong>Dificultad:</strong> {proyecto.dificultad}</li>
              </ul>

              <div className="informacion-extra">
                <span className="nivel">Nivel: {proyecto.nivelExperiencia}</span>
                {/* <span className="actualizacion">Última actualización: {new Date(proyecto.ultimaActualizacion).toLocaleDateString()}</span> */}
                <span className="actualizacion"> Última actualización: {format(new Date(proyecto.ultimaActualizacion), 'dd/MM/yyyy')}
                </span>
              </div>

              <div className="calificacion">
                <span className="estrellas">{"⭐".repeat(proyecto.destacado)}</span>
                <span className="puntaje">{proyecto.destacado}</span>
              </div>

              <div className="acciones">
                {!solicitado ? (
                  <button className="boton-solicitar"
                    onClick={() => solicitarProyect()}
                    disabled={loading}
                  >Solicitar proyecto ...</button>
                ) : (
                  <button className="boton-solicitar"
                    disabled
                  >  Proyecto solicitado ({format(new Date(solicitado), 'dd/MM/yyyy')})</button>
                )}

                <button className="boton-asignar">Asignar proyecto a ...</button>
                <button className="boton-favorito">❤️</button>
              </div>

              <div className="tabs">
                <button className="tab activa">Requisitos técnicos</button>
                <button className="tab">Arquitectura</button>
                <button className="tab">Equipo</button>
                <button className="tab">Timeline</button>
              </div>

              <div className="modulos-grid">
                {proyecto.requisitosTecnicos && proyecto.requisitosTecnicos?.split(',').map((requisito, index) => (
                  <div key={index} className="modulo-item">
                    <strong>Requisito {index + 1}:</strong> {requisito.trim()}
                  </div>
                ))}
              </div>
            </div>

            <div className="detalle-imagen">
              <img
                className="proyecto-imagen"
                src={proyecto.foto || '/default-project.png'}
                alt={`Imagen de ${proyecto.nombre}`}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DetalleProyecto;