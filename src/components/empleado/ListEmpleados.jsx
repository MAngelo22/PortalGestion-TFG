import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar.jsx";
//import Footer from "../Footer.jsx";
import Paginacion from "../utils/Paginacion";
import axios from "axios";


const ListEmpleados = () => {
  const navigate = useNavigate();
  const [empleados, setEmpleados] = useState([]); // comentado hasta quitar la constante de arriba
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    axios.get('http://localhost:8085/api/empleado/all')
      .then(response => {
        console.log('Respuesta: ', response);
        setEmpleados(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los cursos:', error);
      });
  }, []);

  const handleCardClick = (nombre) => {
    navigate(`/empleado/${encodeURIComponent(nombre)}`);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = empleados.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(empleados.length / itemsPerPage);

  return (
    <div>
      <Navbar />

      <div className="empleados-container">
        <aside className="filters">
          <h3>Sector</h3>
          <label>
            <input type="checkbox" /> Banca (124)
          </label>
          <label>
            <input type="checkbox" /> Industria (378)
          </label>
          <h3>Experiencia</h3>
          <label>
            <input type="checkbox" /> Principiante (124)
          </label>
          <label>
            <input type="checkbox" /> Intermedio (318)
          </label>
          <label>
            <input type="checkbox" /> Experto (278)
          </label>
          <h3>Temática</h3>
          <label>
            <input type="checkbox" /> Desarrollo web (124)
          </label>
          <label>
            <input type="checkbox" /> JavaScript (378)
          </label>
          <label>
            <input type="checkbox" /> WordPress (278)
          </label>
        </aside>

        <main className="cards-container">
          {currentItems.map((empleado, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(empleado.nombre)}
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
            </div>
          ))}
        </main>


        <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />

        {/* </footer> */}
      </div>
      
    </div >
  );
};

export default ListEmpleados;
