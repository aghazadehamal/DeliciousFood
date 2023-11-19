import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, description }) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card-link">
      <div className="recipe-card">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-description">{description}</p>
        <img src="https://static.toiimg.com/photo/56868564.cms" alt={title} />
      </div>
    </Link>
  );
};

export default RecipeCard;
