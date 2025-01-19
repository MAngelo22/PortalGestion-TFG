import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./DetalleCurso.css";
import Navbar from '../NavBar';
import Footer from '../Footer';

const DetalleCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener curso
  const obtenerCurso = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8085/api/curso/${id}`, {
        withCredentials: true
      });
      setCurso(response.data);
    } catch (error) {
      setError('Error al obtener los datos del curso');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCurso();
  }, [id]);

  if (loading) return <div className="loading-overlay">Cargando...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!curso) return <div>No se encontró el curso</div>;

  return (
    <>
      <Navbar />
      <div className="detalle-curso">
        <Link to="/cursos" className="back-link">
          ← Volver
        </Link>

        <div className="detalle-contenido">
          <div className="detalle-info">
            <h1 className="nombre">{curso.nombre}</h1>
            <ul className="temario-lista">
              <li><strong>Descripción:</strong> {curso.descripcion}</li>
              <li><strong>Profesor:</strong> {curso.profesor}</li>
              <li><strong>Nivel:</strong> {curso.nivelExperiencia}</li>
              <li><strong>Metodología:</strong> {curso.metodologia}</li>
            </ul>

            <div className="informacion-extra">
              <span className="nivel">Nivel: {curso.nivelExperiencia}</span>
              <span className="actualizacion">Última actualización: {new Date(curso.updatedAt).toLocaleDateString()}</span>
            </div>

            <div className="calificacion">
              <span className="estrellas">{"⭐".repeat(curso.estrellas)}</span>
              <span className="puntaje">{curso.estrellas}</span>
            </div>

            <div className="acciones">
              <button className="boton-comenzar">Comenzar el curso ...</button>
              <button className="boton-favorito">❤️</button>
            </div>

            <div className="tabs">
              <button className="tab activa">Temario</button>
              <button className="tab">Recursos</button>
              <button className="tab">Proyectos</button>
              <button className="tab">Evaluación</button>
            </div>

            <div className="modulos-grid">
              {curso.temario && curso.temario.split(',').map((modulo, index) => (
                <div key={index} className="modulo-item">
                  <strong>Módulo {index + 1}:</strong> {modulo.trim()}
                </div>
              ))}
            </div>
          </div>

          <div className="detalle-imagen">
            {/* <img
              className="curso-imagen"
              src={curso.foto || '/default-course.jpg'}
              alt={`Imagen de ${curso.nombre}`}
            /> */}
            {!curso.foto ? (
              <img
                className="curso-imagen"
                src="/curso.png"
                alt={`Imagen por defecto de ${curso.nombre}`}
              />
            ) : (
              <img
                className="curso-imagen"
                src={curso.foto}
                alt={`Imagen de ${curso.nombre}`}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetalleCurso;
