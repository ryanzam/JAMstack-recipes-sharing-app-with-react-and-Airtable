import React, { useEffect, useState } from "react";

const CreateRecipe = (props) => {
    const [title, setTitle]  = useState("");
    const [ingredients, setIngredients]  = useState("");
    const [brief, setBrief]  = useState("");
    const [image, setImage]  = useState(null);

    const reset = () => {
        setTitle("")
        setBrief("")
        setIngredients("")
    }

    const submitRecipe = async(e) => {
        e.preventDefault()
        await fetch('/api/recipes', {
            method: "POST",
            body: JSON.stringify({title, brief, ingredients, image}),
        })
        reset()
    }

    return <form id="form" onSubmit={submitRecipe}>
    <div class="mb-3">
        <label for="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={title}
            onChange={((e) => setTitle(e.target.value))} placeholder="Delicious Sandwiches" />
    </div>
    <div className="mb-3">
        <label for="brief" className="form-label">Brief</label>
        <input type="text" className="form-control" id="brief" value={brief}
            onChange={((e) => setBrief(e.target.value))} placeholder="quick sandwiches..." />
    </div>
    <div className="mb-3">
        <label for="ingredients" className="form-label">Ingredients</label>
        <textarea className="form-control" id="ingredients" value={ingredients}
            onChange={((e) => setIngredients(e.target.value))} rows="3"></textarea>
    </div>
    <div className="mb-3">
        <label for="formFile" className="form-label">Recipe image</label>
        <input className="form-control" type="file" id="formFile" onChange={(e)=> setImage(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreateRecipe;