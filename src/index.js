import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import './main.css';
import 'react-hint/css/index.css';

ReactDOM.render(<Router />, document.getElementById('app'));
registerServiceWorker();