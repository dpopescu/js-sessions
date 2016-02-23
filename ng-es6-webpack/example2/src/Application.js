class Application {
    constructor(name = 'Default application'){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    start(){
        console.log(`Hello from ${this.name}`);
    }
}

export default Application;