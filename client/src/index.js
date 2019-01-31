import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
, document.getElementById('root'));

serviceWorker.unregister();
