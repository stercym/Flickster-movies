import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 Flickster movies</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorite Movies</Link></li>
        <li><Link to="/new-releases">New Releases</Link></li>
        <li><Link to="/login">Login/Register</Link></li>
         <Link to="/help">Help</Link>
         <a href="#about-section">About</a>
      </ul>
    </nav>
  );
};

export default Navbar;
