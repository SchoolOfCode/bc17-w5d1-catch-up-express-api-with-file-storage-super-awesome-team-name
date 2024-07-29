import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
//STEP 1: IMPORT JSON RECIPES FILE
import recipes from "/Users/brishapatel/Documents/SoC/Week 5/bc17-w5d1-catch-up-express-api-with-file-storage-super-awesome-team-name/recipes.json";
const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
//RETURN RECIPES; 
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
