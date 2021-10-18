import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Recipe = (props) => {
  const {recipe, notify} = props;
  const history = useHistory();

  const deleteRecipe = async (id) => {
    try {
      await fetch("/api/recipes", {
        method: "DELETE", body: JSON.stringify({id})
      });
      notify(true, "Recipe deleted", "info")
      window.location.reload(false);
    } catch(err) {       
      notify(true, "Error occured", "danger")
    }
  }

  const editRecipe = () => {
    history.push({pathname: '/new', state: {recipe}});
  }

    return <>
          <Card>
            <Card.Header>Ratings : {recipe.Rating} / 5</Card.Header>
            <Card.Img variant="top" src={!recipe ? recipe?.imageURL[0]?.url : ""} />
            <Card.Body>
              <Card.Title>{recipe.Title}</Card.Title>
              <Card.Text>{recipe.brief}</Card.Text>
              <Card.Text>Ingredients : {recipe.ingridents}</Card.Text>
              <Card.Text>Description : {recipe.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => editRecipe()} variant="secondary"><i class="bi bi-pencil"></i> Edit</Button>
              <Button onClick={()=> deleteRecipe(recipe.id)} variant="danger"><i class="bi bi-trash"></i> Delete</Button>
            </Card.Footer>
    </Card>
    </>
}

export default Recipe;