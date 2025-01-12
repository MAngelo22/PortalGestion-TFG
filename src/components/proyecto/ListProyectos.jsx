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
  const [showForm, setShowForm] = useState(false);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    nombre: '',
    tipoFoto: '',
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNuevoProyecto({ ...nuevoProyecto, tipoFoto: reader.result.split(',')[0] });
        setNuevoProyecto({ ...nuevoProyecto, foto: reader.result.split(',')[1] });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8085/api/proyecto/all')
      .then(response => {
        console.log('Respuesta: ', response);

        response.data.map(proyecto => {
          if (proyecto.foto) {
            const fotoBase64 = Buffer.from(proyecto.foto).toString('base64');
            proyecto.foto = `data:${proyecto.tipoFoto},${fotoBase64}`;
          }
          return proyecto;
        });

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
      // const proyectoData = {
      //   nombre: nuevoProyecto.nombre,
      //   apellidos: nuevoProyecto.apellidos,
      //   email: nuevoProyecto.email,
      //   descripcion: nuevoProyecto.descripcion,
      //   nivel: nuevoProyecto.nivel,
      //   estrellas: nuevoProyecto.estrellas,
      //   foto: nuevoProyecto.foto
      // };

      // console.log('Proyecto data: ', proyectoData);

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

  const handleCardClick = (nombre) => {
    navigate(`/proyecto/${encodeURIComponent(nombre)}`);
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
      foto: '',
      descripcion: '',
      nivelExperiencia: 'Principiante',
      requisitosTecnicos: '',
      dificultad: '',
      ultimaActualizacion: new Date(),
      destacado: 3
    });
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
                      type="number"
                      min="1"
                      max="5"
                      value={nuevoProyecto.ultimaActualizacion}
                      onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, ultimaActualizacion: parseInt(e.target.value) })}
                    /> */}
                    <input
                      type="file"
                      accept="image/*"
                      placeholder="Carga una imagen"
                      onChange={handleFileChange}
                    // value={nuevoProyecto.foto}
                    // onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, foto: e.target.value })}
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
              key={proyecto.id}
              className="card"
              onClick={() => handleCardClick(proyecto.nombre)}
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
            </div>
          ))}
        </main>

        <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
      <Footer/>
    </div>
  );
};

export default ListProyectos;
