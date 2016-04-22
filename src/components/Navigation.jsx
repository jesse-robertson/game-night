import React         from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import NavBrand      from './NavBrand';
import AwesomeNavItem from './AwesomeNavItem';

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
        {showNavSections ? 
        <Navbar.Collapse in = {!isCollapsed}>
            <Nav>
                <AwesomeNavItem iconName = "users" 
                                onClick  = { groupRankingsClick } > 
                    Group Rankings 
                </AwesomeNavItem>
                <AwesomeNavItem iconName = "user" 
                                onClick  = { myRankingsClick } >
                    My Rankings 
                </AwesomeNavItem>
            </Nav>
            <Nav pullRight>
                <NavItem>
                    Hey {name}!!
                    
                </NavItem>
                <AwesomeNavItem iconName = "sign-out" 
                                onClick  = { logout } > 
                    Log Out 
                </AwesomeNavItem>
            </Nav>
        </Navbar.Collapse> : null}
    </Navbar>
    
export default Navigation;