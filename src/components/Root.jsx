// Libs
import React from 'react';
import {Provider} from 'react-redux';
import FacebookProvider from 'react-facebook';
import store from '../store';
import App from './App';

// Define Root Component
const Root = () => 
    <Provider store = { store }>
        <FacebookProvider appID="475809532592647">
            <App />
        </FacebookProvider>  
    </Provider>

// Export Root Component
export default Root;


// production: 475809532592647
// 583925968447669