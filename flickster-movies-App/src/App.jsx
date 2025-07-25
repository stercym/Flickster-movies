import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import FavoriteMovies from './components/FavoriteMovies';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
import Help from "./components/Help";

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/moviesAndSeries')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 id="home-heading">Hello, here is our Movies Home Page</h1>
              <h1>Popular Movies</h1>
              <div className="movie-list">
                {filteredMovies.length > 0 ? (
                  filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                ) : (
                  <p>No movies found.</p>
                )}
              </div>
              <div id="about-section" className="about-section">
                <h2>About Flickster</h2>
                <p>
                  Flickster is your ultimate destination for sharing movie experiences. Whether you're a casual viewer or a hardcore movie buff, Flickster lets you rate, review, and explore films from all genres.
                </p>
                <p>
                  Our mission is to connect movie lovers around the world by giving them a simple, fun way to share their thoughts — one review at a time.
                </p>
              </div>
            </div>
          }
        />

        <Route path="/favorites" element={<FavoriteMovies />} />
        <Route path="/watchlist" element={<div>Watchlist</div>} />
        <Route path="/top-rated" element={<div>Top Rated</div>} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/login" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
