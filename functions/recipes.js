const getRecipes = require('./getRecipes')
//handlers
exports.handler = async (e) => {
    if(e.httpMethod === "GET"){
        return await getRecipes(e);
    }
}