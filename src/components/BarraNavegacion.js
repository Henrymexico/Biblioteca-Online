import React from 'react';
import { Link } from 'react-router-dom';

const BarraNavegacion = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/buscar">Buscar Libros</Link>
      <Link to="/alquiler">Alquiler</Link>
      <Link to="/extender-alquiler">Extender Alquiler</Link>
    </nav>
  );
};

export default BarraNavegacion;
