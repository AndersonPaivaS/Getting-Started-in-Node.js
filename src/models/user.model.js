const mongoose = require('mongoose')

// Todos os campos que o usuário irá ter dentro do DB
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    }
})


const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;