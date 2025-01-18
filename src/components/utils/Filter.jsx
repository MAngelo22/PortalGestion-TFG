import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <aside style={{ marginTop: '5%' }} className="filters">
      <h3>Sector</h3>
      <label>
        <input type="checkbox" /> Banca (124)
      </label>
      <label>
        <input type="checkbox" /> Industria (378)
      </label>
      <h3>Experiencia</h3>
      <label>
        <input type="checkbox" /> Principiante (124)
      </label>
      <label>
        <input type="checkbox" /> Intermedio (318)
      </label>
      <label>
        <input type="checkbox" /> Experto (278)
      </label>
      <h3>Temática</h3>
      <label>
        <input type="checkbox" /> Desarrollo web (124)
      </label>
      <label>
        <input type="checkbox" /> JavaScript (378)
      </label>
      <label>
        <input type="checkbox" /> WordPress (278)
      </label>
    </aside>
  );
};

export default Filter;
