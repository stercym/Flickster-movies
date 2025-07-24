import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // api goes here/ waiting for update
  };

  return (
    <Router>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<div> Home Page</div>} />
        <Route path="/favorites" element={<div> Favorite Movies</div>} />
        <Route path="/watchlist" element={<div> Watchlist</div>} />
        <Route path="/top-rated" element={<div> Top Rated</div>} />
        <Route path="/new-releases" element={<div> New Releases</div>} />
        <Route path="/login" element={<div> Login/Register</div>} />
      </Routes>
    </Router>
  );
}

export default App;
