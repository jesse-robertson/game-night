import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

import AwesomeNavItem from './AwesomeNavItem';

const NavSections = ({groupRankingsClick, myRankingsClick, logout, name}) =>
    <div>
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
    </div>
    
export default NavSections;