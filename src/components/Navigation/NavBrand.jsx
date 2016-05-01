import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavBrand = ({onClick}) =>
    <Navbar.Brand > 
        <a href = "/" onClick = { e => {
            e.preventDefault();
            onClick && onClick(e);
        }}>
            The Brash Shmoes!
        </a>
    </Navbar.Brand>
export default NavBrand;