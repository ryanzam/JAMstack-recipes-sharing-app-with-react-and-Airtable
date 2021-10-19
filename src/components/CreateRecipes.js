import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import { useLocation, useHistory } from "react-router-dom";

const CreateRecipe = () => {
    const location = useLocation();
    const history = useHistory();

    const rec = !location.state ? null : location.state.recipe;
    const [title, setTitle]  = useState(!rec ? "" : rec.title);
    const [ingredients, setIngredients]  = useState(!rec ? "" : rec.ingredients);
    const [brief, setBrief]  = useState(!rec ? "" : rec.brief);
    const [imageURL, setImageURL]  = useState(!rec ? null : rec.imageURL);
    const [description, setDescription] = useState(!rec ? "" : rec.description)
    const [notification, setNotification] = useState({show: false, msgType: '', message: ''});

    const reset = () => {
        setTitle("")
        setBrief("")
        setIngredients("")
        setDescription("")
    }

    const onCloseNotification =() => {
        setNotification({show: false, message: "", msgType: ""})
    }

    const submitRecipe = async(e) => {
        e.preventDefault();
        console.log({title, brief, ingredients,imageURL,description})
        try{
            let method = rec ? "PUT" : "POST";
            let body = JSON.stringify({title, brief, ingredients,imageURL,description});
            await fetch('/api/recipes', {
                method: method,
                body: body,
            });
            reset();
            setNotification({show: true, message: "New recipe posted!", msgType: "success"});
            history.push({pathname: '/all'});
        } catch(err) {
            setNotification({show: true, message: err.message, msgType: "danger"});
        }        
    }

    return <>
    {notification.show && <Notification onClose={onCloseNotification} msgType={notification.msgType} message={notification.message}/>}
    <form id="form" onSubmit={submitRecipe}>
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
        <label for="formFile" className="form-label">Recipe image</label>
        <input className="form-control" type="url" id="formFile" onChange={(e)=> setImageURL(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary">{!rec ? "Post" : "Update"}</button>
  </form>
  </>
}

export default CreateRecipe;