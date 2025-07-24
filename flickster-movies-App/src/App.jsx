import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import { useState, useEffect } from 'react'
import MovieCard from './Components/MovieCard'
import FavoriteMovies from './components/FavoriteMovies';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:3000/moviesAndSeries')
      .then(res => res.json())
      .then((data) => {
        setMovies(data);
      })
  }, []);// the empty dependecy array will prevent app component from rerendering


  return (
    <>
      <h1 id="home-heading">Hello, here is our Movies Home Page</h1>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <div>
        <h1>Popular Movies</h1>
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} image={movie.Poster} />


            ))
          ) : (
            <p>No movies found.</p>
          )}
          <FavoriteMovies favoriteMovies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
