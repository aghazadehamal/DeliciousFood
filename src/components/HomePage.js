// HomePage.js
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Public klasöründeki fakeApi.json dosyasından veri çekme
    fetch('fakeApi.json')
      .then(response => response.json())
      .then(data => {
        setRecipes(data.recipes);
        console.log(data.recipes); // Verileri konsolda kontrol etmek için
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1 className="page-title">Yemek Tarifleri</h1>
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} description={recipe.description} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
