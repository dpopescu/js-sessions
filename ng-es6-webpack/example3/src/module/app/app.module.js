import Application from './Application';

import App from './component/app/App';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';

const app = new Application('testApp', []);

app.registerComponents([
    App,
    Header,
    Sidebar
]);

export default app;