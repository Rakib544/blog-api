const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    { timeStamps: true }
)

module.exports = mongoose.modal('Category', CategorySchema)