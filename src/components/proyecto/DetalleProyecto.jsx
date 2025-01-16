import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NavBar';

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
    <div>
      <Navbar />
      {proyecto &&
        <div className="detalle-proyecto" style={{ justifyContent: 'center', marginTop: '10%', marginLeft: '10%' }}>
          <img src={proyecto.foto} alt={proyecto.nombre} />
          <h2>{proyecto.nombre}</h2>
          <p>{proyecto.descripcion}</p>
          <div className="nivel">Nivel: {proyecto.nivel}</div>
          <div className="rating">
            {"★".repeat(proyecto.estrellas)}
            {"☆".repeat(5 - proyecto.estrellas)}
          </div>
        </div>
        // || <div>No se encontró el proyecto</div>
      }
    </div>
  );
};

export default DetalleProyecto;
