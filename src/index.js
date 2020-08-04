import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './tailwind.output.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


