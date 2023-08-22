
class HelloWorld {
    constructor(technology){
        this.technology = technology;
    }

    printTechnology(){
        return `Hello, world! Welcome to the universe of ${this.technology}`;
    }
}

module.exports = {
    HelloWorld,
}