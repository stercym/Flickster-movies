import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search by title, actor, writer, year..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">  Search</button>
    </form>
  );
};

export default SearchBar;
