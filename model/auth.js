const mongoose = require("mongoose");
// const {isE} = require("validator");

const Schema = mongoose.Schema;

const authSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        minLength: [5, "minimum length should be 5"],
        required: [true, "email is required"],
        // validate: [isEmail, "invalid email"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "password is required."],
        minLength: [5, "password minimum lenght should be 5"]
    },
    token: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Auth", authSchema)