const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    imageDeleteUrl: {
        type: String,
        require: true,
    },
    author: {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            default: ""
        }
    },
    time: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            user: { type: String },
            time: { type: Date, default: Date.now },
        },
    ],
});


module.exports = postSchema