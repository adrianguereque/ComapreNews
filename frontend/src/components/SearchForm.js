import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchForm;