const mongoose = require('mongoose');
const { isEmail } = require('validator')

const Schema = mongoose.Schema;

const summarySchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required.']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required.']
    },
    profession: {
        type: String,
        required: [true, 'profession is required.']
    },
    phone: {
        type: String,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter a valid phone number'],
        required: true
    },
    city: {
        type: String,
        required: [true, 'city is required.']
    },
    state: {
        type: String,
        required: [true, 'state is required.']
    },
    country: {
        type: String,
        required: [true, 'country is required.']
    },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserInfo", summarySchema);