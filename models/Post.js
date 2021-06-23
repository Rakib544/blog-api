const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array, 
        required: true
    }
}, {
    timeStamps: true
}
)

module.exports = mongoose.model('Post', PostSchema)