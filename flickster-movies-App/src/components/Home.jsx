import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import './Home.css';

function Home({ movies, filteredMovies, onSearch }) {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  const firstName = userData?.firstName || "User";

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="home-container">
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="content">
        <h2>Welcome {firstName}!</h2>
        <p>This is your personal dashboard.</p>

        <SearchBar onSearch={onSearch} />

        <h2 id ="popularHeading">Popular Movies</h2>
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
    </div>
  );
}

export default Home;

