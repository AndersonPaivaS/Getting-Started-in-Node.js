const express = require('express');
const app = express();
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

app.listen(port, () => console.log(`Server rodando na porta ${port}`))