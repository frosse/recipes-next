import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

interface Recipe {
  _id: string;
  name: string;
  description: string;
}

const Recipes = ({ data }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(data);

  const recipeList: ReactElement[] = recipes.map(recipe => {
    return (
      <Link key={recipe._id} href={`recipes/${recipe._id}`}>
        <div className="card">
          <h3>{recipe.name}</h3>
        </div>
      </Link>
    );
  });

  return <div className="grid">{recipeList}</div>;
};
export default Recipes;
