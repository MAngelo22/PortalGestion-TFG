import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Si usas estilos globales
import App from './App';  // Importa el componente principal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Asegúrate de que este div esté presente en el HTML
);
