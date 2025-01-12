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
  const [proyectos, setProyectos] = useState([]); // comentado hasta quitar la constante de arriba
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  
  useEffect(() => {
    axios.get('http://localhost:8085/api/proyecto/all')
        .then(response => {
          console.log('Respuesta: ', response);
          setProyectos(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los usuarios:', error);
        });
}, []);

  const handleCardClick = (nombre) => {
    navigate(`/proyecto/${encodeURIComponent(nombre)}`);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = proyectos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(proyectos.length / itemsPerPage);
  
  return (
    <div>
      <Navbar />

      <div className="empleados-container">
        <Filter />

        <main className="cards-container">
          {currentItems.map((proyecto, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(proyecto.nombre)}
            >
              <img src={proyecto.foto} alt={proyecto.nombre} />
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
