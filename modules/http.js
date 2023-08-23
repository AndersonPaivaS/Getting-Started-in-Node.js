const http = require('http');
const { stringify } = require('querystring');
const port = 8080;

const server = http.createServer((request, response) => {
    if(request.url == '/login') {
        response.writeHead(200, {
            "Content_Type": "text/html"
        })
        response.end('<h1> Login to the platform </h1>')
    }

    if(request.url == '/users'){
        const users = [
            {
                name: 'João Maria Ribeiro',
                age: 47
            }, 
            {
                name: 'Jorge Vicente da Silva',
                age: 21
        }]
        response.writeHead(200, {
            'Contente-Type': 'application/json'
        })

        response.end(JSON.stringify(users))
    }
})


server.listen(port, () => console.log(`O server está rodando na porta ${port}`))