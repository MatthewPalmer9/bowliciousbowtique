import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageProducts from './reducers/manageProducts';

import './tailwind.output.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(manageProducts, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();


