import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipe } from "../services/recipeService";
import images from "../assets/images";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getRecipe(id);
      setRecipe(result);
    }
    fetchData();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5 recipe-detail">
      <h1 className="text-center mb-4">{recipe.title}</h1>
      <div className="text-center">
        <img
          src={images[recipe.image] || recipe.image}
          className="img-fluid recipe-image"
          alt={recipe.title}
        />
      </div>
      <div className="mt-4 d-flex justify-content-center time-servings">
        <div className="me-4">
          <strong>Prep Time:</strong> {recipe.prepTime}
        </div>
        <div className="me-4">
          <strong>Cook Time:</strong> {recipe.cookTime}
        </div>
        <div className="me-4">
          <strong>Total Time:</strong> {recipe.totalTime}
        </div>
        <div>
          <strong>Servings:</strong> {recipe.servings}
        </div>
        <div>
          <strong>Rating:</strong>{" "}
          {Array.from({ length: recipe.rating }, (_, i) => (
            <span key={i}>★</span>
          ))}
          {Array.from({ length: 5 - recipe.rating }, (_, i) => (
            <span key={i}>☆</span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h4>Ingredients</h4>
        <ul className="ingredients-list">
          {recipe.detailedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4>Directions</h4>
        <ol className="instructions-list">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <Link to="/" className="btn btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;
