import './index.scss';

import Application from './Application';

const app = new Application('testApp', [

]);

app.start();


angular.bootstrap(document, [app.name]);