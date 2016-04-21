import React from 'react';
import {Provider} from 'react-redux';
import App from './App.js';
import configureStore from '../configure-store';

const initialState = { count: 0 };
const store = configureStore(initialState);

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}