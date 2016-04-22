import {combineReducers} from 'redux';
import * as ReactRouterRedux from 'react-router-redux';

import user from './user';
import navbar from './navbar';

const routing = ReactRouterRedux.routerReducer;

export default combineReducers({
    routing,
    user,
    navbar
});