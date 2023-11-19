import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("fakeApi.json")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const title = recipe.title || '';
    const ingredients = recipe.ingredients || [];
    const cuisine = recipe.cuisine || '';
    const cookingTime = recipe.cookingTime || Infinity;
  
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (searchTerm && !isNaN(searchTerm) && cookingTime <= parseInt(searchTerm))
    );
  });
  

  return (
    <div>
      <h1 className="page-title">Yemek Tarifleri</h1>
      <input
  type="text"
  placeholder="Ara..."
  value={searchTerm}
  onChange={handleSearchChange}
  className="search-bar" 
/>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
