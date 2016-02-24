import './Sidebar.scss';

const SidebarTemplate = require('./Sidebar.html');

class SidebarController {
    constructor() {
        this.navItems = [{
            name: 'Home',
            stateName:'App'
        }, {
            name: 'Inbox',
            stateName: 'Inbox'
        }, {
            name: 'Settings',
            stateName: 'Settings'
        }];
    }
}

export default {
    name: 'sidebar',
    controller: SidebarController,
    template: SidebarTemplate
}