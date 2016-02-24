import './Home.scss';

const HomeTemplate = require('./Home.html');

class HomeController {
    constructor(){
        this.message = 'Home';
    }
}

export default {
    controller: HomeController,
    controllerAs: '$ctrl',
    template: HomeTemplate
}