import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import AdComparison from './components/AdComparison';
import { searchAds } from './services/api';
import './App.css';

function App() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await searchAds(query);
      setResults(data);
    } catch (err) {
      setError('Failed to fetch ads. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ad Comparison</h1>
      </header>
      <main>
        <SearchForm onSearch={handleSearch} />
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {results && <AdComparison results={results} />}
      </main>
    </div>
  );
}

export default App;