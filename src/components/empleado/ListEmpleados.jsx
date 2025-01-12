import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar.jsx";
import "./ListEmpleados.css";
import Paginacion from "../utils/Paginacion";
import axios from "axios";
import Filter from "../utils/Filter.jsx";

const ListEmpleados = () => {
  const navigate = useNavigate();
  const [empleados, setEmpleados] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const itemsPerPage = 8;
  const [showForm, setShowForm] = useState(false);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    descripcion: '',
    nivel: 'Principiante',
    estrellas: 3,
    foto: ''
  });
  const [empleadoEditar, setEmpleadoEditar] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    descripcion: '',
    nivel: 'Principiante',
    estrellas: 3,
    foto: ''
  });

  // READ - Obtener todos los empleados
  const obtenerEmpleados = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8085/api/empleado/all');
      setEmpleados(response.data);
    } catch (error) {
      setError('Error al obtener los empleados');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  // CREATE - Crear nuevo empleado
  const crearEmpleado = async (nuevoEmpleado) => {

    console.log('Nuevo empleado: ', nuevoEmpleado);
    setLoading(true);
    setError(null);
    try {
      // const empleadoData = {
      //   nombre: nuevoEmpleado.nombre,
      //   apellidos: nuevoEmpleado.apellidos,
      //   email: nuevoEmpleado.email,
      //   descripcion: nuevoEmpleado.descripcion,
      //   nivel: nuevoEmpleado.nivel,
      //   estrellas: nuevoEmpleado.estrellas,
      //   foto: nuevoEmpleado.foto
      // };

      // console.log('Empleado data: ', empleadoData);

      const response = await axios.post('http://localhost:8085/api/empleado/new', nuevoEmpleado);
      setEmpleados([...empleados, response.data]);
      alert('Empleado creado exitosamente');
    } catch (error) {
      setError('Error al crear el empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE - Actualizar empleado
  const actualizarEmpleado = async (id, datosActualizados) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`http://localhost:8085/api/empleado/edit/${id}`, datosActualizados);
      const empleadoEditar = empleados.map(emp =>
        emp.id === id ? response.data : emp
      );
      setEmpleados(empleadoEditar);
      alert('Empleado actualizado exitosamente');
    } catch (error) {
      setError('Error al actualizar el empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Eliminar empleado
  const eliminarEmpleado = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:8085/api/empleado/del/${id}`);
      setEmpleados(empleados.filter(emp => emp.id !== id));
      alert('Empleado eliminado exitosamente');
    } catch (error) {
      setError('Error al eliminar el empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/empleado/${id}`);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = empleados.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(empleados.length / itemsPerPage);

  const handleSubmitEmpleado = (e) => {
    e.preventDefault();
    crearEmpleado(nuevoEmpleado);
    setShowForm(false);
    setNuevoEmpleado({
      nombre: '',
      apellidos: '',
      email: '',
      descripcion: '',
      nivel: 'Principiante',
      estrellas: 3,
      foto: ''
    });
  };

  const handleUpdateEmpleado = (e) => {
    e.preventDefault();
    actualizarEmpleado(empleadoEditar.id, empleadoEditar);
    setShowForm(false);
    setEmpleadoEditar({
      nombre: '',
      apellidos: '',
      email: '',
      descripcion: '',
      nivel: '',
      estrellas: 0,
      foto: ''
    });
    setMostrarFormulario(false)
  };

  return (
    <div>
      <Navbar />

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">Cargando...</div>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="empleados-container">
        <Filter />

        <main className="cards-container">
          <div className="add-employee-section">
            <button
              className="add-employee-btn"
              onClick={() => setShowForm(true)}
            >
              Añadir Nuevo Empleado
            </button>

            {showForm && (
              <div className="modal">
                <div className="modal-content">
                  <form onSubmit={handleSubmitEmpleado}>
                    <input
                      type="text"
                      placeholder="Nombre Empleado"
                      value={nuevoEmpleado.nombre}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, nombre: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Apellidos"
                      value={nuevoEmpleado.apellidos}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, apellidos: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      value={nuevoEmpleado.email}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, email: e.target.value })}
                      required
                    />
                    <textarea
                      placeholder="Descripción"
                      value={nuevoEmpleado.descripcion}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, descripcion: e.target.value })}
                    />
                    <select
                      value={nuevoEmpleado.nivel}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, nivel: e.target.value })}
                    >
                      <option value="Principiante">Principiante</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Experto">Experto</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={nuevoEmpleado.estrellas}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, estrellas: parseInt(e.target.value) })}
                    />
                    <input
                      type="text"
                      placeholder="URL de la foto"
                      value={nuevoEmpleado.foto}
                      onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, foto: e.target.value })}
                    />
                    <div className="form-buttons">
                      <button type="submit">Guardar</button>
                      <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          {currentItems.map((empleado, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(empleado.id)}
            >
              <img src={empleado.foto} alt={empleado.nombre} />
              <h4>{empleado.nombre}</h4>
              <p>{empleado.descripcion}</p>
              <span className="badge">{empleado.nivel}</span>
              <div className="rating">
                {"★".repeat(empleado.estrellas)}
                {"☆".repeat(5 - empleado.estrellas)}
              </div>
              <button className="fav-button">♡</button>

              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={(e) => {/*
                    e.stopPropagation();
                    actualizarEmpleado(empleado.id, {
                      ...empleado,
                      nombre: prompt('Nueva descripción:', empleado.nombre) || empleado.nombre
                    });*/
                    e.stopPropagation();
                    e.preventDefault();
                    setEmpleadoEditar(empleado)
                    setMostrarFormulario(true)
                  }}
                >
                  Editar
                </button>

                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    eliminarEmpleado(empleado.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
                        {mostrarFormulario && (
              <div className="modal">
                <div className="modal-content">
                  <form onSubmit={handleUpdateEmpleado}>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={empleadoEditar.nombre}
                      onChange={(e) => setEmpleadoEditar({ ...empleadoEditar, nombre: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Apellidos"
                      value={empleadoEditar.apellidos}
                      onChange={(e) => setEmpleadoEditar({ ...empleadoEditar, apellidos: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      value={empleadoEditar.email}
                      onChange={(e) => setEmpleadoEditar({ ...empleadoEditar, email: e.target.value })}
                      required
                    />
                    <select
                      value={empleadoEditar.nivel}
                      onChange={(e) => setEmpleadoEditar({ ...empleadoEditar, nivel: e.target.value })}
                    >
                      <option value="Principiante">Principiante</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Experto">Experto</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={empleadoEditar.estrellas}
                      onChange={(e) => setEmpleadoEditar({ ...empleadoEditar, estrellas: parseInt(e.target.value) })}
                    />
                    <input
                      type="text"
                      placeholder="URL de la foto"
                      value={empleadoEditar.foto}
                      onChange={(e) => setEmpleadoEditar({ ...empleadoEditar, foto: e.target.value })}
                    />
                    <div className="form-buttons">
                      <button type="submit">Guardar</button>
                      <button type="button" onClick={() => setMostrarFormulario(false)}>Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
        </main>

        <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
    </div>
  );
};

export default ListEmpleados;
