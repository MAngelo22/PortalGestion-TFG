import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MisCursos from './MisCursos';
import MisProyectos from './MisProyectos';
import Navbar from '../NavBar';
import Footer from '../Footer';
import Paginacion from '../utils/Paginacion';

const GrupoPestañas = ({ currentItems, pageCount, handlePageClick, cursosImg }) => {
    const [activeTab, setActiveTab] = useState('cursos');

    return (
        <>
            <Navbar />
            <div className="mis-cursos-container">
                <div className="tabs">
                    <button onClick={() => setActiveTab('cursos')}>Mis cursos</button>
                    <button onClick={() => setActiveTab('proyectos')}>Mis proyectos</button>
                    <button onClick={() => setActiveTab('favoritos')}>Mis favoritos</button>
                </div>

                <MisCursos activeTab={activeTab} />

                <MisProyectos activeTab={activeTab} />

                {activeTab === 'favoritos' && (
                    <div className="mis-favoritos-content">
                        <h1 className="mis-cursos-title">Mis favoritos</h1>
                        <div>
                            {currentItems && (currentItems.map((curso, index) => (
                                <div key={index}>
                                    <h2>{curso.nombre}</h2>
                                    <p>{curso.descripcion}</p>
                                    <p>{curso.categoria}</p>
                                </div>
                            )) || <img src={cursosImg} alt="Ilustración de cursos" className="cursos-image" />)}
                            <Paginacion pageCount={pageCount} onPageChange={handlePageClick} />
                        </div>
                        <p className="cursos-description">Añade formación a tu perfil</p>
                        <Link to="/catCur" className="btn-link">
                            <button className="explorar-cursos-button">Explora el catálogo de cursos</button>
                        </Link>
                    </div>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default GrupoPestañas;