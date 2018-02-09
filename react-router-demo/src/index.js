import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterComponent from './routerComponent.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterComponent />, document.getElementById('root'));
registerServiceWorker();
