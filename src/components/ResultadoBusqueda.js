import React from 'react';
import { Link } from 'react-router-dom';
import useFetchBooks from '../hooks/useFetchBooks';

const ResultadoBusqueda = ({ query }) => {
  const { books } = useFetchBooks();
  const results = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));

  if (results.length === 0) return <p>No se encontraron resultados.</p>;

  return (
    <div className="resultado-busqueda">
      {results.map(book => (
        <div key={book.id} className="resultado-busqueda__item">
          <img src={book.cover} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/libro/${book.id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default ResultadoBusqueda;
