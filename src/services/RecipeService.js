// src/services/RecipeService.js
import axios from 'axios';

const API_URL = 'http://example.com/api/recipes';

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('API fetch error:', error);
    return [];
  }
};
