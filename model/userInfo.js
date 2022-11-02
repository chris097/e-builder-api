const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;

const summarySchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'firstName is required.']
    },
    last_name: {
        type: String,
        required: [true, 'lastName is required.']
    },
    profession: {
        type: String,
        required: [true, 'profession is required.']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'email is required.'],
        minLength: [5, "email minimum length should be 5"],
        validate: [isEmail, "email is invalid"]
    },
    phone: {
        type: String,
        // match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter a valid phone number'],
        required: [true, 'phone is required.']
    },
    street: {
        type: String,
        required: [true, 'street is required.']
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
    bio: {
        type: String, 
        maxLenght: 500,
        minLength: 50,
        required: [true, 'bio is required.']
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UserInfo", summarySchema);