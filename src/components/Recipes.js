import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Recipe from "./Recipe";
const Recipes = (props) => {
    const [recipes, setRecipes]  = useState([]);

    useEffect(() => {
       async function getRecipes(){
            const response = await fetch("/api/recipes")
                                .then(res => res.json())
                                .then(data => data);
            setRecipes(response);
       } getRecipes();
    }, [])

    return <>
        {recipes?.length === 0 && <LoadingSpinner />}
       {recipes?.map((recipe, i) => <Recipe key={i} recipe={recipe} />)}
    </>
}

export default Recipes;