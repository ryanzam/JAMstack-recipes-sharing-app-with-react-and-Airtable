import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Recipe from "./Recipe";
import Notification from "./Notification";

const Recipes = (props) => {
    const [recipes, setRecipes]  = useState([]);
    const [notification, setNotification] = useState({show: false, msgType: '', message: ''});

    useEffect(() => {
       async function getRecipes(){
            const response = await fetch("/api/recipes")
                                .then(res => res.json())
                                .then(data => data);
            setRecipes(response);
       } getRecipes();
    }, [])

    const onCloseNotification =() => {
        setNotification({show: false, message: "", msgType: ""})
    }

    const notify = (show, msg, msgType) => {
        setNotification({show: show, message: msg, msgType: msgType});
    }

    return <div className="recipes">
        {notification.show && <Notification onClose={onCloseNotification} msgType={notification.msgType} message={notification.message}/>}
        {recipes?.length === 0 && <LoadingSpinner />}
       {recipes?.map((recipe, i) => <Recipe key={i} recipe={recipe} notify={notify}/>)}
    </div>
}

export default Recipes;