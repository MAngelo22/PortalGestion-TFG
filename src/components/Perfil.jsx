import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Perfil = (id) => {
  const navigate = useNavigate();
  const [miPerfil, setPerfil] = useState([]); // comentado hasta quitar la constante de arriba

  useEffect(() => {
    axios.get(`http://localhost:8085/api/usuario/${id}`)
      .then(response => {
        console.log('Respuesta: ', response);
        setPerfil(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los cursos:', error);
      });
  }, []);



  const handleCardClick = (nombre) => {
    navigate(`/perfil/${encodeURIComponent(nombre)}`);
  };


  return (
    <>
      <div className="empleados-container">
        <main className="cards-container">
          <img src={miPerfil.foto} alt={miPerfil.nombre} />
          <h4>{miPerfil.nombre}</h4>
          <p>{miPerfil.descripcion}</p>
          <span className="badge">{miPerfil.nivelExperiencia}</span>
          <div className="rating"></div>
          {"★".repeat(miPerfil.estrellas)}
          {"☆".repeat(5 - miPerfil.estrellas)}

          <button className="fav-button">♡</button>

        </main >
      </div >
      {/* <Footer /> */}
    </>
  );
};

export default Perfil;
