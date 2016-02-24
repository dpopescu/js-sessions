import Module from 'core/Module';

class Application extends Module {
    config($urlRouterProvider, $stateProvider) {
        this.stateProvider = $stateProvider;
        this.registerStates(this._states);

        $urlRouterProvider.otherwise('/');
    }

    run($rootScope, $state) {
        $rootScope.$on('$stateNotFound', (event, state)=> {
            const stateName = state.to;
            if (stateName.startsWith('Settings')) {
                event.preventDefault();
                require.ensure(['module/settings/settings.module'], (require)=> {
                    const module = require('module/settings/settings.module').default;
                    module.register(this);
                    $state.go(state.to);
                });
            }
        });
    }
}

export default Application;