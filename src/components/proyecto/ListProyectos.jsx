import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar.js"; 
import Footer from "../Footer.js";

const proyectos = [
  {
    nombre: "Javier Martínez",
    descripcion: "Desarrollador web con experiencia en JavaScript y React.",
    nivel: "Experto",
    estrellas: 5,
    foto: "/path/to/javier.jpg",
  },
  {
    nombre: "Ana Torres",
    descripcion: "Analista de datos con habilidades en Python y SQL.",
    nivel: "Experto",
    estrellas: 4,
    foto: "/path/to/ana.jpg",
  },
  {
    nombre: "Lucas Gómez",
    descripcion:
      "Ingeniero de software especializado en inteligencia artificial.",
    nivel: "Experto",
    estrellas: 4,
    foto: "/path/to/lucas.jpg",
  },
];

const ListProyectos = () => {
  const navigate = useNavigate();

  // const [proyectos, setProyectos] = useState([]);

  // useEffect(() => {
  //   const fetchproyectos = async () => {
  //     try {
  //       const data = await proyectoService.getproyectos();
  //       setProyectos(data);
  //     } catch (error) {
  //       console.error('Error fetching proyectos:', error);
  //     }
  //   };

  //   fetchproyectos();
  // }, []);

  const handleCardClick = (nombre) => {
    navigate(`/empleado/${encodeURIComponent(nombre)}`);
  };

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
          {proyectos.map((proyecto, index) => (
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

        <footer className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </footer>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ListProyectos;
