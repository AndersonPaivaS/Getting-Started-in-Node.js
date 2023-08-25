const { HelloWorld } = require('./helloWorld');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect')
dotenv.config();

//const helloWorld = new HelloWorld("Node.js")
//require('./modules/path')
//require('./modules/fs')
//require('./modules/http')

connectToDatabase()

require('./modules/express')

//console.log(helloWorld.printTechnology())