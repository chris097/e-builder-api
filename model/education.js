const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const education = new Schema({
    school_name: {
        type: String,
        required: [true, 'school name is required.']
    },
    school_location: {
        type: String,
        required: [true, 'school location is required']
    },
    degree: {
        type: String,
        required: [true, 'degree is required.']
    },
    field: {
        type: String,
        required: [true, 'field of study is required.']
    },
    start_date: {
        type: String,
        required: [true, 'graduation start date is required.']
    },
    end_date: {
        type: String,
    },
    craeted_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Education", education)