const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri')
    .join('ingredients as i', 'i.ingredient_id', 'ri.ingredient_id')
    .select('ingredient_name as ingredients', 'quantity')
    .where({ recipe_id })
    .first()
}

function getInstructions(recipe_id) {
    return db('recipes')
    .select('instructions')
    .where({ recipe_id })
    .first()
} 