
import React, { useState } from 'react';

const BuscarLibro = ({ libros, setResultadoBusqueda }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
     
    const resultados = libros.filter(libro =>
      libro.titulo.toLowerCase().includes(query.toLowerCase()) ||
      libro.autor.toLowerCase().includes(query.toLowerCase()) ||
      libro.descripcion.toLowerCase().includes(query.toLowerCase())
    );
    
    setResultadoBusqueda(resultados);
  };

  return (
    <div className="buscar-libro">
      <h1>Buscar Libros</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar por título, autor, etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default BuscarLibro;
