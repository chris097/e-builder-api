const express = require('express');
const { getRecipes, createRecipe } = require('../controller/recipe');
const router = express.Router()

router.get('/recipes', getRecipes);
router.post('/recipe', createRecipe)

module.exports = router;