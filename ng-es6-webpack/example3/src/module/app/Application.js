class Application {
    constructor(name = 'myApp', dependencies = []){
        this.name = name;
        this.dependencies = dependencies;
        this._states = new Map();
        this._ngModule = angular.module(this.name, this.dependencies);
        this._ngModule.config(['$urlRouterProvider', '$stateProvider', this.config.bind(this)]);
        this._ngModule.run([this.run.bind(this)]);
    }

    config($urlRouterProvider, $stateProvider){
        this.stateProvider = $stateProvider;
        this.registerStates(this._states);

        $urlRouterProvider.otherwise('/');
    }

    run(){
        console.log('run');
    }

    registerComponents(components){
        components.forEach((component)=>{
            this.registerComponent(component);
        });
    }

    registerComponent(componentClass){
        this._ngModule.component(componentClass.name, componentClass);
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
            console.log(state);
            this.stateProvider.state(state.name, state);
        }
    }
}

export default Application;