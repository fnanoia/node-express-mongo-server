const mongoose = require('mongoose');

//schema de MongoDB, plantilla de datos
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('User', userSchema);