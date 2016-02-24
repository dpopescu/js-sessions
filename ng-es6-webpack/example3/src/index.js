import './index.scss';

import app from './module/app/app.module';
//import settings from './module/settings/settings.module';

angular.bootstrap(document, [app.name]);
//angular.bootstrap(document, [settings.name]);