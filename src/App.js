
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import RentBook from './pages/RentBook';
import ExtendRent from './pages/ExtendRent';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import ListaLibros from './components/ListaLibros';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libro/:id" element={<BookDetail />} />
          <Route path="/libros" element={<ListaLibros />} />
          <Route path="/alquiler" element={<RentBook />} />
          <Route path="/extender-alquiler" element={<ExtendRent />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

