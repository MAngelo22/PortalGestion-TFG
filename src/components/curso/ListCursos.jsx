import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import cursoServiceInstance from "../services/CursoService";
import Filter from "../utils/Filter";
import Paginacion from "../utils/Paginacion";

// const cursos = [
//   {
//     nombre: "Javier Martínez",
//     descripcion: "Desarrollador web con experiencia en JavaScript y React.",
//     nivel: "Experto",
//     estrellas: 5,
//     foto: "/path/to/javier.jpg",
//   },
//   {
//     nombre: "Ana Torres",
//     descripcion: "Analista de datos con habilidades en Python y SQL.",
//     nivel: "Experto",
//     estrellas: 4,
//     foto: "/path/to/ana.jpg",
//   },
//   {
//     nombre: "Lucas Gómez",
//     descripcion:
//       "Ingeniero de software especializado en inteligencia artificial.",
//     nivel: "Experto",
//     estrellas: 4,
//     foto: "/path/to/lucas.jpg",
//   },
// ];

const ListCursos = () => {
  const navigate = useNavigate();
  // const [cursos, setCursos] = useState([]); // comentado hasta quitar la constante de arriba
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // const cursos = [
  //   {
  //     nombre: "Curso de JavaScript Avanzado",
  //     descripcion: "Aprende técnicas avanzadas de JavaScript.",
  //     nivel: "Experto",
  //     estrellas: 5,
  //     foto: "/path/to/javascript.jpg",
  //   },
  //   {
  //     nombre: "Curso de React",
  //     descripcion: "Domina el desarrollo de aplicaciones con React.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/react.jpg",
  //   },
  //   {
  //     nombre: "Curso de Liderazgo",
  //     descripcion: "Desarrolla habilidades de liderazgo efectivas.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/liderazgo.jpg",
  //   },
  //   {
  //     nombre: "Curso de Trabajo en Equipo",
  //     descripcion: "Mejora la colaboración y el trabajo en equipo.",
  //     nivel: "Experto",
  //     estrellas: 5,
  //     foto: "/path/to/trabajo_en_equipo.jpg",
  //   },
  //   {
  //     nombre: "Curso de Python para Data Science",
  //     descripcion: "Aprende Python enfocado en Data Science.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/python.jpg",
  //   },
  //   {
  //     nombre: "Curso de SQL",
  //     descripcion: "Domina el manejo de bases de datos con SQL.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/sql.jpg",
  //   },
  //   {
  //     nombre: "Curso de Inteligencia Artificial",
  //     descripcion: "Introducción a la inteligencia artificial.",
  //     nivel: "Experto",
  //     estrellas: 5,
  //     foto: "/path/to/ia.jpg",
  //   },
  //   {
  //     nombre: "Curso de Machine Learning",
  //     descripcion: "Aprende los fundamentos del Machine Learning.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/ml.jpg",
  //   },
  //   {
  //     nombre: "Curso de Desarrollo Web",
  //     descripcion: "Crea sitios web modernos y responsivos.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/web.jpg",
  //   },
  //   {
  //     nombre: "Curso de UX/UI",
  //     descripcion: "Diseña experiencias de usuario efectivas.",
  //     nivel: "Experto",
  //     estrellas: 5,
  //     foto: "/path/to/uxui.jpg",
  //   },
  //   {
  //     nombre: "Curso de Gestión de Proyectos",
  //     descripcion: "Aprende a gestionar proyectos eficientemente.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/gestion.jpg",
  //   },
  //   {
  //     nombre: "Curso de Seguridad Informática",
  //     descripcion: "Protege sistemas y datos de amenazas.",
  //     nivel: "Experto",
  //     estrellas: 4,
  //     foto: "/path/to/seguridad.jpg",
  //   },
  // ];

  // useEffect(() => {
  //   const fetchCursos = async () => {
  //     try {
  //       const data = await cursoServiceInstance.obtenerCursos();
  //       setCursos(data);
  //     } catch (error) {
  //       console.error("Error fetching cursos:", error);
  //     }
  //   };

  //   fetchCursos();
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:8085/api/curso/all')
        .then(response => {
          console.log('Respuesta: ', response);
          setProyectos(response.data);
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
