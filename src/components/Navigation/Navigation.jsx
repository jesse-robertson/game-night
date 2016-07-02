import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import NavBrand from './NavBrand';
import Show     from '../common/Show';


const LogOutButton = ({logOut}) => 
    <Button bsStyle="danger" 
            onClick={logOut} >
        Log Out
    </Button>

const Navigation = ({
    showLogOut = true,
    logOut = () => console.log('Navigation.logOut')
}) =>
    <Navbar inverse>
        <Navbar.Header>
            <NavBrand />    
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullRight>
                <Show show={showLogOut}>
                    <LogOutButton logOut={logOut}/>
                </Show>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
    
export default Navigation;