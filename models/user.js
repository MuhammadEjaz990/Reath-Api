const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
    imagePath: {
        type: String,
        required: true,
        default: '' // default value can be empty or some placeholder image URL
    },
    provider: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        default: null
    },
    otpExpire: {
        type: Date,
        default: null
    }
}
    , {
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        paranoid: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
