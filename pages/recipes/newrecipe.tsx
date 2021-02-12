import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

const NewRecipe = () => {
    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const res = await fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({name, desc})
        });
        const data = await res.json();
        setName("");
        setDesc("");
        router.push(`${data._id}`);
    }
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name:</label>
                <input value={name} onChange={e => setName(e.target.value)} />
                <label>Description:</label>
                <textarea value={desc} onChange={e => setDesc(e.target.value)}></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewRecipe;