import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const alreadyFavorite = favorites.some((fav) => fav.id === movie.id);
    setIsFavorite(alreadyFavorite);
  }, [movie.id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); 
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="movie-card">
        <div className="movie-header">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
        </div>

        <div
          onClick={handleFavoriteClick}
          style={{
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: isFavorite ? 'red' : 'gray',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
          <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
