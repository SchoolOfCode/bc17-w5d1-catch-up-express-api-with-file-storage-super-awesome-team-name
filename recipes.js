import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
//STEP 1: IMPORT JSON RECIPES FILE
import recipes from './recipes.json' assert { type: 'json' };import { error } from "node:console";
; 
const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
//RETURN RECIPES; 
return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
const foodID = recipes.find(({ id }) => id === requestId);

if (foodID) {
    return foodID;
  }

  throw new Error(`No astronaut with ${foodID} found.`);
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
    recipes.push(newRecipe);
    return newRecipe 


}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(requestedid, updatedRecipe) {
 const index = recipes.findIndex(({ id })) => id === requestedid 
 if (index === -1){
    throw new error( `No Recipe with ID ${requestedid} found.`)
 }  
 recipes[index] = {...recipes[index], ...updatedRecipe}

return recipes[index]



}


export async function updateAstronautById(requestId, updates) {
    console.log(requestId, updates, astronauts);
    const index = astronauts.findIndex(({ id }) => id === requestId);
    console.log("incex", index);
    if (index === -1) {
      throw new Error(`No astronaut with ID ${requestId} found.`);
    }
  
    astronauts[index] = { ...astronauts[index], ...updates };
  
    return astronauts[index];
  }







// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
