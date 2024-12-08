import React from "react";
import "./estilos/Empleados.css";
import Navbar from "./NavBar.js"; // Importamos el Navbar

const empleados = [
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
    descripcion: "Ingeniero de software especializado en inteligencia artificial.",
    nivel: "Experto",
    estrellas: 4,
    foto: "/path/to/lucas.jpg",
  },
];

const Empleados = () => {
  return (
    <div className="empleados-container">
        <Navbar />
      

      <aside className="filters">
        <h3>Sector</h3>
        <label><input type="checkbox" /> Banca (124)</label>
        <label><input type="checkbox" /> Industria (378)</label>
        <h3>Experiencia</h3>
        <label><input type="checkbox" /> Principiante (124)</label>
        <label><input type="checkbox" /> Intermedio (318)</label>
        <label><input type="checkbox" /> Experto (278)</label>
        <h3>Temática</h3>
        <label><input type="checkbox" /> Desarrollo web (124)</label>
        <label><input type="checkbox" /> JavaScript (378)</label>
        <label><input type="checkbox" /> WordPress (278)</label>
      </aside>

      <main className="cards-container">
        {empleados.map((empleado, index) => (
          <div key={index} className="card">
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

      <footer className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </footer>
    </div>
  );
};

export default Empleados;
