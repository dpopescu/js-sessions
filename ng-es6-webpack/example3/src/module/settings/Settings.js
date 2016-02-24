import Module from 'core/Module';

export default class Settings extends Module{

    register(parentApp){
        this.stateProvider = parentApp.stateProvider;
        this.registerStates(this._states);
    }

    config($urlRouterProvider, $stateProvider) {
        this.stateProvider = $stateProvider;
        this.registerStates(this._states);

        $urlRouterProvider.otherwise('/');
    }

    run() {
        console.log('run settings module');
    }
}