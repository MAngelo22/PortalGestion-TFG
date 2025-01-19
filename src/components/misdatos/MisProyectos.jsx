import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"; // Importa Link para las rutas
import "./MisCursos.css"; // Archivo CSS para los estilos
import cursosImg from "../../media/img/mdc.png"; // Asegúrate de reemplazar esta ruta con la imagen correcta
import Footer from "../Footer";
import Navbar from "../NavBar";
import axios from "axios";
import Paginacion from "../utils/Paginacion";

const MisProyectos = (activeTab) => {
  // const navigate = useNavigate();
  const [proyectos, setProyectos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const offset = currentPage * itemsPerPage;
  const currentItems = proyectos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(proyectos.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get('http://localhost:8085/api/usuario/mis-proyectos',
      { withCredentials: true })
      .then(response => {
        console.log('Respuesta: ', response.data);

        setProyectos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los proyectos: ', error);
      });
  }, []);


  return (

    <div>
      <Navbar />
      <div className="mis-cursos-container">
        <h1 className="mis-cursos-title">Mis Proyectos</h1>
        <img src={cursosImg} alt="Ilustración de cursos" className="cursos-image" />
        <p className="cursos-description">Añade proyectos a tu perfil</p>
        <Link to="/catPro" className="btn-link">
          <button className="explorar-cursos-button">Explora el catálogo de cursos</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>

    </div>

    // <>

    //     <div className="mis-proyectos-content">
    //       <h1 className="mis-proyectos-title">Mis proyectos</h1>
    //       <div>
    //         {currentItems && (currentItems.map((proyecto, index) => (
    //           <div key={index}>
    //             <h2>{proyecto.nombre}</h2>
    //             <p>{proyecto.descripcion}</p>
    //             <p>{proyecto.categoria}</p>
    //           </div>
    //         )) || <img src={cursosImg} alt="Ilustración de proyectos" className="proyectos-image" />)}
    //         <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
    //       </div>
    //       <p className="proyectos-description">Añade formación a tu perfil</p>
    //       <Link to="/catPro" className="btn-link">
    //         <button className="explorar-proyectos-button">Explora el catálogo de proyectos</button>
    //       </Link>
    //     </div>

    // </>
  );
};

export default MisProyectos;
