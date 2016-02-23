class Application {
    constructor(name = 'myApp', dependencies = []){
        this.name = name;
        this.dependencies = dependencies;
        this._ngRef = angular.module(this.name, this.dependencies);
    }

    start(){
        console.log(`Hello from ${this.name}`);
    }
}

export default Application;