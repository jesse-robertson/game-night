import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router';

const NavHeader = ({onClick}) =>
    <Navbar.Header>
        <Navbar.Brand >
            <a href = "/" onClick = { e => {
                e.preventDefault();
                onClick && onClick(e);
            }}>
                The Brash Shmoes!
            </a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>;
        
export default NavHeader;