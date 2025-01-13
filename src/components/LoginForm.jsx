import React, { useState } from "react";
import axios from "axios";
import logo from "../media/img/porrtalgestion_logo.png"; // Importa el logo directamente
import "./estilos/estilo.css";

const LoginForm = ({ onLoginSuccess }) => {
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8085/api/usuario/login",
        {
          username: username,
          contrasena: password,
        },
        { withCredentials: true } // Esto es para las cookies de sesión se envíen y reciban
      );
      if (response.status === 200) {
        setMessage("Login exitoso!");
        onLoginSuccess();
      }
    } catch (error) {
      console.error("Error en el login", error);
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div className="main-container-logo">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <img
            src={logo}
            alt="Portal Gestión Logo"
            style={{
              maxWidth: "150px",
              height: "auto",
            }}
          />
        </div>
        <h1 className="title-gradient">PORTAL GESTION</h1>
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              id="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
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
