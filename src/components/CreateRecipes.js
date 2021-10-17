import React, { useEffect, useState } from "react";

const CreateRecipe = (props) => {
    const [recipes, setRecipes]  = useState([]);

    return <form id="form">
    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="email" class="form-control" id="title" placeholder="Delicious Sandwiches" />
    </div>
    <div class="mb-3">
        <label for="brief" class="form-label">Brief</label>
        <input type="email" class="form-control" id="brief" placeholder="quick sandwiches..." />
    </div>
    <div class="mb-3">
        <label for="ingredients" class="form-label">Ingredients</label>
        <textarea class="form-control" id="ingredients" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="formFile" class="form-label">Recipe image</label>
        <input class="form-control" type="file" id="formFile" />
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreateRecipe;