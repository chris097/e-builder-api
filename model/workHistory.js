const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workHistory = new Schema({
    title: {
        type: String,
        required: [true, 'title is required.']
    },
    employer: {
        type: String,
        required: [true, 'employer is required.']
    },
    city: {
        type: String,
        required: [true, 'city is required.']
    },
    state: {
        type: String,
        required: [true, 'state is required.']
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

module.exports = mongoose.model("WorkHistory", workHistory)