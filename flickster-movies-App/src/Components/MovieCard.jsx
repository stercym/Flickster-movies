import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies';

function MovieCard({ movie }) {
  return (
    <div className="movie-card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '200px' }} />
      <h3>{movie.Title}</h3>
      <p>Writer: {movie.Writer}</p>
      <p>Year of release: {movie.Year}</p>
      <p>Country: {movie.Country}</p>
      <p>Type: {movie.Type}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Directors: {movie.Director}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Language: {movie.Language}</p>
      <p>Plot: {movie.Plot}</p>

      <div>
        <h4>Additional Images:</h4>
        {movie.Images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${movie.Title} image ${index + 1}`} style={{ maxWidth: '100px', margin: '5px' }} />
        ))}
      </div>

      <FavoriteMovies />
    </div>
  );
}

export default MovieCard;
