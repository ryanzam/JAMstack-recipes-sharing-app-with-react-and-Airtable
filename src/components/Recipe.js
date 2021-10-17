import React, { useEffect, useState } from "react";

const Recipe = ({recipe}) => {

    return <div className="card text-center">
    <div class="card-header">
        Ratings : {recipe.Rating} / 5
    </div>
    <div className="card-body">
      <h5 className="card-title">{recipe.title}</h5>
      <h6 className="card-text">{recipe.brief}</h6>
      <p className="card-text">{recipe.ingredients}</p>
    </div>
    <div class="card-footer text-muted">{recipe.Created}</div>
  </div>
}

export default Recipe;