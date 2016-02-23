import './Header.scss';

const HeaderTemplate = require('./Header.html');

class HeaderController {
    constructor() {
        this.appTitle = 'Angular test app';
    }
}

export default {
    name: 'header',
    controller: HeaderController,
    template: HeaderTemplate
}