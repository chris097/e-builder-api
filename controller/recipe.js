const Recipe = require("../model/recipe");

exports.getRecipes = async(req, res) => {
    const recipe = await Recipe.find()
    res.status(200).json({ data: recipe, status: 200 })
};

exports.createRecipe = async (req, res) => {
    try {
        const { title, description, url } = req.body;
        const recipe = new Recipe({
            title: title,
            description: description,
            url: url,
            id: req._id
        })
        await recipe.save();
        res.status(201).json({message: 'Recipe was created successfully'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}