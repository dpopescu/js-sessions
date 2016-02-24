import Settings from './Settings';
import SettingsPanel from './view/settingsPanel/SettingsPanel';

const settings = new Settings('settings', [
    'ui.router'
]);

settings.registerStates([
    {
        name: 'Settings',
        url: '/settings',
        views:{
            'content@':SettingsPanel
        }
    }
]);

export default settings;