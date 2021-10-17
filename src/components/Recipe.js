import React, { useEffect, useState } from "react";

const Recipe = ({recipe}) => {
    return <>
      <div className="card">
      <div class="card-header">
          Ratings : {recipe.Rating} / 5
      </div>
      <img src={recipe.imageURL[0].url} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <h6 className="card-text">{recipe.brief}</h6>
        <p className="card-text">Ingredients: {recipe.ingredients}</p>
        <p className="card-text">{recipe.description}</p>
      </div>
      <div className="card-footer">
          <cite title="Source Title">Posted by : {recipe.lastmodifiedby.name}, {recipe.Created.split("T")[0]}</cite>
      </div>
      <div className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="#" className="btn btn-secondary">Edit</a>
          <a href="#" className="btn btn-danger">Delete</a>
        </li>
      </div>
    </div>
    </>
}

export default Recipe;