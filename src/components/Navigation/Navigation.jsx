import React from 'react';
import {Navbar} from 'react-bootstrap';

import NavBrand from './NavBrand';
import NavSections from './NavSections';
import Hideable from '../Hideable';

const Navigation = ({
    showNavSections,
    showHamburger,
    name, 
    headerClick, 
    groupRankingsClick,
    myRankingsClick, 
    hamburgerClick,
    isCollapsed = undefined,
    logOut
}) =>
    <Navbar inverse>
        <Navbar.Header>
            <NavBrand onClick = { headerClick }/>    
            <Hideable hide={!showHamburger}>
                <Navbar.Toggle onClick = { hamburgerClick }/>
            </Hideable>
        </Navbar.Header>
        
        <Navbar.Collapse in={!isCollapsed}>
            <Hideable hide={!showNavSections}>
                <NavSections groupRankingsClick={groupRankingsClick} 
                             myRankingsClick={myRankingsClick}
                             name={name}
                             logout={logOut}/>
            </Hideable>    
        </Navbar.Collapse>
    </Navbar>
    
export default Navigation;