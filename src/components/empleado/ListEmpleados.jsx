import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar.jsx";
import "./ListEmpleados.css";
import Paginacion from "../utils/Paginacion";
import axios from "axios";
import Filter from "../utils/Filter.jsx";
import Footer from "../Footer";
import MensajeAlerta from "../utils/MensajeAlerta.jsx";

const ListEmpleados = () => {
  const navigate = useNavigate();

  // 1. Estado inicial
  const empleadoVacio = {
    id: null,
    nombre: '',
    apellidos: '',
    email: '',
    perfil: '',
    nivel: 'Principiante',
    estrellas: 3,
    foto: ''
  };

  // 2. Estados
  const [empleados, setEmpleados] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [empleadoEditar, setEmpleadoEditar] = useState(empleadoVacio);
  const [isEditing, setIsEditing] = useState(false);
  const itemsPerPage = 6;

  // 3. Obtener empleados
  const obtenerEmpleados = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8085/api/empleado/all',
        { withCredentials: true });
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

  // 4. Crear empleado
  const crearEmpleado = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8085/api/empleado/new',
        empleadoEditar,
        { withCredentials: true }
      );
      setEmpleados([...empleados, response.data]);
      setShowForm(false);
      setEmpleadoEditar(empleadoVacio);
      alert('Empleado creado exitosamente');
    } catch (error) {
      setError('Error al crear el empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 5. Actualizar empleado
  const handleUpdateEmpleado = async (e) => {
    e.preventDefault();
    if (!empleadoEditar.id) {
      setError('Error: No hay ID de empleado');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:8085/api/empleado/edit/${empleadoEditar.id}`,
        empleadoEditar,
        { withCredentials: true }
      );

      setEmpleados(empleados.map(emp =>
        emp.id === empleadoEditar.id ? response.data : emp
      ));

      setShowForm(false);
      setEmpleadoEditar(empleadoVacio);
      setIsEditing(false);
      alert('Empleado actualizado exitosamente');
    } catch (error) {
      setError('Error al actualizar el empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 6. Eliminar empleado
  const eliminarEmpleado = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      return;
    }

    setLoading(true);
    try {
      await axios.delete(`http://localhost:8085/api/empleado/del/${id}`,
        { withCredentials: true });
      setEmpleados(empleados.filter(emp => emp.id !== id));
      alert('Empleado eliminado exitosamente');
    } catch (error) {
      setError('Error al eliminar el empleado');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 7. Funciones auxiliares
  const handleEdit = (empleado) => {
    setIsEditing(true);
    setEmpleadoEditar({ ...empleado });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdateEmpleado(e);
    } else {
      crearEmpleado(e);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEmpleadoEditar(empleadoVacio);
    setIsEditing(false);
  };

  // 8. Paginación
  const offset = currentPage * itemsPerPage;
  const currentItems = empleados.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(empleados.length / itemsPerPage);

  // Añadir esta función para manejar el cambio de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Navbar />
      <Filter />

      <div className="body-container">
        {loading && <div className="loading-overlay">Cargando...</div>}
        {error && <div className="error-message">{error}</div>}

        <main className="cards-container">
          <div className="add-employee-section">
            <button
            className="add-employee-btn"
              style={{
                backgroundColor: '#2E7D32',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onClick={() => {
                setIsEditing(false);
                setEmpleadoEditar(empleadoVacio);
                setShowForm(true);
              }}
            >
              <i className="fas fa-plus"></i> Añadir Nuevo Empleado
            </button>
          </div>

          {currentItems.map((empleado) => (
            <div
              key={empleado.id}
              className="card"
              onClick={() => navigate(`/empleados/${empleado.id}`, { state: { empleado } })}
            >
              {!empleado.foto ? (
                <img
                  className="empleado-imagen"
                  src="/default-empleado.png"
                  alt={`Imagen por defecto de ${empleado.nombre}`}
                />
              ) : (
                <img
                  className="empleado-imagen"
                  src={empleado.foto}
                  alt={empleado.nombre}
                />
              )}
              <h4>{empleado.nombre}</h4>
              <p>{empleado.perfil}</p>
              <span className="badge">{empleado.nivel}</span>
              <div className="rating">
                {"★".repeat(empleado.estrellas)}
                {"☆".repeat(5 - empleado.estrellas)}
              </div>
              <div className="card-actions">
                <button
                Eliminar
                  style={{
                    backgroundColor: '#1565C0',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    transition: 'all 0.3s ease',
                    flex: 1
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(empleado);
                  }}
                >
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button
                className="delete-btn"
                  style={{
                    backgroundColor: '#C62828',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    transition: 'all 0.3s ease',
                    flex: 1
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    eliminarEmpleado(empleado.id);
                  }}
                >
                  <i className="fas fa-trash"></i> Eliminar
                </button>
              </div>
            </div>
          ))}

          {showForm && (
            <div className="modal">
              <div className="modal-content">
                <h2>{isEditing ? 'Editar Empleado' : 'Crear Empleado'}</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={empleadoEditar.nombre}
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      nombre: e.target.value
                    })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Apellidos"
                    value={empleadoEditar.apellidos}
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      apellidos: e.target.value
                    })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={empleadoEditar.email}
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      email: e.target.value
                    })}
                    required
                  />
                  <textarea
                    placeholder="Descripción"
                    value={empleadoEditar.perfil}
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      perfil: e.target.value
                    })}
                  />
                  <select
                    value={empleadoEditar.nivel}
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      nivel: e.target.value
                    })}
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
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      estrellas: parseInt(e.target.value)
                    })}
                  />
                  <input
                    type="text"
                    placeholder="URL de la foto"
                    value={empleadoEditar.foto}
                    onChange={(e) => setEmpleadoEditar({
                      ...empleadoEditar,
                      foto: e.target.value
                    })}
                  />
                  <div className="form-buttons">
                    <button type="submit">
                      {isEditing ? 'Actualizar' : 'Crear'}
                    </button>
                    <button type="button" onClick={handleCloseForm}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
      <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
      <Footer />
    </>
  );
};

export default ListEmpleados;
