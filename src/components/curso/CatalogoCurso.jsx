import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CatCur.css";
import Navbar from "../NavBar";
import Footer from "../Footer";
import axios from "axios";

const CatalogoCurso = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener cursos
  const obtenerCursos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8085/api/curso/all',
        { withCredentials: true });
      setCursos(response.data);
    } catch (error) {
      setError('Error al obtener los cursos');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCursos();
  }, []);

  const handleCardClick = (curso) => {
    navigate(`/curso/${curso.id}`, { state: { curso } });
  };

  return (
    <>
      <Navbar />
      <div className="body-container">
        {loading && <div className="loading-overlay">Cargando...</div>}
        {error && <div className="error-message">{error}</div>}
        
        <main className="cards-container">
          {cursos.map((curso) => (
            <div 
              key={curso.id} 
              className="card"
              onClick={() => handleCardClick(curso)}
            >
              <img 
                src={curso.foto || '/default-course.jpg'} 
                alt={curso.nombre} 
              />
              <h4>{curso.nombre}</h4>
              <p>{curso.descripcion}</p>
              <span className="badge">{curso.nivelExperiencia}</span>
              <div className="rating">
                {"★".repeat(curso.estrellas)}
                {"☆".repeat(5 - curso.estrellas)}
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default CatalogoCurso;
