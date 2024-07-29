import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
//STEP 1: IMPORT JSON RECIPES FILE
import recipes from './recipes.json' assert { type: 'json' };; 
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
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
