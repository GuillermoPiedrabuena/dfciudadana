import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import ClientPanel from './clientPanelView/clientPanel.js';
import NewClientForm from './components/NewClientForm';
import docInputView from './views/docInputView/docInputView.js';

import {HookdeEfecto} from './components/hook';



const routing = (
  <Router>
    <div>
      <Route exact path="/" component={NewClientForm} />
      <Route path="/clientPanel" component={ClientPanel} />
    </div>
  </Router>
)



ReactDOM.render(<Provider store={store}>
    {routing}
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
