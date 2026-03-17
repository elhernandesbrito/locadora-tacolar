const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O nome é obrigatório"],
        trim: true,
        minlength: 2
    },

    email: {
        type: String,
        required: [true, "O email é obrigatório"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Email inválido"]
    },

    message: {
        type: String,
        required: [true, "A mensagem é obrigatória"],
        trim: true,
        minlength: 5
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Message", messageSchema);