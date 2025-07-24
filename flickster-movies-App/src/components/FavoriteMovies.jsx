

import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Make sure you have react-icons installed


function FavoriteMovies({ favoriteMovies }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <>
      {/* <h2>Favorite Movies</h2>
      <div className="movie-grid">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div> */}
       {/* Enables one to click on the favorite Heart Icon */}
      <div onClick={handleFavoriteClick} style={{ cursor: 'pointer', fontSize: '1.5rem', color: isFavorite ? 'red' : 'gray' }}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
        <span style={{ marginLeft: '0.5rem' }}>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
      </div>
    </>
  );
}

export default FavoriteMovies;
