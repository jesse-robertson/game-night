import {combineReducers} from 'redux';
import * as ReactRouterRedux from 'react-router-redux';

import user           from './user';
import navbar         from './navbar';
import entity         from './entity';
import selectedGameId from './selectedGameId';
import search         from './search';
const  routing = ReactRouterRedux.routerReducer;

export default combineReducers({
    routing,
    user,
    navbar,
    entity,
    selectedGameId,
    search
});