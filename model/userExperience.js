const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userExperience = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    job_title: {
        type: String,
        required: [true, 'title is required.']
    },
    company: {
        type: String,
        required: [true, 'company is required.']
    },
    country: {
        type: String,
        required: [true, 'country is required.']
    },
    description: {
        type: String,
        required: [true, 'description is required.']
    },
    start_date: {
        type: String,
        required: [true, 'start date is required.']
    },
    end_date: {
        type: String
    },
    craeted_at: { type: Date, default: Date.now }
});

const userExperience2 = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    job_title: {
        type: String,
        required: [true, 'title is required.']
    },
    company: {
        type: String,
        required: [true, 'company is required.']
    },
    country: {
        type: String,
        required: [true, 'country is required.']
    },
    description: {
        type: String,
        required: [true, 'description is required.']
    },
    start_date: {
        type: String,
        required: [true, 'start date is required.']
    },
    end_date: {
        type: String
    },
    craeted_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("userExperienc2", userExperienc2)
module.exports = mongoose.model("userExperience", userExperience)