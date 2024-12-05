import React from "react";
import LoginForm from "./components/LoginForm";  // Asegúrate de que la ruta de LoginForm sea correcta

const App = () => {
  return (
    <div className="App">
      <LoginForm />  {/* Aquí se debe renderizar el formulario de login */}
    </div>
  );
};

export default App;
