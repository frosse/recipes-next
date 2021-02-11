import React, { ReactElement, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

interface Recipe {
    _id: string;
    name: string;
    description: string;
}

const Recipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const getRecipes = async () => {
        const req = await fetch('http://localhost:3000/api/recipe')
        if (req.ok) {
            const data: Recipe[] = await req.json()
            setRecipes(data);
        }
    }

    const mapRecipesToState = () => {
        getRecipes();
    }

    const recipeList: ReactElement[] = recipes.map(recipe => {
        return (<div key={recipe._id}>{recipe.name}</div>)
    });

    useEffect(mapRecipesToState, []);

    return <>{recipeList}</>

}
export default Recipes;