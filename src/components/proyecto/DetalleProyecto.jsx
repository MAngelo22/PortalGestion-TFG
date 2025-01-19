import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./DetalleProyecto.css";
import Navbar from '../NavBar';
import Footer from '../Footer';

const DetalleProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener proyecto
  const obtenerProyecto = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8085/api/proyecto/${id}`, {
        withCredentials: true
      });
      setProyecto(response.data);
    } catch (error) {
      setError('Error al obtener los datos del proyecto');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerProyecto();
  }, [id]);

  if (loading) return <div className="loading-overlay">Cargando...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!proyecto) return <div>No se encontró el proyecto</div>;

  return (
    <>
      <Navbar />
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
              <span className="actualizacion">Última actualización: {new Date(proyecto.ultimaActualizacion).toLocaleDateString()}</span>
            </div>

            <div className="calificacion">
              <span className="estrellas">{"⭐".repeat(proyecto.destacado)}</span>
              <span className="puntaje">{proyecto.destacado}</span>
            </div>

            <div className="acciones">
              <button className="boton-solicitar">Solicitar proyecto ...</button>
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
              {proyecto.requisitosTecnicos && proyecto.requisitosTecnicos.split(',').map((requisito, index) => (
                <div key={index} className="modulo-item">
                  <strong>Requisito {index + 1}:</strong> {requisito.trim()}
                </div>
              ))}
            </div>
          </div>

          <div className="detalle-imagen">
            <img
              className="proyecto-imagen"
              src={proyecto.foto || '/default-project.jpg'}
              alt={`Imagen de ${proyecto.nombre}`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetalleProyecto;