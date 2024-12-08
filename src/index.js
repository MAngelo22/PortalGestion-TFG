import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación de 'react-dom' a 'react-dom/client'
import './index.css';  // Si usas estilos globales
import App from './App.js';  // Importa el componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usa createRoot en lugar de render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
