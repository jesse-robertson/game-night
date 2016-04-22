import React from 'react';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import CenteredPagewide from '../components/CenteredPagewide';



const LogIn = ({login}) =>
    <CenteredPagewide>
        <h3>It's Dangerous To Go Alone!</h3>
        <Button bsSize = "large" bsStyle = "primary">
            <FontAwesome name="facebook"/>
            &nbsp;
            &nbsp;
            Take This!
        </Button>
    </CenteredPagewide>;
    
export default LogIn;

