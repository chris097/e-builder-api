const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    url: {
        type: String
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)