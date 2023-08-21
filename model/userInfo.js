const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;

const summarySchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'fullname is required.']
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
    portfolio: {
        type: String,
        required: [true, 'portfolio is required.']
    },
    address: {
        type: String,
        required: [true, 'address is required.']
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