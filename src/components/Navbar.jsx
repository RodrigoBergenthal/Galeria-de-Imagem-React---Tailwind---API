import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchTerm, handleSearch, authors, handleAuthorChange }) => {
  return (
    <nav className="p-4 bg-gradient-to-r from-red-900 to-red-600 shadow-lg rounded">
      <div className="container mx-auto flex justify-between items-center">
        <input
          type="text"
          placeholder="Procurar por imagem"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-500 text-black" // Ajustado para ocupar 100% da largura na tela pequena
        />
        <select
          value={searchTerm}
          onChange={handleAuthorChange}
          className="ml-2 border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-500 text-black" // Ajustado para ocupar 100% da largura na tela pequena
        >
          <option value="">Todos os Autores</option>
          {authors.map(author => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <Link to="/saved" className="ml-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
            FAVORITOS
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
