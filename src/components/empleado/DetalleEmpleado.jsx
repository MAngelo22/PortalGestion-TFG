import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./DetalleEmpleado.css";
// import "../estilos/estilo.css";
import axios from 'axios';
import Navbar from '../NavBar';

const DetalleEmpleado = () => {
  const location = useLocation();
  const { empleado } = location.state || {};
  // const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('Empleado:', empleado);
  // useEffect(() => {
  //   const obtenerEmpleado = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8085/api/empleado/${id}`,
  //       { withCredentials: true });
  //       setEmpleado(response.data);
  //     } catch (error) {
  //       setError('Error al cargar los datos del empleado');
  //       console.error('Error:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   obtenerEmpleado();
  // }, [id]);

  // if (loading) return <div>Cargando...</div>;
  // if (error) return <div>{error}</div>;
  // if (!empleado) return <div>No se encontró el empleado</div>;

  return (
    <>

      <Navbar />
      <br />
      <br />
      <br />
      <div className="detalle-empleado">
        <h1 className="nombre">Ana Torres</h1>
        <ul className="perfil-lista">
          <li><strong>Perfil:</strong> Analista de datos con habilidades en Python y SQL.</li>
          <li><strong>Experiencia:</strong> Más de 4 años analizando datos para decisiones empresariales.</li>
          <li><strong>Conocimientos:</strong> Python (Pandas), SQL y visualización con Tableau.</li>
          <li><strong>Proyectos destacados:</strong> Implementación de un dashboard interactivo que permitió a la dirección monitorear KPIs clave en tiempo real.</li>
        </ul>

        <div className="informacion-extra">
          <span className="nivel">Nivel: avanzado</span>
          <span className="actualizacion">Última actualización: 10/2024</span>
        </div>

        <div className="calificacion">
          <span className="estrellas">⭐⭐⭐⭐⭐</span>
          <span className="puntaje">4.6</span>
        </div>

        <div className="acciones">
          <button className="boton-asignar">Asignar a proyecto ...</button>
          <button className="boton-favorito">❤️</button>
        </div>

        <div className="tabs">
          <button className="tab activa">Perfil</button>
          <button className="tab">Experiencia</button>
          <button className="tab">Conocimientos</button>
          <button className="tab">Proyectos</button>
        </div>

        <div className="contenido">
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
        </div>

        <img
          className="foto-perfil"
          src="https://via.placeholder.com/100"
          alt="Foto de Ana Torres"
        />
      </div>
    </>
  );
};

export default DetalleEmpleado;
