const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
},
    {
        timeStamps: true
    }
)

module.exports = mongoose.model('Admin', AdminSchema)