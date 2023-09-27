// models/ImageData.js
const mongoose = require('mongoose');

const ImageDataSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    result: {
        type: Object,  // ya phir jo bhi type ho
        required: true
    },
    user_id: {
        type: String, 
        required: true
    }
}
, {
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    paranoid: true,
}
);

module.exports = mongoose.model('ImageData', ImageDataSchema);
