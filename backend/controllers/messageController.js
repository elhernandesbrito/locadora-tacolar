const Message = require("../models/Message");

const createMessage = async (req, res) => {
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message) {
            return res.status(400).json({
                message: "Todos os campos são obrigatórios.",
            });
        }

        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Email inválido.",
            });
        }

        const newMessage = await Message.create({
            name,
            email,
            message,
        });

        res.status(201).json({
            message: "Mensagem enviada com sucesso!",
            data: newMessage,
        });

    }catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Erro interno no servidor"
        });
    }
};

module.exports = {createMessage};