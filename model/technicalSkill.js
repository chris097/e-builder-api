const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const technicalSkill = new Schema({
    name: [{
        name: {
            type: String,
            required: [true, 'name is required.']
        },
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "name"
        }
    }],
});

module.exports = mongoose.model("Skill", technicalSkill)