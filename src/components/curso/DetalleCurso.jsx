import React from "react";
import "./estilos/estilo.css";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar.jsx";
import Footer from "../Footer.jsx";

const cursos = [
  {
    nombre: "Javier Martínez",
    descripcion: "Desarrollador web con experiencia en JavaScript y React.",
    nivel: "Experto",
    estrellas: 5,
    foto: "/path/to/javier.jpg",
    experiencia: "> 5 años",
    conocimientos: ["JavaScript", "React", "HTML", "CSS"],
    proyectos: ["Desarrollo de una aplicación de gestión de tareas"],
  },
];

const DetalleCurso = () => {
  const { nombre } = useParams();
  const curso = cursos.find((e) => e.nombre === decodeURIComponent(nombre));

  if (!curso) {
    return <p>Curso no encontrado</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="detalle-container">
        <img src={curso.foto} alt={curso.nombre} className="detalle-foto" />
        <h2>{curso.nombre}</h2>
        <p>{curso.descripcion}</p>
        <p>
          <strong>Experiencia:</strong> {curso.experiencia}
        </p>
        <p>
          <strong>Conocimientos:</strong> {curso.conocimientos.join(", ")}
        </p>
        <p>
          <strong>Proyectos destacados:</strong> {curso.proyectos.join(", ")}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetalleCurso;
