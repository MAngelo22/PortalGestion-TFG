import React from "react";
import "./estilos/estilo.css";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar.jsx"; 
import Footer from "../Footer.jsx";

const empleados = [
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
  {
    nombre: "Ana Torres",
    descripcion: "Analista de datos con habilidades en Python y SQL.",
    nivel: "Experto",
    estrellas: 4,
    foto: "/path/to/ana.jpg",
    experiencia: "> 4 años",
    conocimientos: ["Python", "SQL", "Power BI", "Pandas"],
    proyectos: ["Implementación de un dashboard interactivo"],
  },
  {
    nombre: "Lucas Gómez",
    descripcion:
      "Ingeniero de software especializado en inteligencia artificial.",
    nivel: "Experto",
    estrellas: 4,
    foto: "/path/to/lucas.jpg",
    experiencia: "> 6 años",
    conocimientos: ["Machine Learning", "Python", "TensorFlow"],
    proyectos: ["Sistema de recomendación para e-commerce"],
  },
];

const DetalleEmpleado = () => {
  const { nombre } = useParams();
  const empleado = empleados.find((e) => e.nombre === decodeURIComponent(nombre));

  if (!empleado) {
    return <p>Empleado no encontrado</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="detalle-container">
        <img src={empleado.foto} alt={empleado.nombre} className="detalle-foto" />
        <h2>{empleado.nombre}</h2>
        <p>{empleado.descripcion}</p>
        <p><strong>Experiencia:</strong> {empleado.experiencia}</p>
        <p><strong>Conocimientos:</strong> {empleado.conocimientos.join(", ")}</p>
        <p><strong>Proyectos destacados:</strong> {empleado.proyectos.join(", ")}</p>
      </div>
      <Footer />
    </div>
  );
};

export default DetalleEmpleado;
