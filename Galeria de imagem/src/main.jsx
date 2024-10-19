import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import App from './App';
import SavedImages from './components/SavedImages'; // Adicione este componente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/saved" element={<SavedImages />} /> {/* Adicione esta rota */}
      </Routes>
    </Router>
  </React.StrictMode>
);
