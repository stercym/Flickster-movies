import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/moviesAndSeries/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details-page">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '200px' }} />
      <p><strong>Writer:</strong> {movie.Writer}</p>
      <p><strong>Year of Release:</strong> {movie.Year}</p>
      <p><strong>Country:</strong> {movie.Country}</p>
      <p><strong>Type:</strong> {movie.Type}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Language:</strong> {movie.Language}</p>
      {movie.ComingSoon && <p className="coming-soon-badge">⚠️ COMING SOON: {movie.ComingSoon}</p>}

      {movie.Images && movie.Images.length > 0 && (
        <div>
          <h4>Additional Images:</h4>
          {movie.Images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Image ${index + 1}`} style={{ maxWidth: '100px', margin: '5px' }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;

