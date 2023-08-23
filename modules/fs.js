// Módulo para manipular arquivos

const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error){
        console.log("Error: ", error)
        return
    }
    console.log("Pasta criada!")
    
})

// Criar arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'This is the content!', (error) => {
    if(error){
        return console.log("Error: ", error)
    }
    console.log("Pasta e arquivo criados!")

    // Adicionar à um arquvo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Esse é o conteúdo!', (error) => {
    if(error){
        return console.log("Error: ", error)
    }
    console.log("Você adicionou conteúdo à um arquivo!")
    })

    // Ler arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if(error) {
            return console.log("Error: ", error)
        }

        console.log("File content: ", data)
    })

})



