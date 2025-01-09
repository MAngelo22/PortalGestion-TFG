import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import proyectoServiceInstance from "../services/ProyectoService";
import Paginacion from "../utils/Paginacion";
import Filter from "../utils/Filter";

// const proyectos = [
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

const ListProyectos = () => {
  const navigate = useNavigate();
  // const [proyectos, setProyectos] = useState([]); // comentado hasta quitar la constante de arriba
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const proyectos = [
    {
      nombre: "Proyecto Alpha",
      descripcion: "Desarrollo de una aplicación web para gestión de tareas.",
      nivel: "Experto",
      estrellas: 5,
      foto: "/path/to/alpha.jpg",
    },
    {
      nombre: "Proyecto Beta",
      descripcion: "Análisis de datos de ventas para una empresa minorista.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/beta.jpg",
    },
    {
      nombre: "Proyecto Gamma",
      descripcion: "Implementación de un sistema de inteligencia artificial.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/gamma.jpg",
    },
    {
      nombre: "Proyecto Delta",
      descripcion: "Desarrollo de una plataforma de comercio electrónico.",
      nivel: "Experto",
      estrellas: 5,
      foto: "/path/to/delta.jpg",
    },
    {
      nombre: "Proyecto Epsilon",
      descripcion: "Creación de un sistema de gestión de inventarios.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/epsilon.jpg",
    },
    {
      nombre: "Proyecto Zeta",
      descripcion: "Desarrollo de una aplicación móvil para fitness.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/zeta.jpg",
    },
    {
      nombre: "Proyecto Eta",
      descripcion: "Implementación de un CRM para una empresa de servicios.",
      nivel: "Experto",
      estrellas: 5,
      foto: "/path/to/eta.jpg",
    },
    {
      nombre: "Proyecto Theta",
      descripcion: "Análisis de datos financieros para una institución bancaria.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/theta.jpg",
    },
    {
      nombre: "Proyecto Iota",
      descripcion: "Desarrollo de un sistema de reservas para un hotel.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/iota.jpg",
    },
    {
      nombre: "Proyecto Kappa",
      descripcion: "Creación de una plataforma de aprendizaje en línea.",
      nivel: "Experto",
      estrellas: 5,
      foto: "/path/to/kappa.jpg",
    },
    {
      nombre: "Proyecto Lambda",
      descripcion: "Desarrollo de una aplicación de seguimiento de salud.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/lambda.jpg",
    },
    {
      nombre: "Proyecto Mu",
      descripcion: "Implementación de un sistema de gestión de recursos humanos.",
      nivel: "Experto",
      estrellas: 4,
      foto: "/path/to/mu.jpg",
    },
  ];

  // useEffect(() => {
  //   const fetchproyectos = async () => {
  //     try {
  //       const data = await proyectoServiceInstance.obtenerProyectos();
  //       setProyectos(data);
  //     } catch (error) {
  //       console.error("Error fetching proyectos:", error);
  //     }
  //   };

  //   fetchproyectos();
  // }, []);

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
      {/* <Footer /> */}
    </div>
  );
};

export default ListProyectos;
