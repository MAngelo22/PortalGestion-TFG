import { useLocation } from "react-router-dom";
import "../estilos/estilo.css";
import { useState } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const cursos = [
  {
    id: "curso1",
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
  // const { nombre } = useParams();
  // const curso = cursos.find((e) => e.id === decodeURIComponent(id));
  const location = useLocation();
  const { curso } = location.state || {};
  // const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!curso) {
    return <p>Curso no encontrado</p>;
  }

  return (
    <div>
      <Navbar />
      {curso && (
        <div
          className="detalle-container"
          style={{
            justifyContent: "center",
            marginTop: "10%",
            marginLeft: "10%",
          }}
        >
          <img src={curso.foto} alt={curso.nombre} className="detalle-foto" />
          <h2>{curso.nombre}</h2>
          <p>{curso.descripcion}</p>
          <p>
            <strong>Experiencia:</strong> {curso.experiencia}
          </p>
          <p>
            <strong>Conocimientos:</strong> {curso.conocimientos?.join(", ")}
          </p>
          <p>
            <strong>Proyectos destacados:</strong> {curso.proyectos?.join(", ")}
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DetalleCurso;
