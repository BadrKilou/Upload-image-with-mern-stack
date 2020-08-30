const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    photo: {
        type: Buffer,
        contentType: String,
    },
    createdAt:{
    type: Date,
    default: Date.now()
    }
})

PhotoSchema.methods.toJSON = function() {
    const result = this.toObject();
    delete result.photo;
    return result;
}

const Image = mongoose.model('Images', PhotoSchema)

module.exports = Image;