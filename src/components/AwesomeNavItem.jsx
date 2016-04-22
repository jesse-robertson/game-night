import React from 'react';
import {NavItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const AwesomeNavItem = ({
    iconName = 'flag', 
    onClick, 
    children = 'Font Awesome'
}) =>
    <NavItem href="" onClick = { e => {
            e.preventDefault(); 
            onClick && onClick(e);
    }} >
        <FontAwesome name = {iconName} />
        &nbsp;
        &nbsp;
        { children }
    </NavItem>;
    
export default AwesomeNavItem;