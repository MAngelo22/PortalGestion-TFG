import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import cursoServiceInstance from "../services/CursoService";
import Filter from "../utils/Filter";
import Paginacion from "../utils/Paginacion";
import axios from "axios";


const ListCursos = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({
    nombre: '',
    temario: '',
    profesor: '',
    descripcion: '',
    nivelExperiencia: 'Principiante',
    metodologia: '',
    dificultad: '',
    destacado: false,
    foto: ''
  });
  const [cursoEditar, setCursoEditar] = useState({
    nombre: '',
    temario: '',
    profesor: '',
    descripcion: '',
    nivelExperiencia: 'Principiante',
    metodologia: '',
    dificultad: '',
    destacado: false,
    foto: ''
  });

  // READ - Obtener todos los cursos
  const obtenerCursos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8085/api/curso/all', 
      { withCredentials: true }
      );
      setCursos(response.data);
    } catch (error) {
      setError('Error al obtener los cursos');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCursos();
  }, []);

  // CREATE - Crear nuevo curso
  const crearCurso = async (nuevoCurso) => {

    console.log('Nuevo curso: ', nuevoCurso);
    setLoading(true);
    setError(null);
    try {

      const response = await axios.post('http://localhost:8085/api/curso/new', nuevoCurso,
      { withCredentials: true }
      );
      setCursos([...cursos, response.data]);
      alert('Curso creado exitosamente');
    } catch (error) {
      setError('Error al crear el curso');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE - Actualizar curso
  const actualizarCurso = async (id, datosActualizados) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`http://localhost:8085/api/curso/edit/${id}`, datosActualizados,
      { withCredentials: true });
      const cursoEditar = cursos.map(curs =>
        curs.id === id ? response.data : curs
      );
      setCursos(cursoEditar);
      alert('Curso actualizado exitosamente');
    } catch (error) {
      setError('Error al actualizar el curso');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Eliminar curso
  const eliminarCurso = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este curso?',
    { withCredentials: true })) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:8085/api/curso/del/${id}`,
      { withCredentials: true });
      setCursos(cursos.filter(emp => emp.id !== id));
      alert('Curso eliminado exitosamente');
    } catch (error) {
      setError('Error al eliminar el curso');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (nombre) => {
    navigate(`/curso/${encodeURIComponent(nombre)}`);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = cursos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(cursos.length / itemsPerPage);


  const handleSubmitCurso = (e) => {
    e.preventDefault();
    crearCurso(nuevoCurso);
    setShowForm(false);
    setNuevoCurso({
      nombre: '',
      temario: '',
      profesor: '',
      descripcion: '',
      nivelExperiencia: 'Principiante',
      metodologia: 3,
      dificultad: '',
      destacado: false,
      foto: ''
    });
  };

  const handleUpdateCurso = (e) => {
    e.preventDefault();
    console.log('Curso a actualizar: ', e);
    actualizarCurso(e.id, cursoEditar);
    setShowForm(false);
    setCursoEditar({
      nombre: '',
      temario: '',
      profesor: '',
      descripcion: '',
      nivelExperiencia: 'Principiante',
      metodologia: 3,
      dificultad: '',
      destacado: false,
      foto: ''
    });
  };

  return (
    <>
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

      <div className="body-container">
        <Filter />

        <main className="cards-container">
          <div className="add-employee-section">
            <button
              className="add-employee-btn"
              onClick={() => setShowForm(true)}
            >
              Añadir Nuevo Curso
            </button>

            {showForm && (
              <div className="modal">
                <div className="modal-content">
                  <form onSubmit={handleSubmitCurso}>
                    <input
                      type="text"
                      placeholder="Nombre Curso"
                      value={nuevoCurso.nombre}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, nombre: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Temario"
                      value={nuevoCurso.temario}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, temario: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Profesor"
                      value={nuevoCurso.profesor}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, profesor: e.target.value })}
                      required
                    />
                    <textarea
                      placeholder="Descripción"
                      value={nuevoCurso.descripcion}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, descripcion: e.target.value })}
                    />
                    <select
                      value={nuevoCurso.nivelExperiencia}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, nivelExperiencia: e.target.value })}
                    >
                      <option value="Principiante">Principiante</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Experto">Experto</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={nuevoCurso.estrellas}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, estrellas: parseInt(e.target.value) })}
                    />
                    <input
                      type="text"
                      placeholder="Metodologia"
                      value={nuevoCurso.metodologia}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, metodologia: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Dificultad"
                      value={nuevoCurso.dificultad}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, dificultad: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="URL de la foto"
                      value={nuevoCurso.foto}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, foto: e.target.value })}
                    />
                    <input
                      type="checkbox"
                      placeholder="Destacado"
                      value={nuevoCurso.destacado}
                      onChange={(e) => setNuevoCurso({ ...nuevoCurso, destacado: e.target.value })}
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
          {currentItems && currentItems.map((curso, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(curso.nombre)}
            >
              <img src={curso.foto} alt={curso.nombre} />
              <h4>{curso.nombre}</h4>
              <p>{curso.descripcion}</p>
              <span className="badge">{curso.nivelExperiencia}</span>
              <div className="rating">
                {"★".repeat(curso.estrellas)}
                {"☆".repeat(5 - curso.estrellas)}
              </div>
              <button className="fav-button">♡</button>
              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setCursoEditar(curso)
                    setMostrarFormulario(true)
                  }}
                >
                  Editar
                </button>

                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    eliminarCurso(curso.id);
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
                <form onSubmit={handleUpdateCurso}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={cursoEditar.nombre}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, nombre: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Temario"
                    value={cursoEditar.temario}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, temario: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Profesor"
                    value={cursoEditar.profesor}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, profesor: e.target.value })}
                    required
                  />
                  <textarea
                    placeholder="Descripción"
                    value={cursoEditar.descripcion}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, descripcion: e.target.value })}
                  />
                  <select
                    value={cursoEditar.nivelExperiencia}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, nivelExperiencia: e.target.value })}
                  >
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Experto">Experto</option>
                  </select>
                  {/* <input
                      type="number"
                      min="1"
                      max="5"
                      value={cursoEditar.estrellas}
                      onChange={(e) => setCursoEditar({ ...cursoEditar, estrellas: parseInt(e.target.value) })}
                    /> */}
                  <input
                    type="text"
                    placeholder="Metodologia"
                    value={cursoEditar.metodologia}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, metodologia: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Dificultad"
                    value={cursoEditar.dificultad}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, dificultad: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="URL de la foto"
                    value={cursoEditar.foto}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, foto: e.target.value })}
                  />
                  <input
                    type="checkbox"
                    placeholder="Destacado"
                    value={cursoEditar.destacado}
                    onChange={(e) => setCursoEditar({ ...cursoEditar, destacado: e.target.value })}
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
      </div>
      <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
      {/* <Footer /> */}
    </>
  );
};

export default ListCursos;
