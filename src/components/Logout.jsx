import React, { useState } from "react";
import axios from "axios";
import "./estilos/estilo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8085/api/usuario/logout",
        { withCredentials: true } // Esto es para que las cookies de sesión se envíen y reciban
      );
      if (response.status === 200) {
        setMessage("Logout exitoso!");
        onLogoutSuccess();
      }
    } catch (error) {
      console.error("Error en el logout", error);
      setMessage("Error al cerrar sesión");
    }
  };

  const onLogoutSuccess = () => {

    // Eliminando las cookies que hemos creado antes para la sesión
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Redirect al login
    window.location.href = "/";
  };

  return (
    <>
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
      {message && <p>{message}</p>}
    </>
  );
};

export default Logout;
