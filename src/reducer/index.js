import {combineReducers} from 'redux';
import * as ReactRouterRedux from 'react-router-redux';

import user from './user';

const routing = ReactRouterRedux.routerReducer;

export default combineReducers({
    user,
    routing
});