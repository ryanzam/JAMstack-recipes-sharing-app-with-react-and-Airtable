const {table} = require('./airtableConfig')

module.exports = async (e) => {
        const recipes = await table.select().firstPage();
        //const formatRecipes = recipes.map((r) => ({id: r.id, ...r.fields}))
        return { statusCode : 200, body: JSON.stringify(recipes) }
}