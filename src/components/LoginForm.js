import React, { useState } from 'react';
import './LoginForm.css';  // Asegúrate de que la ruta sea correcta

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === '1234') {
      setMessage('¡Login exitoso!');
    } else {
      setMessage('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <h1>Portal Gestión</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Correo:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo"
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>{message}</p>  {/* Muestra el mensaje de login */}
    </div>
  );
};

export default LoginForm;
