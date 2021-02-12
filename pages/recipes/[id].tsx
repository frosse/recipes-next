import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const getRecipe = async () => {
        const data = await fetch(`/api/recipes/${router.query.id}`)
        const recipe = await data.json()
        setName(recipe.name);
        setDesc(recipe.description);
    }
    const test = () => {
        getRecipe();
    }

    useEffect(test, []);
    return (<div className="container">
        <h1>{name}</h1>
        <p style={{whiteSpace: "pre-wrap"}}>{desc}</p>
    </div>)
}

export default Page;