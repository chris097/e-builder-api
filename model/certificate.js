const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const certificate = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, 'title is required.']
    },
    title_url: {
        type: String,
        required: [true, 'title_url is required.']
    }
});

module.exports = mongoose.model("Certificate", certificate);