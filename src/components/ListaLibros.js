import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaLibros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch('/books.json');
        if (!response.ok) {
          throw new Error('Error al cargar los libros');
        }
        const data = await response.json();
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
      }
    };

    fetchLibros();
  }, []);

  return (
    <div>
      <h2>Lista de Libros</h2>
      <ul>
        {libros.map(libro => (
          <li key={libro.id}>
            <Link to={`/libro/${libro.id}`}>
              <h3>{libro.titulo}</h3>
            </Link>
            <p>Autor: {libro.autor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaLibros;
