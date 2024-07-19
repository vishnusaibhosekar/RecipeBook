import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../services/recipeService";
import images from "../assets/images";

const RecipeList = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getRecipes();
      setRecipes(result);
    }
    fetchData();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Recipe List</h1>
      <div className="row">
        {filteredRecipes.map((recipe, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={images[recipe.image] || recipe.image}
                alt={recipe.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <Link to={`/recipes/${index + 1}`} className="btn btn-primary">
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
