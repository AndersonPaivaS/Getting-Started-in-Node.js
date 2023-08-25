const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();
app.use(express.json());

const port = 8080


app.get("/home", (req, res) => {
    res.contentType('text/html')
    res.status(200).send("<h1>Inicializing server with Express</h1>")
})

app.get("/users", (req, res) => {
    const users = [
        {
            name: 'João Maria Ribeiro',
            age: 47
        }, 
        {
            name: 'Jorge Vicente da Silva',
            age: 21
    }]
    res.status(200).json(users)
})

app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user)
    } catch(error) {
        res.status(500).send(error.message)
    }
})

app.listen(port, () => console.log(`Server rodando na porta ${port}`))