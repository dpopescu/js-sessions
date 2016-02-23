class Application {
    constructor(name = 'myApp', dependencies = []){
        this.name = name;
        this.dependencies = dependencies;
        this._ngModule = angular.module(this.name, this.dependencies);
    }

    registerComponents(components){
        components.forEach((component)=>{
            this.registerComponent(component);
        });
    }

    registerComponent(componentClass){
        this._ngModule.component(componentClass.name, componentClass);
    }
}

export default Application;