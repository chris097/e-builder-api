const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const certificate = new Schema({
    cert: [{
        title: {
            type: String,
            required: [true, 'title is required.']
        },
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cert"
        }
    }],
});

module.exports = mongoose.model("Certificate", certificate);