import React, { useEffect, useState } from "react";
import "./MisCursos.css";
import cursosImg from "../../media/img/mdc.png";
import { Link } from 'react-router-dom';
import axios from "axios";
import Paginacion from "../utils/Paginacion";
import Footer from "../Footer";
import Navbar from "../NavBar";

const MisCursos = (activeTab) => {
  // const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const offset = currentPage * itemsPerPage;
  const currentItems = cursos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(cursos.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get('http://localhost:8085/api/usuario/mis-cursos',
      { withCredentials: true })
      .then(response => {
        console.log('Respuesta: ', response.data);

        setCursos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los cursos: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (

    <div>
      <Navbar />
      <div className="mis-cursos-container">
        <h1 className="mis-cursos-title">Mis cursos</h1>
        <img src={cursosImg} alt="Ilustración de cursos" className="cursos-image" />
        <p className="cursos-description">Añade formación a tu perfil</p>
        <Link to="/catCur" className="btn-link">
          <button className="explorar-cursos-button">Explora el catálogo de cursos</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
};
// <>

//     <div className="mis-cursos-content">
//       <h1 className="mis-cursos-title">Mis cursos</h1>
//       <div>
//         {currentItems && (currentItems.map((curso, index) => (
//           <div key={index}>
//             <h2>{curso.nombre}</h2>
//             <p>{curso.descripcion}</p>
//             <p>{curso.categoria}</p>
//           </div>
//         )) || <img src={cursosImg} alt="Ilustración de cursos" className="cursos-image" />)}
//         <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
//       </div>
//       <p className="cursos-description">Añade formación a tu perfil</p>
//       <Link to="/catCur" className="btn-link">
//         <button className="explorar-cursos-button">Explora el catálogo de cursos</button>
//       </Link>
//     </div>

// </>
//   );
// };

export default MisCursos;