import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NavBar';

const DetalleEmpleado = () => {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:8085/api/empleado/${id}`,
        { withCredentials: true });
        setEmpleado(response.data);
      } catch (error) {
        setError('Error al cargar los datos del empleado');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerEmpleado();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!empleado) return <div>No se encontró el empleado</div>;

  return (
    <div>
      <Navbar />
      <div  style={{ justifyContent: 'center', marginTop: '10%', marginLeft: '10%' }} className="detalle-empleado">
        <img src={empleado.foto} alt={empleado.nombre} />
        <h2>{empleado.nombre}</h2>
        <p>{empleado.descripcion}</p>
        <div className="nivel">Nivel: {empleado.nivel}</div>
        <div className="rating">
          {"★".repeat(empleado.estrellas)}
          {"☆".repeat(5 - empleado.estrellas)}
        </div>
        {/* Añade más detalles según tu modelo de datos */}
      </div>
    </div>
  );
};

export default DetalleEmpleado;
