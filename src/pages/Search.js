import React, { useState } from 'react';
import BuscarLibro from '../components/BuscarLibro';
import ResultadoBusqueda from '../components/ResultadoBusqueda';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="search">
      <BuscarLibro setQuery={setQuery} />
      {query && <ResultadoBusqueda query={query} />}
    </div>
  );
};

export default Search;
