import React, { ReactElement, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

interface Recipe {
    _id: string;
    name: string;
    description: string;
}

const Recipes = ({data}) => {
    const [recipes, setRecipes] = useState<Recipe[]>(data);

    const recipeList: ReactElement[] = recipes.map(recipe => {
        return (<div key={recipe._id}>{recipe.name}</div>)
    });

    return <>{recipeList}</>

}
export default Recipes;