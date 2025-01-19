import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./estilos/NavBar.css";
import logo from "../media/img/porrtalgestion_logo.png";
import userImg from "../media/img/perfil.png";
import Logout from "./Logout";
import axios from 'axios';

const Navbar = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({
    empleados: [],
    cursos: [],
    proyectos: []
  });
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const query = encodeURIComponent(searchTerm.trim());

      const [empleadosRes, cursosRes, proyectosRes] = await Promise.all([
        axios.get(`http://localhost:8085/api/empleado/buscar?nombre=${query}`, {
          withCredentials: true
        }),
        axios.get(`http://localhost:8085/api/curso/buscar?nombre=${query}`, {
          withCredentials: true
        }),
        axios.get(`http://localhost:8085/api/proyecto/buscar?nombre=${query}`, {
          withCredentials: true
        })
      ]);

      setSearchResults({
        empleados: empleadosRes.data || [],
        cursos: cursosRes.data || [],
        proyectos: proyectosRes.data || []
      });
      setShowResults(true);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
      setSearchResults({
        empleados: [],
        cursos: [],
        proyectos: []
      });
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setShowResults(false);
    }
  };

  const handleResultClick = (type, item) => {
    setShowResults(false);
    setSearchTerm("");
    navigate(`/${type}/${item.id}`);
  };

  const handleClickOutside = () => {
    setShowResults(false);
  };

  return (
    <header className="header">
      <a href="/dashboard">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar empleados, cursos o proyectos..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowResults(true)}
          />
          <button type="submit">🔍</button>
        </form>
        
        {showResults && (
          <div className="search-results">
            {searchResults.empleados?.length > 0 && (
              <div className="result-section">
                <h3>Empleados</h3>
                {searchResults.empleados.map(empleado => (
                  <div
                    key={empleado.id}
                    className="result-item"
                    onClick={() => handleResultClick('empleados', empleado)}
                  >
                    {empleado.nombre} {empleado.apellidos}
                  </div>
                ))}
              </div>
            )}
            
            {searchResults.cursos?.length > 0 && (
              <div className="result-section">
                <h3>Cursos</h3>
                {searchResults.cursos.map(curso => (
                  <div
                    key={curso.id}
                    className="result-item"
                    onClick={() => handleResultClick('cursos', curso)}
                  >
                    {curso.nombre}
                  </div>
                ))}
              </div>
            )}
            
            {searchResults.proyectos?.length > 0 && (
              <div className="result-section">
                <h3>Proyectos</h3>
                {searchResults.proyectos.map(proyecto => (
                  <div
                    key={proyecto.id}
                    className="result-item"
                    onClick={() => handleResultClick('proyectos', proyecto)}
                  >
                    {proyecto.nombre}
                  </div>
                ))}
              </div>
            )}
            
            {!searchResults.empleados?.length && 
             !searchResults.cursos?.length && 
             !searchResults.proyectos?.length && (
              <div className="no-results">No se encontraron resultados</div>
            )}
          </div>
        )}
      </div>
      <nav className="nav-links">
        <a href="/dashboard">Catálogo</a>
        <a href="/empleados">Empleados</a>
        <a href="/proyectos">Proyectos</a>
        <a href="/cursos">Cursos</a>
        <a href="/Contactanos">Sobre nosotros</a>
      </nav>
      <div className="user-profile">
        <Link to="/miperfil">
          <img src={userImg} alt="Usuario" className="user-img" />
        </Link>
        <span className="tooltip">Ir a tu perfil</span>
      </div>
      <Logout />
    </header>
  );
};

export default Navbar;
