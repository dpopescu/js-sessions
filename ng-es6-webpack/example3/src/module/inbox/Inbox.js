import Module from 'core/Module';

export default class Inbox extends Module {
    config($urlRouterProvider, $stateProvider) {
        this.stateProvider = $stateProvider;
        this.registerStates(this._states);

        $urlRouterProvider.otherwise('/');
    }

    run() {
        console.log('run inbox module');
    }
}