import React, { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";
import { Link } from "react-router-dom";
import spaghettiCarbonara from "../assets/images/Spaghetti Carbonara.webp";
import chickenCurry from "../assets/images/Chicken Curry.webp";
import pancakes from "../assets/images/Pancakes.webp";
import grilledCheese from "../assets/images/Grilled Cheese Sandwich.webp";
import caesarSalad from "../assets/images/Caesar Salad.webp";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipes();
      setRecipes(result);
    };

    fetchData();
  }, []);

  const getImage = (recipeTitle) => {
    switch (recipeTitle) {
      case "Spaghetti Carbonara":
        return spaghettiCarbonara;
      case "Chicken Curry":
        return chickenCurry;
      case "Pancakes":
        return pancakes;
      case "Grilled Cheese Sandwich":
        return grilledCheese;
      case "Caesar Salad":
        return caesarSalad;
      default:
        return "";
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Recipe List</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={getImage(recipe.title)}
                className="card-img-top"
                alt={recipe.title}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
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

export default Home;
