import React from 'react';
import {connect} from 'react-redux';
import { Login } from 'react-facebook';


import FacebookButton from './FacebookButton';
import {
    facebookLoginFailure, 
    facebookLoginSuccess
} from '../store/action/creators';

// Wrap the designed button with the react-facebook login tag
const wrappedFacebookButton =  ({onSubmit}) =>
    <Login scope="email" fields={['first_name', 'gender']} onSubmit={onSubmit} >
        <FacebookButton />
    </Login>

const s2p = null;
const d2p = {
    onSubmit: (err, user) => err ? facebookLoginFailure(err) 
                                 : facebookLoginSuccess(user.profile.first_name) 
};

export default connect(s2p, d2p)(wrappedFacebookButton);