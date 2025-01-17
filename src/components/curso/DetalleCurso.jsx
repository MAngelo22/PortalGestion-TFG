import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import "./DetalleCurso.css";
// import "../estilos/estilo.css";
import axios from 'axios';
import Navbar from '../NavBar';
import Footer from '../Footer';

const DetalleCurso = () => {
  const location = useLocation();
  const { curso } = location.state || {};
  // const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('Curso:', curso);
  // useEffect(() => {
  //   const obtenerCurso = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8085/api/curso/${id}`,
  //       { withCredentials: true });
  //       setCurso(response.data);
  //     } catch (error) {
  //       setError('Error al cargar los datos del curso');
  //       console.error('Error:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   obtenerCurso();
  // }, [id]);

  // if (loading) return <div>Cargando...</div>;
  // if (error) return <div>{error}</div>;
  // if (!curso) return <div>No se encontró el curso</div>;

  return (
    <>

      <Navbar />
      <div className="detalle-curso">
        <Link to="/cursos" className="back-link">
          ← Volver
        </Link>
        <h1 className="nombre">Curso Avanzado de React</h1>
        <ul className="temario-lista">
          <li><strong>Descripción:</strong> Curso completo de React desde componentes hasta arquitecturas avanzadas.</li>
          <li><strong>Duración:</strong> 40 horas de contenido práctico y teórico.</li>
          <li><strong>Nivel:</strong> Intermedio - Avanzado</li>
          <li><strong>Certificación:</strong> Certificado profesional al completar el curso.</li>
        </ul>

        <div className="informacion-extra">
          <span className="nivel">Nivel: Avanzado</span>
          <span className="actualizacion">Última actualización: 03/2024</span>
        </div>


        <div className="calificacion">
          <span className="estrellas">⭐⭐⭐⭐⭐</span>
          <span className="puntaje">4.8</span>
        </div>

        <div className="acciones">
          <button className="boton-comenzar">Comenzar el curso ...</button>
          <button className="boton-favorito">❤️</button>
        </div>

        {/* <div className="grupo-tabs-foto"> */}
        <div className="tabs">
          <button className="tab activa">Temario</button>
          <button className="tab">Recursos</button>
          <button className="tab">Proyectos</button>
          <button className="tab">Evaluación</button>
        </div>
        <img
          className="media"
          src="/curso.png"
          alt="Video curso"
        />
        {/* </div> */}

        <ul className="contenido">
          <li>
            <strong>Módulo 1:</strong></li> Fundamentos de React
          <li>
            <strong>Módulo 2:</strong></li> Hooks y Estado
          <li>
            <strong>Módulo 3:</strong></li> Gestión de Rutas
          <li>
            <strong>Módulo 4:</strong></li> Redux y Context
        </ul>
        {/* <div className="contenido">
          <div className="contenido-item">
            <strong>Analista de datos:</strong> &gt; 4 años
          </div>
          <div className="contenido-item">
            <strong>Python:</strong> Pandas - NumPy
          </div>
          <div className="contenido-item">
            <strong>SQL:</strong> Avanzado
          </div>
          <div className="contenido-item">
            <strong>Power BI:</strong> Avanzado
          </div>
        </div> */}

      </div>
      <Footer />
    </>
  );
};

export default DetalleCurso;
