import React from 'react';

function FavoriteMovies() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteMovies;
