import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('love'));
registerServiceWorker();
