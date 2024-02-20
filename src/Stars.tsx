import React from 'react';

interface StarRatingProps {
  count?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null; // Если count не является числом или находится вне диапазона от 1 до 5, возвращаем null
  }

  const stars: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <li key={i} className="star">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
          <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
      </li>
    );
  }

  return (
    <ul className="card-body-stars">
      {stars}
    </ul>
  );
}

export default StarRating;
