import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import LogIn from '../pages/LogIn';
import Group from '../pages/Group';
import Mine from '../pages/Mine';
import configureStore from '../configure-store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

const initialState = {user:{name:'jesse'}};
const store = configureStore(initialState, browserHistory);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => 
    <Provider store = { store }>
        <Router history = { history }>
          <Route path = "/" component = { App }>
            <Route path = "login" component = { LogIn } />
            <Route path = "group" component = { Group } />
            <Route path = "mine" component = { Mine } />
          </Route>
        </Router>
    </Provider>;

export default Root;