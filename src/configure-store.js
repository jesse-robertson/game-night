import {createStore} from 'redux';
import reducer from './reducer';

export default function configureStore(initialState) {
    
    const devToolsExtension = window.devToolsExtension || (() => undefined);
                                     
    // Create Redux Store
    const store = createStore( 
        reducer,
        initialState,
        devToolsExtension()
    );
    
    // Reducer Hot Reload
    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextRootReducer = require('./reducer/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    
    return store;
}