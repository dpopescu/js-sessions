import Application from './Application';

import App from './component/app/App';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';

import Home from './view/home/Home';

const app = new Application('testApp', [
    'ui.router'
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