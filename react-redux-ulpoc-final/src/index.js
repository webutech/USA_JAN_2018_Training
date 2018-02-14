import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store=createStore(allReducers); // immutable store -- users

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
