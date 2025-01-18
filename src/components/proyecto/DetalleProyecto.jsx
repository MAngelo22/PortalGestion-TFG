import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import "./DetalleProyecto.css";
// import "../estilos/estilo.css";
import axios from 'axios';
import Navbar from '../NavBar';
import Footer from '../Footer';

const DetalleProyecto = () => {
  const location = useLocation();
  const { proyecto } = location.state || {};
  // const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('Proyecto:', proyecto);
  // useEffect(() => {
  //   const obtenerProyecto = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8085/api/proyecto/${id}`,
  //       { withCredentials: true });
  //       setProyecto(response.data);
  //     } catch (error) {
  //       setError('Error al cargar los datos del proyecto');
  //       console.error('Error:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   obtenerProyecto();
  // }, [id]);

  // if (loading) return <div>Cargando...</div>;
  // if (error) return <div>{error}</div>;
  // if (!proyecto) return <div>No se encontró el proyecto</div>;

  return (
    <>

      <Navbar />
      <div className="detalle-proyecto">
        <Link to="/proyectos" className="back-link">
          ← Volver
        </Link>
        <h1 className="nombre">Proyecto Banca Digital</h1>
        <ul className="perfil-lista">
          <li><strong>Descripción:</strong> Desarrollo de una plataforma bancaria digital para gestión de cuentas y transacciones.</li>
          <li><strong>Alcance:</strong> Sistema completo de banca online con funcionalidades de pagos, transferencias y gestión de usuarios.</li>
          <li><strong>Tecnologías:</strong> React, Node.js, MongoDB, AWS</li>
          <li><strong>Logros destacados:</strong> Implementación de autenticación biométrica y sistema de pagos instantáneos.</li>
        </ul>

        <div className="informacion-extra">
          <span className="nivel">Nivel: Avanzado</span>
          <span className="actualizacion">Última actualización: 03/2024</span>
        </div>

        <div className="calificacion">
          <span className="estrellas">⭐⭐⭐⭐</span>
          <span className="puntaje">4.2</span>
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
        <img
          className="media"
          src="/proyectoBanca.png"
          alt="Proyecto Banca"
        />

        <div className="contenido">
          <div className="contenido-item">
            <strong>Backend:</strong> Node.js - Express
          </div>
          <div className="contenido-item">
            <strong>Frontend:</strong> React - Redux
          </div>
          <div className="contenido-item">
            <strong>Base de datos:</strong> MongoDB
          </div>
          <div className="contenido-item">
            <strong>Cloud:</strong> AWS
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default DetalleProyecto;
