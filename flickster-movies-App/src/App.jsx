import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import FavoriteMovies from './components/FavoriteMovies';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
import Help from "./components/Help";
import MovieDetails from './components/MovieDetails';
import About from './components/About';
import './App.css';

function App() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAbout, setShowAbout] = useState(false);

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

      <div className="main-content">
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
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/home" element={<Home showAbout={showAbout} />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>

      {location.pathname === "/" && <Footer />}
       {location.pathname === "/" && <About />}
    </>
  );
}

export default App;
