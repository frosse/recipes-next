import React, { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';

interface Recipe {
    _id: string;
    name: string;
    description: string;
}

const Recipes = ({ data }) => {
    const [recipes, setRecipes] = useState<Recipe[]>(data);

    const recipeList: ReactElement[] = recipes.map(recipe => {
        return (
            <div className="card" key={recipe._id}>
                <Link href={`recipes/${recipe._id}`}>
                    <h3>{recipe.name}</h3>
                </Link>
            </div>
        );
    });

    return <div className="grid">{recipeList}</div>

}
export default Recipes;