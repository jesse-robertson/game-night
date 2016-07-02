import React from 'react';
import {connect} from 'react-redux';
import { Login } from 'react-facebook';


import FacebookButton from './FacebookButton';
import {
    facebookLoginFailure, 
    facebookLoginSuccess
} from '../../store/action/creators';

// Wrap the designed button with the react-facebook login tag
const wrappedFacebookButton =  ({onSubmit}) =>
    <Login scope="email" fields={['first_name', 'gender']} onSubmit={onSubmit} >
        <FacebookButton />
    </Login>

const s2p = null;
const d2p = {
    onSubmit: (err, user) => {
        console.log(user.profile.id);
        if(err) return facebookLoginFailure(err)
        const {first_name, id, gender} = user.profile; 
        return facebookLoginSuccess(first_name, id, gender);
    } 
};

export default connect(s2p, d2p)(wrappedFacebookButton);