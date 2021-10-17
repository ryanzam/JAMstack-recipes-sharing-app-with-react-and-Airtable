const {getRecipes, createRecipe, updateRecipe, deleteRecipe} = require('./crudRecipes')
//handlers
exports.handler = async (e) => {
    if(e.httpMethod === "GET"){
        return await getRecipes(e);
    } else if (e.httpMethod === "POST"){
        return await createRecipe(e);
    } else if (e.httpMethod === "PUT"){
        return await updateRecipe(e);
    } else if (e.httpMethod === "DELETE"){
        return await deleteRecipe(e);
    } else {
        return ({statusCode: 404 });
    }
}