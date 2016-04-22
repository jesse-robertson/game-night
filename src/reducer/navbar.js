import {TOGGLE_NAVBAR, LOCATION_CHANGE} from '../constants/actions.js';
import mapToReducer from './mapToReducer';

const initialNavbar = {
    isCollapsed: true
};

export default mapToReducer(initialNavbar, {
    [TOGGLE_NAVBAR]  : navbar => Object.assign({},navbar,{isCollapsed: !navbar.isCollapsed}),
    [LOCATION_CHANGE]: navbar => Object.assign({},navbar,{isCollapsed: true})
});