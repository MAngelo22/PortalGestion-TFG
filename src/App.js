import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx"; // Ruta del login
import Dashboard from "./components/Catalogo.jsx"; // Ruta del dashboard
import Empleados from "./components/ListEmpleados.jsx"; // Nueva página de empleados
import Navbar from "./components/NavBar.js"; // Barra de navegación

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />} {/* Muestra la barra de navegación solo si el usuario está autenticado */}
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/empleados" element={<Empleados />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
