import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
      const result = await axios.get(url);
      setRecipes(result.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
      <div className="App">
        <Header />
        <SearchBar onSearch={fetchRecipes} />
        <RecipeList recipes={recipes} />
      </div>
  );
};

export default App;