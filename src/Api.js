import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8085',
});

export default api;


// El código de encima hace la conexión con el backend y el de debajo es para probarlo 


// import React, { useEffect, useState } from 'react';
// import api from './api';

// function Usuarios() {
//   const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     // Solicitar datos al backend
//     api.get('/api/usuarios')
//       .then((response) => {
//         setUsuarios(response.data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener usuarios:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {usuarios.map((usuario) => (
//           <li key={usuario.id}>
//             {usuario.nombre} - {usuario.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Usuarios;
