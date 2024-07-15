// src/components/DetalleLibro.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleLibro = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    // Carga  datos desde books.json  
    fetch('/books.json')
      .then(response => response.json())
      .then(data => {
        const libroEncontrado = data.find(libro => libro.id === parseInt(id));
        setLibro(libroEncontrado);
      })
      .catch(error => console.error('Error al cargar el libro:', error));
  }, [id]);

  if (!libro) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{libro.titulo}</h2>
      <p>Autor: {libro.autor}</p>
      <p>Descripción: {libro.descripcion}</p>
       
   
    </div>
  );
};

export default DetalleLibro;
