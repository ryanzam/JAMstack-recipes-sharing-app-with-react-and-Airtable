const {table} = require('./airtableConfig')
// just for demo, better to keep these in separate files
module.exports = {
       getRecipes: async (e) => {
              try{
                     const recipes = await table.select().firstPage();
                     const formatRecipes = recipes.map((r) => ({id: r.id, ...r.fields}))
                     return { statusCode : 200, body: JSON.stringify(formatRecipes) }
              } catch(err) 
              { 
                     return {statusCode: 500, body: {}}
              }
       },

       createRecipe: async(e) => {
              const fields = JSON.parse(e.body);
              try{
                     const newRecipe = await table.create([{fields}]);
                     return {statusCode: 201, body: JSON.stringify(newRecipe)}
              } catch(err) 
              { 
                     return {statusCode: 500, body: {}}
              }

       },

       updateRecipe: async(e) => {
              const {id, ...fields} =JSON.parse(e.body);
              try{
                     const updatedRecipe = await table.update([{ id, fields}]);
                     return {statusCode: 200, body: JSON.stringify(updatedRecipe)}
              } catch(err) 
              { 
                     return {statusCode: 500, body: {}}
              }
       },

       deleteRecipe: async(e) => {
              const { id } = JSON.parse(e.body);
              try{
                     const deletedRecipe = await table.destroy(id);
                     return {statusCode:200, body: JSON.stringify(deletedRecipe)};
              } catch(err) 
              { 
                     return {statusCode: 500, body: {}}
              }
       }
}