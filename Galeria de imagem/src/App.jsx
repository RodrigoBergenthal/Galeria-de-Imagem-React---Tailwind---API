// src/App.jsx
import React from 'react';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-4">
        <h1 className="bg-black text-white text-center py-16 text-3xl font-bold mb-4">Galeria de imagens API</h1>
        <ImageGallery />
      </div>
    </div>
  );
}

export default App;
