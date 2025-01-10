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
import Proyectos from "./components/proyecto/ListProyectos.jsx"; // Nueva página de proyectos
import Navbar from "./components/NavBar.js"; // Barra de navegación
import Cursos from "./components/curso/ListCursos.jsx";
import Contactanos from "./components/Contactanos.jsx"; // Importa la página de contacto

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
        />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
};

export default App;
