import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../media/img/porrtalgestion_logo.png";
import "./estilos/estilo.css";

const LoginForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
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
        { withCredentials: true }
      );

      if (response.status === 200 && response.data) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userUsername', response.data.username);
        setMessage("Login exitoso!");
        onLoginSuccess();
        navigate('/dashboard');
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
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
              className="input-field"
              required
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
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Iniciar Sesión
          </button>
          {message && <p className={message.includes("exitoso") ? "success-message" : "error-message"}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
