import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import proyectoServiceInstance from "../services/ProyectoService";
import Paginacion from "../utils/Paginacion";
import Filter from "../utils/Filter";
import axios from "axios";
import Footer from "../Footer";


const ListProyectos = () => {
  const navigate = useNavigate();
  const [proyectos, setProyectos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    nombre: '',
    // tipoFoto: '',
    foto: '',
    descripcion: '',
    nivelExperiencia: 'Principiante',
    requisitosTecnicos: '',
    dificultad: '',
    ultimaActualizacion: new Date(),
    destacado: 3
  });
  const [proyectoEditar, setProyectoEditar] = useState({
    nombre: '',
    // tipoFoto: '',
    foto: '',
    descripcion: '',
    nivelExperiencia: 'Principiante',
    requisitosTecnicos: '',
    dificultad: '',
    ultimaActualizacion: new Date(),
    destacado: 3
  });

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setNuevoProyecto({ ...nuevoProyecto, foto: reader.result });
  //     };
  //     // reader.readAsArrayBuffer(file);
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setNuevoProyecto({ ...nuevoProyecto, tipoFoto: reader.result.split(',')[0] });
  //       setNuevoProyecto({ ...nuevoProyecto, foto: reader.result.split(',')[1] });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  useEffect(() => {
    axios.get('http://localhost:8085/api/proyecto/all')
      .then(response => {
        console.log('Respuesta: ', response);

        // response.data.map(proyecto => {
        //   if (proyecto.foto) {
        //     const fotoBase64 = btoa(String.fromCharCode(...new Uint8Array(proyecto.foto)));
        //     proyecto.foto = `${proyecto.tipoFoto ? proyecto.tipoFoto : 'data:image/jpg'},${fotoBase64}`;
        //   }
        //   return proyecto;
        // });

        setProyectos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, []);


  // CREATE - Crear nuevo proyecto
  const crearProyecto = async (nuevoProyecto) => {

    console.log('Nuevo proyecto: ', nuevoProyecto);
    setLoading(true);
    setError(null);
    try {

      const response = await axios.post('http://localhost:8085/api/proyecto/new', nuevoProyecto, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setProyectos([...proyectos, response.data]);
      alert('Proyecto creado exitosamente');
    } catch (error) {
      setError('Error al crear el proyecto');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE - Actualizar proyecto
  const actualizarProyecto = async (id, datosActualizados) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`http://localhost:8085/api/proyecto/edit/${id}`, datosActualizados);
      const proyectoEditar = proyectos.map(proy =>
        proy.id === id ? response.data : proy
      );
      setProyectos(proyectoEditar);
      alert('Proyecto actualizado exitosamente');
    } catch (error) {
      setError('Error al actualizar el proyecto');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Eliminar proyecto
  const eliminarProyecto = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:8085/api/proyecto/del/${id}`);
      setProyectos(proyectos.filter(proy => proy.id !== id));
      alert('Proyecto eliminado exitosamente');
    } catch (error) {
      setError('Error al eliminar el proyecto');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/proyecto/${encodeURIComponent(id)}`);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = proyectos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(proyectos.length / itemsPerPage);

  const handleSubmitProyecto = (e) => {
    e.preventDefault();
    crearProyecto(nuevoProyecto);
    setShowForm(false);
    setNuevoProyecto({
      nombre: '',
      // tipoFoto: '',
      foto: '',
      descripcion: '',
      nivelExperiencia: 'Principiante',
      requisitosTecnicos: '',
      dificultad: '',
      ultimaActualizacion: new Date(),
      destacado: 3
    });
  };

  const handleUpdateProyecto = (e) => {
    e.preventDefault();
    actualizarProyecto(proyectoEditar.id, proyectoEditar);
    setShowForm(false);
    setProyectoEditar({
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

      <div className="proyectos-container">
        <Filter />

        <main className="cards-container">
          <div className="add-employee-section">
            <button
              className="add-employee-btn"
              onClick={() => setShowForm(true)}
            >
              Añadir Nuevo Proyecto
            </button>

            {showForm && (
              <div className="modal">
                <div className="modal-content">
                  <form onSubmit={handleSubmitProyecto}>
                    <input
                      type="text"
                      placeholder="Nombre Proyecto"
                      value={nuevoProyecto.nombre}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, nombre: e.target.value })}
                      required
                    />
                    <textarea
                      placeholder="Requisitos Técnicos"
                      value={nuevoProyecto.requisitosTecnicos}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, requisitosTecnicos: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Dificultad"
                      value={nuevoProyecto.dificultad}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, dificultad: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Descripción"
                      value={nuevoProyecto.descripcion}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })}
                    />
                    <select
                      value={nuevoProyecto.nivelExperiencia}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, nivelExperiencia: e.target.value })}
                    >
                      <option value="Principiante">Principiante</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Experto">Experto</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={nuevoProyecto.destacado}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, destacado: parseInt(e.target.value) })}
                    />
                    {/* <input
                      type="file"
                      accept="image/*"
                      placeholder="Carga una imagen"
                      onChange={handleFileChange}
                    /> */}
                    <input
                      type="text"
                      placeholder="URL de la foto"
                      value={nuevoProyecto.foto}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, foto: e.target.value })}
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
          {currentItems.map((proyecto, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(proyecto.id)}
            >
              {proyecto.foto && <img src={proyecto.foto} alt={proyecto.nombre} />}
              <h4>{proyecto.nombre}</h4>
              <p>{proyecto.descripcion}</p>
              <span className="badge">{proyecto.nivelExperiencia}</span>
              <div className="rating">
                {"★".repeat(proyecto.estrellas)}
                {"☆".repeat(5 - proyecto.estrellas)}
              </div>
              <button className="fav-button">♡</button>

              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={(e) => {/*
                    e.stopPropagation();
                    actualizarProyecto(proyecto.id, {
                      ...proyecto,
                      nombre: prompt('Nueva descripción:', proyecto.nombre) || proyecto.nombre
                    });*/
                    e.stopPropagation();
                    e.preventDefault();
                    setProyectoEditar(proyecto)
                    setMostrarFormulario(true)
                  }}
                >
                  Editar
                </button>

                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    eliminarProyecto(proyecto.id);
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
                <form onSubmit={handleUpdateProyecto}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={proyectoEditar.nombre}
                    onChange={(e) => setProyectoEditar({ ...proyectoEditar, nombre: e.target.value })}
                    required
                  />
                  <textarea
                    placeholder="Requisitos Técnicos"
                    value={proyectoEditar.requisitosTecnicos}
                    onChange={(e) => setProyectoEditar({ ...proyectoEditar, requisitosTecnicos: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Dificultad"
                    value={proyectoEditar.dificultad}
                    onChange={(e) => setProyectoEditar({ ...proyectoEditar, dificultad: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Descripción"
                    value={proyectoEditar.descripcion}
                    onChange={(e) => setProyectoEditar({ ...proyectoEditar, descripcion: parseInt(e.target.value) })}
                  />
                  <input
                    type="text"
                    placeholder="URL de la foto"
                    value={proyectoEditar.foto}
                    onChange={(e) => setProyectoEditar({ ...proyectoEditar, foto: e.target.value })}
                  />
                  <select
                    value={proyectoEditar.nivelExperiencia}
                    onChange={(e) => setProyectoEditar({ ...proyectoEditar, nivelExperiencia: e.target.value })}
                  >
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Experto">Experto</option>
                  </select>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={proyectoEditar.destacado}
                    onChange={(e) => setNuevoProyecto({ ...proyectoEditar, destacado: parseInt(e.target.value) })}
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
      {/* <Footer/> */}
    </div>
  );
};

export default ListProyectos;
