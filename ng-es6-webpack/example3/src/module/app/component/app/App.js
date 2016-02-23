import './App.scss';

const AppTemplate = require('./App.html');

class AppController {
    constructor(){

    }

    set test(value){
        console.log(value);
        this._test = value;
    }

    get test(){
        return this._test;
    }
}

export default {
    name: 'app',
    controller: AppController,
    template: AppTemplate
}