import React from "react";
import { Link } from "react-router-dom";
import "./estilos/NavBar.css"; // Agrega estilos para el navbar
import logo from "../media/img/porrtalgestion_logo.png"; // Importa el logo directamente
import userImg from "../media/img/perfil.png"; // Importa el logo directamente

const Navbar = () => {
  return (
    <header className="header">
    <img src={logo} alt="Logo" className="logo" />
    <div className="search-bar">
      <input type="text" placeholder="Buscar empleados..." />
      <button>🔍</button>
    </div>
    <nav className="nav-links">
      <a href="/dashboard">Catalogo</a>
      <a href="/empleados">Empleados</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#cursos">Cursos</a>
      <a href="#nosotros">Sobre nosotros</a>
    </nav>
    <div className="user-profile">
      <img src={userImg} alt="Usuario" />
    </div>
  </header>
  );
};

export default Navbar;
