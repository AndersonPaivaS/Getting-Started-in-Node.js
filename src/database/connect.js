const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.kl2odkb.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Conectado ao banco de dados com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
};

module.exports = connectToDatabase;