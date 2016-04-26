import React from 'react';
import {Navbar} from 'react-bootstrap';

import NavBrand from './NavBrand';
import NavSections from './NavSections';
import Hideable from './Hideable';


const Navigation = ({
    showNavSections, 
    name, 
    headerClick, 
    groupRankingsClick,
    myRankingsClick, 
    hamburgerClick,
    isCollapsed = undefined,
    logout
}) =>
    <Navbar inverse>
        <Navbar.Header>
            <NavBrand onClick = { headerClick }/>    
            <Navbar.Toggle onClick = { hamburgerClick }/>
        </Navbar.Header>
        
        <Navbar.Collapse in={!isCollapsed}>
            <Hideable hide={!showNavSections}>
                <NavSections groupRankingsClick={groupRankingsClick} 
                             myRankingsClick={myRankingsClick}
                             name={name}
                             logout={logout}/>
            </Hideable>    
        </Navbar.Collapse>
    </Navbar>
    
export default Navigation;