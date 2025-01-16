import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
    <div>
      <Navbar />
      {empleado &&
        <div style={{ justifyContent: 'center', marginTop: '10%', marginLeft: '10%' }} className="detalle-empleado">
          <img src={empleado.foto} alt={empleado.nombre} />
          <h2>{empleado.nombre}</h2>
          <p>{empleado.descripcion}</p>
          <div className="nivel">Nivel: {empleado.nivel}</div>
          <div className="rating">
            {"★".repeat(empleado.estrellas)}
            {"☆".repeat(5 - empleado.estrellas)}
          </div>
        </div>
        // || <div>No se encontró el empleado</div>
      }
    </div>
  );
};

export default DetalleEmpleado;
