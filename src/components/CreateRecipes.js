import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import { useLocation } from "react-router-dom";

const CreateRecipe = () => {
    const location = useLocation();
    const rec = !location.state ? null : location.state.recipe;
    console.log(location)
    const [title, setTitle]  = useState(!rec ? "" : rec.title);
    const [ingredients, setIngredients]  = useState(!rec ? "" : rec.ingredients);
    const [brief, setBrief]  = useState(!rec ? "" : rec.brief);
    const [imageURL, setImageURL]  = useState(!rec ? null : rec.imageURL);
    const [description, setDescription] = useState(!rec ? "" : rec.description)
    const [rating, setRating] = useState(!rec ? 0 : rec.Rating)
    const [notification, setNotification] = useState({show: false, msgType: '', message: ''});

    const reset = () => {
        setTitle("")
        setBrief("")
        setIngredients("")
        setRating(0)
        setDescription("")
    }

    const onCloseNotification =() => {
        setNotification({show: false, message: "", msgType: ""})
    }

    const submitRecipe = async(e) => {
        e.preventDefault()
        try{
            await fetch('/api/recipes', {
                method: "POST",
                body: JSON.stringify({title, brief, ingredients,imageURL,description, Rating:rating}),
            });
            reset();
            setNotification({show: true, message: "New recipe posted!", msgType: "success"});
        } catch(err) {
            setNotification({show: true, message: err.message, msgType: "danger"});
        }        
    }

    return <>
    {notification.show && <Notification onClose={onCloseNotification} msgType={notification.msgType} message={notification.message}/>}
    <form id="form" onSubmit={submitRecipe} encType="multipart/form-data">
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
        <label for="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" value={description}
            onChange={((e) => setDescription(e.target.value))} rows="3"></textarea>
    </div>
    <div className="mb-3">
        <label for="rating" className="form-label">Rating</label>
        <input className="form-control" type="number" value={rating} id="rating" max="5" min="1" onChange={(e)=> setRating(e.target.value)}/>
    </div>
    <div className="mb-3">
        <label for="formFile" className="form-label">Recipe image</label>
        <input className="form-control" type="file" id="formFile" onChange={(e)=> setImageURL(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary">{!rec ? "Post" : "Update"}</button>
  </form>
  </>
}

export default CreateRecipe;