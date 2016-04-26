import React from 'react';
import {connect} from 'react-redux';
import FacebookButton from '../../components/FacebookButton';
import FacebookProvider, { Login } from 'react-facebook';
import * as mapDispatchToProps from './action-creators';

const FacebookButtonContainer = ({onSubmit}) =>
    <FacebookProvider appID="475809532592647">
        <Login scope="email" onSubmit={onSubmit} >
            <FacebookButton />
        </Login>
    </FacebookProvider>  
    
export default connect(null, mapDispatchToProps)(FacebookButtonContainer);