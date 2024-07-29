import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(express.json());


//GETHANDLER for Recipies
app.get('/api/recipes',async (req,res) =>{
try{
  //Fetching Data using the helper Function
  const recipes = await getRecipes()
  res.status.json(200)({
    Success : True ,
    Payload : recipes});
  }catch (error){
      res.status.json(400)({
        Sucess : false,
        Payload :null
      })
    }
  })





// //app.get('/astronauts', async (req, res) => {
//   try {
//     const astronauts = await getAstronauts(); //// Fetch data using the helper function
//     res.json({success: true, payload: astronauts}); //Send successful JSON response
//   } catch (error) {
//     res.status(500).json({ success: false, payload: error.message }); // Handle errors
//   }
// }






app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
