// components/NewReleases.jsx
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function NewReleases() {
  const [movies, setMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch('https://flickster-movies-server.onrender.com/moviesAndSeries')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);

        // Get current year
        const currentYear = new Date().getFullYear();

        // Filter movies from current year and last year
        const filtered = data.filter((movie) => {
          const year = parseInt(movie.Year);
          return year >= currentYear - 1;
        });

        setRecentMovies(filtered);
      });
  }, []);

  return (
    <div>
      <h2>🎉 New Releases</h2>
      {recentMovies.length > 0 ? (
        <div className="movie-list">
          {recentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No recent movies found.</p>
      )}
    </div>
  );
}

export default NewReleases;
