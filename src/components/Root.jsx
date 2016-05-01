// Libs
import React from 'react';
import {Provider} from 'react-redux';
import FacebookProvider from 'react-facebook';

import store from '../store';
import Routes from './Routes';

// Define Root Component
const Root = () => 
    <Provider store = { store }>
        <FacebookProvider appID="475809532592647">
            <Routes store={store} />
        </FacebookProvider>  
    </Provider>;

// Export Root Component
export default Root;