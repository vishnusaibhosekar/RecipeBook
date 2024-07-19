import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../services/recipeService";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [detailedIngredients, setDetailedIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [image, setImage] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [servings, setServings] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleAddIngredientField = () => {
    setDetailedIngredients([...detailedIngredients, ""]);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...detailedIngredients];
    newIngredients[index] = value;
    setDetailedIngredients(newIngredients);
  };

  const handleAddInstructionField = () => {
    setInstructions([...instructions, ""]);
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      detailedIngredients,
      instructions,
      image,
      prepTime,
      cookTime,
      totalTime,
      servings,
      rating: parseInt(rating, 10),
    };

    await addRecipe(newRecipe);

    setTitle("");
    setDetailedIngredients([""]);
    setInstructions([""]);
    setImage("");
    setPrepTime("");
    setCookTime("");
    setTotalTime("");
    setServings("");
    setRating("");

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Detailed Ingredients</label>
          {detailedIngredients.map((ingredient, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                className="form-control"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddIngredientField}
          >
            Add Ingredient
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          {instructions.map((instruction, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                className="form-control"
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddInstructionField}
          >
            Add Instruction
          </button>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prepTime" className="form-label">
            Prep Time
          </label>
          <input
            type="text"
            className="form-control"
            id="prepTime"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cookTime" className="form-label">
            Cook Time
          </label>
          <input
            type="text"
            className="form-control"
            id="cookTime"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalTime" className="form-label">
            Total Time
          </label>
          <input
            type="text"
            className="form-control"
            id="totalTime"
            value={totalTime}
            onChange={(e) => setTotalTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="servings" className="form-label">
            Servings
          </label>
          <input
            type="text"
            className="form-control"
            id="servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating (1-5)
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
