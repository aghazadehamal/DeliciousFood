import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/fakeApi.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.recipes.find((r) => r.id.toString() === id);
        setRecipe(foundRecipe);

        console.log("foundRecipe:", foundRecipe);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  if (!recipe) {
    return (
      <div>
        <p>
          Yemek tarifi bulunamadı! Lütfen geri dönün veya başka bir tarife göz
          atın.
        </p>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      {!recipe ? (
        <div className="not-found">
          <p>
            Yemek tarifi bulunamadı! Lütfen geri dönün veya başka bir tarife göz
            atın.
          </p>
        </div>
      ) : (
        <div className="recipe-content">
          <img
            src="https://static.toiimg.com/photo/56868564.cms"
            alt={recipe.title}
          />
          <h2>{recipe.title}</h2>
          <div className="ingredients">
            <h3>Malzemeler:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="steps">
            <h3>Adımlar:</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
