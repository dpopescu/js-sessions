import Module from 'core/Module';

class Application extends Module{
    config($urlRouterProvider, $stateProvider){
        this.stateProvider = $stateProvider;
        this.registerStates(this._states);

        $urlRouterProvider.otherwise('/');
    }

    run(){
        console.log('run');
    }
}

export default Application;