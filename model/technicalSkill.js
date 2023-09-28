const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const technicalSkill = new Schema({
    name: [{
        type: String,
        required: [true, 'name is required.']
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model("Skill", technicalSkill);