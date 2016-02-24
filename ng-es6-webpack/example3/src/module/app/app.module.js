import Application from './Application';

import App from './component/app/App';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';

import Home from './view/home/Home';

import inboxModule from 'module/inbox/inbox.module';

const app = new Application('testApp', [
    'ui.router',
    inboxModule.name
]);

app.registerComponents([
    App,
    Header,
    Sidebar
]);

app.registerStates([
    {
        name: 'App',
        url: '/',
        views: {
            'content@': Home
        }
    }
]);

export default app;