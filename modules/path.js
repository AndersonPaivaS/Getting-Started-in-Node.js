const path = require("path");

// Exibe o nome do arquivo atual
console.log(path.basename(__filename));

// Mostra o diretório atual
console.log(path.dirname(__filename));

// Exibe a extensão do arquivo
console.log(path.extname(__filename));

// Cria um objeto Path
console.log(path.parse(__filename));

// Cria um caminho com uma junção dos mesmos
console.log(path.join(__dirname, "example", "example.txt"))