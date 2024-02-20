import React from 'react';
import Stars from './Stars'; // Импортируем компонент Stars
import './App.css'; // Импортируем файл стилей

const App: React.FC = () => {
  return (
    <div className="movie-card">
      <img src="https://leonardo.osnova.io/d5d5feab-0a1a-fa64-fbc1-140579243e3c/-/preview/2900x/" alt="Movie Poster" />
      <div className="movie-details">
        <h2 className="movie-title">Movie Title</h2>
        <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="rating">
          <Stars count={3} />
        </div>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}

export default App;
