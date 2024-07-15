import React from 'react';
import ListaLibros from '../components/ListaLibros';

const Home = () => {
  return (
    <div className="home">
      <h1>Biblioteca Online</h1>
      <ListaLibros />
    </div>
  );
};

export default Home;
