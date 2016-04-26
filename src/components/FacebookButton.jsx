import React from 'react';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const FacebookButton = () =>
    <Button bsSize="large" bsStyle="primary">
        <FontAwesome name="facebook"/>
        &nbsp;
        &nbsp;
        Log in with facebook
    </Button>

export default FacebookButton;