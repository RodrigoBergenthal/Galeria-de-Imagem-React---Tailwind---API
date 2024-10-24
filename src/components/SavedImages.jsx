import React from 'react';
import { Link } from 'react-router-dom'; 

const SavedImages = () => {
  const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

  return (
    <div className="container mx-auto p-4 bg-gray-800 rounded shadow-lg" style={{ backgroundColor: 'black' }}>
      <h1 className="text-3xl font-bold mb-4 text-center text-white">FAVORITAS</h1>
      {savedImages.length === 0 ? (
        <p className="text-center text-gray-300">SEM FAVORITAS</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedImages.map(image => (
            <div key={image.id} className="shadow-lg rounded-lg overflow-hidden">
              <img src={image.download_url} alt={image.author} className="w-full h-auto" />
            </div>
          ))}
        </div>
      )}
      {/*  botão de voltar para a página principal */}
      <Link to="/">
        <button className="mt-4 block mx-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
          VOLTAR
        </button>
      </Link>
    </div>
  );
};

export default SavedImages;
