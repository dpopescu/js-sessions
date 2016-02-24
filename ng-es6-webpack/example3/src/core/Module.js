export default class Module {
    constructor(name = 'myApp', dependencies = []) {
        this.name = name;
        this.dependencies = dependencies;
        this._states = new Map();
        this._ngModule = angular.module(this.name, this.dependencies);
        this._ngModule.config(['$urlRouterProvider', '$stateProvider', this.config.bind(this)]);
        this._ngModule.run(['$rootScope', '$state', this.run.bind(this)]);
    }

    registerComponents(components){
        components.forEach((component)=>{
            this.registerComponent(component);
        });
    }

    registerComponent(componentClass){
        this._ngModule.component(componentClass.name, componentClass);
    }

    registerServices(services){
        services.forEach((service)=>{
            this.registerService(service);
        });
    }

    registerService(service){
        this._ngModule.service(service.name, service);
    }

    registerStates(states){
        states.forEach(state=>{
            this.registerState(state);
        })
    }

    registerState(state) {
        if(!this.stateProvider){
            this._states.set(state.name, state);
        } else {
            this._states.delete(state.name);
            this.stateProvider.state(state.name, state);
        }
    }
}