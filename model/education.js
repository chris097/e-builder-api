const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const education = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    school_name: {
        type: String,
        required: [true, 'school name is required.']
    },
    degree: {
        type: String,
        required: [true, 'degree is required.']
    },
    program: {
        type: String,
        required: [true, 'program is required.']
    },
    start_date: {
        type: String,
        required: [true, 'graduation start date is required.']
    },
    end_date: {
        type: String,
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Education", education)