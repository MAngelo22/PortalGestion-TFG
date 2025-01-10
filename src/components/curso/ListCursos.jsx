import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import cursoServiceInstance from "../services/CursoService";
import Filter from "../utils/Filter";
import Paginacion from "../utils/Paginacion";
import axios from "axios";


const ListCursos = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]); // comentado hasta quitar la constante de arriba
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    axios.get('http://localhost:8085/api/curso/all')
        .then(response => {
          console.log('Respuesta: ', response);
          setCursos(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los cursos:', error);
        });
}, []);



  const handleCardClick = (nombre) => {
    navigate(`/curso/${encodeURIComponent(nombre)}`);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = cursos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(cursos.length / itemsPerPage);
  return (
    <div>
      <Navbar />

      <div className="empleados-container">
        <Filter />

        <main className="cards-container">
          {currentItems.map((curso, index) => (
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
            </div>
          ))}
        </main>

        <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ListCursos;
