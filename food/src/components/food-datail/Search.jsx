import React, { useState, useEffect } from 'react';
import './App.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
        const data = await response.json();

        if (data.meals) {
          setSearchResults(data.meals);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="App">
      <h1>Meal Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter a meal name"
      />

      <div className="search-results">
        {searchResults.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
