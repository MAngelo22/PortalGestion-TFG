import React from "react";
import "./estilos/NavBar.css";
import logo from "../media/img/porrtalgestion_logo.png";
import userImg from "../media/img/perfil.png";

const Navbar = ({ onLogout }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="search-bar">
        <input type="text" placeholder="Buscar empleados..." />
        <button>🔍</button>
      </div>
      <nav className="nav-links">
        <a href="/dashboard">Catálogo</a>
        <a href="/empleados">Empleados</a>
        <a href="/proyectos">Proyectos</a>
        <a href="/cursos">Cursos</a>
        <a href="/nosotros">Sobre nosotros</a>
      </nav>
      <div className="user-profile">
        <img src={userImg} alt="Usuario" />
        <button className="logout-button" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Navbar;
