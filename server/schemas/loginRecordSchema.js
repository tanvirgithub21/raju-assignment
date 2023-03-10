const mongoose = require('mongoose');

const loginRecordSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    provider: {
        type: String,
        require: true
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    loginRecords: [loginRecordSchema]
});

module.exports = userSchema;
