import React, { useEffect, useState } from "react";

const Recipes = (props) => {
    const [recipes, setRecipes]  = useState([]);

    const loadRecipes = async () => {
        try{
            const response = await fetch("/api/recipes");
            const recipes = await response.json()
            setRecipes(recipes)
        } catch(err){console.log(err)}
    }

    return <div>
        {loadRecipes()}
        all recipes
    </div>
}

export default Recipes;