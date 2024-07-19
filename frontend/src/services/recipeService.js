import axios from "axios";

const API_URL =
  "http://ec2-35-87-84-132.us-west-2.compute.amazonaws.com:8000/api/recipes/";

export const getRecipes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getRecipe = async (id) => {
  const response = await axios.get(`${API_URL}${id}/`);
  return response.data;
};

export const addRecipe = async (recipe) => {
  const response = await axios.post(API_URL, recipe);
  return response.data;
};
