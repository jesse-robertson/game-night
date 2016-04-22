import {compose, createStore, applyMiddleware} from 'redux';
import { routerMiddleware} from 'react-router-redux'

import reducer from './reducer';

export default function configureStore(initialState, browserHistory) {

    const middleware = routerMiddleware(browserHistory)
    
    const store = createStore(reducer, initialState, compose(
      applyMiddleware(middleware),
      window.devToolsExtension ? window.devToolsExtension() : x => x
    ));
    
    // Reducer Hot Reload
    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextRootReducer = require('./reducer/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    
    return store;
}