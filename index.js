const { HelloWorld } = require('./helloWorld');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect')
dotenv.config();

//const helloWorld = new HelloWorld("Node.js")
//require('./modules/path')
//require('./modules/fs')
//require('./modules/http')
//require('./modules/express')


connectToDatabase()

//console.log(helloWorld.printTechnology())