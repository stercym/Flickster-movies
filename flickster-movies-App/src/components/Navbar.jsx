import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬flickster-movies</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorite Movies</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/new-releases">New Releases</Link></li>
        <li><Link to="/login">Login/Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
