import React, { useState } from 'react';
import FavoriteMovies from '../components/FavoriteMovies';

function MovieCard({ movie }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="movie-card">
            <div className="movie-header" onClick={toggleDetails}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                
            </div>
           <FavoriteMovies />
            {showDetails && (
                <div className="movie-details">
    <p><strong>Writer:</strong> {movie.Writer}</p>
    <p><strong>Year of Release:</strong> {movie.Year}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
                    <p><strong>Type:</strong> {movie.Type}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Directors:</strong> {movie.Director}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                    {movie.ComingSoon && <p className="coming-soon-badge">⚠️ COMING SOON: {movie.ComingSoon}</p>}

        {movie.Images && movie.Images.length > 0 && (
                        <div>
                            <h4>Additional Images:</h4>
                            {movie.Images.map((imgSrc, index) => (
                              <img key={index} src={imgSrc} alt={`${movie.Title} image ${index + 1}`} style={{ maxWidth: '100px', margin: '5px' }} />
                            ))}
                        </div>
                    )}
                </div>
            )}
           
        </div>
    );
}

export default MovieCard;
