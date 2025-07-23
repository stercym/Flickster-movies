
import React from 'react';

function MovieCard({ movie }) {

  
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Writer: {movie.Writer}</p>
      <p>Year of release: {movie.Year}</p>
      <p>Country: {movie.Country}</p>
      <p>Type: {movie.Type}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Directors: {movie.Director}</p>
      <p>Genre: {movie.Genre}</p>
    </div>
  );
}

export default MovieCard;