import React, { useState } from "react";
import logo from "../media/img/porrtalgestion_logo.png"; // Importa el logo directamente
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "1234") {
      setMessage("¡Login exitoso!");
    } else {
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div className="main-container">
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Portal Gestión Logo" className="logo" />
      </div>
      <h1 className="title-gradient">PORTAL GESTION</h1>
    </div>
  
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Iniciar Sesion
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  </div>
  
  );
                   
};

export default LoginForm;