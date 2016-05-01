import {applyMiddleware} from 'redux';

import websocket from './websocket';
import router from './router';

export default applyMiddleware(
    router, 
    websocket
);