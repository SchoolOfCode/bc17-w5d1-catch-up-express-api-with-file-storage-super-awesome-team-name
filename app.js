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
  res.status(200).json({
    Success : true ,
    Payload : recipes});
  }catch (error){
      res.status(400).json({
        Sucess : false,
        Payload :null
      })
    }
  })

  //Included the endpoint /:id to access idS?
  app.get('/api/recipes/:id',async (req,res) =>{
    try{
      //Fetching Data using the helper Function
      const recipesID = await getRecipeByID(req.params.id); // Get the ID from the request parameters and pass it to the function
      res.status(200).json({
        Success : true ,
        Payload : recipesID});
      }catch (error){
          res.status(400).json({
            Sucess : false,
            Payload :error.message
          });
        }
      })


    //PostHandler for adding New recipie

    app.post('/api/recipes',async (req,res)=>{
    try{
      const addedrecipe = await createRecipe(req.body);
      res.status(200).json({
        success : true ,
        Payload : addedrecipe
      });
    }catch (error){
        res.status(400).json({
          success : false,
          Payload :error.message
        })
      }

    }
   
  )

  //Patch handler for updating by ID

app.patch('/api/recipes/:id', async(req,res)=>

  const id =  req.params.id;
  const ActiveID = getRecipeByID(id);{
  try{
    res.status(200).json({
      sucess : true ,
      Payload : ActiveID
    });
  } catch (error){
    res.status(400).json({
      sucess :false,
      Payload : error.message
    })
  }

}


)

















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
