import React         from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import NavHeader      from './NavHeader';
import AwesomeNavItem from './AwesomeNavItem';

const Navigation = ({
    showNavSections, 
    name, 
    headerClick, 
    groupRankingsClick, 
    myRankingsClick, 
    logout
}) =>
    <Navbar inverse>
        <NavHeader onClick = { headerClick }/>
        {showNavSections ? 
        <Navbar.Collapse>
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
        </Navbar.Collapse> : ''}
    </Navbar>;
    
export default Navigation;