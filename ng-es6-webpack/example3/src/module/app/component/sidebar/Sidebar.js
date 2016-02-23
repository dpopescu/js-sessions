import './Sidebar.scss';

const SidebarTemplate = require('./Sidebar.html');

class SidebarController {
    constructor() {
        this.navItems = [{
            name: 'Home',
            stateName:'App'
        }, {
            name: 'Profile',
            stateName: 'Profile'
        }, {
            name: 'Messages',
            stateName: 'Messages'
        }];
    }
}

export default {
    name: 'sidebar',
    controller: SidebarController,
    template: SidebarTemplate
}