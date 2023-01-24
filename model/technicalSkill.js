const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const technicalSkill = new Schema({
    name: {
        type: Array,
        required: [true, 'stack name is required.'],
    },
});

module.exports = mongoose.model("Skill", technicalSkill)