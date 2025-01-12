import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx"; // Ruta del login
import Dashboard from "./components/Catalogo.jsx"; // Ruta del dashboard
import Empleados from "./components/empleado/ListEmpleados.jsx"; // Nueva página de empleados
import DetalleEmpleado from './components/empleado/DetalleEmpleado';
import Proyectos from "./components/proyecto/ListProyectos.jsx"; // Nueva página de proyectos
import CatProyectos from "./components/proyecto/CatalogoProyectos.jsx"; // Nueva página de Catalogos de proyectos
import Navbar from "./components/NavBar.jsx"; // Barra de navegación
import Cursos from "./components/curso/ListCursos.jsx";
import CatCursos from "./components/curso/CatalogoCurso.jsx"; // Nueva página de Catalogos de Cursos
import MisProyectos from "./components//misdatos/MisProyectos.jsx"; // Importa el componente de MisProyectos
import MisCursos from "./components//misdatos/MisCursos.jsx"; // Importa el componente de MisCursos
import MiPerfil from "./components/misdatos/MiPerfil"; // Ruta del componente MiPerfil
import Contactanos from "./components/Contactanos.jsx"; // Importa la página de contacto
import Perfil from "./components/Perfil.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            )
          }
        />+
        <Route path="/empleado/:id" element={<DetalleEmpleado />} />
        <Route path="/catCur" element={<CatCursos />} />
        <Route path="/catPro" element={<CatProyectos />} />
        <Route path="/miperfil" element={<MiPerfil />} />
        <Route path="/miscursos" element={<MisCursos />} />
        <Route path="/misProyectos" element={<MisProyectos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default App;
